/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    let index = input.search(/[a-z]/i);
    let result = input.slice(0, index);
    //if index = 0, it means no num part was provided, so we need to set it to 1
    if (index === 0) {
      result = "1";
    }
    //if index=-1 it means no unit was provided, but we need to present the num part anyway
    if (index === -1) {
      result = input;
    }
    //validation for double fraction
    if (result.split(/\//).length > 2) return "invalid number";
    return eval(result);
  };

  this.getUnit = function(input) {
    let index = input.search(/[a-z]/i);
    var result = input.slice(index).toLowerCase();
    if (index === -1) return "no unit";
    result = result.toLowerCase();
    const validUnits = ["gal", "l", "mi", "km", "lbs", "kg"];
    if (validUnits.indexOf(result)===-1) return "invalid unit"
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = "";
    let retUnit = this.getReturnUnit(initUnit);
    if (initNum === "invalid number") result += "invalid number";
    if (retUnit === "invalid unit") {
      if (result === "") {
        result += "invalid unit";
      } else {
        result += " and unit";
      }
    }

    if (result !== "") return result;

    switch (retUnit) {
      case "gal":
        result = initNum / galToL;
        break;
      case "l":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum / lbsToKg;
        break;
      case "kg":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum / miToKm;
        break;
      case "km":
        result = initNum * miToKm;
        break;
    }
    return eval(result);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(
        initUnit
      )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };

    return result;
  };
}

module.exports = ConvertHandler;
