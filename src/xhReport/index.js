function v(n) {
  "@babel/helpers - typeof";
  return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, v(n);
}
function y(n, r) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(n);
    r && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function P(n) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? y(Object(e), !0).forEach(function(t) {
      c(n, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : y(Object(e)).forEach(function(t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return n;
}
function c(n, r, e) {
  return r = X(r), r in n ? Object.defineProperty(n, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = e, n;
}
function A(n, r) {
  if (!(n instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function x(n, r) {
  for (var e = 0; e < r.length; e++) {
    var t = r[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, X(t.key), t);
  }
}
function R(n, r, e) {
  return r && x(n.prototype, r), e && x(n, e), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function X(n) {
  var r = V(n, "string");
  return v(r) === "symbol" ? r : String(r);
}
function V(n, r) {
  if (v(n) !== "object" || n === null)
    return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(n, r || "default");
    if (v(t) !== "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function I(n, r) {
  return j(n) || _(n, r) || E(n, r) || T();
}
function T() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _(n, r) {
  var e = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var t, i, o, a, s = [], u = !0, l = !1;
    try {
      if (o = (e = e.call(n)).next, r === 0) {
        if (Object(e) !== e)
          return;
        u = !1;
      } else
        for (; !(u = (t = o.call(e)).done) && (s.push(t.value), s.length !== r); u = !0)
          ;
    } catch (f) {
      l = !0, i = f;
    } finally {
      try {
        if (!u && e.return != null && (a = e.return(), Object(a) !== a))
          return;
      } finally {
        if (l)
          throw i;
      }
    }
    return s;
  }
}
function j(n) {
  if (Array.isArray(n))
    return n;
}
function b(n, r) {
  var e = typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
  if (!e) {
    if (Array.isArray(n) || (e = E(n)) || r && n && typeof n.length == "number") {
      e && (n = e);
      var t = 0, i = function() {
      };
      return { s: i, n: function() {
        return t >= n.length ? { done: !0 } : { done: !1, value: n[t++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o = !0, a = !1, s;
  return { s: function() {
    e = e.call(n);
  }, n: function() {
    var l = e.next();
    return o = l.done, l;
  }, e: function(l) {
    a = !0, s = l;
  }, f: function() {
    try {
      !o && e.return != null && e.return();
    } finally {
      if (a)
        throw s;
    }
  } };
}
function E(n, r) {
  if (n) {
    if (typeof n == "string")
      return S(n, r);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set")
      return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return S(n, r);
  }
}
function S(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var e = 0, t = new Array(r); e < r; e++)
    t[e] = n[e];
  return t;
}
function D(n, r) {
  var e = "", t = "";
  for (var i in r)
    e += i + "=" + encodeURIComponent(r[i]) + "&";
  if (e = e.replace(/&$/, ""), n.includes("#/")) {
    var o = n.split("#/")[1];
    if (!o.includes("?"))
      return n + "?" + e;
    var a = (o + "&" + e).split("?")[0], s = (o + "&" + e).split("?")[1].split("&"), u = s.reduce(function(l, f) {
      var h = f.split("=");
      return l[h[0]] = f.slice(h[0].length + 1), l;
    }, {});
    return n.split("#/")[0] + "#/" + D(a, u);
  }
  return /\?$/.test(n) ? t = n + e : t = n.replace(/\/?$/, "?") + e, t;
}
var L = function n(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "date", t = new Date(r), i = t.getFullYear(), o = t.getMonth() + 1, a = t.getDate(), s = t.getHours(), u = t.getMinutes(), l = t.getSeconds();
  if (new Date(t).toString() === "Invalid Date" || !r) {
    if (/^\d{8}$/gi.test("".concat(r))) {
      var f = "".concat(r).split("").reduce(function(g, p, m) {
        var w = [3, 5].includes(m) ? "-" : "";
        return g + p + w;
      }, "");
      return n(f, e);
    }
    return "";
  }
  o < 10 && (o = "0" + o), a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), u < 10 && (u = "0" + u), l < 10 && (l = "0" + l);
  var h;
  switch (e) {
    case "dateTime":
      h = "".concat(i, "-").concat(o, "-").concat(a, " ").concat(s, ":").concat(u, ":").concat(l);
      break;
    default:
      h = "".concat(i, "-").concat(o, "-").concat(a);
  }
  return h;
}, N = function() {
  var r = {
    Chrome: /Chrome/,
    IE: /MSIE/,
    Firefox: /Firefox/,
    Opera: /Presto/,
    Safari: /Version\/([\d.]+).*Safari/,
    360: /360SE/,
    QQBrowswe: /QQ/,
    Edge: /Edg/
  }, e = {
    iPhone: /iPhone/,
    iPad: /iPad/,
    Android: /Android/,
    Windows: /Windows/,
    Mac: /Macintosh/
  }, t = navigator.userAgent, i = {
    browserName: "",
    // 浏览器名称
    browserVersion: "",
    // 浏览器版本
    osName: "",
    // 操作系统名称
    osVersion: "",
    // 操作系统版本
    deviceName: "",
    // 设备名称
    dpi: 96,
    lang: navigator.language
  };
  try {
    for (var o in r)
      r[o].test(t) && (i.browserName = o, o === "Chrome" ? i.browserVersion = t.split("Chrome/")[1].split(" ")[0] : o === "IE" ? i.browserVersion = t.split("MSIE ")[1].split(" ")[1] : o === "Firefox" ? i.browserVersion = t.split("Firefox/")[1] : o === "Opera" ? i.browserVersion = t.split("Version/")[1] : o === "Safari" ? i.browserVersion = t.split("Version/")[1].split(" ")[0] : o === "360" ? i.browserVersion = "" : o === "QQBrowswe" ? i.browserVersion = t.split("Version/")[1].split(" ")[0] : o === "Edge" && (i.browserVersion = t.split("Edg/")[1].split(" ")[0]));
    for (var a in e)
      e[a].test(t) && (i.osName = a, a === "Windows" ? i.osVersion = t.split("Windows NT ")[1].split(";")[0] : a === "Mac" ? i.osVersion = t.split("Mac OS X ")[1].split(")")[0] : a === "iPhone" ? i.osVersion = t.split("iPhone OS ")[1].split(" ")[0] : a === "iPad" ? i.osVersion = t.split("iPad; CPU OS ")[1].split(" ")[0] : a === "Android" && (i.osVersion = t.split("Android ")[1].split(";")[0], i.deviceName = t.split("(Linux; Android ")[1].split("; ")[1].split(" Build")[0]));
    i.dpi = i.dpi * window.devicePixelRatio;
  } catch (s) {
    console.log(s);
  }
  return i;
}, q = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  if (!r && e) {
    var t = window.localStorage.getItem(e);
    if (t)
      return t;
  }
  var i = (/* @__PURE__ */ new Date()).getTime(), o = "xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    var s = (i + Math.random() * 16) % 16 | 0;
    return i = Math.floor(i / 16), (a == "x" ? s : s & 3 | 8).toString(16);
  });
  return e && window.localStorage.setItem(e, o), o;
}, C = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = {};
  if (window.location.search)
    try {
      var t = window.location.search.endsWith("/") ? window.location.search.slice(0, -1) : window.location.search, i = new URLSearchParams(t), o = b(i.entries()), a;
      try {
        for (o.s(); !(a = o.n()).done; ) {
          var s = I(a.value, 2), u = s[0], l = s[1];
          r.includes(u) || (e[u] = l);
        }
      } catch (d) {
        o.e(d);
      } finally {
        o.f();
      }
    } catch (d) {
      console.log(d);
    }
  if (window.location.hash && window.location.hash.includes("?"))
    try {
      var f = window.location.hash.endsWith("/") ? window.location.hash.slice(0, -1) : window.location.hash, h = new URLSearchParams(f.split("?")[1]), g = b(h.entries()), p;
      try {
        for (g.s(); !(p = g.n()).done; ) {
          var m = I(p.value, 2), w = m[0], M = m[1];
          r.includes(w) || (e[w] = M);
        }
      } catch (d) {
        g.e(d);
      } finally {
        g.f();
      }
    } catch (d) {
      console.log(d);
    }
  return e;
}, K = /* @__PURE__ */ function() {
  function n() {
    A(this, n);
  }
  return R(n, [{
    key: "request",
    value: function(e, t, i) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "GET";
      return new Promise(function(a) {
        var s;
        try {
          s = new XMLHttpRequest();
        } catch (f) {
          s = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var u = i && i.params || {};
        if (s.open(o, D(e, u), !0), i && i.headers)
          for (var l in i.headers)
            s.setRequestHeader(l, i.headers[l]);
        s.onreadystatechange = function() {
          if (s.readyState === 4) {
            var f = s.responseText;
            try {
              f = JSON.parse(s.responseText);
            } catch (h) {
            }
            a(f && f.result || f || {});
          }
        }, s.send(JSON.stringify(t));
      });
    }
  }, {
    key: "get",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.request(e, {}, t, "GET");
    }
  }, {
    key: "post",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.request(e, t, i, "POST");
    }
  }]), n;
}(), H = function() {
  try {
    var r = new K(), e = r.request.bind(r);
    return e.get = r.get.bind(r), e.post = r.post.bind(r), e;
  } catch (t) {
    return console.log(t), function() {
      return Promise.resolve(arguments.length <= 0 ? void 0 : arguments[0]);
    };
  }
}, U = H(), O = function(r) {
  return r.split(".").join("0");
}, k = /* @__PURE__ */ function() {
  function n(r) {
    A(this, n), c(this, "XH_ALIVE", "xh_alive"), c(this, "XH_HEART", "xh_heartbeat"), c(this, "xhMap", c({}, this.XH_ALIVE, "has_alive")), c(this, "sLogIdUrl", "__log_id_url__"), c(this, "isDev", !1), c(this, "allKeyMap", []), c(this, "pkg", ""), c(this, "openId", ""), c(this, "versionName", "1.0.1"), c(this, "versionCode", O(this.versionName)), r && r.pkg && !r.manual ? this.init(r) : r && this.initParams(r), this.initParams = this.initParams.bind(this), this.initKeys = this.initKeys.bind(this), this.appendAllKeyMap = this.appendAllKeyMap.bind(this), this.getXhReportParams = this.getXhReportParams.bind(this), this.getLogIdUrl = this.getLogIdUrl.bind(this), this.requestXhReport = this.requestXhReport.bind(this), this.init = this.init.bind(this);
  }
  return R(n, [{
    key: "initParams",
    value: function(e) {
      e && [!0, !1].includes(e.isDev) && (this.isDev = e.isDev), e && e.version && (this.versionName = e.version, this.versionCode = O(this.versionName)), e && e.pkg && (this.pkg = e.pkg);
      var t = "__".concat(this.pkg || "xh_report", "__");
      e && e.tk && (this.openId = e.tk, t && window.localStorage.setItem(t, this.openId)), this.openId = this.openId || q(!1, t), this.initKeys(e.keys);
    }
  }, {
    key: "initKeys",
    value: function(e) {
      if (!(!e || !e.length)) {
        var t = b(e), i;
        try {
          for (t.s(); !(i = t.n()).done; ) {
            var o = i.value;
            this.allKeyMap.push({
              key: o.toUpperCase(),
              value: o.toLowerCase()
            });
          }
        } catch (a) {
          t.e(a);
        } finally {
          t.f();
        }
      }
    }
  }, {
    key: "appendAllKeyMap",
    value: function(e) {
      var t = b(this.allKeyMap), i;
      try {
        for (t.s(); !(i = t.n()).done; ) {
          var o = i.value;
          e[o.key] = o.value;
        }
      } catch (a) {
        t.e(a);
      } finally {
        t.f();
      }
    }
  }, {
    key: "getXhReportParams",
    value: function() {
      var e = N(), t = Date.now(), i = e.osName || e.browserName, o = e.osVersion || e.browserVersion;
      return {
        channel: "web",
        local: e.lang,
        appvn: this.versionName,
        plat: "web",
        app: this.pkg,
        tk: this.openId,
        ts: t,
        manu: i,
        sysv: o,
        model: o,
        anid: this.openId,
        oaid: this.openId,
        w: window.screen.width,
        h: window.screen.height
      };
    }
  }, {
    key: "getLogIdUrl",
    value: function() {
      var e = window.localStorage.getItem(this.sLogIdUrl);
      return e || (window.localStorage.setItem(this.sLogIdUrl, window.location.href), window.location.href);
    }
  }, {
    key: "requestXhReport",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      if (!this.openId)
        throw new Error("XhReport 还未初始化");
      if (!this.pkg)
        throw new Error("XhReport 初始化时 pkg 必传");
      if (!e)
        return Promise.resolve(-2);
      if (this.isDev)
        return console.log("%cXh Report%c ".concat(e), "background:#666;color:#fff;padding:3px 5px; border-radius:5px;", "color: #09f;", t), Promise.resolve(-2);
      var o = this.xhMap[e] || e, a = e === this.XH_HEART, s = a ? L(Date.now()) : "-1";
      if (i) {
        var u = window.localStorage.getItem(o);
        if (u && +u == 1 || a && u === s)
          return Promise.resolve(-1);
      }
      a ? window.localStorage.setItem(o, s) : window.localStorage.setItem(o, "1");
      var l = this.getXhReportParams(), f = C();
      return U.post("https://xe.xdplt.com/adtrack", [{
        key: e,
        ext: P(P({}, t), {}, {
          logidUrl: this.getLogIdUrl()
        }, f),
        ts: l.ts
      }], {
        params: l
      });
    }
  }, {
    key: "init",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.initParams(t), this.requestXhReport(this.XH_ALIVE, {}, !0).then(function() {
      }).catch(function(i) {
        return console.log(i);
      }).finally(function() {
        e.requestXhReport(e.XH_HEART, {}, !0);
      });
    }
  }]), n;
}(), W = function(r) {
  try {
    var e = new k(r), t = e.requestXhReport.bind(e);
    return t.init = e.init.bind(e), e.appendAllKeyMap(t), t;
  } catch (i) {
    return console.log(i), function() {
      return Promise.resolve(arguments.length <= 0 ? void 0 : arguments[0]);
    };
  }
};
export {
  W as default
};
