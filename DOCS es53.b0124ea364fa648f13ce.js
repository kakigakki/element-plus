(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/time-picker.md?vue&type=template&id=76dc998e&bindings={}

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "timepicker"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#timepicker"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" TimePicker")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Use el Time Picker para input de tipo time.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "selector-de-tiempo-arbitrario"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#selector-de-tiempo-arbitrario"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Selector de tiempo arbitrario")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Un tiempo arbitrario puede ser escogido.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Al usar el tag "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-time-picker"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", es posible limitar el rango de tiempo al especificar "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "selectableRange"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Por defecto, es posible hacer scroll con la rueda del mouse para escoger el tiempo, alternativamente se pueden utilizar las flechas de control cuando el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" esté establecido.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    v-model=\"value1\"\n    :picker-options=\"{\n      selectableRange: '18:30:00 - 20:30:00'\n    }\"\n    placeholder=\"Arbitrary time\">\n  </el-time-picker>\n  <el-time-picker\n    arrow-control\n    v-model=\"value2\"\n    :picker-options=\"{\n      selectableRange: '18:30:00 - 20:30:00'\n    }\"\n    placeholder=\"Arbitrary time\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: new Date(2016, 9, 10, 18, 40),\n        value2: new Date(2016, 9, 10, 18, 40)\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "rango-de-tiempo-arbitrario"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rango-de-tiempo-arbitrario"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Rango de tiempo arbitrario")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Es posible escoger un rango de tiempo arbitrario.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Es posible seleccionar un rango de tiempo al añadir el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". También, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es soportado en modo de rango.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    is-range\n    v-model=\"value1\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\">\n  </el-time-picker>\n  <el-time-picker\n    is-range\n    arrow-control\n    v-model=\"value2\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos\"><a class=\"header-anchor\" href=\"#atributos\">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>date(TimePicker) / string(TimeSelect)</td><td>-</td><td>-</td></tr><tr><td>readonly</td><td>si el Time Picker está en modo de sólo lectura</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>si el Time Picker se encuentra deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>si el input puede ser editado</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>si mostrar el botón de borrado</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>tamaño del input</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder en un modo fuera de rango</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>placeholder para el tiempo de inicio en modo de rango</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>placeholder para el tiempo de finalización en modo de rango</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>si es posible escoger un rango de tiempo, solo funciona con <code>&lt;el-time-picker&gt;</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>si es posible escoger el tiempo usando los botones de flecha, solo funciona con <code>&lt;el-time-picker&gt;</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>alineación</td><td>left / center / right</td><td>left</td><td></td></tr><tr><td>popper-class</td><td>nombre de clase personalizada para el dropdown del Time Picker</td><td>string</td><td>—</td><td>—</td></tr><tr><td>picker-options</td><td>opciones adicionales, revisar la tabla posterior</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>range-separator</td><td>separador de rango</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>opcional, fecha por defecto del calendario</td><td>Fecha para Selector de Tiempo, string para el Seleccionador de Tiempo</td><td>cualquier cosa aceptada por <code>new Date()</code> para el Selector de Tiempo, Selector de Tiempo, valor seleccionable para el Seleccionador de Tiempo</td><td>—</td></tr><tr><td>value-format</td><td>opcional, solo para Time Picker, formato del valor vinculado. Si no se especifica, el valor vinculado será un objeto Date</td><td>string</td><td>ver <a href=\"#/es/component/date-picker#date-formats\">date formats</a></td><td>—</td></tr><tr><td>name</td><td>como <code>name</code> en input nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>Clase personalizada para el icono de prefijado</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>Clase personalizada para el icono <code>clear</code></td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id=\"opciones-para-time-picker\"><a class=\"header-anchor\" href=\"#opciones-para-time-picker\">¶</a> Opciones para Time Picker</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>selectableRange</td><td>rango de tiempo disponible p.ej. <code>&#39;18:30:00 - 20:30:00&#39;</code>ó<code>[&#39;09:30:00 - 12:00:00&#39;, &#39;14:30:00 - 18:30:00&#39;]</code></td><td>string / array</td><td>—</td><td>—</td></tr><tr><td>format</td><td>formato para el selector</td><td>string</td><td>hour <code>HH</code>, minute <code>mm</code>, second <code>ss</code></td><td>HH:mm:ss</td></tr></tbody></table><h3 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h3><table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>change</td><td>se lanza cuando el usuario confirma el valor</td><td>valor vinculado del componente</td></tr><tr><td>blur</td><td>se lanza cuando el input se difumina</td><td>instancia del componente</td></tr><tr><td>focus</td><td>se lanza cuando el input se enfoca</td><td>instancia del componente</td></tr></tbody></table><h3 id=\"metodos\"><a class=\"header-anchor\" href=\"#metodos\">¶</a> Metodos</h3><table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parameteros</th></tr></thead><tbody><tr><td>focus</td><td>coloca el foco en el input</td><td>—</td></tr></tbody></table>", 8);

function time_pickervue_type_template_id_76dc998e_bindings_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12]);
}
// CONCATENATED MODULE: ./website/docs/es/time-picker.md?vue&type=template&id=76dc998e&bindings={}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/time-picker.md?vue&type=script&lang=ts


/* harmony default export */ var time_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "picker-options": {
            selectableRange: '18:30:00 - 20:30:00'
          },
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "picker-options": {
            selectableRange: '18:30:00 - 20:30:00'
          },
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: new Date(2016, 9, 10, 18, 40),
            value2: new Date(2016, 9, 10, 18, 40)
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_picker, {
          "is-range": "",
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "is-range": "",
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/time-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/time-picker.md



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_76dc998e_bindings_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ })

}]);