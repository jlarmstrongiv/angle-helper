# Angle Helper

Helper functions to aid calculations with angles and degrees.

## Getting Started

### Installation

Install with [NPM](https://www.npmjs.com/package/angle-helper).

```Shell
npm install angle-helper
```

Install with Yarn.

```Shell
yarn add angle-helper
```

### Setup and Usage

#### Import the library

```js
const angle = require('angle-helper');

// or

const {
  toDegrees,
  toRadians,
  distance,
  distances,
  average,
  weightedAverage,
} = require('angle-helper');
```

#### Helper functions

```js
// convert to degrees
toDegrees(0.785398);

// convert to radians
toRadians(45);

// calculate distance
const targetAngle = 180;
distance(targetAngle, 45);

// calculate distances
const targetAngle = 180;
distances(targetAngle, [45, 50, 55]);

// calculate average
average([45, 50, 55, 60]);

// calculate weighted average
// weights do not have to add to 1
weightedAverage([45, 50, 55, 60], [0.2, 0.3, 0.2, 0.3]);
```

### License

MIT

### Change Log

#### 0.0.0

Publish package

#### 0.0.1 and 0.0.2

Fix distance formula when target angle < 90 and compared angles > 270.
