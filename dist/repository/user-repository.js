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
  user = _require.user;
var bcrypt = require('bcrypt');
var _require2 = require("../config/serverConfig"),
  SALT = _require2.SALT;
var UserRepository = /*#__PURE__*/function () {
  function UserRepository() {
    _classCallCheck(this, UserRepository);
  }
  return _createClass(UserRepository, [{
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
        var emailExist, numberExist, response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return user.findOne({
                where: {
                  email: data.email
                }
              });
            case 1:
              emailExist = _context.v;
              if (!emailExist) {
                _context.n = 2;
                break;
              }
              return _context.a(2, {
                error: "Email already exists",
                status: 403
              });
            case 2:
              _context.n = 3;
              return user.findOne({
                where: {
                  number: data.number
                }
              });
            case 3:
              numberExist = _context.v;
              if (!numberExist) {
                _context.n = 4;
                break;
              }
              return _context.a(2, {
                error: "Number already exists",
                status: 403
              });
            case 4:
              _context.n = 5;
              return user.create(data);
            case 5:
              response = _context.v;
              return _context.a(2, response);
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.log("repository error :", _t);
              return _context.a(2, {
                error: _t
              });
          }
        }, _callee, null, [[0, 6]]);
      }));
      function createUser(_x) {
        return _createUser.apply(this, arguments);
      }
      return createUser;
    }()
  }, {
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return user.findAll();
            case 1:
              response = _context2.v;
              return _context2.a(2, response);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.log("Something went wrong in User repository", _t2);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      function getAllUsers() {
        return _getAllUsers.apply(this, arguments);
      }
      return getAllUsers;
    }()
  }, {
    key: "getByEmail",
    value: function () {
      var _getByEmail = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(email) {
        var getUser, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              console.log(email);
              _context3.n = 1;
              return user.findOne({
                where: {
                  email: email
                }
              });
            case 1:
              getUser = _context3.v;
              if (getUser) {
                _context3.n = 2;
                break;
              }
              throw {
                err: "AttributeNotFound",
                mail: "Please check the email",
                message: "Until or unless you put email not registered yet.",
                notFound: "User not found"
              };
            case 2:
              return _context3.a(2, getUser);
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              console.log("Something went wrong in User repository", _t3);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 3]]);
      }));
      function getByEmail(_x2) {
        return _getByEmail.apply(this, arguments);
      }
      return getByEmail;
    }()
  }, {
    key: "getUserByID",
    value: function () {
      var _getUserByID = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
        var response, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return user.findByPk(id);
            case 1:
              response = _context4.v;
              return _context4.a(2, response);
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.log("Something went wrong in User repository", _t4);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }));
      function getUserByID(_x3) {
        return _getUserByID.apply(this, arguments);
      }
      return getUserByID;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(userid, newPassword) {
        var existUser, updateUser, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return user.findByPk(userid);
            case 1:
              existUser = _context5.v;
              if (existUser) {
                _context5.n = 2;
                break;
              }
              console.log("Couldn't find");
              throw {
                err: "AttributeNotFound",
                message: "Email not found",
                notFound: "User not found"
              };
            case 2:
              existUser.password = newPassword;
              _context5.n = 3;
              return existUser.save();
            case 3:
              updateUser = _context5.v;
              return _context5.a(2, updateUser);
            case 4:
              _context5.n = 6;
              break;
            case 5:
              _context5.p = 5;
              _t5 = _context5.v;
              console.error(_t5);
            case 6:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 5]]);
      }));
      function updatePassword(_x4, _x5) {
        return _updatePassword.apply(this, arguments);
      }
      return updatePassword;
    }()
  }]);
}();
module.exports = {
  UserRepository: UserRepository
};