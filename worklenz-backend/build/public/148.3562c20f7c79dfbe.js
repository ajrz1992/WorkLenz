"use strict";
(self.webpackChunkworklenz = self.webpackChunkworklenz || []).push([
  [148],
  {
    17816: (zo, wi, ct) => {
      ct.d(wi, {
        ZL: () => Qt,
        kL: () => zn,
        od: () => Ki,
        qi: () => we,
        zX: () => rr,
      });
      var R = ct(4942),
        u = ct(98137);
      class E {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(i, t, e, n) {
          const r = t.duration;
          t.listeners[n].forEach((l) =>
            l({
              chart: i,
              initial: t.initial,
              numSteps: r,
              currentStep: Math.min(e - t.start, r),
            })
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = u.r.call(window, () => {
              this._update(),
                (this._request = null),
                this._running && this._refresh();
            })));
        }
        _update(i = Date.now()) {
          let t = 0;
          this._charts.forEach((e, n) => {
            if (!e.running || !e.items.length) return;
            const o = e.items;
            let c,
              r = o.length - 1,
              l = !1;
            for (; r >= 0; --r)
              (c = o[r]),
                c._active
                  ? (c._total > e.duration && (e.duration = c._total),
                    c.tick(i),
                    (l = !0))
                  : ((o[r] = o[o.length - 1]), o.pop());
            l && (n.draw(), this._notify(n, e, i, "progress")),
              o.length ||
                ((e.running = !1),
                this._notify(n, e, i, "complete"),
                (e.initial = !1)),
              (t += o.length);
          }),
            (this._lastDate = i),
            0 === t && (this._running = !1);
        }
        _getAnims(i) {
          const t = this._charts;
          let e = t.get(i);
          return (
            e ||
              ((e = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              t.set(i, e)),
            e
          );
        }
        listen(i, t, e) {
          this._getAnims(i).listeners[t].push(e);
        }
        add(i, t) {
          !t || !t.length || this._getAnims(i).items.push(...t);
        }
        has(i) {
          return this._getAnims(i).items.length > 0;
        }
        start(i) {
          const t = this._charts.get(i);
          t &&
            ((t.running = !0),
            (t.start = Date.now()),
            (t.duration = t.items.reduce(
              (e, n) => Math.max(e, n._duration),
              0
            )),
            this._refresh());
        }
        running(i) {
          if (!this._running) return !1;
          const t = this._charts.get(i);
          return !(!t || !t.running || !t.items.length);
        }
        stop(i) {
          const t = this._charts.get(i);
          if (!t || !t.items.length) return;
          const e = t.items;
          let n = e.length - 1;
          for (; n >= 0; --n) e[n].cancel();
          (t.items = []), this._notify(i, t, Date.now(), "complete");
        }
        remove(i) {
          return this._charts.delete(i);
        }
      }
      var Ot = new E();
      const St = "transparent",
        Dt = {
          boolean: (s, i, t) => (t > 0.5 ? i : s),
          color(s, i, t) {
            const e = (0, u.c)(s || St),
              n = e.valid && (0, u.c)(i || St);
            return n && n.valid ? n.mix(e, t).hexString() : i;
          },
          number: (s, i, t) => s + (i - s) * t,
        };
      class Ve {
        constructor(i, t, e, n) {
          const o = t[e];
          n = (0, u.a)([i.to, n, o, i.from]);
          const r = (0, u.a)([i.from, o, n]);
          (this._active = !0),
            (this._fn = i.fn || Dt[i.type || typeof r]),
            (this._easing = u.e[i.easing] || u.e.linear),
            (this._start = Math.floor(Date.now() + (i.delay || 0))),
            (this._duration = this._total = Math.floor(i.duration)),
            (this._loop = !!i.loop),
            (this._target = t),
            (this._prop = e),
            (this._from = r),
            (this._to = n),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(i, t, e) {
          if (this._active) {
            this._notify(!1);
            const n = this._target[this._prop],
              o = e - this._start,
              r = this._duration - o;
            (this._start = e),
              (this._duration = Math.floor(Math.max(r, i.duration))),
              (this._total += o),
              (this._loop = !!i.loop),
              (this._to = (0, u.a)([i.to, t, n, i.from])),
              (this._from = (0, u.a)([i.from, n, t]));
          }
        }
        cancel() {
          this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(i) {
          const t = i - this._start,
            e = this._duration,
            n = this._prop,
            o = this._from,
            r = this._loop,
            l = this._to;
          let c;
          if (((this._active = o !== l && (r || t < e)), !this._active))
            return (this._target[n] = l), void this._notify(!0);
          t < 0
            ? (this._target[n] = o)
            : ((c = (t / e) % 2),
              (c = r && c > 1 ? 2 - c : c),
              (c = this._easing(Math.min(1, Math.max(0, c)))),
              (this._target[n] = this._fn(o, l, c)));
        }
        wait() {
          const i = this._promises || (this._promises = []);
          return new Promise((t, e) => {
            i.push({ res: t, rej: e });
          });
        }
        _notify(i) {
          const t = i ? "res" : "rej",
            e = this._promises || [];
          for (let n = 0; n < e.length; n++) e[n][t]();
        }
      }
      class mt {
        constructor(i, t) {
          (this._chart = i), (this._properties = new Map()), this.configure(t);
        }
        configure(i) {
          if (!(0, u.i)(i)) return;
          const t = Object.keys(u.d.animation),
            e = this._properties;
          Object.getOwnPropertyNames(i).forEach((n) => {
            const o = i[n];
            if (!(0, u.i)(o)) return;
            const r = {};
            for (const l of t) r[l] = o[l];
            (((0, u.b)(o.properties) && o.properties) || [n]).forEach((l) => {
              (l === n || !e.has(l)) && e.set(l, r);
            });
          });
        }
        _animateOptions(i, t) {
          const e = t.options,
            n = (function We(s, i) {
              if (!i) return;
              let t = s.options;
              if (t)
                return (
                  t.$shared &&
                    (s.options = t =
                      Object.assign({}, t, { $shared: !1, $animations: {} })),
                  t
                );
              s.options = i;
            })(i, e);
          if (!n) return [];
          const o = this._createAnimations(n, e);
          return (
            e.$shared &&
              (function Ut(s, i) {
                const t = [],
                  e = Object.keys(i);
                for (let n = 0; n < e.length; n++) {
                  const o = s[e[n]];
                  o && o.active() && t.push(o.wait());
                }
                return Promise.all(t);
              })(i.options.$animations, e).then(
                () => {
                  i.options = e;
                },
                () => {}
              ),
            o
          );
        }
        _createAnimations(i, t) {
          const e = this._properties,
            n = [],
            o = i.$animations || (i.$animations = {}),
            r = Object.keys(t),
            l = Date.now();
          let c;
          for (c = r.length - 1; c >= 0; --c) {
            const d = r[c];
            if ("$" === d.charAt(0)) continue;
            if ("options" === d) {
              n.push(...this._animateOptions(i, t));
              continue;
            }
            const g = t[d];
            let m = o[d];
            const x = e.get(d);
            if (m) {
              if (x && m.active()) {
                m.update(x, g, l);
                continue;
              }
              m.cancel();
            }
            x && x.duration
              ? ((o[d] = m = new Ve(x, i, d, g)), n.push(m))
              : (i[d] = g);
          }
          return n;
        }
        update(i, t) {
          if (0 === this._properties.size) return void Object.assign(i, t);
          const e = this._createAnimations(i, t);
          return e.length ? (Ot.add(this._chart, e), !0) : void 0;
        }
      }
      function ie(s, i) {
        const t = (s && s.options) || {},
          e = t.reverse,
          n = void 0 === t.min ? i : 0,
          o = void 0 === t.max ? i : 0;
        return { start: e ? o : n, end: e ? n : o };
      }
      function Ye(s, i) {
        const t = [],
          e = s._getSortedDatasetMetas(i);
        let n, o;
        for (n = 0, o = e.length; n < o; ++n) t.push(e[n].index);
        return t;
      }
      function $e(s, i, t, e = {}) {
        const n = s.keys,
          o = "single" === e.mode;
        let r, l, c, d;
        if (null !== i) {
          for (r = 0, l = n.length; r < l; ++r) {
            if (((c = +n[r]), c === t)) {
              if (e.all) continue;
              break;
            }
            (d = s.values[c]),
              (0, u.g)(d) &&
                (o || 0 === i || (0, u.s)(i) === (0, u.s)(d)) &&
                (i += d);
          }
          return i;
        }
      }
      function Ue(s, i) {
        const t = s && s.options.stacked;
        return t || (void 0 === t && void 0 !== i.stack);
      }
      function Oi(s, i, t) {
        const e = s[i] || (s[i] = {});
        return e[t] || (e[t] = {});
      }
      function Xe(s, i, t, e) {
        for (const n of i.getMatchingVisibleMetas(e).reverse()) {
          const o = s[n.index];
          if ((t && o > 0) || (!t && o < 0)) return n.index;
        }
        return null;
      }
      function At(s, i) {
        const { chart: t, _cachedMeta: e } = s,
          n = t._stacks || (t._stacks = {}),
          { iScale: o, vScale: r, index: l } = e,
          c = o.axis,
          d = r.axis,
          g = (function Ze(s, i, t) {
            return `${s.id}.${i.id}.${t.stack || t.type}`;
          })(o, r, e),
          m = i.length;
        let x;
        for (let v = 0; v < m; ++v) {
          const S = i[v],
            { [c]: P, [d]: O } = S;
          (x = (S._stacks || (S._stacks = {}))[d] = Oi(n, g, P)),
            (x[l] = O),
            (x._top = Xe(x, r, !0, e.type)),
            (x._bottom = Xe(x, r, !1, e.type)),
            ((x._visualValues || (x._visualValues = {}))[l] = O);
        }
      }
      function Tt(s, i) {
        const t = s.scales;
        return Object.keys(t)
          .filter((e) => t[e].axis === i)
          .shift();
      }
      function ne(s, i) {
        const t = s.controller.index,
          e = s.vScale && s.vScale.axis;
        if (e) {
          i = i || s._parsed;
          for (const n of i) {
            const o = n._stacks;
            if (!o || void 0 === o[e] || void 0 === o[e][t]) return;
            delete o[e][t],
              void 0 !== o[e]._visualValues &&
                void 0 !== o[e]._visualValues[t] &&
                delete o[e]._visualValues[t];
          }
        }
      }
      const se = (s) => "reset" === s || "none" === s,
        fe = (s, i) => (i ? s : Object.assign({}, s));
      let It = (() => {
        class s {
          constructor(t, e) {
            (this.chart = t),
              (this._ctx = t.ctx),
              (this.index = e),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.supportsDecimation = !1),
              (this.$context = void 0),
              (this._syncList = []),
              (this.datasetElementType = new.target.datasetElementType),
              (this.dataElementType = new.target.dataElementType),
              this.initialize();
          }
          initialize() {
            const t = this._cachedMeta;
            this.configure(),
              this.linkScales(),
              (t._stacked = Ue(t.vScale, t)),
              this.addElements(),
              this.options.fill &&
                !this.chart.isPluginEnabled("filler") &&
                console.warn(
                  "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                );
          }
          updateIndex(t) {
            this.index !== t && ne(this._cachedMeta), (this.index = t);
          }
          linkScales() {
            const t = this.chart,
              e = this._cachedMeta,
              n = this.getDataset(),
              o = (x, v, S, P) => ("x" === x ? v : "r" === x ? P : S),
              r = (e.xAxisID = (0, u.v)(n.xAxisID, Tt(t, "x"))),
              l = (e.yAxisID = (0, u.v)(n.yAxisID, Tt(t, "y"))),
              c = (e.rAxisID = (0, u.v)(n.rAxisID, Tt(t, "r"))),
              d = e.indexAxis,
              g = (e.iAxisID = o(d, r, l, c)),
              m = (e.vAxisID = o(d, l, r, c));
            (e.xScale = this.getScaleForId(r)),
              (e.yScale = this.getScaleForId(l)),
              (e.rScale = this.getScaleForId(c)),
              (e.iScale = this.getScaleForId(g)),
              (e.vScale = this.getScaleForId(m));
          }
          getDataset() {
            return this.chart.data.datasets[this.index];
          }
          getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }
          getScaleForId(t) {
            return this.chart.scales[t];
          }
          _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
          }
          reset() {
            this._update("reset");
          }
          _destroy() {
            const t = this._cachedMeta;
            this._data && (0, u.u)(this._data, this), t._stacked && ne(t);
          }
          _dataCheck() {
            const t = this.getDataset(),
              e = t.data || (t.data = []),
              n = this._data;
            if ((0, u.i)(e))
              this._data = (function Pi(s) {
                const i = Object.keys(s),
                  t = new Array(i.length);
                let e, n, o;
                for (e = 0, n = i.length; e < n; ++e)
                  (o = i[e]), (t[e] = { x: o, y: s[o] });
                return t;
              })(e);
            else if (n !== e) {
              if (n) {
                (0, u.u)(n, this);
                const o = this._cachedMeta;
                ne(o), (o._parsed = []);
              }
              e && Object.isExtensible(e) && (0, u.l)(e, this),
                (this._syncList = []),
                (this._data = e);
            }
          }
          addElements() {
            const t = this._cachedMeta;
            this._dataCheck(),
              this.datasetElementType &&
                (t.dataset = new this.datasetElementType());
          }
          buildOrUpdateElements(t) {
            const e = this._cachedMeta,
              n = this.getDataset();
            let o = !1;
            this._dataCheck();
            const r = e._stacked;
            (e._stacked = Ue(e.vScale, e)),
              e.stack !== n.stack && ((o = !0), ne(e), (e.stack = n.stack)),
              this._resyncElements(t),
              (o || r !== e._stacked) && At(this, e._parsed);
          }
          configure() {
            const t = this.chart.config,
              e = t.datasetScopeKeys(this._type),
              n = t.getOptionScopes(this.getDataset(), e, !0);
            (this.options = t.createResolver(n, this.getContext())),
              (this._parsing = this.options.parsing),
              (this._cachedDataOpts = {});
          }
          parse(t, e) {
            const { _cachedMeta: n, _data: o } = this,
              { iScale: r, _stacked: l } = n,
              c = r.axis;
            let m,
              x,
              v,
              d = (0 === t && e === o.length) || n._sorted,
              g = t > 0 && n._parsed[t - 1];
            if (!1 === this._parsing)
              (n._parsed = o), (n._sorted = !0), (v = o);
            else {
              v = (0, u.b)(o[t])
                ? this.parseArrayData(n, o, t, e)
                : (0, u.i)(o[t])
                ? this.parseObjectData(n, o, t, e)
                : this.parsePrimitiveData(n, o, t, e);
              const S = () => null === x[c] || (g && x[c] < g[c]);
              for (m = 0; m < e; ++m)
                (n._parsed[m + t] = x = v[m]), d && (S() && (d = !1), (g = x));
              n._sorted = d;
            }
            l && At(this, v);
          }
          parsePrimitiveData(t, e, n, o) {
            const { iScale: r, vScale: l } = t,
              c = r.axis,
              d = l.axis,
              g = r.getLabels(),
              m = r === l,
              x = new Array(o);
            let v, S, P;
            for (v = 0, S = o; v < S; ++v)
              (P = v + n),
                (x[v] = { [c]: m || r.parse(g[P], P), [d]: l.parse(e[P], P) });
            return x;
          }
          parseArrayData(t, e, n, o) {
            const { xScale: r, yScale: l } = t,
              c = new Array(o);
            let d, g, m, x;
            for (d = 0, g = o; d < g; ++d)
              (m = d + n),
                (x = e[m]),
                (c[d] = { x: r.parse(x[0], m), y: l.parse(x[1], m) });
            return c;
          }
          parseObjectData(t, e, n, o) {
            const { xScale: r, yScale: l } = t,
              { xAxisKey: c = "x", yAxisKey: d = "y" } = this._parsing,
              g = new Array(o);
            let m, x, v, S;
            for (m = 0, x = o; m < x; ++m)
              (v = m + n),
                (S = e[v]),
                (g[m] = {
                  x: r.parse((0, u.f)(S, c), v),
                  y: l.parse((0, u.f)(S, d), v),
                });
            return g;
          }
          getParsed(t) {
            return this._cachedMeta._parsed[t];
          }
          getDataElement(t) {
            return this._cachedMeta.data[t];
          }
          applyStack(t, e, n) {
            const r = this._cachedMeta,
              l = e[t.axis];
            return $e(
              {
                keys: Ye(this.chart, !0),
                values: e._stacks[t.axis]._visualValues,
              },
              l,
              r.index,
              { mode: n }
            );
          }
          updateRangeFromParsed(t, e, n, o) {
            const r = n[e.axis];
            let l = null === r ? NaN : r;
            const c = o && n._stacks[e.axis];
            o && c && ((o.values = c), (l = $e(o, r, this._cachedMeta.index))),
              (t.min = Math.min(t.min, l)),
              (t.max = Math.max(t.max, l));
          }
          getMinMax(t, e) {
            const n = this._cachedMeta,
              o = n._parsed,
              r = n._sorted && t === n.iScale,
              l = o.length,
              c = this._getOtherScale(t),
              d = ((s, i, t) =>
                s &&
                !i.hidden &&
                i._stacked && { keys: Ye(this.chart, !0), values: null })(e, n),
              g = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              },
              { min: m, max: x } = (function Ci(s) {
                const {
                  min: i,
                  max: t,
                  minDefined: e,
                  maxDefined: n,
                } = s.getUserBounds();
                return {
                  min: e ? i : Number.NEGATIVE_INFINITY,
                  max: n ? t : Number.POSITIVE_INFINITY,
                };
              })(c);
            let v, S;
            function P() {
              S = o[v];
              const O = S[c.axis];
              return !(0, u.g)(S[t.axis]) || m > O || x < O;
            }
            for (
              v = 0;
              v < l && (P() || (this.updateRangeFromParsed(g, t, S, d), !r));
              ++v
            );
            if (r)
              for (v = l - 1; v >= 0; --v)
                if (!P()) {
                  this.updateRangeFromParsed(g, t, S, d);
                  break;
                }
            return g;
          }
          getAllParsedValues(t) {
            const e = this._cachedMeta._parsed,
              n = [];
            let o, r, l;
            for (o = 0, r = e.length; o < r; ++o)
              (l = e[o][t.axis]), (0, u.g)(l) && n.push(l);
            return n;
          }
          getMaxOverflow() {
            return !1;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              n = e.iScale,
              o = e.vScale,
              r = this.getParsed(t);
            return {
              label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
              value: o ? "" + o.getLabelForValue(r[o.axis]) : "",
            };
          }
          _update(t) {
            const e = this._cachedMeta;
            this.update(t || "default"),
              (e._clip = (function ki(s) {
                let i, t, e, n;
                return (
                  (0, u.i)(s)
                    ? ((i = s.top), (t = s.right), (e = s.bottom), (n = s.left))
                    : (i = t = e = n = s),
                  { top: i, right: t, bottom: e, left: n, disabled: !1 === s }
                );
              })(
                (0, u.v)(
                  this.options.clip,
                  (function de(s, i, t) {
                    if (!1 === t) return !1;
                    const e = ie(s, t),
                      n = ie(i, t);
                    return {
                      top: n.end,
                      right: e.end,
                      bottom: n.start,
                      left: e.start,
                    };
                  })(e.xScale, e.yScale, this.getMaxOverflow())
                )
              ));
          }
          update(t) {}
          draw() {
            const t = this._ctx,
              n = this._cachedMeta,
              o = n.data || [],
              r = this.chart.chartArea,
              l = [],
              c = this._drawStart || 0,
              d = this._drawCount || o.length - c,
              g = this.options.drawActiveElementsOnTop;
            let m;
            for (
              n.dataset && n.dataset.draw(t, r, c, d), m = c;
              m < c + d;
              ++m
            ) {
              const x = o[m];
              x.hidden || (x.active && g ? l.push(x) : x.draw(t, r));
            }
            for (m = 0; m < l.length; ++m) l[m].draw(t, r);
          }
          getStyle(t, e) {
            const n = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset
              ? this.resolveDatasetElementOptions(n)
              : this.resolveDataElementOptions(t || 0, n);
          }
          getContext(t, e, n) {
            const o = this.getDataset();
            let r;
            if (t >= 0 && t < this._cachedMeta.data.length) {
              const l = this._cachedMeta.data[t];
              (r =
                l.$context ||
                (l.$context = (function Di(s, i, t) {
                  return (0, u.j)(s, {
                    active: !1,
                    dataIndex: i,
                    parsed: void 0,
                    raw: void 0,
                    element: t,
                    index: i,
                    mode: "default",
                    type: "data",
                  });
                })(this.getContext(), t, l))),
                (r.parsed = this.getParsed(t)),
                (r.raw = o.data[t]),
                (r.index = r.dataIndex = t);
            } else
              (r =
                this.$context ||
                (this.$context = (function ue(s, i) {
                  return (0, u.j)(s, {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: i,
                    index: i,
                    mode: "default",
                    type: "dataset",
                  });
                })(this.chart.getContext(), this.index))),
                (r.dataset = o),
                (r.index = r.datasetIndex = this.index);
            return (r.active = !!e), (r.mode = n), r;
          }
          resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
          }
          resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
          }
          _resolveElementOptions(t, e = "default", n) {
            const o = "active" === e,
              r = this._cachedDataOpts,
              l = t + "-" + e,
              c = r[l],
              d = this.enableOptionSharing && (0, u.h)(n);
            if (c) return fe(c, d);
            const g = this.chart.config,
              m = g.datasetElementScopeKeys(this._type, t),
              x = o ? [`${t}Hover`, "hover", t, ""] : [t, ""],
              v = g.getOptionScopes(this.getDataset(), m),
              S = Object.keys(u.d.elements[t]),
              O = g.resolveNamedOptions(
                v,
                S,
                () => this.getContext(n, o, e),
                x
              );
            return (
              O.$shared && ((O.$shared = d), (r[l] = Object.freeze(fe(O, d)))),
              O
            );
          }
          _resolveAnimations(t, e, n) {
            const o = this.chart,
              r = this._cachedDataOpts,
              l = `animation-${e}`,
              c = r[l];
            if (c) return c;
            let d;
            if (!1 !== o.options.animation) {
              const m = this.chart.config,
                x = m.datasetAnimationScopeKeys(this._type, e),
                v = m.getOptionScopes(this.getDataset(), x);
              d = m.createResolver(v, this.getContext(t, n, e));
            }
            const g = new mt(o, d && d.animations);
            return d && d._cacheable && (r[l] = Object.freeze(g)), g;
          }
          getSharedOptions(t) {
            if (t.$shared)
              return (
                this._sharedOptions ||
                (this._sharedOptions = Object.assign({}, t))
              );
          }
          includeOptions(t, e) {
            return !e || se(t) || this.chart._animationsDisabled;
          }
          _getSharedOptions(t, e) {
            const n = this.resolveDataElementOptions(t, e),
              o = this._sharedOptions,
              r = this.getSharedOptions(n),
              l = this.includeOptions(e, r) || r !== o;
            return (
              this.updateSharedOptions(r, e, n),
              { sharedOptions: r, includeOptions: l }
            );
          }
          updateElement(t, e, n, o) {
            se(o)
              ? Object.assign(t, n)
              : this._resolveAnimations(e, o).update(t, n);
          }
          updateSharedOptions(t, e, n) {
            t && !se(e) && this._resolveAnimations(void 0, e).update(t, n);
          }
          _setStyle(t, e, n, o) {
            t.active = o;
            const r = this.getStyle(e, o);
            this._resolveAnimations(e, n, o).update(t, {
              options: (!o && this.getSharedOptions(r)) || r,
            });
          }
          removeHoverStyle(t, e, n) {
            this._setStyle(t, n, "active", !1);
          }
          setHoverStyle(t, e, n) {
            this._setStyle(t, n, "active", !0);
          }
          _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1);
          }
          _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0);
          }
          _resyncElements(t) {
            const e = this._data,
              n = this._cachedMeta.data;
            for (const [c, d, g] of this._syncList) this[c](d, g);
            this._syncList = [];
            const o = n.length,
              r = e.length,
              l = Math.min(r, o);
            l && this.parse(0, l),
              r > o
                ? this._insertElements(o, r - o, t)
                : r < o && this._removeElements(r, o - r);
          }
          _insertElements(t, e, n = !0) {
            const o = this._cachedMeta,
              r = o.data,
              l = t + e;
            let c;
            const d = (g) => {
              for (g.length += e, c = g.length - 1; c >= l; c--)
                g[c] = g[c - e];
            };
            for (d(r), c = t; c < l; ++c) r[c] = new this.dataElementType();
            this._parsing && d(o._parsed),
              this.parse(t, e),
              n && this.updateElements(r, t, e, "reset");
          }
          updateElements(t, e, n, o) {}
          _removeElements(t, e) {
            const n = this._cachedMeta;
            if (this._parsing) {
              const o = n._parsed.splice(t, e);
              n._stacked && ne(n, o);
            }
            n.data.splice(t, e);
          }
          _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
              const [e, n, o] = t;
              this[e](n, o);
            }
            this.chart._dataChanges.push([this.index, ...t]);
          }
          _onDataPush() {
            const t = arguments.length;
            this._sync([
              "_insertElements",
              this.getDataset().data.length - t,
              t,
            ]);
          }
          _onDataPop() {
            this._sync([
              "_removeElements",
              this._cachedMeta.data.length - 1,
              1,
            ]);
          }
          _onDataShift() {
            this._sync(["_removeElements", 0, 1]);
          }
          _onDataSplice(t, e) {
            e && this._sync(["_removeElements", t, e]);
            const n = arguments.length - 2;
            n && this._sync(["_insertElements", t, n]);
          }
          _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length]);
          }
        }
        return (
          (0, R.Z)(s, "defaults", {}),
          (0, R.Z)(s, "datasetElementType", null),
          (0, R.Z)(s, "dataElementType", null),
          s
        );
      })();
      function Qe(s) {
        const i = s.iScale,
          t = (function Ge(s, i) {
            if (!s._cache.$bar) {
              const t = s.getMatchingVisibleMetas(i);
              let e = [];
              for (let n = 0, o = t.length; n < o; n++)
                e = e.concat(t[n].controller.getAllParsedValues(s));
              s._cache.$bar = (0, u._)(e.sort((n, o) => n - o));
            }
            return s._cache.$bar;
          })(i, s.type);
        let n,
          o,
          r,
          l,
          e = i._length;
        const c = () => {
          32767 === r ||
            -32768 === r ||
            ((0, u.h)(l) && (e = Math.min(e, Math.abs(r - l) || e)), (l = r));
        };
        for (n = 0, o = t.length; n < o; ++n)
          (r = i.getPixelForValue(t[n])), c();
        for (l = void 0, n = 0, o = i.ticks.length; n < o; ++n)
          (r = i.getPixelForTick(n)), c();
        return e;
      }
      function X(s, i, t, e) {
        return (
          (0, u.b)(s)
            ? (function N(s, i, t, e) {
                const n = t.parse(s[0], e),
                  o = t.parse(s[1], e),
                  r = Math.min(n, o),
                  l = Math.max(n, o);
                let c = r,
                  d = l;
                Math.abs(r) > Math.abs(l) && ((c = l), (d = r)),
                  (i[t.axis] = d),
                  (i._custom = {
                    barStart: c,
                    barEnd: d,
                    start: n,
                    end: o,
                    min: r,
                    max: l,
                  });
              })(s, i, t, e)
            : (i[t.axis] = t.parse(s, e)),
          i
        );
      }
      function q(s, i, t, e) {
        const n = s.iScale,
          o = s.vScale,
          r = n.getLabels(),
          l = n === o,
          c = [];
        let d, g, m, x;
        for (d = t, g = t + e; d < g; ++d)
          (x = i[d]),
            (m = {}),
            (m[n.axis] = l || n.parse(r[d], d)),
            c.push(X(x, m, o, d));
        return c;
      }
      function G(s) {
        return s && void 0 !== s.barStart && void 0 !== s.barEnd;
      }
      function Zt(s, i, t, e) {
        let n = i.borderSkipped;
        const o = {};
        if (!n) return void (s.borderSkipped = o);
        if (!0 === n)
          return void (s.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0,
          });
        const {
          start: r,
          end: l,
          reverse: c,
          top: d,
          bottom: g,
        } = (function zt(s) {
          let i, t, e, n, o;
          return (
            s.horizontal
              ? ((i = s.base > s.x), (t = "left"), (e = "right"))
              : ((i = s.base < s.y), (t = "bottom"), (e = "top")),
            i ? ((n = "end"), (o = "start")) : ((n = "start"), (o = "end")),
            { start: t, end: e, reverse: i, top: n, bottom: o }
          );
        })(s);
        "middle" === n &&
          t &&
          ((s.enableBorderRadius = !0),
          (t._top || 0) === e
            ? (n = d)
            : (t._bottom || 0) === e
            ? (n = g)
            : ((o[Lt(g, r, l, c)] = !0), (n = d))),
          (o[Lt(n, r, l, c)] = !0),
          (s.borderSkipped = o);
      }
      function Lt(s, i, t, e) {
        return (
          e
            ? ((s = (function qe(s, i, t) {
                return s === i ? t : s === t ? i : s;
              })(s, i, t)),
              (s = Ti(s, t, i)))
            : (s = Ti(s, i, t)),
          s
        );
      }
      function Ti(s, i, t) {
        return "start" === s ? i : "end" === s ? t : s;
      }
      function rs(s, { inflateAmount: i }, t) {
        s.inflateAmount = "auto" === i ? (1 === t ? 0.33 : 0) : i;
      }
      let pe = (() => {
          class s extends It {
            parsePrimitiveData(t, e, n, o) {
              return q(t, e, n, o);
            }
            parseArrayData(t, e, n, o) {
              return q(t, e, n, o);
            }
            parseObjectData(t, e, n, o) {
              const { iScale: r, vScale: l } = t,
                { xAxisKey: c = "x", yAxisKey: d = "y" } = this._parsing,
                g = "x" === r.axis ? c : d,
                m = "x" === l.axis ? c : d,
                x = [];
              let v, S, P, O;
              for (v = n, S = n + o; v < S; ++v)
                (O = e[v]),
                  (P = {}),
                  (P[r.axis] = r.parse((0, u.f)(O, g), v)),
                  x.push(X((0, u.f)(O, m), P, l, v));
              return x;
            }
            updateRangeFromParsed(t, e, n, o) {
              super.updateRangeFromParsed(t, e, n, o);
              const r = n._custom;
              r &&
                e === this._cachedMeta.vScale &&
                ((t.min = Math.min(t.min, r.min)),
                (t.max = Math.max(t.max, r.max)));
            }
            getMaxOverflow() {
              return 0;
            }
            getLabelAndValue(t) {
              const e = this._cachedMeta,
                { iScale: n, vScale: o } = e,
                r = this.getParsed(t),
                l = r._custom,
                c = G(l)
                  ? "[" + l.start + ", " + l.end + "]"
                  : "" + o.getLabelForValue(r[o.axis]);
              return { label: "" + n.getLabelForValue(r[n.axis]), value: c };
            }
            initialize() {
              (this.enableOptionSharing = !0),
                super.initialize(),
                (this._cachedMeta.stack = this.getDataset().stack);
            }
            update(t) {
              const e = this._cachedMeta;
              this.updateElements(e.data, 0, e.data.length, t);
            }
            updateElements(t, e, n, o) {
              const r = "reset" === o,
                {
                  index: l,
                  _cachedMeta: { vScale: c },
                } = this,
                d = c.getBasePixel(),
                g = c.isHorizontal(),
                m = this._getRuler(),
                { sharedOptions: x, includeOptions: v } =
                  this._getSharedOptions(e, o);
              for (let S = e; S < e + n; S++) {
                const P = this.getParsed(S),
                  O =
                    r || (0, u.k)(P[c.axis])
                      ? { base: d, head: d }
                      : this._calculateBarValuePixels(S),
                  z = this._calculateBarIndexPixels(S, m),
                  A = (P._stacks || {})[c.axis],
                  B = {
                    horizontal: g,
                    base: O.base,
                    enableBorderRadius:
                      !A || G(P._custom) || l === A._top || l === A._bottom,
                    x: g ? O.head : z.center,
                    y: g ? z.center : O.head,
                    height: g ? z.size : Math.abs(O.size),
                    width: g ? Math.abs(O.size) : z.size,
                  };
                v &&
                  (B.options =
                    x ||
                    this.resolveDataElementOptions(
                      S,
                      t[S].active ? "active" : o
                    ));
                const j = B.options || t[S].options;
                Zt(B, j, A, l),
                  rs(B, j, m.ratio),
                  this.updateElement(t[S], S, B, o);
              }
            }
            _getStacks(t, e) {
              const { iScale: n } = this._cachedMeta,
                o = n
                  .getMatchingVisibleMetas(this._type)
                  .filter((d) => d.controller.options.grouped),
                r = n.options.stacked,
                l = [],
                c = (d) => {
                  const g = d.controller.getParsed(e),
                    m = g && g[d.vScale.axis];
                  if ((0, u.k)(m) || isNaN(m)) return !0;
                };
              for (const d of o)
                if (
                  (void 0 === e || !c(d)) &&
                  ((!1 === r ||
                    -1 === l.indexOf(d.stack) ||
                    (void 0 === r && void 0 === d.stack)) &&
                    l.push(d.stack),
                  d.index === t)
                )
                  break;
              return l.length || l.push(void 0), l;
            }
            _getStackCount(t) {
              return this._getStacks(void 0, t).length;
            }
            _getStackIndex(t, e, n) {
              const o = this._getStacks(t, n),
                r = void 0 !== e ? o.indexOf(e) : -1;
              return -1 === r ? o.length - 1 : r;
            }
            _getRuler() {
              const t = this.options,
                e = this._cachedMeta,
                n = e.iScale,
                o = [];
              let r, l;
              for (r = 0, l = e.data.length; r < l; ++r)
                o.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
              const c = t.barThickness;
              return {
                min: c || Qe(e),
                pixels: o,
                start: n._startPixel,
                end: n._endPixel,
                stackCount: this._getStackCount(),
                scale: n,
                grouped: t.grouped,
                ratio: c ? 1 : t.categoryPercentage * t.barPercentage,
              };
            }
            _calculateBarValuePixels(t) {
              const {
                  _cachedMeta: { vScale: e, _stacked: n, index: o },
                  options: { base: r, minBarLength: l },
                } = this,
                c = r || 0,
                d = this.getParsed(t),
                g = d._custom,
                m = G(g);
              let P,
                O,
                x = d[e.axis],
                v = 0,
                S = n ? this.applyStack(e, d, n) : x;
              S !== x && ((v = S - x), (S = x)),
                m &&
                  ((x = g.barStart),
                  (S = g.barEnd - g.barStart),
                  0 !== x && (0, u.s)(x) !== (0, u.s)(g.barEnd) && (v = 0),
                  (v += x));
              const z = (0, u.k)(r) || m ? v : r;
              let A = e.getPixelForValue(z);
              if (
                ((P = this.chart.getDataVisibility(t)
                  ? e.getPixelForValue(v + S)
                  : A),
                (O = P - A),
                Math.abs(O) < l)
              ) {
                (O =
                  (function lt(s, i, t) {
                    return 0 !== s
                      ? (0, u.s)(s)
                      : (i.isHorizontal() ? 1 : -1) * (i.min >= t ? 1 : -1);
                  })(O, e, c) * l),
                  x === c && (A -= O / 2);
                const B = e.getPixelForDecimal(0),
                  j = e.getPixelForDecimal(1),
                  L = Math.min(B, j),
                  H = Math.max(B, j);
                (A = Math.max(Math.min(A, H), L)),
                  (P = A + O),
                  n &&
                    !m &&
                    (d._stacks[e.axis]._visualValues[o] =
                      e.getValueForPixel(P) - e.getValueForPixel(A));
              }
              if (A === e.getPixelForValue(c)) {
                const B = ((0, u.s)(O) * e.getLineWidthForValue(c)) / 2;
                (A += B), (O -= B);
              }
              return { size: O, base: A, head: P, center: P + O / 2 };
            }
            _calculateBarIndexPixels(t, e) {
              const n = e.scale,
                o = this.options,
                r = o.skipNull,
                l = (0, u.v)(o.maxBarThickness, 1 / 0);
              let c, d;
              if (e.grouped) {
                const g = r ? this._getStackCount(t) : e.stackCount,
                  m =
                    "flex" === o.barThickness
                      ? (function ge(s, i, t, e) {
                          const n = i.pixels,
                            o = n[s];
                          let r = s > 0 ? n[s - 1] : null,
                            l = s < n.length - 1 ? n[s + 1] : null;
                          const c = t.categoryPercentage;
                          null === r &&
                            (r = o - (null === l ? i.end - i.start : l - o)),
                            null === l && (l = o + o - r);
                          const d = o - ((o - Math.min(r, l)) / 2) * c;
                          return {
                            chunk: ((Math.abs(l - r) / 2) * c) / e,
                            ratio: t.barPercentage,
                            start: d,
                          };
                        })(t, e, o, g)
                      : (function Ai(s, i, t, e) {
                          const n = t.barThickness;
                          let o, r;
                          return (
                            (0, u.k)(n)
                              ? ((o = i.min * t.categoryPercentage),
                                (r = t.barPercentage))
                              : ((o = n * e), (r = 1)),
                            {
                              chunk: o / e,
                              ratio: r,
                              start: i.pixels[s] - o / 2,
                            }
                          );
                        })(t, e, o, g),
                  x = this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    r ? t : void 0
                  );
                (c = m.start + m.chunk * x + m.chunk / 2),
                  (d = Math.min(l, m.chunk * m.ratio));
              } else
                (c = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
                  (d = Math.min(l, e.min * e.ratio));
              return { base: c - d / 2, head: c + d / 2, center: c, size: d };
            }
            draw() {
              const t = this._cachedMeta,
                e = t.vScale,
                n = t.data,
                o = n.length;
              let r = 0;
              for (; r < o; ++r)
                null !== this.getParsed(r)[e.axis] && n[r].draw(this._ctx);
            }
          }
          return (
            (0, R.Z)(s, "id", "bar"),
            (0, R.Z)(s, "defaults", {
              datasetElementType: !1,
              dataElementType: "bar",
              categoryPercentage: 0.8,
              barPercentage: 0.9,
              grouped: !0,
              animations: {
                numbers: {
                  type: "number",
                  properties: ["x", "y", "base", "width", "height"],
                },
              },
            }),
            (0, R.Z)(s, "overrides", {
              scales: {
                _index_: { type: "category", offset: !0, grid: { offset: !0 } },
                _value_: { type: "linear", beginAtZero: !0 },
              },
            }),
            s
          );
        })(),
        ho = (() => {
          class s extends It {
            initialize() {
              (this.enableOptionSharing = !0), super.initialize();
            }
            parsePrimitiveData(t, e, n, o) {
              const r = super.parsePrimitiveData(t, e, n, o);
              for (let l = 0; l < r.length; l++)
                r[l]._custom = this.resolveDataElementOptions(l + n).radius;
              return r;
            }
            parseArrayData(t, e, n, o) {
              const r = super.parseArrayData(t, e, n, o);
              for (let l = 0; l < r.length; l++)
                r[l]._custom = (0, u.v)(
                  e[n + l][2],
                  this.resolveDataElementOptions(l + n).radius
                );
              return r;
            }
            parseObjectData(t, e, n, o) {
              const r = super.parseObjectData(t, e, n, o);
              for (let l = 0; l < r.length; l++) {
                const c = e[n + l];
                r[l]._custom = (0, u.v)(
                  c && c.r && +c.r,
                  this.resolveDataElementOptions(l + n).radius
                );
              }
              return r;
            }
            getMaxOverflow() {
              const t = this._cachedMeta.data;
              let e = 0;
              for (let n = t.length - 1; n >= 0; --n)
                e = Math.max(
                  e,
                  t[n].size(this.resolveDataElementOptions(n)) / 2
                );
              return e > 0 && e;
            }
            getLabelAndValue(t) {
              const e = this._cachedMeta,
                n = this.chart.data.labels || [],
                { xScale: o, yScale: r } = e,
                l = this.getParsed(t),
                c = o.getLabelForValue(l.x),
                d = r.getLabelForValue(l.y),
                g = l._custom;
              return {
                label: n[t] || "",
                value: "(" + c + ", " + d + (g ? ", " + g : "") + ")",
              };
            }
            update(t) {
              const e = this._cachedMeta.data;
              this.updateElements(e, 0, e.length, t);
            }
            updateElements(t, e, n, o) {
              const r = "reset" === o,
                { iScale: l, vScale: c } = this._cachedMeta,
                { sharedOptions: d, includeOptions: g } =
                  this._getSharedOptions(e, o),
                m = l.axis,
                x = c.axis;
              for (let v = e; v < e + n; v++) {
                const S = t[v],
                  P = !r && this.getParsed(v),
                  O = {},
                  z = (O[m] = r
                    ? l.getPixelForDecimal(0.5)
                    : l.getPixelForValue(P[m])),
                  A = (O[x] = r ? c.getBasePixel() : c.getPixelForValue(P[x]));
                (O.skip = isNaN(z) || isNaN(A)),
                  g &&
                    ((O.options =
                      d ||
                      this.resolveDataElementOptions(
                        v,
                        S.active ? "active" : o
                      )),
                    r && (O.options.radius = 0)),
                  this.updateElement(S, v, O, o);
              }
            }
            resolveDataElementOptions(t, e) {
              const n = this.getParsed(t);
              let o = super.resolveDataElementOptions(t, e);
              o.$shared && (o = Object.assign({}, o, { $shared: !1 }));
              const r = o.radius;
              return (
                "active" !== e && (o.radius = 0),
                (o.radius += (0, u.v)(n && n._custom, r)),
                o
              );
            }
          }
          return (
            (0, R.Z)(s, "id", "bubble"),
            (0, R.Z)(s, "defaults", {
              datasetElementType: !1,
              dataElementType: "point",
              animations: {
                numbers: {
                  type: "number",
                  properties: ["x", "y", "borderWidth", "radius"],
                },
              },
            }),
            (0, R.Z)(s, "overrides", {
              scales: { x: { type: "linear" }, y: { type: "linear" } },
            }),
            s
          );
        })(),
        zi = (() => {
          class s extends It {
            constructor(t, e) {
              super(t, e),
                (this.enableOptionSharing = !0),
                (this.innerRadius = void 0),
                (this.outerRadius = void 0),
                (this.offsetX = void 0),
                (this.offsetY = void 0);
            }
            linkScales() {}
            parse(t, e) {
              const n = this.getDataset().data,
                o = this._cachedMeta;
              if (!1 === this._parsing) o._parsed = n;
              else {
                let l,
                  c,
                  r = (d) => +n[d];
                if ((0, u.i)(n[t])) {
                  const { key: d = "value" } = this._parsing;
                  r = (g) => +(0, u.f)(n[g], d);
                }
                for (l = t, c = t + e; l < c; ++l) o._parsed[l] = r(l);
              }
            }
            _getRotation() {
              return (0, u.t)(this.options.rotation - 90);
            }
            _getCircumference() {
              return (0, u.t)(this.options.circumference);
            }
            _getRotationExtents() {
              let t = u.T,
                e = -u.T;
              for (let n = 0; n < this.chart.data.datasets.length; ++n)
                if (
                  this.chart.isDatasetVisible(n) &&
                  this.chart.getDatasetMeta(n).type === this._type
                ) {
                  const o = this.chart.getDatasetMeta(n).controller,
                    r = o._getRotation(),
                    l = o._getCircumference();
                  (t = Math.min(t, r)), (e = Math.max(e, r + l));
                }
              return { rotation: t, circumference: e - t };
            }
            update(t) {
              const e = this.chart,
                { chartArea: n } = e,
                o = this._cachedMeta,
                r = o.data,
                l =
                  this.getMaxBorderWidth() +
                  this.getMaxOffset(r) +
                  this.options.spacing,
                c = Math.max((Math.min(n.width, n.height) - l) / 2, 0),
                d = Math.min((0, u.m)(this.options.cutout, c), 1),
                g = this._getRingWeight(this.index),
                { circumference: m, rotation: x } = this._getRotationExtents(),
                {
                  ratioX: v,
                  ratioY: S,
                  offsetX: P,
                  offsetY: O,
                } = (function as(s, i, t) {
                  let e = 1,
                    n = 1,
                    o = 0,
                    r = 0;
                  if (i < u.T) {
                    const l = s,
                      c = l + i,
                      d = Math.cos(l),
                      g = Math.sin(l),
                      m = Math.cos(c),
                      x = Math.sin(c),
                      v = (B, j, L) =>
                        (0, u.p)(B, l, c, !0)
                          ? 1
                          : Math.max(j, j * t, L, L * t),
                      S = (B, j, L) =>
                        (0, u.p)(B, l, c, !0)
                          ? -1
                          : Math.min(j, j * t, L, L * t),
                      P = v(0, d, m),
                      O = v(u.H, g, x),
                      z = S(u.P, d, m),
                      A = S(u.P + u.H, g, x);
                    (e = (P - z) / 2),
                      (n = (O - A) / 2),
                      (o = -(P + z) / 2),
                      (r = -(O + A) / 2);
                  }
                  return { ratioX: e, ratioY: n, offsetX: o, offsetY: r };
                })(x, m, d),
                B = Math.max(
                  Math.min((n.width - l) / v, (n.height - l) / S) / 2,
                  0
                ),
                j = (0, u.n)(this.options.radius, B),
                H =
                  (j - Math.max(j * d, 0)) /
                  this._getVisibleDatasetWeightTotal();
              (this.offsetX = P * j),
                (this.offsetY = O * j),
                (o.total = this.calculateTotal()),
                (this.outerRadius =
                  j - H * this._getRingWeightOffset(this.index)),
                (this.innerRadius = Math.max(this.outerRadius - H * g, 0)),
                this.updateElements(r, 0, r.length, t);
            }
            _circumference(t, e) {
              const n = this.options,
                o = this._cachedMeta,
                r = this._getCircumference();
              return (e && n.animation.animateRotate) ||
                !this.chart.getDataVisibility(t) ||
                null === o._parsed[t] ||
                o.data[t].hidden
                ? 0
                : this.calculateCircumference((o._parsed[t] * r) / u.T);
            }
            updateElements(t, e, n, o) {
              const r = "reset" === o,
                l = this.chart,
                c = l.chartArea,
                m = (c.left + c.right) / 2,
                x = (c.top + c.bottom) / 2,
                v = r && l.options.animation.animateScale,
                S = v ? 0 : this.innerRadius,
                P = v ? 0 : this.outerRadius,
                { sharedOptions: O, includeOptions: z } =
                  this._getSharedOptions(e, o);
              let B,
                A = this._getRotation();
              for (B = 0; B < e; ++B) A += this._circumference(B, r);
              for (B = e; B < e + n; ++B) {
                const j = this._circumference(B, r),
                  L = t[B],
                  H = {
                    x: m + this.offsetX,
                    y: x + this.offsetY,
                    startAngle: A,
                    endAngle: A + j,
                    circumference: j,
                    outerRadius: P,
                    innerRadius: S,
                  };
                z &&
                  (H.options =
                    O ||
                    this.resolveDataElementOptions(B, L.active ? "active" : o)),
                  (A += j),
                  this.updateElement(L, B, H, o);
              }
            }
            calculateTotal() {
              const t = this._cachedMeta,
                e = t.data;
              let o,
                n = 0;
              for (o = 0; o < e.length; o++) {
                const r = t._parsed[o];
                null !== r &&
                  !isNaN(r) &&
                  this.chart.getDataVisibility(o) &&
                  !e[o].hidden &&
                  (n += Math.abs(r));
              }
              return n;
            }
            calculateCircumference(t) {
              const e = this._cachedMeta.total;
              return e > 0 && !isNaN(t) ? u.T * (Math.abs(t) / e) : 0;
            }
            getLabelAndValue(t) {
              const n = this.chart,
                o = n.data.labels || [],
                r = (0, u.o)(this._cachedMeta._parsed[t], n.options.locale);
              return { label: o[t] || "", value: r };
            }
            getMaxBorderWidth(t) {
              let e = 0;
              const n = this.chart;
              let o, r, l, c, d;
              if (!t)
                for (o = 0, r = n.data.datasets.length; o < r; ++o)
                  if (n.isDatasetVisible(o)) {
                    (l = n.getDatasetMeta(o)), (t = l.data), (c = l.controller);
                    break;
                  }
              if (!t) return 0;
              for (o = 0, r = t.length; o < r; ++o)
                (d = c.resolveDataElementOptions(o)),
                  "inner" !== d.borderAlign &&
                    (e = Math.max(
                      e,
                      d.borderWidth || 0,
                      d.hoverBorderWidth || 0
                    ));
              return e;
            }
            getMaxOffset(t) {
              let e = 0;
              for (let n = 0, o = t.length; n < o; ++n) {
                const r = this.resolveDataElementOptions(n);
                e = Math.max(e, r.offset || 0, r.hoverOffset || 0);
              }
              return e;
            }
            _getRingWeightOffset(t) {
              let e = 0;
              for (let n = 0; n < t; ++n)
                this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
              return e;
            }
            _getRingWeight(t) {
              return Math.max(
                (0, u.v)(this.chart.data.datasets[t].weight, 1),
                0
              );
            }
            _getVisibleDatasetWeightTotal() {
              return (
                this._getRingWeightOffset(this.chart.data.datasets.length) || 1
              );
            }
          }
          return (
            (0, R.Z)(s, "id", "doughnut"),
            (0, R.Z)(s, "defaults", {
              datasetElementType: !1,
              dataElementType: "arc",
              animation: { animateRotate: !0, animateScale: !1 },
              animations: {
                numbers: {
                  type: "number",
                  properties: [
                    "circumference",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "startAngle",
                    "x",
                    "y",
                    "offset",
                    "borderWidth",
                    "spacing",
                  ],
                },
              },
              cutout: "50%",
              rotation: 0,
              circumference: 360,
              radius: "100%",
              spacing: 0,
              indexAxis: "r",
            }),
            (0, R.Z)(s, "descriptors", {
              _scriptable: (i) => "spacing" !== i,
              _indexable: (i) =>
                "spacing" !== i &&
                !i.startsWith("borderDash") &&
                !i.startsWith("hoverBorderDash"),
            }),
            (0, R.Z)(s, "overrides", {
              aspectRatio: 1,
              plugins: {
                legend: {
                  labels: {
                    generateLabels(i) {
                      const t = i.data;
                      if (t.labels.length && t.datasets.length) {
                        const {
                          labels: { pointStyle: e, color: n },
                        } = i.legend.options;
                        return t.labels.map((o, r) => {
                          const c = i.getDatasetMeta(0).controller.getStyle(r);
                          return {
                            text: o,
                            fillStyle: c.backgroundColor,
                            strokeStyle: c.borderColor,
                            fontColor: n,
                            lineWidth: c.borderWidth,
                            pointStyle: e,
                            hidden: !i.getDataVisibility(r),
                            index: r,
                          };
                        });
                      }
                      return [];
                    },
                  },
                  onClick(i, t, e) {
                    e.chart.toggleDataVisibility(t.index), e.chart.update();
                  },
                },
              },
            }),
            s
          );
        })(),
        Oe = (() => {
          class s extends It {
            initialize() {
              (this.enableOptionSharing = !0),
                (this.supportsDecimation = !0),
                super.initialize();
            }
            update(t) {
              const e = this._cachedMeta,
                { dataset: n, data: o = [], _dataset: r } = e,
                l = this.chart._animationsDisabled;
              let { start: c, count: d } = (0, u.q)(e, o, l);
              (this._drawStart = c),
                (this._drawCount = d),
                (0, u.w)(e) && ((c = 0), (d = o.length)),
                (n._chart = this.chart),
                (n._datasetIndex = this.index),
                (n._decimated = !!r._decimated),
                (n.points = o);
              const g = this.resolveDatasetElementOptions(t);
              this.options.showLine || (g.borderWidth = 0),
                (g.segment = this.options.segment),
                this.updateElement(n, void 0, { animated: !l, options: g }, t),
                this.updateElements(o, c, d, t);
            }
            updateElements(t, e, n, o) {
              const r = "reset" === o,
                {
                  iScale: l,
                  vScale: c,
                  _stacked: d,
                  _dataset: g,
                } = this._cachedMeta,
                { sharedOptions: m, includeOptions: x } =
                  this._getSharedOptions(e, o),
                v = l.axis,
                S = c.axis,
                { spanGaps: P, segment: O } = this.options,
                z = (0, u.x)(P) ? P : Number.POSITIVE_INFINITY,
                A = this.chart._animationsDisabled || r || "none" === o,
                B = e + n,
                j = t.length;
              let L = e > 0 && this.getParsed(e - 1);
              for (let H = 0; H < j; ++H) {
                const W = t[H],
                  V = A ? W : {};
                if (H < e || H >= B) {
                  V.skip = !0;
                  continue;
                }
                const U = this.getParsed(H),
                  tt = (0, u.k)(U[S]),
                  J = (V[v] = l.getPixelForValue(U[v], H)),
                  nt = (V[S] =
                    r || tt
                      ? c.getBasePixel()
                      : c.getPixelForValue(
                          d ? this.applyStack(c, U, d) : U[S],
                          H
                        ));
                (V.skip = isNaN(J) || isNaN(nt) || tt),
                  (V.stop = H > 0 && Math.abs(U[v] - L[v]) > z),
                  O && ((V.parsed = U), (V.raw = g.data[H])),
                  x &&
                    (V.options =
                      m ||
                      this.resolveDataElementOptions(
                        H,
                        W.active ? "active" : o
                      )),
                  A || this.updateElement(W, H, V, o),
                  (L = U);
              }
            }
            getMaxOverflow() {
              const t = this._cachedMeta,
                e = t.dataset,
                n = (e.options && e.options.borderWidth) || 0,
                o = t.data || [];
              if (!o.length) return n;
              const r = o[0].size(this.resolveDataElementOptions(0)),
                l = o[o.length - 1].size(
                  this.resolveDataElementOptions(o.length - 1)
                );
              return Math.max(n, r, l) / 2;
            }
            draw() {
              const t = this._cachedMeta;
              t.dataset.updateControlPoints(
                this.chart.chartArea,
                t.iScale.axis
              ),
                super.draw();
            }
          }
          return (
            (0, R.Z)(s, "id", "line"),
            (0, R.Z)(s, "defaults", {
              datasetElementType: "line",
              dataElementType: "point",
              showLine: !0,
              spanGaps: !1,
            }),
            (0, R.Z)(s, "overrides", {
              scales: {
                _index_: { type: "category" },
                _value_: { type: "linear" },
              },
            }),
            s
          );
        })(),
        _t = (() => {
          class s extends It {
            constructor(t, e) {
              super(t, e),
                (this.innerRadius = void 0),
                (this.outerRadius = void 0);
            }
            getLabelAndValue(t) {
              const n = this.chart,
                o = n.data.labels || [],
                r = (0, u.o)(this._cachedMeta._parsed[t].r, n.options.locale);
              return { label: o[t] || "", value: r };
            }
            parseObjectData(t, e, n, o) {
              return u.y.bind(this)(t, e, n, o);
            }
            update(t) {
              const e = this._cachedMeta.data;
              this._updateRadius(), this.updateElements(e, 0, e.length, t);
            }
            getMinMax() {
              const e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              };
              return (
                this._cachedMeta.data.forEach((n, o) => {
                  const r = this.getParsed(o).r;
                  !isNaN(r) &&
                    this.chart.getDataVisibility(o) &&
                    (r < e.min && (e.min = r), r > e.max && (e.max = r));
                }),
                e
              );
            }
            _updateRadius() {
              const t = this.chart,
                e = t.chartArea,
                n = t.options,
                o = Math.min(e.right - e.left, e.bottom - e.top),
                r = Math.max(o / 2, 0),
                c =
                  (r -
                    Math.max(
                      n.cutoutPercentage ? (r / 100) * n.cutoutPercentage : 1,
                      0
                    )) /
                  t.getVisibleDatasetCount();
              (this.outerRadius = r - c * this.index),
                (this.innerRadius = this.outerRadius - c);
            }
            updateElements(t, e, n, o) {
              const r = "reset" === o,
                l = this.chart,
                d = l.options.animation,
                g = this._cachedMeta.rScale,
                m = g.xCenter,
                x = g.yCenter,
                v = g.getIndexAngle(0) - 0.5 * u.P;
              let P,
                S = v;
              const O = 360 / this.countVisibleElements();
              for (P = 0; P < e; ++P) S += this._computeAngle(P, o, O);
              for (P = e; P < e + n; P++) {
                const z = t[P];
                let A = S,
                  B = S + this._computeAngle(P, o, O),
                  j = l.getDataVisibility(P)
                    ? g.getDistanceFromCenterForValue(this.getParsed(P).r)
                    : 0;
                (S = B),
                  r &&
                    (d.animateScale && (j = 0), d.animateRotate && (A = B = v));
                const L = {
                  x: m,
                  y: x,
                  innerRadius: 0,
                  outerRadius: j,
                  startAngle: A,
                  endAngle: B,
                  options: this.resolveDataElementOptions(
                    P,
                    z.active ? "active" : o
                  ),
                };
                this.updateElement(z, P, L, o);
              }
            }
            countVisibleElements() {
              let e = 0;
              return (
                this._cachedMeta.data.forEach((n, o) => {
                  !isNaN(this.getParsed(o).r) &&
                    this.chart.getDataVisibility(o) &&
                    e++;
                }),
                e
              );
            }
            _computeAngle(t, e, n) {
              return this.chart.getDataVisibility(t)
                ? (0, u.t)(this.resolveDataElementOptions(t, e).angle || n)
                : 0;
            }
          }
          return (
            (0, R.Z)(s, "id", "polarArea"),
            (0, R.Z)(s, "defaults", {
              dataElementType: "arc",
              animation: { animateRotate: !0, animateScale: !0 },
              animations: {
                numbers: {
                  type: "number",
                  properties: [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                  ],
                },
              },
              indexAxis: "r",
              startAngle: 0,
            }),
            (0, R.Z)(s, "overrides", {
              aspectRatio: 1,
              plugins: {
                legend: {
                  labels: {
                    generateLabels(i) {
                      const t = i.data;
                      if (t.labels.length && t.datasets.length) {
                        const {
                          labels: { pointStyle: e, color: n },
                        } = i.legend.options;
                        return t.labels.map((o, r) => {
                          const c = i.getDatasetMeta(0).controller.getStyle(r);
                          return {
                            text: o,
                            fillStyle: c.backgroundColor,
                            strokeStyle: c.borderColor,
                            fontColor: n,
                            lineWidth: c.borderWidth,
                            pointStyle: e,
                            hidden: !i.getDataVisibility(r),
                            index: r,
                          };
                        });
                      }
                      return [];
                    },
                  },
                  onClick(i, t, e) {
                    e.chart.toggleDataVisibility(t.index), e.chart.update();
                  },
                },
              },
              scales: {
                r: {
                  type: "radialLinear",
                  angleLines: { display: !1 },
                  beginAtZero: !0,
                  grid: { circular: !0 },
                  pointLabels: { display: !1 },
                  startAngle: 0,
                },
              },
            }),
            s
          );
        })();
      var yt = Object.freeze({
        __proto__: null,
        BarController: pe,
        BubbleController: ho,
        DoughnutController: zi,
        LineController: Oe,
        PieController: (() => {
          class s extends zi {}
          return (
            (0, R.Z)(s, "id", "pie"),
            (0, R.Z)(s, "defaults", {
              cutout: 0,
              rotation: 0,
              circumference: 360,
              radius: "100%",
            }),
            s
          );
        })(),
        PolarAreaController: _t,
        RadarController: (() => {
          class s extends It {
            getLabelAndValue(t) {
              const e = this._cachedMeta.vScale,
                n = this.getParsed(t);
              return {
                label: e.getLabels()[t],
                value: "" + e.getLabelForValue(n[e.axis]),
              };
            }
            parseObjectData(t, e, n, o) {
              return u.y.bind(this)(t, e, n, o);
            }
            update(t) {
              const e = this._cachedMeta,
                n = e.dataset,
                o = e.data || [],
                r = e.iScale.getLabels();
              if (((n.points = o), "resize" !== t)) {
                const l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0),
                  this.updateElement(
                    n,
                    void 0,
                    { _loop: !0, _fullLoop: r.length === o.length, options: l },
                    t
                  );
              }
              this.updateElements(o, 0, o.length, t);
            }
            updateElements(t, e, n, o) {
              const r = this._cachedMeta.rScale,
                l = "reset" === o;
              for (let c = e; c < e + n; c++) {
                const d = t[c],
                  g = this.resolveDataElementOptions(
                    c,
                    d.active ? "active" : o
                  ),
                  m = r.getPointPositionForValue(c, this.getParsed(c).r),
                  x = l ? r.xCenter : m.x,
                  v = l ? r.yCenter : m.y,
                  S = {
                    x,
                    y: v,
                    angle: m.angle,
                    skip: isNaN(x) || isNaN(v),
                    options: g,
                  };
                this.updateElement(d, c, S, o);
              }
            }
          }
          return (
            (0, R.Z)(s, "id", "radar"),
            (0, R.Z)(s, "defaults", {
              datasetElementType: "line",
              dataElementType: "point",
              indexAxis: "r",
              showLine: !0,
              elements: { line: { fill: "start" } },
            }),
            (0, R.Z)(s, "overrides", {
              aspectRatio: 1,
              scales: { r: { type: "radialLinear" } },
            }),
            s
          );
        })(),
        ScatterController: (() => {
          class s extends It {
            getLabelAndValue(t) {
              const e = this._cachedMeta,
                n = this.chart.data.labels || [],
                { xScale: o, yScale: r } = e,
                l = this.getParsed(t),
                c = o.getLabelForValue(l.x),
                d = r.getLabelForValue(l.y);
              return { label: n[t] || "", value: "(" + c + ", " + d + ")" };
            }
            update(t) {
              const e = this._cachedMeta,
                { data: n = [] } = e,
                o = this.chart._animationsDisabled;
              let { start: r, count: l } = (0, u.q)(e, n, o);
              if (
                ((this._drawStart = r),
                (this._drawCount = l),
                (0, u.w)(e) && ((r = 0), (l = n.length)),
                this.options.showLine)
              ) {
                this.datasetElementType || this.addElements();
                const { dataset: c, _dataset: d } = e;
                (c._chart = this.chart),
                  (c._datasetIndex = this.index),
                  (c._decimated = !!d._decimated),
                  (c.points = n);
                const g = this.resolveDatasetElementOptions(t);
                (g.segment = this.options.segment),
                  this.updateElement(
                    c,
                    void 0,
                    { animated: !o, options: g },
                    t
                  );
              } else
                this.datasetElementType &&
                  (delete e.dataset, (this.datasetElementType = !1));
              this.updateElements(n, r, l, t);
            }
            addElements() {
              const { showLine: t } = this.options;
              !this.datasetElementType &&
                t &&
                (this.datasetElementType =
                  this.chart.registry.getElement("line")),
                super.addElements();
            }
            updateElements(t, e, n, o) {
              const r = "reset" === o,
                {
                  iScale: l,
                  vScale: c,
                  _stacked: d,
                  _dataset: g,
                } = this._cachedMeta,
                m = this.resolveDataElementOptions(e, o),
                x = this.getSharedOptions(m),
                v = this.includeOptions(o, x),
                S = l.axis,
                P = c.axis,
                { spanGaps: O, segment: z } = this.options,
                A = (0, u.x)(O) ? O : Number.POSITIVE_INFINITY,
                B = this.chart._animationsDisabled || r || "none" === o;
              let j = e > 0 && this.getParsed(e - 1);
              for (let L = e; L < e + n; ++L) {
                const H = t[L],
                  W = this.getParsed(L),
                  V = B ? H : {},
                  U = (0, u.k)(W[P]),
                  tt = (V[S] = l.getPixelForValue(W[S], L)),
                  J = (V[P] =
                    r || U
                      ? c.getBasePixel()
                      : c.getPixelForValue(
                          d ? this.applyStack(c, W, d) : W[P],
                          L
                        ));
                (V.skip = isNaN(tt) || isNaN(J) || U),
                  (V.stop = L > 0 && Math.abs(W[S] - j[S]) > A),
                  z && ((V.parsed = W), (V.raw = g.data[L])),
                  v &&
                    (V.options =
                      x ||
                      this.resolveDataElementOptions(
                        L,
                        H.active ? "active" : o
                      )),
                  B || this.updateElement(H, L, V, o),
                  (j = W);
              }
              this.updateSharedOptions(x, o, m);
            }
            getMaxOverflow() {
              const t = this._cachedMeta,
                e = t.data || [];
              if (!this.options.showLine) {
                let c = 0;
                for (let d = e.length - 1; d >= 0; --d)
                  c = Math.max(
                    c,
                    e[d].size(this.resolveDataElementOptions(d)) / 2
                  );
                return c > 0 && c;
              }
              const n = t.dataset,
                o = (n.options && n.options.borderWidth) || 0;
              if (!e.length) return o;
              const r = e[0].size(this.resolveDataElementOptions(0)),
                l = e[e.length - 1].size(
                  this.resolveDataElementOptions(e.length - 1)
                );
              return Math.max(o, r, l) / 2;
            }
          }
          return (
            (0, R.Z)(s, "id", "scatter"),
            (0, R.Z)(s, "defaults", {
              datasetElementType: !1,
              dataElementType: "point",
              showLine: !1,
              fill: !1,
            }),
            (0, R.Z)(s, "overrides", {
              interaction: { mode: "point" },
              scales: { x: { type: "linear" }, y: { type: "linear" } },
            }),
            s
          );
        })(),
      });
      function oe() {
        throw new Error(
          "This method is not implemented: Check that a complete date adapter is provided."
        );
      }
      class Je {
        static override(i) {
          Object.assign(Je.prototype, i);
        }
        constructor(i) {
          (0, R.Z)(this, "options", void 0), (this.options = i || {});
        }
        init() {}
        formats() {
          return oe();
        }
        parse() {
          return oe();
        }
        format() {
          return oe();
        }
        add() {
          return oe();
        }
        diff() {
          return oe();
        }
        startOf() {
          return oe();
        }
        endOf() {
          return oe();
        }
      }
      var ls__date = Je;
      function cs(s, i, t, e) {
        const { controller: n, data: o, _sorted: r } = s,
          l = n._cachedMeta.iScale;
        if (l && i === l.axis && "r" !== i && r && o.length) {
          const c = l._reversePixels ? u.A : u.B;
          if (!e) return c(o, i, t);
          if (n._sharedOptions) {
            const d = o[0],
              g = "function" == typeof d.getRange && d.getRange(i);
            if (g) {
              const m = c(o, i, t - g),
                x = c(o, i, t + g);
              return { lo: m.lo, hi: x.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function Ae(s, i, t, e, n) {
        const o = s.getSortedVisibleDatasetMetas(),
          r = t[i];
        for (let l = 0, c = o.length; l < c; ++l) {
          const { index: d, data: g } = o[l],
            { lo: m, hi: x } = cs(o[l], i, r, n);
          for (let v = m; v <= x; ++v) {
            const S = g[v];
            S.skip || e(S, d, v);
          }
        }
      }
      function ti(s, i, t, e, n) {
        const o = [];
        return (
          (!n && !s.isPointInArea(i)) ||
            Ae(
              s,
              t,
              i,
              function (l, c, d) {
                (!n && !(0, u.C)(l, s.chartArea, 0)) ||
                  (l.inRange(i.x, i.y, e) &&
                    o.push({ element: l, datasetIndex: c, index: d }));
              },
              !0
            ),
          o
        );
      }
      function ei(s, i, t, e, n, o) {
        return o || s.isPointInArea(i)
          ? "r" !== t || e
            ? (function be(s, i, t, e, n, o) {
                let r = [];
                const l = (function me(s) {
                  const i = -1 !== s.indexOf("x"),
                    t = -1 !== s.indexOf("y");
                  return function (e, n) {
                    const o = i ? Math.abs(e.x - n.x) : 0,
                      r = t ? Math.abs(e.y - n.y) : 0;
                    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
                  };
                })(t);
                let c = Number.POSITIVE_INFINITY;
                return (
                  Ae(s, t, i, function d(g, m, x) {
                    const v = g.inRange(i.x, i.y, n);
                    if (e && !v) return;
                    const S = g.getCenterPoint(n);
                    if (!o && !s.isPointInArea(S) && !v) return;
                    const O = l(i, S);
                    O < c
                      ? ((r = [{ element: g, datasetIndex: m, index: x }]),
                        (c = O))
                      : O === c &&
                        r.push({ element: g, datasetIndex: m, index: x });
                  }),
                  r
                );
              })(s, i, t, e, n, o)
            : (function Li(s, i, t, e) {
                let n = [];
                return (
                  Ae(s, t, i, function o(r, l, c) {
                    const { startAngle: d, endAngle: g } = r.getProps(
                        ["startAngle", "endAngle"],
                        e
                      ),
                      { angle: m } = (0, u.D)(r, { x: i.x, y: i.y });
                    (0, u.p)(m, d, g) &&
                      n.push({ element: r, datasetIndex: l, index: c });
                  }),
                  n
                );
              })(s, i, t, n)
          : [];
      }
      function rn(s, i, t, e, n) {
        const o = [],
          r = "x" === t ? "inXRange" : "inYRange";
        let l = !1;
        return (
          Ae(s, t, i, (c, d, g) => {
            c[r](i[t], n) &&
              (o.push({ element: c, datasetIndex: d, index: g }),
              (l = l || c.inRange(i.x, i.y, n)));
          }),
          e && !l ? [] : o
        );
      }
      var fo = {
        evaluateInteractionItems: Ae,
        modes: {
          index(s, i, t, e) {
            const n = (0, u.z)(i, s),
              o = t.axis || "x",
              r = t.includeInvisible || !1,
              l = t.intersect ? ti(s, n, o, e, r) : ei(s, n, o, !1, e, r),
              c = [];
            return l.length
              ? (s.getSortedVisibleDatasetMetas().forEach((d) => {
                  const g = l[0].index,
                    m = d.data[g];
                  m &&
                    !m.skip &&
                    c.push({ element: m, datasetIndex: d.index, index: g });
                }),
                c)
              : [];
          },
          dataset(s, i, t, e) {
            const n = (0, u.z)(i, s),
              o = t.axis || "xy",
              r = t.includeInvisible || !1;
            let l = t.intersect ? ti(s, n, o, e, r) : ei(s, n, o, !1, e, r);
            if (l.length > 0) {
              const c = l[0].datasetIndex,
                d = s.getDatasetMeta(c).data;
              l = [];
              for (let g = 0; g < d.length; ++g)
                l.push({ element: d[g], datasetIndex: c, index: g });
            }
            return l;
          },
          point: (s, i, t, e) =>
            ti(s, (0, u.z)(i, s), t.axis || "xy", e, t.includeInvisible || !1),
          nearest: (s, i, t, e) =>
            ei(
              s,
              (0, u.z)(i, s),
              t.axis || "xy",
              t.intersect,
              e,
              t.includeInvisible || !1
            ),
          x: (s, i, t, e) => rn(s, (0, u.z)(i, s), "x", t.intersect, e),
          y: (s, i, t, e) => rn(s, (0, u.z)(i, s), "y", t.intersect, e),
        },
      };
      const Ei = ["left", "top", "right", "bottom"];
      function Te(s, i) {
        return s.filter((t) => t.pos === i);
      }
      function an(s, i) {
        return s.filter((t) => -1 === Ei.indexOf(t.pos) && t.box.axis === i);
      }
      function re(s, i) {
        return s.sort((t, e) => {
          const n = i ? e : t,
            o = i ? t : e;
          return n.weight === o.weight
            ? n.index - o.index
            : n.weight - o.weight;
        });
      }
      function ln(s, i, t, e) {
        return Math.max(s[t], i[t]) + Math.max(s[e], i[e]);
      }
      function ft(s, i) {
        (s.top = Math.max(s.top, i.top)),
          (s.left = Math.max(s.left, i.left)),
          (s.bottom = Math.max(s.bottom, i.bottom)),
          (s.right = Math.max(s.right, i.right));
      }
      function Et(s, i, t, e) {
        const { pos: n, box: o } = t,
          r = s.maxPadding;
        if (!(0, u.i)(n)) {
          t.size && (s[n] -= t.size);
          const m = e[t.stack] || { size: 0, count: 1 };
          (m.size = Math.max(m.size, t.horizontal ? o.height : o.width)),
            (t.size = m.size / m.count),
            (s[n] += t.size);
        }
        o.getPadding && ft(r, o.getPadding());
        const l = Math.max(0, i.outerWidth - ln(r, s, "left", "right")),
          c = Math.max(0, i.outerHeight - ln(r, s, "top", "bottom")),
          d = l !== s.w,
          g = c !== s.h;
        return (
          (s.w = l),
          (s.h = c),
          t.horizontal ? { same: d, other: g } : { same: g, other: d }
        );
      }
      function ii(s, i) {
        const t = i.maxPadding;
        return (function e(n) {
          const o = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            n.forEach((r) => {
              o[r] = Math.max(i[r], t[r]);
            }),
            o
          );
        })(s ? ["left", "right"] : ["top", "bottom"]);
      }
      function Le(s, i, t, e) {
        const n = [];
        let o, r, l, c, d, g;
        for (o = 0, r = s.length, d = 0; o < r; ++o) {
          (l = s[o]),
            (c = l.box),
            c.update(l.width || i.w, l.height || i.h, ii(l.horizontal, i));
          const { same: m, other: x } = Et(i, t, l, e);
          (d |= m && n.length), (g = g || x), c.fullSize || n.push(l);
        }
        return (d && Le(n, i, t, e)) || g;
      }
      function vt(s, i, t, e, n) {
        (s.top = t),
          (s.left = i),
          (s.right = i + e),
          (s.bottom = t + n),
          (s.width = e),
          (s.height = n);
      }
      function Ft(s, i, t, e) {
        const n = t.padding;
        let { x: o, y: r } = i;
        for (const l of s) {
          const c = l.box,
            d = e[l.stack] || { count: 1, placed: 0, weight: 1 },
            g = l.stackWeight / d.weight || 1;
          if (l.horizontal) {
            const m = i.w * g,
              x = d.size || c.height;
            (0, u.h)(d.start) && (r = d.start),
              c.fullSize
                ? vt(c, n.left, r, t.outerWidth - n.right - n.left, x)
                : vt(c, i.left + d.placed, r, m, x),
              (d.start = r),
              (d.placed += m),
              (r = c.bottom);
          } else {
            const m = i.h * g,
              x = d.size || c.width;
            (0, u.h)(d.start) && (o = d.start),
              c.fullSize
                ? vt(c, o, n.top, x, t.outerHeight - n.bottom - n.top)
                : vt(c, o, i.top + d.placed, x, m),
              (d.start = o),
              (d.placed += m),
              (o = c.right);
          }
        }
        (i.x = o), (i.y = r);
      }
      var gt = {
        addBox(s, i) {
          s.boxes || (s.boxes = []),
            (i.fullSize = i.fullSize || !1),
            (i.position = i.position || "top"),
            (i.weight = i.weight || 0),
            (i._layers =
              i._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      i.draw(t);
                    },
                  },
                ];
              }),
            s.boxes.push(i);
        },
        removeBox(s, i) {
          const t = s.boxes ? s.boxes.indexOf(i) : -1;
          -1 !== t && s.boxes.splice(t, 1);
        },
        configure(s, i, t) {
          (i.fullSize = t.fullSize),
            (i.position = t.position),
            (i.weight = t.weight);
        },
        update(s, i, t, e) {
          if (!s) return;
          const n = (0, u.E)(s.options.layout.padding),
            o = Math.max(i - n.width, 0),
            r = Math.max(t - n.height, 0),
            l = (function ds(s) {
              const i = (function Ri(s) {
                  const i = [];
                  let t, e, n, o, r, l;
                  for (t = 0, e = (s || []).length; t < e; ++t)
                    (n = s[t]),
                      ({
                        position: o,
                        options: { stack: r, stackWeight: l = 1 },
                      } = n),
                      i.push({
                        index: t,
                        box: n,
                        pos: o,
                        horizontal: n.isHorizontal(),
                        weight: n.weight,
                        stack: r && o + r,
                        stackWeight: l,
                      });
                  return i;
                })(s),
                t = re(
                  i.filter((d) => d.box.fullSize),
                  !0
                ),
                e = re(Te(i, "left"), !0),
                n = re(Te(i, "right")),
                o = re(Te(i, "top"), !0),
                r = re(Te(i, "bottom")),
                l = an(i, "x"),
                c = an(i, "y");
              return {
                fullSize: t,
                leftAndTop: e.concat(o),
                rightAndBottom: n.concat(c).concat(r).concat(l),
                chartArea: Te(i, "chartArea"),
                vertical: e.concat(n).concat(c),
                horizontal: o.concat(r).concat(l),
              };
            })(s.boxes),
            c = l.vertical,
            d = l.horizontal;
          (0, u.F)(s.boxes, (P) => {
            "function" == typeof P.beforeLayout && P.beforeLayout();
          });
          const g =
              c.reduce(
                (P, O) =>
                  O.box.options && !1 === O.box.options.display ? P : P + 1,
                0
              ) || 1,
            m = Object.freeze({
              outerWidth: i,
              outerHeight: t,
              padding: n,
              availableWidth: o,
              availableHeight: r,
              vBoxMaxWidth: o / 2 / g,
              hBoxMaxHeight: r / 2,
            }),
            x = Object.assign({}, n);
          ft(x, (0, u.E)(e));
          const v = Object.assign(
              { maxPadding: x, w: o, h: r, x: n.left, y: n.top },
              n
            ),
            S = (function ze(s, i) {
              const t = (function hs(s) {
                  const i = {};
                  for (const t of s) {
                    const { stack: e, pos: n, stackWeight: o } = t;
                    if (!e || !Ei.includes(n)) continue;
                    const r =
                      i[e] ||
                      (i[e] = { count: 0, placed: 0, weight: 0, size: 0 });
                    r.count++, (r.weight += o);
                  }
                  return i;
                })(s),
                { vBoxMaxWidth: e, hBoxMaxHeight: n } = i;
              let o, r, l;
              for (o = 0, r = s.length; o < r; ++o) {
                l = s[o];
                const { fullSize: c } = l.box,
                  d = t[l.stack],
                  g = d && l.stackWeight / d.weight;
                l.horizontal
                  ? ((l.width = g ? g * e : c && i.availableWidth),
                    (l.height = n))
                  : ((l.width = e),
                    (l.height = g ? g * n : c && i.availableHeight));
              }
              return t;
            })(c.concat(d), m);
          Le(l.fullSize, v, m, S),
            Le(c, v, m, S),
            Le(d, v, m, S) && Le(c, v, m, S),
            (function us(s) {
              const i = s.maxPadding;
              function t(e) {
                const n = Math.max(i[e] - s[e], 0);
                return (s[e] += n), n;
              }
              (s.y += t("top")), (s.x += t("left")), t("right"), t("bottom");
            })(v),
            Ft(l.leftAndTop, v, m, S),
            (v.x += v.w),
            (v.y += v.h),
            Ft(l.rightAndBottom, v, m, S),
            (s.chartArea = {
              left: v.left,
              top: v.top,
              right: v.left + v.w,
              bottom: v.top + v.h,
              height: v.h,
              width: v.w,
            }),
            (0, u.F)(l.chartArea, (P) => {
              const O = P.box;
              Object.assign(O, s.chartArea),
                O.update(v.w, v.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      };
      class _e {
        acquireContext(i, t) {}
        releaseContext(i) {
          return !1;
        }
        addEventListener(i, t, e) {}
        removeEventListener(i, t, e) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(i, t, e, n) {
          return (
            (t = Math.max(0, t || i.width)),
            (e = e || i.height),
            { width: t, height: Math.max(0, n ? Math.floor(t / n) : e) }
          );
        }
        isAttached(i) {
          return !0;
        }
        updateConfig(i) {}
      }
      class Ii extends _e {
        acquireContext(i) {
          return (i && i.getContext && i.getContext("2d")) || null;
        }
        updateConfig(i) {
          i.options.animation = !1;
        }
      }
      const Bt = "$chartjs",
        fs = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        cn = (s) => null === s || "" === s,
        hn = !!u.K && { passive: !0 };
      function ms(s, i, t) {
        s.canvas.removeEventListener(i, t, hn);
      }
      function ni(s, i) {
        for (const t of s) if (t === i || t.contains(i)) return !0;
      }
      function _s(s, i, t) {
        const e = s.canvas,
          n = new MutationObserver((o) => {
            let r = !1;
            for (const l of o)
              (r = r || ni(l.addedNodes, e)), (r = r && !ni(l.removedNodes, e));
            r && t();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      function Fi(s, i, t) {
        const e = s.canvas,
          n = new MutationObserver((o) => {
            let r = !1;
            for (const l of o)
              (r = r || ni(l.removedNodes, e)), (r = r && !ni(l.addedNodes, e));
            r && t();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      const Ee = new Map();
      let Ht = 0;
      function Bi() {
        const s = window.devicePixelRatio;
        s !== Ht &&
          ((Ht = s),
          Ee.forEach((i, t) => {
            t.currentDevicePixelRatio !== s && i();
          }));
      }
      function dn(s, i, t) {
        const e = s.canvas,
          n = e && (0, u.I)(e);
        if (!n) return;
        const o = (0, u.L)((l, c) => {
            const d = n.clientWidth;
            t(l, c), d < n.clientWidth && t();
          }, window),
          r = new ResizeObserver((l) => {
            const c = l[0],
              d = c.contentRect.width,
              g = c.contentRect.height;
            (0 === d && 0 === g) || o(d, g);
          });
        return (
          r.observe(n),
          (function si(s, i) {
            Ee.size || window.addEventListener("resize", Bi), Ee.set(s, i);
          })(s, o),
          r
        );
      }
      function jt(s, i, t) {
        t && t.disconnect(),
          "resize" === i &&
            (function xs(s) {
              Ee.delete(s), Ee.size || window.removeEventListener("resize", Bi);
            })(s);
      }
      function xe(s, i, t) {
        const e = s.canvas,
          n = (0, u.L)((o) => {
            null !== s.ctx &&
              t(
                (function bs(s, i) {
                  const t = fs[s.type] || s.type,
                    { x: e, y: n } = (0, u.z)(s, i);
                  return {
                    type: t,
                    chart: i,
                    native: s,
                    x: void 0 !== e ? e : null,
                    y: void 0 !== n ? n : null,
                  };
                })(o, s)
              );
          }, s);
        return (
          (function ps(s, i, t) {
            s.addEventListener(i, t, hn);
          })(e, i, n),
          n
        );
      }
      class ys extends _e {
        acquireContext(i, t) {
          const e = i && i.getContext && i.getContext("2d");
          return e && e.canvas === i
            ? ((function gs(s, i) {
                const t = s.style,
                  e = s.getAttribute("height"),
                  n = s.getAttribute("width");
                if (
                  ((s[Bt] = {
                    initial: {
                      height: e,
                      width: n,
                      style: {
                        display: t.display,
                        height: t.height,
                        width: t.width,
                      },
                    },
                  }),
                  (t.display = t.display || "block"),
                  (t.boxSizing = t.boxSizing || "border-box"),
                  cn(n))
                ) {
                  const o = (0, u.J)(s, "width");
                  void 0 !== o && (s.width = o);
                }
                if (cn(e))
                  if ("" === s.style.height) s.height = s.width / (i || 2);
                  else {
                    const o = (0, u.J)(s, "height");
                    void 0 !== o && (s.height = o);
                  }
              })(i, t),
              e)
            : null;
        }
        releaseContext(i) {
          const t = i.canvas;
          if (!t[Bt]) return !1;
          const e = t[Bt].initial;
          ["height", "width"].forEach((o) => {
            const r = e[o];
            (0, u.k)(r) ? t.removeAttribute(o) : t.setAttribute(o, r);
          });
          const n = e.style || {};
          return (
            Object.keys(n).forEach((o) => {
              t.style[o] = n[o];
            }),
            (t.width = t.width),
            delete t[Bt],
            !0
          );
        }
        addEventListener(i, t, e) {
          this.removeEventListener(i, t),
            ((i.$proxies || (i.$proxies = {}))[t] = (
              { attach: _s, detach: Fi, resize: dn }[t] || xe
            )(i, t, e));
        }
        removeEventListener(i, t) {
          const e = i.$proxies || (i.$proxies = {}),
            n = e[t];
          n &&
            (({ attach: jt, detach: jt, resize: jt }[t] || ms)(i, t, n),
            (e[t] = void 0));
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(i, t, e, n) {
          return (0, u.G)(i, t, e, n);
        }
        isAttached(i) {
          const t = (0, u.I)(i);
          return !(!t || !t.isConnected);
        }
      }
      class wt {
        constructor() {
          (0, R.Z)(this, "x", void 0),
            (0, R.Z)(this, "y", void 0),
            (0, R.Z)(this, "active", !1),
            (0, R.Z)(this, "options", void 0),
            (0, R.Z)(this, "$animations", void 0);
        }
        tooltipPosition(i) {
          const { x: t, y: e } = this.getProps(["x", "y"], i);
          return { x: t, y: e };
        }
        hasValue() {
          return (0, u.x)(this.x) && (0, u.x)(this.y);
        }
        getProps(i, t) {
          const e = this.$animations;
          if (!t || !e) return this;
          const n = {};
          return (
            i.forEach((o) => {
              n[o] = e[o] && e[o].active() ? e[o]._to : this[o];
            }),
            n
          );
        }
      }
      function ri(s, i, t, e, n) {
        const o = (0, u.v)(e, 0),
          r = Math.min((0, u.v)(n, s.length), s.length);
        let c,
          d,
          g,
          l = 0;
        for (
          t = Math.ceil(t),
            n && ((c = n - e), (t = c / Math.floor(c / t))),
            g = o;
          g < 0;

        )
          l++, (g = Math.round(o + l * t));
        for (d = Math.max(o, 0); d < r; d++)
          d === g && (i.push(s[d]), l++, (g = Math.round(o + l * t)));
      }
      (0, R.Z)(wt, "defaults", {}), (0, R.Z)(wt, "defaultRoutes", void 0);
      const fn = (s, i, t) =>
          "top" === i || "left" === i ? s[i] + t : s[i] - t,
        gn = (s, i) => Math.min(i || s, s);
      function pn(s, i) {
        const t = [],
          e = s.length / i,
          n = s.length;
        let o = 0;
        for (; o < n; o += e) t.push(s[Math.floor(o)]);
        return t;
      }
      function ye(s, i, t) {
        const e = s.ticks.length,
          n = Math.min(i, e - 1),
          o = s._startPixel,
          r = s._endPixel,
          l = 1e-6;
        let d,
          c = s.getPixelForTick(n);
        if (
          !(
            t &&
            ((d =
              1 === e
                ? Math.max(c - o, r - c)
                : 0 === i
                ? (s.getPixelForTick(1) - c) / 2
                : (c - s.getPixelForTick(n - 1)) / 2),
            (c += n < i ? d : -d),
            c < o - l || c > r + l)
          )
        )
          return c;
      }
      function ve(s) {
        return s.drawTicks ? s.tickLength : 0;
      }
      function Hi(s, i) {
        if (!s.display) return 0;
        const t = (0, u.a0)(s.font, i),
          e = (0, u.E)(s.padding);
        return ((0, u.b)(s.text) ? s.text.length : 1) * t.lineHeight + e.height;
      }
      function Ps(s, i, t) {
        let e = (0, u.a1)(s);
        return (
          ((t && "right" !== i) || (!t && "right" === i)) &&
            (e = ((s) => ("left" === s ? "right" : "right" === s ? "left" : s))(
              e
            )),
          e
        );
      }
      class Nt extends wt {
        constructor(i) {
          super(),
            (this.id = i.id),
            (this.type = i.type),
            (this.options = void 0),
            (this.ctx = i.ctx),
            (this.chart = i.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(i) {
          (this.options = i.setContext(this.getContext())),
            (this.axis = i.axis),
            (this._userMin = this.parse(i.min)),
            (this._userMax = this.parse(i.max)),
            (this._suggestedMin = this.parse(i.suggestedMin)),
            (this._suggestedMax = this.parse(i.suggestedMax));
        }
        parse(i, t) {
          return i;
        }
        getUserBounds() {
          let {
            _userMin: i,
            _userMax: t,
            _suggestedMin: e,
            _suggestedMax: n,
          } = this;
          return (
            (i = (0, u.O)(i, Number.POSITIVE_INFINITY)),
            (t = (0, u.O)(t, Number.NEGATIVE_INFINITY)),
            (e = (0, u.O)(e, Number.POSITIVE_INFINITY)),
            (n = (0, u.O)(n, Number.NEGATIVE_INFINITY)),
            {
              min: (0, u.O)(i, e),
              max: (0, u.O)(t, n),
              minDefined: (0, u.g)(i),
              maxDefined: (0, u.g)(t),
            }
          );
        }
        getMinMax(i) {
          let r,
            {
              min: t,
              max: e,
              minDefined: n,
              maxDefined: o,
            } = this.getUserBounds();
          if (n && o) return { min: t, max: e };
          const l = this.getMatchingVisibleMetas();
          for (let c = 0, d = l.length; c < d; ++c)
            (r = l[c].controller.getMinMax(this, i)),
              n || (t = Math.min(t, r.min)),
              o || (e = Math.max(e, r.max));
          return (
            (t = o && t > e ? e : t),
            (e = n && t > e ? t : e),
            {
              min: (0, u.O)(t, (0, u.O)(e, t)),
              max: (0, u.O)(e, (0, u.O)(t, e)),
            }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const i = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? i.xLabels : i.yLabels) ||
            i.labels ||
            []
          );
        }
        getLabelItems(i = this.chart.chartArea) {
          return (
            this._labelItems || (this._labelItems = this._computeLabelItems(i))
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          (0, u.Q)(this.options.beforeUpdate, [this]);
        }
        update(i, t, e) {
          const { beginAtZero: n, grace: o, ticks: r } = this.options,
            l = r.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = i),
            (this.maxHeight = t),
            (this._margins = e =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, e)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + e.left + e.right
              : this.height + e.top + e.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (0, u.R)(this, o, n)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          const c = l < this.ticks.length;
          this._convertTicksToLabels(c ? pn(this.ticks, l) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            r.display &&
              (r.autoSkip || "auto" === r.source) &&
              ((this.ticks = (function Ms(s, i) {
                const t = s.options.ticks,
                  e = (function Ss(s) {
                    const i = s.options.offset,
                      t = s._tickSize();
                    return Math.floor(
                      Math.min(s._length / t + (i ? 0 : 1), s._maxLength / t)
                    );
                  })(s),
                  n = Math.min(t.maxTicksLimit || e, e),
                  o = t.major.enabled
                    ? (function go(s) {
                        const i = [];
                        let t, e;
                        for (t = 0, e = s.length; t < e; t++)
                          s[t].major && i.push(t);
                        return i;
                      })(i)
                    : [],
                  r = o.length,
                  l = o[0],
                  c = o[r - 1],
                  d = [];
                if (r > n)
                  return (
                    (function un(s, i, t, e) {
                      let r,
                        n = 0,
                        o = t[0];
                      for (e = Math.ceil(e), r = 0; r < s.length; r++)
                        r === o && (i.push(s[r]), n++, (o = t[n * e]));
                    })(i, d, o, r / n),
                    d
                  );
                const g = (function oi(s, i, t) {
                  const e = (function ws(s) {
                      const i = s.length;
                      let t, e;
                      if (i < 2) return !1;
                      for (e = s[0], t = 1; t < i; ++t)
                        if (s[t] - s[t - 1] !== e) return !1;
                      return e;
                    })(s),
                    n = i.length / t;
                  if (!e) return Math.max(n, 1);
                  const o = (0, u.N)(e);
                  for (let r = 0, l = o.length - 1; r < l; r++) {
                    const c = o[r];
                    if (c > n) return c;
                  }
                  return Math.max(n, 1);
                })(o, i, n);
                if (r > 0) {
                  let m, x;
                  const v = r > 1 ? Math.round((c - l) / (r - 1)) : null;
                  for (
                    ri(i, d, g, (0, u.k)(v) ? 0 : l - v, l), m = 0, x = r - 1;
                    m < x;
                    m++
                  )
                    ri(i, d, g, o[m], o[m + 1]);
                  return ri(i, d, g, c, (0, u.k)(v) ? i.length : c + v), d;
                }
                return ri(i, d, g), d;
              })(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            c && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let t,
            e,
            i = this.options.reverse;
          this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (i = !i)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = i),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          (0, u.Q)(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          (0, u.Q)(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          (0, u.Q)(this.options.afterSetDimensions, [this]);
        }
        _callHooks(i) {
          this.chart.notifyPlugins(i, this.getContext()),
            (0, u.Q)(this.options[i], [this]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          (0, u.Q)(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(i) {
          const t = this.options.ticks;
          let e, n, o;
          for (e = 0, n = i.length; e < n; e++)
            (o = i[e]), (o.label = (0, u.Q)(t.callback, [o.value, e, i], this));
        }
        afterTickToLabelConversion() {
          (0, u.Q)(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          (0, u.Q)(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const i = this.options,
            t = i.ticks,
            e = gn(this.ticks.length, i.ticks.maxTicksLimit),
            n = t.minRotation || 0,
            o = t.maxRotation;
          let l,
            c,
            d,
            r = n;
          if (
            !this._isVisible() ||
            !t.display ||
            n >= o ||
            e <= 1 ||
            !this.isHorizontal()
          )
            return void (this.labelRotation = n);
          const g = this._getLabelSizes(),
            m = g.widest.width,
            x = g.highest.height,
            v = (0, u.S)(this.chart.width - m, 0, this.maxWidth);
          (l = i.offset ? this.maxWidth / e : v / (e - 1)),
            m + 6 > l &&
              ((l = v / (e - (i.offset ? 0.5 : 1))),
              (c =
                this.maxHeight -
                ve(i.grid) -
                t.padding -
                Hi(i.title, this.chart.options.font)),
              (d = Math.sqrt(m * m + x * x)),
              (r = (0, u.U)(
                Math.min(
                  Math.asin((0, u.S)((g.highest.height + 6) / l, -1, 1)),
                  Math.asin((0, u.S)(c / d, -1, 1)) -
                    Math.asin((0, u.S)(x / d, -1, 1))
                )
              )),
              (r = Math.max(n, Math.min(o, r)))),
            (this.labelRotation = r);
        }
        afterCalculateLabelRotation() {
          (0, u.Q)(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
          (0, u.Q)(this.options.beforeFit, [this]);
        }
        fit() {
          const i = { width: 0, height: 0 },
            {
              chart: t,
              options: { ticks: e, title: n, grid: o },
            } = this,
            r = this._isVisible(),
            l = this.isHorizontal();
          if (r) {
            const c = Hi(n, t.options.font);
            if (
              (l
                ? ((i.width = this.maxWidth), (i.height = ve(o) + c))
                : ((i.height = this.maxHeight), (i.width = ve(o) + c)),
              e.display && this.ticks.length)
            ) {
              const {
                  first: d,
                  last: g,
                  widest: m,
                  highest: x,
                } = this._getLabelSizes(),
                v = 2 * e.padding,
                S = (0, u.t)(this.labelRotation),
                P = Math.cos(S),
                O = Math.sin(S);
              l
                ? (i.height = Math.min(
                    this.maxHeight,
                    i.height + (e.mirror ? 0 : O * m.width + P * x.height) + v
                  ))
                : (i.width = Math.min(
                    this.maxWidth,
                    i.width + (e.mirror ? 0 : P * m.width + O * x.height) + v
                  )),
                this._calculatePadding(d, g, O, P);
            }
          }
          this._handleMargins(),
            l
              ? ((this.width = this._length =
                  t.width - this._margins.left - this._margins.right),
                (this.height = i.height))
              : ((this.width = i.width),
                (this.height = this._length =
                  t.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(i, t, e, n) {
          const {
              ticks: { align: o, padding: r },
              position: l,
            } = this.options,
            c = 0 !== this.labelRotation,
            d = "top" !== l && "x" === this.axis;
          if (this.isHorizontal()) {
            const g = this.getPixelForTick(0) - this.left,
              m = this.right - this.getPixelForTick(this.ticks.length - 1);
            let x = 0,
              v = 0;
            c
              ? d
                ? ((x = n * i.width), (v = e * t.height))
                : ((x = e * i.height), (v = n * t.width))
              : "start" === o
              ? (v = t.width)
              : "end" === o
              ? (x = i.width)
              : "inner" !== o && ((x = i.width / 2), (v = t.width / 2)),
              (this.paddingLeft = Math.max(
                ((x - g + r) * this.width) / (this.width - g),
                0
              )),
              (this.paddingRight = Math.max(
                ((v - m + r) * this.width) / (this.width - m),
                0
              ));
          } else {
            let g = t.height / 2,
              m = i.height / 2;
            "start" === o
              ? ((g = 0), (m = i.height))
              : "end" === o && ((g = t.height), (m = 0)),
              (this.paddingTop = g + r),
              (this.paddingBottom = m + r);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(
              this.paddingLeft,
              this._margins.left
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
              this.paddingRight,
              this._margins.right
            )),
            (this._margins.bottom = Math.max(
              this.paddingBottom,
              this._margins.bottom
            )));
        }
        afterFit() {
          (0, u.Q)(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: i, position: t } = this.options;
          return "top" === t || "bottom" === t || "x" === i;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(i) {
          let t, e;
          for (
            this.beforeTickToLabelConversion(),
              this.generateTickLabels(i),
              t = 0,
              e = i.length;
            t < e;
            t++
          )
            (0, u.k)(i[t].label) && (i.splice(t, 1), e--, t--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let i = this._labelSizes;
          if (!i) {
            const t = this.options.ticks.sampleSize;
            let e = this.ticks;
            t < e.length && (e = pn(e, t)),
              (this._labelSizes = i =
                this._computeLabelSizes(
                  e,
                  e.length,
                  this.options.ticks.maxTicksLimit
                ));
          }
          return i;
        }
        _computeLabelSizes(i, t, e) {
          const { ctx: n, _longestTextCache: o } = this,
            r = [],
            l = [],
            c = Math.floor(t / gn(t, e));
          let m,
            x,
            v,
            S,
            P,
            O,
            z,
            A,
            B,
            j,
            L,
            d = 0,
            g = 0;
          for (m = 0; m < t; m += c) {
            if (
              ((S = i[m].label),
              (P = this._resolveTickFontOptions(m)),
              (n.font = O = P.string),
              (z = o[O] = o[O] || { data: {}, gc: [] }),
              (A = P.lineHeight),
              (B = j = 0),
              (0, u.k)(S) || (0, u.b)(S))
            ) {
              if ((0, u.b)(S))
                for (x = 0, v = S.length; x < v; ++x)
                  (L = S[x]),
                    !(0, u.k)(L) &&
                      !(0, u.b)(L) &&
                      ((B = (0, u.V)(n, z.data, z.gc, B, L)), (j += A));
            } else (B = (0, u.V)(n, z.data, z.gc, B, S)), (j = A);
            r.push(B), l.push(j), (d = Math.max(B, d)), (g = Math.max(j, g));
          }
          !(function ai(s, i) {
            (0, u.F)(s, (t) => {
              const e = t.gc,
                n = e.length / 2;
              let o;
              if (n > i) {
                for (o = 0; o < n; ++o) delete t.data[e[o]];
                e.splice(0, n);
              }
            });
          })(o, t);
          const H = r.indexOf(d),
            W = l.indexOf(g),
            V = (U) => ({ width: r[U] || 0, height: l[U] || 0 });
          return {
            first: V(0),
            last: V(t - 1),
            widest: V(H),
            highest: V(W),
            widths: r,
            heights: l,
          };
        }
        getLabelForValue(i) {
          return i;
        }
        getPixelForValue(i, t) {
          return NaN;
        }
        getValueForPixel(i) {}
        getPixelForTick(i) {
          const t = this.ticks;
          return i < 0 || i > t.length - 1
            ? null
            : this.getPixelForValue(t[i].value);
        }
        getPixelForDecimal(i) {
          this._reversePixels && (i = 1 - i);
          const t = this._startPixel + i * this._length;
          return (0, u.W)(this._alignToPixels ? (0, u.X)(this.chart, t, 0) : t);
        }
        getDecimalForPixel(i) {
          const t = (i - this._startPixel) / this._length;
          return this._reversePixels ? 1 - t : t;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: i, max: t } = this;
          return i < 0 && t < 0 ? t : i > 0 && t > 0 ? i : 0;
        }
        getContext(i) {
          const t = this.ticks || [];
          if (i >= 0 && i < t.length) {
            const e = t[i];
            return (
              e.$context ||
              (e.$context = (function Xt(s, i, t) {
                return (0, u.j)(s, { tick: t, index: i, type: "tick" });
              })(this.getContext(), i, e))
            );
          }
          return (
            this.$context ||
            (this.$context = (function li(s, i) {
              return (0, u.j)(s, { scale: i, type: "scale" });
            })(this.chart.getContext(), this))
          );
        }
        _tickSize() {
          const i = this.options.ticks,
            t = (0, u.t)(this.labelRotation),
            e = Math.abs(Math.cos(t)),
            n = Math.abs(Math.sin(t)),
            o = this._getLabelSizes(),
            r = i.autoSkipPadding || 0,
            l = o ? o.widest.width + r : 0,
            c = o ? o.highest.height + r : 0;
          return this.isHorizontal()
            ? c * e > l * n
              ? l / e
              : c / n
            : c * n < l * e
            ? c / e
            : l / n;
        }
        _isVisible() {
          const i = this.options.display;
          return "auto" !== i ? !!i : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(i) {
          const t = this.axis,
            e = this.chart,
            n = this.options,
            { grid: o, position: r, border: l } = n,
            c = o.offset,
            d = this.isHorizontal(),
            m = this.ticks.length + (c ? 1 : 0),
            x = ve(o),
            v = [],
            S = l.setContext(this.getContext()),
            P = S.display ? S.width : 0,
            O = P / 2,
            z = function (ut) {
              return (0, u.X)(e, ut, P);
            };
          let A, B, j, L, H, W, V, U, tt, J, nt, Mt;
          if ("top" === r)
            (A = z(this.bottom)),
              (W = this.bottom - x),
              (U = A - O),
              (J = z(i.top) + O),
              (Mt = i.bottom);
          else if ("bottom" === r)
            (A = z(this.top)),
              (J = i.top),
              (Mt = z(i.bottom) - O),
              (W = A + O),
              (U = this.top + x);
          else if ("left" === r)
            (A = z(this.right)),
              (H = this.right - x),
              (V = A - O),
              (tt = z(i.left) + O),
              (nt = i.right);
          else if ("right" === r)
            (A = z(this.left)),
              (tt = i.left),
              (nt = z(i.right) - O),
              (H = A + O),
              (V = this.left + x);
          else if ("x" === t) {
            if ("center" === r) A = z((i.top + i.bottom) / 2 + 0.5);
            else if ((0, u.i)(r)) {
              const ut = Object.keys(r)[0];
              A = z(this.chart.scales[ut].getPixelForValue(r[ut]));
            }
            (J = i.top), (Mt = i.bottom), (W = A + O), (U = W + x);
          } else if ("y" === t) {
            if ("center" === r) A = z((i.left + i.right) / 2);
            else if ((0, u.i)(r)) {
              const ut = Object.keys(r)[0];
              A = z(this.chart.scales[ut].getPixelForValue(r[ut]));
            }
            (H = A - O), (V = H - x), (tt = i.left), (nt = i.right);
          }
          const $t = (0, u.v)(n.ticks.maxTicksLimit, m),
            at = Math.max(1, Math.ceil(m / $t));
          for (B = 0; B < m; B += at) {
            const ut = this.getContext(B),
              pt = o.setContext(ut),
              he = l.setContext(ut),
              Ct = pt.lineWidth,
              ss = pt.color,
              To = he.dash || [],
              os = he.dashOffset,
              ro = pt.tickWidth,
              ao = pt.tickColor,
              lo = pt.tickBorderDash || [],
              co = pt.tickBorderDashOffset;
            (j = ye(this, B, c)),
              void 0 !== j &&
                ((L = (0, u.X)(e, j, Ct)),
                d ? (H = V = tt = nt = L) : (W = U = J = Mt = L),
                v.push({
                  tx1: H,
                  ty1: W,
                  tx2: V,
                  ty2: U,
                  x1: tt,
                  y1: J,
                  x2: nt,
                  y2: Mt,
                  width: Ct,
                  color: ss,
                  borderDash: To,
                  borderDashOffset: os,
                  tickWidth: ro,
                  tickColor: ao,
                  tickBorderDash: lo,
                  tickBorderDashOffset: co,
                }));
          }
          return (this._ticksLength = m), (this._borderValue = A), v;
        }
        _computeLabelItems(i) {
          const t = this.axis,
            e = this.options,
            { position: n, ticks: o } = e,
            r = this.isHorizontal(),
            l = this.ticks,
            { align: c, crossAlign: d, padding: g, mirror: m } = o,
            x = ve(e.grid),
            v = x + g,
            S = m ? -g : v,
            P = -(0, u.t)(this.labelRotation),
            O = [];
          let z,
            A,
            B,
            j,
            L,
            H,
            W,
            V,
            U,
            tt,
            J,
            nt,
            Mt = "middle";
          if ("top" === n)
            (H = this.bottom - S), (W = this._getXAxisLabelAlignment());
          else if ("bottom" === n)
            (H = this.top + S), (W = this._getXAxisLabelAlignment());
          else if ("left" === n) {
            const at = this._getYAxisLabelAlignment(x);
            (W = at.textAlign), (L = at.x);
          } else if ("right" === n) {
            const at = this._getYAxisLabelAlignment(x);
            (W = at.textAlign), (L = at.x);
          } else if ("x" === t) {
            if ("center" === n) H = (i.top + i.bottom) / 2 + v;
            else if ((0, u.i)(n)) {
              const at = Object.keys(n)[0];
              H = this.chart.scales[at].getPixelForValue(n[at]) + v;
            }
            W = this._getXAxisLabelAlignment();
          } else if ("y" === t) {
            if ("center" === n) L = (i.left + i.right) / 2 - v;
            else if ((0, u.i)(n)) {
              const at = Object.keys(n)[0];
              L = this.chart.scales[at].getPixelForValue(n[at]);
            }
            W = this._getYAxisLabelAlignment(x).textAlign;
          }
          "y" === t &&
            ("start" === c ? (Mt = "top") : "end" === c && (Mt = "bottom"));
          const $t = this._getLabelSizes();
          for (z = 0, A = l.length; z < A; ++z) {
            (B = l[z]), (j = B.label);
            const at = o.setContext(this.getContext(z));
            (V = this.getPixelForTick(z) + o.labelOffset),
              (U = this._resolveTickFontOptions(z)),
              (tt = U.lineHeight),
              (J = (0, u.b)(j) ? j.length : 1);
            const ut = J / 2,
              pt = at.color,
              he = at.textStrokeColor,
              Ct = at.textStrokeWidth;
            let To,
              ss = W;
            if (
              (r
                ? ((L = V),
                  "inner" === W &&
                    (ss =
                      z === A - 1
                        ? this.options.reverse
                          ? "left"
                          : "right"
                        : 0 === z
                        ? this.options.reverse
                          ? "right"
                          : "left"
                        : "center"),
                  (nt =
                    "top" === n
                      ? "near" === d || 0 !== P
                        ? -J * tt + tt / 2
                        : "center" === d
                        ? -$t.highest.height / 2 - ut * tt + tt
                        : tt / 2 - $t.highest.height
                      : "near" === d || 0 !== P
                      ? tt / 2
                      : "center" === d
                      ? $t.highest.height / 2 - ut * tt
                      : $t.highest.height - J * tt),
                  m && (nt *= -1),
                  0 !== P &&
                    !at.showLabelBackdrop &&
                    (L += (tt / 2) * Math.sin(P)))
                : ((H = V), (nt = ((1 - J) * tt) / 2)),
              at.showLabelBackdrop)
            ) {
              const os = (0, u.E)(at.backdropPadding),
                ro = $t.heights[z],
                ao = $t.widths[z];
              let lo = nt - os.top,
                co = 0 - os.left;
              switch (Mt) {
                case "middle":
                  lo -= ro / 2;
                  break;
                case "bottom":
                  lo -= ro;
              }
              switch (W) {
                case "center":
                  co -= ao / 2;
                  break;
                case "right":
                  co -= ao;
              }
              To = {
                left: co,
                top: lo,
                width: ao + os.width,
                height: ro + os.height,
                color: at.backdropColor,
              };
            }
            O.push({
              label: j,
              font: U,
              textOffset: nt,
              options: {
                rotation: P,
                color: pt,
                strokeColor: he,
                strokeWidth: Ct,
                textAlign: ss,
                textBaseline: Mt,
                translation: [L, H],
                backdrop: To,
              },
            });
          }
          return O;
        }
        _getXAxisLabelAlignment() {
          const { position: i, ticks: t } = this.options;
          if (-(0, u.t)(this.labelRotation))
            return "top" === i ? "left" : "right";
          let n = "center";
          return (
            "start" === t.align
              ? (n = "left")
              : "end" === t.align
              ? (n = "right")
              : "inner" === t.align && (n = "inner"),
            n
          );
        }
        _getYAxisLabelAlignment(i) {
          const {
              position: t,
              ticks: { crossAlign: e, mirror: n, padding: o },
            } = this.options,
            l = i + o,
            c = this._getLabelSizes().widest.width;
          let d, g;
          return (
            "left" === t
              ? n
                ? ((g = this.right + o),
                  "near" === e
                    ? (d = "left")
                    : "center" === e
                    ? ((d = "center"), (g += c / 2))
                    : ((d = "right"), (g += c)))
                : ((g = this.right - l),
                  "near" === e
                    ? (d = "right")
                    : "center" === e
                    ? ((d = "center"), (g -= c / 2))
                    : ((d = "left"), (g = this.left)))
              : "right" === t
              ? n
                ? ((g = this.left + o),
                  "near" === e
                    ? (d = "right")
                    : "center" === e
                    ? ((d = "center"), (g -= c / 2))
                    : ((d = "left"), (g -= c)))
                : ((g = this.left + l),
                  "near" === e
                    ? (d = "left")
                    : "center" === e
                    ? ((d = "center"), (g += c / 2))
                    : ((d = "right"), (g = this.right)))
              : (d = "right"),
            { textAlign: d, x: g }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const i = this.chart,
            t = this.options.position;
          return "left" === t || "right" === t
            ? { top: 0, left: this.left, bottom: i.height, right: this.right }
            : "top" === t || "bottom" === t
            ? { top: this.top, left: 0, bottom: this.bottom, right: i.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: i,
            options: { backgroundColor: t },
            left: e,
            top: n,
            width: o,
            height: r,
          } = this;
          t &&
            (i.save(), (i.fillStyle = t), i.fillRect(e, n, o, r), i.restore());
        }
        getLineWidthForValue(i) {
          const t = this.options.grid;
          if (!this._isVisible() || !t.display) return 0;
          const n = this.ticks.findIndex((o) => o.value === i);
          return n >= 0 ? t.setContext(this.getContext(n)).lineWidth : 0;
        }
        drawGrid(i) {
          const t = this.options.grid,
            e = this.ctx,
            n =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(i));
          let o, r;
          const l = (c, d, g) => {
            !g.width ||
              !g.color ||
              (e.save(),
              (e.lineWidth = g.width),
              (e.strokeStyle = g.color),
              e.setLineDash(g.borderDash || []),
              (e.lineDashOffset = g.borderDashOffset),
              e.beginPath(),
              e.moveTo(c.x, c.y),
              e.lineTo(d.x, d.y),
              e.stroke(),
              e.restore());
          };
          if (t.display)
            for (o = 0, r = n.length; o < r; ++o) {
              const c = n[o];
              t.drawOnChartArea &&
                l({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
                t.drawTicks &&
                  l(
                    { x: c.tx1, y: c.ty1 },
                    { x: c.tx2, y: c.ty2 },
                    {
                      color: c.tickColor,
                      width: c.tickWidth,
                      borderDash: c.tickBorderDash,
                      borderDashOffset: c.tickBorderDashOffset,
                    }
                  );
            }
        }
        drawBorder() {
          const {
              chart: i,
              ctx: t,
              options: { border: e, grid: n },
            } = this,
            o = e.setContext(this.getContext()),
            r = e.display ? o.width : 0;
          if (!r) return;
          const l = n.setContext(this.getContext(0)).lineWidth,
            c = this._borderValue;
          let d, g, m, x;
          this.isHorizontal()
            ? ((d = (0, u.X)(i, this.left, r) - r / 2),
              (g = (0, u.X)(i, this.right, l) + l / 2),
              (m = x = c))
            : ((m = (0, u.X)(i, this.top, r) - r / 2),
              (x = (0, u.X)(i, this.bottom, l) + l / 2),
              (d = g = c)),
            t.save(),
            (t.lineWidth = o.width),
            (t.strokeStyle = o.color),
            t.beginPath(),
            t.moveTo(d, m),
            t.lineTo(g, x),
            t.stroke(),
            t.restore();
        }
        drawLabels(i) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            n = this._computeLabelArea();
          n && (0, u.Y)(e, n);
          const o = this.getLabelItems(i);
          for (const r of o)
            (0, u.Z)(e, r.label, 0, r.textOffset, r.font, r.options);
          n && (0, u.$)(e);
        }
        drawTitle() {
          const {
            ctx: i,
            options: { position: t, title: e, reverse: n },
          } = this;
          if (!e.display) return;
          const o = (0, u.a0)(e.font),
            r = (0, u.E)(e.padding),
            l = e.align;
          let c = o.lineHeight / 2;
          "bottom" === t || "center" === t || (0, u.i)(t)
            ? ((c += r.bottom),
              (0, u.b)(e.text) && (c += o.lineHeight * (e.text.length - 1)))
            : (c += r.top);
          const {
            titleX: d,
            titleY: g,
            maxWidth: m,
            rotation: x,
          } = (function ji(s, i, t, e) {
            const { top: n, left: o, bottom: r, right: l, chart: c } = s,
              { chartArea: d, scales: g } = c;
            let x,
              v,
              S,
              m = 0;
            const P = r - n,
              O = l - o;
            if (s.isHorizontal()) {
              if (((v = (0, u.a2)(e, o, l)), (0, u.i)(t))) {
                const z = Object.keys(t)[0];
                S = g[z].getPixelForValue(t[z]) + P - i;
              } else
                S =
                  "center" === t ? (d.bottom + d.top) / 2 + P - i : fn(s, t, i);
              x = l - o;
            } else {
              if ((0, u.i)(t)) {
                const z = Object.keys(t)[0];
                v = g[z].getPixelForValue(t[z]) - O + i;
              } else
                v =
                  "center" === t ? (d.left + d.right) / 2 - O + i : fn(s, t, i);
              (S = (0, u.a2)(e, r, n)), (m = "left" === t ? -u.H : u.H);
            }
            return { titleX: v, titleY: S, maxWidth: x, rotation: m };
          })(this, c, t, l);
          (0, u.Z)(i, e.text, 0, 0, o, {
            color: e.color,
            maxWidth: m,
            rotation: x,
            textAlign: Ps(l, t, n),
            textBaseline: "middle",
            translation: [d, g],
          });
        }
        draw(i) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(i),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(i));
        }
        _layers() {
          const i = this.options,
            t = (i.ticks && i.ticks.z) || 0,
            e = (0, u.v)(i.grid && i.grid.z, -1),
            n = (0, u.v)(i.border && i.border.z, 0);
          return this._isVisible() && this.draw === Nt.prototype.draw
            ? [
                {
                  z: e,
                  draw: (o) => {
                    this.drawBackground(), this.drawGrid(o), this.drawTitle();
                  },
                },
                {
                  z: n,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: t,
                  draw: (o) => {
                    this.drawLabels(o);
                  },
                },
              ]
            : [
                {
                  z: t,
                  draw: (o) => {
                    this.draw(o);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(i) {
          const t = this.chart.getSortedVisibleDatasetMetas(),
            e = this.axis + "AxisID",
            n = [];
          let o, r;
          for (o = 0, r = t.length; o < r; ++o) {
            const l = t[o];
            l[e] === this.id && (!i || l.type === i) && n.push(l);
          }
          return n;
        }
        _resolveTickFontOptions(i) {
          const t = this.options.ticks.setContext(this.getContext(i));
          return (0, u.a0)(t.font);
        }
        _maxDigits() {
          const i = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / i;
        }
      }
      class ci {
        constructor(i, t, e) {
          (this.type = i),
            (this.scope = t),
            (this.override = e),
            (this.items = Object.create(null));
        }
        isForType(i) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            i.prototype
          );
        }
        register(i) {
          const t = Object.getPrototypeOf(i);
          let e;
          (function hi(s) {
            return "id" in s && "defaults" in s;
          })(t) && (e = this.register(t));
          const n = this.items,
            o = i.id,
            r = this.scope + "." + o;
          if (!o) throw new Error("class does not have id: " + i);
          return (
            o in n ||
              ((n[o] = i),
              (function Ni(s, i, t) {
                const e = (0, u.a4)(Object.create(null), [
                  t ? u.d.get(t) : {},
                  u.d.get(i),
                  s.defaults,
                ]);
                u.d.set(i, e),
                  s.defaultRoutes &&
                    (function Cs(s, i) {
                      Object.keys(i).forEach((t) => {
                        const e = t.split("."),
                          n = e.pop(),
                          o = [s].concat(e).join("."),
                          r = i[t].split("."),
                          l = r.pop(),
                          c = r.join(".");
                        u.d.route(o, n, c, l);
                      });
                    })(i, s.defaultRoutes),
                  s.descriptors && u.d.describe(i, s.descriptors);
              })(i, r, e),
              this.override && u.d.override(i.id, i.overrides)),
            r
          );
        }
        get(i) {
          return this.items[i];
        }
        unregister(i) {
          const t = this.items,
            e = i.id,
            n = this.scope;
          e in t && delete t[e],
            n &&
              e in u.d[n] &&
              (delete u.d[n][e], this.override && delete u.a3[e]);
        }
      }
      class Os {
        constructor() {
          (this.controllers = new ci(It, "datasets", !0)),
            (this.elements = new ci(wt, "elements")),
            (this.plugins = new ci(Object, "plugins")),
            (this.scales = new ci(Nt, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add(...i) {
          this._each("register", i);
        }
        remove(...i) {
          this._each("unregister", i);
        }
        addControllers(...i) {
          this._each("register", i, this.controllers);
        }
        addElements(...i) {
          this._each("register", i, this.elements);
        }
        addPlugins(...i) {
          this._each("register", i, this.plugins);
        }
        addScales(...i) {
          this._each("register", i, this.scales);
        }
        getController(i) {
          return this._get(i, this.controllers, "controller");
        }
        getElement(i) {
          return this._get(i, this.elements, "element");
        }
        getPlugin(i) {
          return this._get(i, this.plugins, "plugin");
        }
        getScale(i) {
          return this._get(i, this.scales, "scale");
        }
        removeControllers(...i) {
          this._each("unregister", i, this.controllers);
        }
        removeElements(...i) {
          this._each("unregister", i, this.elements);
        }
        removePlugins(...i) {
          this._each("unregister", i, this.plugins);
        }
        removeScales(...i) {
          this._each("unregister", i, this.scales);
        }
        _each(i, t, e) {
          [...t].forEach((n) => {
            const o = e || this._getRegistryForType(n);
            e || o.isForType(n) || (o === this.plugins && n.id)
              ? this._exec(i, o, n)
              : (0, u.F)(n, (r) => {
                  const l = e || this._getRegistryForType(r);
                  this._exec(i, l, r);
                });
          });
        }
        _exec(i, t, e) {
          const n = (0, u.a5)(i);
          (0, u.Q)(e["before" + n], [], e),
            t[i](e),
            (0, u.Q)(e["after" + n], [], e);
        }
        _getRegistryForType(i) {
          for (let t = 0; t < this._typedRegistries.length; t++) {
            const e = this._typedRegistries[t];
            if (e.isForType(i)) return e;
          }
          return this.plugins;
        }
        _get(i, t, e) {
          const n = t.get(i);
          if (void 0 === n)
            throw new Error('"' + i + '" is not a registered ' + e + ".");
          return n;
        }
      }
      var Vt = new Os();
      class mn {
        constructor() {
          this._init = [];
        }
        notify(i, t, e, n) {
          "beforeInit" === t &&
            ((this._init = this._createDescriptors(i, !0)),
            this._notify(this._init, i, "install"));
          const o = n ? this._descriptors(i).filter(n) : this._descriptors(i),
            r = this._notify(o, i, t, e);
          return (
            "afterDestroy" === t &&
              (this._notify(o, i, "stop"),
              this._notify(this._init, i, "uninstall")),
            r
          );
        }
        _notify(i, t, e, n) {
          n = n || {};
          for (const o of i) {
            const r = o.plugin;
            if (!1 === (0, u.Q)(r[e], [t, n, o.options], r) && n.cancelable)
              return !1;
          }
          return !0;
        }
        invalidate() {
          (0, u.k)(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(i) {
          if (this._cache) return this._cache;
          const t = (this._cache = this._createDescriptors(i));
          return this._notifyStateChanges(i), t;
        }
        _createDescriptors(i, t) {
          const e = i && i.config,
            n = (0, u.v)(e.options && e.options.plugins, {}),
            o = (function Ds(s) {
              const i = {},
                t = [],
                e = Object.keys(Vt.plugins.items);
              for (let o = 0; o < e.length; o++) t.push(Vt.getPlugin(e[o]));
              const n = s.plugins || [];
              for (let o = 0; o < n.length; o++) {
                const r = n[o];
                -1 === t.indexOf(r) && (t.push(r), (i[r.id] = !0));
              }
              return { plugins: t, localIds: i };
            })(e);
          return !1 !== n || t
            ? (function bn(s, { plugins: i, localIds: t }, e, n) {
                const o = [],
                  r = s.getContext();
                for (const l of i) {
                  const c = l.id,
                    d = Vi(e[c], n);
                  null !== d &&
                    o.push({
                      plugin: l,
                      options: _n(s.config, { plugin: l, local: t[c] }, d, r),
                    });
                }
                return o;
              })(i, o, n, t)
            : [];
        }
        _notifyStateChanges(i) {
          const t = this._oldCache || [],
            e = this._cache,
            n = (o, r) =>
              o.filter((l) => !r.some((c) => l.plugin.id === c.plugin.id));
          this._notify(n(t, e), i, "stop"), this._notify(n(e, t), i, "start");
        }
      }
      function Vi(s, i) {
        return i || !1 !== s ? (!0 === s ? {} : s) : null;
      }
      function _n(s, { plugin: i, local: t }, e, n) {
        const o = s.pluginScopeKeys(i),
          r = s.getOptionScopes(e, o);
        return (
          t && i.defaults && r.push(i.defaults),
          s.createResolver(r, n, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
          })
        );
      }
      function Re(s, i) {
        return (
          ((i.datasets || {})[s] || {}).indexAxis ||
          i.indexAxis ||
          (u.d.datasets[s] || {}).indexAxis ||
          "x"
        );
      }
      function xn(s) {
        if ("x" === s || "y" === s || "r" === s) return s;
      }
      function yn(s) {
        return "top" === s || "bottom" === s
          ? "x"
          : "left" === s || "right" === s
          ? "y"
          : void 0;
      }
      function di(s, ...i) {
        if (xn(s)) return s;
        for (const t of i) {
          const e =
            t.axis ||
            yn(t.position) ||
            (s.length > 1 && xn(s[0].toLowerCase()));
          if (e) return e;
        }
        throw new Error(
          `Cannot determine type of '${s}' axis. Please provide 'axis' or 'position' option.`
        );
      }
      function ui(s, i, t) {
        if (t[i + "AxisID"] === s) return { axis: i };
      }
      function vn(s) {
        const i = s.options || (s.options = {});
        (i.plugins = (0, u.v)(i.plugins, {})),
          (i.scales = (function Ts(s, i) {
            const t = u.a3[s.type] || { scales: {} },
              e = i.scales || {},
              n = Re(s.type, i),
              o = Object.create(null);
            return (
              Object.keys(e).forEach((r) => {
                const l = e[r];
                if (!(0, u.i)(l))
                  return console.error(
                    `Invalid scale configuration for scale: ${r}`
                  );
                if (l._proxy)
                  return console.warn(
                    `Ignoring resolver passed as options for scale: ${r}`
                  );
                const c = di(
                    r,
                    l,
                    (function As(s, i) {
                      if (i.data && i.data.datasets) {
                        const t = i.data.datasets.filter(
                          (e) => e.xAxisID === s || e.yAxisID === s
                        );
                        if (t.length)
                          return ui(s, "x", t[0]) || ui(s, "y", t[0]);
                      }
                      return {};
                    })(r, s),
                    u.d.scales[l.type]
                  ),
                  d = (function Wi(s, i) {
                    return s === i ? "_index_" : "_value_";
                  })(c, n),
                  g = t.scales || {};
                o[r] = (0, u.ab)(Object.create(null), [
                  { axis: c },
                  l,
                  g[c],
                  g[d],
                ]);
              }),
              s.data.datasets.forEach((r) => {
                const l = r.type || s.type,
                  c = r.indexAxis || Re(l, i),
                  g = (u.a3[l] || {}).scales || {};
                Object.keys(g).forEach((m) => {
                  const x = (function Me(s, i) {
                      let t = s;
                      return (
                        "_index_" === s
                          ? (t = i)
                          : "_value_" === s && (t = "x" === i ? "y" : "x"),
                        t
                      );
                    })(m, c),
                    v = r[x + "AxisID"] || x;
                  (o[v] = o[v] || Object.create(null)),
                    (0, u.ab)(o[v], [{ axis: x }, e[v], g[m]]);
                });
              }),
              Object.keys(o).forEach((r) => {
                const l = o[r];
                (0, u.ab)(l, [u.d.scales[l.type], u.d.scale]);
              }),
              o
            );
          })(s, i));
      }
      function Mn(s) {
        return (
          ((s = s || {}).datasets = s.datasets || []),
          (s.labels = s.labels || []),
          s
        );
      }
      const Ie = new Map(),
        wn = new Set();
      function fi(s, i) {
        let t = Ie.get(s);
        return t || ((t = i()), Ie.set(s, t), wn.add(t)), t;
      }
      const Fe = (s, i, t) => {
        const e = (0, u.f)(i, t);
        void 0 !== e && s.add(e);
      };
      class po {
        constructor(i) {
          (this._config = (function Sn(s) {
            return ((s = s || {}).data = Mn(s.data)), vn(s), s;
          })(i)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(i) {
          this._config.type = i;
        }
        get data() {
          return this._config.data;
        }
        set data(i) {
          this._config.data = Mn(i);
        }
        get options() {
          return this._config.options;
        }
        set options(i) {
          this._config.options = i;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const i = this._config;
          this.clearCache(), vn(i);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(i) {
          return fi(i, () => [[`datasets.${i}`, ""]]);
        }
        datasetAnimationScopeKeys(i, t) {
          return fi(`${i}.transition.${t}`, () => [
            [`datasets.${i}.transitions.${t}`, `transitions.${t}`],
            [`datasets.${i}`, ""],
          ]);
        }
        datasetElementScopeKeys(i, t) {
          return fi(`${i}-${t}`, () => [
            [
              `datasets.${i}.elements.${t}`,
              `datasets.${i}`,
              `elements.${t}`,
              "",
            ],
          ]);
        }
        pluginScopeKeys(i) {
          const t = i.id;
          return fi(`${this.type}-plugin-${t}`, () => [
            [`plugins.${t}`, ...(i.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(i, t) {
          const e = this._scopeCache;
          let n = e.get(i);
          return (!n || t) && ((n = new Map()), e.set(i, n)), n;
        }
        getOptionScopes(i, t, e) {
          const { options: n, type: o } = this,
            r = this._cachedScopes(i, e),
            l = r.get(t);
          if (l) return l;
          const c = new Set();
          t.forEach((g) => {
            i && (c.add(i), g.forEach((m) => Fe(c, i, m))),
              g.forEach((m) => Fe(c, n, m)),
              g.forEach((m) => Fe(c, u.a3[o] || {}, m)),
              g.forEach((m) => Fe(c, u.d, m)),
              g.forEach((m) => Fe(c, u.a6, m));
          });
          const d = Array.from(c);
          return (
            0 === d.length && d.push(Object.create(null)),
            wn.has(t) && r.set(t, d),
            d
          );
        }
        chartOptionScopes() {
          const { options: i, type: t } = this;
          return [
            i,
            u.a3[t] || {},
            u.d.datasets[t] || {},
            { type: t },
            u.d,
            u.a6,
          ];
        }
        resolveNamedOptions(i, t, e, n = [""]) {
          const o = { $shared: !0 },
            { resolver: r, subPrefixes: l } = kn(this._resolverCache, i, n);
          let c = r;
          if (
            (function zs(s, i) {
              const { isScriptable: t, isIndexable: e } = (0, u.aa)(s);
              for (const n of i) {
                const o = t(n),
                  r = e(n),
                  l = (r || o) && s[n];
                if ((o && ((0, u.a7)(l) || Pn(l))) || (r && (0, u.b)(l)))
                  return !0;
              }
              return !1;
            })(r, t)
          ) {
            (o.$shared = !1), (e = (0, u.a7)(e) ? e() : e);
            const d = this.createResolver(i, e, l);
            c = (0, u.a8)(r, e, d);
          }
          for (const d of t) o[d] = c[d];
          return o;
        }
        createResolver(i, t, e = [""], n) {
          const { resolver: o } = kn(this._resolverCache, i, e);
          return (0, u.i)(t) ? (0, u.a8)(o, t, void 0, n) : o;
        }
      }
      function kn(s, i, t) {
        let e = s.get(i);
        e || ((e = new Map()), s.set(i, e));
        const n = t.join();
        let o = e.get(n);
        return (
          o ||
            ((o = {
              resolver: (0, u.a9)(i, t),
              subPrefixes: t.filter((l) => !l.toLowerCase().includes("hover")),
            }),
            e.set(n, o)),
          o
        );
      }
      const Pn = (s) =>
          (0, u.i)(s) &&
          Object.getOwnPropertyNames(s).reduce(
            (i, t) => i || (0, u.a7)(s[t]),
            !1
          ),
        Cn = ["top", "bottom", "left", "right", "chartArea"];
      function On(s, i) {
        return (
          "top" === s || "bottom" === s || (-1 === Cn.indexOf(s) && "x" === i)
        );
      }
      function Dn(s, i) {
        return function (t, e) {
          return t[s] === e[s] ? t[i] - e[i] : t[s] - e[s];
        };
      }
      function An(s) {
        const i = s.chart,
          t = i.options.animation;
        i.notifyPlugins("afterRender"), (0, u.Q)(t && t.onComplete, [s], i);
      }
      function Be(s) {
        const i = s.chart,
          t = i.options.animation;
        (0, u.Q)(t && t.onProgress, [s], i);
      }
      function gi(s) {
        return (
          (0, u.M)() && "string" == typeof s
            ? (s = document.getElementById(s))
            : s && s.length && (s = s[0]),
          s && s.canvas && (s = s.canvas),
          s
        );
      }
      const He = {},
        Yi = (s) => {
          const i = gi(s);
          return Object.values(He)
            .filter((t) => t.canvas === i)
            .pop();
        };
      function Tn(s, i, t) {
        const e = Object.keys(s);
        for (const n of e) {
          const o = +n;
          if (o >= i) {
            const r = s[n];
            delete s[n], (t > 0 || o > i) && (s[o + t] = r);
          }
        }
      }
      let zn = (() => {
        class s {
          static register(...t) {
            Vt.add(...t), je();
          }
          static unregister(...t) {
            Vt.remove(...t), je();
          }
          constructor(t, e) {
            const n = (this.config = new po(e)),
              o = gi(t),
              r = Yi(o);
            if (r)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  r.id +
                  "' must be destroyed before the canvas with ID '" +
                  r.canvas.id +
                  "' can be reused."
              );
            const l = n.createResolver(
              n.chartOptionScopes(),
              this.getContext()
            );
            (this.platform = new (n.platform ||
              (function vs(s) {
                return !(0, u.M)() ||
                  (typeof OffscreenCanvas < "u" && s instanceof OffscreenCanvas)
                  ? Ii
                  : ys;
              })(o))()),
              this.platform.updateConfig(n);
            const c = this.platform.acquireContext(o, l.aspectRatio),
              d = c && c.canvas,
              g = d && d.height,
              m = d && d.width;
            (this.id = (0, u.ac)()),
              (this.ctx = c),
              (this.canvas = d),
              (this.width = m),
              (this.height = g),
              (this._options = l),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new mn()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (0, u.ad)(
                (x) => this.update(x),
                l.resizeDelay || 0
              )),
              (this._dataChanges = []),
              (He[this.id] = this),
              c && d
                ? (Ot.listen(this, "complete", An),
                  Ot.listen(this, "progress", Be),
                  this._initialize(),
                  this.attached && this.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          }
          get aspectRatio() {
            const {
              options: { aspectRatio: t, maintainAspectRatio: e },
              width: n,
              height: o,
              _aspectRatio: r,
            } = this;
            return (0, u.k)(t) ? (e && r ? r : o ? n / o : null) : t;
          }
          get data() {
            return this.config.data;
          }
          set data(t) {
            this.config.data = t;
          }
          get options() {
            return this._options;
          }
          set options(t) {
            this.config.options = t;
          }
          get registry() {
            return Vt;
          }
          _initialize() {
            return (
              this.notifyPlugins("beforeInit"),
              this.options.responsive
                ? this.resize()
                : (0, u.ae)(this, this.options.devicePixelRatio),
              this.bindEvents(),
              this.notifyPlugins("afterInit"),
              this
            );
          }
          clear() {
            return (0, u.af)(this.canvas, this.ctx), this;
          }
          stop() {
            return Ot.stop(this), this;
          }
          resize(t, e) {
            Ot.running(this)
              ? (this._resizeBeforeDraw = { width: t, height: e })
              : this._resize(t, e);
          }
          _resize(t, e) {
            const n = this.options,
              l = this.platform.getMaximumSize(
                this.canvas,
                t,
                e,
                n.maintainAspectRatio && this.aspectRatio
              ),
              c = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
              d = this.width ? "resize" : "attach";
            (this.width = l.width),
              (this.height = l.height),
              (this._aspectRatio = this.aspectRatio),
              (0, u.ae)(this, c, !0) &&
                (this.notifyPlugins("resize", { size: l }),
                (0, u.Q)(n.onResize, [this, l], this),
                this.attached && this._doResize(d) && this.render());
          }
          ensureScalesHaveIDs() {
            (0, u.F)(this.options.scales || {}, (n, o) => {
              n.id = o;
            });
          }
          buildOrUpdateScales() {
            const t = this.options,
              e = t.scales,
              n = this.scales,
              o = Object.keys(n).reduce((l, c) => ((l[c] = !1), l), {});
            let r = [];
            e &&
              (r = r.concat(
                Object.keys(e).map((l) => {
                  const c = e[l],
                    d = di(l, c),
                    g = "r" === d,
                    m = "x" === d;
                  return {
                    options: c,
                    dposition: g ? "chartArea" : m ? "bottom" : "left",
                    dtype: g ? "radialLinear" : m ? "category" : "linear",
                  };
                })
              )),
              (0, u.F)(r, (l) => {
                const c = l.options,
                  d = c.id,
                  g = di(d, c),
                  m = (0, u.v)(c.type, l.dtype);
                (void 0 === c.position ||
                  On(c.position, g) !== On(l.dposition)) &&
                  (c.position = l.dposition),
                  (o[d] = !0);
                let x = null;
                d in n && n[d].type === m
                  ? (x = n[d])
                  : ((x = new (Vt.getScale(m))({
                      id: d,
                      type: m,
                      ctx: this.ctx,
                      chart: this,
                    })),
                    (n[x.id] = x)),
                  x.init(c, t);
              }),
              (0, u.F)(o, (l, c) => {
                l || delete n[c];
              }),
              (0, u.F)(n, (l) => {
                gt.configure(this, l, l.options), gt.addBox(this, l);
              });
          }
          _updateMetasets() {
            const t = this._metasets,
              e = this.data.datasets.length,
              n = t.length;
            if ((t.sort((o, r) => o.index - r.index), n > e)) {
              for (let o = e; o < n; ++o) this._destroyDatasetMeta(o);
              t.splice(e, n - e);
            }
            this._sortedMetasets = t.slice(0).sort(Dn("order", "index"));
          }
          _removeUnreferencedMetasets() {
            const {
              _metasets: t,
              data: { datasets: e },
            } = this;
            t.length > e.length && delete this._stacks,
              t.forEach((n, o) => {
                0 === e.filter((r) => r === n._dataset).length &&
                  this._destroyDatasetMeta(o);
              });
          }
          buildOrUpdateControllers() {
            const t = [],
              e = this.data.datasets;
            let n, o;
            for (
              this._removeUnreferencedMetasets(), n = 0, o = e.length;
              n < o;
              n++
            ) {
              const r = e[n];
              let l = this.getDatasetMeta(n);
              const c = r.type || this.config.type;
              if (
                (l.type &&
                  l.type !== c &&
                  (this._destroyDatasetMeta(n), (l = this.getDatasetMeta(n))),
                (l.type = c),
                (l.indexAxis = r.indexAxis || Re(c, this.options)),
                (l.order = r.order || 0),
                (l.index = n),
                (l.label = "" + r.label),
                (l.visible = this.isDatasetVisible(n)),
                l.controller)
              )
                l.controller.updateIndex(n), l.controller.linkScales();
              else {
                const d = Vt.getController(c),
                  { datasetElementType: g, dataElementType: m } =
                    u.d.datasets[c];
                Object.assign(d, {
                  dataElementType: Vt.getElement(m),
                  datasetElementType: g && Vt.getElement(g),
                }),
                  (l.controller = new d(this, n)),
                  t.push(l.controller);
              }
            }
            return this._updateMetasets(), t;
          }
          _resetElements() {
            (0, u.F)(
              this.data.datasets,
              (t, e) => {
                this.getDatasetMeta(e).controller.reset();
              },
              this
            );
          }
          reset() {
            this._resetElements(), this.notifyPlugins("reset");
          }
          update(t) {
            const e = this.config;
            e.update();
            const n = (this._options = e.createResolver(
                e.chartOptionScopes(),
                this.getContext()
              )),
              o = (this._animationsDisabled = !n.animation);
            if (
              (this._updateScales(),
              this._checkEventBindings(),
              this._updateHiddenIndices(),
              this._plugins.invalidate(),
              !1 ===
                this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
            )
              return;
            const r = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let l = 0;
            for (let g = 0, m = this.data.datasets.length; g < m; g++) {
              const { controller: x } = this.getDatasetMeta(g),
                v = !o && -1 === r.indexOf(x);
              x.buildOrUpdateElements(v),
                (l = Math.max(+x.getMaxOverflow(), l));
            }
            (l = this._minPadding = n.layout.autoPadding ? l : 0),
              this._updateLayout(l),
              o ||
                (0, u.F)(r, (g) => {
                  g.reset();
                }),
              this._updateDatasets(t),
              this.notifyPlugins("afterUpdate", { mode: t }),
              this._layers.sort(Dn("z", "_idx"));
            const { _active: c, _lastEvent: d } = this;
            d
              ? this._eventHandler(d, !0)
              : c.length && this._updateHoverStyles(c, c, !0),
              this.render();
          }
          _updateScales() {
            (0, u.F)(this.scales, (t) => {
              gt.removeBox(this, t);
            }),
              this.ensureScalesHaveIDs(),
              this.buildOrUpdateScales();
          }
          _checkEventBindings() {
            const t = this.options,
              e = new Set(Object.keys(this._listeners)),
              n = new Set(t.events);
            (!(0, u.ag)(e, n) ||
              !!this._responsiveListeners !== t.responsive) &&
              (this.unbindEvents(), this.bindEvents());
          }
          _updateHiddenIndices() {
            const { _hiddenIndices: t } = this,
              e = this._getUniformDataChanges() || [];
            for (const { method: n, start: o, count: r } of e)
              Tn(t, o, "_removeElements" === n ? -r : r);
          }
          _getUniformDataChanges() {
            const t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            const e = this.data.datasets.length,
              n = (r) =>
                new Set(
                  t
                    .filter((l) => l[0] === r)
                    .map((l, c) => c + "," + l.splice(1).join(","))
                ),
              o = n(0);
            for (let r = 1; r < e; r++) if (!(0, u.ag)(o, n(r))) return;
            return Array.from(o)
              .map((r) => r.split(","))
              .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
          }
          _updateLayout(t) {
            if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
              return;
            gt.update(this, this.width, this.height, t);
            const e = this.chartArea,
              n = e.width <= 0 || e.height <= 0;
            (this._layers = []),
              (0, u.F)(
                this.boxes,
                (o) => {
                  (n && "chartArea" === o.position) ||
                    (o.configure && o.configure(),
                    this._layers.push(...o._layers()));
                },
                this
              ),
              this._layers.forEach((o, r) => {
                o._idx = r;
              }),
              this.notifyPlugins("afterLayout");
          }
          _updateDatasets(t) {
            if (
              !1 !==
              this.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0,
              })
            ) {
              for (let e = 0, n = this.data.datasets.length; e < n; ++e)
                this.getDatasetMeta(e).controller.configure();
              for (let e = 0, n = this.data.datasets.length; e < n; ++e)
                this._updateDataset(
                  e,
                  (0, u.a7)(t) ? t({ datasetIndex: e }) : t
                );
              this.notifyPlugins("afterDatasetsUpdate", { mode: t });
            }
          }
          _updateDataset(t, e) {
            const n = this.getDatasetMeta(t),
              o = { meta: n, index: t, mode: e, cancelable: !0 };
            !1 !== this.notifyPlugins("beforeDatasetUpdate", o) &&
              (n.controller._update(e),
              (o.cancelable = !1),
              this.notifyPlugins("afterDatasetUpdate", o));
          }
          render() {
            !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
              (Ot.has(this)
                ? this.attached && !Ot.running(this) && Ot.start(this)
                : (this.draw(), An({ chart: this })));
          }
          draw() {
            let t;
            if (this._resizeBeforeDraw) {
              const { width: n, height: o } = this._resizeBeforeDraw;
              this._resize(n, o), (this._resizeBeforeDraw = null);
            }
            if (
              (this.clear(),
              this.width <= 0 ||
                this.height <= 0 ||
                !1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
            )
              return;
            const e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t)
              e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t)
              e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw");
          }
          _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets,
              n = [];
            let o, r;
            for (o = 0, r = e.length; o < r; ++o) {
              const l = e[o];
              (!t || l.visible) && n.push(l);
            }
            return n;
          }
          getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
          }
          _drawDatasets() {
            if (
              !1 ===
              this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
            )
              return;
            const t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw");
          }
          _drawDataset(t) {
            const e = this.ctx,
              n = t._clip,
              o = !n.disabled,
              r =
                (function Rs(s) {
                  const { xScale: i, yScale: t } = s;
                  if (i && t)
                    return {
                      left: i.left,
                      right: i.right,
                      top: t.top,
                      bottom: t.bottom,
                    };
                })(t) || this.chartArea,
              l = { meta: t, index: t.index, cancelable: !0 };
            !1 !== this.notifyPlugins("beforeDatasetDraw", l) &&
              (o &&
                (0, u.Y)(e, {
                  left: !1 === n.left ? 0 : r.left - n.left,
                  right: !1 === n.right ? this.width : r.right + n.right,
                  top: !1 === n.top ? 0 : r.top - n.top,
                  bottom: !1 === n.bottom ? this.height : r.bottom + n.bottom,
                }),
              t.controller.draw(),
              o && (0, u.$)(e),
              (l.cancelable = !1),
              this.notifyPlugins("afterDatasetDraw", l));
          }
          isPointInArea(t) {
            return (0, u.C)(t, this.chartArea, this._minPadding);
          }
          getElementsAtEventForMode(t, e, n, o) {
            const r = fo.modes[e];
            return "function" == typeof r ? r(this, t, n, o) : [];
          }
          getDatasetMeta(t) {
            const e = this.data.datasets[t],
              n = this._metasets;
            let o = n.filter((r) => r && r._dataset === e).pop();
            return (
              o ||
                ((o = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: (e && e.order) || 0,
                  index: t,
                  _dataset: e,
                  _parsed: [],
                  _sorted: !1,
                }),
                n.push(o)),
              o
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context = (0, u.j)(null, { chart: this, type: "chart" }))
            );
          }
          getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
          }
          isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const n = this.getDatasetMeta(t);
            return "boolean" == typeof n.hidden ? !n.hidden : !e.hidden;
          }
          setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e;
          }
          toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
          }
          getDataVisibility(t) {
            return !this._hiddenIndices[t];
          }
          _updateVisibility(t, e, n) {
            const o = n ? "show" : "hide",
              r = this.getDatasetMeta(t),
              l = r.controller._resolveAnimations(void 0, o);
            (0, u.h)(e)
              ? ((r.data[e].hidden = !n), this.update())
              : (this.setDatasetVisibility(t, n),
                l.update(r, { visible: n }),
                this.update((c) => (c.datasetIndex === t ? o : void 0)));
          }
          hide(t, e) {
            this._updateVisibility(t, e, !1);
          }
          show(t, e) {
            this._updateVisibility(t, e, !0);
          }
          _destroyDatasetMeta(t) {
            const e = this._metasets[t];
            e && e.controller && e.controller._destroy(),
              delete this._metasets[t];
          }
          _stop() {
            let t, e;
            for (
              this.stop(),
                Ot.remove(this),
                t = 0,
                e = this.data.datasets.length;
              t < e;
              ++t
            )
              this._destroyDatasetMeta(t);
          }
          destroy() {
            this.notifyPlugins("beforeDestroy");
            const { canvas: t, ctx: e } = this;
            this._stop(),
              this.config.clearCache(),
              t &&
                (this.unbindEvents(),
                (0, u.af)(t, e),
                this.platform.releaseContext(e),
                (this.canvas = null),
                (this.ctx = null)),
              delete He[this.id],
              this.notifyPlugins("afterDestroy");
          }
          toBase64Image(...t) {
            return this.canvas.toDataURL(...t);
          }
          bindEvents() {
            this.bindUserEvents(),
              this.options.responsive
                ? this.bindResponsiveEvents()
                : (this.attached = !0);
          }
          bindUserEvents() {
            const t = this._listeners,
              e = this.platform,
              n = (r, l) => {
                e.addEventListener(this, r, l), (t[r] = l);
              },
              o = (r, l, c) => {
                (r.offsetX = l), (r.offsetY = c), this._eventHandler(r);
              };
            (0, u.F)(this.options.events, (r) => n(r, o));
          }
          bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const t = this._responsiveListeners,
              e = this.platform,
              n = (d, g) => {
                e.addEventListener(this, d, g), (t[d] = g);
              },
              o = (d, g) => {
                t[d] && (e.removeEventListener(this, d, g), delete t[d]);
              },
              r = (d, g) => {
                this.canvas && this.resize(d, g);
              };
            let l;
            const c = () => {
              o("attach", c),
                (this.attached = !0),
                this.resize(),
                n("resize", r),
                n("detach", l);
            };
            (l = () => {
              (this.attached = !1),
                o("resize", r),
                this._stop(),
                this._resize(0, 0),
                n("attach", c);
            }),
              e.isAttached(this.canvas) ? c() : l();
          }
          unbindEvents() {
            (0, u.F)(this._listeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
              (this._listeners = {}),
              (0, u.F)(this._responsiveListeners, (t, e) => {
                this.platform.removeEventListener(this, e, t);
              }),
              (this._responsiveListeners = void 0);
          }
          updateHoverStyle(t, e, n) {
            const o = n ? "set" : "remove";
            let r, l, c, d;
            for (
              "dataset" === e &&
                ((r = this.getDatasetMeta(t[0].datasetIndex)),
                r.controller["_" + o + "DatasetHoverStyle"]()),
                c = 0,
                d = t.length;
              c < d;
              ++c
            ) {
              l = t[c];
              const g = l && this.getDatasetMeta(l.datasetIndex).controller;
              g && g[o + "HoverStyle"](l.element, l.datasetIndex, l.index);
            }
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t) {
            const e = this._active || [],
              n = t.map(({ datasetIndex: r, index: l }) => {
                const c = this.getDatasetMeta(r);
                if (!c) throw new Error("No dataset found at index " + r);
                return { datasetIndex: r, element: c.data[l], index: l };
              });
            !(0, u.ah)(n, e) &&
              ((this._active = n),
              (this._lastEvent = null),
              this._updateHoverStyles(n, e));
          }
          notifyPlugins(t, e, n) {
            return this._plugins.notify(this, t, e, n);
          }
          isPluginEnabled(t) {
            return (
              1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
            );
          }
          _updateHoverStyles(t, e, n) {
            const o = this.options.hover,
              r = (d, g) =>
                d.filter(
                  (m) =>
                    !g.some(
                      (x) =>
                        m.datasetIndex === x.datasetIndex && m.index === x.index
                    )
                ),
              l = r(e, t),
              c = n ? t : r(t, e);
            l.length && this.updateHoverStyle(l, o.mode, !1),
              c.length && o.mode && this.updateHoverStyle(c, o.mode, !0);
          }
          _eventHandler(t, e) {
            const n = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t),
              },
              o = (l) =>
                (l.options.events || this.options.events).includes(
                  t.native.type
                );
            if (!1 === this.notifyPlugins("beforeEvent", n, o)) return;
            const r = this._handleEvent(t, e, n.inChartArea);
            return (
              (n.cancelable = !1),
              this.notifyPlugins("afterEvent", n, o),
              (r || n.changed) && this.render(),
              this
            );
          }
          _handleEvent(t, e, n) {
            const { _active: o = [], options: r } = this,
              c = this._getActiveElements(t, o, n, e),
              d = (0, u.ai)(t),
              g = (function Es(s, i, t, e) {
                return t && "mouseout" !== s.type ? (e ? i : s) : null;
              })(t, this._lastEvent, n, d);
            n &&
              ((this._lastEvent = null),
              (0, u.Q)(r.onHover, [t, c, this], this),
              d && (0, u.Q)(r.onClick, [t, c, this], this));
            const m = !(0, u.ah)(c, o);
            return (
              (m || e) &&
                ((this._active = c), this._updateHoverStyles(c, o, e)),
              (this._lastEvent = g),
              m
            );
          }
          _getActiveElements(t, e, n, o) {
            if ("mouseout" === t.type) return [];
            if (!n) return e;
            const r = this.options.hover;
            return this.getElementsAtEventForMode(t, r.mode, r, o);
          }
        }
        return (
          (0, R.Z)(s, "defaults", u.d),
          (0, R.Z)(s, "instances", He),
          (0, R.Z)(s, "overrides", u.a3),
          (0, R.Z)(s, "registry", Vt),
          (0, R.Z)(s, "version", "4.3.3"),
          (0, R.Z)(s, "getChart", Yi),
          s
        );
      })();
      function je() {
        return (0, u.F)(zn.instances, (s) => s._plugins.invalidate());
      }
      function Se(s, i, t, e) {
        return { x: t + s * Math.cos(i), y: e + s * Math.sin(i) };
      }
      function le(s, i, t, e, n, o) {
        const { x: r, y: l, startAngle: c, pixelMargin: d, innerRadius: g } = i,
          m = Math.max(i.outerRadius + e + t - d, 0),
          x = g > 0 ? g + e + t + d : 0;
        let v = 0;
        const S = n - c;
        if (e) {
          const pt = ((g > 0 ? g - e : 0) + (m > 0 ? m - e : 0)) / 2;
          v = (S - (0 !== pt ? (S * pt) / (pt + e) : S)) / 2;
        }
        const O = (S - Math.max(0.001, S * m - t / u.P) / m) / 2,
          z = c + O + v,
          A = n - O - v,
          {
            outerStart: B,
            outerEnd: j,
            innerStart: L,
            innerEnd: H,
          } = (function Ln(s, i, t, e) {
            const n = (function ae(s) {
                return (0, u.ak)(s, [
                  "outerStart",
                  "outerEnd",
                  "innerStart",
                  "innerEnd",
                ]);
              })(s.options.borderRadius),
              o = (t - i) / 2,
              r = Math.min(o, (e * i) / 2),
              l = (c) => {
                const d = ((t - Math.min(o, c)) * e) / 2;
                return (0, u.S)(c, 0, Math.min(o, d));
              };
            return {
              outerStart: l(n.outerStart),
              outerEnd: l(n.outerEnd),
              innerStart: (0, u.S)(n.innerStart, 0, r),
              innerEnd: (0, u.S)(n.innerEnd, 0, r),
            };
          })(i, x, m, A - z),
          W = m - B,
          V = m - j,
          U = z + B / W,
          tt = A - j / V,
          J = x + L,
          nt = x + H,
          Mt = z + L / J,
          $t = A - H / nt;
        if ((s.beginPath(), o)) {
          const at = (U + tt) / 2;
          if ((s.arc(r, l, m, U, at), s.arc(r, l, m, at, tt), j > 0)) {
            const Ct = Se(V, tt, r, l);
            s.arc(Ct.x, Ct.y, j, tt, A + u.H);
          }
          const ut = Se(nt, A, r, l);
          if ((s.lineTo(ut.x, ut.y), H > 0)) {
            const Ct = Se(nt, $t, r, l);
            s.arc(Ct.x, Ct.y, H, A + u.H, $t + Math.PI);
          }
          const pt = (A - H / x + (z + L / x)) / 2;
          if (
            (s.arc(r, l, x, A - H / x, pt, !0),
            s.arc(r, l, x, pt, z + L / x, !0),
            L > 0)
          ) {
            const Ct = Se(J, Mt, r, l);
            s.arc(Ct.x, Ct.y, L, Mt + Math.PI, z - u.H);
          }
          const he = Se(W, z, r, l);
          if ((s.lineTo(he.x, he.y), B > 0)) {
            const Ct = Se(W, U, r, l);
            s.arc(Ct.x, Ct.y, B, z - u.H, U);
          }
        } else {
          s.moveTo(r, l);
          const at = Math.cos(U) * m + r,
            ut = Math.sin(U) * m + l;
          s.lineTo(at, ut);
          const pt = Math.cos(tt) * m + r,
            he = Math.sin(tt) * m + l;
          s.lineTo(pt, he);
        }
        s.closePath();
      }
      class we extends wt {
        constructor(i) {
          super(),
            (0, R.Z)(this, "circumference", void 0),
            (0, R.Z)(this, "endAngle", void 0),
            (0, R.Z)(this, "fullCircles", void 0),
            (0, R.Z)(this, "innerRadius", void 0),
            (0, R.Z)(this, "outerRadius", void 0),
            (0, R.Z)(this, "pixelMargin", void 0),
            (0, R.Z)(this, "startAngle", void 0),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            i && Object.assign(this, i);
        }
        inRange(i, t, e) {
          const n = this.getProps(["x", "y"], e),
            { angle: o, distance: r } = (0, u.D)(n, { x: i, y: t }),
            {
              startAngle: l,
              endAngle: c,
              innerRadius: d,
              outerRadius: g,
              circumference: m,
            } = this.getProps(
              [
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              e
            ),
            x = (this.options.spacing + this.options.borderWidth) / 2,
            S = (0, u.v)(m, c - l) >= u.T || (0, u.p)(o, l, c),
            P = (0, u.aj)(r, d + x, g + x);
          return S && P;
        }
        getCenterPoint(i) {
          const {
              x: t,
              y: e,
              startAngle: n,
              endAngle: o,
              innerRadius: r,
              outerRadius: l,
            } = this.getProps(
              [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
              i
            ),
            { offset: c, spacing: d } = this.options,
            g = (n + o) / 2,
            m = (r + l + d + c) / 2;
          return { x: t + Math.cos(g) * m, y: e + Math.sin(g) * m };
        }
        tooltipPosition(i) {
          return this.getCenterPoint(i);
        }
        draw(i) {
          const { options: t, circumference: e } = this,
            n = (t.offset || 0) / 4,
            o = (t.spacing || 0) / 2,
            r = t.circular;
          if (
            ((this.pixelMargin = "inner" === t.borderAlign ? 0.33 : 0),
            (this.fullCircles = e > u.T ? Math.floor(e / u.T) : 0),
            0 === e || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return;
          i.save();
          const l = (this.startAngle + this.endAngle) / 2;
          i.translate(Math.cos(l) * n, Math.sin(l) * n);
          const d = n * (1 - Math.sin(Math.min(u.P, e || 0)));
          (i.fillStyle = t.backgroundColor),
            (i.strokeStyle = t.borderColor),
            (function En(s, i, t, e, n) {
              const { fullCircles: o, startAngle: r, circumference: l } = i;
              let c = i.endAngle;
              if (o) {
                le(s, i, t, e, c, n);
                for (let d = 0; d < o; ++d) s.fill();
                isNaN(l) || (c = r + (l % u.T || u.T));
              }
              le(s, i, t, e, c, n), s.fill();
            })(i, this, d, o, r),
            (function Ui(s, i, t, e, n) {
              const {
                  fullCircles: o,
                  startAngle: r,
                  circumference: l,
                  options: c,
                } = i,
                {
                  borderWidth: d,
                  borderJoinStyle: g,
                  borderDash: m,
                  borderDashOffset: x,
                } = c,
                v = "inner" === c.borderAlign;
              if (!d) return;
              s.setLineDash(m || []),
                (s.lineDashOffset = x),
                v
                  ? ((s.lineWidth = 2 * d), (s.lineJoin = g || "round"))
                  : ((s.lineWidth = d), (s.lineJoin = g || "bevel"));
              let S = i.endAngle;
              if (o) {
                le(s, i, t, e, S, n);
                for (let P = 0; P < o; ++P) s.stroke();
                isNaN(l) || (S = r + (l % u.T || u.T));
              }
              v &&
                (function $i(s, i, t) {
                  const {
                    startAngle: e,
                    pixelMargin: n,
                    x: o,
                    y: r,
                    outerRadius: l,
                    innerRadius: c,
                  } = i;
                  let d = n / l;
                  s.beginPath(),
                    s.arc(o, r, l, e - d, t + d),
                    c > n
                      ? ((d = n / c), s.arc(o, r, c, t + d, e - d, !0))
                      : s.arc(o, r, n, t + u.H, e - u.H),
                    s.closePath(),
                    s.clip();
                })(s, i, S),
                o || (le(s, i, t, e, S, n), s.stroke());
            })(i, this, d, o, r),
            i.restore();
        }
      }
      function Rn(s, i, t = i) {
        (s.lineCap = (0, u.v)(t.borderCapStyle, i.borderCapStyle)),
          s.setLineDash((0, u.v)(t.borderDash, i.borderDash)),
          (s.lineDashOffset = (0, u.v)(t.borderDashOffset, i.borderDashOffset)),
          (s.lineJoin = (0, u.v)(t.borderJoinStyle, i.borderJoinStyle)),
          (s.lineWidth = (0, u.v)(t.borderWidth, i.borderWidth)),
          (s.strokeStyle = (0, u.v)(t.borderColor, i.borderColor));
      }
      function In(s, i, t) {
        s.lineTo(t.x, t.y);
      }
      function Zi(s, i, t = {}) {
        const e = s.length,
          { start: n = 0, end: o = e - 1 } = t,
          { start: r, end: l } = i,
          c = Math.max(n, r),
          d = Math.min(o, l);
        return {
          count: e,
          start: c,
          loop: i.loop,
          ilen:
            d < c && !((n < r && o < r) || (n > l && o > l))
              ? e + d - c
              : d - c,
        };
      }
      function pi(s, i, t, e) {
        const { points: n, options: o } = i,
          { count: r, start: l, loop: c, ilen: d } = Zi(n, t, e),
          g = (function Is(s) {
            return s.stepped
              ? u.ar
              : s.tension || "monotone" === s.cubicInterpolationMode
              ? u.as
              : In;
          })(o);
        let v,
          S,
          P,
          { move: m = !0, reverse: x } = e || {};
        for (v = 0; v <= d; ++v)
          (S = n[(l + (x ? d - v : v)) % r]),
            !S.skip &&
              (m ? (s.moveTo(S.x, S.y), (m = !1)) : g(s, P, S, x, o.stepped),
              (P = S));
        return (
          c && ((S = n[(l + (x ? d : 0)) % r]), g(s, P, S, x, o.stepped)), !!c
        );
      }
      function Fn(s, i, t, e) {
        const n = i.points,
          { count: o, start: r, ilen: l } = Zi(n, t, e),
          { move: c = !0, reverse: d } = e || {};
        let x,
          v,
          S,
          P,
          O,
          z,
          g = 0,
          m = 0;
        const A = (j) => (r + (d ? l - j : j)) % o,
          B = () => {
            P !== O && (s.lineTo(g, O), s.lineTo(g, P), s.lineTo(g, z));
          };
        for (c && ((v = n[A(0)]), s.moveTo(v.x, v.y)), x = 0; x <= l; ++x) {
          if (((v = n[A(x)]), v.skip)) continue;
          const j = v.x,
            L = v.y,
            H = 0 | j;
          H === S
            ? (L < P ? (P = L) : L > O && (O = L), (g = (m * g + j) / ++m))
            : (B(), s.lineTo(j, L), (S = H), (m = 0), (P = O = L)),
            (z = L);
        }
        B();
      }
      function mi(s) {
        const i = s.options;
        return s._decimated ||
          s._loop ||
          i.tension ||
          "monotone" === i.cubicInterpolationMode ||
          i.stepped ||
          (i.borderDash && i.borderDash.length)
          ? pi
          : Fn;
      }
      (0, R.Z)(we, "id", "arc"),
        (0, R.Z)(we, "defaults", {
          borderAlign: "center",
          borderColor: "#fff",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
        }),
        (0, R.Z)(we, "defaultRoutes", { backgroundColor: "backgroundColor" }),
        (0, R.Z)(we, "descriptors", {
          _scriptable: !0,
          _indexable: (s) => "borderDash" !== s,
        });
      const Bs = "function" == typeof Path2D;
      let bi = (() => {
        class s extends wt {
          constructor(t) {
            super(),
              (this.animated = !0),
              (this.options = void 0),
              (this._chart = void 0),
              (this._loop = void 0),
              (this._fullLoop = void 0),
              (this._path = void 0),
              (this._points = void 0),
              (this._segments = void 0),
              (this._decimated = !1),
              (this._pointsUpdated = !1),
              (this._datasetIndex = void 0),
              t && Object.assign(this, t);
          }
          updateControlPoints(t, e) {
            const n = this.options;
            (!n.tension && "monotone" !== n.cubicInterpolationMode) ||
              n.stepped ||
              this._pointsUpdated ||
              ((0, u.al)(
                this._points,
                n,
                t,
                n.spanGaps ? this._loop : this._fullLoop,
                e
              ),
              (this._pointsUpdated = !0));
          }
          set points(t) {
            (this._points = t),
              delete this._segments,
              delete this._path,
              (this._pointsUpdated = !1);
          }
          get points() {
            return this._points;
          }
          get segments() {
            return (
              this._segments ||
              (this._segments = (0, u.am)(this, this.options.segment))
            );
          }
          first() {
            const t = this.segments;
            return t.length && this.points[t[0].start];
          }
          last() {
            const t = this.segments,
              n = t.length;
            return n && this.points[t[n - 1].end];
          }
          interpolate(t, e) {
            const n = this.options,
              o = t[e],
              r = this.points,
              l = (0, u.an)(this, { property: e, start: o, end: o });
            if (!l.length) return;
            const c = [],
              d = (function Fs(s) {
                return s.stepped
                  ? u.ao
                  : s.tension || "monotone" === s.cubicInterpolationMode
                  ? u.ap
                  : u.aq;
              })(n);
            let g, m;
            for (g = 0, m = l.length; g < m; ++g) {
              const { start: x, end: v } = l[g],
                S = r[x],
                P = r[v];
              if (S === P) {
                c.push(S);
                continue;
              }
              const z = d(
                S,
                P,
                Math.abs((o - S[e]) / (P[e] - S[e])),
                n.stepped
              );
              (z[e] = t[e]), c.push(z);
            }
            return 1 === c.length ? c[0] : c;
          }
          pathSegment(t, e, n) {
            return mi(this)(t, this, e, n);
          }
          path(t, e, n) {
            const o = this.segments,
              r = mi(this);
            let l = this._loop;
            (e = e || 0), (n = n || this.points.length - e);
            for (const c of o) l &= r(t, this, c, { start: e, end: e + n - 1 });
            return !!l;
          }
          draw(t, e, n, o) {
            (this.points || []).length &&
              (this.options || {}).borderWidth &&
              (t.save(),
              (function Hs(s, i, t, e) {
                Bs && !i.options.segment
                  ? (function Bn(s, i, t, e) {
                      let n = i._path;
                      n ||
                        ((n = i._path = new Path2D()),
                        i.path(n, t, e) && n.closePath()),
                        Rn(s, i.options),
                        s.stroke(n);
                    })(s, i, t, e)
                  : (function Xi(s, i, t, e) {
                      const { segments: n, options: o } = i,
                        r = mi(i);
                      for (const l of n)
                        Rn(s, o, l.style),
                          s.beginPath(),
                          r(s, i, l, { start: t, end: t + e - 1 }) &&
                            s.closePath(),
                          s.stroke();
                    })(s, i, t, e);
              })(t, this, n, o),
              t.restore()),
              this.animated &&
                ((this._pointsUpdated = !1), (this._path = void 0));
          }
        }
        return (
          (0, R.Z)(s, "id", "line"),
          (0, R.Z)(s, "defaults", {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0,
          }),
          (0, R.Z)(s, "defaultRoutes", {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          }),
          (0, R.Z)(s, "descriptors", {
            _scriptable: !0,
            _indexable: (i) => "borderDash" !== i && "fill" !== i,
          }),
          s
        );
      })();
      function Kt(s, i, t, e) {
        const n = s.options,
          { [t]: o } = s.getProps([t], e);
        return Math.abs(i - o) < n.radius + n.hitRadius;
      }
      let Ki = (() => {
        class s extends wt {
          constructor(t) {
            super(),
              (0, R.Z)(this, "parsed", void 0),
              (0, R.Z)(this, "skip", void 0),
              (0, R.Z)(this, "stop", void 0),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t);
          }
          inRange(t, e, n) {
            const o = this.options,
              { x: r, y: l } = this.getProps(["x", "y"], n);
            return (
              Math.pow(t - r, 2) + Math.pow(e - l, 2) <
              Math.pow(o.hitRadius + o.radius, 2)
            );
          }
          inXRange(t, e) {
            return Kt(this, t, "x", e);
          }
          inYRange(t, e) {
            return Kt(this, t, "y", e);
          }
          getCenterPoint(t) {
            const { x: e, y: n } = this.getProps(["x", "y"], t);
            return { x: e, y: n };
          }
          size(t) {
            let e = (t = t || this.options || {}).radius || 0;
            return (
              (e = Math.max(e, (e && t.hoverRadius) || 0)),
              2 * (e + ((e && t.borderWidth) || 0))
            );
          }
          draw(t, e) {
            const n = this.options;
            this.skip ||
              n.radius < 0.1 ||
              !(0, u.C)(this, e, this.size(n) / 2) ||
              ((t.strokeStyle = n.borderColor),
              (t.lineWidth = n.borderWidth),
              (t.fillStyle = n.backgroundColor),
              (0, u.at)(t, n, this.x, this.y));
          }
          getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius;
          }
        }
        return (
          (0, R.Z)(s, "id", "point"),
          (0, R.Z)(s, "defaults", {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: "circle",
            radius: 3,
            rotation: 0,
          }),
          (0, R.Z)(s, "defaultRoutes", {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          }),
          s
        );
      })();
      function Hn(s, i) {
        const {
          x: t,
          y: e,
          base: n,
          width: o,
          height: r,
        } = s.getProps(["x", "y", "base", "width", "height"], i);
        let l, c, d, g, m;
        return (
          s.horizontal
            ? ((m = r / 2),
              (l = Math.min(t, n)),
              (c = Math.max(t, n)),
              (d = e - m),
              (g = e + m))
            : ((m = o / 2),
              (l = t - m),
              (c = t + m),
              (d = Math.min(e, n)),
              (g = Math.max(e, n))),
          { left: l, top: d, right: c, bottom: g }
        );
      }
      function Gt(s, i, t, e) {
        return s ? 0 : (0, u.S)(i, t, e);
      }
      function Gi(s, i, t, e) {
        const n = null === i,
          o = null === t,
          l = s && !(n && o) && Hn(s, e);
        return (
          l &&
          (n || (0, u.aj)(i, l.left, l.right)) &&
          (o || (0, u.aj)(t, l.top, l.bottom))
        );
      }
      function Ws(s, i) {
        s.rect(i.x, i.y, i.w, i.h);
      }
      function xi(s, i, t = {}) {
        const e = s.x !== t.x ? -i : 0,
          n = s.y !== t.y ? -i : 0;
        return {
          x: s.x + e,
          y: s.y + n,
          w: s.w + ((s.x + s.w !== t.x + t.w ? i : 0) - e),
          h: s.h + ((s.y + s.h !== t.y + t.h ? i : 0) - n),
          radius: s.radius,
        };
      }
      class Qt extends wt {
        constructor(i) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            i && Object.assign(this, i);
        }
        draw(i) {
          const {
              inflateAmount: t,
              options: { borderColor: e, backgroundColor: n },
            } = this,
            { inner: o, outer: r } = (function _i(s) {
              const i = Hn(s),
                t = i.right - i.left,
                e = i.bottom - i.top,
                n = (function js(s, i, t) {
                  const n = s.borderSkipped,
                    o = (0, u.av)(s.options.borderWidth);
                  return {
                    t: Gt(n.top, o.top, 0, t),
                    r: Gt(n.right, o.right, 0, i),
                    b: Gt(n.bottom, o.bottom, 0, t),
                    l: Gt(n.left, o.left, 0, i),
                  };
                })(s, t / 2, e / 2),
                o = (function Ns(s, i, t) {
                  const { enableBorderRadius: e } = s.getProps([
                      "enableBorderRadius",
                    ]),
                    n = s.options.borderRadius,
                    o = (0, u.aw)(n),
                    r = Math.min(i, t),
                    l = s.borderSkipped,
                    c = e || (0, u.i)(n);
                  return {
                    topLeft: Gt(!c || l.top || l.left, o.topLeft, 0, r),
                    topRight: Gt(!c || l.top || l.right, o.topRight, 0, r),
                    bottomLeft: Gt(
                      !c || l.bottom || l.left,
                      o.bottomLeft,
                      0,
                      r
                    ),
                    bottomRight: Gt(
                      !c || l.bottom || l.right,
                      o.bottomRight,
                      0,
                      r
                    ),
                  };
                })(s, t / 2, e / 2);
              return {
                outer: { x: i.left, y: i.top, w: t, h: e, radius: o },
                inner: {
                  x: i.left + n.l,
                  y: i.top + n.t,
                  w: t - n.l - n.r,
                  h: e - n.t - n.b,
                  radius: {
                    topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                    topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                    bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                    bottomRight: Math.max(
                      0,
                      o.bottomRight - Math.max(n.b, n.r)
                    ),
                  },
                },
              };
            })(this),
            l = (function Vs(s) {
              return s.topLeft || s.topRight || s.bottomLeft || s.bottomRight;
            })(r.radius)
              ? u.au
              : Ws;
          i.save(),
            (r.w !== o.w || r.h !== o.h) &&
              (i.beginPath(),
              l(i, xi(r, t, o)),
              i.clip(),
              l(i, xi(o, -t, r)),
              (i.fillStyle = e),
              i.fill("evenodd")),
            i.beginPath(),
            l(i, xi(o, t)),
            (i.fillStyle = n),
            i.fill(),
            i.restore();
        }
        inRange(i, t, e) {
          return Gi(this, i, t, e);
        }
        inXRange(i, t) {
          return Gi(this, i, null, t);
        }
        inYRange(i, t) {
          return Gi(this, null, i, t);
        }
        getCenterPoint(i) {
          const {
            x: t,
            y: e,
            base: n,
            horizontal: o,
          } = this.getProps(["x", "y", "base", "horizontal"], i);
          return { x: o ? (t + n) / 2 : t, y: o ? e : (e + n) / 2 };
        }
        getRange(i) {
          return "x" === i ? this.width / 2 : this.height / 2;
        }
      }
      (0, R.Z)(Qt, "id", "bar"),
        (0, R.Z)(Qt, "defaults", {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: "auto",
          pointStyle: void 0,
        }),
        (0, R.Z)(Qt, "defaultRoutes", {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      var yi = Object.freeze({
        __proto__: null,
        ArcElement: we,
        BarElement: Qt,
        LineElement: bi,
        PointElement: Ki,
      });
      const Qi = [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        jn = Qi.map((s) => s.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
      function qt(s) {
        return Qi[s % Qi.length];
      }
      function Nn(s) {
        return jn[s % jn.length];
      }
      function Vn(s) {
        let i;
        for (i in s) if (s[i].borderColor || s[i].backgroundColor) return !0;
        return !1;
      }
      var Xs = {
        id: "colors",
        defaults: { enabled: !0, forceOverride: !1 },
        beforeLayout(s, i, t) {
          if (!t.enabled) return;
          const {
              data: { datasets: e },
              options: n,
            } = s.config,
            { elements: o } = n;
          if (
            !t.forceOverride &&
            (Vn(e) ||
              (function Zs(s) {
                return s && (s.borderColor || s.backgroundColor);
              })(n) ||
              (o && Vn(o)))
          )
            return;
          const r = (function vi(s) {
            let i = 0;
            return (t, e) => {
              const n = s.getDatasetMeta(e).controller;
              n instanceof zi
                ? (i = (function $s(s, i) {
                    return (s.backgroundColor = s.data.map(() => qt(i++))), i;
                  })(t, i))
                : n instanceof _t
                ? (i = (function Us(s, i) {
                    return (s.backgroundColor = s.data.map(() => Nn(i++))), i;
                  })(t, i))
                : n &&
                  (i = (function Ys(s, i) {
                    return (
                      (s.borderColor = qt(i)), (s.backgroundColor = Nn(i)), ++i
                    );
                  })(t, i));
            };
          })(s);
          e.forEach(r);
        },
      };
      function Wn(s) {
        if (s._decimated) {
          const i = s._data;
          delete s._decimated,
            delete s._data,
            Object.defineProperty(s, "data", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: i,
            });
        }
      }
      function Yn(s) {
        s.data.datasets.forEach((i) => {
          Wn(i);
        });
      }
      var rt = {
        id: "decimation",
        defaults: { algorithm: "min-max", enabled: !1 },
        beforeElementsUpdate: (s, i, t) => {
          if (!t.enabled) return void Yn(s);
          const e = s.width;
          s.data.datasets.forEach((n, o) => {
            const { _data: r, indexAxis: l } = n,
              c = s.getDatasetMeta(o),
              d = r || n.data;
            if (
              "y" === (0, u.a)([l, s.options.indexAxis]) ||
              !c.controller.supportsDecimation
            )
              return;
            const g = s.scales[c.xAxisID];
            if (("linear" !== g.type && "time" !== g.type) || s.options.parsing)
              return;
            let S,
              { start: m, count: x } = (function Gs(s, i) {
                const t = i.length;
                let n,
                  e = 0;
                const { iScale: o } = s,
                  {
                    min: r,
                    max: l,
                    minDefined: c,
                    maxDefined: d,
                  } = o.getUserBounds();
                return (
                  c && (e = (0, u.S)((0, u.B)(i, o.axis, r).lo, 0, t - 1)),
                  (n = d
                    ? (0, u.S)((0, u.B)(i, o.axis, l).hi + 1, e, t) - e
                    : t - e),
                  { start: e, count: n }
                );
              })(c, d);
            if (x <= (t.threshold || 4 * e)) Wn(n);
            else {
              switch (
                ((0, u.k)(r) &&
                  ((n._data = d),
                  delete n.data,
                  Object.defineProperty(n, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this._decimated;
                    },
                    set: function (P) {
                      this._data = P;
                    },
                  })),
                t.algorithm)
              ) {
                case "lttb":
                  S = (function Ks(s, i, t, e, n) {
                    const o = n.samples || e;
                    if (o >= t) return s.slice(i, i + t);
                    const r = [],
                      l = (t - 2) / (o - 2);
                    let c = 0;
                    const d = i + t - 1;
                    let m,
                      x,
                      v,
                      S,
                      P,
                      g = i;
                    for (r[c++] = s[g], m = 0; m < o - 2; m++) {
                      let A,
                        O = 0,
                        z = 0;
                      const B = Math.floor((m + 1) * l) + 1 + i,
                        j = Math.min(Math.floor((m + 2) * l) + 1, t) + i,
                        L = j - B;
                      for (A = B; A < j; A++) (O += s[A].x), (z += s[A].y);
                      (O /= L), (z /= L);
                      const H = Math.floor(m * l) + 1 + i,
                        W = Math.min(Math.floor((m + 1) * l) + 1, t) + i,
                        { x: V, y: U } = s[g];
                      for (v = S = -1, A = H; A < W; A++)
                        (S =
                          0.5 *
                          Math.abs(
                            (V - O) * (s[A].y - U) - (V - s[A].x) * (z - U)
                          )),
                          S > v && ((v = S), (x = s[A]), (P = A));
                      (r[c++] = x), (g = P);
                    }
                    return (r[c++] = s[d]), r;
                  })(d, m, x, e, t);
                  break;
                case "min-max":
                  S = (function ce(s, i, t, e) {
                    let r,
                      l,
                      c,
                      d,
                      g,
                      m,
                      x,
                      v,
                      S,
                      P,
                      n = 0,
                      o = 0;
                    const O = [],
                      A = s[i].x,
                      j = s[i + t - 1].x - A;
                    for (r = i; r < i + t; ++r) {
                      (l = s[r]), (c = ((l.x - A) / j) * e), (d = l.y);
                      const L = 0 | c;
                      if (L === g)
                        d < S
                          ? ((S = d), (m = r))
                          : d > P && ((P = d), (x = r)),
                          (n = (o * n + l.x) / ++o);
                      else {
                        const H = r - 1;
                        if (!(0, u.k)(m) && !(0, u.k)(x)) {
                          const W = Math.min(m, x),
                            V = Math.max(m, x);
                          W !== v && W !== H && O.push({ ...s[W], x: n }),
                            V !== v && V !== H && O.push({ ...s[V], x: n });
                        }
                        r > 0 && H !== v && O.push(s[H]),
                          O.push(l),
                          (g = L),
                          (o = 0),
                          (S = P = d),
                          (m = x = v = r);
                      }
                    }
                    return O;
                  })(d, m, x, e);
                  break;
                default:
                  throw new Error(
                    `Unsupported decimation algorithm '${t.algorithm}'`
                  );
              }
              n._decimated = S;
            }
          });
        },
        destroy(s) {
          Yn(s);
        },
      };
      function qi(s, i, t, e) {
        if (e) return;
        let n = i[s],
          o = t[s];
        return (
          "angle" === s && ((n = (0, u.ay)(n)), (o = (0, u.ay)(o))),
          { property: s, start: n, end: o }
        );
      }
      function Mi(s, i, t) {
        for (; i > s; i--) {
          const e = t[i];
          if (!isNaN(e.x) && !isNaN(e.y)) break;
        }
        return i;
      }
      function Si(s, i, t, e) {
        return s && i ? e(s[t], i[t]) : s ? s[t] : i ? i[t] : 0;
      }
      function ke(s, i) {
        let t = [],
          e = !1;
        return (
          (0, u.b)(s)
            ? ((e = !0), (t = s))
            : (t = (function qs(s, i) {
                const { x: t = null, y: e = null } = s || {},
                  n = i.points,
                  o = [];
                return (
                  i.segments.forEach(({ start: r, end: l }) => {
                    l = Mi(r, l, n);
                    const c = n[r],
                      d = n[l];
                    null !== e
                      ? (o.push({ x: c.x, y: e }), o.push({ x: d.x, y: e }))
                      : null !== t &&
                        (o.push({ x: t, y: c.y }), o.push({ x: t, y: d.y }));
                  }),
                  o
                );
              })(s, i)),
          t.length
            ? new bi({
                points: t,
                options: { tension: 0 },
                _loop: e,
                _fullLoop: e,
              })
            : null
        );
      }
      function Ji(s) {
        return s && !1 !== s.fill;
      }
      function tn(s, i, t) {
        let n = s[i].fill;
        const o = [i];
        let r;
        if (!t) return n;
        for (; !1 !== n && -1 === o.indexOf(n); ) {
          if (!(0, u.g)(n)) return n;
          if (((r = s[n]), !r)) return !1;
          if (r.visible) return n;
          o.push(n), (n = r.fill);
        }
        return !1;
      }
      function Js(s, i, t) {
        const e = (function Xn(s) {
          const i = s.options,
            t = i.fill;
          let e = (0, u.v)(t && t.target, t);
          return (
            void 0 === e && (e = !!i.backgroundColor),
            !1 !== e && null !== e && (!0 === e ? "origin" : e)
          );
        })(s);
        if ((0, u.i)(e)) return !isNaN(e.value) && e;
        let n = parseFloat(e);
        return (0, u.g)(n) && Math.floor(n) === n
          ? (function $n(s, i, t, e) {
              return (
                ("-" === s || "+" === s) && (t = i + t),
                !(t === i || t < 0 || t >= e) && t
              );
            })(e[0], i, n, t)
          : ["origin", "start", "end", "stack", "shape"].indexOf(e) >= 0 && e;
      }
      function a(s, i, t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const o = t[n],
            { first: r, last: l, point: c } = h(o, i, "x");
          if (!(!c || (r && l)))
            if (r) e.unshift(c);
            else if ((s.push(c), !l)) break;
        }
        s.push(...e);
      }
      function h(s, i, t) {
        const e = s.interpolate(i, t);
        if (!e) return {};
        const n = e[t],
          o = s.segments,
          r = s.points;
        let l = !1,
          c = !1;
        for (let d = 0; d < o.length; d++) {
          const g = o[d],
            m = r[g.start][t],
            x = r[g.end][t];
          if ((0, u.aj)(n, m, x)) {
            (l = n === m), (c = n === x);
            break;
          }
        }
        return { first: l, last: c, point: e };
      }
      class f {
        constructor(i) {
          (this.x = i.x), (this.y = i.y), (this.radius = i.radius);
        }
        pathSegment(i, t, e) {
          const { x: n, y: o, radius: r } = this;
          return (
            i.arc(n, o, r, (t = t || { start: 0, end: u.T }).end, t.start, !0),
            !e.bounds
          );
        }
        interpolate(i) {
          const { x: t, y: e, radius: n } = this,
            o = i.angle;
          return { x: t + Math.cos(o) * n, y: e + Math.sin(o) * n, angle: o };
        }
      }
      function C(s, i, t) {
        const e = (function p(s) {
            const { chart: i, fill: t, line: e } = s;
            if ((0, u.g)(t))
              return (function b(s, i) {
                const t = s.getDatasetMeta(i);
                return t && s.isDatasetVisible(i) ? t.dataset : null;
              })(i, t);
            if ("stack" === t)
              return (function Kn(s) {
                const { scale: i, index: t, line: e } = s,
                  n = [],
                  o = e.segments,
                  r = e.points,
                  l = (function en(s, i) {
                    const t = [],
                      e = s.getMatchingVisibleMetas("line");
                    for (let n = 0; n < e.length; n++) {
                      const o = e[n];
                      if (o.index === i) break;
                      o.hidden || t.unshift(o.dataset);
                    }
                    return t;
                  })(i, t);
                l.push(ke({ x: null, y: i.bottom }, e));
                for (let c = 0; c < o.length; c++) {
                  const d = o[c];
                  for (let g = d.start; g <= d.end; g++) a(n, r[g], l);
                }
                return new bi({ points: n, options: {} });
              })(s);
            if ("shape" === t) return !0;
            const n = (function y(s) {
              return (s.scale || {}).getPointPositionForValue
                ? (function k(s) {
                    const { scale: i, fill: t } = s,
                      e = i.options,
                      n = i.getLabels().length,
                      o = e.reverse ? i.max : i.min,
                      r = (function Zn(s, i, t) {
                        let e;
                        return (
                          (e =
                            "start" === s
                              ? t
                              : "end" === s
                              ? i.options.reverse
                                ? i.min
                                : i.max
                              : (0, u.i)(s)
                              ? s.value
                              : i.getBaseValue()),
                          e
                        );
                      })(t, i, o),
                      l = [];
                    if (e.grid.circular) {
                      const c = i.getPointPositionForValue(0, o);
                      return new f({
                        x: c.x,
                        y: c.y,
                        radius: i.getDistanceFromCenterForValue(r),
                      });
                    }
                    for (let c = 0; c < n; ++c)
                      l.push(i.getPointPositionForValue(c, r));
                    return l;
                  })(s)
                : (function M(s) {
                    const { scale: i = {}, fill: t } = s,
                      e = (function Un(s, i) {
                        let t = null;
                        return (
                          "start" === s
                            ? (t = i.bottom)
                            : "end" === s
                            ? (t = i.top)
                            : (0, u.i)(s)
                            ? (t = i.getPixelForValue(s.value))
                            : i.getBasePixel && (t = i.getBasePixel()),
                          t
                        );
                      })(t, i);
                    if ((0, u.g)(e)) {
                      const n = i.isHorizontal();
                      return { x: n ? e : null, y: n ? null : e };
                    }
                    return null;
                  })(s);
            })(s);
            return n instanceof f ? n : ke(n, e);
          })(i),
          { line: n, scale: o, axis: r } = i,
          l = n.options,
          c = l.fill,
          d = l.backgroundColor,
          { above: g = d, below: m = d } = c || {};
        e &&
          n.points.length &&
          ((0, u.Y)(s, t),
          (function T(s, i) {
            const {
                line: t,
                target: e,
                above: n,
                below: o,
                area: r,
                scale: l,
              } = i,
              c = t._loop ? "angle" : i.axis;
            s.save(),
              "x" === c &&
                o !== n &&
                (F(s, e, r.top),
                $(s, { line: t, target: e, color: n, scale: l, property: c }),
                s.restore(),
                s.save(),
                F(s, e, r.bottom)),
              $(s, { line: t, target: e, color: o, scale: l, property: c }),
              s.restore();
          })(s, {
            line: n,
            target: e,
            above: g,
            below: m,
            area: t,
            scale: o,
            axis: r,
          }),
          (0, u.$)(s));
      }
      function F(s, i, t) {
        const { segments: e, points: n } = i;
        let o = !0,
          r = !1;
        s.beginPath();
        for (const l of e) {
          const { start: c, end: d } = l,
            g = n[c],
            m = n[Mi(c, d, n)];
          o
            ? (s.moveTo(g.x, g.y), (o = !1))
            : (s.lineTo(g.x, t), s.lineTo(g.x, g.y)),
            (r = !!i.pathSegment(s, l, { move: r })),
            r ? s.closePath() : s.lineTo(m.x, t);
        }
        s.lineTo(i.first().x, t), s.closePath(), s.clip();
      }
      function $(s, i) {
        const { line: t, target: e, property: n, color: o, scale: r } = i,
          l = (function Qs(s, i, t) {
            const e = s.segments,
              n = s.points,
              o = i.points,
              r = [];
            for (const l of e) {
              let { start: c, end: d } = l;
              d = Mi(c, d, n);
              const g = qi(t, n[c], n[d], l.loop);
              if (!i.segments) {
                r.push({ source: l, target: g, start: n[c], end: n[d] });
                continue;
              }
              const m = (0, u.an)(i, g);
              for (const x of m) {
                const v = qi(t, o[x.start], o[x.end], x.loop),
                  S = (0, u.ax)(l, n, v);
                for (const P of S)
                  r.push({
                    source: P,
                    target: x,
                    start: { [t]: Si(g, v, "start", Math.max) },
                    end: { [t]: Si(g, v, "end", Math.min) },
                  });
              }
            }
            return r;
          })(t, e, n);
        for (const { source: c, target: d, start: g, end: m } of l) {
          const { style: { backgroundColor: x = o } = {} } = c,
            v = !0 !== e;
          s.save(), (s.fillStyle = x), Z(s, r, v && qi(n, g, m)), s.beginPath();
          const S = !!t.pathSegment(s, c);
          let P;
          if (v) {
            S ? s.closePath() : ot(s, e, m, n);
            const O = !!e.pathSegment(s, d, { move: S, reverse: !0 });
            (P = S && O), P || ot(s, e, g, n);
          }
          s.closePath(), s.fill(P ? "evenodd" : "nonzero"), s.restore();
        }
      }
      function Z(s, i, t) {
        const { top: e, bottom: n } = i.chart.chartArea,
          { property: o, start: r, end: l } = t || {};
        "x" === o && (s.beginPath(), s.rect(r, e, l - r, n - e), s.clip());
      }
      function ot(s, i, t, e) {
        const n = i.interpolate(t, e);
        n && s.lineTo(n.x, n.y);
      }
      var dt = {
        id: "filler",
        afterDatasetsUpdate(s, i, t) {
          const e = (s.data.datasets || []).length,
            n = [];
          let o, r, l, c;
          for (r = 0; r < e; ++r)
            (o = s.getDatasetMeta(r)),
              (l = o.dataset),
              (c = null),
              l &&
                l.options &&
                l instanceof bi &&
                (c = {
                  visible: s.isDatasetVisible(r),
                  index: r,
                  fill: Js(l, r, e),
                  chart: s,
                  axis: o.controller.options.indexAxis,
                  scale: o.vScale,
                  line: l,
                }),
              (o.$filler = c),
              n.push(c);
          for (r = 0; r < e; ++r)
            (c = n[r]), c && !1 !== c.fill && (c.fill = tn(n, r, t.propagate));
        },
        beforeDraw(s, i, t) {
          const e = "beforeDraw" === t.drawTime,
            n = s.getSortedVisibleDatasetMetas(),
            o = s.chartArea;
          for (let r = n.length - 1; r >= 0; --r) {
            const l = n[r].$filler;
            l &&
              (l.line.updateControlPoints(o, l.axis),
              e && l.fill && C(s.ctx, l, o));
          }
        },
        beforeDatasetsDraw(s, i, t) {
          if ("beforeDatasetsDraw" !== t.drawTime) return;
          const e = s.getSortedVisibleDatasetMetas();
          for (let n = e.length - 1; n >= 0; --n) {
            const o = e[n].$filler;
            Ji(o) && C(s.ctx, o, s.chartArea);
          }
        },
        beforeDatasetDraw(s, i, t) {
          const e = i.meta.$filler;
          !Ji(e) ||
            "beforeDatasetDraw" !== t.drawTime ||
            C(s.ctx, e, s.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
      };
      const K = (s, i) => {
        let { boxHeight: t = i, boxWidth: e = i } = s;
        return (
          s.usePointStyle &&
            ((t = Math.min(t, i)), (e = s.pointStyleWidth || Math.min(e, i))),
          { boxWidth: e, boxHeight: t, itemHeight: Math.max(i, t) }
        );
      };
      class bt extends wt {
        constructor(i) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = i.chart),
            (this.options = i.options),
            (this.ctx = i.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(i, t, e) {
          (this.maxWidth = i),
            (this.maxHeight = t),
            (this._margins = e),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const i = this.options.labels || {};
          let t = (0, u.Q)(i.generateLabels, [this.chart], this) || [];
          i.filter && (t = t.filter((e) => i.filter(e, this.chart.data))),
            i.sort && (t = t.sort((e, n) => i.sort(e, n, this.chart.data))),
            this.options.reverse && t.reverse(),
            (this.legendItems = t);
        }
        fit() {
          const { options: i, ctx: t } = this;
          if (!i.display) return void (this.width = this.height = 0);
          const e = i.labels,
            n = (0, u.a0)(e.font),
            o = n.size,
            r = this._computeTitleHeight(),
            { boxWidth: l, itemHeight: c } = K(e, o);
          let d, g;
          (t.font = n.string),
            this.isHorizontal()
              ? ((d = this.maxWidth), (g = this._fitRows(r, o, l, c) + 10))
              : ((g = this.maxHeight), (d = this._fitCols(r, n, l, c) + 10)),
            (this.width = Math.min(d, i.maxWidth || this.maxWidth)),
            (this.height = Math.min(g, i.maxHeight || this.maxHeight));
        }
        _fitRows(i, t, e, n) {
          const {
              ctx: o,
              maxWidth: r,
              options: {
                labels: { padding: l },
              },
            } = this,
            c = (this.legendHitBoxes = []),
            d = (this.lineWidths = [0]),
            g = n + l;
          let m = i;
          (o.textAlign = "left"), (o.textBaseline = "middle");
          let x = -1,
            v = -g;
          return (
            this.legendItems.forEach((S, P) => {
              const O = e + t / 2 + o.measureText(S.text).width;
              (0 === P || d[d.length - 1] + O + 2 * l > r) &&
                ((m += g), (d[d.length - (P > 0 ? 0 : 1)] = 0), (v += g), x++),
                (c[P] = { left: 0, top: v, row: x, width: O, height: n }),
                (d[d.length - 1] += O + l);
            }),
            m
          );
        }
        _fitCols(i, t, e, n) {
          const {
              ctx: o,
              maxHeight: r,
              options: {
                labels: { padding: l },
              },
            } = this,
            c = (this.legendHitBoxes = []),
            d = (this.columnSizes = []),
            g = r - i;
          let m = l,
            x = 0,
            v = 0,
            S = 0,
            P = 0;
          return (
            this.legendItems.forEach((O, z) => {
              const { itemWidth: A, itemHeight: B } = (function Pe(
                s,
                i,
                t,
                e,
                n
              ) {
                const o = (function Ne(s, i, t, e) {
                    let n = s.text;
                    return (
                      n &&
                        "string" != typeof n &&
                        (n = n.reduce((o, r) => (o.length > r.length ? o : r))),
                      i + t.size / 2 + e.measureText(n).width
                    );
                  })(e, s, i, t),
                  r = (function to(s, i, t) {
                    let e = s;
                    return "string" != typeof i.text && (e = Gn(i, t)), e;
                  })(n, e, i.lineHeight);
                return { itemWidth: o, itemHeight: r };
              })(e, t, o, O, n);
              z > 0 &&
                v + B + 2 * l > g &&
                ((m += x + l),
                d.push({ width: x, height: v }),
                (S += x + l),
                P++,
                (x = v = 0)),
                (c[z] = { left: S, top: v, col: P, width: A, height: B }),
                (x = Math.max(x, A)),
                (v += B + l);
            }),
            (m += x),
            d.push({ width: x, height: v }),
            m
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const i = this._computeTitleHeight(),
            {
              legendHitBoxes: t,
              options: {
                align: e,
                labels: { padding: n },
                rtl: o,
              },
            } = this,
            r = (0, u.az)(o, this.left, this.width);
          if (this.isHorizontal()) {
            let l = 0,
              c = (0, u.a2)(e, this.left + n, this.right - this.lineWidths[l]);
            for (const d of t)
              l !== d.row &&
                ((l = d.row),
                (c = (0, u.a2)(
                  e,
                  this.left + n,
                  this.right - this.lineWidths[l]
                ))),
                (d.top += this.top + i + n),
                (d.left = r.leftForLtr(r.x(c), d.width)),
                (c += d.width + n);
          } else {
            let l = 0,
              c = (0, u.a2)(
                e,
                this.top + i + n,
                this.bottom - this.columnSizes[l].height
              );
            for (const d of t)
              d.col !== l &&
                ((l = d.col),
                (c = (0, u.a2)(
                  e,
                  this.top + i + n,
                  this.bottom - this.columnSizes[l].height
                ))),
                (d.top = c),
                (d.left += this.left + n),
                (d.left = r.leftForLtr(r.x(d.left), d.width)),
                (c += d.height + n);
          }
        }
        isHorizontal() {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        }
        draw() {
          if (this.options.display) {
            const i = this.ctx;
            (0, u.Y)(i, this), this._draw(), (0, u.$)(i);
          }
        }
        _draw() {
          const { options: i, columnSizes: t, lineWidths: e, ctx: n } = this,
            { align: o, labels: r } = i,
            l = u.d.color,
            c = (0, u.az)(i.rtl, this.left, this.width),
            d = (0, u.a0)(r.font),
            { padding: g } = r,
            m = d.size,
            x = m / 2;
          let v;
          this.drawTitle(),
            (n.textAlign = c.textAlign("left")),
            (n.textBaseline = "middle"),
            (n.lineWidth = 0.5),
            (n.font = d.string);
          const { boxWidth: S, boxHeight: P, itemHeight: O } = K(r, m),
            B = this.isHorizontal(),
            j = this._computeTitleHeight();
          (v = B
            ? {
                x: (0, u.a2)(o, this.left + g, this.right - e[0]),
                y: this.top + g + j,
                line: 0,
              }
            : {
                x: this.left + g,
                y: (0, u.a2)(o, this.top + j + g, this.bottom - t[0].height),
                line: 0,
              }),
            (0, u.aA)(this.ctx, i.textDirection);
          const L = O + g;
          this.legendItems.forEach((H, W) => {
            (n.strokeStyle = H.fontColor), (n.fillStyle = H.fontColor);
            const V = n.measureText(H.text).width,
              U = c.textAlign(H.textAlign || (H.textAlign = r.textAlign)),
              tt = S + x + V;
            let J = v.x,
              nt = v.y;
            c.setWidth(this.width),
              B
                ? W > 0 &&
                  J + tt + g > this.right &&
                  ((nt = v.y += L),
                  v.line++,
                  (J = v.x =
                    (0, u.a2)(o, this.left + g, this.right - e[v.line])))
                : W > 0 &&
                  nt + L > this.bottom &&
                  ((J = v.x = J + t[v.line].width + g),
                  v.line++,
                  (nt = v.y =
                    (0, u.a2)(
                      o,
                      this.top + j + g,
                      this.bottom - t[v.line].height
                    ))),
              (function (H, W, V) {
                if (isNaN(S) || S <= 0 || isNaN(P) || P < 0) return;
                n.save();
                const U = (0, u.v)(V.lineWidth, 1);
                if (
                  ((n.fillStyle = (0, u.v)(V.fillStyle, l)),
                  (n.lineCap = (0, u.v)(V.lineCap, "butt")),
                  (n.lineDashOffset = (0, u.v)(V.lineDashOffset, 0)),
                  (n.lineJoin = (0, u.v)(V.lineJoin, "miter")),
                  (n.lineWidth = U),
                  (n.strokeStyle = (0, u.v)(V.strokeStyle, l)),
                  n.setLineDash((0, u.v)(V.lineDash, [])),
                  r.usePointStyle)
                ) {
                  const tt = {
                      radius: (P * Math.SQRT2) / 2,
                      pointStyle: V.pointStyle,
                      rotation: V.rotation,
                      borderWidth: U,
                    },
                    J = c.xPlus(H, S / 2);
                  (0, u.aD)(n, tt, J, W + x, r.pointStyleWidth && S);
                } else {
                  const tt = W + Math.max((m - P) / 2, 0),
                    J = c.leftForLtr(H, S),
                    nt = (0, u.aw)(V.borderRadius);
                  n.beginPath(),
                    Object.values(nt).some((Mt) => 0 !== Mt)
                      ? (0, u.au)(n, { x: J, y: tt, w: S, h: P, radius: nt })
                      : n.rect(J, tt, S, P),
                    n.fill(),
                    0 !== U && n.stroke();
                }
                n.restore();
              })(c.x(J), nt, H),
              (J = (0, u.aB)(U, J + S + x, B ? J + tt : this.right, i.rtl)),
              (function (H, W, V) {
                (0, u.Z)(n, V.text, H, W + O / 2, d, {
                  strikethrough: V.hidden,
                  textAlign: c.textAlign(V.textAlign),
                });
              })(c.x(J), nt, H),
              B
                ? (v.x += tt + g)
                : (v.y +=
                    "string" != typeof H.text ? Gn(H, d.lineHeight) + g : L);
          }),
            (0, u.aC)(this.ctx, i.textDirection);
        }
        drawTitle() {
          const i = this.options,
            t = i.title,
            e = (0, u.a0)(t.font),
            n = (0, u.E)(t.padding);
          if (!t.display) return;
          const o = (0, u.az)(i.rtl, this.left, this.width),
            r = this.ctx,
            l = t.position,
            d = n.top + e.size / 2;
          let g,
            m = this.left,
            x = this.width;
          if (this.isHorizontal())
            (x = Math.max(...this.lineWidths)),
              (g = this.top + d),
              (m = (0, u.a2)(i.align, m, this.right - x));
          else {
            const S = this.columnSizes.reduce(
              (P, O) => Math.max(P, O.height),
              0
            );
            g =
              d +
              (0, u.a2)(
                i.align,
                this.top,
                this.bottom - S - i.labels.padding - this._computeTitleHeight()
              );
          }
          const v = (0, u.a2)(l, m, m + x);
          (r.textAlign = o.textAlign((0, u.a1)(l))),
            (r.textBaseline = "middle"),
            (r.strokeStyle = t.color),
            (r.fillStyle = t.color),
            (r.font = e.string),
            (0, u.Z)(r, t.text, v, g, e);
        }
        _computeTitleHeight() {
          const i = this.options.title,
            t = (0, u.a0)(i.font),
            e = (0, u.E)(i.padding);
          return i.display ? t.lineHeight + e.height : 0;
        }
        _getLegendItemAt(i, t) {
          let e, n, o;
          if (
            (0, u.aj)(i, this.left, this.right) &&
            (0, u.aj)(t, this.top, this.bottom)
          )
            for (o = this.legendHitBoxes, e = 0; e < o.length; ++e)
              if (
                ((n = o[e]),
                (0, u.aj)(i, n.left, n.left + n.width) &&
                  (0, u.aj)(t, n.top, n.top + n.height))
              )
                return this.legendItems[e];
          return null;
        }
        handleEvent(i) {
          const t = this.options;
          if (
            !(function eo(s, i) {
              return !(
                (("mousemove" !== s && "mouseout" !== s) ||
                  (!i.onHover && !i.onLeave)) &&
                (!i.onClick || ("click" !== s && "mouseup" !== s))
              );
            })(i.type, t)
          )
            return;
          const e = this._getLegendItemAt(i.x, i.y);
          if ("mousemove" === i.type || "mouseout" === i.type) {
            const n = this._hoveredItem,
              o = ((s, i) =>
                null !== s &&
                null !== i &&
                s.datasetIndex === i.datasetIndex &&
                s.index === i.index)(n, e);
            n && !o && (0, u.Q)(t.onLeave, [i, n, this], this),
              (this._hoveredItem = e),
              e && !o && (0, u.Q)(t.onHover, [i, e, this], this);
          } else e && (0, u.Q)(t.onClick, [i, e, this], this);
        }
      }
      function Gn(s, i) {
        return i * (s.text ? s.text.length : 0);
      }
      var Qn = {
        id: "legend",
        _element: bt,
        start(s, i, t) {
          const e = (s.legend = new bt({ ctx: s.ctx, options: t, chart: s }));
          gt.configure(s, e, t), gt.addBox(s, e);
        },
        stop(s) {
          gt.removeBox(s, s.legend), delete s.legend;
        },
        beforeUpdate(s, i, t) {
          const e = s.legend;
          gt.configure(s, e, t), (e.options = t);
        },
        afterUpdate(s) {
          const i = s.legend;
          i.buildLabels(), i.adjustHitBoxes();
        },
        afterEvent(s, i) {
          i.replay || s.legend.handleEvent(i.event);
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(s, i, t) {
            const e = i.datasetIndex,
              n = t.chart;
            n.isDatasetVisible(e)
              ? (n.hide(e), (i.hidden = !0))
              : (n.show(e), (i.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (s) => s.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(s) {
              const i = s.data.datasets,
                {
                  labels: {
                    usePointStyle: t,
                    pointStyle: e,
                    textAlign: n,
                    color: o,
                    useBorderRadius: r,
                    borderRadius: l,
                  },
                } = s.legend.options;
              return s._getSortedDatasetMetas().map((c) => {
                const d = c.controller.getStyle(t ? 0 : void 0),
                  g = (0, u.E)(d.borderWidth);
                return {
                  text: i[c.index].label,
                  fillStyle: d.backgroundColor,
                  fontColor: o,
                  hidden: !c.visible,
                  lineCap: d.borderCapStyle,
                  lineDash: d.borderDash,
                  lineDashOffset: d.borderDashOffset,
                  lineJoin: d.borderJoinStyle,
                  lineWidth: (g.width + g.height) / 4,
                  strokeStyle: d.borderColor,
                  pointStyle: e || d.pointStyle,
                  rotation: d.rotation,
                  textAlign: n || d.textAlign,
                  borderRadius: r && (l || d.borderRadius),
                  datasetIndex: c.index,
                };
              }, this);
            },
          },
          title: {
            color: (s) => s.chart.options.color,
            display: !1,
            position: "center",
            text: "",
          },
        },
        descriptors: {
          _scriptable: (s) => !s.startsWith("on"),
          labels: {
            _scriptable: (s) =>
              !["generateLabels", "filter", "sort"].includes(s),
          },
        },
      };
      class Jt extends wt {
        constructor(i) {
          super(),
            (this.chart = i.chart),
            (this.options = i.options),
            (this.ctx = i.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(i, t) {
          const e = this.options;
          if (((this.left = 0), (this.top = 0), !e.display))
            return void (this.width =
              this.height =
              this.right =
              this.bottom =
                0);
          (this.width = this.right = i), (this.height = this.bottom = t);
          const n = (0, u.b)(e.text) ? e.text.length : 1;
          this._padding = (0, u.E)(e.padding);
          const o = n * (0, u.a0)(e.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = o) : (this.width = o);
        }
        isHorizontal() {
          const i = this.options.position;
          return "top" === i || "bottom" === i;
        }
        _drawArgs(i) {
          const { top: t, left: e, bottom: n, right: o, options: r } = this,
            l = r.align;
          let d,
            g,
            m,
            c = 0;
          return (
            this.isHorizontal()
              ? ((g = (0, u.a2)(l, e, o)), (m = t + i), (d = o - e))
              : ("left" === r.position
                  ? ((g = e + i), (m = (0, u.a2)(l, n, t)), (c = -0.5 * u.P))
                  : ((g = o - i), (m = (0, u.a2)(l, t, n)), (c = 0.5 * u.P)),
                (d = n - t)),
            { titleX: g, titleY: m, maxWidth: d, rotation: c }
          );
        }
        draw() {
          const i = this.ctx,
            t = this.options;
          if (!t.display) return;
          const e = (0, u.a0)(t.font),
            o = e.lineHeight / 2 + this._padding.top,
            {
              titleX: r,
              titleY: l,
              maxWidth: c,
              rotation: d,
            } = this._drawArgs(o);
          (0, u.Z)(i, t.text, 0, 0, e, {
            color: t.color,
            maxWidth: c,
            rotation: d,
            textAlign: (0, u.a1)(t.align),
            textBaseline: "middle",
            translation: [r, l],
          });
        }
      }
      var Lo = {
        id: "title",
        _element: Jt,
        start(s, i, t) {
          !(function qn(s, i) {
            const t = new Jt({ ctx: s.ctx, options: i, chart: s });
            gt.configure(s, t, i), gt.addBox(s, t), (s.titleBlock = t);
          })(s, t);
        },
        stop(s) {
          gt.removeBox(s, s.titleBlock), delete s.titleBlock;
        },
        beforeUpdate(s, i, t) {
          const e = s.titleBlock;
          gt.configure(s, e, t), (e.options = t);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "bold" },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const Jn = new WeakMap();
      var mo = {
        id: "subtitle",
        start(s, i, t) {
          const e = new Jt({ ctx: s.ctx, options: t, chart: s });
          gt.configure(s, e, t), gt.addBox(s, e), Jn.set(s, e);
        },
        stop(s) {
          gt.removeBox(s, Jn.get(s)), Jn.delete(s);
        },
        beforeUpdate(s, i, t) {
          const e = Jn.get(s);
          gt.configure(s, e, t), (e.options = t);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "normal" },
          fullSize: !0,
          padding: 0,
          position: "top",
          text: "",
          weight: 1500,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const nn = {
        average(s) {
          if (!s.length) return !1;
          let i,
            t,
            e = 0,
            n = 0,
            o = 0;
          for (i = 0, t = s.length; i < t; ++i) {
            const r = s[i].element;
            if (r && r.hasValue()) {
              const l = r.tooltipPosition();
              (e += l.x), (n += l.y), ++o;
            }
          }
          return { x: e / o, y: n / o };
        },
        nearest(s, i) {
          if (!s.length) return !1;
          let o,
            r,
            l,
            t = i.x,
            e = i.y,
            n = Number.POSITIVE_INFINITY;
          for (o = 0, r = s.length; o < r; ++o) {
            const c = s[o].element;
            if (c && c.hasValue()) {
              const d = c.getCenterPoint(),
                g = (0, u.aE)(i, d);
              g < n && ((n = g), (l = c));
            }
          }
          if (l) {
            const c = l.tooltipPosition();
            (t = c.x), (e = c.y);
          }
          return { x: t, y: e };
        },
      };
      function te(s, i) {
        return (
          i && ((0, u.b)(i) ? Array.prototype.push.apply(s, i) : s.push(i)), s
        );
      }
      function ee(s) {
        return ("string" == typeof s || s instanceof String) &&
          s.indexOf("\n") > -1
          ? s.split("\n")
          : s;
      }
      function Eo(s, i) {
        const { element: t, datasetIndex: e, index: n } = i,
          o = s.getDatasetMeta(e).controller,
          { label: r, value: l } = o.getLabelAndValue(n);
        return {
          chart: s,
          label: r,
          parsed: o.getParsed(n),
          raw: s.data.datasets[e].data[n],
          formattedValue: l,
          dataset: o.getDataset(),
          dataIndex: n,
          datasetIndex: e,
          element: t,
        };
      }
      function bo(s, i) {
        const t = s.chart.ctx,
          { body: e, footer: n, title: o } = s,
          { boxWidth: r, boxHeight: l } = i,
          c = (0, u.a0)(i.bodyFont),
          d = (0, u.a0)(i.titleFont),
          g = (0, u.a0)(i.footerFont),
          m = o.length,
          x = n.length,
          v = e.length,
          S = (0, u.E)(i.padding);
        let P = S.height,
          O = 0,
          z = e.reduce(
            (j, L) => j + L.before.length + L.lines.length + L.after.length,
            0
          );
        (z += s.beforeBody.length + s.afterBody.length),
          m &&
            (P +=
              m * d.lineHeight +
              (m - 1) * i.titleSpacing +
              i.titleMarginBottom),
          z &&
            (P +=
              v * (i.displayColors ? Math.max(l, c.lineHeight) : c.lineHeight) +
              (z - v) * c.lineHeight +
              (z - 1) * i.bodySpacing),
          x &&
            (P +=
              i.footerMarginTop + x * g.lineHeight + (x - 1) * i.footerSpacing);
        let A = 0;
        const B = function (j) {
          O = Math.max(O, t.measureText(j).width + A);
        };
        return (
          t.save(),
          (t.font = d.string),
          (0, u.F)(s.title, B),
          (t.font = c.string),
          (0, u.F)(s.beforeBody.concat(s.afterBody), B),
          (A = i.displayColors ? r + 2 + i.boxPadding : 0),
          (0, u.F)(e, (j) => {
            (0, u.F)(j.before, B), (0, u.F)(j.lines, B), (0, u.F)(j.after, B);
          }),
          (A = 0),
          (t.font = g.string),
          (0, u.F)(s.footer, B),
          t.restore(),
          (O += S.width),
          { width: O, height: P }
        );
      }
      function Io(s, i, t, e) {
        const { x: n, width: o } = t,
          {
            width: r,
            chartArea: { left: l, right: c },
          } = s;
        let d = "center";
        return (
          "center" === e
            ? (d = n <= (l + c) / 2 ? "left" : "right")
            : n <= o / 2
            ? (d = "left")
            : n >= r - o / 2 && (d = "right"),
          (function Ro(s, i, t, e) {
            const { x: n, width: o } = e,
              r = t.caretSize + t.caretPadding;
            if (
              ("left" === s && n + o + r > i.width) ||
              ("right" === s && n - o - r < 0)
            )
              return !0;
          })(d, s, i, t) && (d = "center"),
          d
        );
      }
      function xo(s, i, t) {
        const e =
          t.yAlign ||
          i.yAlign ||
          (function _o(s, i) {
            const { y: t, height: e } = i;
            return t < e / 2
              ? "top"
              : t > s.height - e / 2
              ? "bottom"
              : "center";
          })(s, t);
        return { xAlign: t.xAlign || i.xAlign || Io(s, i, t, e), yAlign: e };
      }
      function yo(s, i, t, e) {
        const { caretSize: n, caretPadding: o, cornerRadius: r } = s,
          { xAlign: l, yAlign: c } = t,
          d = n + o,
          {
            topLeft: g,
            topRight: m,
            bottomLeft: x,
            bottomRight: v,
          } = (0, u.aw)(r);
        let S = (function Fo(s, i) {
          let { x: t, width: e } = s;
          return "right" === i ? (t -= e) : "center" === i && (t -= e / 2), t;
        })(i, l);
        const P = (function Bo(s, i, t) {
          let { y: e, height: n } = s;
          return (
            "top" === i ? (e += t) : (e -= "bottom" === i ? n + t : n / 2), e
          );
        })(i, c, d);
        return (
          "center" === c
            ? "left" === l
              ? (S += d)
              : "right" === l && (S -= d)
            : "left" === l
            ? (S -= Math.max(g, x) + n)
            : "right" === l && (S += Math.max(m, v) + n),
          {
            x: (0, u.S)(S, 0, e.width - i.width),
            y: (0, u.S)(P, 0, e.height - i.height),
          }
        );
      }
      function ts(s, i, t) {
        const e = (0, u.E)(t.padding);
        return "center" === i
          ? s.x + s.width / 2
          : "right" === i
          ? s.x + s.width - e.right
          : s.x + e.left;
      }
      function vo(s) {
        return te([], ee(s));
      }
      function Mo(s, i) {
        const t =
          i && i.dataset && i.dataset.tooltip && i.dataset.tooltip.callbacks;
        return t ? s.override(t) : s;
      }
      const jo = {
        beforeTitle: u.aF,
        title(s) {
          if (s.length > 0) {
            const i = s[0],
              t = i.chart.data.labels,
              e = t ? t.length : 0;
            if (this && this.options && "dataset" === this.options.mode)
              return i.dataset.label || "";
            if (i.label) return i.label;
            if (e > 0 && i.dataIndex < e) return t[i.dataIndex];
          }
          return "";
        },
        afterTitle: u.aF,
        beforeBody: u.aF,
        beforeLabel: u.aF,
        label(s) {
          if (this && this.options && "dataset" === this.options.mode)
            return s.label + ": " + s.formattedValue || s.formattedValue;
          let i = s.dataset.label || "";
          i && (i += ": ");
          const t = s.formattedValue;
          return (0, u.k)(t) || (i += t), i;
        },
        labelColor(s) {
          const t = s.chart
            .getDatasetMeta(s.datasetIndex)
            .controller.getStyle(s.dataIndex);
          return {
            borderColor: t.borderColor,
            backgroundColor: t.backgroundColor,
            borderWidth: t.borderWidth,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(s) {
          const t = s.chart
            .getDatasetMeta(s.datasetIndex)
            .controller.getStyle(s.dataIndex);
          return { pointStyle: t.pointStyle, rotation: t.rotation };
        },
        afterLabel: u.aF,
        afterBody: u.aF,
        beforeFooter: u.aF,
        footer: u.aF,
        afterFooter: u.aF,
      };
      function kt(s, i, t, e) {
        const n = s[i].call(t, e);
        return typeof n > "u" ? jo[i].call(t, e) : n;
      }
      let So = (() => {
        class s extends wt {
          constructor(t) {
            super(),
              (this.opacity = 0),
              (this._active = []),
              (this._eventPosition = void 0),
              (this._size = void 0),
              (this._cachedAnimations = void 0),
              (this._tooltipItems = []),
              (this.$animations = void 0),
              (this.$context = void 0),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.dataPoints = void 0),
              (this.title = void 0),
              (this.beforeBody = void 0),
              (this.body = void 0),
              (this.afterBody = void 0),
              (this.footer = void 0),
              (this.xAlign = void 0),
              (this.yAlign = void 0),
              (this.x = void 0),
              (this.y = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this.caretX = void 0),
              (this.caretY = void 0),
              (this.labelColors = void 0),
              (this.labelPointStyles = void 0),
              (this.labelTextColors = void 0);
          }
          initialize(t) {
            (this.options = t),
              (this._cachedAnimations = void 0),
              (this.$context = void 0);
          }
          _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const e = this.chart,
              n = this.options.setContext(this.getContext()),
              o = n.enabled && e.options.animation && n.animations,
              r = new mt(this.chart, o);
            return (
              o._cacheable && (this._cachedAnimations = Object.freeze(r)), r
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context = (function Ho(s, i, t) {
                return (0, u.j)(s, {
                  tooltip: i,
                  tooltipItems: t,
                  type: "tooltip",
                });
              })(this.chart.getContext(), this, this._tooltipItems))
            );
          }
          getTitle(t, e) {
            const { callbacks: n } = e,
              o = kt(n, "beforeTitle", this, t),
              r = kt(n, "title", this, t),
              l = kt(n, "afterTitle", this, t);
            let c = [];
            return (
              (c = te(c, ee(o))), (c = te(c, ee(r))), (c = te(c, ee(l))), c
            );
          }
          getBeforeBody(t, e) {
            return vo(kt(e.callbacks, "beforeBody", this, t));
          }
          getBody(t, e) {
            const { callbacks: n } = e,
              o = [];
            return (
              (0, u.F)(t, (r) => {
                const l = { before: [], lines: [], after: [] },
                  c = Mo(n, r);
                te(l.before, ee(kt(c, "beforeLabel", this, r))),
                  te(l.lines, kt(c, "label", this, r)),
                  te(l.after, ee(kt(c, "afterLabel", this, r))),
                  o.push(l);
              }),
              o
            );
          }
          getAfterBody(t, e) {
            return vo(kt(e.callbacks, "afterBody", this, t));
          }
          getFooter(t, e) {
            const { callbacks: n } = e,
              o = kt(n, "beforeFooter", this, t),
              r = kt(n, "footer", this, t),
              l = kt(n, "afterFooter", this, t);
            let c = [];
            return (
              (c = te(c, ee(o))), (c = te(c, ee(r))), (c = te(c, ee(l))), c
            );
          }
          _createItems(t) {
            const e = this._active,
              n = this.chart.data,
              o = [],
              r = [],
              l = [];
            let d,
              g,
              c = [];
            for (d = 0, g = e.length; d < g; ++d) c.push(Eo(this.chart, e[d]));
            return (
              t.filter && (c = c.filter((m, x, v) => t.filter(m, x, v, n))),
              t.itemSort && (c = c.sort((m, x) => t.itemSort(m, x, n))),
              (0, u.F)(c, (m) => {
                const x = Mo(t.callbacks, m);
                o.push(kt(x, "labelColor", this, m)),
                  r.push(kt(x, "labelPointStyle", this, m)),
                  l.push(kt(x, "labelTextColor", this, m));
              }),
              (this.labelColors = o),
              (this.labelPointStyles = r),
              (this.labelTextColors = l),
              (this.dataPoints = c),
              c
            );
          }
          update(t, e) {
            const n = this.options.setContext(this.getContext()),
              o = this._active;
            let r,
              l = [];
            if (o.length) {
              const c = nn[n.position].call(this, o, this._eventPosition);
              (l = this._createItems(n)),
                (this.title = this.getTitle(l, n)),
                (this.beforeBody = this.getBeforeBody(l, n)),
                (this.body = this.getBody(l, n)),
                (this.afterBody = this.getAfterBody(l, n)),
                (this.footer = this.getFooter(l, n));
              const d = (this._size = bo(this, n)),
                g = Object.assign({}, c, d),
                m = xo(this.chart, n, g),
                x = yo(n, g, m, this.chart);
              (this.xAlign = m.xAlign),
                (this.yAlign = m.yAlign),
                (r = {
                  opacity: 1,
                  x: x.x,
                  y: x.y,
                  width: d.width,
                  height: d.height,
                  caretX: c.x,
                  caretY: c.y,
                });
            } else 0 !== this.opacity && (r = { opacity: 0 });
            (this._tooltipItems = l),
              (this.$context = void 0),
              r && this._resolveAnimations().update(this, r),
              t &&
                n.external &&
                n.external.call(this, {
                  chart: this.chart,
                  tooltip: this,
                  replay: e,
                });
          }
          drawCaret(t, e, n, o) {
            const r = this.getCaretPosition(t, n, o);
            e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
          }
          getCaretPosition(t, e, n) {
            const { xAlign: o, yAlign: r } = this,
              { caretSize: l, cornerRadius: c } = n,
              {
                topLeft: d,
                topRight: g,
                bottomLeft: m,
                bottomRight: x,
              } = (0, u.aw)(c),
              { x: v, y: S } = t,
              { width: P, height: O } = e;
            let z, A, B, j, L, H;
            return (
              "center" === r
                ? ((L = S + O / 2),
                  "left" === o
                    ? ((z = v), (A = z - l), (j = L + l), (H = L - l))
                    : ((z = v + P), (A = z + l), (j = L - l), (H = L + l)),
                  (B = z))
                : ((A =
                    "left" === o
                      ? v + Math.max(d, m) + l
                      : "right" === o
                      ? v + P - Math.max(g, x) - l
                      : this.caretX),
                  "top" === r
                    ? ((j = S), (L = j - l), (z = A - l), (B = A + l))
                    : ((j = S + O), (L = j + l), (z = A + l), (B = A - l)),
                  (H = j)),
              { x1: z, x2: A, x3: B, y1: j, y2: L, y3: H }
            );
          }
          drawTitle(t, e, n) {
            const o = this.title,
              r = o.length;
            let l, c, d;
            if (r) {
              const g = (0, u.az)(n.rtl, this.x, this.width);
              for (
                t.x = ts(this, n.titleAlign, n),
                  e.textAlign = g.textAlign(n.titleAlign),
                  e.textBaseline = "middle",
                  l = (0, u.a0)(n.titleFont),
                  c = n.titleSpacing,
                  e.fillStyle = n.titleColor,
                  e.font = l.string,
                  d = 0;
                d < r;
                ++d
              )
                e.fillText(o[d], g.x(t.x), t.y + l.lineHeight / 2),
                  (t.y += l.lineHeight + c),
                  d + 1 === r && (t.y += n.titleMarginBottom - c);
            }
          }
          _drawColorBox(t, e, n, o, r) {
            const l = this.labelColors[n],
              c = this.labelPointStyles[n],
              { boxHeight: d, boxWidth: g } = r,
              m = (0, u.a0)(r.bodyFont),
              x = ts(this, "left", r),
              v = o.x(x),
              P = e.y + (d < m.lineHeight ? (m.lineHeight - d) / 2 : 0);
            if (r.usePointStyle) {
              const O = {
                  radius: Math.min(g, d) / 2,
                  pointStyle: c.pointStyle,
                  rotation: c.rotation,
                  borderWidth: 1,
                },
                z = o.leftForLtr(v, g) + g / 2,
                A = P + d / 2;
              (t.strokeStyle = r.multiKeyBackground),
                (t.fillStyle = r.multiKeyBackground),
                (0, u.at)(t, O, z, A),
                (t.strokeStyle = l.borderColor),
                (t.fillStyle = l.backgroundColor),
                (0, u.at)(t, O, z, A);
            } else {
              (t.lineWidth = (0, u.i)(l.borderWidth)
                ? Math.max(...Object.values(l.borderWidth))
                : l.borderWidth || 1),
                (t.strokeStyle = l.borderColor),
                t.setLineDash(l.borderDash || []),
                (t.lineDashOffset = l.borderDashOffset || 0);
              const O = o.leftForLtr(v, g),
                z = o.leftForLtr(o.xPlus(v, 1), g - 2),
                A = (0, u.aw)(l.borderRadius);
              Object.values(A).some((B) => 0 !== B)
                ? (t.beginPath(),
                  (t.fillStyle = r.multiKeyBackground),
                  (0, u.au)(t, { x: O, y: P, w: g, h: d, radius: A }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = l.backgroundColor),
                  t.beginPath(),
                  (0, u.au)(t, {
                    x: z,
                    y: P + 1,
                    w: g - 2,
                    h: d - 2,
                    radius: A,
                  }),
                  t.fill())
                : ((t.fillStyle = r.multiKeyBackground),
                  t.fillRect(O, P, g, d),
                  t.strokeRect(O, P, g, d),
                  (t.fillStyle = l.backgroundColor),
                  t.fillRect(z, P + 1, g - 2, d - 2));
            }
            t.fillStyle = this.labelTextColors[n];
          }
          drawBody(t, e, n) {
            const { body: o } = this,
              {
                bodySpacing: r,
                bodyAlign: l,
                displayColors: c,
                boxHeight: d,
                boxWidth: g,
                boxPadding: m,
              } = n,
              x = (0, u.a0)(n.bodyFont);
            let v = x.lineHeight,
              S = 0;
            const P = (0, u.az)(n.rtl, this.x, this.width),
              O = function (U) {
                e.fillText(U, P.x(t.x + S), t.y + v / 2), (t.y += v + r);
              },
              z = P.textAlign(l);
            let A, B, j, L, H, W, V;
            for (
              e.textAlign = l,
                e.textBaseline = "middle",
                e.font = x.string,
                t.x = ts(this, z, n),
                e.fillStyle = n.bodyColor,
                (0, u.F)(this.beforeBody, O),
                S =
                  c && "right" !== z
                    ? "center" === l
                      ? g / 2 + m
                      : g + 2 + m
                    : 0,
                L = 0,
                W = o.length;
              L < W;
              ++L
            ) {
              for (
                A = o[L],
                  B = this.labelTextColors[L],
                  e.fillStyle = B,
                  (0, u.F)(A.before, O),
                  j = A.lines,
                  c &&
                    j.length &&
                    (this._drawColorBox(e, t, L, P, n),
                    (v = Math.max(x.lineHeight, d))),
                  H = 0,
                  V = j.length;
                H < V;
                ++H
              )
                O(j[H]), (v = x.lineHeight);
              (0, u.F)(A.after, O);
            }
            (S = 0),
              (v = x.lineHeight),
              (0, u.F)(this.afterBody, O),
              (t.y -= r);
          }
          drawFooter(t, e, n) {
            const o = this.footer,
              r = o.length;
            let l, c;
            if (r) {
              const d = (0, u.az)(n.rtl, this.x, this.width);
              for (
                t.x = ts(this, n.footerAlign, n),
                  t.y += n.footerMarginTop,
                  e.textAlign = d.textAlign(n.footerAlign),
                  e.textBaseline = "middle",
                  l = (0, u.a0)(n.footerFont),
                  e.fillStyle = n.footerColor,
                  e.font = l.string,
                  c = 0;
                c < r;
                ++c
              )
                e.fillText(o[c], d.x(t.x), t.y + l.lineHeight / 2),
                  (t.y += l.lineHeight + n.footerSpacing);
            }
          }
          drawBackground(t, e, n, o) {
            const { xAlign: r, yAlign: l } = this,
              { x: c, y: d } = t,
              { width: g, height: m } = n,
              {
                topLeft: x,
                topRight: v,
                bottomLeft: S,
                bottomRight: P,
              } = (0, u.aw)(o.cornerRadius);
            (e.fillStyle = o.backgroundColor),
              (e.strokeStyle = o.borderColor),
              (e.lineWidth = o.borderWidth),
              e.beginPath(),
              e.moveTo(c + x, d),
              "top" === l && this.drawCaret(t, e, n, o),
              e.lineTo(c + g - v, d),
              e.quadraticCurveTo(c + g, d, c + g, d + v),
              "center" === l && "right" === r && this.drawCaret(t, e, n, o),
              e.lineTo(c + g, d + m - P),
              e.quadraticCurveTo(c + g, d + m, c + g - P, d + m),
              "bottom" === l && this.drawCaret(t, e, n, o),
              e.lineTo(c + S, d + m),
              e.quadraticCurveTo(c, d + m, c, d + m - S),
              "center" === l && "left" === r && this.drawCaret(t, e, n, o),
              e.lineTo(c, d + x),
              e.quadraticCurveTo(c, d, c + x, d),
              e.closePath(),
              e.fill(),
              o.borderWidth > 0 && e.stroke();
          }
          _updateAnimationTarget(t) {
            const e = this.chart,
              n = this.$animations,
              o = n && n.x,
              r = n && n.y;
            if (o || r) {
              const l = nn[t.position].call(
                this,
                this._active,
                this._eventPosition
              );
              if (!l) return;
              const c = (this._size = bo(this, t)),
                d = Object.assign({}, l, this._size),
                g = xo(e, t, d),
                m = yo(t, d, g, e);
              (o._to !== m.x || r._to !== m.y) &&
                ((this.xAlign = g.xAlign),
                (this.yAlign = g.yAlign),
                (this.width = c.width),
                (this.height = c.height),
                (this.caretX = l.x),
                (this.caretY = l.y),
                this._resolveAnimations().update(this, m));
            }
          }
          _willRender() {
            return !!this.opacity;
          }
          draw(t) {
            const e = this.options.setContext(this.getContext());
            let n = this.opacity;
            if (!n) return;
            this._updateAnimationTarget(e);
            const o = { width: this.width, height: this.height },
              r = { x: this.x, y: this.y };
            n = Math.abs(n) < 0.001 ? 0 : n;
            const l = (0, u.E)(e.padding);
            e.enabled &&
              (this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length) &&
              (t.save(),
              (t.globalAlpha = n),
              this.drawBackground(r, t, o, e),
              (0, u.aA)(t, e.textDirection),
              (r.y += l.top),
              this.drawTitle(r, t, e),
              this.drawBody(r, t, e),
              this.drawFooter(r, t, e),
              (0, u.aC)(t, e.textDirection),
              t.restore());
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t, e) {
            const n = this._active,
              o = t.map(({ datasetIndex: c, index: d }) => {
                const g = this.chart.getDatasetMeta(c);
                if (!g) throw new Error("Cannot find a dataset at index " + c);
                return { datasetIndex: c, element: g.data[d], index: d };
              }),
              r = !(0, u.ah)(n, o),
              l = this._positionChanged(o, e);
            (r || l) &&
              ((this._active = o),
              (this._eventPosition = e),
              (this._ignoreReplayEvents = !0),
              this.update(!0));
          }
          handleEvent(t, e, n = !0) {
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            const o = this.options,
              r = this._active || [],
              l = this._getActiveElements(t, r, e, n),
              c = this._positionChanged(l, t),
              d = e || !(0, u.ah)(l, r) || c;
            return (
              d &&
                ((this._active = l),
                (o.enabled || o.external) &&
                  ((this._eventPosition = { x: t.x, y: t.y }),
                  this.update(!0, e))),
              d
            );
          }
          _getActiveElements(t, e, n, o) {
            const r = this.options;
            if ("mouseout" === t.type) return [];
            if (!o) return e;
            const l = this.chart.getElementsAtEventForMode(t, r.mode, r, n);
            return r.reverse && l.reverse(), l;
          }
          _positionChanged(t, e) {
            const { caretX: n, caretY: o, options: r } = this,
              l = nn[r.position].call(this, t, e);
            return !1 !== l && (n !== l.x || o !== l.y);
          }
        }
        return (0, R.Z)(s, "positioners", nn), s;
      })();
      var Vo = Object.freeze({
        __proto__: null,
        Colors: Xs,
        Decimation: rt,
        Filler: dt,
        Legend: Qn,
        SubTitle: mo,
        Title: Lo,
        Tooltip: {
          id: "tooltip",
          _element: So,
          positioners: nn,
          afterInit(s, i, t) {
            t && (s.tooltip = new So({ chart: s, options: t }));
          },
          beforeUpdate(s, i, t) {
            s.tooltip && s.tooltip.initialize(t);
          },
          reset(s, i, t) {
            s.tooltip && s.tooltip.initialize(t);
          },
          afterDraw(s) {
            const i = s.tooltip;
            if (i && i._willRender()) {
              const t = { tooltip: i };
              if (
                !1 ===
                s.notifyPlugins("beforeTooltipDraw", { ...t, cancelable: !0 })
              )
                return;
              i.draw(s.ctx), s.notifyPlugins("afterTooltipDraw", t);
            }
          },
          afterEvent(s, i) {
            s.tooltip &&
              s.tooltip.handleEvent(i.event, i.replay, i.inChartArea) &&
              (i.changed = !0);
          },
          defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: { weight: "bold" },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: "bold" },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (s, i) => i.bodyFont.size,
            boxWidth: (s, i) => i.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: { duration: 400, easing: "easeOutQuart" },
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"],
              },
              opacity: { easing: "linear", duration: 200 },
            },
            callbacks: jo,
          },
          defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font",
          },
          descriptors: {
            _scriptable: (s) =>
              "filter" !== s && "itemSort" !== s && "external" !== s,
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: "animation" },
          },
          additionalOptionScopes: ["interaction"],
        },
      });
      function Uo(s) {
        const i = this.getLabels();
        return s >= 0 && s < i.length ? i[s] : s;
      }
      let Zo = (() => {
        class s extends Nt {
          constructor(t) {
            super(t),
              (this._startValue = void 0),
              (this._valueRange = 0),
              (this._addedLabels = []);
          }
          init(t) {
            const e = this._addedLabels;
            if (e.length) {
              const n = this.getLabels();
              for (const { index: o, label: r } of e)
                n[o] === r && n.splice(o, 1);
              this._addedLabels = [];
            }
            super.init(t);
          }
          parse(t, e) {
            if ((0, u.k)(t)) return null;
            const n = this.getLabels();
            return ((s, i) =>
              null === s ? null : (0, u.S)(Math.round(s), 0, i))(
              (e =
                isFinite(e) && n[e] === t
                  ? e
                  : (function Yo(s, i, t, e) {
                      const n = s.indexOf(i);
                      return -1 === n
                        ? ((s, i, t, e) => (
                            "string" == typeof i
                              ? ((t = s.push(i) - 1),
                                e.unshift({ index: t, label: i }))
                              : isNaN(i) && (t = null),
                            t
                          ))(s, i, t, e)
                        : n !== s.lastIndexOf(i)
                        ? t
                        : n;
                    })(n, t, (0, u.v)(e, t), this._addedLabels)),
              n.length - 1
            );
          }
          determineDataLimits() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let { min: n, max: o } = this.getMinMax(!0);
            "ticks" === this.options.bounds &&
              (t || (n = 0), e || (o = this.getLabels().length - 1)),
              (this.min = n),
              (this.max = o);
          }
          buildTicks() {
            const t = this.min,
              e = this.max,
              n = this.options.offset,
              o = [];
            let r = this.getLabels();
            (r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1)),
              (this._valueRange = Math.max(r.length - (n ? 0 : 1), 1)),
              (this._startValue = this.min - (n ? 0.5 : 0));
            for (let l = t; l <= e; l++) o.push({ value: l });
            return o;
          }
          getLabelForValue(t) {
            return Uo.call(this, t);
          }
          configure() {
            super.configure(),
              this.isHorizontal() ||
                (this._reversePixels = !this._reversePixels);
          }
          getPixelForValue(t) {
            return (
              "number" != typeof t && (t = this.parse(t)),
              null === t
                ? NaN
                : this.getPixelForDecimal(
                    (t - this._startValue) / this._valueRange
                  )
            );
          }
          getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getValueForPixel(t) {
            return Math.round(
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
          getBasePixel() {
            return this.bottom;
          }
        }
        return (
          (0, R.Z)(s, "id", "category"),
          (0, R.Z)(s, "defaults", { ticks: { callback: Uo } }),
          s
        );
      })();
      function ko(s, i, { horizontal: t, minRotation: e }) {
        const n = (0, u.t)(e),
          o = (t ? Math.sin(n) : Math.cos(n)) || 0.001;
        return Math.min(i / o, 0.75 * i * ("" + s).length);
      }
      class es extends Nt {
        constructor(i) {
          super(i),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(i, t) {
          return (0, u.k)(i) ||
            (("number" == typeof i || i instanceof Number) && !isFinite(+i))
            ? null
            : +i;
        }
        handleTickRangeOptions() {
          const { beginAtZero: i } = this.options,
            { minDefined: t, maxDefined: e } = this.getUserBounds();
          let { min: n, max: o } = this;
          const r = (c) => (n = t ? n : c),
            l = (c) => (o = e ? o : c);
          if (i) {
            const c = (0, u.s)(n),
              d = (0, u.s)(o);
            c < 0 && d < 0 ? l(0) : c > 0 && d > 0 && r(0);
          }
          if (n === o) {
            let c = 0 === o ? 1 : Math.abs(0.05 * o);
            l(o + c), i || r(n - c);
          }
          (this.min = n), (this.max = o);
        }
        getTickLimit() {
          const i = this.options.ticks;
          let n,
            { maxTicksLimit: t, stepSize: e } = i;
          return (
            e
              ? ((n = Math.ceil(this.max / e) - Math.floor(this.min / e) + 1),
                n > 1e3 &&
                  (console.warn(
                    `scales.${this.id}.ticks.stepSize: ${e} would result generating up to ${n} ticks. Limiting to 1000.`
                  ),
                  (n = 1e3)))
              : ((n = this.computeTickLimit()), (t = t || 11)),
            t && (n = Math.min(t, n)),
            n
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const i = this.options,
            t = i.ticks;
          let e = this.getTickLimit();
          e = Math.max(2, e);
          const r = (function wo(s, i) {
            const t = [],
              {
                bounds: n,
                step: o,
                min: r,
                max: l,
                precision: c,
                count: d,
                maxTicks: g,
                maxDigits: m,
                includeBounds: x,
              } = s,
              v = o || 1,
              S = g - 1,
              { min: P, max: O } = i,
              z = !(0, u.k)(r),
              A = !(0, u.k)(l),
              B = !(0, u.k)(d),
              j = (O - P) / (m + 1);
            let H,
              W,
              V,
              U,
              L = (0, u.aH)((O - P) / S / v) * v;
            if (L < 1e-14 && !z && !A) return [{ value: P }, { value: O }];
            (U = Math.ceil(O / L) - Math.floor(P / L)),
              U > S && (L = (0, u.aH)((U * L) / S / v) * v),
              (0, u.k)(c) ||
                ((H = Math.pow(10, c)), (L = Math.ceil(L * H) / H)),
              "ticks" === n
                ? ((W = Math.floor(P / L) * L), (V = Math.ceil(O / L) * L))
                : ((W = P), (V = O)),
              z && A && o && (0, u.aI)((l - r) / o, L / 1e3)
                ? ((U = Math.round(Math.min((l - r) / L, g))),
                  (L = (l - r) / U),
                  (W = r),
                  (V = l))
                : B
                ? ((W = z ? r : W),
                  (V = A ? l : V),
                  (U = d - 1),
                  (L = (V - W) / U))
                : ((U = (V - W) / L),
                  (U = (0, u.aJ)(U, Math.round(U), L / 1e3)
                    ? Math.round(U)
                    : Math.ceil(U)));
            const tt = Math.max((0, u.aK)(L), (0, u.aK)(W));
            (H = Math.pow(10, (0, u.k)(c) ? tt : c)),
              (W = Math.round(W * H) / H),
              (V = Math.round(V * H) / H);
            let J = 0;
            for (
              z &&
              (x && W !== r
                ? (t.push({ value: r }),
                  W < r && J++,
                  (0, u.aJ)(Math.round((W + J * L) * H) / H, r, ko(r, j, s)) &&
                    J++)
                : W < r && J++);
              J < U;
              ++J
            ) {
              const nt = Math.round((W + J * L) * H) / H;
              if (A && nt > l) break;
              t.push({ value: nt });
            }
            return (
              A && x && V !== l
                ? t.length && (0, u.aJ)(t[t.length - 1].value, l, ko(l, j, s))
                  ? (t[t.length - 1].value = l)
                  : t.push({ value: l })
                : (!A || V === l) && t.push({ value: V }),
              t
            );
          })(
            {
              maxTicks: e,
              bounds: i.bounds,
              min: i.min,
              max: i.max,
              precision: t.precision,
              step: t.stepSize,
              count: t.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: t.minRotation || 0,
              includeBounds: !1 !== t.includeBounds,
            },
            this._range || this
          );
          return (
            "ticks" === i.bounds && (0, u.aG)(r, this, "value"),
            i.reverse
              ? (r.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            r
          );
        }
        configure() {
          const i = this.ticks;
          let t = this.min,
            e = this.max;
          if ((super.configure(), this.options.offset && i.length)) {
            const n = (e - t) / Math.max(i.length - 1, 1) / 2;
            (t -= n), (e += n);
          }
          (this._startValue = t),
            (this._endValue = e),
            (this._valueRange = e - t);
        }
        getLabelForValue(i) {
          return (0, u.o)(
            i,
            this.chart.options.locale,
            this.options.ticks.format
          );
        }
      }
      class io extends es {
        determineDataLimits() {
          const { min: i, max: t } = this.getMinMax(!0);
          (this.min = (0, u.g)(i) ? i : 0),
            (this.max = (0, u.g)(t) ? t : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const i = this.isHorizontal(),
            t = i ? this.width : this.height,
            e = (0, u.t)(this.options.ticks.minRotation),
            n = (i ? Math.sin(e) : Math.cos(e)) || 0.001,
            o = this._resolveTickFontOptions(0);
          return Math.ceil(t / Math.min(40, o.lineHeight / n));
        }
        getPixelForValue(i) {
          return null === i
            ? NaN
            : this.getPixelForDecimal(
                (i - this._startValue) / this._valueRange
              );
        }
        getValueForPixel(i) {
          return (
            this._startValue + this.getDecimalForPixel(i) * this._valueRange
          );
        }
      }
      (0, R.Z)(io, "id", "linear"),
        (0, R.Z)(io, "defaults", {
          ticks: { callback: u.aL.formatters.numeric },
        });
      const sn = (s) => Math.floor((0, u.aM)(s)),
        Pt = (s, i) => Math.pow(10, sn(s) + i);
      function is(s) {
        return s / Math.pow(10, sn(s)) == 1;
      }
      function Po(s, i, t) {
        const e = Math.pow(10, t),
          n = Math.floor(s / e);
        return Math.ceil(i / e) - n;
      }
      class no extends Nt {
        constructor(i) {
          super(i),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(i, t) {
          const e = es.prototype.parse.apply(this, [i, t]);
          if (0 !== e) return (0, u.g)(e) && e > 0 ? e : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: i, max: t } = this.getMinMax(!0);
          (this.min = (0, u.g)(i) ? Math.max(0, i) : null),
            (this.max = (0, u.g)(t) ? Math.max(0, t) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
              this.min !== this._suggestedMin &&
              !(0, u.g)(this._userMin) &&
              (this.min =
                i === Pt(this.min, 0) ? Pt(this.min, -1) : Pt(this.min, 0)),
            this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined: i, maxDefined: t } = this.getUserBounds();
          let e = this.min,
            n = this.max;
          const o = (l) => (e = i ? e : l),
            r = (l) => (n = t ? n : l);
          e === n && (e <= 0 ? (o(1), r(10)) : (o(Pt(e, -1)), r(Pt(n, 1)))),
            e <= 0 && o(Pt(n, -1)),
            n <= 0 && r(Pt(e, 1)),
            (this.min = e),
            (this.max = n);
        }
        buildTicks() {
          const i = this.options,
            e = (function Co(s, { min: i, max: t }) {
              i = (0, u.O)(s.min, i);
              const e = [],
                n = sn(i);
              let o = (function Ce(s, i) {
                  let e = sn(i - s);
                  for (; Po(s, i, e) > 10; ) e++;
                  for (; Po(s, i, e) < 10; ) e--;
                  return Math.min(e, sn(s));
                })(i, t),
                r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
              const l = Math.pow(10, o),
                c = n > o ? Math.pow(10, n) : 0,
                d = Math.round((i - c) * r) / r,
                g = Math.floor((i - c) / l / 10) * l * 10;
              let m = Math.floor((d - g) / Math.pow(10, o)),
                x = (0, u.O)(
                  s.min,
                  Math.round((c + g + m * Math.pow(10, o)) * r) / r
                );
              for (; x < t; )
                e.push({ value: x, major: is(x), significand: m }),
                  m >= 10 ? (m = m < 15 ? 15 : 20) : m++,
                  m >= 20 && (o++, (m = 2), (r = o >= 0 ? 1 : r)),
                  (x = Math.round((c + g + m * Math.pow(10, o)) * r) / r);
              const v = (0, u.O)(s.max, x);
              return e.push({ value: v, major: is(v), significand: m }), e;
            })({ min: this._userMin, max: this._userMax }, this);
          return (
            "ticks" === i.bounds && (0, u.aG)(e, this, "value"),
            i.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        }
        getLabelForValue(i) {
          return void 0 === i
            ? "0"
            : (0, u.o)(i, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const i = this.min;
          super.configure(),
            (this._startValue = (0, u.aM)(i)),
            (this._valueRange = (0, u.aM)(this.max) - (0, u.aM)(i));
        }
        getPixelForValue(i) {
          return (
            (void 0 === i || 0 === i) && (i = this.min),
            null === i || isNaN(i)
              ? NaN
              : this.getPixelForDecimal(
                  i === this.min
                    ? 0
                    : ((0, u.aM)(i) - this._startValue) / this._valueRange
                )
          );
        }
        getValueForPixel(i) {
          const t = this.getDecimalForPixel(i);
          return Math.pow(10, this._startValue + t * this._valueRange);
        }
      }
      function _(s) {
        const i = s.ticks;
        if (i.display && s.display) {
          const t = (0, u.E)(i.backdropPadding);
          return (0, u.v)(i.font && i.font.size, u.d.font.size) + t.height;
        }
        return 0;
      }
      function w(s, i, t) {
        return (
          (t = (0, u.b)(t) ? t : [t]),
          { w: (0, u.aN)(s, i.string, t), h: t.length * i.lineHeight }
        );
      }
      function D(s, i, t, e, n) {
        return s === e || s === n
          ? { start: i - t / 2, end: i + t / 2 }
          : s < e || s > n
          ? { start: i - t, end: i }
          : { start: i, end: i + t };
      }
      function Q(s, i, t, e, n) {
        const o = Math.abs(Math.sin(t)),
          r = Math.abs(Math.cos(t));
        let l = 0,
          c = 0;
        e.start < i.l
          ? ((l = (i.l - e.start) / o), (s.l = Math.min(s.l, i.l - l)))
          : e.end > i.r &&
            ((l = (e.end - i.r) / o), (s.r = Math.max(s.r, i.r + l))),
          n.start < i.t
            ? ((c = (i.t - n.start) / r), (s.t = Math.min(s.t, i.t - c)))
            : n.end > i.b &&
              ((c = (n.end - i.b) / r), (s.b = Math.max(s.b, i.b + c)));
      }
      function st(s, i, t) {
        const e = s.drawingArea,
          { extra: n, additionalAngle: o, padding: r, size: l } = t,
          c = s.getPointPosition(i, e + n + r, o),
          d = Math.round((0, u.U)((0, u.ay)(c.angle + u.H))),
          g = (function Rt(s, i, t) {
            return (
              90 === t || 270 === t
                ? (s -= i / 2)
                : (t > 270 || t < 90) && (s -= i),
              s
            );
          })(c.y, l.h, d),
          m = (function ht(s) {
            return 0 === s || 180 === s ? "center" : s < 180 ? "left" : "right";
          })(d),
          x = (function Wt(s, i, t) {
            return "right" === t ? (s -= i) : "center" === t && (s -= i / 2), s;
          })(c.x, l.w, m);
        return {
          visible: !0,
          x: c.x,
          y: g,
          textAlign: m,
          left: x,
          top: g,
          right: x + l.w,
          bottom: g + l.h,
        };
      }
      function it(s, i) {
        if (!i) return !0;
        const { left: t, top: e, right: n, bottom: o } = s;
        return !(
          (0, u.C)({ x: t, y: e }, i) ||
          (0, u.C)({ x: t, y: o }, i) ||
          (0, u.C)({ x: n, y: e }, i) ||
          (0, u.C)({ x: n, y: o }, i)
        );
      }
      function on(s, i, t) {
        const { left: e, top: n, right: o, bottom: r } = t,
          { backdropColor: l } = i;
        if (!(0, u.k)(l)) {
          const c = (0, u.aw)(i.borderRadius),
            d = (0, u.E)(i.backdropPadding);
          s.fillStyle = l;
          const g = e - d.left,
            m = n - d.top,
            x = o - e + d.width,
            v = r - n + d.height;
          Object.values(c).some((S) => 0 !== S)
            ? (s.beginPath(),
              (0, u.au)(s, { x: g, y: m, w: x, h: v, radius: c }),
              s.fill())
            : s.fillRect(g, m, x, v);
        }
      }
      function ns(s, i, t, e) {
        const { ctx: n } = s;
        if (t) n.arc(s.xCenter, s.yCenter, i, 0, u.T);
        else {
          let o = s.getPointPosition(0, i);
          n.moveTo(o.x, o.y);
          for (let r = 1; r < e; r++)
            (o = s.getPointPosition(r, i)), n.lineTo(o.x, o.y);
        }
      }
      (0, R.Z)(no, "id", "logarithmic"),
        (0, R.Z)(no, "defaults", {
          ticks: {
            callback: u.aL.formatters.logarithmic,
            major: { enabled: !0 },
          },
        });
      class oo extends es {
        constructor(i) {
          super(i),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          const i = (this._padding = (0, u.E)(_(this.options) / 2)),
            t = (this.width = this.maxWidth - i.width),
            e = (this.height = this.maxHeight - i.height);
          (this.xCenter = Math.floor(this.left + t / 2 + i.left)),
            (this.yCenter = Math.floor(this.top + e / 2 + i.top)),
            (this.drawingArea = Math.floor(Math.min(t, e) / 2));
        }
        determineDataLimits() {
          const { min: i, max: t } = this.getMinMax(!1);
          (this.min = (0, u.g)(i) && !isNaN(i) ? i : 0),
            (this.max = (0, u.g)(t) && !isNaN(t) ? t : 0),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / _(this.options));
        }
        generateTickLabels(i) {
          es.prototype.generateTickLabels.call(this, i),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const n = (0, u.Q)(
                  this.options.pointLabels.callback,
                  [t, e],
                  this
                );
                return n || 0 === n ? n : "";
              })
              .filter((t, e) => this.chart.getDataVisibility(e)));
        }
        fit() {
          const i = this.options;
          i.display && i.pointLabels.display
            ? (function I(s) {
                const i = {
                    l: s.left + s._padding.left,
                    r: s.right - s._padding.right,
                    t: s.top + s._padding.top,
                    b: s.bottom - s._padding.bottom,
                  },
                  t = Object.assign({}, i),
                  e = [],
                  n = [],
                  o = s._pointLabels.length,
                  r = s.options.pointLabels,
                  l = r.centerPointLabels ? u.P / o : 0;
                for (let c = 0; c < o; c++) {
                  const d = r.setContext(s.getPointLabelContext(c));
                  n[c] = d.padding;
                  const g = s.getPointPosition(c, s.drawingArea + n[c], l),
                    m = (0, u.a0)(d.font),
                    x = w(s.ctx, m, s._pointLabels[c]);
                  e[c] = x;
                  const v = (0, u.ay)(s.getIndexAngle(c) + l),
                    S = Math.round((0, u.U)(v));
                  Q(t, i, v, D(S, g.x, x.w, 0, 180), D(S, g.y, x.h, 90, 270));
                }
                s.setCenterPoint(i.l - t.l, t.r - i.r, i.t - t.t, t.b - i.b),
                  (s._pointLabelItems = (function et(s, i, t) {
                    const e = [],
                      n = s._pointLabels.length,
                      o = s.options,
                      { centerPointLabels: r, display: l } = o.pointLabels,
                      c = { extra: _(o) / 2, additionalAngle: r ? u.P / n : 0 };
                    let d;
                    for (let g = 0; g < n; g++) {
                      (c.padding = t[g]), (c.size = i[g]);
                      const m = st(s, g, c);
                      e.push(m),
                        "auto" === l &&
                          ((m.visible = it(m, d)), m.visible && (d = m));
                    }
                    return e;
                  })(s, e, n));
              })(this)
            : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(i, t, e, n) {
          (this.xCenter += Math.floor((i - t) / 2)),
            (this.yCenter += Math.floor((e - n) / 2)),
            (this.drawingArea -= Math.min(
              this.drawingArea / 2,
              Math.max(i, t, e, n)
            ));
        }
        getIndexAngle(i) {
          return (0, u.ay)(
            i * (u.T / (this._pointLabels.length || 1)) +
              (0, u.t)(this.options.startAngle || 0)
          );
        }
        getDistanceFromCenterForValue(i) {
          if ((0, u.k)(i)) return NaN;
          const t = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - i) * t : (i - this.min) * t;
        }
        getValueForDistanceFromCenter(i) {
          if ((0, u.k)(i)) return NaN;
          const t = i / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - t : this.min + t;
        }
        getPointLabelContext(i) {
          const t = this._pointLabels || [];
          if (i >= 0 && i < t.length) {
            const e = t[i];
            return (function er(s, i, t) {
              return (0, u.j)(s, { label: t, index: i, type: "pointLabel" });
            })(this.getContext(), i, e);
          }
        }
        getPointPosition(i, t, e = 0) {
          const n = this.getIndexAngle(i) - u.H + e;
          return {
            x: Math.cos(n) * t + this.xCenter,
            y: Math.sin(n) * t + this.yCenter,
            angle: n,
          };
        }
        getPointPositionForValue(i, t) {
          return this.getPointPosition(
            i,
            this.getDistanceFromCenterForValue(t)
          );
        }
        getBasePosition(i) {
          return this.getPointPositionForValue(i || 0, this.getBaseValue());
        }
        getPointLabelPosition(i) {
          const {
            left: t,
            top: e,
            right: n,
            bottom: o,
          } = this._pointLabelItems[i];
          return { left: t, top: e, right: n, bottom: o };
        }
        drawBackground() {
          const {
            backgroundColor: i,
            grid: { circular: t },
          } = this.options;
          if (i) {
            const e = this.ctx;
            e.save(),
              e.beginPath(),
              ns(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                t,
                this._pointLabels.length
              ),
              e.closePath(),
              (e.fillStyle = i),
              e.fill(),
              e.restore();
          }
        }
        drawGrid() {
          const i = this.ctx,
            t = this.options,
            { angleLines: e, grid: n, border: o } = t,
            r = this._pointLabels.length;
          let l, c, d;
          if (
            (t.pointLabels.display &&
              (function so(s, i) {
                const {
                  ctx: t,
                  options: { pointLabels: e },
                } = s;
                for (let n = i - 1; n >= 0; n--) {
                  const o = s._pointLabelItems[n];
                  if (!o.visible) continue;
                  const r = e.setContext(s.getPointLabelContext(n));
                  on(t, r, o);
                  const l = (0, u.a0)(r.font),
                    { x: c, y: d, textAlign: g } = o;
                  (0, u.Z)(t, s._pointLabels[n], c, d + l.lineHeight / 2, l, {
                    color: r.color,
                    textAlign: g,
                    textBaseline: "middle",
                  });
                }
              })(this, r),
            n.display &&
              this.ticks.forEach((g, m) => {
                if (0 !== m) {
                  c = this.getDistanceFromCenterForValue(g.value);
                  const x = this.getContext(m),
                    v = n.setContext(x),
                    S = o.setContext(x);
                  !(function Oo(s, i, t, e, n) {
                    const o = s.ctx,
                      r = i.circular,
                      { color: l, lineWidth: c } = i;
                    (!r && !e) ||
                      !l ||
                      !c ||
                      t < 0 ||
                      (o.save(),
                      (o.strokeStyle = l),
                      (o.lineWidth = c),
                      o.setLineDash(n.dash),
                      (o.lineDashOffset = n.dashOffset),
                      o.beginPath(),
                      ns(s, t, r, e),
                      o.closePath(),
                      o.stroke(),
                      o.restore());
                  })(this, v, c, r, S);
                }
              }),
            e.display)
          ) {
            for (i.save(), l = r - 1; l >= 0; l--) {
              const g = e.setContext(this.getPointLabelContext(l)),
                { color: m, lineWidth: x } = g;
              !x ||
                !m ||
                ((i.lineWidth = x),
                (i.strokeStyle = m),
                i.setLineDash(g.borderDash),
                (i.lineDashOffset = g.borderDashOffset),
                (c = this.getDistanceFromCenterForValue(
                  t.ticks.reverse ? this.min : this.max
                )),
                (d = this.getPointPosition(l, c)),
                i.beginPath(),
                i.moveTo(this.xCenter, this.yCenter),
                i.lineTo(d.x, d.y),
                i.stroke());
            }
            i.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const i = this.ctx,
            t = this.options,
            e = t.ticks;
          if (!e.display) return;
          const n = this.getIndexAngle(0);
          let o, r;
          i.save(),
            i.translate(this.xCenter, this.yCenter),
            i.rotate(n),
            (i.textAlign = "center"),
            (i.textBaseline = "middle"),
            this.ticks.forEach((l, c) => {
              if (0 === c && !t.reverse) return;
              const d = e.setContext(this.getContext(c)),
                g = (0, u.a0)(d.font);
              if (
                ((o = this.getDistanceFromCenterForValue(this.ticks[c].value)),
                d.showLabelBackdrop)
              ) {
                (i.font = g.string),
                  (r = i.measureText(l.label).width),
                  (i.fillStyle = d.backdropColor);
                const m = (0, u.E)(d.backdropPadding);
                i.fillRect(
                  -r / 2 - m.left,
                  -o - g.size / 2 - m.top,
                  r + m.width,
                  g.size + m.height
                );
              }
              (0, u.Z)(i, l.label, 0, -o, g, {
                color: d.color,
                strokeColor: d.textStrokeColor,
                strokeWidth: d.textStrokeWidth,
              });
            }),
            i.restore();
        }
        drawTitle() {}
      }
      (0, R.Z)(oo, "id", "radialLinear"),
        (0, R.Z)(oo, "defaults", {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: u.aL.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: (s) => s,
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (0, R.Z)(oo, "defaultRoutes", {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        }),
        (0, R.Z)(oo, "descriptors", { angleLines: { _fallback: "grid" } });
      const Do = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Yt = Object.keys(Do);
      function Go(s, i) {
        return s - i;
      }
      function Qo(s, i) {
        if ((0, u.k)(i)) return null;
        const t = s._adapter,
          { parser: e, round: n, isoWeekday: o } = s._parseOpts;
        let r = i;
        return (
          "function" == typeof e && (r = e(r)),
          (0, u.g)(r) ||
            (r = "string" == typeof e ? t.parse(r, e) : t.parse(r)),
          null === r
            ? null
            : (n &&
                (r =
                  "week" !== n || (!(0, u.x)(o) && !0 !== o)
                    ? t.startOf(r, n)
                    : t.startOf(r, "isoWeek", o)),
              +r)
        );
      }
      function qo(s, i, t, e) {
        const n = Yt.length;
        for (let o = Yt.indexOf(s); o < n - 1; ++o) {
          const r = Do[Yt[o]];
          if (
            r.common &&
            Math.ceil(
              (t - i) / ((r.steps ? r.steps : Number.MAX_SAFE_INTEGER) * r.size)
            ) <= e
          )
            return Yt[o];
        }
        return Yt[n - 1];
      }
      function Jo(s, i, t) {
        if (t) {
          if (t.length) {
            const { lo: e, hi: n } = (0, u.aP)(t, i);
            s[t[e] >= i ? t[e] : t[n]] = !0;
          }
        } else s[i] = !0;
      }
      function tr(s, i, t) {
        const e = [],
          n = {},
          o = i.length;
        let r, l;
        for (r = 0; r < o; ++r)
          (l = i[r]), (n[l] = r), e.push({ value: l, major: !1 });
        return 0 !== o && t
          ? (function sr(s, i, t, e) {
              const n = s._adapter,
                o = +n.startOf(i[0].value, e),
                r = i[i.length - 1].value;
              let l, c;
              for (l = o; l <= r; l = +n.add(l, 1, e))
                (c = t[l]), c >= 0 && (i[c].major = !0);
              return i;
            })(s, e, n, t)
          : e;
      }
      let Xo = (() => {
        class s extends Nt {
          constructor(t) {
            super(t),
              (this._cache = { data: [], labels: [], all: [] }),
              (this._unit = "day"),
              (this._majorUnit = void 0),
              (this._offsets = {}),
              (this._normalized = !1),
              (this._parseOpts = void 0);
          }
          init(t, e = {}) {
            const n = t.time || (t.time = {}),
              o = (this._adapter = new ls__date(t.adapters.date));
            o.init(e),
              (0, u.ab)(n.displayFormats, o.formats()),
              (this._parseOpts = {
                parser: n.parser,
                round: n.round,
                isoWeekday: n.isoWeekday,
              }),
              super.init(t),
              (this._normalized = e.normalized);
          }
          parse(t, e) {
            return void 0 === t ? null : Qo(this, t);
          }
          beforeLayout() {
            super.beforeLayout(),
              (this._cache = { data: [], labels: [], all: [] });
          }
          determineDataLimits() {
            const t = this.options,
              e = this._adapter,
              n = t.time.unit || "day";
            let {
              min: o,
              max: r,
              minDefined: l,
              maxDefined: c,
            } = this.getUserBounds();
            function d(g) {
              !l && !isNaN(g.min) && (o = Math.min(o, g.min)),
                !c && !isNaN(g.max) && (r = Math.max(r, g.max));
            }
            (!l || !c) &&
              (d(this._getLabelBounds()),
              ("ticks" !== t.bounds || "labels" !== t.ticks.source) &&
                d(this.getMinMax(!1))),
              (o = (0, u.g)(o) && !isNaN(o) ? o : +e.startOf(Date.now(), n)),
              (r = (0, u.g)(r) && !isNaN(r) ? r : +e.endOf(Date.now(), n) + 1),
              (this.min = Math.min(o, r - 1)),
              (this.max = Math.max(o + 1, r));
          }
          _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY,
              n = Number.NEGATIVE_INFINITY;
            return (
              t.length && ((e = t[0]), (n = t[t.length - 1])),
              { min: e, max: n }
            );
          }
          buildTicks() {
            const t = this.options,
              e = t.time,
              n = t.ticks,
              o =
                "labels" === n.source
                  ? this.getLabelTimestamps()
                  : this._generate();
            "ticks" === t.bounds &&
              o.length &&
              ((this.min = this._userMin || o[0]),
              (this.max = this._userMax || o[o.length - 1]));
            const r = this.min,
              c = (0, u.aO)(o, r, this.max);
            return (
              (this._unit =
                e.unit ||
                (n.autoSkip
                  ? qo(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
                  : (function ir(s, i, t, e, n) {
                      for (let o = Yt.length - 1; o >= Yt.indexOf(t); o--) {
                        const r = Yt[o];
                        if (Do[r].common && s._adapter.diff(n, e, r) >= i - 1)
                          return r;
                      }
                      return Yt[t ? Yt.indexOf(t) : 0];
                    })(this, c.length, e.minUnit, this.min, this.max))),
              (this._majorUnit =
                n.major.enabled && "year" !== this._unit
                  ? (function nr(s) {
                      for (let i = Yt.indexOf(s) + 1, t = Yt.length; i < t; ++i)
                        if (Do[Yt[i]].common) return Yt[i];
                    })(this._unit)
                  : void 0),
              this.initOffsets(o),
              t.reverse && c.reverse(),
              tr(this, c, this._majorUnit)
            );
          }
          afterAutoSkip() {
            this.options.offsetAfterAutoskip &&
              this.initOffsets(this.ticks.map((t) => +t.value));
          }
          initOffsets(t = []) {
            let o,
              r,
              e = 0,
              n = 0;
            this.options.offset &&
              t.length &&
              ((o = this.getDecimalForValue(t[0])),
              (e =
                1 === t.length
                  ? 1 - o
                  : (this.getDecimalForValue(t[1]) - o) / 2),
              (r = this.getDecimalForValue(t[t.length - 1])),
              (n =
                1 === t.length
                  ? r
                  : (r - this.getDecimalForValue(t[t.length - 2])) / 2));
            const l = t.length < 3 ? 0.5 : 0.25;
            (e = (0, u.S)(e, 0, l)),
              (n = (0, u.S)(n, 0, l)),
              (this._offsets = { start: e, end: n, factor: 1 / (e + 1 + n) });
          }
          _generate() {
            const t = this._adapter,
              e = this.min,
              n = this.max,
              o = this.options,
              r = o.time,
              l = r.unit || qo(r.minUnit, e, n, this._getLabelCapacity(e)),
              c = (0, u.v)(o.ticks.stepSize, 1),
              d = "week" === l && r.isoWeekday,
              g = (0, u.x)(d) || !0 === d,
              m = {};
            let v,
              S,
              x = e;
            if (
              (g && (x = +t.startOf(x, "isoWeek", d)),
              (x = +t.startOf(x, g ? "day" : l)),
              t.diff(n, e, l) > 1e5 * c)
            )
              throw new Error(
                e +
                  " and " +
                  n +
                  " are too far apart with stepSize of " +
                  c +
                  " " +
                  l
              );
            const P = "data" === o.ticks.source && this.getDataTimestamps();
            for (v = x, S = 0; v < n; v = +t.add(v, c, l), S++) Jo(m, v, P);
            return (
              (v === n || "ticks" === o.bounds || 1 === S) && Jo(m, v, P),
              Object.keys(m)
                .sort(Go)
                .map((O) => +O)
            );
          }
          getLabelForValue(t) {
            const n = this.options.time;
            return this._adapter.format(
              t,
              n.tooltipFormat ? n.tooltipFormat : n.displayFormats.datetime
            );
          }
          format(t, e) {
            return this._adapter.format(
              t,
              e || this.options.time.displayFormats[this._unit]
            );
          }
          _tickFormatFunction(t, e, n, o) {
            const r = this.options,
              l = r.ticks.callback;
            if (l) return (0, u.Q)(l, [t, e, n], this);
            const c = r.time.displayFormats,
              d = this._unit,
              g = this._majorUnit,
              x = g && c[g],
              v = n[e];
            return this._adapter.format(
              t,
              o || (g && x && v && v.major ? x : d && c[d])
            );
          }
          generateTickLabels(t) {
            let e, n, o;
            for (e = 0, n = t.length; e < n; ++e)
              (o = t[e]), (o.label = this._tickFormatFunction(o.value, e, t));
          }
          getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min);
          }
          getPixelForValue(t) {
            const e = this._offsets,
              n = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + n) * e.factor);
          }
          getValueForPixel(t) {
            const e = this._offsets,
              n = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + n * (this.max - this.min);
          }
          _getLabelSize(t) {
            const e = this.options.ticks,
              n = this.ctx.measureText(t).width,
              o = (0, u.t)(this.isHorizontal() ? e.maxRotation : e.minRotation),
              r = Math.cos(o),
              l = Math.sin(o),
              c = this._resolveTickFontOptions(0).size;
            return { w: n * r + c * l, h: n * l + c * r };
          }
          _getLabelCapacity(t) {
            const e = this.options.time,
              n = e.displayFormats,
              o = n[e.unit] || n.millisecond,
              r = this._tickFormatFunction(
                t,
                0,
                tr(this, [t], this._majorUnit),
                o
              ),
              l = this._getLabelSize(r),
              c =
                Math.floor(
                  this.isHorizontal() ? this.width / l.w : this.height / l.h
                ) - 1;
            return c > 0 ? c : 1;
          }
          getDataTimestamps() {
            let e,
              n,
              t = this._cache.data || [];
            if (t.length) return t;
            const o = this.getMatchingVisibleMetas();
            if (this._normalized && o.length)
              return (this._cache.data =
                o[0].controller.getAllParsedValues(this));
            for (e = 0, n = o.length; e < n; ++e)
              t = t.concat(o[e].controller.getAllParsedValues(this));
            return (this._cache.data = this.normalize(t));
          }
          getLabelTimestamps() {
            const t = this._cache.labels || [];
            let e, n;
            if (t.length) return t;
            const o = this.getLabels();
            for (e = 0, n = o.length; e < n; ++e) t.push(Qo(this, o[e]));
            return (this._cache.labels = this._normalized
              ? t
              : this.normalize(t));
          }
          normalize(t) {
            return (0, u._)(t.sort(Go));
          }
        }
        return (
          (0, R.Z)(s, "id", "time"),
          (0, R.Z)(s, "defaults", {
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
          }),
          s
        );
      })();
      function Ao(s, i, t) {
        let o,
          r,
          l,
          c,
          e = 0,
          n = s.length - 1;
        t
          ? (i >= s[e].pos &&
              i <= s[n].pos &&
              ({ lo: e, hi: n } = (0, u.B)(s, "pos", i)),
            ({ pos: o, time: l } = s[e]),
            ({ pos: r, time: c } = s[n]))
          : (i >= s[e].time &&
              i <= s[n].time &&
              ({ lo: e, hi: n } = (0, u.B)(s, "time", i)),
            ({ time: o, pos: l } = s[e]),
            ({ time: r, pos: c } = s[n]));
        const d = r - o;
        return d ? l + ((c - l) * (i - o)) / d : l;
      }
      class Ko extends Xo {
        constructor(i) {
          super(i),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          const i = this._getTimestampsForTable(),
            t = (this._table = this.buildLookupTable(i));
          (this._minPos = Ao(t, this.min)),
            (this._tableRange = Ao(t, this.max) - this._minPos),
            super.initOffsets(i);
        }
        buildLookupTable(i) {
          const { min: t, max: e } = this,
            n = [],
            o = [];
          let r, l, c, d, g;
          for (r = 0, l = i.length; r < l; ++r)
            (d = i[r]), d >= t && d <= e && n.push(d);
          if (n.length < 2)
            return [
              { time: t, pos: 0 },
              { time: e, pos: 1 },
            ];
          for (r = 0, l = n.length; r < l; ++r)
            (g = n[r + 1]),
              (c = n[r - 1]),
              (d = n[r]),
              Math.round((g + c) / 2) !== d &&
                o.push({ time: d, pos: r / (l - 1) });
          return o;
        }
        _generate() {
          const i = this.min,
            t = this.max;
          let e = super.getDataTimestamps();
          return (
            (!e.includes(i) || !e.length) && e.splice(0, 0, i),
            (!e.includes(t) || 1 === e.length) && e.push(t),
            e.sort((n, o) => n - o)
          );
        }
        _getTimestampsForTable() {
          let i = this._cache.all || [];
          if (i.length) return i;
          const t = this.getDataTimestamps(),
            e = this.getLabelTimestamps();
          return (
            (i =
              t.length && e.length
                ? this.normalize(t.concat(e))
                : t.length
                ? t
                : e),
            (i = this._cache.all = i),
            i
          );
        }
        getDecimalForValue(i) {
          return (Ao(this._table, i) - this._minPos) / this._tableRange;
        }
        getValueForPixel(i) {
          const t = this._offsets,
            e = this.getDecimalForPixel(i) / t.factor - t.end;
          return Ao(this._table, e * this._tableRange + this._minPos, !0);
        }
      }
      (0, R.Z)(Ko, "id", "timeseries"), (0, R.Z)(Ko, "defaults", Xo.defaults);
      const rr = [
        yt,
        yi,
        Vo,
        Object.freeze({
          __proto__: null,
          CategoryScale: Zo,
          LinearScale: io,
          LogarithmicScale: no,
          RadialLinearScale: oo,
          TimeScale: Xo,
          TimeSeriesScale: Ko,
        }),
      ];
    },
    98137: (zo, wi, ct) => {
      function R(a) {
        return (a + 0.5) | 0;
      }
      ct.d(wi, {
        $: () => fi,
        A: () => ys,
        B: () => xe,
        C: () => Ie,
        D: () => _s,
        E: () => Tn,
        F: () => cs,
        G: () => Vn,
        H: () => vt,
        I: () => xi,
        J: () => Ks,
        K: () => Xs,
        L: () => ri,
        M: () => Ws,
        N: () => cn,
        O: () => uo,
        P: () => ft,
        Q: () => ls,
        R: () => zn,
        S: () => si,
        T: () => Et,
        U: () => bs,
        V: () => ui,
        W: () => xs,
        X: () => Ts,
        Y: () => wn,
        Z: () => Ls,
        _: () => oi,
        a: () => Rs,
        a0: () => Es,
        a1: () => ks,
        a2: () => fn,
        a3: () => _n,
        a4: () => be,
        a5: () => Ri,
        a6: () => Re,
        a7: () => ze,
        a8: () => ae,
        a9: () => $i,
        aA: () => qi,
        aB: () => gn,
        aC: () => qs,
        aD: () => Sn,
        aE: () => Fi,
        aF: () => as,
        aG: () => ps,
        aH: () => fs,
        aI: () => hn,
        aJ: () => Bt,
        aK: () => ni,
        aL: () => Vi,
        aM: () => _e,
        aN: () => As,
        aO: () => vs,
        aP: () => jt,
        aa: () => Ln,
        ab: () => ei,
        ac: () => zi,
        ad: () => ws,
        ae: () => Zs,
        af: () => vn,
        ag: () => ds,
        ah: () => Ae,
        ai: () => ln,
        aj: () => dn,
        ak: () => gi,
        al: () => Vs,
        am: () => Un,
        an: () => tn,
        ao: () => Wn,
        ap: () => Yn,
        aq: () => ce,
        ar: () => Fe,
        as: () => po,
        at: () => Mn,
        au: () => Cn,
        av: () => He,
        aw: () => Yi,
        ax: () => Ji,
        ay: () => Ht,
        az: () => Qs,
        b: () => _t,
        c: () => Ps,
        d: () => yn,
        e: () => li,
        f: () => re,
        g: () => De,
        h: () => hs,
        i: () => xt,
        j: () => je,
        k: () => Oe,
        l: () => Ms,
        m: () => oe,
        n: () => Je,
        o: () => Vt,
        p: () => Bi,
        q: () => pn,
        r: () => un,
        s: () => Ii,
        t: () => ms,
        u: () => Ss,
        v: () => yt,
        w: () => ye,
        x: () => gs,
        y: () => Hs,
        z: () => $s,
      });
      const u = (a, h, f) => Math.max(Math.min(a, f), h);
      function E(a) {
        return u(R(2.55 * a), 0, 255);
      }
      function St(a) {
        return u(R(255 * a), 0, 255);
      }
      function Dt(a) {
        return u(R(a / 2.55) / 100, 0, 1);
      }
      function Ve(a) {
        return u(R(100 * a), 0, 100);
      }
      const mt = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        Ut = [..."0123456789ABCDEF"],
        We = (a) => Ut[15 & a],
        ie = (a) => Ut[(240 & a) >> 4] + Ut[15 & a],
        de = (a) => (240 & a) >> 4 == (15 & a);
      const Ue =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function Ze(a, h, f) {
        const p = h * Math.min(f, 1 - f),
          b = (y, M = (y + a / 30) % 12) =>
            f - p * Math.max(Math.min(M - 3, 9 - M, 1), -1);
        return [b(0), b(8), b(4)];
      }
      function Ci(a, h, f) {
        const p = (b, y = (b + a / 60) % 6) =>
          f - f * h * Math.max(Math.min(y, 4 - y, 1), 0);
        return [p(5), p(3), p(1)];
      }
      function Oi(a, h, f) {
        const p = Ze(a, 1, 0.5);
        let b;
        for (
          h + f > 1 && ((b = 1 / (h + f)), (h *= b), (f *= b)), b = 0;
          b < 3;
          b++
        )
          (p[b] *= 1 - h - f), (p[b] += h);
        return p;
      }
      function At(a) {
        const f = a.r / 255,
          p = a.g / 255,
          b = a.b / 255,
          y = Math.max(f, p, b),
          M = Math.min(f, p, b),
          k = (y + M) / 2;
        let C, T, F;
        return (
          y !== M &&
            ((F = y - M),
            (T = k > 0.5 ? F / (2 - y - M) : F / (y + M)),
            (C = (function Xe(a, h, f, p, b) {
              return a === b
                ? (h - f) / p + (h < f ? 6 : 0)
                : h === b
                ? (f - a) / p + 2
                : (a - h) / p + 4;
            })(f, p, b, F, y)),
            (C = 60 * C + 0.5)),
          [0 | C, T || 0, k]
        );
      }
      function Tt(a, h, f, p) {
        return (Array.isArray(h) ? a(h[0], h[1], h[2]) : a(h, f, p)).map(St);
      }
      function ue(a, h, f) {
        return Tt(Ze, a, h, f);
      }
      function se(a) {
        return ((a % 360) + 360) % 360;
      }
      const Ge = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        Qe = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      let ge;
      const X =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        lt = (a) =>
          a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055,
        zt = (a) =>
          a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
      function Lt(a, h, f) {
        if (a) {
          let p = At(a);
          (p[h] = Math.max(0, Math.min(p[h] + p[h] * f, 0 === h ? 360 : 1))),
            (p = ue(p)),
            (a.r = p[0]),
            (a.g = p[1]),
            (a.b = p[2]);
        }
      }
      function qe(a, h) {
        return a && Object.assign(h || {}, a);
      }
      function Ti(a) {
        var h = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(a)
            ? a.length >= 3 &&
              ((h = { r: a[0], g: a[1], b: a[2], a: 255 }),
              a.length > 3 && (h.a = St(a[3])))
            : ((h = qe(a, { r: 0, g: 0, b: 0, a: 1 })).a = St(h.a)),
          h
        );
      }
      function rs(a) {
        return "r" === a.charAt(0)
          ? (function q(a) {
              const h = X.exec(a);
              let p,
                b,
                y,
                f = 255;
              if (h) {
                if (h[7] !== p) {
                  const M = +h[7];
                  f = h[8] ? E(M) : u(255 * M, 0, 255);
                }
                return (
                  (p = +h[1]),
                  (b = +h[3]),
                  (y = +h[5]),
                  (p = 255 & (h[2] ? E(p) : u(p, 0, 255))),
                  (b = 255 & (h[4] ? E(b) : u(b, 0, 255))),
                  (y = 255 & (h[6] ? E(y) : u(y, 0, 255))),
                  { r: p, g: b, b: y, a: f }
                );
              }
            })(a)
          : (function fe(a) {
              const h = Ue.exec(a);
              let p,
                f = 255;
              if (!h) return;
              h[5] !== p && (f = h[6] ? E(+h[5]) : St(+h[5]));
              const b = se(+h[2]),
                y = +h[3] / 100,
                M = +h[4] / 100;
              return (
                (p =
                  "hwb" === h[1]
                    ? (function Di(a, h, f) {
                        return Tt(Oi, a, h, f);
                      })(b, y, M)
                    : "hsv" === h[1]
                    ? (function ne(a, h, f) {
                        return Tt(Ci, a, h, f);
                      })(b, y, M)
                    : ue(b, y, M)),
                { r: p[0], g: p[1], b: p[2], a: f }
              );
            })(a);
      }
      class pe {
        constructor(h) {
          if (h instanceof pe) return h;
          const f = typeof h;
          let p;
          "object" === f
            ? (p = Ti(h))
            : "string" === f &&
              (p =
                (function Ye(a) {
                  var f,
                    h = a.length;
                  return (
                    "#" === a[0] &&
                      (4 === h || 5 === h
                        ? (f = {
                            r: 255 & (17 * mt[a[1]]),
                            g: 255 & (17 * mt[a[2]]),
                            b: 255 & (17 * mt[a[3]]),
                            a: 5 === h ? 17 * mt[a[4]] : 255,
                          })
                        : (7 === h || 9 === h) &&
                          (f = {
                            r: (mt[a[1]] << 4) | mt[a[2]],
                            g: (mt[a[3]] << 4) | mt[a[4]],
                            b: (mt[a[5]] << 4) | mt[a[6]],
                            a: 9 === h ? (mt[a[7]] << 4) | mt[a[8]] : 255,
                          })),
                    f
                  );
                })(h) ||
                (function N(a) {
                  ge ||
                    ((ge = (function Ai() {
                      const a = {},
                        h = Object.keys(Qe),
                        f = Object.keys(Ge);
                      let p, b, y, M, k;
                      for (p = 0; p < h.length; p++) {
                        for (M = k = h[p], b = 0; b < f.length; b++)
                          (y = f[b]), (k = k.replace(y, Ge[y]));
                        (y = parseInt(Qe[M], 16)),
                          (a[k] = [(y >> 16) & 255, (y >> 8) & 255, 255 & y]);
                      }
                      return a;
                    })()),
                    (ge.transparent = [0, 0, 0, 0]));
                  const h = ge[a.toLowerCase()];
                  return (
                    h && {
                      r: h[0],
                      g: h[1],
                      b: h[2],
                      a: 4 === h.length ? h[3] : 255,
                    }
                  );
                })(h) ||
                rs(h)),
            (this._rgb = p),
            (this._valid = !!p);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var h = qe(this._rgb);
          return h && (h.a = Dt(h.a)), h;
        }
        set rgb(h) {
          this._rgb = Ti(h);
        }
        rgbString() {
          return this._valid
            ? (function G(a) {
                return (
                  a &&
                  (a.a < 255
                    ? `rgba(${a.r}, ${a.g}, ${a.b}, ${Dt(a.a)})`
                    : `rgb(${a.r}, ${a.g}, ${a.b})`)
                );
              })(this._rgb)
            : void 0;
        }
        hexString() {
          return this._valid
            ? (function Pi(a) {
                var h = ((a) => de(a.r) && de(a.g) && de(a.b) && de(a.a))(a)
                  ? We
                  : ie;
                return a
                  ? "#" +
                      h(a.r) +
                      h(a.g) +
                      h(a.b) +
                      ((a, h) => (a < 255 ? h(a) : ""))(a.a, h)
                  : void 0;
              })(this._rgb)
            : void 0;
        }
        hslString() {
          return this._valid
            ? (function It(a) {
                if (!a) return;
                const h = At(a),
                  f = h[0],
                  p = Ve(h[1]),
                  b = Ve(h[2]);
                return a.a < 255
                  ? `hsla(${f}, ${p}%, ${b}%, ${Dt(a.a)})`
                  : `hsl(${f}, ${p}%, ${b}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(h, f) {
          if (h) {
            const p = this.rgb,
              b = h.rgb;
            let y;
            const M = f === y ? 0.5 : f,
              k = 2 * M - 1,
              C = p.a - b.a,
              T = ((k * C == -1 ? k : (k + C) / (1 + k * C)) + 1) / 2;
            (y = 1 - T),
              (p.r = 255 & (T * p.r + y * b.r + 0.5)),
              (p.g = 255 & (T * p.g + y * b.g + 0.5)),
              (p.b = 255 & (T * p.b + y * b.b + 0.5)),
              (p.a = M * p.a + (1 - M) * b.a),
              (this.rgb = p);
          }
          return this;
        }
        interpolate(h, f) {
          return (
            h &&
              (this._rgb = (function Zt(a, h, f) {
                const p = zt(Dt(a.r)),
                  b = zt(Dt(a.g)),
                  y = zt(Dt(a.b));
                return {
                  r: St(lt(p + f * (zt(Dt(h.r)) - p))),
                  g: St(lt(b + f * (zt(Dt(h.g)) - b))),
                  b: St(lt(y + f * (zt(Dt(h.b)) - y))),
                  a: a.a + f * (h.a - a.a),
                };
              })(this._rgb, h._rgb, f)),
            this
          );
        }
        clone() {
          return new pe(this.rgb);
        }
        alpha(h) {
          return (this._rgb.a = St(h)), this;
        }
        clearer(h) {
          return (this._rgb.a *= 1 - h), this;
        }
        greyscale() {
          const h = this._rgb,
            f = R(0.3 * h.r + 0.59 * h.g + 0.11 * h.b);
          return (h.r = h.g = h.b = f), this;
        }
        opaquer(h) {
          return (this._rgb.a *= 1 + h), this;
        }
        negate() {
          const h = this._rgb;
          return (h.r = 255 - h.r), (h.g = 255 - h.g), (h.b = 255 - h.b), this;
        }
        lighten(h) {
          return Lt(this._rgb, 2, h), this;
        }
        darken(h) {
          return Lt(this._rgb, 2, -h), this;
        }
        saturate(h) {
          return Lt(this._rgb, 1, h), this;
        }
        desaturate(h) {
          return Lt(this._rgb, 1, -h), this;
        }
        rotate(h) {
          return (
            (function Ke(a, h) {
              var f = At(a);
              (f[0] = se(f[0] + h)),
                (f = ue(f)),
                (a.r = f[0]),
                (a.g = f[1]),
                (a.b = f[2]);
            })(this._rgb, h),
            this
          );
        }
      }
      function as() {}
      const zi = (() => {
        let a = 0;
        return () => a++;
      })();
      function Oe(a) {
        return null === a || typeof a > "u";
      }
      function _t(a) {
        if (Array.isArray && Array.isArray(a)) return !0;
        const h = Object.prototype.toString.call(a);
        return "[object" === h.slice(0, 7) && "Array]" === h.slice(-6);
      }
      function xt(a) {
        return (
          null !== a && "[object Object]" === Object.prototype.toString.call(a)
        );
      }
      function De(a) {
        return ("number" == typeof a || a instanceof Number) && isFinite(+a);
      }
      function uo(a, h) {
        return De(a) ? a : h;
      }
      function yt(a, h) {
        return typeof a > "u" ? h : a;
      }
      const oe = (a, h) =>
          "string" == typeof a && a.endsWith("%")
            ? parseFloat(a) / 100
            : +a / h,
        Je = (a, h) =>
          "string" == typeof a && a.endsWith("%")
            ? (parseFloat(a) / 100) * h
            : +a;
      function ls(a, h, f) {
        if (a && "function" == typeof a.call) return a.apply(f, h);
      }
      function cs(a, h, f, p) {
        let b, y, M;
        if (_t(a))
          if (((y = a.length), p))
            for (b = y - 1; b >= 0; b--) h.call(f, a[b], b);
          else for (b = 0; b < y; b++) h.call(f, a[b], b);
        else if (xt(a))
          for (M = Object.keys(a), y = M.length, b = 0; b < y; b++)
            h.call(f, a[M[b]], M[b]);
      }
      function Ae(a, h) {
        let f, p, b, y;
        if (!a || !h || a.length !== h.length) return !1;
        for (f = 0, p = a.length; f < p; ++f)
          if (
            ((b = a[f]),
            (y = h[f]),
            b.datasetIndex !== y.datasetIndex || b.index !== y.index)
          )
            return !1;
        return !0;
      }
      function me(a) {
        if (_t(a)) return a.map(me);
        if (xt(a)) {
          const h = Object.create(null),
            f = Object.keys(a),
            p = f.length;
          let b = 0;
          for (; b < p; ++b) h[f[b]] = me(a[f[b]]);
          return h;
        }
        return a;
      }
      function ti(a) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(a);
      }
      function Li(a, h, f, p) {
        if (!ti(a)) return;
        const b = h[a],
          y = f[a];
        xt(b) && xt(y) ? be(b, y, p) : (h[a] = me(y));
      }
      function be(a, h, f) {
        const p = _t(h) ? h : [h],
          b = p.length;
        if (!xt(a)) return a;
        const y = (f = f || {}).merger || Li;
        let M;
        for (let k = 0; k < b; ++k) {
          if (((M = p[k]), !xt(M))) continue;
          const C = Object.keys(M);
          for (let T = 0, F = C.length; T < F; ++T) y(C[T], a, M, f);
        }
        return a;
      }
      function ei(a, h) {
        return be(a, h, { merger: rn });
      }
      function rn(a, h, f) {
        if (!ti(a)) return;
        const p = h[a],
          b = f[a];
        xt(p) && xt(b)
          ? ei(p, b)
          : Object.prototype.hasOwnProperty.call(h, a) || (h[a] = me(b));
      }
      const Ei = { "": (a) => a, x: (a) => a.x, y: (a) => a.y };
      function re(a, h) {
        return (
          Ei[h] ||
          (Ei[h] = (function an(a) {
            const h = (function Te(a) {
              const h = a.split("."),
                f = [];
              let p = "";
              for (const b of h)
                (p += b),
                  p.endsWith("\\")
                    ? (p = p.slice(0, -1) + ".")
                    : (f.push(p), (p = ""));
              return f;
            })(a);
            return (f) => {
              for (const p of h) {
                if ("" === p) break;
                f = f && f[p];
              }
              return f;
            };
          })(h))
        )(a);
      }
      function Ri(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
      }
      const hs = (a) => typeof a < "u",
        ze = (a) => "function" == typeof a,
        ds = (a, h) => {
          if (a.size !== h.size) return !1;
          for (const f of a) if (!h.has(f)) return !1;
          return !0;
        };
      function ln(a) {
        return (
          "mouseup" === a.type || "click" === a.type || "contextmenu" === a.type
        );
      }
      const ft = Math.PI,
        Et = 2 * ft,
        us = Et + ft,
        ii = Number.POSITIVE_INFINITY,
        Le = ft / 180,
        vt = ft / 2,
        Ft = ft / 4,
        gt = (2 * ft) / 3,
        _e = Math.log10,
        Ii = Math.sign;
      function Bt(a, h, f) {
        return Math.abs(a - h) < f;
      }
      function fs(a) {
        const h = Math.round(a);
        a = Bt(a, h, a / 1e3) ? h : a;
        const f = Math.pow(10, Math.floor(_e(a))),
          p = a / f;
        return (p <= 1 ? 1 : p <= 2 ? 2 : p <= 5 ? 5 : 10) * f;
      }
      function cn(a) {
        const h = [],
          f = Math.sqrt(a);
        let p;
        for (p = 1; p < f; p++) a % p == 0 && (h.push(p), h.push(a / p));
        return f === (0 | f) && h.push(f), h.sort((b, y) => b - y).pop(), h;
      }
      function gs(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      }
      function hn(a, h) {
        const f = Math.round(a);
        return f - h <= a && f + h >= a;
      }
      function ps(a, h, f) {
        let p, b, y;
        for (p = 0, b = a.length; p < b; p++)
          (y = a[p][f]),
            isNaN(y) ||
              ((h.min = Math.min(h.min, y)), (h.max = Math.max(h.max, y)));
      }
      function ms(a) {
        return a * (ft / 180);
      }
      function bs(a) {
        return a * (180 / ft);
      }
      function ni(a) {
        if (!De(a)) return;
        let h = 1,
          f = 0;
        for (; Math.round(a * h) / h !== a; ) (h *= 10), f++;
        return f;
      }
      function _s(a, h) {
        const f = h.x - a.x,
          p = h.y - a.y,
          b = Math.sqrt(f * f + p * p);
        let y = Math.atan2(p, f);
        return y < -0.5 * ft && (y += Et), { angle: y, distance: b };
      }
      function Fi(a, h) {
        return Math.sqrt(Math.pow(h.x - a.x, 2) + Math.pow(h.y - a.y, 2));
      }
      function Ee(a, h) {
        return ((a - h + us) % Et) - ft;
      }
      function Ht(a) {
        return ((a % Et) + Et) % Et;
      }
      function Bi(a, h, f, p) {
        const b = Ht(a),
          y = Ht(h),
          M = Ht(f),
          k = Ht(y - b),
          C = Ht(M - b),
          T = Ht(b - y),
          F = Ht(b - M);
        return b === y || b === M || (p && y === M) || (k > C && T < F);
      }
      function si(a, h, f) {
        return Math.max(h, Math.min(f, a));
      }
      function xs(a) {
        return si(a, -32768, 32767);
      }
      function dn(a, h, f, p = 1e-6) {
        return a >= Math.min(h, f) - p && a <= Math.max(h, f) + p;
      }
      function jt(a, h, f) {
        f = f || ((M) => a[M] < h);
        let y,
          p = a.length - 1,
          b = 0;
        for (; p - b > 1; ) (y = (b + p) >> 1), f(y) ? (b = y) : (p = y);
        return { lo: b, hi: p };
      }
      const xe = (a, h, f, p) =>
          jt(
            a,
            f,
            p
              ? (b) => {
                  const y = a[b][h];
                  return y < f || (y === f && a[b + 1][h] === f);
                }
              : (b) => a[b][h] < f
          ),
        ys = (a, h, f) => jt(a, f, (p) => a[p][h] >= f);
      function vs(a, h, f) {
        let p = 0,
          b = a.length;
        for (; p < b && a[p] < h; ) p++;
        for (; b > p && a[b - 1] > f; ) b--;
        return p > 0 || b < a.length ? a.slice(p, b) : a;
      }
      const wt = ["push", "pop", "shift", "splice", "unshift"];
      function Ms(a, h) {
        a._chartjs
          ? a._chartjs.listeners.push(h)
          : (Object.defineProperty(a, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [h] },
            }),
            wt.forEach((f) => {
              const p = "_onData" + Ri(f),
                b = a[f];
              Object.defineProperty(a, f, {
                configurable: !0,
                enumerable: !1,
                value(...y) {
                  const M = b.apply(this, y);
                  return (
                    a._chartjs.listeners.forEach((k) => {
                      "function" == typeof k[p] && k[p](...y);
                    }),
                    M
                  );
                },
              });
            }));
      }
      function Ss(a, h) {
        const f = a._chartjs;
        if (!f) return;
        const p = f.listeners,
          b = p.indexOf(h);
        -1 !== b && p.splice(b, 1),
          !(p.length > 0) &&
            (wt.forEach((y) => {
              delete a[y];
            }),
            delete a._chartjs);
      }
      function oi(a) {
        const h = new Set(a);
        return h.size === a.length ? a : Array.from(h);
      }
      const un =
        typeof window > "u"
          ? function (a) {
              return a();
            }
          : window.requestAnimationFrame;
      function ri(a, h) {
        let f = [],
          p = !1;
        return function (...b) {
          (f = b),
            p ||
              ((p = !0),
              un.call(window, () => {
                (p = !1), a.apply(h, f);
              }));
        };
      }
      function ws(a, h) {
        let f;
        return function (...p) {
          return (
            h ? (clearTimeout(f), (f = setTimeout(a, h, p))) : a.apply(this, p),
            h
          );
        };
      }
      const ks = (a) =>
          "start" === a ? "left" : "end" === a ? "right" : "center",
        fn = (a, h, f) => ("start" === a ? h : "end" === a ? f : (h + f) / 2),
        gn = (a, h, f, p) =>
          a === (p ? "left" : "right") ? f : "center" === a ? (h + f) / 2 : h;
      function pn(a, h, f) {
        const p = h.length;
        let b = 0,
          y = p;
        if (a._sorted) {
          const { iScale: M, _parsed: k } = a,
            C = M.axis,
            {
              min: T,
              max: F,
              minDefined: $,
              maxDefined: Z,
            } = M.getUserBounds();
          $ &&
            (b = si(
              Math.min(
                xe(k, C, T).lo,
                f ? p : xe(h, C, M.getPixelForValue(T)).lo
              ),
              0,
              p - 1
            )),
            (y = Z
              ? si(
                  Math.max(
                    xe(k, M.axis, F, !0).hi + 1,
                    f ? 0 : xe(h, C, M.getPixelForValue(F), !0).hi + 1
                  ),
                  b,
                  p
                ) - b
              : p - b);
        }
        return { start: b, count: y };
      }
      function ye(a) {
        const { xScale: h, yScale: f, _scaleRanges: p } = a,
          b = { xmin: h.min, xmax: h.max, ymin: f.min, ymax: f.max };
        if (!p) return (a._scaleRanges = b), !0;
        const y =
          p.xmin !== h.min ||
          p.xmax !== h.max ||
          p.ymin !== f.min ||
          p.ymax !== f.max;
        return Object.assign(p, b), y;
      }
      const ai = (a) => 0 === a || 1 === a,
        ve = (a, h, f) =>
          -Math.pow(2, 10 * (a -= 1)) * Math.sin(((a - h) * Et) / f),
        Hi = (a, h, f) =>
          Math.pow(2, -10 * a) * Math.sin(((a - h) * Et) / f) + 1,
        li = {
          linear: (a) => a,
          easeInQuad: (a) => a * a,
          easeOutQuad: (a) => -a * (a - 2),
          easeInOutQuad: (a) =>
            (a /= 0.5) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1),
          easeInCubic: (a) => a * a * a,
          easeOutCubic: (a) => (a -= 1) * a * a + 1,
          easeInOutCubic: (a) =>
            (a /= 0.5) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2),
          easeInQuart: (a) => a * a * a * a,
          easeOutQuart: (a) => -((a -= 1) * a * a * a - 1),
          easeInOutQuart: (a) =>
            (a /= 0.5) < 1
              ? 0.5 * a * a * a * a
              : -0.5 * ((a -= 2) * a * a * a - 2),
          easeInQuint: (a) => a * a * a * a * a,
          easeOutQuint: (a) => (a -= 1) * a * a * a * a + 1,
          easeInOutQuint: (a) =>
            (a /= 0.5) < 1
              ? 0.5 * a * a * a * a * a
              : 0.5 * ((a -= 2) * a * a * a * a + 2),
          easeInSine: (a) => 1 - Math.cos(a * vt),
          easeOutSine: (a) => Math.sin(a * vt),
          easeInOutSine: (a) => -0.5 * (Math.cos(ft * a) - 1),
          easeInExpo: (a) => (0 === a ? 0 : Math.pow(2, 10 * (a - 1))),
          easeOutExpo: (a) => (1 === a ? 1 : 1 - Math.pow(2, -10 * a)),
          easeInOutExpo: (a) =>
            ai(a)
              ? a
              : a < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * a - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * a - 1))),
          easeInCirc: (a) => (a >= 1 ? a : -(Math.sqrt(1 - a * a) - 1)),
          easeOutCirc: (a) => Math.sqrt(1 - (a -= 1) * a),
          easeInOutCirc: (a) =>
            (a /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - a * a) - 1)
              : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1),
          easeInElastic: (a) => (ai(a) ? a : ve(a, 0.075, 0.3)),
          easeOutElastic: (a) => (ai(a) ? a : Hi(a, 0.075, 0.3)),
          easeInOutElastic: (a) =>
            ai(a)
              ? a
              : a < 0.5
              ? 0.5 * ve(2 * a, 0.1125, 0.45)
              : 0.5 + 0.5 * Hi(2 * a - 1, 0.1125, 0.45),
          easeInBack: (a) => a * a * (2.70158 * a - 1.70158),
          easeOutBack: (a) => (a -= 1) * a * (2.70158 * a + 1.70158) + 1,
          easeInOutBack(a) {
            let h = 1.70158;
            return (a /= 0.5) < 1
              ? a * a * ((1 + (h *= 1.525)) * a - h) * 0.5
              : 0.5 * ((a -= 2) * a * ((1 + (h *= 1.525)) * a + h) + 2);
          },
          easeInBounce: (a) => 1 - li.easeOutBounce(1 - a),
          easeOutBounce: (a) =>
            a < 1 / 2.75
              ? 7.5625 * a * a
              : a < 2 / 2.75
              ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
              : a < 2.5 / 2.75
              ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
              : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375,
          easeInOutBounce: (a) =>
            a < 0.5
              ? 0.5 * li.easeInBounce(2 * a)
              : 0.5 * li.easeOutBounce(2 * a - 1) + 0.5,
        };
      function Xt(a) {
        if (a && "object" == typeof a) {
          const h = a.toString();
          return (
            "[object CanvasPattern]" === h || "[object CanvasGradient]" === h
          );
        }
        return !1;
      }
      function Ps(a) {
        return Xt(a) ? a : new pe(a);
      }
      function ji(a) {
        return Xt(a) ? a : new pe(a).saturate(0.5).darken(0.1).hexString();
      }
      const Nt = ["x", "y", "borderWidth", "radius", "tension"],
        ci = ["color", "borderColor", "backgroundColor"],
        hi = new Map();
      function Vt(a, h, f) {
        return (function Os(a, h) {
          h = h || {};
          const f = a + JSON.stringify(h);
          let p = hi.get(f);
          return p || ((p = new Intl.NumberFormat(a, h)), hi.set(f, p)), p;
        })(h, f).format(a);
      }
      const mn = {
        values: (a) => (_t(a) ? a : "" + a),
        numeric(a, h, f) {
          if (0 === a) return "0";
          const p = this.chart.options.locale;
          let b,
            y = a;
          if (f.length > 1) {
            const T = Math.max(
              Math.abs(f[0].value),
              Math.abs(f[f.length - 1].value)
            );
            (T < 1e-4 || T > 1e15) && (b = "scientific"),
              (y = (function Ds(a, h) {
                let f =
                  h.length > 3
                    ? h[2].value - h[1].value
                    : h[1].value - h[0].value;
                return (
                  Math.abs(f) >= 1 &&
                    a !== Math.floor(a) &&
                    (f = a - Math.floor(a)),
                  f
                );
              })(a, f));
          }
          const M = _e(Math.abs(y)),
            k = isNaN(M) ? 1 : Math.max(Math.min(-1 * Math.floor(M), 20), 0),
            C = {
              notation: b,
              minimumFractionDigits: k,
              maximumFractionDigits: k,
            };
          return Object.assign(C, this.options.ticks.format), Vt(a, p, C);
        },
        logarithmic(a, h, f) {
          if (0 === a) return "0";
          const p = f[h].significand || a / Math.pow(10, Math.floor(_e(a)));
          return [1, 2, 3, 5, 10, 15].includes(p) || h > 0.8 * f.length
            ? mn.numeric.call(this, a, h, f)
            : "";
        },
      };
      var Vi = { formatters: mn };
      const _n = Object.create(null),
        Re = Object.create(null);
      function Me(a, h) {
        if (!h) return a;
        const f = h.split(".");
        for (let p = 0, b = f.length; p < b; ++p) {
          const y = f[p];
          a = a[y] || (a[y] = Object.create(null));
        }
        return a;
      }
      function Wi(a, h, f) {
        return "string" == typeof h ? be(Me(a, h), f) : be(Me(a, ""), h);
      }
      class xn {
        constructor(h, f) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (p) =>
              p.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (p, b) => ji(b.backgroundColor)),
            (this.hoverBorderColor = (p, b) => ji(b.borderColor)),
            (this.hoverColor = (p, b) => ji(b.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(h),
            this.apply(f);
        }
        set(h, f) {
          return Wi(this, h, f);
        }
        get(h) {
          return Me(this, h);
        }
        describe(h, f) {
          return Wi(Re, h, f);
        }
        override(h, f) {
          return Wi(_n, h, f);
        }
        route(h, f, p, b) {
          const y = Me(this, h),
            M = Me(this, p),
            k = "_" + f;
          Object.defineProperties(y, {
            [k]: { value: y[f], writable: !0 },
            [f]: {
              enumerable: !0,
              get() {
                const C = this[k],
                  T = M[b];
                return xt(C) ? Object.assign({}, T, C) : yt(C, T);
              },
              set(C) {
                this[k] = C;
              },
            },
          });
        }
        apply(h) {
          h.forEach((f) => f(this));
        }
      }
      var yn = new xn(
        {
          _scriptable: (a) => !a.startsWith("on"),
          _indexable: (a) => "events" !== a,
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function Ni(a) {
            a.set("animation", {
              delay: void 0,
              duration: 1e3,
              easing: "easeOutQuart",
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              a.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (h) =>
                  "onProgress" !== h && "onComplete" !== h && "fn" !== h,
              }),
              a.set("animations", {
                colors: { type: "color", properties: ci },
                numbers: { type: "number", properties: Nt },
              }),
              a.describe("animations", { _fallback: "animation" }),
              a.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: "transparent" },
                    visible: {
                      type: "boolean",
                      easing: "linear",
                      fn: (h) => 0 | h,
                    },
                  },
                },
              });
          },
          function Cs(a) {
            a.set("layout", {
              autoPadding: !0,
              padding: { top: 0, right: 0, bottom: 0, left: 0 },
            });
          },
          function bn(a) {
            a.set("scale", {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: "ticks",
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (h, f) => f.lineWidth,
                tickColor: (h, f) => f.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: Vi.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
              },
            }),
              a.route("scale.ticks", "color", "", "color"),
              a.route("scale.grid", "color", "", "borderColor"),
              a.route("scale.border", "color", "", "borderColor"),
              a.route("scale.title", "color", "", "color"),
              a.describe("scale", {
                _fallback: !1,
                _scriptable: (h) =>
                  !h.startsWith("before") &&
                  !h.startsWith("after") &&
                  "callback" !== h &&
                  "parser" !== h,
                _indexable: (h) =>
                  "borderDash" !== h && "tickBorderDash" !== h && "dash" !== h,
              }),
              a.describe("scales", { _fallback: "scale" }),
              a.describe("scale.ticks", {
                _scriptable: (h) => "backdropPadding" !== h && "callback" !== h,
                _indexable: (h) => "backdropPadding" !== h,
              });
          },
        ]
      );
      function ui(a, h, f, p, b) {
        let y = h[b];
        return (
          y || ((y = h[b] = a.measureText(b).width), f.push(b)),
          y > p && (p = y),
          p
        );
      }
      function As(a, h, f, p) {
        let b = ((p = p || {}).data = p.data || {}),
          y = (p.garbageCollect = p.garbageCollect || []);
        p.font !== h &&
          ((b = p.data = {}), (y = p.garbageCollect = []), (p.font = h)),
          a.save(),
          (a.font = h);
        let M = 0;
        const k = f.length;
        let C, T, F, $, Z;
        for (C = 0; C < k; C++)
          if ((($ = f[C]), null == $ || _t($))) {
            if (_t($))
              for (T = 0, F = $.length; T < F; T++)
                (Z = $[T]), null != Z && !_t(Z) && (M = ui(a, b, y, M, Z));
          } else M = ui(a, b, y, M, $);
        a.restore();
        const ot = y.length / 2;
        if (ot > f.length) {
          for (C = 0; C < ot; C++) delete b[y[C]];
          y.splice(0, ot);
        }
        return M;
      }
      function Ts(a, h, f) {
        const p = a.currentDevicePixelRatio,
          b = 0 !== f ? Math.max(f / 2, 0.5) : 0;
        return Math.round((h - b) * p) / p + b;
      }
      function vn(a, h) {
        (h = h || a.getContext("2d")).save(),
          h.resetTransform(),
          h.clearRect(0, 0, a.width, a.height),
          h.restore();
      }
      function Mn(a, h, f, p) {
        Sn(a, h, f, p, null);
      }
      function Sn(a, h, f, p, b) {
        let y, M, k, C, T, F, $, Z;
        const ot = h.pointStyle,
          dt = h.rotation,
          K = h.radius;
        let Y = (dt || 0) * Le;
        if (
          ot &&
          "object" == typeof ot &&
          ((y = ot.toString()),
          "[object HTMLImageElement]" === y ||
            "[object HTMLCanvasElement]" === y)
        )
          return (
            a.save(),
            a.translate(f, p),
            a.rotate(Y),
            a.drawImage(ot, -ot.width / 2, -ot.height / 2, ot.width, ot.height),
            void a.restore()
          );
        if (!(isNaN(K) || K <= 0)) {
          switch ((a.beginPath(), ot)) {
            default:
              b ? a.ellipse(f, p, b / 2, K, 0, 0, Et) : a.arc(f, p, K, 0, Et),
                a.closePath();
              break;
            case "triangle":
              (F = b ? b / 2 : K),
                a.moveTo(f + Math.sin(Y) * F, p - Math.cos(Y) * K),
                (Y += gt),
                a.lineTo(f + Math.sin(Y) * F, p - Math.cos(Y) * K),
                (Y += gt),
                a.lineTo(f + Math.sin(Y) * F, p - Math.cos(Y) * K),
                a.closePath();
              break;
            case "rectRounded":
              (T = 0.516 * K),
                (C = K - T),
                (M = Math.cos(Y + Ft) * C),
                ($ = Math.cos(Y + Ft) * (b ? b / 2 - T : C)),
                (k = Math.sin(Y + Ft) * C),
                (Z = Math.sin(Y + Ft) * (b ? b / 2 - T : C)),
                a.arc(f - $, p - k, T, Y - ft, Y - vt),
                a.arc(f + Z, p - M, T, Y - vt, Y),
                a.arc(f + $, p + k, T, Y, Y + vt),
                a.arc(f - Z, p + M, T, Y + vt, Y + ft),
                a.closePath();
              break;
            case "rect":
              if (!dt) {
                (C = Math.SQRT1_2 * K),
                  (F = b ? b / 2 : C),
                  a.rect(f - F, p - C, 2 * F, 2 * C);
                break;
              }
              Y += Ft;
            case "rectRot":
              ($ = Math.cos(Y) * (b ? b / 2 : K)),
                (M = Math.cos(Y) * K),
                (k = Math.sin(Y) * K),
                (Z = Math.sin(Y) * (b ? b / 2 : K)),
                a.moveTo(f - $, p - k),
                a.lineTo(f + Z, p - M),
                a.lineTo(f + $, p + k),
                a.lineTo(f - Z, p + M),
                a.closePath();
              break;
            case "crossRot":
              Y += Ft;
            case "cross":
              ($ = Math.cos(Y) * (b ? b / 2 : K)),
                (M = Math.cos(Y) * K),
                (k = Math.sin(Y) * K),
                (Z = Math.sin(Y) * (b ? b / 2 : K)),
                a.moveTo(f - $, p - k),
                a.lineTo(f + $, p + k),
                a.moveTo(f + Z, p - M),
                a.lineTo(f - Z, p + M);
              break;
            case "star":
              ($ = Math.cos(Y) * (b ? b / 2 : K)),
                (M = Math.cos(Y) * K),
                (k = Math.sin(Y) * K),
                (Z = Math.sin(Y) * (b ? b / 2 : K)),
                a.moveTo(f - $, p - k),
                a.lineTo(f + $, p + k),
                a.moveTo(f + Z, p - M),
                a.lineTo(f - Z, p + M),
                (Y += Ft),
                ($ = Math.cos(Y) * (b ? b / 2 : K)),
                (M = Math.cos(Y) * K),
                (k = Math.sin(Y) * K),
                (Z = Math.sin(Y) * (b ? b / 2 : K)),
                a.moveTo(f - $, p - k),
                a.lineTo(f + $, p + k),
                a.moveTo(f + Z, p - M),
                a.lineTo(f - Z, p + M);
              break;
            case "line":
              (M = b ? b / 2 : Math.cos(Y) * K),
                (k = Math.sin(Y) * K),
                a.moveTo(f - M, p - k),
                a.lineTo(f + M, p + k);
              break;
            case "dash":
              a.moveTo(f, p),
                a.lineTo(
                  f + Math.cos(Y) * (b ? b / 2 : K),
                  p + Math.sin(Y) * K
                );
              break;
            case !1:
              a.closePath();
          }
          a.fill(), h.borderWidth > 0 && a.stroke();
        }
      }
      function Ie(a, h, f) {
        return (
          (f = f || 0.5),
          !h ||
            (a &&
              a.x > h.left - f &&
              a.x < h.right + f &&
              a.y > h.top - f &&
              a.y < h.bottom + f)
        );
      }
      function wn(a, h) {
        a.save(),
          a.beginPath(),
          a.rect(h.left, h.top, h.right - h.left, h.bottom - h.top),
          a.clip();
      }
      function fi(a) {
        a.restore();
      }
      function Fe(a, h, f, p, b) {
        if (!h) return a.lineTo(f.x, f.y);
        if ("middle" === b) {
          const y = (h.x + f.x) / 2;
          a.lineTo(y, h.y), a.lineTo(y, f.y);
        } else ("after" === b) != !!p ? a.lineTo(h.x, f.y) : a.lineTo(f.x, h.y);
        a.lineTo(f.x, f.y);
      }
      function po(a, h, f, p) {
        if (!h) return a.lineTo(f.x, f.y);
        a.bezierCurveTo(
          p ? h.cp1x : h.cp2x,
          p ? h.cp1y : h.cp2y,
          p ? f.cp2x : f.cp1x,
          p ? f.cp2y : f.cp1y,
          f.x,
          f.y
        );
      }
      function Pn(a, h, f, p, b) {
        if (b.strikethrough || b.underline) {
          const y = a.measureText(p),
            M = h - y.actualBoundingBoxLeft,
            k = h + y.actualBoundingBoxRight,
            T = f + y.actualBoundingBoxDescent,
            F = b.strikethrough ? (f - y.actualBoundingBoxAscent + T) / 2 : T;
          (a.strokeStyle = a.fillStyle),
            a.beginPath(),
            (a.lineWidth = b.decorationWidth || 2),
            a.moveTo(M, F),
            a.lineTo(k, F),
            a.stroke();
        }
      }
      function zs(a, h) {
        const f = a.fillStyle;
        (a.fillStyle = h.color),
          a.fillRect(h.left, h.top, h.width, h.height),
          (a.fillStyle = f);
      }
      function Ls(a, h, f, p, b, y = {}) {
        const M = _t(h) ? h : [h],
          k = y.strokeWidth > 0 && "" !== y.strokeColor;
        let C, T;
        for (
          a.save(),
            a.font = b.string,
            (function kn(a, h) {
              h.translation && a.translate(h.translation[0], h.translation[1]),
                Oe(h.rotation) || a.rotate(h.rotation),
                h.color && (a.fillStyle = h.color),
                h.textAlign && (a.textAlign = h.textAlign),
                h.textBaseline && (a.textBaseline = h.textBaseline);
            })(a, y),
            C = 0;
          C < M.length;
          ++C
        )
          (T = M[C]),
            y.backdrop && zs(a, y.backdrop),
            k &&
              (y.strokeColor && (a.strokeStyle = y.strokeColor),
              Oe(y.strokeWidth) || (a.lineWidth = y.strokeWidth),
              a.strokeText(T, f, p, y.maxWidth)),
            a.fillText(T, f, p, y.maxWidth),
            Pn(a, f, p, T, y),
            (p += Number(b.lineHeight));
        a.restore();
      }
      function Cn(a, h) {
        const { x: f, y: p, w: b, h: y, radius: M } = h;
        a.arc(f + M.topLeft, p + M.topLeft, M.topLeft, -vt, ft, !0),
          a.lineTo(f, p + y - M.bottomLeft),
          a.arc(
            f + M.bottomLeft,
            p + y - M.bottomLeft,
            M.bottomLeft,
            ft,
            vt,
            !0
          ),
          a.lineTo(f + b - M.bottomRight, p + y),
          a.arc(
            f + b - M.bottomRight,
            p + y - M.bottomRight,
            M.bottomRight,
            vt,
            0,
            !0
          ),
          a.lineTo(f + b, p + M.topRight),
          a.arc(f + b - M.topRight, p + M.topRight, M.topRight, 0, -vt, !0),
          a.lineTo(f + M.topLeft, p);
      }
      const On = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Dn =
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
      function An(a, h) {
        const f = ("" + a).match(On);
        if (!f || "normal" === f[1]) return 1.2 * h;
        switch (((a = +f[2]), f[3])) {
          case "px":
            return a;
          case "%":
            a /= 100;
        }
        return h * a;
      }
      const Be = (a) => +a || 0;
      function gi(a, h) {
        const f = {},
          p = xt(h),
          b = p ? Object.keys(h) : h,
          y = xt(a) ? (p ? (M) => yt(a[M], a[h[M]]) : (M) => a[M]) : () => a;
        for (const M of b) f[M] = Be(y(M));
        return f;
      }
      function He(a) {
        return gi(a, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function Yi(a) {
        return gi(a, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function Tn(a) {
        const h = He(a);
        return (h.width = h.left + h.right), (h.height = h.top + h.bottom), h;
      }
      function Es(a, h) {
        let f = yt((a = a || {}).size, (h = h || yn.font).size);
        "string" == typeof f && (f = parseInt(f, 10));
        let p = yt(a.style, h.style);
        p &&
          !("" + p).match(Dn) &&
          (console.warn('Invalid font style specified: "' + p + '"'),
          (p = void 0));
        const b = {
          family: yt(a.family, h.family),
          lineHeight: An(yt(a.lineHeight, h.lineHeight), f),
          size: f,
          style: p,
          weight: yt(a.weight, h.weight),
          string: "",
        };
        return (
          (b.string = (function di(a) {
            return !a || Oe(a.size) || Oe(a.family)
              ? null
              : (a.style ? a.style + " " : "") +
                  (a.weight ? a.weight + " " : "") +
                  a.size +
                  "px " +
                  a.family;
          })(b)),
          b
        );
      }
      function Rs(a, h, f, p) {
        let y,
          M,
          k,
          b = !0;
        for (y = 0, M = a.length; y < M; ++y)
          if (
            ((k = a[y]),
            void 0 !== k &&
              (void 0 !== h && "function" == typeof k && ((k = k(h)), (b = !1)),
              void 0 !== f && _t(k) && ((k = k[f % k.length]), (b = !1)),
              void 0 !== k))
          )
            return p && !b && (p.cacheable = !1), k;
      }
      function zn(a, h, f) {
        const { min: p, max: b } = a,
          y = Je(h, (b - p) / 2),
          M = (k, C) => (f && 0 === k ? 0 : k + C);
        return { min: M(p, -Math.abs(y)), max: M(b, y) };
      }
      function je(a, h) {
        return Object.assign(Object.create(a), h);
      }
      function $i(a, h = [""], f, p, b = () => a[0]) {
        const y = f || a;
        typeof p > "u" && (p = Bn("_fallback", a));
        const M = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: a,
          _rootScopes: y,
          _fallback: p,
          _getTarget: b,
          override: (k) => $i([k, ...a], h, y, p),
        };
        return new Proxy(M, {
          deleteProperty: (k, C) => (
            delete k[C], delete k._keys, delete a[0][C], !0
          ),
          get: (k, C) =>
            En(k, C, () =>
              (function Fs(a, h, f, p) {
                let b;
                for (const y of h)
                  if (((b = Bn(Se(y, a), f)), typeof b < "u"))
                    return le(a, b) ? pi(f, p, a, b) : b;
              })(C, h, a, k)
            ),
          getOwnPropertyDescriptor: (k, C) =>
            Reflect.getOwnPropertyDescriptor(k._scopes[0], C),
          getPrototypeOf: () => Reflect.getPrototypeOf(a[0]),
          has: (k, C) => Xi(k).includes(C),
          ownKeys: (k) => Xi(k),
          set(k, C, T) {
            const F = k._storage || (k._storage = b());
            return (k[C] = F[C] = T), delete k._keys, !0;
          },
        });
      }
      function ae(a, h, f, p) {
        const b = {
          _cacheable: !1,
          _proxy: a,
          _context: h,
          _subProxy: f,
          _stack: new Set(),
          _descriptors: Ln(a, p),
          setContext: (y) => ae(a, y, f, p),
          override: (y) => ae(a.override(y), h, f, p),
        };
        return new Proxy(b, {
          deleteProperty: (y, M) => (delete y[M], delete a[M], !0),
          get: (y, M, k) =>
            En(y, M, () =>
              (function Ui(a, h, f) {
                const {
                  _proxy: p,
                  _context: b,
                  _subProxy: y,
                  _descriptors: M,
                } = a;
                let k = p[h];
                return (
                  ze(k) &&
                    M.isScriptable(h) &&
                    (k = (function we(a, h, f, p) {
                      const {
                        _proxy: b,
                        _context: y,
                        _subProxy: M,
                        _stack: k,
                      } = f;
                      if (k.has(a))
                        throw new Error(
                          "Recursion detected: " +
                            Array.from(k).join("->") +
                            "->" +
                            a
                        );
                      k.add(a);
                      let C = h(y, M || p);
                      return (
                        k.delete(a), le(a, C) && (C = pi(b._scopes, b, a, C)), C
                      );
                    })(h, k, a, f)),
                  _t(k) &&
                    k.length &&
                    (k = (function Rn(a, h, f, p) {
                      const {
                        _proxy: b,
                        _context: y,
                        _subProxy: M,
                        _descriptors: k,
                      } = f;
                      if (typeof y.index < "u" && p(a))
                        return h[y.index % h.length];
                      if (xt(h[0])) {
                        const C = h,
                          T = b._scopes.filter((F) => F !== C);
                        h = [];
                        for (const F of C) {
                          const $ = pi(T, b, a, F);
                          h.push(ae($, y, M && M[a], k));
                        }
                      }
                      return h;
                    })(h, k, a, M.isIndexable)),
                  le(h, k) && (k = ae(k, b, y && y[h], M)),
                  k
                );
              })(y, M, k)
            ),
          getOwnPropertyDescriptor: (y, M) =>
            y._descriptors.allKeys
              ? Reflect.has(a, M)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(a, M),
          getPrototypeOf: () => Reflect.getPrototypeOf(a),
          has: (y, M) => Reflect.has(a, M),
          ownKeys: () => Reflect.ownKeys(a),
          set: (y, M, k) => ((a[M] = k), delete y[M], !0),
        });
      }
      function Ln(a, h = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: f = h.scriptable,
          _indexable: p = h.indexable,
          _allKeys: b = h.allKeys,
        } = a;
        return {
          allKeys: b,
          scriptable: f,
          indexable: p,
          isScriptable: ze(f) ? f : () => f,
          isIndexable: ze(p) ? p : () => p,
        };
      }
      const Se = (a, h) => (a ? a + Ri(h) : h),
        le = (a, h) =>
          xt(h) &&
          "adapters" !== a &&
          (null === Object.getPrototypeOf(h) || h.constructor === Object);
      function En(a, h, f) {
        if (Object.prototype.hasOwnProperty.call(a, h)) return a[h];
        const p = f();
        return (a[h] = p), p;
      }
      function In(a, h, f) {
        return ze(a) ? a(h, f) : a;
      }
      const Is = (a, h) =>
        !0 === a ? h : "string" == typeof a ? re(h, a) : void 0;
      function Zi(a, h, f, p, b) {
        for (const y of h) {
          const M = Is(f, y);
          if (M) {
            a.add(M);
            const k = In(M._fallback, f, b);
            if (typeof k < "u" && k !== f && k !== p) return k;
          } else if (!1 === M && typeof p < "u" && f !== p) return null;
        }
        return !1;
      }
      function pi(a, h, f, p) {
        const b = h._rootScopes,
          y = In(h._fallback, f, p),
          M = [...a, ...b],
          k = new Set();
        k.add(p);
        let C = Fn(k, M, f, y || f, p);
        return (
          !(
            null === C ||
            (typeof y < "u" && y !== f && ((C = Fn(k, M, y, C, p)), null === C))
          ) &&
          $i(Array.from(k), [""], b, y, () =>
            (function mi(a, h, f) {
              const p = a._getTarget();
              h in p || (p[h] = {});
              const b = p[h];
              return _t(b) && xt(f) ? f : b || {};
            })(h, f, p)
          )
        );
      }
      function Fn(a, h, f, p, b) {
        for (; f; ) f = Zi(a, h, f, p, b);
        return f;
      }
      function Bn(a, h) {
        for (const f of h) {
          if (!f) continue;
          const p = f[a];
          if (typeof p < "u") return p;
        }
      }
      function Xi(a) {
        let h = a._keys;
        return (
          h ||
            (h = a._keys =
              (function Bs(a) {
                const h = new Set();
                for (const f of a)
                  for (const p of Object.keys(f).filter(
                    (b) => !b.startsWith("_")
                  ))
                    h.add(p);
                return Array.from(h);
              })(a._scopes)),
          h
        );
      }
      function Hs(a, h, f, p) {
        const { iScale: b } = a,
          { key: y = "r" } = this._parsing,
          M = new Array(p);
        let k, C, T, F;
        for (k = 0, C = p; k < C; ++k)
          (T = k + f), (F = h[T]), (M[k] = { r: b.parse(re(F, y), T) });
        return M;
      }
      const bi = Number.EPSILON || 1e-14,
        Kt = (a, h) => h < a.length && !a[h].skip && a[h],
        Ki = (a) => ("x" === a ? "y" : "x");
      function Hn(a, h, f, p) {
        const b = a.skip ? h : a,
          y = h,
          M = f.skip ? h : f,
          k = Fi(y, b),
          C = Fi(M, y);
        let T = k / (k + C),
          F = C / (k + C);
        (T = isNaN(T) ? 0 : T), (F = isNaN(F) ? 0 : F);
        const $ = p * T,
          Z = p * F;
        return {
          previous: { x: y.x - $ * (M.x - b.x), y: y.y - $ * (M.y - b.y) },
          next: { x: y.x + Z * (M.x - b.x), y: y.y + Z * (M.y - b.y) },
        };
      }
      function _i(a, h, f) {
        return Math.max(Math.min(a, f), h);
      }
      function Vs(a, h, f, p, b) {
        let y, M, k, C;
        if (
          (h.spanGaps && (a = a.filter((T) => !T.skip)),
          "monotone" === h.cubicInterpolationMode)
        )
          !(function Ns(a, h = "x") {
            const f = Ki(h),
              p = a.length,
              b = Array(p).fill(0),
              y = Array(p);
            let M,
              k,
              C,
              T = Kt(a, 0);
            for (M = 0; M < p; ++M)
              if (((k = C), (C = T), (T = Kt(a, M + 1)), C)) {
                if (T) {
                  const F = T[h] - C[h];
                  b[M] = 0 !== F ? (T[f] - C[f]) / F : 0;
                }
                y[M] = k
                  ? T
                    ? Ii(b[M - 1]) !== Ii(b[M])
                      ? 0
                      : (b[M - 1] + b[M]) / 2
                    : b[M - 1]
                  : b[M];
              }
            (function Gt(a, h, f) {
              const p = a.length;
              let b,
                y,
                M,
                k,
                C,
                T = Kt(a, 0);
              for (let F = 0; F < p - 1; ++F)
                if (((C = T), (T = Kt(a, F + 1)), C && T)) {
                  if (Bt(h[F], 0, bi)) {
                    f[F] = f[F + 1] = 0;
                    continue;
                  }
                  (b = f[F] / h[F]),
                    (y = f[F + 1] / h[F]),
                    (k = Math.pow(b, 2) + Math.pow(y, 2)),
                    !(k <= 9) &&
                      ((M = 3 / Math.sqrt(k)),
                      (f[F] = b * M * h[F]),
                      (f[F + 1] = y * M * h[F]));
                }
            })(a, b, y),
              (function js(a, h, f = "x") {
                const p = Ki(f),
                  b = a.length;
                let y,
                  M,
                  k,
                  C = Kt(a, 0);
                for (let T = 0; T < b; ++T) {
                  if (((M = k), (k = C), (C = Kt(a, T + 1)), !k)) continue;
                  const F = k[f],
                    $ = k[p];
                  M &&
                    ((y = (F - M[f]) / 3),
                    (k[`cp1${f}`] = F - y),
                    (k[`cp1${p}`] = $ - y * h[T])),
                    C &&
                      ((y = (C[f] - F) / 3),
                      (k[`cp2${f}`] = F + y),
                      (k[`cp2${p}`] = $ + y * h[T]));
                }
              })(a, y, h);
          })(a, b);
        else {
          let T = p ? a[a.length - 1] : a[0];
          for (y = 0, M = a.length; y < M; ++y)
            (k = a[y]),
              (C = Hn(
                T,
                k,
                a[Math.min(y + 1, M - (p ? 0 : 1)) % M],
                h.tension
              )),
              (k.cp1x = C.previous.x),
              (k.cp1y = C.previous.y),
              (k.cp2x = C.next.x),
              (k.cp2y = C.next.y),
              (T = k);
        }
        h.capBezierPoints &&
          (function Gi(a, h) {
            let f,
              p,
              b,
              y,
              M,
              k = Ie(a[0], h);
            for (f = 0, p = a.length; f < p; ++f)
              (M = y),
                (y = k),
                (k = f < p - 1 && Ie(a[f + 1], h)),
                y &&
                  ((b = a[f]),
                  M &&
                    ((b.cp1x = _i(b.cp1x, h.left, h.right)),
                    (b.cp1y = _i(b.cp1y, h.top, h.bottom))),
                  k &&
                    ((b.cp2x = _i(b.cp2x, h.left, h.right)),
                    (b.cp2y = _i(b.cp2y, h.top, h.bottom))));
          })(a, f);
      }
      function Ws() {
        return typeof window < "u" && typeof document < "u";
      }
      function xi(a) {
        let h = a.parentNode;
        return h && "[object ShadowRoot]" === h.toString() && (h = h.host), h;
      }
      function Qt(a, h, f) {
        let p;
        return (
          "string" == typeof a
            ? ((p = parseInt(a, 10)),
              -1 !== a.indexOf("%") && (p = (p / 100) * h.parentNode[f]))
            : (p = a),
          p
        );
      }
      const yi = (a) => a.ownerDocument.defaultView.getComputedStyle(a, null),
        jn = ["top", "right", "bottom", "left"];
      function qt(a, h, f) {
        const p = {};
        f = f ? "-" + f : "";
        for (let b = 0; b < 4; b++) {
          const y = jn[b];
          p[y] = parseFloat(a[h + "-" + y + f]) || 0;
        }
        return (p.width = p.left + p.right), (p.height = p.top + p.bottom), p;
      }
      const Nn = (a, h, f) => (a > 0 || h > 0) && (!f || !f.shadowRoot);
      function $s(a, h) {
        if ("native" in a) return a;
        const { canvas: f, currentDevicePixelRatio: p } = h,
          b = yi(f),
          y = "border-box" === b.boxSizing,
          M = qt(b, "padding"),
          k = qt(b, "border", "width"),
          {
            x: C,
            y: T,
            box: F,
          } = (function Ys(a, h) {
            const f = a.touches,
              p = f && f.length ? f[0] : a,
              { offsetX: b, offsetY: y } = p;
            let k,
              C,
              M = !1;
            if (Nn(b, y, a.target)) (k = b), (C = y);
            else {
              const T = h.getBoundingClientRect();
              (k = p.clientX - T.left), (C = p.clientY - T.top), (M = !0);
            }
            return { x: k, y: C, box: M };
          })(a, f),
          $ = M.left + (F && k.left),
          Z = M.top + (F && k.top);
        let { width: ot, height: dt } = h;
        return (
          y && ((ot -= M.width + k.width), (dt -= M.height + k.height)),
          {
            x: Math.round((((C - $) / ot) * f.width) / p),
            y: Math.round((((T - Z) / dt) * f.height) / p),
          }
        );
      }
      const vi = (a) => Math.round(10 * a) / 10;
      function Vn(a, h, f, p) {
        const b = yi(a),
          y = qt(b, "margin"),
          M = Qt(b.maxWidth, a, "clientWidth") || ii,
          k = Qt(b.maxHeight, a, "clientHeight") || ii,
          C = (function Us(a, h, f) {
            let p, b;
            if (void 0 === h || void 0 === f) {
              const y = xi(a);
              if (y) {
                const M = y.getBoundingClientRect(),
                  k = yi(y),
                  C = qt(k, "border", "width"),
                  T = qt(k, "padding");
                (h = M.width - T.width - C.width),
                  (f = M.height - T.height - C.height),
                  (p = Qt(k.maxWidth, y, "clientWidth")),
                  (b = Qt(k.maxHeight, y, "clientHeight"));
              } else (h = a.clientWidth), (f = a.clientHeight);
            }
            return {
              width: h,
              height: f,
              maxWidth: p || ii,
              maxHeight: b || ii,
            };
          })(a, h, f);
        let { width: T, height: F } = C;
        if ("content-box" === b.boxSizing) {
          const Z = qt(b, "border", "width"),
            ot = qt(b, "padding");
          (T -= ot.width + Z.width), (F -= ot.height + Z.height);
        }
        return (
          (T = Math.max(0, T - y.width)),
          (F = Math.max(0, p ? T / p : F - y.height)),
          (T = vi(Math.min(T, M, C.maxWidth))),
          (F = vi(Math.min(F, k, C.maxHeight))),
          T && !F && (F = vi(T / 2)),
          (void 0 !== h || void 0 !== f) &&
            p &&
            C.height &&
            F > C.height &&
            ((F = C.height), (T = vi(Math.floor(F * p)))),
          { width: T, height: F }
        );
      }
      function Zs(a, h, f) {
        const p = h || 1,
          b = Math.floor(a.height * p),
          y = Math.floor(a.width * p);
        (a.height = Math.floor(a.height)), (a.width = Math.floor(a.width));
        const M = a.canvas;
        return (
          M.style &&
            (f || (!M.style.height && !M.style.width)) &&
            ((M.style.height = `${a.height}px`),
            (M.style.width = `${a.width}px`)),
          (a.currentDevicePixelRatio !== p ||
            M.height !== b ||
            M.width !== y) &&
            ((a.currentDevicePixelRatio = p),
            (M.height = b),
            (M.width = y),
            a.ctx.setTransform(p, 0, 0, p, 0, 0),
            !0)
        );
      }
      const Xs = (function () {
        let a = !1;
        try {
          const h = {
            get passive() {
              return (a = !0), !1;
            },
          };
          window.addEventListener("test", null, h),
            window.removeEventListener("test", null, h);
        } catch {}
        return a;
      })();
      function Ks(a, h) {
        const f = (function Qi(a, h) {
            return yi(a).getPropertyValue(h);
          })(a, h),
          p = f && f.match(/^(\d+)(\.\d+)?px$/);
        return p ? +p[1] : void 0;
      }
      function ce(a, h, f, p) {
        return { x: a.x + f * (h.x - a.x), y: a.y + f * (h.y - a.y) };
      }
      function Wn(a, h, f, p) {
        return {
          x: a.x + f * (h.x - a.x),
          y:
            "middle" === p
              ? f < 0.5
                ? a.y
                : h.y
              : "after" === p
              ? f < 1
                ? a.y
                : h.y
              : f > 0
              ? h.y
              : a.y,
        };
      }
      function Yn(a, h, f, p) {
        const b = { x: a.cp2x, y: a.cp2y },
          y = { x: h.cp1x, y: h.cp1y },
          M = ce(a, b, f),
          k = ce(b, y, f),
          C = ce(y, h, f),
          T = ce(M, k, f),
          F = ce(k, C, f);
        return ce(T, F, f);
      }
      const Gs = function (a, h) {
          return {
            x: (f) => a + a + h - f,
            setWidth(f) {
              h = f;
            },
            textAlign: (f) =>
              "center" === f ? f : "right" === f ? "left" : "right",
            xPlus: (f, p) => f - p,
            leftForLtr: (f, p) => f - p,
          };
        },
        rt = function () {
          return {
            x: (a) => a,
            setWidth(a) {},
            textAlign: (a) => a,
            xPlus: (a, h) => a + h,
            leftForLtr: (a, h) => a,
          };
        };
      function Qs(a, h, f) {
        return a ? Gs(h, f) : rt();
      }
      function qi(a, h) {
        let f, p;
        ("ltr" === h || "rtl" === h) &&
          ((f = a.canvas.style),
          (p = [
            f.getPropertyValue("direction"),
            f.getPropertyPriority("direction"),
          ]),
          f.setProperty("direction", h, "important"),
          (a.prevTextDirection = p));
      }
      function qs(a, h) {
        void 0 !== h &&
          (delete a.prevTextDirection,
          a.canvas.style.setProperty("direction", h[0], h[1]));
      }
      function Mi(a) {
        return "angle" === a
          ? { between: Bi, compare: Ee, normalize: Ht }
          : { between: dn, compare: (h, f) => h - f, normalize: (h) => h };
      }
      function Si({ start: a, end: h, count: f, loop: p, style: b }) {
        return {
          start: a % f,
          end: h % f,
          loop: p && (h - a + 1) % f == 0,
          style: b,
        };
      }
      function Ji(a, h, f) {
        if (!f) return [a];
        const { property: p, start: b, end: y } = f,
          M = h.length,
          { compare: k, between: C, normalize: T } = Mi(p),
          {
            start: F,
            end: $,
            loop: Z,
            style: ot,
          } = (function ke(a, h, f) {
            const { property: p, start: b, end: y } = f,
              { between: M, normalize: k } = Mi(p),
              C = h.length;
            let Z,
              ot,
              { start: T, end: F, loop: $ } = a;
            if ($) {
              for (
                T += C, F += C, Z = 0, ot = C;
                Z < ot && M(k(h[T % C][p]), b, y);
                ++Z
              )
                T--, F--;
              (T %= C), (F %= C);
            }
            return (
              F < T && (F += C), { start: T, end: F, loop: $, style: a.style }
            );
          })(a, h, f),
          dt = [];
        let bt,
          Pe,
          Ne,
          K = !1,
          Y = null;
        for (let Jt = F, qn = F; Jt <= $; ++Jt)
          (Pe = h[Jt % M]),
            !Pe.skip &&
              ((bt = T(Pe[p])),
              bt !== Ne &&
                ((K = C(bt, b, y)),
                null === Y &&
                  (K || (C(b, Ne, bt) && 0 !== k(b, Ne))) &&
                  (Y = 0 === k(bt, b) ? Jt : qn),
                null !== Y &&
                  (!K || 0 === k(y, bt) || C(y, Ne, bt)) &&
                  (dt.push(
                    Si({ start: Y, end: Jt, loop: Z, count: M, style: ot })
                  ),
                  (Y = null)),
                (qn = Jt),
                (Ne = bt)));
        return (
          null !== Y &&
            dt.push(Si({ start: Y, end: $, loop: Z, count: M, style: ot })),
          dt
        );
      }
      function tn(a, h) {
        const f = [],
          p = a.segments;
        for (let b = 0; b < p.length; b++) {
          const y = Ji(p[b], a.points, h);
          y.length && f.push(...y);
        }
        return f;
      }
      function Un(a, h) {
        const f = a.points,
          p = a.options.spanGaps,
          b = f.length;
        if (!b) return [];
        const y = !!a._loop,
          { start: M, end: k } = (function Js(a, h, f, p) {
            let b = 0,
              y = h - 1;
            if (f && !p) for (; b < h && !a[b].skip; ) b++;
            for (; b < h && a[b].skip; ) b++;
            for (b %= h, f && (y += b); y > b && a[y % h].skip; ) y--;
            return (y %= h), { start: b, end: y };
          })(f, b, y, p);
        return Zn(
          a,
          !0 === p
            ? [{ start: M, end: k, loop: y }]
            : (function $n(a, h, f, p) {
                const b = a.length,
                  y = [];
                let C,
                  M = h,
                  k = a[h];
                for (C = h + 1; C <= f; ++C) {
                  const T = a[C % b];
                  T.skip || T.stop
                    ? k.skip ||
                      (y.push({
                        start: h % b,
                        end: (C - 1) % b,
                        loop: (p = !1),
                      }),
                      (h = M = T.stop ? C : null))
                    : ((M = C), k.skip && (h = C)),
                    (k = T);
                }
                return (
                  null !== M && y.push({ start: h % b, end: M % b, loop: p }), y
                );
              })(
                f,
                M,
                k < M ? k + b : k,
                !!a._fullLoop && 0 === M && k === b - 1
              ),
          f,
          h
        );
      }
      function Zn(a, h, f, p) {
        return p && p.setContext && f
          ? (function Xn(a, h, f, p) {
              const b = a._chart.getContext(),
                y = Kn(a.options),
                {
                  _datasetIndex: M,
                  options: { spanGaps: k },
                } = a,
                C = f.length,
                T = [];
              let F = y,
                $ = h[0].start,
                Z = $;
              function ot(dt, K, Y, bt) {
                const Pe = k ? -1 : 1;
                if (dt !== K) {
                  for (dt += C; f[dt % C].skip; ) dt -= Pe;
                  for (; f[K % C].skip; ) K += Pe;
                  dt % C != K % C &&
                    (T.push({ start: dt % C, end: K % C, loop: Y, style: bt }),
                    (F = bt),
                    ($ = K % C));
                }
              }
              for (const dt of h) {
                $ = k ? $ : dt.start;
                let Y,
                  K = f[$ % C];
                for (Z = $ + 1; Z <= dt.end; Z++) {
                  const bt = f[Z % C];
                  (Y = Kn(
                    p.setContext(
                      je(b, {
                        type: "segment",
                        p0: K,
                        p1: bt,
                        p0DataIndex: (Z - 1) % C,
                        p1DataIndex: Z % C,
                        datasetIndex: M,
                      })
                    )
                  )),
                    en(Y, F) && ot($, Z - 1, dt.loop, F),
                    (K = bt),
                    (F = Y);
                }
                $ < Z - 1 && ot($, Z - 1, dt.loop, F);
              }
              return T;
            })(a, h, f, p)
          : h;
      }
      function Kn(a) {
        return {
          backgroundColor: a.backgroundColor,
          borderCapStyle: a.borderCapStyle,
          borderDash: a.borderDash,
          borderDashOffset: a.borderDashOffset,
          borderJoinStyle: a.borderJoinStyle,
          borderWidth: a.borderWidth,
          borderColor: a.borderColor,
        };
      }
      function en(a, h) {
        if (!h) return !1;
        const f = [],
          p = function (b, y) {
            return Xt(y) ? (f.includes(y) || f.push(y), f.indexOf(y)) : y;
          };
        return JSON.stringify(a, p) !== JSON.stringify(h, p);
      }
    },
    26254: (zo, wi, ct) => {
      ct.d(wi, {
        $: () => fe,
        $O: () => Qe,
        Jp: () => se,
        KJ: () => ge,
        u9: () => Tt,
        yG: () => ue,
      });
      var R = ct(49388),
        u = ct(96814),
        E = ct(65879),
        Ot = ct(8324),
        St = ct(62595),
        Dt = ct(97582),
        Ve = ct(78645),
        mt = ct(59773),
        Ut = ct(37398),
        We = ct(40874),
        ie = ct(1608),
        de = ct(28802);
      function ki(N, X) {
        if ((1 & N && (E.ynx(0), E._UZ(1, "span", 9), E.BQk()), 2 & N)) {
          const q = X.$implicit,
            G = E.oxw(2);
          E.xp6(1), E.Q6J("nzType", q || G.getBackIcon());
        }
      }
      function Ye(N, X) {
        if (1 & N) {
          const q = E.EpF();
          E.TgZ(0, "div", 6),
            E.NdJ("click", function () {
              E.CHM(q);
              const lt = E.oxw();
              return E.KtG(lt.onBack());
            }),
            E.TgZ(1, "div", 7),
            E.YNc(2, ki, 2, 1, "ng-container", 8),
            E.qZA()();
        }
        if (2 & N) {
          const q = E.oxw();
          E.xp6(2), E.Q6J("nzStringTemplateOutlet", q.nzBackIcon);
        }
      }
      function $e(N, X) {
        if ((1 & N && (E.ynx(0), E._uU(1), E.BQk()), 2 & N)) {
          const q = E.oxw(2);
          E.xp6(1), E.Oqu(q.nzTitle);
        }
      }
      function Pi(N, X) {
        if (
          (1 & N &&
            (E.TgZ(0, "span", 10),
            E.YNc(1, $e, 2, 1, "ng-container", 8),
            E.qZA()),
          2 & N)
        ) {
          const q = E.oxw();
          E.xp6(1), E.Q6J("nzStringTemplateOutlet", q.nzTitle);
        }
      }
      function Ue(N, X) {
        1 & N && E.Hsn(0, 6, ["*ngIf", "!nzTitle"]);
      }
      function Ze(N, X) {
        if ((1 & N && (E.ynx(0), E._uU(1), E.BQk()), 2 & N)) {
          const q = E.oxw(2);
          E.xp6(1), E.Oqu(q.nzSubtitle);
        }
      }
      function Ci(N, X) {
        if (
          (1 & N &&
            (E.TgZ(0, "span", 11),
            E.YNc(1, Ze, 2, 1, "ng-container", 8),
            E.qZA()),
          2 & N)
        ) {
          const q = E.oxw();
          E.xp6(1), E.Q6J("nzStringTemplateOutlet", q.nzSubtitle);
        }
      }
      function Oi(N, X) {
        1 & N && E.Hsn(0, 7, ["*ngIf", "!nzSubtitle"]);
      }
      const Xe = [
          [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
          [["nz-avatar", "nz-page-header-avatar", ""]],
          [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
          [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
          [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
          [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
          [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
          [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
        ],
        At = [
          "nz-breadcrumb[nz-page-header-breadcrumb]",
          "nz-avatar[nz-page-header-avatar]",
          "nz-page-header-tags, [nz-page-header-tags]",
          "nz-page-header-extra, [nz-page-header-extra]",
          "nz-page-header-content, [nz-page-header-content]",
          "nz-page-header-footer, [nz-page-header-footer]",
          "nz-page-header-title, [nz-page-header-title]",
          "nz-page-header-subtitle, [nz-page-header-subtitle]",
        ];
      let Tt = (() => {
          var N;
          class X {}
          return (
            ((N = X).ɵfac = function (G) {
              return new (G || N)();
            }),
            (N.ɵdir = E.lG2({
              type: N,
              selectors: [
                ["nz-page-header-title"],
                ["", "nz-page-header-title", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-title"],
              exportAs: ["nzPageHeaderTitle"],
            })),
            X
          );
        })(),
        ue = (() => {
          var N;
          class X {}
          return (
            ((N = X).ɵfac = function (G) {
              return new (G || N)();
            }),
            (N.ɵdir = E.lG2({
              type: N,
              selectors: [
                ["nz-page-header-subtitle"],
                ["", "nz-page-header-subtitle", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-sub-title"],
              exportAs: ["nzPageHeaderSubtitle"],
            })),
            X
          );
        })(),
        se = (() => {
          var N;
          class X {}
          return (
            ((N = X).ɵfac = function (G) {
              return new (G || N)();
            }),
            (N.ɵdir = E.lG2({
              type: N,
              selectors: [
                ["nz-page-header-extra"],
                ["", "nz-page-header-extra", ""],
              ],
              hostAttrs: [1, "ant-page-header-heading-extra"],
              exportAs: ["nzPageHeaderExtra"],
            })),
            X
          );
        })(),
        fe = (() => {
          var N;
          class X {}
          return (
            ((N = X).ɵfac = function (G) {
              return new (G || N)();
            }),
            (N.ɵdir = E.lG2({
              type: N,
              selectors: [
                ["nz-page-header-footer"],
                ["", "nz-page-header-footer", ""],
              ],
              hostAttrs: [1, "ant-page-header-footer"],
              exportAs: ["nzPageHeaderFooter"],
            })),
            X
          );
        })(),
        Ke = (() => {
          var N;
          class X {}
          return (
            ((N = X).ɵfac = function (G) {
              return new (G || N)();
            }),
            (N.ɵdir = E.lG2({
              type: N,
              selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
              exportAs: ["nzPageHeaderBreadcrumb"],
            })),
            X
          );
        })(),
        Qe = (() => {
          var N;
          class X {
            constructor(G, lt, zt, Zt, Lt, qe) {
              (this.location = G),
                (this.nzConfigService = lt),
                (this.elementRef = zt),
                (this.nzResizeObserver = Zt),
                (this.cdr = Lt),
                (this.directionality = qe),
                (this._nzModuleName = "pageHeader"),
                (this.nzBackIcon = null),
                (this.nzGhost = !0),
                (this.nzBack = new E.vpe()),
                (this.compact = !1),
                (this.destroy$ = new Ve.x()),
                (this.dir = "ltr");
            }
            ngOnInit() {
              this.directionality.change
                ?.pipe((0, mt.R)(this.destroy$))
                .subscribe((G) => {
                  (this.dir = G), this.cdr.detectChanges();
                }),
                (this.dir = this.directionality.value);
            }
            ngAfterViewInit() {
              this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(
                  (0, Ut.U)(([G]) => G.contentRect.width),
                  (0, mt.R)(this.destroy$)
                )
                .subscribe((G) => {
                  (this.compact = G < 768), this.cdr.markForCheck();
                });
            }
            onBack() {
              if (this.nzBack.observers.length) this.nzBack.emit();
              else {
                if (!this.location)
                  throw new Error(
                    `${ie.Bq} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`
                  );
                this.location.back();
              }
            }
            ngOnDestroy() {
              this.destroy$.next(), this.destroy$.complete();
            }
            getBackIcon() {
              return "rtl" === this.dir ? "arrow-right" : "arrow-left";
            }
          }
          return (
            ((N = X).ɵfac = function (G) {
              return new (G || N)(
                E.Y36(u.Ye, 8),
                E.Y36(We.jY),
                E.Y36(E.SBq),
                E.Y36(de.D3),
                E.Y36(E.sBO),
                E.Y36(R.Is, 8)
              );
            }),
            (N.ɵcmp = E.Xpm({
              type: N,
              selectors: [["nz-page-header"]],
              contentQueries: function (G, lt, zt) {
                if ((1 & G && (E.Suo(zt, fe, 5), E.Suo(zt, Ke, 5)), 2 & G)) {
                  let Zt;
                  E.iGM((Zt = E.CRH())) && (lt.nzPageHeaderFooter = Zt.first),
                    E.iGM((Zt = E.CRH())) &&
                      (lt.nzPageHeaderBreadcrumb = Zt.first);
                }
              },
              hostAttrs: [1, "ant-page-header"],
              hostVars: 10,
              hostBindings: function (G, lt) {
                2 & G &&
                  E.ekj("has-footer", lt.nzPageHeaderFooter)(
                    "ant-page-header-ghost",
                    lt.nzGhost
                  )("has-breadcrumb", lt.nzPageHeaderBreadcrumb)(
                    "ant-page-header-compact",
                    lt.compact
                  )("ant-page-header-rtl", "rtl" === lt.dir);
              },
              inputs: {
                nzBackIcon: "nzBackIcon",
                nzTitle: "nzTitle",
                nzSubtitle: "nzSubtitle",
                nzGhost: "nzGhost",
              },
              outputs: { nzBack: "nzBack" },
              exportAs: ["nzPageHeader"],
              ngContentSelectors: At,
              decls: 13,
              vars: 5,
              consts: [
                [1, "ant-page-header-heading"],
                [1, "ant-page-header-heading-left"],
                ["class", "ant-page-header-back", 3, "click", 4, "ngIf"],
                ["class", "ant-page-header-heading-title", 4, "ngIf"],
                [4, "ngIf"],
                ["class", "ant-page-header-heading-sub-title", 4, "ngIf"],
                [1, "ant-page-header-back", 3, "click"],
                [
                  "role",
                  "button",
                  "tabindex",
                  "0",
                  1,
                  "ant-page-header-back-button",
                ],
                [4, "nzStringTemplateOutlet"],
                ["nz-icon", "", "nzTheme", "outline", 3, "nzType"],
                [1, "ant-page-header-heading-title"],
                [1, "ant-page-header-heading-sub-title"],
              ],
              template: function (G, lt) {
                1 & G &&
                  (E.F$t(Xe),
                  E.Hsn(0),
                  E.TgZ(1, "div", 0)(2, "div", 1),
                  E.YNc(3, Ye, 3, 1, "div", 2),
                  E.Hsn(4, 1),
                  E.YNc(5, Pi, 2, 1, "span", 3),
                  E.YNc(6, Ue, 1, 0, "ng-content", 4),
                  E.YNc(7, Ci, 2, 1, "span", 5),
                  E.YNc(8, Oi, 1, 0, "ng-content", 4),
                  E.Hsn(9, 2),
                  E.qZA(),
                  E.Hsn(10, 3),
                  E.qZA(),
                  E.Hsn(11, 4),
                  E.Hsn(12, 5)),
                  2 & G &&
                    (E.xp6(3),
                    E.Q6J("ngIf", null !== lt.nzBackIcon),
                    E.xp6(2),
                    E.Q6J("ngIf", lt.nzTitle),
                    E.xp6(1),
                    E.Q6J("ngIf", !lt.nzTitle),
                    E.xp6(1),
                    E.Q6J("ngIf", lt.nzSubtitle),
                    E.xp6(1),
                    E.Q6J("ngIf", !lt.nzSubtitle));
              },
              dependencies: [u.O5, Ot.f, St.Ls],
              encapsulation: 2,
              changeDetection: 0,
            })),
            (0, Dt.gn)([(0, We.oS)()], X.prototype, "nzGhost", void 0),
            X
          );
        })(),
        ge = (() => {
          var N;
          class X {}
          return (
            ((N = X).ɵfac = function (G) {
              return new (G || N)();
            }),
            (N.ɵmod = E.oAB({ type: N })),
            (N.ɵinj = E.cJS({ imports: [R.vT, u.ez, Ot.T, St.PV] })),
            X
          );
        })();
    },
    47246: (zo, wi, ct) => {
      ct.d(wi, { jh: () => es, vQ: () => no });
      var R = ct(65879),
        u = ct(17816),
        E = ct(98137),
        Ot = ct(65619),
        St = ct(93997);
      const Ut = function mt(_, w) {
          return _ === w || (_ != _ && w != w);
        },
        ie = function We(_, w) {
          for (var D = _.length; D--; ) if (Ut(_[D][0], w)) return D;
          return -1;
        };
      var ki = Array.prototype.splice;
      function At(_) {
        var w = -1,
          D = null == _ ? 0 : _.length;
        for (this.clear(); ++w < D; ) {
          var I = _[w];
          this.set(I[0], I[1]);
        }
      }
      (At.prototype.clear = function Dt() {
        (this.__data__ = []), (this.size = 0);
      }),
        (At.prototype.delete = function Ye(_) {
          var w = this.__data__,
            D = ie(w, _);
          return !(
            D < 0 ||
            (D == w.length - 1 ? w.pop() : ki.call(w, D, 1), --this.size, 0)
          );
        }),
        (At.prototype.get = function Pi(_) {
          var w = this.__data__,
            D = ie(w, _);
          return D < 0 ? void 0 : w[D][1];
        }),
        (At.prototype.has = function Ze(_) {
          return ie(this.__data__, _) > -1;
        }),
        (At.prototype.set = function Oi(_, w) {
          var D = this.__data__,
            I = ie(D, _);
          return I < 0 ? (++this.size, D.push([_, w])) : (D[I][1] = w), this;
        });
      const Tt = At,
        Ai =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global;
      var ge =
        "object" == typeof self && self && self.Object === Object && self;
      const X = Ai || ge || Function("return this")();
      var q = X.Symbol,
        lt = Object.prototype,
        zt = lt.hasOwnProperty,
        Zt = lt.toString,
        Lt = q ? q.toStringTag : void 0;
      var pe = Object.prototype.toString;
      var _t = q ? q.toStringTag : void 0;
      const De = function xt(_) {
          return null == _
            ? void 0 === _
              ? "[object Undefined]"
              : "[object Null]"
            : _t && _t in Object(_)
            ? (function qe(_) {
                var w = zt.call(_, Lt),
                  D = _[Lt];
                try {
                  _[Lt] = void 0;
                  var I = !0;
                } catch {}
                var Q = Zt.call(_);
                return I && (w ? (_[Lt] = D) : delete _[Lt]), Q;
              })(_)
            : (function ho(_) {
                return pe.call(_);
              })(_);
        },
        yt = function uo(_) {
          var w = typeof _;
          return null != _ && ("object" == w || "function" == w);
        },
        me = function Ae(_) {
          if (!yt(_)) return !1;
          var w = De(_);
          return (
            "[object Function]" == w ||
            "[object GeneratorFunction]" == w ||
            "[object AsyncFunction]" == w ||
            "[object Proxy]" == w
          );
        };
      var _,
        ti = X["__core-js_shared__"],
        be = (_ = /[^.]+$/.exec((ti && ti.keys && ti.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + _
          : "";
      var Ei = Function.prototype.toString;
      var Ri = /^\[object .+?Constructor\]$/,
        ft = RegExp(
          "^" +
            Function.prototype.toString
              .call(Object.prototype.hasOwnProperty)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      const us = function Et(_) {
          return (
            !(
              !yt(_) ||
              (function ei(_) {
                return !!be && be in _;
              })(_)
            ) &&
            (me(_) ? ft : Ri).test(
              (function Te(_) {
                if (null != _) {
                  try {
                    return Ei.call(_);
                  } catch {}
                  try {
                    return _ + "";
                  } catch {}
                }
                return "";
              })(_)
            )
          );
        },
        Ft = function vt(_, w) {
          var D = (function ii(_, w) {
            return _?.[w];
          })(_, w);
          return us(D) ? D : void 0;
        },
        _e = Ft(X, "Map"),
        Bt = Ft(Object, "create");
      var bs = Object.prototype.hasOwnProperty;
      var Ee = Object.prototype.hasOwnProperty;
      function jt(_) {
        var w = -1,
          D = null == _ ? 0 : _.length;
        for (this.clear(); ++w < D; ) {
          var I = _[w];
          this.set(I[0], I[1]);
        }
      }
      (jt.prototype.clear = function fs() {
        (this.__data__ = Bt ? Bt(null) : {}), (this.size = 0);
      }),
        (jt.prototype.delete = function gs(_) {
          var w = this.has(_) && delete this.__data__[_];
          return (this.size -= w ? 1 : 0), w;
        }),
        (jt.prototype.get = function ni(_) {
          var w = this.__data__;
          if (Bt) {
            var D = w[_];
            return "__lodash_hash_undefined__" === D ? void 0 : D;
          }
          return bs.call(w, _) ? w[_] : void 0;
        }),
        (jt.prototype.has = function Ht(_) {
          var w = this.__data__;
          return Bt ? void 0 !== w[_] : Ee.call(w, _);
        }),
        (jt.prototype.set = function xs(_, w) {
          var D = this.__data__;
          return (
            (this.size += this.has(_) ? 0 : 1),
            (D[_] = Bt && void 0 === w ? "__lodash_hash_undefined__" : w),
            this
          );
        });
      const xe = jt,
        oi = function Ss(_, w) {
          var D = _.__data__;
          return (function wt(_) {
            var w = typeof _;
            return "string" == w ||
              "number" == w ||
              "symbol" == w ||
              "boolean" == w
              ? "__proto__" !== _
              : null === _;
          })(w)
            ? D["string" == typeof w ? "string" : "hash"]
            : D.map;
        };
      function ye(_) {
        var w = -1,
          D = null == _ ? 0 : _.length;
        for (this.clear(); ++w < D; ) {
          var I = _[w];
          this.set(I[0], I[1]);
        }
      }
      (ye.prototype.clear = function ys() {
        (this.size = 0),
          (this.__data__ = {
            hash: new xe(),
            map: new (_e || Tt)(),
            string: new xe(),
          });
      }),
        (ye.prototype.delete = function go(_) {
          var w = oi(this, _).delete(_);
          return (this.size -= w ? 1 : 0), w;
        }),
        (ye.prototype.get = function ri(_) {
          return oi(this, _).get(_);
        }),
        (ye.prototype.has = function ks(_) {
          return oi(this, _).has(_);
        }),
        (ye.prototype.set = function gn(_, w) {
          var D = oi(this, _),
            I = D.size;
          return D.set(_, w), (this.size += D.size == I ? 0 : 1), this;
        });
      const ai = ye;
      function Xt(_) {
        var w = (this.__data__ = new Tt(_));
        this.size = w.size;
      }
      (Xt.prototype.clear = function ue() {
        (this.__data__ = new Tt()), (this.size = 0);
      }),
        (Xt.prototype.delete = function ne(_) {
          var w = this.__data__,
            D = w.delete(_);
          return (this.size = w.size), D;
        }),
        (Xt.prototype.get = function fe(_) {
          return this.__data__.get(_);
        }),
        (Xt.prototype.has = function It(_) {
          return this.__data__.has(_);
        }),
        (Xt.prototype.set = function Hi(_, w) {
          var D = this.__data__;
          if (D instanceof Tt) {
            var I = D.__data__;
            if (!_e || I.length < 199)
              return I.push([_, w]), (this.size = ++D.size), this;
            D = this.__data__ = new ai(I);
          }
          return D.set(_, w), (this.size = D.size), this;
        });
      const Ps = Xt;
      var ji = (function () {
        try {
          var _ = Ft(Object, "defineProperty");
          return _({}, "", {}), _;
        } catch {}
      })();
      const Nt = ji,
        Ni = function ci(_, w, D) {
          "__proto__" == w && Nt
            ? Nt(_, w, {
                configurable: !0,
                enumerable: !0,
                value: D,
                writable: !0,
              })
            : (_[w] = D);
        },
        hi = function Cs(_, w, D) {
          ((void 0 !== D && !Ut(_[w], D)) || (void 0 === D && !(w in _))) &&
            Ni(_, w, D);
        };
      var mn = (function Os(_) {
        return function (w, D, I) {
          for (var Q = -1, st = Object(w), it = I(w), et = it.length; et--; ) {
            var ht = it[_ ? et : ++Q];
            if (!1 === D(st[ht], ht, st)) break;
          }
          return w;
        };
      })();
      const Ds = mn;
      var Vi =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        bn =
          Vi &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        Re = bn && bn.exports === Vi ? X.Buffer : void 0,
        Me = Re ? Re.allocUnsafe : void 0;
      const di = X.Uint8Array,
        vn = function Ts(_, w) {
          var D = w
            ? (function ui(_) {
                var w = new _.constructor(_.byteLength);
                return new di(w).set(new di(_)), w;
              })(_.buffer)
            : _.buffer;
          return new _.constructor(D, _.byteOffset, _.length);
        };
      var Ie = Object.create,
        wn = (function () {
          function _() {}
          return function (w) {
            if (!yt(w)) return {};
            if (Ie) return Ie(w);
            _.prototype = w;
            var D = new _();
            return (_.prototype = void 0), D;
          };
        })();
      const fi = wn;
      var kn = (function Fe(_, w) {
        return function (D) {
          return _(w(D));
        };
      })(Object.getPrototypeOf, Object);
      const Pn = kn;
      var zs = Object.prototype;
      const Cn = function Ls(_) {
          var w = _ && _.constructor;
          return _ === (("function" == typeof w && w.prototype) || zs);
        },
        Be = function An(_) {
          return null != _ && "object" == typeof _;
        },
        Yi = function He(_) {
          return Be(_) && "[object Arguments]" == De(_);
        };
      var Tn = Object.prototype,
        Es = Tn.hasOwnProperty,
        Rs = Tn.propertyIsEnumerable,
        zn = Yi(
          (function () {
            return arguments;
          })()
        )
          ? Yi
          : function (_) {
              return Be(_) && Es.call(_, "callee") && !Rs.call(_, "callee");
            };
      const je = zn,
        ae = Array.isArray,
        le = function Se(_) {
          return (
            "number" == typeof _ &&
            _ > -1 &&
            _ % 1 == 0 &&
            _ <= 9007199254740991
          );
        },
        Ui = function En(_) {
          return null != _ && le(_.length) && !me(_);
        };
      var Zi =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        pi =
          Zi &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        mi = pi && pi.exports === Zi ? X.Buffer : void 0;
      const Xi =
        (mi ? mi.isBuffer : void 0) ||
        function In() {
          return !1;
        };
      var Kt = Function.prototype.toString,
        Ki = Object.prototype.hasOwnProperty,
        Hn = Kt.call(Object);
      var rt = {};
      (rt["[object Float32Array]"] =
        rt["[object Float64Array]"] =
        rt["[object Int8Array]"] =
        rt["[object Int16Array]"] =
        rt["[object Int32Array]"] =
        rt["[object Uint8Array]"] =
        rt["[object Uint8ClampedArray]"] =
        rt["[object Uint16Array]"] =
        rt["[object Uint32Array]"] =
          !0),
        (rt["[object Arguments]"] =
          rt["[object Array]"] =
          rt["[object ArrayBuffer]"] =
          rt["[object Boolean]"] =
          rt["[object DataView]"] =
          rt["[object Date]"] =
          rt["[object Error]"] =
          rt["[object Function]"] =
          rt["[object Map]"] =
          rt["[object Number]"] =
          rt["[object Object]"] =
          rt["[object RegExp]"] =
          rt["[object Set]"] =
          rt["[object String]"] =
          rt["[object WeakMap]"] =
            !1);
      var Si =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        ke =
          Si &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        tn = ke && ke.exports === Si && Ai.process,
        Js = (function () {
          try {
            return (
              (ke && ke.require && ke.require("util").types) ||
              (tn && tn.binding && tn.binding("util"))
            );
          } catch {}
        })(),
        Un = Js && Js.isTypedArray;
      const Xn = Un
          ? (function qs(_) {
              return function (w) {
                return _(w);
              };
            })(Un)
          : function Qs(_) {
              return Be(_) && le(_.length) && !!rt[De(_)];
            },
        en = function Kn(_, w) {
          if (
            ("constructor" !== w || "function" != typeof _[w]) &&
            "__proto__" != w
          )
            return _[w];
        };
      var h = Object.prototype.hasOwnProperty;
      const p = function f(_, w, D) {
        var I = _[w];
        (!h.call(_, w) || !Ut(I, D) || (void 0 === D && !(w in _))) &&
          Ni(_, w, D);
      };
      var T = /^(?:0|[1-9]\d*)$/;
      const $ = function F(_, w) {
        var D = typeof _;
        return (
          !!(w = w ?? 9007199254740991) &&
          ("number" == D || ("symbol" != D && T.test(_))) &&
          _ > -1 &&
          _ % 1 == 0 &&
          _ < w
        );
      };
      var ot = Object.prototype.hasOwnProperty;
      const K = function dt(_, w) {
        var D = ae(_),
          I = !D && je(_),
          Q = !D && !I && Xi(_),
          st = !D && !I && !Q && Xn(_),
          it = D || I || Q || st,
          et = it
            ? (function M(_, w) {
                for (var D = -1, I = Array(_); ++D < _; ) I[D] = w(D);
                return I;
              })(_.length, String)
            : [],
          ht = et.length;
        for (var Wt in _)
          (w || ot.call(_, Wt)) &&
            (!it ||
              !(
                "length" == Wt ||
                (Q && ("offset" == Wt || "parent" == Wt)) ||
                (st &&
                  ("buffer" == Wt ||
                    "byteLength" == Wt ||
                    "byteOffset" == Wt)) ||
                $(Wt, ht)
              )) &&
            et.push(Wt);
        return et;
      };
      var Ne = Object.prototype.hasOwnProperty;
      const Gn = function to(_) {
          if (!yt(_))
            return (function Y(_) {
              var w = [];
              if (null != _) for (var D in Object(_)) w.push(D);
              return w;
            })(_);
          var w = Cn(_),
            D = [];
          for (var I in _)
            ("constructor" == I && (w || !Ne.call(_, I))) || D.push(I);
          return D;
        },
        Qn = function eo(_) {
          return Ui(_) ? K(_, !0) : Gn(_);
        },
        qn = function Jt(_) {
          return (function b(_, w, D, I) {
            var Q = !D;
            D || (D = {});
            for (var st = -1, it = w.length; ++st < it; ) {
              var et = w[st],
                ht = I ? I(D[et], _[et], et, D, _) : void 0;
              void 0 === ht && (ht = _[et]), Q ? Ni(D, et, ht) : p(D, et, ht);
            }
            return D;
          })(_, Qn(_));
        },
        Jn = function Lo(_, w, D, I, Q, st, it) {
          var et = en(_, D),
            ht = en(w, D),
            Wt = it.get(ht);
          if (Wt) hi(_, D, Wt);
          else {
            var Rt = st ? st(et, ht, D + "", _, w, it) : void 0,
              on = void 0 === Rt;
            if (on) {
              var so = ae(ht),
                ns = !so && Xi(ht),
                Oo = !so && !ns && Xn(ht);
              (Rt = ht),
                so || ns || Oo
                  ? ae(et)
                    ? (Rt = et)
                    : (function we(_) {
                        return Be(_) && Ui(_);
                      })(et)
                    ? (Rt = (function Mn(_, w) {
                        var D = -1,
                          I = _.length;
                        for (w || (w = Array(I)); ++D < I; ) w[D] = _[D];
                        return w;
                      })(et))
                    : ns
                    ? ((on = !1),
                      (Rt = (function Wi(_, w) {
                        if (w) return _.slice();
                        var D = _.length,
                          I = Me ? Me(D) : new _.constructor(D);
                        return _.copy(I), I;
                      })(ht, !0)))
                    : Oo
                    ? ((on = !1), (Rt = vn(ht, !0)))
                    : (Rt = [])
                  : (function Gt(_) {
                      if (!Be(_) || "[object Object]" != De(_)) return !1;
                      var w = Pn(_);
                      if (null === w) return !0;
                      var D = Ki.call(w, "constructor") && w.constructor;
                      return (
                        "function" == typeof D &&
                        D instanceof D &&
                        Kt.call(D) == Hn
                      );
                    })(ht) || je(ht)
                  ? ((Rt = et),
                    je(et)
                      ? (Rt = qn(et))
                      : (!yt(et) || me(et)) &&
                        (Rt = (function On(_) {
                          return "function" != typeof _.constructor || Cn(_)
                            ? {}
                            : fi(Pn(_));
                        })(ht)))
                  : (on = !1);
            }
            on && (it.set(ht, Rt), Q(Rt, ht, I, st, it), it.delete(ht)),
              hi(_, D, Rt);
          }
        },
        nn = function mo(_, w, D, I, Q) {
          _ !== w &&
            Ds(
              w,
              function (st, it) {
                if ((Q || (Q = new Ps()), yt(st))) Jn(_, w, it, D, mo, I, Q);
                else {
                  var et = I ? I(en(_, it), st, it + "", _, w, Q) : void 0;
                  void 0 === et && (et = st), hi(_, it, et);
                }
              },
              Qn
            );
        },
        ee = function te(_) {
          return _;
        };
      var _o = Math.max;
      const Fo = function xo(_) {
        return function () {
          return _;
        };
      };
      var Bo = Nt
          ? function (_, w) {
              return Nt(_, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Fo(w),
                writable: !0,
              });
            }
          : ee,
        Ho = Date.now,
        kt = (function Mo(_) {
          var w = 0,
            D = 0;
          return function () {
            var I = Ho(),
              Q = 16 - (I - D);
            if (((D = I), Q > 0)) {
              if (++w >= 800) return arguments[0];
            } else w = 0;
            return _.apply(void 0, arguments);
          };
        })(Bo);
      const So = kt,
        Vo = function No(_, w) {
          return So(
            (function Ro(_, w, D) {
              return (
                (w = _o(void 0 === w ? _.length - 1 : w, 0)),
                function () {
                  for (
                    var I = arguments,
                      Q = -1,
                      st = _o(I.length - w, 0),
                      it = Array(st);
                    ++Q < st;

                  )
                    it[Q] = I[w + Q];
                  Q = -1;
                  for (var et = Array(w + 1); ++Q < w; ) et[Q] = I[Q];
                  return (
                    (et[w] = D(it)),
                    (function Eo(_, w, D) {
                      switch (D.length) {
                        case 0:
                          return _.call(w);
                        case 1:
                          return _.call(w, D[0]);
                        case 2:
                          return _.call(w, D[0], D[1]);
                        case 3:
                          return _.call(w, D[0], D[1], D[2]);
                      }
                      return _.apply(w, D);
                    })(_, this, et)
                  );
                }
              );
            })(_, w, ee),
            _ + ""
          );
        };
      var Zo = (function $o(_) {
        return Vo(function (w, D) {
          var I = -1,
            Q = D.length,
            st = Q > 1 ? D[Q - 1] : void 0,
            it = Q > 2 ? D[2] : void 0;
          for (
            st = _.length > 3 && "function" == typeof st ? (Q--, st) : void 0,
              it &&
                (function Wo(_, w, D) {
                  if (!yt(D)) return !1;
                  var I = typeof w;
                  return (
                    !!("number" == I
                      ? Ui(D) && $(w, D.length)
                      : "string" == I && (w in D)) && Ut(D[w], _)
                  );
                })(D[0], D[1], it) &&
                ((st = Q < 3 ? void 0 : st), (Q = 1)),
              w = Object(w);
            ++I < Q;

          ) {
            var et = D[I];
            et && _(w, et, I, st);
          }
          return w;
        });
      })(function (_, w, D) {
        nn(_, w, D);
      });
      const wo = Zo;
      let ko = (() => {
          var _;
          class w {
            constructor() {
              this.colorschemesOptions = new Ot.X(void 0);
            }
            setColorschemesOptions(I) {
              (this.pColorschemesOptions = I), this.colorschemesOptions.next(I);
            }
            getColorschemesOptions() {
              return this.pColorschemesOptions;
            }
          }
          return (
            ((_ = w).ɵfac = function (I) {
              return new (I || _)();
            }),
            (_.ɵprov = R.Yz7({
              token: _,
              factory: _.ɵfac,
              providedIn: "root",
            })),
            w
          );
        })(),
        es = (() => {
          var _;
          class w {
            constructor(I, Q, st) {
              (this.zone = Q),
                (this.themeService = st),
                (this.type = "bar"),
                (this.plugins = []),
                (this.chartClick = new R.vpe()),
                (this.chartHover = new R.vpe()),
                (this.subs = []),
                (this.themeOverrides = {}),
                (this.ctx = I.nativeElement.getContext("2d")),
                this.subs.push(
                  this.themeService.colorschemesOptions
                    .pipe((0, St.x)())
                    .subscribe((it) => this.themeChanged(it))
                );
            }
            ngOnChanges(I) {
              const Q = ["type"],
                st = Object.getOwnPropertyNames(I);
              if (
                st.some((it) => Q.includes(it)) ||
                st.every((it) => I[it].isFirstChange())
              )
                this.render();
              else {
                const it = this.getChartConfiguration();
                this.chart &&
                  (Object.assign(this.chart.config.data, it.data),
                  this.chart.config.plugins &&
                    Object.assign(this.chart.config.plugins, it.plugins),
                  this.chart.config.options &&
                    Object.assign(this.chart.config.options, it.options)),
                  this.update();
              }
            }
            ngOnDestroy() {
              this.chart && (this.chart.destroy(), (this.chart = void 0)),
                this.subs.forEach((I) => I.unsubscribe());
            }
            render() {
              return (
                this.chart && this.chart.destroy(),
                this.zone.runOutsideAngular(
                  () =>
                    (this.chart = new u.kL(
                      this.ctx,
                      this.getChartConfiguration()
                    ))
                )
              );
            }
            update(I) {
              this.chart &&
                this.zone.runOutsideAngular(() => this.chart?.update(I));
            }
            hideDataset(I, Q) {
              this.chart &&
                ((this.chart.getDatasetMeta(I).hidden = Q), this.update());
            }
            isDatasetHidden(I) {
              return this.chart?.getDatasetMeta(I)?.hidden;
            }
            toBase64Image() {
              return this.chart?.toBase64Image();
            }
            themeChanged(I) {
              (this.themeOverrides = I),
                this.chart &&
                  (this.chart.config.options &&
                    Object.assign(
                      this.chart.config.options,
                      this.getChartOptions()
                    ),
                  this.update());
            }
            getChartOptions() {
              return wo(
                {
                  onHover: (I, Q) => {
                    (!this.chartHover.observed &&
                      !this.chartHover.observers?.length) ||
                      this.zone.run(() =>
                        this.chartHover.emit({ event: I, active: Q })
                      );
                  },
                  onClick: (I, Q) => {
                    (!this.chartClick.observed &&
                      !this.chartClick.observers?.length) ||
                      this.zone.run(() =>
                        this.chartClick.emit({ event: I, active: Q })
                      );
                  },
                },
                this.themeOverrides,
                this.options,
                { plugins: { legend: { display: this.legend } } }
              );
            }
            getChartConfiguration() {
              return {
                type: this.type,
                data: this.getChartData(),
                options: this.getChartOptions(),
                plugins: this.plugins,
              };
            }
            getChartData() {
              return this.data
                ? this.data
                : { labels: this.labels || [], datasets: this.datasets || [] };
            }
          }
          return (
            ((_ = w).ɵfac = function (I) {
              return new (I || _)(R.Y36(R.SBq), R.Y36(R.R0b), R.Y36(ko));
            }),
            (_.ɵdir = R.lG2({
              type: _,
              selectors: [["canvas", "baseChart", ""]],
              inputs: {
                type: "type",
                legend: "legend",
                data: "data",
                options: "options",
                plugins: "plugins",
                labels: "labels",
                datasets: "datasets",
              },
              outputs: { chartClick: "chartClick", chartHover: "chartHover" },
              exportAs: ["base-chart"],
              features: [R.TTD],
            })),
            w
          );
        })();
      const io = [
          [255, 99, 132],
          [54, 162, 235],
          [255, 206, 86],
          [231, 233, 237],
          [75, 192, 192],
          [151, 187, 205],
          [220, 220, 220],
          [247, 70, 74],
          [70, 191, 189],
          [253, 180, 92],
          [148, 159, 177],
          [77, 83, 96],
        ],
        sn = {
          plugins: { colors: { enabled: !1 } },
          datasets: {
            line: {
              backgroundColor: (_) => Pt(Ce(_.datasetIndex), 0.4),
              borderColor: (_) => Pt(Ce(_.datasetIndex), 1),
              pointBackgroundColor: (_) => Pt(Ce(_.datasetIndex), 1),
              pointBorderColor: "#fff",
            },
            bar: {
              backgroundColor: (_) => Pt(Ce(_.datasetIndex), 0.6),
              borderColor: (_) => Pt(Ce(_.datasetIndex), 1),
            },
            get radar() {
              return this.line;
            },
            doughnut: {
              backgroundColor: (_) => Pt(Ce(_.dataIndex), 0.6),
              borderColor: "#fff",
            },
            get pie() {
              return this.doughnut;
            },
            polarArea: {
              backgroundColor: (_) => Pt(Ce(_.dataIndex), 0.6),
              borderColor: (_) => Pt(Ce(_.dataIndex), 1),
            },
            get bubble() {
              return this.doughnut;
            },
            get scatter() {
              return this.doughnut;
            },
            get area() {
              return this.polarArea;
            },
          },
        };
      function Pt(_, w) {
        return "rgba(" + _.concat(w).join(",") + ")";
      }
      function is(_, w) {
        return Math.floor(Math.random() * (w - _ + 1)) + _;
      }
      function Ce(_ = 0) {
        return (
          io[_] ||
          (function Po() {
            return [is(0, 255), is(0, 255), is(0, 255)];
          })()
        );
      }
      let Co = (() => {
        var _;
        class w {
          constructor() {
            this.generateColors = !0;
          }
        }
        return (
          ((_ = w).ɵfac = function (I) {
            return new (I || _)();
          }),
          (_.ɵprov = R.Yz7({ token: _, factory: _.ɵfac, providedIn: "root" })),
          w
        );
      })();
      u.kL.register(...u.zX);
      let no = (() => {
        var _;
        class w {
          constructor(I) {
            I?.plugins && u.kL.register(...I.plugins);
            const Q = wo(I?.generateColors ? sn : {}, I?.defaults || {});
            E.d.set(Q);
          }
          static forRoot(I) {
            return { ngModule: w, providers: [{ provide: Co, useValue: I }] };
          }
        }
        return (
          ((_ = w).ɵfac = function (I) {
            return new (I || _)(R.LFG(Co, 8));
          }),
          (_.ɵmod = R.oAB({ type: _ })),
          (_.ɵinj = R.cJS({})),
          w
        );
      })();
    },
  },
]);
