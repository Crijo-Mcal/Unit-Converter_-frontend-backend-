import express from "express";
import dotenv from "dotenv";
import temperatureConverter from "./Converter/temperature.js";
import lengthConverter from "./Converter/length.js";
import weightConverter from "./Converter/weight.js";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use("/:type/:fromUnit/:toUnit/:value", (req, res, next) => {
    const { type, fromUnit, toUnit, value } = req.params;
    try {
        const validTypes = ["temperature", "length", "weight"];
        if (!validTypes.includes(type)) {
            throw new Error("invalid converter type");
        }
        if (!isNaN(Number(type))) {
            throw new Error("type coverted must be a string");
        }
        if (!isNaN(Number(fromUnit)) || !isNaN(Number(toUnit))) {
            throw new Error("unit coverted must be a string");
        }
        if (isNaN(Number(value))) {
            throw new Error("value mast be a number");
        }
        next();
    }
    catch (err) {
        return res.status(404).json({
            status: 404,
            result: err.message,
        });
    }
});
app.get(`/:type/:fromUnit/:toUnit/:value`, (req, res) => {
    let { type: type, value, fromUnit, toUnit } = req.params;
    const obj = {
        status: 200,
        type,
        fromUnit,
        toUnit,
        value,
        result: 0,
    };
    try {
        switch (type) {
            case "temperature":
                obj.result = temperatureConverter(fromUnit, toUnit, Number(value));
                break;
            case "length":
                obj.result = lengthConverter(fromUnit, toUnit, Number(value));
                break;
            case "weight":
                obj.result = weightConverter(fromUnit, toUnit, Number(value));
                break;
        }
    }
    catch (err) {
        return res.status(404).json({
            status: 404,
            resul: err.message,
        });
        return;
    }
    return res.status(200).json(obj);
});
app.listen(PORT, () => {
    console.log(`Your server is running`);
});
