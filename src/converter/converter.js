/**
 * Converts and angle from radians to degrees
 * @param {number} angle - Angle in radians
 * @returns {number} Angle in degrees
 */
export const toDegrees = (angle) => {
  return angle * (180 / Math.PI);
};

/**
 * Converts an angle from degrees to radians
 * @param {number} angle - Angle in degrees
 * @returns {number} - Angle in radians
 */
export const toRadians = (angle) => {
  return angle * (Math.PI / 180);
};
