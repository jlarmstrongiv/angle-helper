"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Calculates the distance between an angle and the target angle.
 * @param {number} targetAngle - Target angle in degrees
 * @param {number} angle - Angle in degrees
 * @returns {number} Distance between an angle and the target angle
 */
const distance = (targetAngle, angle) => {
  // rotate unit circle so that targetAngle is 0
  angle = angle - targetAngle;
  let distance;
  if (angle > 180) distance = 360 - angle; // reflex angle 180 < x < 360
  else if (angle < 0) distance = -angle; // absolute of angle for positive angle
    else distance = angle; // angle 0 < x < 180

  return distance;
};

var _default = distance;
exports.default = _default;