(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/timeline.md?vue&type=template&id=df39200e&bindings={}

var timelinevue_type_template_id_df39200e_bindings_hoisted_1 = {
  class: "content element-doc"
};

var timelinevue_type_template_id_df39200e_bindings_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "timeline"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#timeline"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Timeline")], -1);

var timelinevue_type_template_id_df39200e_bindings_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Línea de tiempo visual.", -1);

var timelinevue_type_template_id_df39200e_bindings_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var timelinevue_type_template_id_df39200e_bindings_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El Timeline puede ser dividido en múltiples actividades en forma ascendente o descendente. Las marcas de tiempo son características importantes que los distinguen de otros componentes. Observe la diferencia con Steps.", -1);

var timelinevue_type_template_id_df39200e_bindings_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <div class=\"radio\">\n    Order: \n    <el-radio-group v-model=\"reverse\">\n      <el-radio :label=\"true\">descending</el-radio>\n      <el-radio :label=\"false\">ascending</el-radio>\n    </el-radio-group>\n  </div>\n\n  <el-timeline :reverse=\"reverse\">\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :timestamp=\"activity.timestamp\">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        reverse: true,\n        activities: [{\n          content: 'Success',\n          timestamp: '2018-04-11'\n        }, {\n          content: 'Approved',\n          timestamp: '2018-04-13'\n        }, {\n          content: 'Event start',\n          timestamp: '2018-04-15'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var timelinevue_type_template_id_df39200e_bindings_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "nodo-personalizado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#nodo-personalizado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Nodo personalizado")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El tamaño, el color y los iconos se pueden personalizar en el nodo.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :icon=\"activity.icon\"\n      :type=\"activity.type\"\n      :color=\"activity.color\"\n      :size=\"activity.size\"\n      :timestamp=\"activity.timestamp\">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [{\n          content: 'Custom icon',\n          timestamp: '2018-04-12 20:46',\n          size: 'large',\n          type: 'primary',\n          icon: 'el-icon-more'\n        }, {\n          content: 'Custom color',\n          timestamp: '2018-04-03 20:46',\n          color: '#0bbd87'\n        }, {\n          content: 'Custom size',\n          timestamp: '2018-04-03 20:46',\n          size: 'large'\n        }, {\n          content: 'Default node',\n          timestamp: '2018-04-03 20:46'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "marcas-de-tiempo-personalizadas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#marcas-de-tiempo-personalizadas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Marcas de tiempo personalizadas")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Las marcas de tiempo ( timestamp ) puede colocarse encima del contenido cuando éste es demasiado alto.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item timestamp=\"2018/4/12\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/12 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/3\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/3 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/2\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/2 20:46</p>\n      </el-card>\n    </el-timeline-item>\n  </el-timeline>\n</div>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"timeline-atributos\"><a class=\"header-anchor\" href=\"#timeline-atributos\">¶</a> Timeline Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>reverse</td><td>Si el node es ascendente o descendente. Por defecto es ascendente</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"timeline-item-atributos\"><a class=\"header-anchor\" href=\"#timeline-item-atributos\">¶</a> Timeline-item Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>timestamp</td><td>Contenido de las marcas de tiempo</td><td>string</td><td>-</td><td>—</td></tr><tr><td>hide-timestamp</td><td>Si se muestra o no timestamp</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>la posición de timestamp</td><td>string</td><td>top / bottom</td><td>bottom</td></tr><tr><td>type</td><td>tipo de nodo</td><td>string</td><td>primary / success / warning / danger / info</td><td>-</td></tr><tr><td>color</td><td>color de fondo del nodo</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>-</td></tr><tr><td>size</td><td>tamaño del nodo</td><td>string</td><td>normal / large</td><td>normal</td></tr><tr><td>icon</td><td>nombre de la clase del icono</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"timeline-item-slot\"><a class=\"header-anchor\" href=\"#timeline-item-slot\">¶</a> Timeline-Item Slot</h3><table><thead><tr><th>name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenido personalizado del ítem del timeline</td></tr><tr><td>dot</td><td>Definición personalizada del nodo</td></tr></tbody></table>", 6);

function timelinevue_type_template_id_df39200e_bindings_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", timelinevue_type_template_id_df39200e_bindings_hoisted_1, [timelinevue_type_template_id_df39200e_bindings_hoisted_2, timelinevue_type_template_id_df39200e_bindings_hoisted_3, timelinevue_type_template_id_df39200e_bindings_hoisted_4, timelinevue_type_template_id_df39200e_bindings_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [timelinevue_type_template_id_df39200e_bindings_hoisted_6];
    }),
    _: 1
  }), timelinevue_type_template_id_df39200e_bindings_hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13]);
}
// CONCATENATED MODULE: ./website/docs/es/timeline.md?vue&type=template&id=df39200e&bindings={}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/timeline.md?vue&type=script&lang=ts


/* harmony default export */ var timelinevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];
      var _hoisted_1 = {
        class: "block"
      };
      var _hoisted_2 = {
        class: "radio"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" Order: ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("descending");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("ascending");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_radio_group, {
          modelValue: _ctx.reverse,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.reverse = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: true
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: false
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode(_component_el_timeline, {
          reverse: _ctx.reverse
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.activities, function (activity, index) {
              return _openBlock(), _createBlock(_component_el_timeline_item, {
                key: index,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(activity.content), 1
                  /* TEXT */
                  )];
                }),
                _: 2
              }, 1032, ["timestamp"]);
            }), 128
            /* KEYED_FRAGMENT */
            ))];
          }),
          _: 1
        }, 8, ["reverse"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            reverse: true,
            activities: [{
              content: 'Success',
              timestamp: '2018-04-11'
            }, {
              content: 'Approved',
              timestamp: '2018-04-13'
            }, {
              content: 'Event start',
              timestamp: '2018-04-15'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.activities, function (activity, index) {
              return _openBlock(), _createBlock(_component_el_timeline_item, {
                key: index,
                icon: activity.icon,
                type: activity.type,
                color: activity.color,
                size: activity.size,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(activity.content), 1
                  /* TEXT */
                  )];
                }),
                _: 2
              }, 1032, ["icon", "type", "color", "size", "timestamp"]);
            }), 128
            /* KEYED_FRAGMENT */
            ))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activities: [{
              content: 'Custom icon',
              timestamp: '2018-04-12 20:46',
              size: 'large',
              type: 'primary',
              icon: 'el-icon-more'
            }, {
              content: 'Custom color',
              timestamp: '2018-04-03 20:46',
              color: '#0bbd87'
            }, {
              content: 'Custom size',
              timestamp: '2018-04-03 20:46',
              size: 'large'
            }, {
              content: 'Default node',
              timestamp: '2018-04-03 20:46'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("h4", null, "Update Github template", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "Tom committed 2018/4/12 20:46", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("h4", null, "Update Github template", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "Tom committed 2018/4/3 20:46", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("h4", null, "Update Github template", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("p", null, "Tom committed 2018/4/2 20:46", -1);

      function render(_ctx, _cache) {
        var _component_el_card = _resolveComponent("el-card");

        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/12",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2, _hoisted_3];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/3",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4, _hoisted_5];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/2",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6, _hoisted_7];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/timeline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/timeline.md



timelinevue_type_script_lang_ts.render = timelinevue_type_template_id_df39200e_bindings_render

/* harmony default export */ var timeline = __webpack_exports__["default"] = (timelinevue_type_script_lang_ts);

/***/ })

}]);