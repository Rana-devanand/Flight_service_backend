"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _require = require("../models/index"),
  Seat = _require.Seat,
  Sequelize = _require.Sequelize;
var _require2 = require("../models/index"),
  SeatTypes = _require2.SeatTypes;
var _require3 = require("sequelize"),
  Op = _require3.Op,
  fn = _require3.fn,
  col = _require3.col;
// const moment = require('moment');
var moment = require('moment-timezone');
var CreateFLightSeats_Repository = /*#__PURE__*/function () {
  function CreateFLightSeats_Repository() {
    _classCallCheck(this, CreateFLightSeats_Repository);
  }
  return _createClass(CreateFLightSeats_Repository, [{
    key: "generateSeats",
    value: function () {
      var _generateSeats = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(startDate, endDate, flightId, flightRecurrence, seatTypeId, totalSeats, seatsPerRow) {
        var seats, rowCount, Start_Date, End_Date, FLight_Recurrence, row, _col, response;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              seats = [];
              rowCount = Math.ceil(totalSeats / seatsPerRow);
              console.log("rowCount", rowCount);
              Start_Date = new Date(startDate);
              End_Date = new Date(endDate);
              FLight_Recurrence = parseInt(flightRecurrence);
            case 1:
              if (!(Start_Date <= End_Date)) {
                _context.n = 8;
                break;
              }
              console.log(Start_Date);
              row = 1;
              row;
            case 2:
              if (!(row <= rowCount)) {
                _context.n = 7;
                break;
              }
              _col = 1;
              _col;
            case 3:
              if (!(_col <= seatsPerRow)) {
                _context.n = 6;
                break;
              }
              _context.n = 4;
              return Seat.create({
                Flight_Date: Start_Date,
                flight_id: flightId,
                seat_type_id: seatTypeId,
                seat_number: "".concat(String.fromCharCode(64 + row)).concat(_col),
                is_Booked: false
              });
            case 4:
              response = _context.v;
              seats.push(response);
            case 5:
              _col++;
              _context.n = 3;
              break;
            case 6:
              row++;
              _context.n = 2;
              break;
            case 7:
              Start_Date.setDate(Start_Date.getDate() + FLight_Recurrence);
              _context.n = 1;
              break;
            case 8:
              return _context.a(2, seats);
          }
        }, _callee);
      }));
      function generateSeats(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
        return _generateSeats.apply(this, arguments);
      }
      return generateSeats;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data) {
        var seat_type, seats_per_row, total_seats, response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              console.log(data);
              _context2.n = 1;
              return SeatTypes.findByPk(data.seatClass);
            case 1:
              seat_type = _context2.v;
              seats_per_row = seat_type.dataValues.seats_per_row;
              total_seats = seat_type.dataValues.total_seats; // Generate seats for the given flight and seat type
              _context2.n = 2;
              return this.generateSeats(data.startDate, data.EndDate, data.flight, data.flightRecurrence, data.seatClass, total_seats, seats_per_row);
            case 2:
              response = _context2.v;
              return _context2.a(2, response);
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.error(_t);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 3]]);
      }));
      function create(_x8) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "getFlightSeatsByFlightId",
    value: function () {
      var _getFlightSeatsByFlightId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(flight_id, date) {
        var newDate, formattedDate, response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              newDate = new Date(date);
              formattedDate = newDate.toISOString().replace('T', ' ').slice(0, 19);
              _context3.n = 1;
              return Seat.findAll({
                where: {
                  flight_id: flight_id,
                  flight_Date: formattedDate
                }
              });
            case 1:
              response = _context3.v;
              return _context3.a(2, response);
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('Error fetching flight seats:', _t2);
              throw _t2;
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }));
      function getFlightSeatsByFlightId(_x9, _x0) {
        return _getFlightSeatsByFlightId.apply(this, arguments);
      }
      return getFlightSeatsByFlightId;
    }()
  }, {
    key: "getAllFlightsSeats",
    value: function () {
      var _getAllFlightsSeats = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return Seat.findAll();
            case 1:
              response = _context4.v;
              return _context4.a(2, response);
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              throw {
                Error: Error
              };
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }));
      function getAllFlightsSeats() {
        return _getAllFlightsSeats.apply(this, arguments);
      }
      return getAllFlightsSeats;
    }()
  }]);
}();
module.exports = CreateFLightSeats_Repository;