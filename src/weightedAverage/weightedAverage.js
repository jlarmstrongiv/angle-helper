import { toDegrees, toRadians, } from '../converter/converter';

/**
 * Calculates the weighted average of an array of angles.
 * @param {number[]} angles - Angles in degrees
 * @param {number[]} weights - Corresponding weights for angles
 * @returns {number} Weighted average of angles
 */
const weightedAverage = (angles, weights) => {
  if (angles.length !== weights.length) throw new Error('Angles and weights must correspond with each other with the same array length.');
  let sumSin = 0;
  let sumCos = 0;

  angles.forEach((angle, index) => {
    const angleRadian = toRadians(angle);
    sumSin += Math.sin(angleRadian) * weights[index];
    sumCos += Math.cos(angleRadian) * weights[index];
  });

  const sumWeights = weights.reduce((a, b) => a + b, 0);

  const avgSin = sumSin / sumWeights;
  const avgCos = sumCos / sumWeights;

  if (avgCos < 0) return toDegrees(Math.atan(avgSin / avgCos)) + 180;
  else if (avgSin > 0) return toDegrees(Math.atan(avgSin / avgCos));
  else if (avgSin <= 0) return toDegrees(Math.atan(avgSin / avgCos)) + 360;
};
export default weightedAverage;
