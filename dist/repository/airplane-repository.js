"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
  airplanes = _require.airplanes,
  schedule_list = _require.schedule_list;
var _require2 = require("sequelize"),
  Op = _require2.Op;
var ScheduleListRepository = require("../repository/schedule-flight-list-Repository");
var AirplaneRepository = /*#__PURE__*/function () {
  function AirplaneRepository() {
    _classCallCheck(this, AirplaneRepository);
    this.scheduleListRepository = new ScheduleListRepository();
  }
  return _createClass(AirplaneRepository, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        var CreateAirplane, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              console.log("Repository created", data);
              _context.n = 1;
              return airplanes.create(data);
            case 1:
              CreateAirplane = _context.v;
              return _context.a(2, CreateAirplane);
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("something went wrong creating Airplane", _t);
              throw _t;
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "deleteAirplane",
    value: function () {
      var _deleteAirplane = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(airplaneId) {
        var deletedAirplane, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              console.log("Repository deleted airplane");
              _context2.n = 1;
              return airplanes.destroy({
                where: {
                  id: airplaneId
                }
              });
            case 1:
              deletedAirplane = _context2.v;
              return _context2.a(2, deletedAirplane);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error("something went wrong on repository deleting Airplane", _t2);
              throw _t2;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      function deleteAirplane(_x2) {
        return _deleteAirplane.apply(this, arguments);
      }
      return deleteAirplane;
    }()
  }, {
    key: "airplaneById",
    value: function () {
      var _airplaneById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(airplaneId) {
        var getAirplaneById, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return airplanes.findByPk(airplaneId);
            case 1:
              getAirplaneById = _context3.v;
              return _context3.a(2, getAirplaneById);
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error("something went wrong on repository deleting Airplane", _t3);
              throw _t3;
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }));
      function airplaneById(_x3) {
        return _airplaneById.apply(this, arguments);
      }
      return airplaneById;
    }()
  }, {
    key: "allFLights",
    value: function () {
      var _allFLights = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(filter) {
        var getFilteredData, allAirports, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              if (!filter.Airline) {
                _context4.n = 2;
                break;
              }
              _context4.n = 1;
              return airplanes.findAll({
                where: {
                  Airline: _defineProperty({}, Op.substring, filter.Airline)
                }
              });
            case 1:
              getFilteredData = _context4.v;
              return _context4.a(2, getFilteredData);
            case 2:
              _context4.n = 3;
              return airplanes.findAll();
            case 3:
              allAirports = _context4.v;
              return _context4.a(2, allAirports);
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              console.error("something went wrong on repository fetching Airplane", _t4);
              throw _t4;
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 4]]);
      }));
      function allFLights(_x4) {
        return _allFLights.apply(this, arguments);
      }
      return allFLights;
    }()
  }, {
    key: "updateFlightByPk",
    value: function () {
      var _updateFlightByPk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id, data) {
        var flight, updatedFlight, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              console.log("repo data : ", data);
              _context5.n = 1;
              return airplanes.findByPk(id);
            case 1:
              flight = _context5.v;
              if (flight) {
                _context5.n = 2;
                break;
              }
              throw new Error("Flight not found");
            case 2:
              _context5.n = 3;
              return flight.update(data);
            case 3:
              updatedFlight = _context5.v;
              return _context5.a(2, updatedFlight);
            case 4:
              _context5.p = 4;
              _t5 = _context5.v;
              console.error("Something went wrong on repository updating Airplane", _t5);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 4]]);
      }));
      function updateFlightByPk(_x5, _x6) {
        return _updateFlightByPk.apply(this, arguments);
      }
      return updateFlightByPk;
    }()
  }, {
    key: "fetchFilterFlightData",
    value: function () {
      var _fetchFilterFlightData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(filter) {
        var flight, i, flights, _i, response, flight_id, flightResponse, _t6, _t7;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              console.log("Fetching in Repo ", filter);
              _context6.n = 1;
              return airplanes.findAll({
                where: {
                  Departure: filter.Departure,
                  Arrival: filter.Arrival
                  // Remark : filter.Date
                }
              });
            case 1:
              flight = _context6.v;
              // console.log(flight)
              i = 0; // for (const element of flight) { 
              //      // console.log(element.flight_id);
              //      let response = await this.scheduleListRepository.getScheduleFlights(element.flight_id, filter.Date)
              //      // console.log(response);
              //      let flight_id = response[0].flight_id;
              //      let flightResponse  = await this.getFlightById(flight_id);
              //      if(flightResponse){
              //           console.log("hook");
              //           flights.push(flightResponse);
              //      }else{
              //           console.log("Flight not found for");
              //           continue;
              //      }
              //      // console.log(flightResponse);
              //           // return flightResponse;
              //           // console.log(i++);
              // };
              // Ensure flights is initialized as an array
              flights = [];
              _i = 0;
            case 2:
              if (!(_i < flight.length)) {
                _context6.n = 12;
                break;
              }
              _context6.p = 3;
              _context6.n = 4;
              return this.scheduleListRepository.getScheduleFlights(flight[_i].flight_id, filter.Date);
            case 4:
              response = _context6.v;
              if (!(response && response.length > 0)) {
                _context6.n = 8;
                break;
              }
              flight_id = response[0].flight_id; // Fetch flight details by ID
              _context6.n = 5;
              return this.getFlightById(flight_id);
            case 5:
              flightResponse = _context6.v;
              // Log flight response for debugging
              console.log(flightResponse);

              // Push the flightResponse to flights array if valid
              if (!flightResponse) {
                _context6.n = 6;
                break;
              }
              flights.push(response); // Use push to add the object to the array
              _context6.n = 7;
              break;
            case 6:
              console.log("Flight not found for flight_id:", flight_id);
              return _context6.a(3, 11);
            case 7:
              _context6.n = 9;
              break;
            case 8:
              console.log("No schedule found for flight_id:", flight[_i].flight_id);
              return _context6.a(3, 11);
            case 9:
              _context6.n = 11;
              break;
            case 10:
              _context6.p = 10;
              _t6 = _context6.v;
              // Handle any errors that occur in the loop
              console.error("Error processing flight_id:", flight[_i].flight_id, _t6.message);
              return _context6.a(3, 11);
            case 11:
              _i++;
              _context6.n = 2;
              break;
            case 12:
              return _context6.a(2, flights);
            case 13:
              _context6.p = 13;
              _t7 = _context6.v;
              console.error("Failed to get flight from database " + _t7.message);
            case 14:
              return _context6.a(2);
          }
        }, _callee6, this, [[3, 10], [0, 13]]);
      }));
      function fetchFilterFlightData(_x7) {
        return _fetchFilterFlightData.apply(this, arguments);
      }
      return fetchFilterFlightData;
    }()
  }, {
    key: "getDailyFlights",
    value: function () {
      var _getDailyFlights = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var flight, _t8;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return airplanes.findAll({
                where: {
                  Remark: _defineProperty({}, Op.substring, "Daily")
                }
              });
            case 1:
              flight = _context7.v;
              return _context7.a(2, flight);
            case 2:
              _context7.p = 2;
              _t8 = _context7.v;
              console.log("Failed to get flight from database " + _t8.message);
            case 3:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2]]);
      }));
      function getDailyFlights() {
        return _getDailyFlights.apply(this, arguments);
      }
      return getDailyFlights;
    }()
  }, {
    key: "getFlightById",
    value: function () {
      var _getFlightById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(flightId) {
        var flightById, _t9;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return airplanes.findAll({
                where: {
                  flight_id: flightId
                }
              });
            case 1:
              flightById = _context8.v;
              return _context8.a(2, flightById);
            case 2:
              _context8.p = 2;
              _t9 = _context8.v;
              console.error("Failed to get flight from database " + _t9.message);
            case 3:
              return _context8.a(2);
          }
        }, _callee8, null, [[0, 2]]);
      }));
      function getFlightById(_x8) {
        return _getFlightById.apply(this, arguments);
      }
      return getFlightById;
    }()
  }, {
    key: "getAllInnerJoinFlights",
    value: function () {
      var _getAllInnerJoinFlights = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var flight, _t0;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return airplanes.findAll({
                include: [{
                  model: schedule_list,
                  required: true
                }]
              });
            case 1:
              flight = _context9.v;
              return _context9.a(2, flight);
            case 2:
              _context9.p = 2;
              _t0 = _context9.v;
              console.log("Failed to get flight from database " + _t0.message);
            case 3:
              return _context9.a(2);
          }
        }, _callee9, null, [[0, 2]]);
      }));
      function getAllInnerJoinFlights() {
        return _getAllInnerJoinFlights.apply(this, arguments);
      }
      return getAllInnerJoinFlights;
    }()
  }, {
    key: "getAllFlightAndScheduleById",
    value: function () {
      var _getAllFlightAndScheduleById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(flightId) {
        var flight, _t1;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              _context0.n = 1;
              return airplanes.findAll({
                where: {
                  flight_id: flightId
                },
                include: [{
                  model: schedule_list,
                  required: true
                }]
              });
            case 1:
              flight = _context0.v;
              return _context0.a(2, flight);
            case 2:
              _context0.p = 2;
              _t1 = _context0.v;
              console.log("Failed to get flight from database " + _t1.message);
            case 3:
              return _context0.a(2);
          }
        }, _callee0, null, [[0, 2]]);
      }));
      function getAllFlightAndScheduleById(_x9) {
        return _getAllFlightAndScheduleById.apply(this, arguments);
      }
      return getAllFlightAndScheduleById;
    }()
  }]);
}();
module.exports = AirplaneRepository;