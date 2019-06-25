"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Calculates the distance between angles and the target angle.
 * @param {number} targetAngle - Target angle in degrees
 * @param {number[]} angles - Array of angles in degrees
 * @returns {number[]} Distance between angles and the target angle
 */
const distances = (targetAngle, angles) => {
  // rotate unit circle so that targetAngle is 0
  angles = angles.map(angle => angle - targetAngle); // degree distance

  const distance = angles.map(angle => {
    if (angle > 180) return 360 - angle; // reflex angle 180 < x < 360
    else if (angle < 0) return -angle; // absolute of angle for positive angle
      else return angle; // angle 0 < x < 180
  });
  return distance;
};

var _default = distances;
exports.default = _default;