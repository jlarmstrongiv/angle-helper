"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _converter = require("../converter/converter");

/**
 * Calculates the average of an array of angles.
 * @param {number[]} angles - Angles in degrees
 * @returns {number} Average of angles
 */
const average = angles => {
  let sumSin = 0;
  let sumCos = 0;
  angles.forEach(angle => {
    const angleRadian = (0, _converter.toRadians)(angle);
    sumSin += Math.sin(angleRadian);
    sumCos += Math.cos(angleRadian);
  });
  const avgSin = sumSin / angles.length;
  const avgCos = sumCos / angles.length;
  if (avgCos < 0) return (0, _converter.toDegrees)(Math.atan(avgSin / avgCos)) + 180;else if (avgSin > 0) return (0, _converter.toDegrees)(Math.atan(avgSin / avgCos));else if (avgSin <= 0) return (0, _converter.toDegrees)(Math.atan(avgSin / avgCos)) + 360;
};

var _default = average;
exports.default = _default;