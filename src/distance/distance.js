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
  // reflex angle 180 < x < 360
  if (angle > 180) distance = 360 - angle;
  // absolute of angle for positive angle
  else if (angle < 0) distance = -angle;
  else if (angle < -180) return 360 + angle;
  // angle 0 < x < 180
  else distance = angle;

  return distance;
};
export default distance;
