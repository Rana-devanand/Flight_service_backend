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
var _require = require("../controllers/airport/airport-controllers"),
  update = _require.update;
var AirplaneRepository = require("../repository/airplane-repository");
var AirplaneServices = /*#__PURE__*/function () {
  function AirplaneServices() {
    _classCallCheck(this, AirplaneServices);
    this.airplaneRepository = new AirplaneRepository();
  }
  return _createClass(AirplaneServices, [{
    key: "createAirplaneService",
    value: function () {
      var _createAirplaneService = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        var _AirplaneServices, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return this.airplaneRepository.create(data);
            case 1:
              _AirplaneServices = _context.v;
              return _context.a(2, _AirplaneServices);
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error creating AirplaneService in Services");
              throw _t;
            case 3:
              return _context.a(2);
          }
        }, _callee, this, [[0, 2]]);
      }));
      function createAirplaneService(_x) {
        return _createAirplaneService.apply(this, arguments);
      }
      return createAirplaneService;
    }()
  }, {
    key: "deleteAirplaneService",
    value: function () {
      var _deleteAirplaneService = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(airplaneId) {
        var deletedAirplaneServices, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return this.airplaneRepository.deleteAirplane(airplaneId);
            case 1:
              deletedAirplaneServices = _context2.v;
              return _context2.a(2, deletedAirplaneServices);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error("Error deleting AirplaneService in Services");
              throw _t2;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 2]]);
      }));
      function deleteAirplaneService(_x2) {
        return _deleteAirplaneService.apply(this, arguments);
      }
      return deleteAirplaneService;
    }()
  }, {
    key: "getAirplaneByPK",
    value: function () {
      var _getAirplaneByPK = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(airplaneId) {
        var fetchedAirplaneServices, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return this.airplaneRepository.airplaneById(airplaneId);
            case 1:
              fetchedAirplaneServices = _context3.v;
              return _context3.a(2, fetchedAirplaneServices);
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error("Error to find By PK AirplaneService in Services");
              throw _t3;
            case 3:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 2]]);
      }));
      function getAirplaneByPK(_x3) {
        return _getAirplaneByPK.apply(this, arguments);
      }
      return getAirplaneByPK;
    }()
  }, {
    key: "getAllFLights",
    value: function () {
      var _getAllFLights = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(filter) {
        var allFlights, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return this.airplaneRepository.allFLights({
                Airline: filter.Airline
              });
            case 1:
              allFlights = _context4.v;
              return _context4.a(2, allFlights);
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error("Error to get all Flights in Services");
              throw _t4;
            case 3:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 2]]);
      }));
      function getAllFLights(_x4) {
        return _getAllFLights.apply(this, arguments);
      }
      return getAllFLights;
    }()
  }, {
    key: "updateFlightByPk",
    value: function () {
      var _updateFlightByPk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id, data) {
        var updateFLight, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return this.airplaneRepository.updateFlightByPk(id, data);
            case 1:
              updateFLight = _context5.v;
              return _context5.a(2, updateFLight);
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              console.error("Error to update Flight in Services");
              throw _t5;
            case 3:
              return _context5.a(2);
          }
        }, _callee5, this, [[0, 2]]);
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
        var flightData, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              console.log("services : ", filter);
              _context6.n = 1;
              return this.airplaneRepository.fetchFilterFlightData(filter);
            case 1:
              flightData = _context6.v;
              return _context6.a(2, flightData);
            case 2:
              _context6.p = 2;
              _t6 = _context6.v;
              console.error("Error to Fetch Flight in Services");
              throw _t6;
            case 3:
              return _context6.a(2);
          }
        }, _callee6, this, [[0, 2]]);
      }));
      function fetchFilterFlightData(_x7) {
        return _fetchFilterFlightData.apply(this, arguments);
      }
      return fetchFilterFlightData;
    }()
  }, {
    key: "getDailyFlights",
    value: function () {
      var _getDailyFlights = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(filter) {
        var dailyFlights, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return this.airplaneRepository.getDailyFlights(filter);
            case 1:
              dailyFlights = _context7.v;
              return _context7.a(2, dailyFlights);
            case 2:
              _context7.p = 2;
              _t7 = _context7.v;
              console.error("Error to Fetch Daily Flights in Services");
              throw _t7;
            case 3:
              return _context7.a(2);
          }
        }, _callee7, this, [[0, 2]]);
      }));
      function getDailyFlights(_x8) {
        return _getDailyFlights.apply(this, arguments);
      }
      return getDailyFlights;
    }()
  }, {
    key: "getByFlightId",
    value: function () {
      var _getByFlightId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(flightId) {
        var flightsByFlightId, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return this.airplaneRepository.getFlightById(flightId);
            case 1:
              flightsByFlightId = _context8.v;
              return _context8.a(2, flightsByFlightId);
            case 2:
              _context8.p = 2;
              _t8 = _context8.v;
              console.error("Error to Fetch Daily Flights in Services");
              throw {
                error: _t8
              };
            case 3:
              return _context8.a(2);
          }
        }, _callee8, this, [[0, 2]]);
      }));
      function getByFlightId(_x9) {
        return _getByFlightId.apply(this, arguments);
      }
      return getByFlightId;
    }()
  }, {
    key: "getAllInnerJoinFlights",
    value: function () {
      var _getAllInnerJoinFlights = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var response, _t9;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              _context9.n = 1;
              return this.airplaneRepository.getAllInnerJoinFlights();
            case 1:
              response = _context9.v;
              return _context9.a(2, response);
            case 2:
              _context9.p = 2;
              _t9 = _context9.v;
              console.error(_t9);
            case 3:
              return _context9.a(2);
          }
        }, _callee9, this, [[0, 2]]);
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
        var response, _t0;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              _context0.n = 1;
              return this.airplaneRepository.getAllFlightAndScheduleById(flightId);
            case 1:
              response = _context0.v;
              return _context0.a(2, response);
            case 2:
              _context0.p = 2;
              _t0 = _context0.v;
              console.error(_t0);
            case 3:
              return _context0.a(2);
          }
        }, _callee0, this, [[0, 2]]);
      }));
      function getAllFlightAndScheduleById(_x0) {
        return _getAllFlightAndScheduleById.apply(this, arguments);
      }
      return getAllFlightAndScheduleById;
    }()
  }]);
}();
module.exports = AirplaneServices;