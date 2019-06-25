import { toDegrees, toRadians, } from '../converter/converter';

/**
 * Calculates the average of an array of angles.
 * @param {number[]} angles - Angles in degrees
 * @returns {number} Average of angles
 */
const average = (angles) => {
  let sumSin = 0;
  let sumCos = 0;

  angles.forEach(angle => {
    const angleRadian = toRadians(angle);
    sumSin += Math.sin(angleRadian);
    sumCos += Math.cos(angleRadian);
  });

  const avgSin = sumSin / angles.length;
  const avgCos = sumCos / angles.length;

  if (avgCos < 0) return toDegrees(Math.atan(avgSin / avgCos)) + 180;
  else if (avgSin > 0) return toDegrees(Math.atan(avgSin / avgCos));
  else if (avgSin <= 0) return toDegrees(Math.atan(avgSin / avgCos)) + 360;
};
export default average;
