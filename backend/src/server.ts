import express from "express";
import dotenv from "dotenv";
import temperatureConverter from "./Converter/temperature.ts";
//import lengthConverter from "./Converter/length.js";
//import weightConverter from "./Converter/weigth.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/:type/:fromUnit/:toUnit/:value", (req: any, res: any) => {
  const { type, value, fromUnit, toUnit } = req.params;

  const obj = {
    type,
    value,
    fromUnit,
    toUnit,
    result: 0,
  };

  try {
    switch (type) {
      case "temperature":
        obj.result = temperatureConverter(fromUnit, toUnit, Number(value));
        break;
      /* comming soo */
      case "length":
        return res.status(501).json({
          status: 501,
          result: "feature coming soon",
        });

      case "weight":
        return res.status(501).json({
          status: 501,
          result: "feature coming soon",
        });

      default:
        return res.status(404).json({
          status: 404,
          result: "page not found",
        });
    }
  } catch (err: any) {
    return res.status(400).json({
      status: 400,
      result: err.message,
    });
  }

  return res.status(200).json(obj);
});
