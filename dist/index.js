"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "average", {
  enumerable: true,
  get: function () {
    return _average.default;
  }
});
Object.defineProperty(exports, "toDegrees", {
  enumerable: true,
  get: function () {
    return _converter.toDegrees;
  }
});
Object.defineProperty(exports, "toRadians", {
  enumerable: true,
  get: function () {
    return _converter.toRadians;
  }
});
Object.defineProperty(exports, "distance", {
  enumerable: true,
  get: function () {
    return _distance.default;
  }
});
Object.defineProperty(exports, "distances", {
  enumerable: true,
  get: function () {
    return _distances.default;
  }
});
Object.defineProperty(exports, "weightedAverage", {
  enumerable: true,
  get: function () {
    return _weightedAverage.default;
  }
});

var _average = _interopRequireDefault(require("./average/average"));

var _converter = require("./converter/converter");

var _distance = _interopRequireDefault(require("./distance/distance"));

var _distances = _interopRequireDefault(require("./distances/distances"));

var _weightedAverage = _interopRequireDefault(require("./weightedAverage/weightedAverage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }