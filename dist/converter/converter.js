"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toRadians = exports.toDegrees = void 0;

/**
 * Converts and angle from radians to degrees
 * @param {number} angle - Angle in radians
 * @returns {number} Angle in degrees
 */
const toDegrees = angle => {
  return angle * (180 / Math.PI);
};
/**
 * Converts an angle from degrees to radians
 * @param {number} angle - Angle in degrees
 * @returns {number} - Angle in radians
 */


exports.toDegrees = toDegrees;

const toRadians = angle => {
  return angle * (Math.PI / 180);
};

exports.toRadians = toRadians;