(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["di-authoring-di-authoring-module"], {
    /***/
    "/9qy":
    /*!***************************************************************!*\
      !*** ./src/app/di-authoring/edit-text/edit-text.component.ts ***!
      \***************************************************************/

    /*! exports provided: EditTextComponent */

    /***/
    function qy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTextComponent", function () {
        return EditTextComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/fade-in-transition */
      "fMDc");
      /* harmony import */


      var devextreme_ui_html_editor_converters_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! devextreme/ui/html_editor/converters/markdown */
      "mgrj");
      /* harmony import */


      var devextreme_ui_html_editor_converters_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_html_editor_converters_markdown__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! devextreme-angular */
      "384S");
      /* harmony import */


      var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! devextreme-angular/ui/nested */
      "6t9p");

      var _c0 = function _c0() {
        return ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"];
      };

      var _c1 = function _c1() {
        return ["Arial", "Courier New", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Verdana"];
      };

      var _c2 = function _c2() {
        return [false, 1, 2, 3, 4, 5];
      };

      var _c3 = function _c3() {
        return ["Html"];
      };

      var EditTextComponent = /*#__PURE__*/function () {
        function EditTextComponent() {
          _classCallCheck2(this, EditTextComponent);

          this.editorValueType = 'Markdown';
        }

        _createClass2(EditTextComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onValueTypeChanged",
          value: function onValueTypeChanged(_ref) {
            var addedItems = _ref.addedItems;
            this.editorValueType = addedItems[0].text.toLowerCase();
          }
        }, {
          key: "valueChange",
          value: function valueChange(value) {
            this.valueContent = value;
          }
        }]);

        return EditTextComponent;
      }();

      EditTextComponent.ɵfac = function EditTextComponent_Factory(t) {
        return new (t || EditTextComponent)();
      };

      EditTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditTextComponent,
        selectors: [["app-edit-text"]],
        decls: 51,
        vars: 12,
        consts: [[1, "edit-text-container"], ["height", "400px", "width", "90%", 1, "htmlEditor", 3, "valueType", "valueTypeChange", "valueChange"], [3, "multiline"], ["formatName", "undo"], ["formatName", "redo"], ["formatName", "separator"], ["formatName", "size", 3, "formatValues"], ["formatName", "font", 3, "formatValues"], ["formatName", "bold"], ["formatName", "italic"], ["formatName", "strike"], ["formatName", "underline"], ["formatName", "alignLeft"], ["formatName", "alignCenter"], ["formatName", "alignRight"], ["formatName", "alignJustify"], ["formatName", "orderedList"], ["formatName", "bulletList"], ["formatName", "header", 3, "formatValues"], ["formatName", "color"], ["formatName", "background"], ["formatName", "link"], ["formatName", "image"], ["formatName", "clear"], ["formatName", "codeBlock"], ["formatName", "blockquote"], ["formatName", "insertTable"], ["formatName", "deleteTable"], ["formatName", "insertRowAbove"], ["formatName", "insertRowBelow"], ["formatName", "deleteRow"], ["formatName", "insertColumnLeft"], ["formatName", "insertColumnRight"], ["formatName", "deleteColumn"], [3, "enabled"], [1, "options"], [3, "selectedItemKeys", "onSelectionChanged"], ["text", "Html"], ["text", "Markdown"], [1, "value-content"]],
        template: function EditTextComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Text Html Editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-html-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueTypeChange", function EditTextComponent_Template_dx_html_editor_valueTypeChange_3_listener($event) {
              return ctx.editorValueType = $event;
            })("valueChange", function EditTextComponent_Template_dx_html_editor_valueChange_3_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dxo-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxi-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxi-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dxi-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dxi-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dxi-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dxi-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dxi-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dxi-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "dxi-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "dxi-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "dxi-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "dxi-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "dxi-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "dxi-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "dxi-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "dxi-item", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "dxi-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "dxi-item", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "dxi-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "dxi-item", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "dxi-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "dxi-item", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "dxi-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "dxi-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "dxi-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "dxi-item", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "dxi-item", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "dxi-item", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "dxi-item", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "dxi-item", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "dxi-item", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "dxo-media-resizing", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "dx-button-group", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChanged", function EditTextComponent_Template_dx_button_group_onSelectionChanged_46_listener($event) {
              return ctx.onValueTypeChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "dxi-item", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "dxi-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valueType", ctx.editorValueType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiline", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formatValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formatValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formatValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedItemKeys", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.valueContent);
          }
        },
        directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxHtmlEditorComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoToolbarComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoMediaResizingComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxButtonGroupComponent"]],
        styles: [".dx-htmleditor-content img {\n  vertical-align: middle;\n  padding-right: 10px;\n  min-width: 90%;\n}\n\n  .dx-htmleditor-content table {\n  width: 50%;\n}\n\n  .options {\n  padding: 20px;\n  background-color: rgba(191, 191, 191, 0.15);\n  margin-top: 20px;\n}\n\n  .caption {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n  .option {\n  margin-top: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  padding-top: 20px;\n  color: #000000;\n}\n\n.edit-text-container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\n\n.htmlEditor[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0LXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJlZGl0LXRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmR4LWh0bWxlZGl0b3ItY29udGVudCBpbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtaW4td2lkdGg6IDkwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC1odG1sZWRpdG9yLWNvbnRlbnQgdGFibGUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3B0aW9ucyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuMTUpO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2FwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3B0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uZWRpdC10ZXh0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5odG1sRWRpdG9yIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTextComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-text',
            templateUrl: './edit-text.component.html',
            styleUrls: ['./edit-text.component.scss'],
            animations: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "2dQI":
    /*!*******************************************************************!*\
      !*** ./src/app/di-authoring/paste-links/paste-links.component.ts ***!
      \*******************************************************************/

    /*! exports provided: PasteLinksComponent */

    /***/
    function dQI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasteLinksComponent", function () {
        return PasteLinksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! devextreme-angular */
      "384S");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["pasteLinksArea"];

      function PasteLinksComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PasteLinksComponent_div_19_Template_img_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var link_r2 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.copyLink(link_r2.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PasteLinksComponent_div_19_Template_img_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.deleteLink(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", link_r2.name, " - ", link_r2.path, "");
        }
      }

      var PasteLinksComponent = /*#__PURE__*/function () {
        function PasteLinksComponent(renderer) {
          _classCallCheck2(this, PasteLinksComponent);

          this.renderer = renderer;
          this.links = [];
          this.valueForEditableTextArea = '';
          this.valueForTextBox = '';
        }

        _createClass2(PasteLinksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.pasteLinksArea != null) {
              this.renderer.listen(this.pasteLinksArea.nativeElement, 'paste', function (event) {
                // handle the event
                console.log('Paste Event');
              });
            }
          }
        }, {
          key: "onPaste",
          value: function onPaste(event) {
            if (event.target && event.clipboardData) {}

            var links = event.clipboardData.getData('text');
            this.handleLinks(links);
          }
        }, {
          key: "handleLinks",
          value: function handleLinks(links) {
            var arrayLinks = links.split(/\r?\n/);
            var updatedlinks = arrayLinks.map(function (x) {
              var filePath = x.replace(/(^")|("$)/g, '');
              var fileName = filePath.split(/[\\\/]/).pop();
              return {
                path: filePath,
                name: fileName
              };
            });
            this.links = this.links.concat(updatedlinks);

            if (this.pasteLinksArea) {
              this.pasteLinksArea.nativeElement.value = '';
            }
          }
        }, {
          key: "callPasteEvent",
          value: function callPasteEvent(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var clipboardText;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('Paste Button Clicked');
                      clipboardText = '';

                      if (!navigator.clipboard) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 5;
                      return navigator.clipboard.readText();

                    case 5:
                      clipboardText = _context.sent;

                    case 6:
                      this.handleLinks(clipboardText);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onFileDropped",
          value: function onFileDropped(event) {
            this.handleLinks(event);
          }
        }, {
          key: "deleteLink",
          value: function deleteLink(index) {
            if (this.links[index].progress < 100) {
              console.log('Upload in progress.');
              return;
            }

            this.links.splice(index, 1);
          }
        }, {
          key: "downloadFileLink",
          value: function downloadFileLink(link) {
            var uncPath = link.replace(/\\/g, '/');
            var fileLink = "file:///" + uncPath;
            return fileLink;
          }
        }, {
          key: "copyLink",
          value: function copyLink(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!navigator.clipboard) {
                        _context2.next = 3;
                        break;
                      }

                      _context2.next = 3;
                      return navigator.clipboard.writeText(link);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return PasteLinksComponent;
      }();

      PasteLinksComponent.ɵfac = function PasteLinksComponent_Factory(t) {
        return new (t || PasteLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
      };

      PasteLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PasteLinksComponent,
        selectors: [["app-paste-links"]],
        viewQuery: function PasteLinksComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pasteLinksArea = _t.first);
          }
        },
        decls: 20,
        vars: 4,
        consts: [[1, "pasteLinksContainer"], [1, "drop-zone"], ["id", "pasteLinksArea", 3, "paste"], ["pasteLinksArea", ""], [1, "drag-drop-section"], ["src", "assets/img/outline_file_upload_black_24dp.png", "alt", "", 1, "drag-drop-image"], [1, "drag-drop-message"], [1, "buttons"], [1, "pasteButton", 3, "click"], [1, "textBoxes"], [1, "subtitle"], ["width", "60%", 3, "height", "value", "valueChange", "paste"], ["width", "60%", 3, "value", "valueChange", "paste"], [1, "links-list"], ["class", "single-link", 4, "ngFor", "ngForOf"], [1, "single-link"], ["src", "assets/img/outline_image_black_24dp.png", "width", "45px", "alt", "file"], [1, "info"], [1, "name"], ["src", "assets/img/outline_content_copy_black_24dp.png", "width", "20px", "alt", "link", 1, "copy", "iconButton", 3, "click"], ["src", "assets/img/outline_delete_black_24dp.png", "width", "20px", "alt", "link", 1, "delete", "iconButton", 3, "click"]],
        template: function PasteLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("paste", function PasteLinksComponent_Template_input_paste_2_listener($event) {
              return ctx.onPaste($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Paste Links Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PasteLinksComponent_Template_div_click_9_listener($event) {
              return ctx.callPasteEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Paste");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Text Area");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "dx-text-area", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PasteLinksComponent_Template_dx_text_area_valueChange_14_listener($event) {
              return ctx.valueForEditableTextArea = $event;
            })("paste", function PasteLinksComponent_Template_dx_text_area_paste_14_listener($event) {
              return ctx.onPaste($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Text Box");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "dx-text-box", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PasteLinksComponent_Template_dx_text_box_valueChange_17_listener($event) {
              return ctx.valueForTextBox = $event;
            })("paste", function PasteLinksComponent_Template_dx_text_box_paste_17_listener($event) {
              return ctx.onPaste($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PasteLinksComponent_div_19_Template, 7, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 150)("value", ctx.valueForEditableTextArea);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueForTextBox);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
          }
        },
        directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTextAreaComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTextBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".pasteLinksContainer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n  padding-bottom: 30px;\n}\n\n.drop-zone[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 80px;\n  padding: 1rem;\n  border: 1px dashed #979797;\n  position: relative;\n  margin: 0 auto;\n}\n\ninput[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.drag-drop-image[_ngcontent-%COMP%] {\n  color: #242525;\n  text-align: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.pasteButton[_ngcontent-%COMP%] {\n  color: white;\n  width: 180px;\n  height: 44px;\n  border-radius: 5px;\n  background-color: #474444;\n  padding: 8px 16px;\n  font-size: 1.2em;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.drag-drop-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 30px;\n}\n\n.drag-drop-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.drag-drop-message[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #38424c;\n  padding: 8px 0px 0px 20px;\n}\n\n.textBoxes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n}\n\n.textBoxes[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.links-list[_ngcontent-%COMP%] {\n  margin: 2rem auto auto auto;\n  width: 90%;\n  max-width: 1100px;\n}\n\n.links-list[_ngcontent-%COMP%]   .single-link[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border: dashed 1px #979797;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-grow: 1;\n}\n\n.links-list[_ngcontent-%COMP%]   .single-link[_ngcontent-%COMP%]   .iconButton[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  cursor: pointer;\n  margin-bottom: 2px;\n}\n\n.links-list[_ngcontent-%COMP%]   .single-link[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #353f4a;\n  margin: 0;\n}\n\n.links-list[_ngcontent-%COMP%]   .single-link[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #a4a4a4;\n  margin: 0;\n  margin-bottom: 0.25rem;\n}\n\n.links-list[_ngcontent-%COMP%]   .single-link[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYXN0ZS1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQVFBLGFBQUE7RUFDQSxZQUFBO0FBTko7O0FBREk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFETjs7QUFJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFGTjs7QUFLSTtFQUNFLFdBQUE7QUFITiIsImZpbGUiOiJwYXN0ZS1saW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXN0ZUxpbmtzQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZHJvcC16b25lIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5Nzk3OTc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5kcmFnLWRyb3AtaW1hZ2Uge1xyXG4gIGNvbG9yOiAjMjQyNTI1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucGFzdGVCdXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NDQ0O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kcmFnLWRyb3Atc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZHJhZy1kcm9wLWltYWdlIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5kcmFnLWRyb3AtbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzODQyNGM7XHJcbiAgcGFkZGluZzogOHB4IDBweCAwcHggMjBweDtcclxufVxyXG5cclxuLnRleHRCb3hlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dEJveGVzID4gKiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxpbmtzLWxpc3Qge1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvIGF1dG8gYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG5cclxuICAuc2luZ2xlLWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IGRhc2hlZCAxcHggIzk3OTc5NztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgLmljb25CdXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogIzM1M2Y0YTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXplIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogI2E0YTRhNDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PasteLinksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-paste-links',
            templateUrl: './paste-links.component.html',
            styleUrls: ['./paste-links.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }];
        }, {
          pasteLinksArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['pasteLinksArea', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    4:
    /*!***********************!*\
      !*** jsdom (ignored) ***!
      \***********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "7LjP":
    /*!*************************************************************!*\
      !*** ./src/app/di-authoring/di-authoring-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DiAuthoringRoutingModule */

    /***/
    function LjP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiAuthoringRoutingModule", function () {
        return DiAuthoringRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _di_authoring_di_authoring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./di-authoring/di-authoring.component */
      "VM2T");
      /* harmony import */


      var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./drag-drop/drag-drop.component */
      "Ye3n");
      /* harmony import */


      var _edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-text/edit-text.component */
      "/9qy");
      /* harmony import */


      var _edit_textbox_edit_textbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-textbox/edit-textbox.component */
      "Zyi1");
      /* harmony import */


      var _paste_links_paste_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./paste-links/paste-links.component */
      "2dQI");

      var routes = [{
        path: '',
        component: _di_authoring_di_authoring_component__WEBPACK_IMPORTED_MODULE_2__["DiAuthoringComponent"],
        data: {
          animationState: 'One'
        },
        children: [{
          path: '',
          component: _di_authoring_di_authoring_component__WEBPACK_IMPORTED_MODULE_2__["DiAuthoringComponent"],
          data: {
            animationState: 'One',
            pageTitle: 'DI-Authoring'
          }
        }, {
          path: 'drag-drop',
          component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__["DragDropComponent"],
          data: {
            animationState: 'One',
            pageTitle: 'Drag/Drop Links'
          }
        }, {
          path: 'edit-text',
          component: _edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_4__["EditTextComponent"],
          data: {
            animationState: 'One',
            pageTitle: 'HTML Editor'
          }
        }, {
          path: 'edit-textbox',
          component: _edit_textbox_edit_textbox_component__WEBPACK_IMPORTED_MODULE_5__["EditTextboxComponent"],
          data: {
            animationState: 'One',
            pageTitle: 'Edit Textbox'
          }
        }, {
          path: 'paste-links',
          component: _paste_links_paste_links_component__WEBPACK_IMPORTED_MODULE_6__["PasteLinksComponent"],
          data: {
            animationState: 'One',
            pageTitle: 'Paste Links'
          }
        }]
      }];

      var DiAuthoringRoutingModule = function DiAuthoringRoutingModule() {
        _classCallCheck2(this, DiAuthoringRoutingModule);
      };

      DiAuthoringRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DiAuthoringRoutingModule
      });
      DiAuthoringRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DiAuthoringRoutingModule_Factory(t) {
          return new (t || DiAuthoringRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiAuthoringRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiAuthoringRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "M55E":
    /*!************************************************!*\
      !*** ./node_modules/showdown/dist/showdown.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function M55E(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_RESULT__;

      ;
      /*! showdown v 1.9.1 - 02-11-2019 */

      (function () {
        /**
         * Created by Tivie on 13-07-2015.
         */
        function getDefaultOpts(simple) {
          'use strict';

          var defaultOptions = {
            omitExtraWLInCodeBlocks: {
              defaultValue: false,
              describe: 'Omit the default extra whiteline added to code blocks',
              type: 'boolean'
            },
            noHeaderId: {
              defaultValue: false,
              describe: 'Turn on/off generated header id',
              type: 'boolean'
            },
            prefixHeaderId: {
              defaultValue: false,
              describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
              type: 'string'
            },
            rawPrefixHeaderId: {
              defaultValue: false,
              describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
              type: 'boolean'
            },
            ghCompatibleHeaderId: {
              defaultValue: false,
              describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
              type: 'boolean'
            },
            rawHeaderId: {
              defaultValue: false,
              describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
              type: 'boolean'
            },
            headerLevelStart: {
              defaultValue: false,
              describe: 'The header blocks level start',
              type: 'integer'
            },
            parseImgDimensions: {
              defaultValue: false,
              describe: 'Turn on/off image dimension parsing',
              type: 'boolean'
            },
            simplifiedAutoLink: {
              defaultValue: false,
              describe: 'Turn on/off GFM autolink style',
              type: 'boolean'
            },
            excludeTrailingPunctuationFromURLs: {
              defaultValue: false,
              describe: 'Excludes trailing punctuation from links generated with autoLinking',
              type: 'boolean'
            },
            literalMidWordUnderscores: {
              defaultValue: false,
              describe: 'Parse midword underscores as literal underscores',
              type: 'boolean'
            },
            literalMidWordAsterisks: {
              defaultValue: false,
              describe: 'Parse midword asterisks as literal asterisks',
              type: 'boolean'
            },
            strikethrough: {
              defaultValue: false,
              describe: 'Turn on/off strikethrough support',
              type: 'boolean'
            },
            tables: {
              defaultValue: false,
              describe: 'Turn on/off tables support',
              type: 'boolean'
            },
            tablesHeaderId: {
              defaultValue: false,
              describe: 'Add an id to table headers',
              type: 'boolean'
            },
            ghCodeBlocks: {
              defaultValue: true,
              describe: 'Turn on/off GFM fenced code blocks support',
              type: 'boolean'
            },
            tasklists: {
              defaultValue: false,
              describe: 'Turn on/off GFM tasklist support',
              type: 'boolean'
            },
            smoothLivePreview: {
              defaultValue: false,
              describe: 'Prevents weird effects in live previews due to incomplete input',
              type: 'boolean'
            },
            smartIndentationFix: {
              defaultValue: false,
              description: 'Tries to smartly fix indentation in es6 strings',
              type: 'boolean'
            },
            disableForced4SpacesIndentedSublists: {
              defaultValue: false,
              description: 'Disables the requirement of indenting nested sublists by 4 spaces',
              type: 'boolean'
            },
            simpleLineBreaks: {
              defaultValue: false,
              description: 'Parses simple line breaks as <br> (GFM Style)',
              type: 'boolean'
            },
            requireSpaceBeforeHeadingText: {
              defaultValue: false,
              description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
              type: 'boolean'
            },
            ghMentions: {
              defaultValue: false,
              description: 'Enables github @mentions',
              type: 'boolean'
            },
            ghMentionsLink: {
              defaultValue: 'https://github.com/{u}',
              description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
              type: 'string'
            },
            encodeEmails: {
              defaultValue: true,
              description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
              type: 'boolean'
            },
            openLinksInNewWindow: {
              defaultValue: false,
              description: 'Open all links in new windows',
              type: 'boolean'
            },
            backslashEscapesHTMLTags: {
              defaultValue: false,
              description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
              type: 'boolean'
            },
            emoji: {
              defaultValue: false,
              description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
              type: 'boolean'
            },
            underline: {
              defaultValue: false,
              description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
              type: 'boolean'
            },
            completeHTMLDocument: {
              defaultValue: false,
              description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
              type: 'boolean'
            },
            metadata: {
              defaultValue: false,
              description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
              type: 'boolean'
            },
            splitAdjacentBlockquotes: {
              defaultValue: false,
              description: 'Split adjacent blockquote blocks',
              type: 'boolean'
            }
          };

          if (simple === false) {
            return JSON.parse(JSON.stringify(defaultOptions));
          }

          var ret = {};

          for (var opt in defaultOptions) {
            if (defaultOptions.hasOwnProperty(opt)) {
              ret[opt] = defaultOptions[opt].defaultValue;
            }
          }

          return ret;
        }

        function allOptionsOn() {
          'use strict';

          var options = getDefaultOpts(true),
              ret = {};

          for (var opt in options) {
            if (options.hasOwnProperty(opt)) {
              ret[opt] = true;
            }
          }

          return ret;
        }
        /**
         * Created by Tivie on 06-01-2015.
         */
        // Private properties


        var showdown = {},
            parsers = {},
            extensions = {},
            globalOptions = getDefaultOpts(true),
            setFlavor = 'vanilla',
            flavor = {
          github: {
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghCompatibleHeaderId: true,
            ghMentions: true,
            backslashEscapesHTMLTags: true,
            emoji: true,
            splitAdjacentBlockquotes: true
          },
          original: {
            noHeaderId: true,
            ghCodeBlocks: false
          },
          ghost: {
            omitExtraWLInCodeBlocks: true,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            smoothLivePreview: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghMentions: false,
            encodeEmails: true
          },
          vanilla: getDefaultOpts(true),
          allOn: allOptionsOn()
        };
        /**
         * helper namespace
         * @type {{}}
         */

        showdown.helper = {};
        /**
         * TODO LEGACY SUPPORT CODE
         * @type {{}}
         */

        showdown.extensions = {};
        /**
         * Set a global option
         * @static
         * @param {string} key
         * @param {*} value
         * @returns {showdown}
         */

        showdown.setOption = function (key, value) {
          'use strict';

          globalOptions[key] = value;
          return this;
        };
        /**
         * Get a global option
         * @static
         * @param {string} key
         * @returns {*}
         */


        showdown.getOption = function (key) {
          'use strict';

          return globalOptions[key];
        };
        /**
         * Get the global options
         * @static
         * @returns {{}}
         */


        showdown.getOptions = function () {
          'use strict';

          return globalOptions;
        };
        /**
         * Reset global options to the default values
         * @static
         */


        showdown.resetOptions = function () {
          'use strict';

          globalOptions = getDefaultOpts(true);
        };
        /**
         * Set the flavor showdown should use as default
         * @param {string} name
         */


        showdown.setFlavor = function (name) {
          'use strict';

          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + ' flavor was not found');
          }

          showdown.resetOptions();
          var preset = flavor[name];
          setFlavor = name;

          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              globalOptions[option] = preset[option];
            }
          }
        };
        /**
         * Get the currently set flavor
         * @returns {string}
         */


        showdown.getFlavor = function () {
          'use strict';

          return setFlavor;
        };
        /**
         * Get the options of a specified flavor. Returns undefined if the flavor was not found
         * @param {string} name Name of the flavor
         * @returns {{}|undefined}
         */


        showdown.getFlavorOptions = function (name) {
          'use strict';

          if (flavor.hasOwnProperty(name)) {
            return flavor[name];
          }
        };
        /**
         * Get the default options
         * @static
         * @param {boolean} [simple=true]
         * @returns {{}}
         */


        showdown.getDefaultOptions = function (simple) {
          'use strict';

          return getDefaultOpts(simple);
        };
        /**
         * Get or set a subParser
         *
         * subParser(name)       - Get a registered subParser
         * subParser(name, func) - Register a subParser
         * @static
         * @param {string} name
         * @param {function} [func]
         * @returns {*}
         */


        showdown.subParser = function (name, func) {
          'use strict';

          if (showdown.helper.isString(name)) {
            if (typeof func !== 'undefined') {
              parsers[name] = func;
            } else {
              if (parsers.hasOwnProperty(name)) {
                return parsers[name];
              } else {
                throw Error('SubParser named ' + name + ' not registered!');
              }
            }
          }
        };
        /**
         * Gets or registers an extension
         * @static
         * @param {string} name
         * @param {object|function=} ext
         * @returns {*}
         */


        showdown.extension = function (name, ext) {
          'use strict';

          if (!showdown.helper.isString(name)) {
            throw Error('Extension \'name\' must be a string');
          }

          name = showdown.helper.stdExtName(name); // Getter

          if (showdown.helper.isUndefined(ext)) {
            if (!extensions.hasOwnProperty(name)) {
              throw Error('Extension named ' + name + ' is not registered!');
            }

            return extensions[name]; // Setter
          } else {
            // Expand extension if it's wrapped in a function
            if (typeof ext === 'function') {
              ext = ext();
            } // Ensure extension is an array


            if (!showdown.helper.isArray(ext)) {
              ext = [ext];
            }

            var validExtension = validate(ext, name);

            if (validExtension.valid) {
              extensions[name] = ext;
            } else {
              throw Error(validExtension.error);
            }
          }
        };
        /**
         * Gets all extensions registered
         * @returns {{}}
         */


        showdown.getAllExtensions = function () {
          'use strict';

          return extensions;
        };
        /**
         * Remove an extension
         * @param {string} name
         */


        showdown.removeExtension = function (name) {
          'use strict';

          delete extensions[name];
        };
        /**
         * Removes all extensions
         */


        showdown.resetExtensions = function () {
          'use strict';

          extensions = {};
        };
        /**
         * Validate extension
         * @param {array} extension
         * @param {string} name
         * @returns {{valid: boolean, error: string}}
         */


        function validate(extension, name) {
          'use strict';

          var errMsg = name ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
              ret = {
            valid: true,
            error: ''
          };

          if (!showdown.helper.isArray(extension)) {
            extension = [extension];
          }

          for (var i = 0; i < extension.length; ++i) {
            var baseMsg = errMsg + ' sub-extension ' + i + ': ',
                ext = extension[i];

            if (typeof ext !== 'object') {
              ret.valid = false;
              ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
              return ret;
            }

            if (!showdown.helper.isString(ext.type)) {
              ret.valid = false;
              ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
              return ret;
            }

            var type = ext.type = ext.type.toLowerCase(); // normalize extension type

            if (type === 'language') {
              type = ext.type = 'lang';
            }

            if (type === 'html') {
              type = ext.type = 'output';
            }

            if (type !== 'lang' && type !== 'output' && type !== 'listener') {
              ret.valid = false;
              ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
              return ret;
            }

            if (type === 'listener') {
              if (showdown.helper.isUndefined(ext.listeners)) {
                ret.valid = false;
                ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
                return ret;
              }
            } else {
              if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
                ret.valid = false;
                ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
                return ret;
              }
            }

            if (ext.listeners) {
              if (typeof ext.listeners !== 'object') {
                ret.valid = false;
                ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
                return ret;
              }

              for (var ln in ext.listeners) {
                if (ext.listeners.hasOwnProperty(ln)) {
                  if (typeof ext.listeners[ln] !== 'function') {
                    ret.valid = false;
                    ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + ' must be a function but ' + typeof ext.listeners[ln] + ' given';
                    return ret;
                  }
                }
              }
            }

            if (ext.filter) {
              if (typeof ext.filter !== 'function') {
                ret.valid = false;
                ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
                return ret;
              }
            } else if (ext.regex) {
              if (showdown.helper.isString(ext.regex)) {
                ext.regex = new RegExp(ext.regex, 'g');
              }

              if (!(ext.regex instanceof RegExp)) {
                ret.valid = false;
                ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
                return ret;
              }

              if (showdown.helper.isUndefined(ext.replace)) {
                ret.valid = false;
                ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
                return ret;
              }
            }
          }

          return ret;
        }
        /**
         * Validate extension
         * @param {object} ext
         * @returns {boolean}
         */


        showdown.validateExtension = function (ext) {
          'use strict';

          var validateExtension = validate(ext, null);

          if (!validateExtension.valid) {
            console.warn(validateExtension.error);
            return false;
          }

          return true;
        };
        /**
         * showdownjs helper functions
         */


        if (!showdown.hasOwnProperty('helper')) {
          showdown.helper = {};
        }
        /**
         * Check if var is string
         * @static
         * @param {string} a
         * @returns {boolean}
         */


        showdown.helper.isString = function (a) {
          'use strict';

          return typeof a === 'string' || a instanceof String;
        };
        /**
         * Check if var is a function
         * @static
         * @param {*} a
         * @returns {boolean}
         */


        showdown.helper.isFunction = function (a) {
          'use strict';

          var getType = {};
          return a && getType.toString.call(a) === '[object Function]';
        };
        /**
         * isArray helper function
         * @static
         * @param {*} a
         * @returns {boolean}
         */


        showdown.helper.isArray = function (a) {
          'use strict';

          return Array.isArray(a);
        };
        /**
         * Check if value is undefined
         * @static
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
         */


        showdown.helper.isUndefined = function (value) {
          'use strict';

          return typeof value === 'undefined';
        };
        /**
         * ForEach helper function
         * Iterates over Arrays and Objects (own properties only)
         * @static
         * @param {*} obj
         * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
         */


        showdown.helper.forEach = function (obj, callback) {
          'use strict'; // check if obj is defined

          if (showdown.helper.isUndefined(obj)) {
            throw new Error('obj param is required');
          }

          if (showdown.helper.isUndefined(callback)) {
            throw new Error('callback param is required');
          }

          if (!showdown.helper.isFunction(callback)) {
            throw new Error('callback param must be a function/closure');
          }

          if (typeof obj.forEach === 'function') {
            obj.forEach(callback);
          } else if (showdown.helper.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
              callback(obj[i], i, obj);
            }
          } else if (typeof obj === 'object') {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                callback(obj[prop], prop, obj);
              }
            }
          } else {
            throw new Error('obj does not seem to be an array or an iterable object');
          }
        };
        /**
         * Standardidize extension name
         * @static
         * @param {string} s extension name
         * @returns {string}
         */


        showdown.helper.stdExtName = function (s) {
          'use strict';

          return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
        };

        function escapeCharactersCallback(wholeMatch, m1) {
          'use strict';

          var charCodeToEscape = m1.charCodeAt(0);
          return '¨E' + charCodeToEscape + 'E';
        }
        /**
         * Callback used to escape characters when passing through String.replace
         * @static
         * @param {string} wholeMatch
         * @param {string} m1
         * @returns {string}
         */


        showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
        /**
         * Escape characters in a string
         * @static
         * @param {string} text
         * @param {string} charsToEscape
         * @param {boolean} afterBackslash
         * @returns {XML|string|void|*}
         */

        showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
          'use strict'; // First we have to escape the escape characters so that
          // we can build a character class out of them

          var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

          if (afterBackslash) {
            regexString = '\\\\' + regexString;
          }

          var regex = new RegExp(regexString, 'g');
          text = text.replace(regex, escapeCharactersCallback);
          return text;
        };
        /**
         * Unescape HTML entities
         * @param txt
         * @returns {string}
         */


        showdown.helper.unescapeHTMLEntities = function (txt) {
          'use strict';

          return txt.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        };

        var rgxFindMatchPos = function rgxFindMatchPos(str, left, right, flags) {
          'use strict';

          var f = flags || '',
              g = f.indexOf('g') > -1,
              x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
              l = new RegExp(left, f.replace(/g/g, '')),
              pos = [],
              t,
              s,
              m,
              start,
              end;

          do {
            t = 0;

            while (m = x.exec(str)) {
              if (l.test(m[0])) {
                if (!t++) {
                  s = x.lastIndex;
                  start = s - m[0].length;
                }
              } else if (t) {
                if (! --t) {
                  end = m.index + m[0].length;
                  var obj = {
                    left: {
                      start: start,
                      end: s
                    },
                    match: {
                      start: s,
                      end: m.index
                    },
                    right: {
                      start: m.index,
                      end: end
                    },
                    wholeMatch: {
                      start: start,
                      end: end
                    }
                  };
                  pos.push(obj);

                  if (!g) {
                    return pos;
                  }
                }
              }
            }
          } while (t && (x.lastIndex = s));

          return pos;
        };
        /**
         * matchRecursiveRegExp
         *
         * (c) 2007 Steven Levithan <stevenlevithan.com>
         * MIT License
         *
         * Accepts a string to search, a left and right format delimiter
         * as regex patterns, and optional regex flags. Returns an array
         * of matches, allowing nested instances of left/right delimiters.
         * Use the "g" flag to return all matches, otherwise only the
         * first is returned. Be careful to ensure that the left and
         * right format delimiters produce mutually exclusive matches.
         * Backreferences are not supported within the right delimiter
         * due to how it is internally combined with the left delimiter.
         * When matching strings whose format delimiters are unbalanced
         * to the left or right, the output is intentionally as a
         * conventional regex library with recursion support would
         * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
         * "<" and ">" as the delimiters (both strings contain a single,
         * balanced instance of "<x>").
         *
         * examples:
         * matchRecursiveRegExp("test", "\\(", "\\)")
         * returns: []
         * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
         * returns: ["t<<e>><s>", ""]
         * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
         * returns: ["test"]
         */


        showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
          'use strict';

          var matchPos = rgxFindMatchPos(str, left, right, flags),
              results = [];

          for (var i = 0; i < matchPos.length; ++i) {
            results.push([str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)]);
          }

          return results;
        };
        /**
         *
         * @param {string} str
         * @param {string|function} replacement
         * @param {string} left
         * @param {string} right
         * @param {string} flags
         * @returns {string}
         */


        showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
          'use strict';

          if (!showdown.helper.isFunction(replacement)) {
            var repStr = replacement;

            replacement = function replacement() {
              return repStr;
            };
          }

          var matchPos = rgxFindMatchPos(str, left, right, flags),
              finalStr = str,
              lng = matchPos.length;

          if (lng > 0) {
            var bits = [];

            if (matchPos[0].wholeMatch.start !== 0) {
              bits.push(str.slice(0, matchPos[0].wholeMatch.start));
            }

            for (var i = 0; i < lng; ++i) {
              bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));

              if (i < lng - 1) {
                bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
              }
            }

            if (matchPos[lng - 1].wholeMatch.end < str.length) {
              bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
            }

            finalStr = bits.join('');
          }

          return finalStr;
        };
        /**
         * Returns the index within the passed String object of the first occurrence of the specified regex,
         * starting the search at fromIndex. Returns -1 if the value is not found.
         *
         * @param {string} str string to search
         * @param {RegExp} regex Regular expression to search
         * @param {int} [fromIndex = 0] Index to start the search
         * @returns {Number}
         * @throws InvalidArgumentError
         */


        showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
          'use strict';

          if (!showdown.helper.isString(str)) {
            throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
          }

          if (regex instanceof RegExp === false) {
            throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
          }

          var indexOf = str.substring(fromIndex || 0).search(regex);
          return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
        };
        /**
         * Splits the passed string object at the defined index, and returns an array composed of the two substrings
         * @param {string} str string to split
         * @param {int} index index to split string at
         * @returns {[string,string]}
         * @throws InvalidArgumentError
         */


        showdown.helper.splitAtIndex = function (str, index) {
          'use strict';

          if (!showdown.helper.isString(str)) {
            throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
          }

          return [str.substring(0, index), str.substring(index)];
        };
        /**
         * Obfuscate an e-mail address through the use of Character Entities,
         * transforming ASCII characters into their equivalent decimal or hex entities.
         *
         * Since it has a random component, subsequent calls to this function produce different results
         *
         * @param {string} mail
         * @returns {string}
         */


        showdown.helper.encodeEmailAddress = function (mail) {
          'use strict';

          var encode = [function (ch) {
            return '&#' + ch.charCodeAt(0) + ';';
          }, function (ch) {
            return '&#x' + ch.charCodeAt(0).toString(16) + ';';
          }, function (ch) {
            return ch;
          }];
          mail = mail.replace(/./g, function (ch) {
            if (ch === '@') {
              // this *must* be encoded. I insist.
              ch = encode[Math.floor(Math.random() * 2)](ch);
            } else {
              var r = Math.random(); // roughly 10% raw, 45% hex, 45% dec

              ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
            }

            return ch;
          });
          return mail;
        };
        /**
         *
         * @param str
         * @param targetLength
         * @param padString
         * @returns {string}
         */


        showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
          'use strict';
          /*jshint bitwise: false*/
          // eslint-disable-next-line space-infix-ops

          targetLength = targetLength >> 0; //floor if number or convert non-number to 0;

          /*jshint bitwise: true*/

          padString = String(padString || ' ');

          if (str.length > targetLength) {
            return String(str);
          } else {
            targetLength = targetLength - str.length;

            if (targetLength > padString.length) {
              padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }

            return String(str) + padString.slice(0, targetLength);
          }
        };
        /**
         * POLYFILLS
         */
        // use this instead of builtin is undefined for IE8 compatibility


        if (typeof console === 'undefined') {
          console = {
            warn: function warn(msg) {
              'use strict';

              alert(msg);
            },
            log: function log(msg) {
              'use strict';

              alert(msg);
            },
            error: function error(msg) {
              'use strict';

              throw msg;
            }
          };
        }
        /**
         * Common regexes.
         * We declare some common regexes to improve performance
         */


        showdown.helper.regexes = {
          asteriskDashAndColon: /([*_:~])/g
        };
        /**
         * EMOJIS LIST
         */

        showdown.helper.emojis = {
          '+1': "\uD83D\uDC4D",
          '-1': "\uD83D\uDC4E",
          '100': "\uD83D\uDCAF",
          '1234': "\uD83D\uDD22",
          '1st_place_medal': "\uD83E\uDD47",
          '2nd_place_medal': "\uD83E\uDD48",
          '3rd_place_medal': "\uD83E\uDD49",
          '8ball': "\uD83C\uDFB1",
          'a': "\uD83C\uDD70\uFE0F",
          'ab': "\uD83C\uDD8E",
          'abc': "\uD83D\uDD24",
          'abcd': "\uD83D\uDD21",
          'accept': "\uD83C\uDE51",
          'aerial_tramway': "\uD83D\uDEA1",
          'airplane': "\u2708\uFE0F",
          'alarm_clock': "\u23F0",
          'alembic': "\u2697\uFE0F",
          'alien': "\uD83D\uDC7D",
          'ambulance': "\uD83D\uDE91",
          'amphora': "\uD83C\uDFFA",
          'anchor': "\u2693\uFE0F",
          'angel': "\uD83D\uDC7C",
          'anger': "\uD83D\uDCA2",
          'angry': "\uD83D\uDE20",
          'anguished': "\uD83D\uDE27",
          'ant': "\uD83D\uDC1C",
          'apple': "\uD83C\uDF4E",
          'aquarius': "\u2652\uFE0F",
          'aries': "\u2648\uFE0F",
          'arrow_backward': "\u25C0\uFE0F",
          'arrow_double_down': "\u23EC",
          'arrow_double_up': "\u23EB",
          'arrow_down': "\u2B07\uFE0F",
          'arrow_down_small': "\uD83D\uDD3D",
          'arrow_forward': "\u25B6\uFE0F",
          'arrow_heading_down': "\u2935\uFE0F",
          'arrow_heading_up': "\u2934\uFE0F",
          'arrow_left': "\u2B05\uFE0F",
          'arrow_lower_left': "\u2199\uFE0F",
          'arrow_lower_right': "\u2198\uFE0F",
          'arrow_right': "\u27A1\uFE0F",
          'arrow_right_hook': "\u21AA\uFE0F",
          'arrow_up': "\u2B06\uFE0F",
          'arrow_up_down': "\u2195\uFE0F",
          'arrow_up_small': "\uD83D\uDD3C",
          'arrow_upper_left': "\u2196\uFE0F",
          'arrow_upper_right': "\u2197\uFE0F",
          'arrows_clockwise': "\uD83D\uDD03",
          'arrows_counterclockwise': "\uD83D\uDD04",
          'art': "\uD83C\uDFA8",
          'articulated_lorry': "\uD83D\uDE9B",
          'artificial_satellite': "\uD83D\uDEF0",
          'astonished': "\uD83D\uDE32",
          'athletic_shoe': "\uD83D\uDC5F",
          'atm': "\uD83C\uDFE7",
          'atom_symbol': "\u269B\uFE0F",
          'avocado': "\uD83E\uDD51",
          'b': "\uD83C\uDD71\uFE0F",
          'baby': "\uD83D\uDC76",
          'baby_bottle': "\uD83C\uDF7C",
          'baby_chick': "\uD83D\uDC24",
          'baby_symbol': "\uD83D\uDEBC",
          'back': "\uD83D\uDD19",
          'bacon': "\uD83E\uDD53",
          'badminton': "\uD83C\uDFF8",
          'baggage_claim': "\uD83D\uDEC4",
          'baguette_bread': "\uD83E\uDD56",
          'balance_scale': "\u2696\uFE0F",
          'balloon': "\uD83C\uDF88",
          'ballot_box': "\uD83D\uDDF3",
          'ballot_box_with_check': "\u2611\uFE0F",
          'bamboo': "\uD83C\uDF8D",
          'banana': "\uD83C\uDF4C",
          'bangbang': "\u203C\uFE0F",
          'bank': "\uD83C\uDFE6",
          'bar_chart': "\uD83D\uDCCA",
          'barber': "\uD83D\uDC88",
          'baseball': "\u26BE\uFE0F",
          'basketball': "\uD83C\uDFC0",
          'basketball_man': "\u26F9\uFE0F",
          'basketball_woman': "\u26F9\uFE0F&zwj;\u2640\uFE0F",
          'bat': "\uD83E\uDD87",
          'bath': "\uD83D\uDEC0",
          'bathtub': "\uD83D\uDEC1",
          'battery': "\uD83D\uDD0B",
          'beach_umbrella': "\uD83C\uDFD6",
          'bear': "\uD83D\uDC3B",
          'bed': "\uD83D\uDECF",
          'bee': "\uD83D\uDC1D",
          'beer': "\uD83C\uDF7A",
          'beers': "\uD83C\uDF7B",
          'beetle': "\uD83D\uDC1E",
          'beginner': "\uD83D\uDD30",
          'bell': "\uD83D\uDD14",
          'bellhop_bell': "\uD83D\uDECE",
          'bento': "\uD83C\uDF71",
          'biking_man': "\uD83D\uDEB4",
          'bike': "\uD83D\uDEB2",
          'biking_woman': "\uD83D\uDEB4&zwj;\u2640\uFE0F",
          'bikini': "\uD83D\uDC59",
          'biohazard': "\u2623\uFE0F",
          'bird': "\uD83D\uDC26",
          'birthday': "\uD83C\uDF82",
          'black_circle': "\u26AB\uFE0F",
          'black_flag': "\uD83C\uDFF4",
          'black_heart': "\uD83D\uDDA4",
          'black_joker': "\uD83C\uDCCF",
          'black_large_square': "\u2B1B\uFE0F",
          'black_medium_small_square': "\u25FE\uFE0F",
          'black_medium_square': "\u25FC\uFE0F",
          'black_nib': "\u2712\uFE0F",
          'black_small_square': "\u25AA\uFE0F",
          'black_square_button': "\uD83D\uDD32",
          'blonde_man': "\uD83D\uDC71",
          'blonde_woman': "\uD83D\uDC71&zwj;\u2640\uFE0F",
          'blossom': "\uD83C\uDF3C",
          'blowfish': "\uD83D\uDC21",
          'blue_book': "\uD83D\uDCD8",
          'blue_car': "\uD83D\uDE99",
          'blue_heart': "\uD83D\uDC99",
          'blush': "\uD83D\uDE0A",
          'boar': "\uD83D\uDC17",
          'boat': "\u26F5\uFE0F",
          'bomb': "\uD83D\uDCA3",
          'book': "\uD83D\uDCD6",
          'bookmark': "\uD83D\uDD16",
          'bookmark_tabs': "\uD83D\uDCD1",
          'books': "\uD83D\uDCDA",
          'boom': "\uD83D\uDCA5",
          'boot': "\uD83D\uDC62",
          'bouquet': "\uD83D\uDC90",
          'bowing_man': "\uD83D\uDE47",
          'bow_and_arrow': "\uD83C\uDFF9",
          'bowing_woman': "\uD83D\uDE47&zwj;\u2640\uFE0F",
          'bowling': "\uD83C\uDFB3",
          'boxing_glove': "\uD83E\uDD4A",
          'boy': "\uD83D\uDC66",
          'bread': "\uD83C\uDF5E",
          'bride_with_veil': "\uD83D\uDC70",
          'bridge_at_night': "\uD83C\uDF09",
          'briefcase': "\uD83D\uDCBC",
          'broken_heart': "\uD83D\uDC94",
          'bug': "\uD83D\uDC1B",
          'building_construction': "\uD83C\uDFD7",
          'bulb': "\uD83D\uDCA1",
          'bullettrain_front': "\uD83D\uDE85",
          'bullettrain_side': "\uD83D\uDE84",
          'burrito': "\uD83C\uDF2F",
          'bus': "\uD83D\uDE8C",
          'business_suit_levitating': "\uD83D\uDD74",
          'busstop': "\uD83D\uDE8F",
          'bust_in_silhouette': "\uD83D\uDC64",
          'busts_in_silhouette': "\uD83D\uDC65",
          'butterfly': "\uD83E\uDD8B",
          'cactus': "\uD83C\uDF35",
          'cake': "\uD83C\uDF70",
          'calendar': "\uD83D\uDCC6",
          'call_me_hand': "\uD83E\uDD19",
          'calling': "\uD83D\uDCF2",
          'camel': "\uD83D\uDC2B",
          'camera': "\uD83D\uDCF7",
          'camera_flash': "\uD83D\uDCF8",
          'camping': "\uD83C\uDFD5",
          'cancer': "\u264B\uFE0F",
          'candle': "\uD83D\uDD6F",
          'candy': "\uD83C\uDF6C",
          'canoe': "\uD83D\uDEF6",
          'capital_abcd': "\uD83D\uDD20",
          'capricorn': "\u2651\uFE0F",
          'car': "\uD83D\uDE97",
          'card_file_box': "\uD83D\uDDC3",
          'card_index': "\uD83D\uDCC7",
          'card_index_dividers': "\uD83D\uDDC2",
          'carousel_horse': "\uD83C\uDFA0",
          'carrot': "\uD83E\uDD55",
          'cat': "\uD83D\uDC31",
          'cat2': "\uD83D\uDC08",
          'cd': "\uD83D\uDCBF",
          'chains': "\u26D3",
          'champagne': "\uD83C\uDF7E",
          'chart': "\uD83D\uDCB9",
          'chart_with_downwards_trend': "\uD83D\uDCC9",
          'chart_with_upwards_trend': "\uD83D\uDCC8",
          'checkered_flag': "\uD83C\uDFC1",
          'cheese': "\uD83E\uDDC0",
          'cherries': "\uD83C\uDF52",
          'cherry_blossom': "\uD83C\uDF38",
          'chestnut': "\uD83C\uDF30",
          'chicken': "\uD83D\uDC14",
          'children_crossing': "\uD83D\uDEB8",
          'chipmunk': "\uD83D\uDC3F",
          'chocolate_bar': "\uD83C\uDF6B",
          'christmas_tree': "\uD83C\uDF84",
          'church': "\u26EA\uFE0F",
          'cinema': "\uD83C\uDFA6",
          'circus_tent': "\uD83C\uDFAA",
          'city_sunrise': "\uD83C\uDF07",
          'city_sunset': "\uD83C\uDF06",
          'cityscape': "\uD83C\uDFD9",
          'cl': "\uD83C\uDD91",
          'clamp': "\uD83D\uDDDC",
          'clap': "\uD83D\uDC4F",
          'clapper': "\uD83C\uDFAC",
          'classical_building': "\uD83C\uDFDB",
          'clinking_glasses': "\uD83E\uDD42",
          'clipboard': "\uD83D\uDCCB",
          'clock1': "\uD83D\uDD50",
          'clock10': "\uD83D\uDD59",
          'clock1030': "\uD83D\uDD65",
          'clock11': "\uD83D\uDD5A",
          'clock1130': "\uD83D\uDD66",
          'clock12': "\uD83D\uDD5B",
          'clock1230': "\uD83D\uDD67",
          'clock130': "\uD83D\uDD5C",
          'clock2': "\uD83D\uDD51",
          'clock230': "\uD83D\uDD5D",
          'clock3': "\uD83D\uDD52",
          'clock330': "\uD83D\uDD5E",
          'clock4': "\uD83D\uDD53",
          'clock430': "\uD83D\uDD5F",
          'clock5': "\uD83D\uDD54",
          'clock530': "\uD83D\uDD60",
          'clock6': "\uD83D\uDD55",
          'clock630': "\uD83D\uDD61",
          'clock7': "\uD83D\uDD56",
          'clock730': "\uD83D\uDD62",
          'clock8': "\uD83D\uDD57",
          'clock830': "\uD83D\uDD63",
          'clock9': "\uD83D\uDD58",
          'clock930': "\uD83D\uDD64",
          'closed_book': "\uD83D\uDCD5",
          'closed_lock_with_key': "\uD83D\uDD10",
          'closed_umbrella': "\uD83C\uDF02",
          'cloud': "\u2601\uFE0F",
          'cloud_with_lightning': "\uD83C\uDF29",
          'cloud_with_lightning_and_rain': "\u26C8",
          'cloud_with_rain': "\uD83C\uDF27",
          'cloud_with_snow': "\uD83C\uDF28",
          'clown_face': "\uD83E\uDD21",
          'clubs': "\u2663\uFE0F",
          'cocktail': "\uD83C\uDF78",
          'coffee': "\u2615\uFE0F",
          'coffin': "\u26B0\uFE0F",
          'cold_sweat': "\uD83D\uDE30",
          'comet': "\u2604\uFE0F",
          'computer': "\uD83D\uDCBB",
          'computer_mouse': "\uD83D\uDDB1",
          'confetti_ball': "\uD83C\uDF8A",
          'confounded': "\uD83D\uDE16",
          'confused': "\uD83D\uDE15",
          'congratulations': "\u3297\uFE0F",
          'construction': "\uD83D\uDEA7",
          'construction_worker_man': "\uD83D\uDC77",
          'construction_worker_woman': "\uD83D\uDC77&zwj;\u2640\uFE0F",
          'control_knobs': "\uD83C\uDF9B",
          'convenience_store': "\uD83C\uDFEA",
          'cookie': "\uD83C\uDF6A",
          'cool': "\uD83C\uDD92",
          'policeman': "\uD83D\uDC6E",
          'copyright': "\xA9\uFE0F",
          'corn': "\uD83C\uDF3D",
          'couch_and_lamp': "\uD83D\uDECB",
          'couple': "\uD83D\uDC6B",
          'couple_with_heart_woman_man': "\uD83D\uDC91",
          'couple_with_heart_man_man': "\uD83D\uDC68&zwj;\u2764\uFE0F&zwj;\uD83D\uDC68",
          'couple_with_heart_woman_woman': "\uD83D\uDC69&zwj;\u2764\uFE0F&zwj;\uD83D\uDC69",
          'couplekiss_man_man': "\uD83D\uDC68&zwj;\u2764\uFE0F&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC68",
          'couplekiss_man_woman': "\uD83D\uDC8F",
          'couplekiss_woman_woman': "\uD83D\uDC69&zwj;\u2764\uFE0F&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC69",
          'cow': "\uD83D\uDC2E",
          'cow2': "\uD83D\uDC04",
          'cowboy_hat_face': "\uD83E\uDD20",
          'crab': "\uD83E\uDD80",
          'crayon': "\uD83D\uDD8D",
          'credit_card': "\uD83D\uDCB3",
          'crescent_moon': "\uD83C\uDF19",
          'cricket': "\uD83C\uDFCF",
          'crocodile': "\uD83D\uDC0A",
          'croissant': "\uD83E\uDD50",
          'crossed_fingers': "\uD83E\uDD1E",
          'crossed_flags': "\uD83C\uDF8C",
          'crossed_swords': "\u2694\uFE0F",
          'crown': "\uD83D\uDC51",
          'cry': "\uD83D\uDE22",
          'crying_cat_face': "\uD83D\uDE3F",
          'crystal_ball': "\uD83D\uDD2E",
          'cucumber': "\uD83E\uDD52",
          'cupid': "\uD83D\uDC98",
          'curly_loop': "\u27B0",
          'currency_exchange': "\uD83D\uDCB1",
          'curry': "\uD83C\uDF5B",
          'custard': "\uD83C\uDF6E",
          'customs': "\uD83D\uDEC3",
          'cyclone': "\uD83C\uDF00",
          'dagger': "\uD83D\uDDE1",
          'dancer': "\uD83D\uDC83",
          'dancing_women': "\uD83D\uDC6F",
          'dancing_men': "\uD83D\uDC6F&zwj;\u2642\uFE0F",
          'dango': "\uD83C\uDF61",
          'dark_sunglasses': "\uD83D\uDD76",
          'dart': "\uD83C\uDFAF",
          'dash': "\uD83D\uDCA8",
          'date': "\uD83D\uDCC5",
          'deciduous_tree': "\uD83C\uDF33",
          'deer': "\uD83E\uDD8C",
          'department_store': "\uD83C\uDFEC",
          'derelict_house': "\uD83C\uDFDA",
          'desert': "\uD83C\uDFDC",
          'desert_island': "\uD83C\uDFDD",
          'desktop_computer': "\uD83D\uDDA5",
          'male_detective': "\uD83D\uDD75\uFE0F",
          'diamond_shape_with_a_dot_inside': "\uD83D\uDCA0",
          'diamonds': "\u2666\uFE0F",
          'disappointed': "\uD83D\uDE1E",
          'disappointed_relieved': "\uD83D\uDE25",
          'dizzy': "\uD83D\uDCAB",
          'dizzy_face': "\uD83D\uDE35",
          'do_not_litter': "\uD83D\uDEAF",
          'dog': "\uD83D\uDC36",
          'dog2': "\uD83D\uDC15",
          'dollar': "\uD83D\uDCB5",
          'dolls': "\uD83C\uDF8E",
          'dolphin': "\uD83D\uDC2C",
          'door': "\uD83D\uDEAA",
          'doughnut': "\uD83C\uDF69",
          'dove': "\uD83D\uDD4A",
          'dragon': "\uD83D\uDC09",
          'dragon_face': "\uD83D\uDC32",
          'dress': "\uD83D\uDC57",
          'dromedary_camel': "\uD83D\uDC2A",
          'drooling_face': "\uD83E\uDD24",
          'droplet': "\uD83D\uDCA7",
          'drum': "\uD83E\uDD41",
          'duck': "\uD83E\uDD86",
          'dvd': "\uD83D\uDCC0",
          'e-mail': "\uD83D\uDCE7",
          'eagle': "\uD83E\uDD85",
          'ear': "\uD83D\uDC42",
          'ear_of_rice': "\uD83C\uDF3E",
          'earth_africa': "\uD83C\uDF0D",
          'earth_americas': "\uD83C\uDF0E",
          'earth_asia': "\uD83C\uDF0F",
          'egg': "\uD83E\uDD5A",
          'eggplant': "\uD83C\uDF46",
          'eight_pointed_black_star': "\u2734\uFE0F",
          'eight_spoked_asterisk': "\u2733\uFE0F",
          'electric_plug': "\uD83D\uDD0C",
          'elephant': "\uD83D\uDC18",
          'email': "\u2709\uFE0F",
          'end': "\uD83D\uDD1A",
          'envelope_with_arrow': "\uD83D\uDCE9",
          'euro': "\uD83D\uDCB6",
          'european_castle': "\uD83C\uDFF0",
          'european_post_office': "\uD83C\uDFE4",
          'evergreen_tree': "\uD83C\uDF32",
          'exclamation': "\u2757\uFE0F",
          'expressionless': "\uD83D\uDE11",
          'eye': "\uD83D\uDC41",
          'eye_speech_bubble': "\uD83D\uDC41&zwj;\uD83D\uDDE8",
          'eyeglasses': "\uD83D\uDC53",
          'eyes': "\uD83D\uDC40",
          'face_with_head_bandage': "\uD83E\uDD15",
          'face_with_thermometer': "\uD83E\uDD12",
          'fist_oncoming': "\uD83D\uDC4A",
          'factory': "\uD83C\uDFED",
          'fallen_leaf': "\uD83C\uDF42",
          'family_man_woman_boy': "\uD83D\uDC6A",
          'family_man_boy': "\uD83D\uDC68&zwj;\uD83D\uDC66",
          'family_man_boy_boy': "\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
          'family_man_girl': "\uD83D\uDC68&zwj;\uD83D\uDC67",
          'family_man_girl_boy': "\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
          'family_man_girl_girl': "\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
          'family_man_man_boy': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66",
          'family_man_man_boy_boy': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
          'family_man_man_girl': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67",
          'family_man_man_girl_boy': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
          'family_man_man_girl_girl': "\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
          'family_man_woman_boy_boy': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
          'family_man_woman_girl': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67",
          'family_man_woman_girl_boy': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
          'family_man_woman_girl_girl': "\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
          'family_woman_boy': "\uD83D\uDC69&zwj;\uD83D\uDC66",
          'family_woman_boy_boy': "\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
          'family_woman_girl': "\uD83D\uDC69&zwj;\uD83D\uDC67",
          'family_woman_girl_boy': "\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
          'family_woman_girl_girl': "\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
          'family_woman_woman_boy': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66",
          'family_woman_woman_boy_boy': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66",
          'family_woman_woman_girl': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67",
          'family_woman_woman_girl_boy': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66",
          'family_woman_woman_girl_girl': "\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67",
          'fast_forward': "\u23E9",
          'fax': "\uD83D\uDCE0",
          'fearful': "\uD83D\uDE28",
          'feet': "\uD83D\uDC3E",
          'female_detective': "\uD83D\uDD75\uFE0F&zwj;\u2640\uFE0F",
          'ferris_wheel': "\uD83C\uDFA1",
          'ferry': "\u26F4",
          'field_hockey': "\uD83C\uDFD1",
          'file_cabinet': "\uD83D\uDDC4",
          'file_folder': "\uD83D\uDCC1",
          'film_projector': "\uD83D\uDCFD",
          'film_strip': "\uD83C\uDF9E",
          'fire': "\uD83D\uDD25",
          'fire_engine': "\uD83D\uDE92",
          'fireworks': "\uD83C\uDF86",
          'first_quarter_moon': "\uD83C\uDF13",
          'first_quarter_moon_with_face': "\uD83C\uDF1B",
          'fish': "\uD83D\uDC1F",
          'fish_cake': "\uD83C\uDF65",
          'fishing_pole_and_fish': "\uD83C\uDFA3",
          'fist_raised': "\u270A",
          'fist_left': "\uD83E\uDD1B",
          'fist_right': "\uD83E\uDD1C",
          'flags': "\uD83C\uDF8F",
          'flashlight': "\uD83D\uDD26",
          'fleur_de_lis': "\u269C\uFE0F",
          'flight_arrival': "\uD83D\uDEEC",
          'flight_departure': "\uD83D\uDEEB",
          'floppy_disk': "\uD83D\uDCBE",
          'flower_playing_cards': "\uD83C\uDFB4",
          'flushed': "\uD83D\uDE33",
          'fog': "\uD83C\uDF2B",
          'foggy': "\uD83C\uDF01",
          'football': "\uD83C\uDFC8",
          'footprints': "\uD83D\uDC63",
          'fork_and_knife': "\uD83C\uDF74",
          'fountain': "\u26F2\uFE0F",
          'fountain_pen': "\uD83D\uDD8B",
          'four_leaf_clover': "\uD83C\uDF40",
          'fox_face': "\uD83E\uDD8A",
          'framed_picture': "\uD83D\uDDBC",
          'free': "\uD83C\uDD93",
          'fried_egg': "\uD83C\uDF73",
          'fried_shrimp': "\uD83C\uDF64",
          'fries': "\uD83C\uDF5F",
          'frog': "\uD83D\uDC38",
          'frowning': "\uD83D\uDE26",
          'frowning_face': "\u2639\uFE0F",
          'frowning_man': "\uD83D\uDE4D&zwj;\u2642\uFE0F",
          'frowning_woman': "\uD83D\uDE4D",
          'middle_finger': "\uD83D\uDD95",
          'fuelpump': "\u26FD\uFE0F",
          'full_moon': "\uD83C\uDF15",
          'full_moon_with_face': "\uD83C\uDF1D",
          'funeral_urn': "\u26B1\uFE0F",
          'game_die': "\uD83C\uDFB2",
          'gear': "\u2699\uFE0F",
          'gem': "\uD83D\uDC8E",
          'gemini': "\u264A\uFE0F",
          'ghost': "\uD83D\uDC7B",
          'gift': "\uD83C\uDF81",
          'gift_heart': "\uD83D\uDC9D",
          'girl': "\uD83D\uDC67",
          'globe_with_meridians': "\uD83C\uDF10",
          'goal_net': "\uD83E\uDD45",
          'goat': "\uD83D\uDC10",
          'golf': "\u26F3\uFE0F",
          'golfing_man': "\uD83C\uDFCC\uFE0F",
          'golfing_woman': "\uD83C\uDFCC\uFE0F&zwj;\u2640\uFE0F",
          'gorilla': "\uD83E\uDD8D",
          'grapes': "\uD83C\uDF47",
          'green_apple': "\uD83C\uDF4F",
          'green_book': "\uD83D\uDCD7",
          'green_heart': "\uD83D\uDC9A",
          'green_salad': "\uD83E\uDD57",
          'grey_exclamation': "\u2755",
          'grey_question': "\u2754",
          'grimacing': "\uD83D\uDE2C",
          'grin': "\uD83D\uDE01",
          'grinning': "\uD83D\uDE00",
          'guardsman': "\uD83D\uDC82",
          'guardswoman': "\uD83D\uDC82&zwj;\u2640\uFE0F",
          'guitar': "\uD83C\uDFB8",
          'gun': "\uD83D\uDD2B",
          'haircut_woman': "\uD83D\uDC87",
          'haircut_man': "\uD83D\uDC87&zwj;\u2642\uFE0F",
          'hamburger': "\uD83C\uDF54",
          'hammer': "\uD83D\uDD28",
          'hammer_and_pick': "\u2692",
          'hammer_and_wrench': "\uD83D\uDEE0",
          'hamster': "\uD83D\uDC39",
          'hand': "\u270B",
          'handbag': "\uD83D\uDC5C",
          'handshake': "\uD83E\uDD1D",
          'hankey': "\uD83D\uDCA9",
          'hatched_chick': "\uD83D\uDC25",
          'hatching_chick': "\uD83D\uDC23",
          'headphones': "\uD83C\uDFA7",
          'hear_no_evil': "\uD83D\uDE49",
          'heart': "\u2764\uFE0F",
          'heart_decoration': "\uD83D\uDC9F",
          'heart_eyes': "\uD83D\uDE0D",
          'heart_eyes_cat': "\uD83D\uDE3B",
          'heartbeat': "\uD83D\uDC93",
          'heartpulse': "\uD83D\uDC97",
          'hearts': "\u2665\uFE0F",
          'heavy_check_mark': "\u2714\uFE0F",
          'heavy_division_sign': "\u2797",
          'heavy_dollar_sign': "\uD83D\uDCB2",
          'heavy_heart_exclamation': "\u2763\uFE0F",
          'heavy_minus_sign': "\u2796",
          'heavy_multiplication_x': "\u2716\uFE0F",
          'heavy_plus_sign': "\u2795",
          'helicopter': "\uD83D\uDE81",
          'herb': "\uD83C\uDF3F",
          'hibiscus': "\uD83C\uDF3A",
          'high_brightness': "\uD83D\uDD06",
          'high_heel': "\uD83D\uDC60",
          'hocho': "\uD83D\uDD2A",
          'hole': "\uD83D\uDD73",
          'honey_pot': "\uD83C\uDF6F",
          'horse': "\uD83D\uDC34",
          'horse_racing': "\uD83C\uDFC7",
          'hospital': "\uD83C\uDFE5",
          'hot_pepper': "\uD83C\uDF36",
          'hotdog': "\uD83C\uDF2D",
          'hotel': "\uD83C\uDFE8",
          'hotsprings': "\u2668\uFE0F",
          'hourglass': "\u231B\uFE0F",
          'hourglass_flowing_sand': "\u23F3",
          'house': "\uD83C\uDFE0",
          'house_with_garden': "\uD83C\uDFE1",
          'houses': "\uD83C\uDFD8",
          'hugs': "\uD83E\uDD17",
          'hushed': "\uD83D\uDE2F",
          'ice_cream': "\uD83C\uDF68",
          'ice_hockey': "\uD83C\uDFD2",
          'ice_skate': "\u26F8",
          'icecream': "\uD83C\uDF66",
          'id': "\uD83C\uDD94",
          'ideograph_advantage': "\uD83C\uDE50",
          'imp': "\uD83D\uDC7F",
          'inbox_tray': "\uD83D\uDCE5",
          'incoming_envelope': "\uD83D\uDCE8",
          'tipping_hand_woman': "\uD83D\uDC81",
          'information_source': "\u2139\uFE0F",
          'innocent': "\uD83D\uDE07",
          'interrobang': "\u2049\uFE0F",
          'iphone': "\uD83D\uDCF1",
          'izakaya_lantern': "\uD83C\uDFEE",
          'jack_o_lantern': "\uD83C\uDF83",
          'japan': "\uD83D\uDDFE",
          'japanese_castle': "\uD83C\uDFEF",
          'japanese_goblin': "\uD83D\uDC7A",
          'japanese_ogre': "\uD83D\uDC79",
          'jeans': "\uD83D\uDC56",
          'joy': "\uD83D\uDE02",
          'joy_cat': "\uD83D\uDE39",
          'joystick': "\uD83D\uDD79",
          'kaaba': "\uD83D\uDD4B",
          'key': "\uD83D\uDD11",
          'keyboard': "\u2328\uFE0F",
          'keycap_ten': "\uD83D\uDD1F",
          'kick_scooter': "\uD83D\uDEF4",
          'kimono': "\uD83D\uDC58",
          'kiss': "\uD83D\uDC8B",
          'kissing': "\uD83D\uDE17",
          'kissing_cat': "\uD83D\uDE3D",
          'kissing_closed_eyes': "\uD83D\uDE1A",
          'kissing_heart': "\uD83D\uDE18",
          'kissing_smiling_eyes': "\uD83D\uDE19",
          'kiwi_fruit': "\uD83E\uDD5D",
          'koala': "\uD83D\uDC28",
          'koko': "\uD83C\uDE01",
          'label': "\uD83C\uDFF7",
          'large_blue_circle': "\uD83D\uDD35",
          'large_blue_diamond': "\uD83D\uDD37",
          'large_orange_diamond': "\uD83D\uDD36",
          'last_quarter_moon': "\uD83C\uDF17",
          'last_quarter_moon_with_face': "\uD83C\uDF1C",
          'latin_cross': "\u271D\uFE0F",
          'laughing': "\uD83D\uDE06",
          'leaves': "\uD83C\uDF43",
          'ledger': "\uD83D\uDCD2",
          'left_luggage': "\uD83D\uDEC5",
          'left_right_arrow': "\u2194\uFE0F",
          'leftwards_arrow_with_hook': "\u21A9\uFE0F",
          'lemon': "\uD83C\uDF4B",
          'leo': "\u264C\uFE0F",
          'leopard': "\uD83D\uDC06",
          'level_slider': "\uD83C\uDF9A",
          'libra': "\u264E\uFE0F",
          'light_rail': "\uD83D\uDE88",
          'link': "\uD83D\uDD17",
          'lion': "\uD83E\uDD81",
          'lips': "\uD83D\uDC44",
          'lipstick': "\uD83D\uDC84",
          'lizard': "\uD83E\uDD8E",
          'lock': "\uD83D\uDD12",
          'lock_with_ink_pen': "\uD83D\uDD0F",
          'lollipop': "\uD83C\uDF6D",
          'loop': "\u27BF",
          'loud_sound': "\uD83D\uDD0A",
          'loudspeaker': "\uD83D\uDCE2",
          'love_hotel': "\uD83C\uDFE9",
          'love_letter': "\uD83D\uDC8C",
          'low_brightness': "\uD83D\uDD05",
          'lying_face': "\uD83E\uDD25",
          'm': "\u24C2\uFE0F",
          'mag': "\uD83D\uDD0D",
          'mag_right': "\uD83D\uDD0E",
          'mahjong': "\uD83C\uDC04\uFE0F",
          'mailbox': "\uD83D\uDCEB",
          'mailbox_closed': "\uD83D\uDCEA",
          'mailbox_with_mail': "\uD83D\uDCEC",
          'mailbox_with_no_mail': "\uD83D\uDCED",
          'man': "\uD83D\uDC68",
          'man_artist': "\uD83D\uDC68&zwj;\uD83C\uDFA8",
          'man_astronaut': "\uD83D\uDC68&zwj;\uD83D\uDE80",
          'man_cartwheeling': "\uD83E\uDD38&zwj;\u2642\uFE0F",
          'man_cook': "\uD83D\uDC68&zwj;\uD83C\uDF73",
          'man_dancing': "\uD83D\uDD7A",
          'man_facepalming': "\uD83E\uDD26&zwj;\u2642\uFE0F",
          'man_factory_worker': "\uD83D\uDC68&zwj;\uD83C\uDFED",
          'man_farmer': "\uD83D\uDC68&zwj;\uD83C\uDF3E",
          'man_firefighter': "\uD83D\uDC68&zwj;\uD83D\uDE92",
          'man_health_worker': "\uD83D\uDC68&zwj;\u2695\uFE0F",
          'man_in_tuxedo': "\uD83E\uDD35",
          'man_judge': "\uD83D\uDC68&zwj;\u2696\uFE0F",
          'man_juggling': "\uD83E\uDD39&zwj;\u2642\uFE0F",
          'man_mechanic': "\uD83D\uDC68&zwj;\uD83D\uDD27",
          'man_office_worker': "\uD83D\uDC68&zwj;\uD83D\uDCBC",
          'man_pilot': "\uD83D\uDC68&zwj;\u2708\uFE0F",
          'man_playing_handball': "\uD83E\uDD3E&zwj;\u2642\uFE0F",
          'man_playing_water_polo': "\uD83E\uDD3D&zwj;\u2642\uFE0F",
          'man_scientist': "\uD83D\uDC68&zwj;\uD83D\uDD2C",
          'man_shrugging': "\uD83E\uDD37&zwj;\u2642\uFE0F",
          'man_singer': "\uD83D\uDC68&zwj;\uD83C\uDFA4",
          'man_student': "\uD83D\uDC68&zwj;\uD83C\uDF93",
          'man_teacher': "\uD83D\uDC68&zwj;\uD83C\uDFEB",
          'man_technologist': "\uD83D\uDC68&zwj;\uD83D\uDCBB",
          'man_with_gua_pi_mao': "\uD83D\uDC72",
          'man_with_turban': "\uD83D\uDC73",
          'tangerine': "\uD83C\uDF4A",
          'mans_shoe': "\uD83D\uDC5E",
          'mantelpiece_clock': "\uD83D\uDD70",
          'maple_leaf': "\uD83C\uDF41",
          'martial_arts_uniform': "\uD83E\uDD4B",
          'mask': "\uD83D\uDE37",
          'massage_woman': "\uD83D\uDC86",
          'massage_man': "\uD83D\uDC86&zwj;\u2642\uFE0F",
          'meat_on_bone': "\uD83C\uDF56",
          'medal_military': "\uD83C\uDF96",
          'medal_sports': "\uD83C\uDFC5",
          'mega': "\uD83D\uDCE3",
          'melon': "\uD83C\uDF48",
          'memo': "\uD83D\uDCDD",
          'men_wrestling': "\uD83E\uDD3C&zwj;\u2642\uFE0F",
          'menorah': "\uD83D\uDD4E",
          'mens': "\uD83D\uDEB9",
          'metal': "\uD83E\uDD18",
          'metro': "\uD83D\uDE87",
          'microphone': "\uD83C\uDFA4",
          'microscope': "\uD83D\uDD2C",
          'milk_glass': "\uD83E\uDD5B",
          'milky_way': "\uD83C\uDF0C",
          'minibus': "\uD83D\uDE90",
          'minidisc': "\uD83D\uDCBD",
          'mobile_phone_off': "\uD83D\uDCF4",
          'money_mouth_face': "\uD83E\uDD11",
          'money_with_wings': "\uD83D\uDCB8",
          'moneybag': "\uD83D\uDCB0",
          'monkey': "\uD83D\uDC12",
          'monkey_face': "\uD83D\uDC35",
          'monorail': "\uD83D\uDE9D",
          'moon': "\uD83C\uDF14",
          'mortar_board': "\uD83C\uDF93",
          'mosque': "\uD83D\uDD4C",
          'motor_boat': "\uD83D\uDEE5",
          'motor_scooter': "\uD83D\uDEF5",
          'motorcycle': "\uD83C\uDFCD",
          'motorway': "\uD83D\uDEE3",
          'mount_fuji': "\uD83D\uDDFB",
          'mountain': "\u26F0",
          'mountain_biking_man': "\uD83D\uDEB5",
          'mountain_biking_woman': "\uD83D\uDEB5&zwj;\u2640\uFE0F",
          'mountain_cableway': "\uD83D\uDEA0",
          'mountain_railway': "\uD83D\uDE9E",
          'mountain_snow': "\uD83C\uDFD4",
          'mouse': "\uD83D\uDC2D",
          'mouse2': "\uD83D\uDC01",
          'movie_camera': "\uD83C\uDFA5",
          'moyai': "\uD83D\uDDFF",
          'mrs_claus': "\uD83E\uDD36",
          'muscle': "\uD83D\uDCAA",
          'mushroom': "\uD83C\uDF44",
          'musical_keyboard': "\uD83C\uDFB9",
          'musical_note': "\uD83C\uDFB5",
          'musical_score': "\uD83C\uDFBC",
          'mute': "\uD83D\uDD07",
          'nail_care': "\uD83D\uDC85",
          'name_badge': "\uD83D\uDCDB",
          'national_park': "\uD83C\uDFDE",
          'nauseated_face': "\uD83E\uDD22",
          'necktie': "\uD83D\uDC54",
          'negative_squared_cross_mark': "\u274E",
          'nerd_face': "\uD83E\uDD13",
          'neutral_face': "\uD83D\uDE10",
          'new': "\uD83C\uDD95",
          'new_moon': "\uD83C\uDF11",
          'new_moon_with_face': "\uD83C\uDF1A",
          'newspaper': "\uD83D\uDCF0",
          'newspaper_roll': "\uD83D\uDDDE",
          'next_track_button': "\u23ED",
          'ng': "\uD83C\uDD96",
          'no_good_man': "\uD83D\uDE45&zwj;\u2642\uFE0F",
          'no_good_woman': "\uD83D\uDE45",
          'night_with_stars': "\uD83C\uDF03",
          'no_bell': "\uD83D\uDD15",
          'no_bicycles': "\uD83D\uDEB3",
          'no_entry': "\u26D4\uFE0F",
          'no_entry_sign': "\uD83D\uDEAB",
          'no_mobile_phones': "\uD83D\uDCF5",
          'no_mouth': "\uD83D\uDE36",
          'no_pedestrians': "\uD83D\uDEB7",
          'no_smoking': "\uD83D\uDEAD",
          'non-potable_water': "\uD83D\uDEB1",
          'nose': "\uD83D\uDC43",
          'notebook': "\uD83D\uDCD3",
          'notebook_with_decorative_cover': "\uD83D\uDCD4",
          'notes': "\uD83C\uDFB6",
          'nut_and_bolt': "\uD83D\uDD29",
          'o': "\u2B55\uFE0F",
          'o2': "\uD83C\uDD7E\uFE0F",
          'ocean': "\uD83C\uDF0A",
          'octopus': "\uD83D\uDC19",
          'oden': "\uD83C\uDF62",
          'office': "\uD83C\uDFE2",
          'oil_drum': "\uD83D\uDEE2",
          'ok': "\uD83C\uDD97",
          'ok_hand': "\uD83D\uDC4C",
          'ok_man': "\uD83D\uDE46&zwj;\u2642\uFE0F",
          'ok_woman': "\uD83D\uDE46",
          'old_key': "\uD83D\uDDDD",
          'older_man': "\uD83D\uDC74",
          'older_woman': "\uD83D\uDC75",
          'om': "\uD83D\uDD49",
          'on': "\uD83D\uDD1B",
          'oncoming_automobile': "\uD83D\uDE98",
          'oncoming_bus': "\uD83D\uDE8D",
          'oncoming_police_car': "\uD83D\uDE94",
          'oncoming_taxi': "\uD83D\uDE96",
          'open_file_folder': "\uD83D\uDCC2",
          'open_hands': "\uD83D\uDC50",
          'open_mouth': "\uD83D\uDE2E",
          'open_umbrella': "\u2602\uFE0F",
          'ophiuchus': "\u26CE",
          'orange_book': "\uD83D\uDCD9",
          'orthodox_cross': "\u2626\uFE0F",
          'outbox_tray': "\uD83D\uDCE4",
          'owl': "\uD83E\uDD89",
          'ox': "\uD83D\uDC02",
          'package': "\uD83D\uDCE6",
          'page_facing_up': "\uD83D\uDCC4",
          'page_with_curl': "\uD83D\uDCC3",
          'pager': "\uD83D\uDCDF",
          'paintbrush': "\uD83D\uDD8C",
          'palm_tree': "\uD83C\uDF34",
          'pancakes': "\uD83E\uDD5E",
          'panda_face': "\uD83D\uDC3C",
          'paperclip': "\uD83D\uDCCE",
          'paperclips': "\uD83D\uDD87",
          'parasol_on_ground': "\u26F1",
          'parking': "\uD83C\uDD7F\uFE0F",
          'part_alternation_mark': "\u303D\uFE0F",
          'partly_sunny': "\u26C5\uFE0F",
          'passenger_ship': "\uD83D\uDEF3",
          'passport_control': "\uD83D\uDEC2",
          'pause_button': "\u23F8",
          'peace_symbol': "\u262E\uFE0F",
          'peach': "\uD83C\uDF51",
          'peanuts': "\uD83E\uDD5C",
          'pear': "\uD83C\uDF50",
          'pen': "\uD83D\uDD8A",
          'pencil2': "\u270F\uFE0F",
          'penguin': "\uD83D\uDC27",
          'pensive': "\uD83D\uDE14",
          'performing_arts': "\uD83C\uDFAD",
          'persevere': "\uD83D\uDE23",
          'person_fencing': "\uD83E\uDD3A",
          'pouting_woman': "\uD83D\uDE4E",
          'phone': "\u260E\uFE0F",
          'pick': "\u26CF",
          'pig': "\uD83D\uDC37",
          'pig2': "\uD83D\uDC16",
          'pig_nose': "\uD83D\uDC3D",
          'pill': "\uD83D\uDC8A",
          'pineapple': "\uD83C\uDF4D",
          'ping_pong': "\uD83C\uDFD3",
          'pisces': "\u2653\uFE0F",
          'pizza': "\uD83C\uDF55",
          'place_of_worship': "\uD83D\uDED0",
          'plate_with_cutlery': "\uD83C\uDF7D",
          'play_or_pause_button': "\u23EF",
          'point_down': "\uD83D\uDC47",
          'point_left': "\uD83D\uDC48",
          'point_right': "\uD83D\uDC49",
          'point_up': "\u261D\uFE0F",
          'point_up_2': "\uD83D\uDC46",
          'police_car': "\uD83D\uDE93",
          'policewoman': "\uD83D\uDC6E&zwj;\u2640\uFE0F",
          'poodle': "\uD83D\uDC29",
          'popcorn': "\uD83C\uDF7F",
          'post_office': "\uD83C\uDFE3",
          'postal_horn': "\uD83D\uDCEF",
          'postbox': "\uD83D\uDCEE",
          'potable_water': "\uD83D\uDEB0",
          'potato': "\uD83E\uDD54",
          'pouch': "\uD83D\uDC5D",
          'poultry_leg': "\uD83C\uDF57",
          'pound': "\uD83D\uDCB7",
          'rage': "\uD83D\uDE21",
          'pouting_cat': "\uD83D\uDE3E",
          'pouting_man': "\uD83D\uDE4E&zwj;\u2642\uFE0F",
          'pray': "\uD83D\uDE4F",
          'prayer_beads': "\uD83D\uDCFF",
          'pregnant_woman': "\uD83E\uDD30",
          'previous_track_button': "\u23EE",
          'prince': "\uD83E\uDD34",
          'princess': "\uD83D\uDC78",
          'printer': "\uD83D\uDDA8",
          'purple_heart': "\uD83D\uDC9C",
          'purse': "\uD83D\uDC5B",
          'pushpin': "\uD83D\uDCCC",
          'put_litter_in_its_place': "\uD83D\uDEAE",
          'question': "\u2753",
          'rabbit': "\uD83D\uDC30",
          'rabbit2': "\uD83D\uDC07",
          'racehorse': "\uD83D\uDC0E",
          'racing_car': "\uD83C\uDFCE",
          'radio': "\uD83D\uDCFB",
          'radio_button': "\uD83D\uDD18",
          'radioactive': "\u2622\uFE0F",
          'railway_car': "\uD83D\uDE83",
          'railway_track': "\uD83D\uDEE4",
          'rainbow': "\uD83C\uDF08",
          'rainbow_flag': "\uD83C\uDFF3\uFE0F&zwj;\uD83C\uDF08",
          'raised_back_of_hand': "\uD83E\uDD1A",
          'raised_hand_with_fingers_splayed': "\uD83D\uDD90",
          'raised_hands': "\uD83D\uDE4C",
          'raising_hand_woman': "\uD83D\uDE4B",
          'raising_hand_man': "\uD83D\uDE4B&zwj;\u2642\uFE0F",
          'ram': "\uD83D\uDC0F",
          'ramen': "\uD83C\uDF5C",
          'rat': "\uD83D\uDC00",
          'record_button': "\u23FA",
          'recycle': "\u267B\uFE0F",
          'red_circle': "\uD83D\uDD34",
          'registered': "\xAE\uFE0F",
          'relaxed': "\u263A\uFE0F",
          'relieved': "\uD83D\uDE0C",
          'reminder_ribbon': "\uD83C\uDF97",
          'repeat': "\uD83D\uDD01",
          'repeat_one': "\uD83D\uDD02",
          'rescue_worker_helmet': "\u26D1",
          'restroom': "\uD83D\uDEBB",
          'revolving_hearts': "\uD83D\uDC9E",
          'rewind': "\u23EA",
          'rhinoceros': "\uD83E\uDD8F",
          'ribbon': "\uD83C\uDF80",
          'rice': "\uD83C\uDF5A",
          'rice_ball': "\uD83C\uDF59",
          'rice_cracker': "\uD83C\uDF58",
          'rice_scene': "\uD83C\uDF91",
          'right_anger_bubble': "\uD83D\uDDEF",
          'ring': "\uD83D\uDC8D",
          'robot': "\uD83E\uDD16",
          'rocket': "\uD83D\uDE80",
          'rofl': "\uD83E\uDD23",
          'roll_eyes': "\uD83D\uDE44",
          'roller_coaster': "\uD83C\uDFA2",
          'rooster': "\uD83D\uDC13",
          'rose': "\uD83C\uDF39",
          'rosette': "\uD83C\uDFF5",
          'rotating_light': "\uD83D\uDEA8",
          'round_pushpin': "\uD83D\uDCCD",
          'rowing_man': "\uD83D\uDEA3",
          'rowing_woman': "\uD83D\uDEA3&zwj;\u2640\uFE0F",
          'rugby_football': "\uD83C\uDFC9",
          'running_man': "\uD83C\uDFC3",
          'running_shirt_with_sash': "\uD83C\uDFBD",
          'running_woman': "\uD83C\uDFC3&zwj;\u2640\uFE0F",
          'sa': "\uD83C\uDE02\uFE0F",
          'sagittarius': "\u2650\uFE0F",
          'sake': "\uD83C\uDF76",
          'sandal': "\uD83D\uDC61",
          'santa': "\uD83C\uDF85",
          'satellite': "\uD83D\uDCE1",
          'saxophone': "\uD83C\uDFB7",
          'school': "\uD83C\uDFEB",
          'school_satchel': "\uD83C\uDF92",
          'scissors': "\u2702\uFE0F",
          'scorpion': "\uD83E\uDD82",
          'scorpius': "\u264F\uFE0F",
          'scream': "\uD83D\uDE31",
          'scream_cat': "\uD83D\uDE40",
          'scroll': "\uD83D\uDCDC",
          'seat': "\uD83D\uDCBA",
          'secret': "\u3299\uFE0F",
          'see_no_evil': "\uD83D\uDE48",
          'seedling': "\uD83C\uDF31",
          'selfie': "\uD83E\uDD33",
          'shallow_pan_of_food': "\uD83E\uDD58",
          'shamrock': "\u2618\uFE0F",
          'shark': "\uD83E\uDD88",
          'shaved_ice': "\uD83C\uDF67",
          'sheep': "\uD83D\uDC11",
          'shell': "\uD83D\uDC1A",
          'shield': "\uD83D\uDEE1",
          'shinto_shrine': "\u26E9",
          'ship': "\uD83D\uDEA2",
          'shirt': "\uD83D\uDC55",
          'shopping': "\uD83D\uDECD",
          'shopping_cart': "\uD83D\uDED2",
          'shower': "\uD83D\uDEBF",
          'shrimp': "\uD83E\uDD90",
          'signal_strength': "\uD83D\uDCF6",
          'six_pointed_star': "\uD83D\uDD2F",
          'ski': "\uD83C\uDFBF",
          'skier': "\u26F7",
          'skull': "\uD83D\uDC80",
          'skull_and_crossbones': "\u2620\uFE0F",
          'sleeping': "\uD83D\uDE34",
          'sleeping_bed': "\uD83D\uDECC",
          'sleepy': "\uD83D\uDE2A",
          'slightly_frowning_face': "\uD83D\uDE41",
          'slightly_smiling_face': "\uD83D\uDE42",
          'slot_machine': "\uD83C\uDFB0",
          'small_airplane': "\uD83D\uDEE9",
          'small_blue_diamond': "\uD83D\uDD39",
          'small_orange_diamond': "\uD83D\uDD38",
          'small_red_triangle': "\uD83D\uDD3A",
          'small_red_triangle_down': "\uD83D\uDD3B",
          'smile': "\uD83D\uDE04",
          'smile_cat': "\uD83D\uDE38",
          'smiley': "\uD83D\uDE03",
          'smiley_cat': "\uD83D\uDE3A",
          'smiling_imp': "\uD83D\uDE08",
          'smirk': "\uD83D\uDE0F",
          'smirk_cat': "\uD83D\uDE3C",
          'smoking': "\uD83D\uDEAC",
          'snail': "\uD83D\uDC0C",
          'snake': "\uD83D\uDC0D",
          'sneezing_face': "\uD83E\uDD27",
          'snowboarder': "\uD83C\uDFC2",
          'snowflake': "\u2744\uFE0F",
          'snowman': "\u26C4\uFE0F",
          'snowman_with_snow': "\u2603\uFE0F",
          'sob': "\uD83D\uDE2D",
          'soccer': "\u26BD\uFE0F",
          'soon': "\uD83D\uDD1C",
          'sos': "\uD83C\uDD98",
          'sound': "\uD83D\uDD09",
          'space_invader': "\uD83D\uDC7E",
          'spades': "\u2660\uFE0F",
          'spaghetti': "\uD83C\uDF5D",
          'sparkle': "\u2747\uFE0F",
          'sparkler': "\uD83C\uDF87",
          'sparkles': "\u2728",
          'sparkling_heart': "\uD83D\uDC96",
          'speak_no_evil': "\uD83D\uDE4A",
          'speaker': "\uD83D\uDD08",
          'speaking_head': "\uD83D\uDDE3",
          'speech_balloon': "\uD83D\uDCAC",
          'speedboat': "\uD83D\uDEA4",
          'spider': "\uD83D\uDD77",
          'spider_web': "\uD83D\uDD78",
          'spiral_calendar': "\uD83D\uDDD3",
          'spiral_notepad': "\uD83D\uDDD2",
          'spoon': "\uD83E\uDD44",
          'squid': "\uD83E\uDD91",
          'stadium': "\uD83C\uDFDF",
          'star': "\u2B50\uFE0F",
          'star2': "\uD83C\uDF1F",
          'star_and_crescent': "\u262A\uFE0F",
          'star_of_david': "\u2721\uFE0F",
          'stars': "\uD83C\uDF20",
          'station': "\uD83D\uDE89",
          'statue_of_liberty': "\uD83D\uDDFD",
          'steam_locomotive': "\uD83D\uDE82",
          'stew': "\uD83C\uDF72",
          'stop_button': "\u23F9",
          'stop_sign': "\uD83D\uDED1",
          'stopwatch': "\u23F1",
          'straight_ruler': "\uD83D\uDCCF",
          'strawberry': "\uD83C\uDF53",
          'stuck_out_tongue': "\uD83D\uDE1B",
          'stuck_out_tongue_closed_eyes': "\uD83D\uDE1D",
          'stuck_out_tongue_winking_eye': "\uD83D\uDE1C",
          'studio_microphone': "\uD83C\uDF99",
          'stuffed_flatbread': "\uD83E\uDD59",
          'sun_behind_large_cloud': "\uD83C\uDF25",
          'sun_behind_rain_cloud': "\uD83C\uDF26",
          'sun_behind_small_cloud': "\uD83C\uDF24",
          'sun_with_face': "\uD83C\uDF1E",
          'sunflower': "\uD83C\uDF3B",
          'sunglasses': "\uD83D\uDE0E",
          'sunny': "\u2600\uFE0F",
          'sunrise': "\uD83C\uDF05",
          'sunrise_over_mountains': "\uD83C\uDF04",
          'surfing_man': "\uD83C\uDFC4",
          'surfing_woman': "\uD83C\uDFC4&zwj;\u2640\uFE0F",
          'sushi': "\uD83C\uDF63",
          'suspension_railway': "\uD83D\uDE9F",
          'sweat': "\uD83D\uDE13",
          'sweat_drops': "\uD83D\uDCA6",
          'sweat_smile': "\uD83D\uDE05",
          'sweet_potato': "\uD83C\uDF60",
          'swimming_man': "\uD83C\uDFCA",
          'swimming_woman': "\uD83C\uDFCA&zwj;\u2640\uFE0F",
          'symbols': "\uD83D\uDD23",
          'synagogue': "\uD83D\uDD4D",
          'syringe': "\uD83D\uDC89",
          'taco': "\uD83C\uDF2E",
          'tada': "\uD83C\uDF89",
          'tanabata_tree': "\uD83C\uDF8B",
          'taurus': "\u2649\uFE0F",
          'taxi': "\uD83D\uDE95",
          'tea': "\uD83C\uDF75",
          'telephone_receiver': "\uD83D\uDCDE",
          'telescope': "\uD83D\uDD2D",
          'tennis': "\uD83C\uDFBE",
          'tent': "\u26FA\uFE0F",
          'thermometer': "\uD83C\uDF21",
          'thinking': "\uD83E\uDD14",
          'thought_balloon': "\uD83D\uDCAD",
          'ticket': "\uD83C\uDFAB",
          'tickets': "\uD83C\uDF9F",
          'tiger': "\uD83D\uDC2F",
          'tiger2': "\uD83D\uDC05",
          'timer_clock': "\u23F2",
          'tipping_hand_man': "\uD83D\uDC81&zwj;\u2642\uFE0F",
          'tired_face': "\uD83D\uDE2B",
          'tm': "\u2122\uFE0F",
          'toilet': "\uD83D\uDEBD",
          'tokyo_tower': "\uD83D\uDDFC",
          'tomato': "\uD83C\uDF45",
          'tongue': "\uD83D\uDC45",
          'top': "\uD83D\uDD1D",
          'tophat': "\uD83C\uDFA9",
          'tornado': "\uD83C\uDF2A",
          'trackball': "\uD83D\uDDB2",
          'tractor': "\uD83D\uDE9C",
          'traffic_light': "\uD83D\uDEA5",
          'train': "\uD83D\uDE8B",
          'train2': "\uD83D\uDE86",
          'tram': "\uD83D\uDE8A",
          'triangular_flag_on_post': "\uD83D\uDEA9",
          'triangular_ruler': "\uD83D\uDCD0",
          'trident': "\uD83D\uDD31",
          'triumph': "\uD83D\uDE24",
          'trolleybus': "\uD83D\uDE8E",
          'trophy': "\uD83C\uDFC6",
          'tropical_drink': "\uD83C\uDF79",
          'tropical_fish': "\uD83D\uDC20",
          'truck': "\uD83D\uDE9A",
          'trumpet': "\uD83C\uDFBA",
          'tulip': "\uD83C\uDF37",
          'tumbler_glass': "\uD83E\uDD43",
          'turkey': "\uD83E\uDD83",
          'turtle': "\uD83D\uDC22",
          'tv': "\uD83D\uDCFA",
          'twisted_rightwards_arrows': "\uD83D\uDD00",
          'two_hearts': "\uD83D\uDC95",
          'two_men_holding_hands': "\uD83D\uDC6C",
          'two_women_holding_hands': "\uD83D\uDC6D",
          'u5272': "\uD83C\uDE39",
          'u5408': "\uD83C\uDE34",
          'u55b6': "\uD83C\uDE3A",
          'u6307': "\uD83C\uDE2F\uFE0F",
          'u6708': "\uD83C\uDE37\uFE0F",
          'u6709': "\uD83C\uDE36",
          'u6e80': "\uD83C\uDE35",
          'u7121': "\uD83C\uDE1A\uFE0F",
          'u7533': "\uD83C\uDE38",
          'u7981': "\uD83C\uDE32",
          'u7a7a': "\uD83C\uDE33",
          'umbrella': "\u2614\uFE0F",
          'unamused': "\uD83D\uDE12",
          'underage': "\uD83D\uDD1E",
          'unicorn': "\uD83E\uDD84",
          'unlock': "\uD83D\uDD13",
          'up': "\uD83C\uDD99",
          'upside_down_face': "\uD83D\uDE43",
          'v': "\u270C\uFE0F",
          'vertical_traffic_light': "\uD83D\uDEA6",
          'vhs': "\uD83D\uDCFC",
          'vibration_mode': "\uD83D\uDCF3",
          'video_camera': "\uD83D\uDCF9",
          'video_game': "\uD83C\uDFAE",
          'violin': "\uD83C\uDFBB",
          'virgo': "\u264D\uFE0F",
          'volcano': "\uD83C\uDF0B",
          'volleyball': "\uD83C\uDFD0",
          'vs': "\uD83C\uDD9A",
          'vulcan_salute': "\uD83D\uDD96",
          'walking_man': "\uD83D\uDEB6",
          'walking_woman': "\uD83D\uDEB6&zwj;\u2640\uFE0F",
          'waning_crescent_moon': "\uD83C\uDF18",
          'waning_gibbous_moon': "\uD83C\uDF16",
          'warning': "\u26A0\uFE0F",
          'wastebasket': "\uD83D\uDDD1",
          'watch': "\u231A\uFE0F",
          'water_buffalo': "\uD83D\uDC03",
          'watermelon': "\uD83C\uDF49",
          'wave': "\uD83D\uDC4B",
          'wavy_dash': "\u3030\uFE0F",
          'waxing_crescent_moon': "\uD83C\uDF12",
          'wc': "\uD83D\uDEBE",
          'weary': "\uD83D\uDE29",
          'wedding': "\uD83D\uDC92",
          'weight_lifting_man': "\uD83C\uDFCB\uFE0F",
          'weight_lifting_woman': "\uD83C\uDFCB\uFE0F&zwj;\u2640\uFE0F",
          'whale': "\uD83D\uDC33",
          'whale2': "\uD83D\uDC0B",
          'wheel_of_dharma': "\u2638\uFE0F",
          'wheelchair': "\u267F\uFE0F",
          'white_check_mark': "\u2705",
          'white_circle': "\u26AA\uFE0F",
          'white_flag': "\uD83C\uDFF3\uFE0F",
          'white_flower': "\uD83D\uDCAE",
          'white_large_square': "\u2B1C\uFE0F",
          'white_medium_small_square': "\u25FD\uFE0F",
          'white_medium_square': "\u25FB\uFE0F",
          'white_small_square': "\u25AB\uFE0F",
          'white_square_button': "\uD83D\uDD33",
          'wilted_flower': "\uD83E\uDD40",
          'wind_chime': "\uD83C\uDF90",
          'wind_face': "\uD83C\uDF2C",
          'wine_glass': "\uD83C\uDF77",
          'wink': "\uD83D\uDE09",
          'wolf': "\uD83D\uDC3A",
          'woman': "\uD83D\uDC69",
          'woman_artist': "\uD83D\uDC69&zwj;\uD83C\uDFA8",
          'woman_astronaut': "\uD83D\uDC69&zwj;\uD83D\uDE80",
          'woman_cartwheeling': "\uD83E\uDD38&zwj;\u2640\uFE0F",
          'woman_cook': "\uD83D\uDC69&zwj;\uD83C\uDF73",
          'woman_facepalming': "\uD83E\uDD26&zwj;\u2640\uFE0F",
          'woman_factory_worker': "\uD83D\uDC69&zwj;\uD83C\uDFED",
          'woman_farmer': "\uD83D\uDC69&zwj;\uD83C\uDF3E",
          'woman_firefighter': "\uD83D\uDC69&zwj;\uD83D\uDE92",
          'woman_health_worker': "\uD83D\uDC69&zwj;\u2695\uFE0F",
          'woman_judge': "\uD83D\uDC69&zwj;\u2696\uFE0F",
          'woman_juggling': "\uD83E\uDD39&zwj;\u2640\uFE0F",
          'woman_mechanic': "\uD83D\uDC69&zwj;\uD83D\uDD27",
          'woman_office_worker': "\uD83D\uDC69&zwj;\uD83D\uDCBC",
          'woman_pilot': "\uD83D\uDC69&zwj;\u2708\uFE0F",
          'woman_playing_handball': "\uD83E\uDD3E&zwj;\u2640\uFE0F",
          'woman_playing_water_polo': "\uD83E\uDD3D&zwj;\u2640\uFE0F",
          'woman_scientist': "\uD83D\uDC69&zwj;\uD83D\uDD2C",
          'woman_shrugging': "\uD83E\uDD37&zwj;\u2640\uFE0F",
          'woman_singer': "\uD83D\uDC69&zwj;\uD83C\uDFA4",
          'woman_student': "\uD83D\uDC69&zwj;\uD83C\uDF93",
          'woman_teacher': "\uD83D\uDC69&zwj;\uD83C\uDFEB",
          'woman_technologist': "\uD83D\uDC69&zwj;\uD83D\uDCBB",
          'woman_with_turban': "\uD83D\uDC73&zwj;\u2640\uFE0F",
          'womans_clothes': "\uD83D\uDC5A",
          'womans_hat': "\uD83D\uDC52",
          'women_wrestling': "\uD83E\uDD3C&zwj;\u2640\uFE0F",
          'womens': "\uD83D\uDEBA",
          'world_map': "\uD83D\uDDFA",
          'worried': "\uD83D\uDE1F",
          'wrench': "\uD83D\uDD27",
          'writing_hand': "\u270D\uFE0F",
          'x': "\u274C",
          'yellow_heart': "\uD83D\uDC9B",
          'yen': "\uD83D\uDCB4",
          'yin_yang': "\u262F\uFE0F",
          'yum': "\uD83D\uDE0B",
          'zap': "\u26A1\uFE0F",
          'zipper_mouth_face': "\uD83E\uDD10",
          'zzz': "\uD83D\uDCA4",

          /* special emojis :P */
          'octocat': '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
          'showdown': '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>'
        };
        /**
         * Created by Estevao on 31-05-2015.
         */

        /**
         * Showdown Converter class
         * @class
         * @param {object} [converterOptions]
         * @returns {Converter}
         */

        showdown.Converter = function (converterOptions) {
          'use strict';

          var
          /**
           * Options used by this converter
           * @private
           * @type {{}}
           */
          options = {},

          /**
           * Language extensions used by this converter
           * @private
           * @type {Array}
           */
          langExtensions = [],

          /**
           * Output modifiers extensions used by this converter
           * @private
           * @type {Array}
           */
          outputModifiers = [],

          /**
           * Event listeners
           * @private
           * @type {{}}
           */
          listeners = {},

          /**
           * The flavor set in this converter
           */
          setConvFlavor = setFlavor,

          /**
           * Metadata of the document
           * @type {{parsed: {}, raw: string, format: string}}
           */
          metadata = {
            parsed: {},
            raw: '',
            format: ''
          };

          _constructor();
          /**
           * Converter constructor
           * @private
           */


          function _constructor() {
            converterOptions = converterOptions || {};

            for (var gOpt in globalOptions) {
              if (globalOptions.hasOwnProperty(gOpt)) {
                options[gOpt] = globalOptions[gOpt];
              }
            } // Merge options


            if (typeof converterOptions === 'object') {
              for (var opt in converterOptions) {
                if (converterOptions.hasOwnProperty(opt)) {
                  options[opt] = converterOptions[opt];
                }
              }
            } else {
              throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions + ' was passed instead.');
            }

            if (options.extensions) {
              showdown.helper.forEach(options.extensions, _parseExtension);
            }
          }
          /**
           * Parse extension
           * @param {*} ext
           * @param {string} [name='']
           * @private
           */


          function _parseExtension(ext, name) {
            name = name || null; // If it's a string, the extension was previously loaded

            if (showdown.helper.isString(ext)) {
              ext = showdown.helper.stdExtName(ext);
              name = ext; // LEGACY_SUPPORT CODE

              if (showdown.extensions[ext]) {
                console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' + 'Please inform the developer that the extension should be updated!');
                legacyExtensionLoading(showdown.extensions[ext], ext);
                return; // END LEGACY SUPPORT CODE
              } else if (!showdown.helper.isUndefined(extensions[ext])) {
                ext = extensions[ext];
              } else {
                throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
              }
            }

            if (typeof ext === 'function') {
              ext = ext();
            }

            if (!showdown.helper.isArray(ext)) {
              ext = [ext];
            }

            var validExt = validate(ext, name);

            if (!validExt.valid) {
              throw Error(validExt.error);
            }

            for (var i = 0; i < ext.length; ++i) {
              switch (ext[i].type) {
                case 'lang':
                  langExtensions.push(ext[i]);
                  break;

                case 'output':
                  outputModifiers.push(ext[i]);
                  break;
              }

              if (ext[i].hasOwnProperty('listeners')) {
                for (var ln in ext[i].listeners) {
                  if (ext[i].listeners.hasOwnProperty(ln)) {
                    listen(ln, ext[i].listeners[ln]);
                  }
                }
              }
            }
          }
          /**
           * LEGACY_SUPPORT
           * @param {*} ext
           * @param {string} name
           */


          function legacyExtensionLoading(ext, name) {
            if (typeof ext === 'function') {
              ext = ext(new showdown.Converter());
            }

            if (!showdown.helper.isArray(ext)) {
              ext = [ext];
            }

            var valid = validate(ext, name);

            if (!valid.valid) {
              throw Error(valid.error);
            }

            for (var i = 0; i < ext.length; ++i) {
              switch (ext[i].type) {
                case 'lang':
                  langExtensions.push(ext[i]);
                  break;

                case 'output':
                  outputModifiers.push(ext[i]);
                  break;

                default:
                  // should never reach here
                  throw Error('Extension loader error: Type unrecognized!!!');
              }
            }
          }
          /**
           * Listen to an event
           * @param {string} name
           * @param {function} callback
           */


          function listen(name, callback) {
            if (!showdown.helper.isString(name)) {
              throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
            }

            if (typeof callback !== 'function') {
              throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
            }

            if (!listeners.hasOwnProperty(name)) {
              listeners[name] = [];
            }

            listeners[name].push(callback);
          }

          function rTrimInputText(text) {
            var rsp = text.match(/^\s*/)[0].length,
                rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
            return text.replace(rgx, '');
          }
          /**
           * Dispatch an event
           * @private
           * @param {string} evtName Event name
           * @param {string} text Text
           * @param {{}} options Converter Options
           * @param {{}} globals
           * @returns {string}
           */


          this._dispatch = function dispatch(evtName, text, options, globals) {
            if (listeners.hasOwnProperty(evtName)) {
              for (var ei = 0; ei < listeners[evtName].length; ++ei) {
                var nText = listeners[evtName][ei](evtName, text, this, options, globals);

                if (nText && typeof nText !== 'undefined') {
                  text = nText;
                }
              }
            }

            return text;
          };
          /**
           * Listen to an event
           * @param {string} name
           * @param {function} callback
           * @returns {showdown.Converter}
           */


          this.listen = function (name, callback) {
            listen(name, callback);
            return this;
          };
          /**
           * Converts a markdown string into HTML
           * @param {string} text
           * @returns {*}
           */


          this.makeHtml = function (text) {
            //check if text is not falsy
            if (!text) {
              return text;
            }

            var globals = {
              gHtmlBlocks: [],
              gHtmlMdBlocks: [],
              gHtmlSpans: [],
              gUrls: {},
              gTitles: {},
              gDimensions: {},
              gListLevel: 0,
              hashLinkCounts: {},
              langExtensions: langExtensions,
              outputModifiers: outputModifiers,
              converter: this,
              ghCodeBlocks: [],
              metadata: {
                parsed: {},
                raw: '',
                format: ''
              }
            }; // This lets us use ¨ trema as an escape char to avoid md5 hashes
            // The choice of character is arbitrary; anything that isn't
            // magic in Markdown will work.

            text = text.replace(/¨/g, '¨T'); // Replace $ with ¨D
            // RegExp interprets $ as a special character
            // when it's in a replacement string

            text = text.replace(/\$/g, '¨D'); // Standardize line endings

            text = text.replace(/\r\n/g, '\n'); // DOS to Unix

            text = text.replace(/\r/g, '\n'); // Mac to Unix
            // Stardardize line spaces

            text = text.replace(/\u00A0/g, '&nbsp;');

            if (options.smartIndentationFix) {
              text = rTrimInputText(text);
            } // Make sure text begins and ends with a couple of newlines:


            text = '\n\n' + text + '\n\n'; // detab

            text = showdown.subParser('detab')(text, options, globals);
            /**
             * Strip any lines consisting only of spaces and tabs.
             * This makes subsequent regexs easier to write, because we can
             * match consecutive blank lines with /\n+/ instead of something
             * contorted like /[ \t]*\n+/
             */

            text = text.replace(/^[ \t]+$/mg, ''); //run languageExtensions

            showdown.helper.forEach(langExtensions, function (ext) {
              text = showdown.subParser('runExtension')(ext, text, options, globals);
            }); // run the sub parsers

            text = showdown.subParser('metadata')(text, options, globals);
            text = showdown.subParser('hashPreCodeTags')(text, options, globals);
            text = showdown.subParser('githubCodeBlocks')(text, options, globals);
            text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
            text = showdown.subParser('hashCodeTags')(text, options, globals);
            text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
            text = showdown.subParser('blockGamut')(text, options, globals);
            text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
            text = showdown.subParser('unescapeSpecialChars')(text, options, globals); // attacklab: Restore dollar signs

            text = text.replace(/¨D/g, '$$'); // attacklab: Restore tremas

            text = text.replace(/¨T/g, '¨'); // render a complete html document instead of a partial if the option is enabled

            text = showdown.subParser('completeHTMLDocument')(text, options, globals); // Run output modifiers

            showdown.helper.forEach(outputModifiers, function (ext) {
              text = showdown.subParser('runExtension')(ext, text, options, globals);
            }); // update metadata

            metadata = globals.metadata;
            return text;
          };
          /**
           * Converts an HTML string into a markdown string
           * @param src
           * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
           * @returns {string}
           */


          this.makeMarkdown = this.makeMd = function (src, HTMLParser) {
            // replace \r\n with \n
            src = src.replace(/\r\n/g, '\n');
            src = src.replace(/\r/g, '\n'); // old macs
            // due to an edge case, we need to find this: > <
            // to prevent removing of non silent white spaces
            // ex: <em>this is</em> <strong>sparta</strong>

            src = src.replace(/>[ \t]+</, '>¨NBSP;<');

            if (!HTMLParser) {
              if (window && window.document) {
                HTMLParser = window.document;
              } else {
                throw new Error('HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM');
              }
            }

            var doc = HTMLParser.createElement('div');
            doc.innerHTML = src;
            var globals = {
              preList: substitutePreCodeTags(doc)
            }; // remove all newlines and collapse spaces

            clean(doc); // some stuff, like accidental reference links must now be escaped
            // TODO
            // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);

            var nodes = doc.childNodes,
                mdDoc = '';

            for (var i = 0; i < nodes.length; i++) {
              mdDoc += showdown.subParser('makeMarkdown.node')(nodes[i], globals);
            }

            function clean(node) {
              for (var n = 0; n < node.childNodes.length; ++n) {
                var child = node.childNodes[n];

                if (child.nodeType === 3) {
                  if (!/\S/.test(child.nodeValue)) {
                    node.removeChild(child);
                    --n;
                  } else {
                    child.nodeValue = child.nodeValue.split('\n').join(' ');
                    child.nodeValue = child.nodeValue.replace(/(\s)+/g, '$1');
                  }
                } else if (child.nodeType === 1) {
                  clean(child);
                }
              }
            } // find all pre tags and replace contents with placeholder
            // we need this so that we can remove all indentation from html
            // to ease up parsing


            function substitutePreCodeTags(doc) {
              var pres = doc.querySelectorAll('pre'),
                  presPH = [];

              for (var i = 0; i < pres.length; ++i) {
                if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === 'code') {
                  var content = pres[i].firstChild.innerHTML.trim(),
                      language = pres[i].firstChild.getAttribute('data-language') || ''; // if data-language attribute is not defined, then we look for class language-*

                  if (language === '') {
                    var classes = pres[i].firstChild.className.split(' ');

                    for (var c = 0; c < classes.length; ++c) {
                      var matches = classes[c].match(/^language-(.+)$/);

                      if (matches !== null) {
                        language = matches[1];
                        break;
                      }
                    }
                  } // unescape html entities in content


                  content = showdown.helper.unescapeHTMLEntities(content);
                  presPH.push(content);
                  pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
                } else {
                  presPH.push(pres[i].innerHTML);
                  pres[i].innerHTML = '';
                  pres[i].setAttribute('prenum', i.toString());
                }
              }

              return presPH;
            }

            return mdDoc;
          };
          /**
           * Set an option of this Converter instance
           * @param {string} key
           * @param {*} value
           */


          this.setOption = function (key, value) {
            options[key] = value;
          };
          /**
           * Get the option of this Converter instance
           * @param {string} key
           * @returns {*}
           */


          this.getOption = function (key) {
            return options[key];
          };
          /**
           * Get the options of this Converter instance
           * @returns {{}}
           */


          this.getOptions = function () {
            return options;
          };
          /**
           * Add extension to THIS converter
           * @param {{}} extension
           * @param {string} [name=null]
           */


          this.addExtension = function (extension, name) {
            name = name || null;

            _parseExtension(extension, name);
          };
          /**
           * Use a global registered extension with THIS converter
           * @param {string} extensionName Name of the previously registered extension
           */


          this.useExtension = function (extensionName) {
            _parseExtension(extensionName);
          };
          /**
           * Set the flavor THIS converter should use
           * @param {string} name
           */


          this.setFlavor = function (name) {
            if (!flavor.hasOwnProperty(name)) {
              throw Error(name + ' flavor was not found');
            }

            var preset = flavor[name];
            setConvFlavor = name;

            for (var option in preset) {
              if (preset.hasOwnProperty(option)) {
                options[option] = preset[option];
              }
            }
          };
          /**
           * Get the currently set flavor of this converter
           * @returns {string}
           */


          this.getFlavor = function () {
            return setConvFlavor;
          };
          /**
           * Remove an extension from THIS converter.
           * Note: This is a costly operation. It's better to initialize a new converter
           * and specify the extensions you wish to use
           * @param {Array} extension
           */


          this.removeExtension = function (extension) {
            if (!showdown.helper.isArray(extension)) {
              extension = [extension];
            }

            for (var a = 0; a < extension.length; ++a) {
              var ext = extension[a];

              for (var i = 0; i < langExtensions.length; ++i) {
                if (langExtensions[i] === ext) {
                  langExtensions[i].splice(i, 1);
                }
              }

              for (var ii = 0; ii < outputModifiers.length; ++i) {
                if (outputModifiers[ii] === ext) {
                  outputModifiers[ii].splice(i, 1);
                }
              }
            }
          };
          /**
           * Get all extension of THIS converter
           * @returns {{language: Array, output: Array}}
           */


          this.getAllExtensions = function () {
            return {
              language: langExtensions,
              output: outputModifiers
            };
          };
          /**
           * Get the metadata of the previously parsed document
           * @param raw
           * @returns {string|{}}
           */


          this.getMetadata = function (raw) {
            if (raw) {
              return metadata.raw;
            } else {
              return metadata.parsed;
            }
          };
          /**
           * Get the metadata format of the previously parsed document
           * @returns {string}
           */


          this.getMetadataFormat = function () {
            return metadata.format;
          };
          /**
           * Private: set a single key, value metadata pair
           * @param {string} key
           * @param {string} value
           */


          this._setMetadataPair = function (key, value) {
            metadata.parsed[key] = value;
          };
          /**
           * Private: set metadata format
           * @param {string} format
           */


          this._setMetadataFormat = function (format) {
            metadata.format = format;
          };
          /**
           * Private: set metadata raw text
           * @param {string} raw
           */


          this._setMetadataRaw = function (raw) {
            metadata.raw = raw;
          };
        };
        /**
         * Turn Markdown link shortcuts into XHTML <a> tags.
         */


        showdown.subParser('anchors', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('anchors.before', text, options, globals);

          var writeAnchorTag = function writeAnchorTag(wholeMatch, linkText, linkId, url, m5, m6, title) {
            if (showdown.helper.isUndefined(title)) {
              title = '';
            }

            linkId = linkId.toLowerCase(); // Special case for explicit empty url

            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
              url = '';
            } else if (!url) {
              if (!linkId) {
                // lower-case and turn embedded newlines into spaces
                linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
              }

              url = '#' + linkId;

              if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
                url = globals.gUrls[linkId];

                if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
                  title = globals.gTitles[linkId];
                }
              } else {
                return wholeMatch;
              }
            } //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance


            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<a href="' + url + '"';

            if (title !== '' && title !== null) {
              title = title.replace(/"/g, '&quot;'); //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance

              title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
              result += ' title="' + title + '"';
            } // optionLinksInNewWindow only applies
            // to external links. Hash links (#) open in same page


            if (options.openLinksInNewWindow && !/^#/.test(url)) {
              // escaped _
              result += ' rel="noopener noreferrer" target="¨E95Eblank"';
            }

            result += '>' + linkText + '</a>';
            return result;
          }; // First, handle reference-style links: [link text] [id]


          text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag); // Next, inline-style links: [link text](url "optional title")
          // cases with crazy urls like ./image/cat1).png

          text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag); // normal cases

          text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag); // handle reference-style shortcuts: [link text]
          // These must come last in case you've also got [link test][1]
          // or [link test](/foo)

          text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag); // Lastly handle GithubMentions if option is enabled

          if (options.ghMentions) {
            text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function (wm, st, escape, mentions, username) {
              if (escape === '\\') {
                return st + mentions;
              } //check if options.ghMentionsLink is a string


              if (!showdown.helper.isString(options.ghMentionsLink)) {
                throw new Error('ghMentionsLink option must be a string');
              }

              var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
                  target = '';

              if (options.openLinksInNewWindow) {
                target = ' rel="noopener noreferrer" target="¨E95Eblank"';
              }

              return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
            });
          }

          text = globals.converter._dispatch('anchors.after', text, options, globals);
          return text;
        }); // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

        var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
            simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
            delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
            simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
            delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
            replaceLink = function replaceLink(options) {
          'use strict';

          return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
            link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var lnkTxt = link,
                append = '',
                target = '',
                lmc = leadingMagicChars || '',
                tmc = trailingMagicChars || '';

            if (/^www\./i.test(link)) {
              link = link.replace(/^www\./i, 'http://www.');
            }

            if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
              append = trailingPunctuation;
            }

            if (options.openLinksInNewWindow) {
              target = ' rel="noopener noreferrer" target="¨E95Eblank"';
            }

            return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
          };
        },
            replaceMail = function replaceMail(options, globals) {
          'use strict';

          return function (wholeMatch, b, mail) {
            var href = 'mailto:';
            b = b || '';
            mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);

            if (options.encodeEmails) {
              href = showdown.helper.encodeEmailAddress(href + mail);
              mail = showdown.helper.encodeEmailAddress(mail);
            } else {
              href = href + mail;
            }

            return b + '<a href="' + href + '">' + mail + '</a>';
          };
        };

        showdown.subParser('autoLinks', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('autoLinks.before', text, options, globals);
          text = text.replace(delimUrlRegex, replaceLink(options));
          text = text.replace(delimMailRegex, replaceMail(options, globals));
          text = globals.converter._dispatch('autoLinks.after', text, options, globals);
          return text;
        });
        showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
          'use strict';

          if (!options.simplifiedAutoLink) {
            return text;
          }

          text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

          if (options.excludeTrailingPunctuationFromURLs) {
            text = text.replace(simpleURLRegex2, replaceLink(options));
          } else {
            text = text.replace(simpleURLRegex, replaceLink(options));
          }

          text = text.replace(simpleMailRegex, replaceMail(options, globals));
          text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);
          return text;
        });
        /**
         * These are all the transformations that form block-level
         * tags like paragraphs, headers, and list items.
         */

        showdown.subParser('blockGamut', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('blockGamut.before', text, options, globals); // we parse blockquotes first so that we can have headings and hrs
          // inside blockquotes

          text = showdown.subParser('blockQuotes')(text, options, globals);
          text = showdown.subParser('headers')(text, options, globals); // Do Horizontal Rules:

          text = showdown.subParser('horizontalRule')(text, options, globals);
          text = showdown.subParser('lists')(text, options, globals);
          text = showdown.subParser('codeBlocks')(text, options, globals);
          text = showdown.subParser('tables')(text, options, globals); // We already ran _HashHTMLBlocks() before, in Markdown(), but that
          // was to escape raw HTML in the original Markdown source. This time,
          // we're escaping the markup we've just created, so that we don't wrap
          // <p> tags around block-level tags.

          text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
          text = showdown.subParser('paragraphs')(text, options, globals);
          text = globals.converter._dispatch('blockGamut.after', text, options, globals);
          return text;
        });
        showdown.subParser('blockQuotes', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('blockQuotes.before', text, options, globals); // add a couple extra lines after the text and endtext mark

          text = text + '\n\n';
          var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

          if (options.splitAdjacentBlockquotes) {
            rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
          }

          text = text.replace(rgx, function (bq) {
            // attacklab: hack around Konqueror 3.5.4 bug:
            // "----------bug".replace(/^-/g,"") == "bug"
            bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting
            // attacklab: clean up hack

            bq = bq.replace(/¨0/g, '');
            bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines

            bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
            bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

            bq = bq.replace(/(^|\n)/g, '$1  '); // These leading spaces screw with <pre> content, so we need to fix that:

            bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
              var pre = m1; // attacklab: hack around Konqueror 3.5.4 bug:

              pre = pre.replace(/^  /mg, '¨0');
              pre = pre.replace(/¨0/g, '');
              return pre;
            });
            return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
          });
          text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
          return text;
        });
        /**
         * Process Markdown `<pre><code>` blocks.
         */

        showdown.subParser('codeBlocks', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('codeBlocks.before', text, options, globals); // sentinel workarounds for lack of \A and \Z, safari\khtml bug

          text += '¨0';
          var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
          text = text.replace(pattern, function (wholeMatch, m1, m2) {
            var codeblock = m1,
                nextChar = m2,
                end = '\n';
            codeblock = showdown.subParser('outdent')(codeblock, options, globals);
            codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
            codeblock = showdown.subParser('detab')(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines

            codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

            if (options.omitExtraWLInCodeBlocks) {
              end = '';
            }

            codeblock = '<pre><code>' + codeblock + end + '</code></pre>';
            return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
          }); // strip sentinel

          text = text.replace(/¨0/, '');
          text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
          return text;
        });
        /**
         *
         *   *  Backtick quotes are used for <code></code> spans.
         *
         *   *  You can use multiple backticks as the delimiters if you want to
         *     include literal backticks in the code span. So, this input:
         *
         *         Just type ``foo `bar` baz`` at the prompt.
         *
         *       Will translate to:
         *
         *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
         *
         *    There's no arbitrary limit to the number of backticks you
         *    can use as delimters. If you need three consecutive backticks
         *    in your code, use four for delimiters, etc.
         *
         *  *  You can use spaces to get literal backticks at the edges:
         *
         *         ... type `` `bar` `` ...
         *
         *       Turns to:
         *
         *         ... type <code>`bar`</code> ...
         */

        showdown.subParser('codeSpans', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('codeSpans.before', text, options, globals);

          if (typeof text === 'undefined') {
            text = '';
          }

          text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (wholeMatch, m1, m2, m3) {
            var c = m3;
            c = c.replace(/^([ \t]*)/g, ''); // leading whitespace

            c = c.replace(/[ \t]*$/g, ''); // trailing whitespace

            c = showdown.subParser('encodeCode')(c, options, globals);
            c = m1 + '<code>' + c + '</code>';
            c = showdown.subParser('hashHTMLSpans')(c, options, globals);
            return c;
          });
          text = globals.converter._dispatch('codeSpans.after', text, options, globals);
          return text;
        });
        /**
         * Create a full HTML document from the processed markdown
         */

        showdown.subParser('completeHTMLDocument', function (text, options, globals) {
          'use strict';

          if (!options.completeHTMLDocument) {
            return text;
          }

          text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);
          var doctype = 'html',
              doctypeParsed = '<!DOCTYPE HTML>\n',
              title = '',
              charset = '<meta charset="utf-8">\n',
              lang = '',
              metadata = '';

          if (typeof globals.metadata.parsed.doctype !== 'undefined') {
            doctypeParsed = '<!DOCTYPE ' + globals.metadata.parsed.doctype + '>\n';
            doctype = globals.metadata.parsed.doctype.toString().toLowerCase();

            if (doctype === 'html' || doctype === 'html5') {
              charset = '<meta charset="utf-8">';
            }
          }

          for (var meta in globals.metadata.parsed) {
            if (globals.metadata.parsed.hasOwnProperty(meta)) {
              switch (meta.toLowerCase()) {
                case 'doctype':
                  break;

                case 'title':
                  title = '<title>' + globals.metadata.parsed.title + '</title>\n';
                  break;

                case 'charset':
                  if (doctype === 'html' || doctype === 'html5') {
                    charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                  } else {
                    charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                  }

                  break;

                case 'language':
                case 'lang':
                  lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                  metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                  break;

                default:
                  metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
              }
            }
          }

          text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';
          text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
          return text;
        });
        /**
         * Convert all tabs to spaces
         */

        showdown.subParser('detab', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('detab.before', text, options, globals); // expand first n-1 tabs

          text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width
          // replace the nth with two sentinels

          text = text.replace(/\t/g, '¨A¨B'); // use the sentinel to anchor our regex so it doesn't explode

          text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
            var leadingText = m1,
                numSpaces = 4 - leadingText.length % 4; // g_tab_width
            // there *must* be a better way to do this:

            for (var i = 0; i < numSpaces; i++) {
              leadingText += ' ';
            }

            return leadingText;
          }); // clean up sentinels

          text = text.replace(/¨A/g, '    '); // g_tab_width

          text = text.replace(/¨B/g, '');
          text = globals.converter._dispatch('detab.after', text, options, globals);
          return text;
        });
        showdown.subParser('ellipsis', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('ellipsis.before', text, options, globals);
          text = text.replace(/\.\.\./g, '…');
          text = globals.converter._dispatch('ellipsis.after', text, options, globals);
          return text;
        });
        /**
         * Turn emoji codes into emojis
         *
         * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
         */

        showdown.subParser('emoji', function (text, options, globals) {
          'use strict';

          if (!options.emoji) {
            return text;
          }

          text = globals.converter._dispatch('emoji.before', text, options, globals);
          var emojiRgx = /:([\S]+?):/g;
          text = text.replace(emojiRgx, function (wm, emojiCode) {
            if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
              return showdown.helper.emojis[emojiCode];
            }

            return wm;
          });
          text = globals.converter._dispatch('emoji.after', text, options, globals);
          return text;
        });
        /**
         * Smart processing for ampersands and angle brackets that need to be encoded.
         */

        showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals); // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
          // http://bumppo.net/projects/amputator/

          text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;'); // Encode naked <'s

          text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;'); // Encode <

          text = text.replace(/</g, '&lt;'); // Encode >

          text = text.replace(/>/g, '&gt;');
          text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
          return text;
        });
        /**
         * Returns the string, with after processing the following backslash escape sequences.
         *
         * attacklab: The polite way to do this is with the new escapeCharacters() function:
         *
         *    text = escapeCharacters(text,"\\",true);
         *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
         *
         * ...but we're sidestepping its use of the (slow) RegExp constructor
         * as an optimization for Firefox.  This function gets called a LOT.
         */

        showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);
          text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
          text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);
          text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
          return text;
        });
        /**
         * Encode/escape certain characters inside Markdown code runs.
         * The point is that in code, these characters are literals,
         * and lose their special Markdown meanings.
         */

        showdown.subParser('encodeCode', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('encodeCode.before', text, options, globals); // Encode all ampersands; HTML entities are not
          // entities within a Markdown code span.

          text = text.replace(/&/g, '&amp;') // Do the angle bracket song and dance:
          .replace(/</g, '&lt;').replace(/>/g, '&gt;') // Now, escape characters that are magic in Markdown:
          .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
          text = globals.converter._dispatch('encodeCode.after', text, options, globals);
          return text;
        });
        /**
         * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
         * don't conflict with their use in Markdown for code, italics and strong.
         */

        showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals); // Build a regex to find HTML tags.

          var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
              comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
          text = text.replace(tags, function (wholeMatch) {
            return wholeMatch.replace(/(.)<\/?code>(?=.)/g, '$1`').replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
          });
          text = text.replace(comments, function (wholeMatch) {
            return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
          });
          text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
          return text;
        });
        /**
         * Handle github codeblocks prior to running HashHTML so that
         * HTML contained within the codeblock gets escaped properly
         * Example:
         * ```ruby
         *     def hello_world(x)
         *       puts "Hello, #{x}"
         *     end
         * ```
         */

        showdown.subParser('githubCodeBlocks', function (text, options, globals) {
          'use strict'; // early exit if option is not enabled

          if (!options.ghCodeBlocks) {
            return text;
          }

          text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);
          text += '¨0';
          text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (wholeMatch, delim, language, codeblock) {
            var end = options.omitExtraWLInCodeBlocks ? '' : '\n'; // First parse the github code block

            codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
            codeblock = showdown.subParser('detab')(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines

            codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

            codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';
            codeblock = showdown.subParser('hashBlock')(codeblock, options, globals); // Since GHCodeblocks can be false positives, we need to
            // store the primitive text and the parsed text in a global var,
            // and then return a token

            return '\n\n¨G' + (globals.ghCodeBlocks.push({
              text: wholeMatch,
              codeblock: codeblock
            }) - 1) + 'G\n\n';
          }); // attacklab: strip sentinel

          text = text.replace(/¨0/, '');
          return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
        });
        showdown.subParser('hashBlock', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('hashBlock.before', text, options, globals);
          text = text.replace(/(^\n+|\n+$)/g, '');
          text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
          text = globals.converter._dispatch('hashBlock.after', text, options, globals);
          return text;
        });
        /**
         * Hash and escape <code> elements that should not be parsed as markdown
         */

        showdown.subParser('hashCodeTags', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

          var repFunc = function repFunc(wholeMatch, match, left, right) {
            var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
            return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
          }; // Hash naked <code>


          text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');
          text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
          return text;
        });
        showdown.subParser('hashElement', function (text, options, globals) {
          'use strict';

          return function (wholeMatch, m1) {
            var blockText = m1; // Undo double lines

            blockText = blockText.replace(/\n\n/g, '\n');
            blockText = blockText.replace(/^\n/, ''); // strip trailing blank lines

            blockText = blockText.replace(/\n+$/g, ''); // Replace the element text with a marker ("¨KxK" where x is its key)

            blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';
            return blockText;
          };
        });
        showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

          var blockTags = ['pre', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'table', 'dl', 'ol', 'ul', 'script', 'noscript', 'form', 'fieldset', 'iframe', 'math', 'style', 'section', 'header', 'footer', 'nav', 'article', 'aside', 'address', 'audio', 'canvas', 'figure', 'hgroup', 'output', 'video', 'p'],
              repFunc = function repFunc(wholeMatch, match, left, right) {
            var txt = wholeMatch; // check if this html element is marked as markdown
            // if so, it's contents should be parsed as markdown

            if (left.search(/\bmarkdown\b/) !== -1) {
              txt = left + globals.converter.makeHtml(match) + right;
            }

            return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
          };

          if (options.backslashEscapesHTMLTags) {
            // encode backslash escaped HTML tags
            text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
              return '&lt;' + inside + '&gt;';
            });
          } // hash HTML Blocks


          for (var i = 0; i < blockTags.length; ++i) {
            var opTagPos,
                rgx1 = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
                patLeft = '<' + blockTags[i] + '\\b[^>]*>',
                patRight = '</' + blockTags[i] + '>'; // 1. Look for the first position of the first opening HTML tag in the text

            while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
              // if the HTML tag is \ escaped, we need to escape it and break
              //2. Split the text in that position
              var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
                  //3. Match recursively
              newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im'); // prevent an infinite loop

              if (newSubText1 === subTexts[1]) {
                break;
              }

              text = subTexts[0].concat(newSubText1);
            }
          } // HR SPECIAL CASE


          text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals)); // Special case for standalone HTML comments

          text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
            return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
          }, '^ {0,3}<!--', '-->', 'gm'); // PHP and ASP-style processor instructions (<?...?> and <%...%>)

          text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));
          text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
          return text;
        });
        /**
         * Hash span elements that should not be parsed as markdown
         */

        showdown.subParser('hashHTMLSpans', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

          function hashHTMLSpan(html) {
            return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
          } // Hash Self Closing tags


          text = text.replace(/<[^>]+?\/>/gi, function (wm) {
            return hashHTMLSpan(wm);
          }); // Hash tags without properties

          text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
            return hashHTMLSpan(wm);
          }); // Hash tags with properties

          text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
            return hashHTMLSpan(wm);
          }); // Hash self closing tags without />

          text = text.replace(/<[^>]+?>/gi, function (wm) {
            return hashHTMLSpan(wm);
          });
          /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

          text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
          return text;
        });
        /**
         * Unhash HTML spans
         */

        showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

          for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
            var repText = globals.gHtmlSpans[i],
                // limiter to prevent infinite loop (assume 10 as limit for recurse)
            limit = 0;

            while (/¨C(\d+)C/.test(repText)) {
              var num = RegExp.$1;
              repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);

              if (limit === 10) {
                console.error('maximum nesting of 10 spans reached!!!');
                break;
              }

              ++limit;
            }

            text = text.replace('¨C' + i + 'C', repText);
          }

          text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
          return text;
        });
        /**
         * Hash and escape <pre><code> elements that should not be parsed as markdown
         */

        showdown.subParser('hashPreCodeTags', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

          var repFunc = function repFunc(wholeMatch, match, left, right) {
            // encode html entities
            var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
            return '\n\n¨G' + (globals.ghCodeBlocks.push({
              text: wholeMatch,
              codeblock: codeblock
            }) - 1) + 'G\n\n';
          }; // Hash <pre><code>


          text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');
          text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
          return text;
        });
        showdown.subParser('headers', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('headers.before', text, options, globals);
          var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart),
              // Set text-style headers:
          //	Header 1
          //	========
          //
          //	Header 2
          //	--------
          //
          setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
              setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
          text = text.replace(setextRegexH1, function (wholeMatch, m1) {
            var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
                hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
                hLevel = headerLevelStart,
                hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
            return showdown.subParser('hashBlock')(hashBlock, options, globals);
          });
          text = text.replace(setextRegexH2, function (matchFound, m1) {
            var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
                hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
                hLevel = headerLevelStart + 1,
                hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
            return showdown.subParser('hashBlock')(hashBlock, options, globals);
          }); // atx-style headers:
          //  # Header 1
          //  ## Header 2
          //  ## Header 2 with closing hashes ##
          //  ...
          //  ###### Header 6
          //

          var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
          text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
            var hText = m2;

            if (options.customizedHeaderId) {
              hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
            }

            var span = showdown.subParser('spanGamut')(hText, options, globals),
                hID = options.noHeaderId ? '' : ' id="' + headerId(m2) + '"',
                hLevel = headerLevelStart - 1 + m1.length,
                header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';
            return showdown.subParser('hashBlock')(header, options, globals);
          });

          function headerId(m) {
            var title, prefix; // It is separate from other options to allow combining prefix and customized

            if (options.customizedHeaderId) {
              var match = m.match(/\{([^{]+?)}\s*$/);

              if (match && match[1]) {
                m = match[1];
              }
            }

            title = m; // Prefix id to prevent causing inadvertent pre-existing style matches.

            if (showdown.helper.isString(options.prefixHeaderId)) {
              prefix = options.prefixHeaderId;
            } else if (options.prefixHeaderId === true) {
              prefix = 'section-';
            } else {
              prefix = '';
            }

            if (!options.rawPrefixHeaderId) {
              title = prefix + title;
            }

            if (options.ghCompatibleHeaderId) {
              title = title.replace(/ /g, '-') // replace previously escaped chars (&, ¨ and $)
              .replace(/&amp;/g, '').replace(/¨T/g, '').replace(/¨D/g, '') // replace rest of the chars (&~$ are repeated as they might have been escaped)
              // borrowed from github's redcarpet (some they should produce similar results)
              .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '').toLowerCase();
            } else if (options.rawHeaderId) {
              title = title.replace(/ /g, '-') // replace previously escaped chars (&, ¨ and $)
              .replace(/&amp;/g, '&').replace(/¨T/g, '¨').replace(/¨D/g, '$') // replace " and '
              .replace(/["']/g, '-').toLowerCase();
            } else {
              title = title.replace(/[^\w]/g, '').toLowerCase();
            }

            if (options.rawPrefixHeaderId) {
              title = prefix + title;
            }

            if (globals.hashLinkCounts[title]) {
              title = title + '-' + globals.hashLinkCounts[title]++;
            } else {
              globals.hashLinkCounts[title] = 1;
            }

            return title;
          }

          text = globals.converter._dispatch('headers.after', text, options, globals);
          return text;
        });
        /**
         * Turn Markdown link shortcuts into XHTML <a> tags.
         */

        showdown.subParser('horizontalRule', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('horizontalRule.before', text, options, globals);
          var key = showdown.subParser('hashBlock')('<hr />', options, globals);
          text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
          text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
          text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
          text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
          return text;
        });
        /**
         * Turn Markdown image shortcuts into <img> tags.
         */

        showdown.subParser('images', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('images.before', text, options, globals);
          var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
              crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
              base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
              referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
              refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

          function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
            url = url.replace(/\s/g, '');
            return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
          }

          function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
            var gUrls = globals.gUrls,
                gTitles = globals.gTitles,
                gDims = globals.gDimensions;
            linkId = linkId.toLowerCase();

            if (!title) {
              title = '';
            } // Special case for explicit empty url


            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
              url = '';
            } else if (url === '' || url === null) {
              if (linkId === '' || linkId === null) {
                // lower-case and turn embedded newlines into spaces
                linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
              }

              url = '#' + linkId;

              if (!showdown.helper.isUndefined(gUrls[linkId])) {
                url = gUrls[linkId];

                if (!showdown.helper.isUndefined(gTitles[linkId])) {
                  title = gTitles[linkId];
                }

                if (!showdown.helper.isUndefined(gDims[linkId])) {
                  width = gDims[linkId].width;
                  height = gDims[linkId].height;
                }
              } else {
                return wholeMatch;
              }
            }

            altText = altText.replace(/"/g, '&quot;') //altText = showdown.helper.escapeCharacters(altText, '*_', false);
            .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback); //url = showdown.helper.escapeCharacters(url, '*_', false);

            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<img src="' + url + '" alt="' + altText + '"';

            if (title && showdown.helper.isString(title)) {
              title = title.replace(/"/g, '&quot;') //title = showdown.helper.escapeCharacters(title, '*_', false);
              .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
              result += ' title="' + title + '"';
            }

            if (width && height) {
              width = width === '*' ? 'auto' : width;
              height = height === '*' ? 'auto' : height;
              result += ' width="' + width + '"';
              result += ' height="' + height + '"';
            }

            result += ' />';
            return result;
          } // First, handle reference-style labeled images: ![alt text][id]


          text = text.replace(referenceRegExp, writeImageTag); // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
          // base64 encoded images

          text = text.replace(base64RegExp, writeImageTagBase64); // cases with crazy urls like ./image/cat1).png

          text = text.replace(crazyRegExp, writeImageTag); // normal cases

          text = text.replace(inlineRegExp, writeImageTag); // handle reference-style shortcuts: ![img text]

          text = text.replace(refShortcutRegExp, writeImageTag);
          text = globals.converter._dispatch('images.after', text, options, globals);
          return text;
        });
        showdown.subParser('italicsAndBold', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('italicsAndBold.before', text, options, globals); // it's faster to have 3 separate regexes for each case than have just one
          // because of backtracing, in some cases, it could lead to an exponential effect
          // called "catastrophic backtrace". Ominous!

          function parseInside(txt, left, right) {
            /*
            if (options.simplifiedAutoLink) {
              txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
            }
            */
            return left + txt + right;
          } // Parse underscores


          if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
              return parseInside(txt, '<strong><em>', '</em></strong>');
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
              return parseInside(txt, '<strong>', '</strong>');
            });
            text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
              return parseInside(txt, '<em>', '</em>');
            });
          } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
              return /\S$/.test(m) ? parseInside(m, '<strong><em>', '</em></strong>') : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
              return /\S$/.test(m) ? parseInside(m, '<strong>', '</strong>') : wm;
            });
            text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
              // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
              return /\S$/.test(m) ? parseInside(m, '<em>', '</em>') : wm;
            });
          } // Now parse asterisks


          if (options.literalMidWordAsterisks) {
            text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
              return parseInside(txt, lead + '<strong><em>', '</em></strong>');
            });
            text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
              return parseInside(txt, lead + '<strong>', '</strong>');
            });
            text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (wm, lead, txt) {
              return parseInside(txt, lead + '<em>', '</em>');
            });
          } else {
            text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
              return /\S$/.test(m) ? parseInside(m, '<strong><em>', '</em></strong>') : wm;
            });
            text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
              return /\S$/.test(m) ? parseInside(m, '<strong>', '</strong>') : wm;
            });
            text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
              // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
              return /\S$/.test(m) ? parseInside(m, '<em>', '</em>') : wm;
            });
          }

          text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
          return text;
        });
        /**
         * Form HTML ordered (numbered) and unordered (bulleted) lists.
         */

        showdown.subParser('lists', function (text, options, globals) {
          'use strict';
          /**
           * Process the contents of a single ordered or unordered list, splitting it
           * into individual list items.
           * @param {string} listStr
           * @param {boolean} trimTrailing
           * @returns {string}
           */

          function processListItems(listStr, trimTrailing) {
            // The $g_list_level global keeps track of when we're inside a list.
            // Each time we enter a list, we increment it; when we leave a list,
            // we decrement. If it's zero, we're not in a list anymore.
            //
            // We do this because when we're not inside a list, we want to treat
            // something like this:
            //
            //    I recommend upgrading to version
            //    8. Oops, now this line is treated
            //    as a sub-list.
            //
            // As a single paragraph, despite the fact that the second line starts
            // with a digit-period-space sequence.
            //
            // Whereas when we're inside a list (or sub-list), that line will be
            // treated as the start of a sub-list. What a kludge, huh? This is
            // an aspect of Markdown's syntax that's hard to parse perfectly
            // without resorting to mind-reading. Perhaps the solution is to
            // change the syntax rules such that sub-lists must start with a
            // starting cardinal number; e.g. "1." or "a.".
            globals.gListLevel++; // trim trailing blank lines:

            listStr = listStr.replace(/\n{2,}$/, '\n'); // attacklab: add sentinel to emulate \z

            listStr += '¨0';
            var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr); // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
            // which is a syntax breaking change
            // activating this option reverts to old behavior

            if (options.disableForced4SpacesIndentedSublists) {
              rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
            }

            listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
              checked = checked && checked.trim() !== '';
              var item = showdown.subParser('outdent')(m4, options, globals),
                  bulletStyle = ''; // Support for github tasklists

              if (taskbtn && options.tasklists) {
                bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
                item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                  var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';

                  if (checked) {
                    otp += ' checked';
                  }

                  otp += '>';
                  return otp;
                });
              } // ISSUE #312
              // This input: - - - a
              // causes trouble to the parser, since it interprets it as:
              // <ul><li><li><li>a</li></li></li></ul>
              // instead of:
              // <ul><li>- - a</li></ul>
              // So, to prevent it, we will put a marker (¨A)in the beginning of the line
              // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser


              item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
                return '¨A' + wm2;
              }); // m1 - Leading line or
              // Has a double return (multi paragraph) or
              // Has sublist

              if (m1 || item.search(/\n{2,}/) > -1) {
                item = showdown.subParser('githubCodeBlocks')(item, options, globals);
                item = showdown.subParser('blockGamut')(item, options, globals);
              } else {
                // Recursion for sub-lists:
                item = showdown.subParser('lists')(item, options, globals);
                item = item.replace(/\n$/, ''); // chomp(item)

                item = showdown.subParser('hashHTMLBlocks')(item, options, globals); // Colapse double linebreaks

                item = item.replace(/\n\n+/g, '\n\n');

                if (isParagraphed) {
                  item = showdown.subParser('paragraphs')(item, options, globals);
                } else {
                  item = showdown.subParser('spanGamut')(item, options, globals);
                }
              } // now we need to remove the marker (¨A)


              item = item.replace('¨A', ''); // we can finally wrap the line in list item tags

              item = '<li' + bulletStyle + '>' + item + '</li>\n';
              return item;
            }); // attacklab: strip sentinel

            listStr = listStr.replace(/¨0/g, '');
            globals.gListLevel--;

            if (trimTrailing) {
              listStr = listStr.replace(/\s+$/, '');
            }

            return listStr;
          }

          function styleStartNumber(list, listType) {
            // check if ol and starts by a number different than 1
            if (listType === 'ol') {
              var res = list.match(/^ *(\d+)\./);

              if (res && res[1] !== '1') {
                return ' start="' + res[1] + '"';
              }
            }

            return '';
          }
          /**
           * Check and parse consecutive lists (better fix for issue #142)
           * @param {string} list
           * @param {string} listType
           * @param {boolean} trimTrailing
           * @returns {string}
           */


          function parseConsecutiveLists(list, listType, trimTrailing) {
            // check if we caught 2 or more consecutive lists by mistake
            // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
            var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
                ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
                counterRxg = listType === 'ul' ? olRgx : ulRgx,
                result = '';

            if (list.search(counterRxg) !== -1) {
              (function parseCL(txt) {
                var pos = txt.search(counterRxg),
                    style = styleStartNumber(list, listType);

                if (pos !== -1) {
                  // slice
                  result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n'; // invert counterType and listType

                  listType = listType === 'ul' ? 'ol' : 'ul';
                  counterRxg = listType === 'ul' ? olRgx : ulRgx; //recurse

                  parseCL(txt.slice(pos));
                } else {
                  result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
                }
              })(list);
            } else {
              var style = styleStartNumber(list, listType);
              result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
            }

            return result;
          }
          /** Start of list parsing **/


          text = globals.converter._dispatch('lists.before', text, options, globals); // add sentinel to hack around khtml/safari bug:
          // http://bugs.webkit.org/show_bug.cgi?id=11231

          text += '¨0';

          if (globals.gListLevel) {
            text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, list, m2) {
              var listType = m2.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
              return parseConsecutiveLists(list, listType, true);
            });
          } else {
            text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, m1, list, m3) {
              var listType = m3.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
              return parseConsecutiveLists(list, listType, false);
            });
          } // strip sentinel


          text = text.replace(/¨0/, '');
          text = globals.converter._dispatch('lists.after', text, options, globals);
          return text;
        });
        /**
         * Parse metadata at the top of the document
         */

        showdown.subParser('metadata', function (text, options, globals) {
          'use strict';

          if (!options.metadata) {
            return text;
          }

          text = globals.converter._dispatch('metadata.before', text, options, globals);

          function parseMetadataContents(content) {
            // raw is raw so it's not changed in any way
            globals.metadata.raw = content; // escape chars forbidden in html attributes
            // double quotes

            content = content // ampersand first
            .replace(/&/g, '&amp;') // double quotes
            .replace(/"/g, '&quot;');
            content = content.replace(/\n {4}/g, ' ');
            content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
              globals.metadata.parsed[key] = value;
              return '';
            });
          }

          text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
            parseMetadataContents(content);
            return '¨M';
          });
          text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
            if (format) {
              globals.metadata.format = format;
            }

            parseMetadataContents(content);
            return '¨M';
          });
          text = text.replace(/¨M/g, '');
          text = globals.converter._dispatch('metadata.after', text, options, globals);
          return text;
        });
        /**
         * Remove one level of line-leading tabs or spaces
         */

        showdown.subParser('outdent', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('outdent.before', text, options, globals); // attacklab: hack around Konqueror 3.5.4 bug:
          // "----------bug".replace(/^-/g,"") == "bug"

          text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width
          // attacklab: clean up hack

          text = text.replace(/¨0/g, '');
          text = globals.converter._dispatch('outdent.after', text, options, globals);
          return text;
        });
        /**
         *
         */

        showdown.subParser('paragraphs', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('paragraphs.before', text, options, globals); // Strip leading and trailing lines:

          text = text.replace(/^\n+/g, '');
          text = text.replace(/\n+$/g, '');
          var grafs = text.split(/\n{2,}/g),
              grafsOut = [],
              end = grafs.length; // Wrap <p> tags

          for (var i = 0; i < end; i++) {
            var str = grafs[i]; // if this is an HTML marker, copy it

            if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
              grafsOut.push(str); // test for presence of characters to prevent empty lines being parsed
              // as paragraphs (resulting in undesired extra empty paragraphs)
            } else if (str.search(/\S/) >= 0) {
              str = showdown.subParser('spanGamut')(str, options, globals);
              str = str.replace(/^([ \t]*)/g, '<p>');
              str += '</p>';
              grafsOut.push(str);
            }
          }
          /** Unhashify HTML blocks */


          end = grafsOut.length;

          for (i = 0; i < end; i++) {
            var blockText = '',
                grafsOutIt = grafsOut[i],
                codeFlag = false; // if this is a marker for an html block...
            // use RegExp.test instead of string.search because of QML bug

            while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
              var delim = RegExp.$1,
                  num = RegExp.$2;

              if (delim === 'K') {
                blockText = globals.gHtmlBlocks[num];
              } else {
                // we need to check if ghBlock is a false positive
                if (codeFlag) {
                  // use encoded version of all text
                  blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
                } else {
                  blockText = globals.ghCodeBlocks[num].codeblock;
                }
              }

              blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

              grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText); // Check if grafsOutIt is a pre->code

              if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
                codeFlag = true;
              }
            }

            grafsOut[i] = grafsOutIt;
          }

          text = grafsOut.join('\n'); // Strip leading and trailing lines:

          text = text.replace(/^\n+/g, '');
          text = text.replace(/\n+$/g, '');
          return globals.converter._dispatch('paragraphs.after', text, options, globals);
        });
        /**
         * Run extension
         */

        showdown.subParser('runExtension', function (ext, text, options, globals) {
          'use strict';

          if (ext.filter) {
            text = ext.filter(text, globals.converter, options);
          } else if (ext.regex) {
            // TODO remove this when old extension loading mechanism is deprecated
            var re = ext.regex;

            if (!(re instanceof RegExp)) {
              re = new RegExp(re, 'g');
            }

            text = text.replace(re, ext.replace);
          }

          return text;
        });
        /**
         * These are all the transformations that occur *within* block-level
         * tags like paragraphs, headers, and list items.
         */

        showdown.subParser('spanGamut', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('spanGamut.before', text, options, globals);
          text = showdown.subParser('codeSpans')(text, options, globals);
          text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
          text = showdown.subParser('encodeBackslashEscapes')(text, options, globals); // Process anchor and image tags. Images must come first,
          // because ![foo][f] looks like an anchor.

          text = showdown.subParser('images')(text, options, globals);
          text = showdown.subParser('anchors')(text, options, globals); // Make links out of things like `<http://example.com/>`
          // Must come after anchors, because you can use < and >
          // delimiters in inline links like [this](<url>).

          text = showdown.subParser('autoLinks')(text, options, globals);
          text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
          text = showdown.subParser('emoji')(text, options, globals);
          text = showdown.subParser('underline')(text, options, globals);
          text = showdown.subParser('italicsAndBold')(text, options, globals);
          text = showdown.subParser('strikethrough')(text, options, globals);
          text = showdown.subParser('ellipsis')(text, options, globals); // we need to hash HTML tags inside spans

          text = showdown.subParser('hashHTMLSpans')(text, options, globals); // now we encode amps and angles

          text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals); // Do hard breaks

          if (options.simpleLineBreaks) {
            // GFM style hard breaks
            // only add line breaks if the text does not contain a block (special case for lists)
            if (!/\n\n¨K/.test(text)) {
              text = text.replace(/\n+/g, '<br />\n');
            }
          } else {
            // Vanilla hard breaks
            text = text.replace(/  +\n/g, '<br />\n');
          }

          text = globals.converter._dispatch('spanGamut.after', text, options, globals);
          return text;
        });
        showdown.subParser('strikethrough', function (text, options, globals) {
          'use strict';

          function parseInside(txt) {
            if (options.simplifiedAutoLink) {
              txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
            }

            return '<del>' + txt + '</del>';
          }

          if (options.strikethrough) {
            text = globals.converter._dispatch('strikethrough.before', text, options, globals);
            text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) {
              return parseInside(txt);
            });
            text = globals.converter._dispatch('strikethrough.after', text, options, globals);
          }

          return text;
        });
        /**
         * Strips link definitions from text, stores the URLs and titles in
         * hash references.
         * Link defs are in the form: ^[id]: url "optional title"
         */

        showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
          'use strict';

          var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
              base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm; // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug

          text += '¨0';

          var replaceFunc = function replaceFunc(wholeMatch, linkId, url, width, height, blankLines, title) {
            linkId = linkId.toLowerCase();

            if (url.match(/^data:.+?\/.+?;base64,/)) {
              // remove newlines
              globals.gUrls[linkId] = url.replace(/\s/g, '');
            } else {
              globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals); // Link IDs are case-insensitive
            }

            if (blankLines) {
              // Oops, found blank lines, so it's not a title.
              // Put back the parenthetical statement we stole.
              return blankLines + title;
            } else {
              if (title) {
                globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
              }

              if (options.parseImgDimensions && width && height) {
                globals.gDimensions[linkId] = {
                  width: width,
                  height: height
                };
              }
            } // Completely remove the definition from the text


            return '';
          }; // first we try to find base64 link references


          text = text.replace(base64Regex, replaceFunc);
          text = text.replace(regex, replaceFunc); // attacklab: strip sentinel

          text = text.replace(/¨0/, '');
          return text;
        });
        showdown.subParser('tables', function (text, options, globals) {
          'use strict';

          if (!options.tables) {
            return text;
          }

          var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
              //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
          singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

          function parseStyles(sLine) {
            if (/^:[ \t]*--*$/.test(sLine)) {
              return ' style="text-align:left;"';
            } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
              return ' style="text-align:right;"';
            } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
              return ' style="text-align:center;"';
            } else {
              return '';
            }
          }

          function parseHeaders(header, style) {
            var id = '';
            header = header.trim(); // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility

            if (options.tablesHeaderId || options.tableHeaderId) {
              id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
            }

            header = showdown.subParser('spanGamut')(header, options, globals);
            return '<th' + id + style + '>' + header + '</th>\n';
          }

          function parseCells(cell, style) {
            var subText = showdown.subParser('spanGamut')(cell, options, globals);
            return '<td' + style + '>' + subText + '</td>\n';
          }

          function buildTable(headers, cells) {
            var tb = '<table>\n<thead>\n<tr>\n',
                tblLgn = headers.length;

            for (var i = 0; i < tblLgn; ++i) {
              tb += headers[i];
            }

            tb += '</tr>\n</thead>\n<tbody>\n';

            for (i = 0; i < cells.length; ++i) {
              tb += '<tr>\n';

              for (var ii = 0; ii < tblLgn; ++ii) {
                tb += cells[i][ii];
              }

              tb += '</tr>\n';
            }

            tb += '</tbody>\n</table>\n';
            return tb;
          }

          function parseTable(rawTable) {
            var i,
                tableLines = rawTable.split('\n');

            for (i = 0; i < tableLines.length; ++i) {
              // strip wrong first and last column if wrapped tables are used
              if (/^ {0,3}\|/.test(tableLines[i])) {
                tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
              }

              if (/\|[ \t]*$/.test(tableLines[i])) {
                tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
              } // parse code spans first, but we only support one line code spans


              tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
            }

            var rawHeaders = tableLines[0].split('|').map(function (s) {
              return s.trim();
            }),
                rawStyles = tableLines[1].split('|').map(function (s) {
              return s.trim();
            }),
                rawCells = [],
                headers = [],
                styles = [],
                cells = [];
            tableLines.shift();
            tableLines.shift();

            for (i = 0; i < tableLines.length; ++i) {
              if (tableLines[i].trim() === '') {
                continue;
              }

              rawCells.push(tableLines[i].split('|').map(function (s) {
                return s.trim();
              }));
            }

            if (rawHeaders.length < rawStyles.length) {
              return rawTable;
            }

            for (i = 0; i < rawStyles.length; ++i) {
              styles.push(parseStyles(rawStyles[i]));
            }

            for (i = 0; i < rawHeaders.length; ++i) {
              if (showdown.helper.isUndefined(styles[i])) {
                styles[i] = '';
              }

              headers.push(parseHeaders(rawHeaders[i], styles[i]));
            }

            for (i = 0; i < rawCells.length; ++i) {
              var row = [];

              for (var ii = 0; ii < headers.length; ++ii) {
                if (showdown.helper.isUndefined(rawCells[i][ii])) {}

                row.push(parseCells(rawCells[i][ii], styles[ii]));
              }

              cells.push(row);
            }

            return buildTable(headers, cells);
          }

          text = globals.converter._dispatch('tables.before', text, options, globals); // find escaped pipe characters

          text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback); // parse multi column tables

          text = text.replace(tableRgx, parseTable); // parse one column tables

          text = text.replace(singeColTblRgx, parseTable);
          text = globals.converter._dispatch('tables.after', text, options, globals);
          return text;
        });
        showdown.subParser('underline', function (text, options, globals) {
          'use strict';

          if (!options.underline) {
            return text;
          }

          text = globals.converter._dispatch('underline.before', text, options, globals);

          if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
              return '<u>' + txt + '</u>';
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
              return '<u>' + txt + '</u>';
            });
          } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
              return /\S$/.test(m) ? '<u>' + m + '</u>' : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
              return /\S$/.test(m) ? '<u>' + m + '</u>' : wm;
            });
          } // escape remaining underscores to prevent them being parsed by italic and bold


          text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
          text = globals.converter._dispatch('underline.after', text, options, globals);
          return text;
        });
        /**
         * Swap back in all the special characters we've hidden.
         */

        showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
          'use strict';

          text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);
          text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
            var charCodeToReplace = parseInt(m1);
            return String.fromCharCode(charCodeToReplace);
          });
          text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
          return text;
        });
        showdown.subParser('makeMarkdown.blockquote', function (node, globals) {
          'use strict';

          var txt = '';

          if (node.hasChildNodes()) {
            var children = node.childNodes,
                childrenLength = children.length;

            for (var i = 0; i < childrenLength; ++i) {
              var innerTxt = showdown.subParser('makeMarkdown.node')(children[i], globals);

              if (innerTxt === '') {
                continue;
              }

              txt += innerTxt;
            }
          } // cleanup


          txt = txt.trim();
          txt = '> ' + txt.split('\n').join('\n> ');
          return txt;
        });
        showdown.subParser('makeMarkdown.codeBlock', function (node, globals) {
          'use strict';

          var lang = node.getAttribute('language'),
              num = node.getAttribute('precodenum');
          return '```' + lang + '\n' + globals.preList[num] + '\n```';
        });
        showdown.subParser('makeMarkdown.codeSpan', function (node) {
          'use strict';

          return '`' + node.innerHTML + '`';
        });
        showdown.subParser('makeMarkdown.emphasis', function (node, globals) {
          'use strict';

          var txt = '';

          if (node.hasChildNodes()) {
            txt += '*';
            var children = node.childNodes,
                childrenLength = children.length;

            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
            }

            txt += '*';
          }

          return txt;
        });
        showdown.subParser('makeMarkdown.header', function (node, globals, headerLevel) {
          'use strict';

          var headerMark = new Array(headerLevel + 1).join('#'),
              txt = '';

          if (node.hasChildNodes()) {
            txt = headerMark + ' ';
            var children = node.childNodes,
                childrenLength = children.length;

            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
            }
          }

          return txt;
        });
        showdown.subParser('makeMarkdown.hr', function () {
          'use strict';

          return '---';
        });
        showdown.subParser('makeMarkdown.image', function (node) {
          'use strict';

          var txt = '';

          if (node.hasAttribute('src')) {
            txt += '![' + node.getAttribute('alt') + '](';
            txt += '<' + node.getAttribute('src') + '>';

            if (node.hasAttribute('width') && node.hasAttribute('height')) {
              txt += ' =' + node.getAttribute('width') + 'x' + node.getAttribute('height');
            }

            if (node.hasAttribute('title')) {
              txt += ' "' + node.getAttribute('title') + '"';
            }

            txt += ')';
          }

          return txt;
        });
        showdown.subParser('makeMarkdown.links', function (node, globals) {
          'use strict';

          var txt = '';

          if (node.hasChildNodes() && node.hasAttribute('href')) {
            var children = node.childNodes,
                childrenLength = children.length;
            txt = '[';

            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
            }

            txt += '](';
            txt += '<' + node.getAttribute('href') + '>';

            if (node.hasAttribute('title')) {
              txt += ' "' + node.getAttribute('title') + '"';
            }

            txt += ')';
          }

          return txt;
        });
        showdown.subParser('makeMarkdown.list', function (node, globals, type) {
          'use strict';

          var txt = '';

          if (!node.hasChildNodes()) {
            return '';
          }

          var listItems = node.childNodes,
              listItemsLenght = listItems.length,
              listNum = node.getAttribute('start') || 1;

          for (var i = 0; i < listItemsLenght; ++i) {
            if (typeof listItems[i].tagName === 'undefined' || listItems[i].tagName.toLowerCase() !== 'li') {
              continue;
            } // define the bullet to use in list


            var bullet = '';

            if (type === 'ol') {
              bullet = listNum.toString() + '. ';
            } else {
              bullet = '- ';
            } // parse list item


            txt += bullet + showdown.subParser('makeMarkdown.listItem')(listItems[i], globals);
            ++listNum;
          } // add comment at the end to prevent consecutive lists to be parsed as one


          txt += '\n<!-- -->\n';
          return txt.trim();
        });
        showdown.subParser('makeMarkdown.listItem', function (node, globals) {
          'use strict';

          var listItemTxt = '';
          var children = node.childNodes,
              childrenLenght = children.length;

          for (var i = 0; i < childrenLenght; ++i) {
            listItemTxt += showdown.subParser('makeMarkdown.node')(children[i], globals);
          } // if it's only one liner, we need to add a newline at the end


          if (!/\n$/.test(listItemTxt)) {
            listItemTxt += '\n';
          } else {
            // it's multiparagraph, so we need to indent
            listItemTxt = listItemTxt.split('\n').join('\n    ').replace(/^ {4}$/gm, '').replace(/\n\n+/g, '\n\n');
          }

          return listItemTxt;
        });
        showdown.subParser('makeMarkdown.node', function (node, globals, spansOnly) {
          'use strict';

          spansOnly = spansOnly || false;
          var txt = ''; // edge case of text without wrapper paragraph

          if (node.nodeType === 3) {
            return showdown.subParser('makeMarkdown.txt')(node, globals);
          } // HTML comment


          if (node.nodeType === 8) {
            return '<!--' + node.data + '-->\n\n';
          } // process only node elements


          if (node.nodeType !== 1) {
            return '';
          }

          var tagName = node.tagName.toLowerCase();

          switch (tagName) {
            //
            // BLOCKS
            //
            case 'h1':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n';
              }

              break;

            case 'h2':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n';
              }

              break;

            case 'h3':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n';
              }

              break;

            case 'h4':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n';
              }

              break;

            case 'h5':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n';
              }

              break;

            case 'h6':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n';
              }

              break;

            case 'p':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n';
              }

              break;

            case 'blockquote':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n';
              }

              break;

            case 'hr':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n';
              }

              break;

            case 'ol':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n';
              }

              break;

            case 'ul':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n';
              }

              break;

            case 'precode':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n';
              }

              break;

            case 'pre':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n';
              }

              break;

            case 'table':
              if (!spansOnly) {
                txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n';
              }

              break;
            //
            // SPANS
            //

            case 'code':
              txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
              break;

            case 'em':
            case 'i':
              txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
              break;

            case 'strong':
            case 'b':
              txt = showdown.subParser('makeMarkdown.strong')(node, globals);
              break;

            case 'del':
              txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
              break;

            case 'a':
              txt = showdown.subParser('makeMarkdown.links')(node, globals);
              break;

            case 'img':
              txt = showdown.subParser('makeMarkdown.image')(node, globals);
              break;

            default:
              txt = node.outerHTML + '\n\n';
          } // common normalization
          // TODO eventually


          return txt;
        });
        showdown.subParser('makeMarkdown.paragraph', function (node, globals) {
          'use strict';

          var txt = '';

          if (node.hasChildNodes()) {
            var children = node.childNodes,
                childrenLength = children.length;

            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
            }
          } // some text normalization


          txt = txt.trim();
          return txt;
        });
        showdown.subParser('makeMarkdown.pre', function (node, globals) {
          'use strict';

          var num = node.getAttribute('prenum');
          return '<pre>' + globals.preList[num] + '</pre>';
        });
        showdown.subParser('makeMarkdown.strikethrough', function (node, globals) {
          'use strict';

          var txt = '';

          if (node.hasChildNodes()) {
            txt += '~~';
            var children = node.childNodes,
                childrenLength = children.length;

            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
            }

            txt += '~~';
          }

          return txt;
        });
        showdown.subParser('makeMarkdown.strong', function (node, globals) {
          'use strict';

          var txt = '';

          if (node.hasChildNodes()) {
            txt += '**';
            var children = node.childNodes,
                childrenLength = children.length;

            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
            }

            txt += '**';
          }

          return txt;
        });
        showdown.subParser('makeMarkdown.table', function (node, globals) {
          'use strict';

          var txt = '',
              tableArray = [[], []],
              headings = node.querySelectorAll('thead>tr>th'),
              rows = node.querySelectorAll('tbody>tr'),
              i,
              ii;

          for (i = 0; i < headings.length; ++i) {
            var headContent = showdown.subParser('makeMarkdown.tableCell')(headings[i], globals),
                allign = '---';

            if (headings[i].hasAttribute('style')) {
              var style = headings[i].getAttribute('style').toLowerCase().replace(/\s/g, '');

              switch (style) {
                case 'text-align:left;':
                  allign = ':---';
                  break;

                case 'text-align:right;':
                  allign = '---:';
                  break;

                case 'text-align:center;':
                  allign = ':---:';
                  break;
              }
            }

            tableArray[0][i] = headContent.trim();
            tableArray[1][i] = allign;
          }

          for (i = 0; i < rows.length; ++i) {
            var r = tableArray.push([]) - 1,
                cols = rows[i].getElementsByTagName('td');

            for (ii = 0; ii < headings.length; ++ii) {
              var cellContent = ' ';

              if (typeof cols[ii] !== 'undefined') {
                cellContent = showdown.subParser('makeMarkdown.tableCell')(cols[ii], globals);
              }

              tableArray[r].push(cellContent);
            }
          }

          var cellSpacesCount = 3;

          for (i = 0; i < tableArray.length; ++i) {
            for (ii = 0; ii < tableArray[i].length; ++ii) {
              var strLen = tableArray[i][ii].length;

              if (strLen > cellSpacesCount) {
                cellSpacesCount = strLen;
              }
            }
          }

          for (i = 0; i < tableArray.length; ++i) {
            for (ii = 0; ii < tableArray[i].length; ++ii) {
              if (i === 1) {
                if (tableArray[i][ii].slice(-1) === ':') {
                  tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, '-') + ':';
                } else {
                  tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, '-');
                }
              } else {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
              }
            }

            txt += '| ' + tableArray[i].join(' | ') + ' |\n';
          }

          return txt.trim();
        });
        showdown.subParser('makeMarkdown.tableCell', function (node, globals) {
          'use strict';

          var txt = '';

          if (!node.hasChildNodes()) {
            return '';
          }

          var children = node.childNodes,
              childrenLength = children.length;

          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser('makeMarkdown.node')(children[i], globals, true);
          }

          return txt.trim();
        });
        showdown.subParser('makeMarkdown.txt', function (node) {
          'use strict';

          var txt = node.nodeValue; // multiple spaces are collapsed

          txt = txt.replace(/ +/g, ' '); // replace the custom ¨NBSP; with a space

          txt = txt.replace(/¨NBSP;/g, ' '); // ", <, > and & should replace escaped html entities

          txt = showdown.helper.unescapeHTMLEntities(txt); // escape markdown magic characters
          // emphasis, strong and strikethrough - can appear everywhere
          // we also escape pipe (|) because of tables
          // and escape ` because of code blocks and spans

          txt = txt.replace(/([*_~|`])/g, '\\$1'); // escape > because of blockquotes

          txt = txt.replace(/^(\s*)>/g, '\\$1>'); // hash character, only troublesome at the beginning of a line because of headers

          txt = txt.replace(/^#/gm, '\\#'); // horizontal rules

          txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, '$1\\$2$3'); // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer

          txt = txt.replace(/^( {0,3}\d+)\./gm, '$1\\.'); // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)

          txt = txt.replace(/^( {0,3})([+-])/gm, '$1\\$2'); // images and links, ] followed by ( is problematic, so we escape it

          txt = txt.replace(/]([\s]*)\(/g, '\\]$1\\('); // reference URIs must also be escaped

          txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, '\\[$1]:');
          return txt;
        });
        var root = this; // AMD Loader

        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            'use strict';

            return showdown;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // CommonJS/nodeJS Loader
        } else {}
      }).call(this); //# sourceMappingURL=showdown.js.map

      /***/
    },

    /***/
    "VM2T":
    /*!*********************************************************************!*\
      !*** ./src/app/di-authoring/di-authoring/di-authoring.component.ts ***!
      \*********************************************************************/

    /*! exports provided: DiAuthoringComponent */

    /***/
    function VM2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiAuthoringComponent", function () {
        return DiAuthoringComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/fade-in-transition */
      "fMDc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function DiAuthoringComponent_div_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var button_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", button_r3.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r3.name, " ");
        }
      }

      function DiAuthoringComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DI-Authoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DiAuthoringComponent_div_1_a_4_Template, 2, 2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pageButtons);
        }
      }

      var _c0 = function _c0() {
        return {
          fullScreen: "wagOutlet.isActivated === true"
        };
      };

      var DiAuthoringComponent = /*#__PURE__*/function () {
        function DiAuthoringComponent() {
          _classCallCheck2(this, DiAuthoringComponent);

          this.pageButtons = [{
            name: 'Drag/Drop Links',
            link: 'drag-drop'
          }, {
            name: 'HTML Editor',
            link: 'edit-text'
          }, {
            name: 'Text Box',
            link: 'edit-textbox'
          }, {
            name: 'Paste Links',
            link: 'paste-links'
          }];
        }

        _createClass2(DiAuthoringComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animationState"];
          }
        }]);

        return DiAuthoringComponent;
      }();

      DiAuthoringComponent.ɵfac = function DiAuthoringComponent_Factory(t) {
        return new (t || DiAuthoringComponent)();
      };

      DiAuthoringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DiAuthoringComponent,
        selectors: [["app-di-authoring"]],
        decls: 5,
        vars: 4,
        consts: [[1, "di-authoring-container"], [4, "ngIf"], [1, "routerOutlet", 3, "ngClass"], ["diAuthoring", "outlet"], [1, "pageButtons"], ["class", "link-button", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "link-button", 3, "routerLink"]],
        template: function DiAuthoringComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiAuthoringComponent_div_1_Template, 5, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.isActivated === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("@openClose", ctx.prepareRoute(_r1));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".di-authoring-container[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 10px 0px 0px 0px;\n  background-color: #ffffff;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  padding-top: 20px;\n  color: #000000;\n}\n\n.pageButtons[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  flex-direction: row;\n  \n  width: 100%;\n  justify-content: center;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  background-color: #0c2886;\n  color: white;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.fullScreen[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  min-height: 100vh;\n  min-height: -webkit-fill-available;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkaS1hdXRob3JpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQUNGIiwiZmlsZSI6ImRpLWF1dGhvcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaS1hdXRob3JpbmctY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnBhZ2VCdXR0b25zIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLyogYm9keSBpcyBzYW5zLXNlcmlmICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA0MCwgMTM0KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mdWxsU2NyZWVuIHtcclxuICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuIl19 */"],
        data: {
          animation: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiAuthoringComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-di-authoring',
            templateUrl: './di-authoring.component.html',
            styleUrls: ['./di-authoring.component.scss'],
            animations: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ye3n":
    /*!***************************************************************!*\
      !*** ./src/app/di-authoring/drag-drop/drag-drop.component.ts ***!
      \***************************************************************/

    /*! exports provided: DragDropComponent */

    /***/
    function Ye3n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropComponent", function () {
        return DragDropComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/fade-in-transition */
      "fMDc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/components/progress/progress.component */
      "1P0b");

      var _c0 = ["fileDropArea"];

      function DragDropComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-progress", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragDropComponent_div_10_Template_img_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.deleteFile(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r2 == null ? null : file_r2.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formatBytes(file_r2 == null ? null : file_r2.size), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progress", file_r2 == null ? null : file_r2.progress);
        }
      }

      var DragDropComponent = /*#__PURE__*/function () {
        function DragDropComponent() {
          _classCallCheck2(this, DragDropComponent);

          this.files = [];
        }

        _createClass2(DragDropComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleInputFiles",
          value: function handleInputFiles(event) {
            if (event.target && event.target.files) {
              console.log('Files added: ' + event.target.files);
            }

            var files = event.target.files;

            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.progress = 0;
                this.files.push(item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (this.fileDropArea) {
              this.fileDropArea.nativeElement.value = '';
            }

            this.simulateUploadingToServer(0);
          }
        }, {
          key: "simulateUploadingToServer",
          value: function simulateUploadingToServer(index) {
            var _this = this;

            setTimeout(function () {
              if (index === _this.files.length) {
                return;
              } else {
                var progressInterval = setInterval(function () {
                  if (_this.files[index].progress === 100) {
                    clearInterval(progressInterval);

                    _this.simulateUploadingToServer(index + 1);
                  } else {
                    _this.files[index].progress += 5;
                  }
                }, 200);
              }
            }, 1000);
          }
        }, {
          key: "onFileDropped",
          value: function onFileDropped(event) {
            this.handleInputFiles(event);
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(index) {
            if (this.files[index].progress < 100) {
              console.log('Upload in progress.');
              return;
            }

            this.files.splice(index, 1);
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            if (bytes === 0) {
              return '0 Bytes';
            }

            var k = 1024;
            var dm = decimals <= 0 ? 0 : decimals;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }]);

        return DragDropComponent;
      }();

      DragDropComponent.ɵfac = function DragDropComponent_Factory(t) {
        return new (t || DragDropComponent)();
      };

      DragDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DragDropComponent,
        selectors: [["app-drag-drop"]],
        viewQuery: function DragDropComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileDropArea = _t.first);
          }
        },
        decls: 11,
        vars: 1,
        consts: [["appDragDrop", "", 1, "drop-zone"], ["type", "file", "id", "fileDropArea", "multiple", "", 3, "change"], ["fileDropArea", ""], [1, "drag-drop-section"], ["src", "assets/img/outline_file_upload_black_24dp.png", "alt", "", 1, "drag-drop-image"], [1, "drag-drop-message"], ["for", "fileDropArea"], [1, "files-list"], ["class", "single-file", 4, "ngFor", "ngForOf"], [1, "single-file"], ["src", "assets/img/outline_image_black_24dp.png", "width", "45px", "alt", "file"], [1, "info"], [1, "name"], [1, "size"], [3, "progress"], ["src", "assets/img/outline_delete_black_24dp.png", "width", "20px", "alt", "file", 1, "delete", 3, "click"]],
        template: function DragDropComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DragDropComponent_Template_input_change_1_listener($event) {
              return ctx.handleInputFiles($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Drag and drop file here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Browse for file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DragDropComponent_div_10_Template, 9, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"]],
        styles: [".drop-zone[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 160px;\n  padding: 2rem;\n  border: 1px dashed #979797;\n  position: relative;\n  margin: 0 auto;\n}\n\ninput[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.drag-drop-image[_ngcontent-%COMP%] {\n  color: #242525;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: white;\n  width: 180px;\n  height: 44px;\n  border-radius: 5px;\n  background-color: #474444;\n  padding: 8px 16px;\n}\n\n.drag-drop-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 30px;\n}\n\n.drag-drop-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.drag-drop-message[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #38424c;\n  padding: 8px 0px 0px 20px;\n}\n\n.files-list[_ngcontent-%COMP%] {\n  margin-top: 1.5rem auto auto auto;\n  max-width: 100%;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border: dashed 1px #979797;\n  margin: 1rem auto 1rem auto;\n  max-width: 30%;\n  display: flex;\n  flex-grow: 1;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   img.delete[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  cursor: pointer;\n  align-self: flex-end;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #353f4a;\n  margin: 0;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #a4a4a4;\n  margin: 0;\n  margin-bottom: 0.25rem;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQVFBLGFBQUE7RUFDQSxZQUFBO0FBTEo7O0FBRkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUlOOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFETjs7QUFJSTtFQUNFLFdBQUE7QUFGTiIsImZpbGUiOiJkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC16b25lIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOTc5Nzk3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uZHJhZy1kcm9wLWltYWdlIHtcclxuICBjb2xvcjogIzI0MjUyNTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDQ0NDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxufVxyXG5cclxuLmRyYWctZHJvcC1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5kcmFnLWRyb3AtaW1hZ2Uge1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLmRyYWctZHJvcC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzM4NDI0YztcclxuICBwYWRkaW5nOiA4cHggMHB4IDBweCAyMHB4O1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtIGF1dG8gYXV0byBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICAuc2luZ2xlLWZpbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IGRhc2hlZCAxcHggIzk3OTc5NztcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvIDFyZW0gYXV0bztcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG5cclxuICAgIGltZy5kZWxldGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiAjMzUzZjRhO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpemUge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiAjYTRhNGE0O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"],
        data: {
          animation: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-drag-drop',
            templateUrl: './drag-drop.component.html',
            styleUrls: ['./drag-drop.component.scss'],
            animations: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
          }]
        }], function () {
          return [];
        }, {
          fileDropArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileDropArea', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "Zyi1":
    /*!*********************************************************************!*\
      !*** ./src/app/di-authoring/edit-textbox/edit-textbox.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EditTextboxComponent */

    /***/
    function Zyi1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTextboxComponent", function () {
        return EditTextboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/fade-in-transition */
      "fMDc");
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! devextreme-angular */
      "384S");

      var EditTextboxComponent = /*#__PURE__*/function () {
        function EditTextboxComponent() {
          _classCallCheck2(this, EditTextboxComponent);

          this.valueForEditableTextArea = '';
          this.valueForTextBox = '';
        }

        _createClass2(EditTextboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateTextArea",
          value: function updateTextArea(event) {
            console.log('Updated Value: ' + event);
            return event;
          }
        }]);

        return EditTextboxComponent;
      }();

      EditTextboxComponent.ɵfac = function EditTextboxComponent_Factory(t) {
        return new (t || EditTextboxComponent)();
      };

      EditTextboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditTextboxComponent,
        selectors: [["app-edit-textbox"]],
        decls: 9,
        vars: 4,
        consts: [[1, "edit-text-container"], [1, "subtitle"], [3, "height", "width", "value", "valueChange"], [3, "value", "valueChange"]],
        template: function EditTextboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Text Controls");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Text Area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dx-text-area", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditTextboxComponent_Template_dx_text_area_valueChange_5_listener($event) {
              return ctx.valueForEditableTextArea = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Text Box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "dx-text-box", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditTextboxComponent_Template_dx_text_box_valueChange_8_listener($event) {
              return ctx.valueForTextBox = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 90)("width", 300)("value", ctx.valueForEditableTextArea);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.valueForTextBox);
          }
        },
        directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTextAreaComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTextBoxComponent"]],
        styles: [".edit-text-container[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  align-items: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  padding-top: 20px;\n  color: #000000;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: left;\n  padding-top: 20px;\n  color: #000000;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0LXRleHRib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6ImVkaXQtdGV4dGJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LXRleHQtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */"],
        data: {
          animation: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTextboxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-textbox',
            templateUrl: './edit-textbox.component.html',
            styleUrls: ['./edit-textbox.component.scss'],
            animations: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ezpe":
    /*!*****************************************************!*\
      !*** ./src/app/di-authoring/di-authoring.module.ts ***!
      \*****************************************************/

    /*! exports provided: DiAuthoringModule */

    /***/
    function ezpe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiAuthoringModule", function () {
        return DiAuthoringModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-text/edit-text.component */
      "/9qy");
      /* harmony import */


      var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./drag-drop/drag-drop.component */
      "Ye3n");
      /* harmony import */


      var _di_authoring_di_authoring_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./di-authoring/di-authoring.component */
      "VM2T");
      /* harmony import */


      var _di_authoring_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./di-authoring-routing.module */
      "7LjP");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _edit_textbox_edit_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-textbox/edit-textbox.component */
      "Zyi1");
      /* harmony import */


      var _paste_links_paste_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./paste-links/paste-links.component */
      "2dQI");

      var DiAuthoringModule = function DiAuthoringModule() {
        _classCallCheck2(this, DiAuthoringModule);
      };

      DiAuthoringModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DiAuthoringModule
      });
      DiAuthoringModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DiAuthoringModule_Factory(t) {
          return new (t || DiAuthoringModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _di_authoring_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiAuthoringRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiAuthoringModule, {
          declarations: [_edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_2__["EditTextComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__["DragDropComponent"], _di_authoring_di_authoring_component__WEBPACK_IMPORTED_MODULE_4__["DiAuthoringComponent"], _edit_textbox_edit_textbox_component__WEBPACK_IMPORTED_MODULE_7__["EditTextboxComponent"], _paste_links_paste_links_component__WEBPACK_IMPORTED_MODULE_8__["PasteLinksComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _di_authoring_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiAuthoringRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiAuthoringModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_edit_text_edit_text_component__WEBPACK_IMPORTED_MODULE_2__["EditTextComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__["DragDropComponent"], _di_authoring_di_authoring_component__WEBPACK_IMPORTED_MODULE_4__["DiAuthoringComponent"], _edit_textbox_edit_textbox_component__WEBPACK_IMPORTED_MODULE_7__["EditTextboxComponent"], _paste_links_paste_links_component__WEBPACK_IMPORTED_MODULE_8__["PasteLinksComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _di_authoring_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiAuthoringRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "i69e":
    /*!**************************************************!*\
      !*** ./node_modules/turndown/lib/turndown.es.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function i69e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function extend(destination) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (source.hasOwnProperty(key)) destination[key] = source[key];
          }
        }

        return destination;
      }

      function repeat(character, count) {
        return Array(count + 1).join(character);
      }

      var blockElements = ['address', 'article', 'aside', 'audio', 'blockquote', 'body', 'canvas', 'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav', 'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'];

      function isBlock(node) {
        return blockElements.indexOf(node.nodeName.toLowerCase()) !== -1;
      }

      var voidElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

      function isVoid(node) {
        return voidElements.indexOf(node.nodeName.toLowerCase()) !== -1;
      }

      var voidSelector = voidElements.join();

      function hasVoid(node) {
        return node.querySelector && node.querySelector(voidSelector);
      }

      var rules = {};
      rules.paragraph = {
        filter: 'p',
        replacement: function replacement(content) {
          return '\n\n' + content + '\n\n';
        }
      };
      rules.lineBreak = {
        filter: 'br',
        replacement: function replacement(content, node, options) {
          return options.br + '\n';
        }
      };
      rules.heading = {
        filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        replacement: function replacement(content, node, options) {
          var hLevel = Number(node.nodeName.charAt(1));

          if (options.headingStyle === 'setext' && hLevel < 3) {
            var underline = repeat(hLevel === 1 ? '=' : '-', content.length);
            return '\n\n' + content + '\n' + underline + '\n\n';
          } else {
            return '\n\n' + repeat('#', hLevel) + ' ' + content + '\n\n';
          }
        }
      };
      rules.blockquote = {
        filter: 'blockquote',
        replacement: function replacement(content) {
          content = content.replace(/^\n+|\n+$/g, '');
          content = content.replace(/^/gm, '> ');
          return '\n\n' + content + '\n\n';
        }
      };
      rules.list = {
        filter: ['ul', 'ol'],
        replacement: function replacement(content, node) {
          var parent = node.parentNode;

          if (parent.nodeName === 'LI' && parent.lastElementChild === node) {
            return '\n' + content;
          } else {
            return '\n\n' + content + '\n\n';
          }
        }
      };
      rules.listItem = {
        filter: 'li',
        replacement: function replacement(content, node, options) {
          content = content.replace(/^\n+/, '') // remove leading newlines
          .replace(/\n+$/, '\n') // replace trailing newlines with just a single one
          .replace(/\n/gm, '\n    '); // indent

          var prefix = options.bulletListMarker + '   ';
          var parent = node.parentNode;

          if (parent.nodeName === 'OL') {
            var start = parent.getAttribute('start');
            var index = Array.prototype.indexOf.call(parent.children, node);
            prefix = (start ? Number(start) + index : index + 1) + '.  ';
          }

          return prefix + content + (node.nextSibling && !/\n$/.test(content) ? '\n' : '');
        }
      };
      rules.indentedCodeBlock = {
        filter: function filter(node, options) {
          return options.codeBlockStyle === 'indented' && node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE';
        },
        replacement: function replacement(content, node, options) {
          return '\n\n    ' + node.firstChild.textContent.replace(/\n/g, '\n    ') + '\n\n';
        }
      };
      rules.fencedCodeBlock = {
        filter: function filter(node, options) {
          return options.codeBlockStyle === 'fenced' && node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE';
        },
        replacement: function replacement(content, node, options) {
          var className = node.firstChild.className || '';
          var language = (className.match(/language-(\S+)/) || [null, ''])[1];
          var code = node.firstChild.textContent;
          var fenceChar = options.fence.charAt(0);
          var fenceSize = 3;
          var fenceInCodeRegex = new RegExp('^' + fenceChar + '{3,}', 'gm');
          var match;

          while (match = fenceInCodeRegex.exec(code)) {
            if (match[0].length >= fenceSize) {
              fenceSize = match[0].length + 1;
            }
          }

          var fence = repeat(fenceChar, fenceSize);
          return '\n\n' + fence + language + '\n' + code.replace(/\n$/, '') + '\n' + fence + '\n\n';
        }
      };
      rules.horizontalRule = {
        filter: 'hr',
        replacement: function replacement(content, node, options) {
          return '\n\n' + options.hr + '\n\n';
        }
      };
      rules.inlineLink = {
        filter: function filter(node, options) {
          return options.linkStyle === 'inlined' && node.nodeName === 'A' && node.getAttribute('href');
        },
        replacement: function replacement(content, node) {
          var href = node.getAttribute('href');
          var title = node.title ? ' "' + node.title + '"' : '';
          return '[' + content + '](' + href + title + ')';
        }
      };
      rules.referenceLink = {
        filter: function filter(node, options) {
          return options.linkStyle === 'referenced' && node.nodeName === 'A' && node.getAttribute('href');
        },
        replacement: function replacement(content, node, options) {
          var href = node.getAttribute('href');
          var title = node.title ? ' "' + node.title + '"' : '';
          var replacement;
          var reference;

          switch (options.linkReferenceStyle) {
            case 'collapsed':
              replacement = '[' + content + '][]';
              reference = '[' + content + ']: ' + href + title;
              break;

            case 'shortcut':
              replacement = '[' + content + ']';
              reference = '[' + content + ']: ' + href + title;
              break;

            default:
              var id = this.references.length + 1;
              replacement = '[' + content + '][' + id + ']';
              reference = '[' + id + ']: ' + href + title;
          }

          this.references.push(reference);
          return replacement;
        },
        references: [],
        append: function append(options) {
          var references = '';

          if (this.references.length) {
            references = '\n\n' + this.references.join('\n') + '\n\n';
            this.references = []; // Reset references
          }

          return references;
        }
      };
      rules.emphasis = {
        filter: ['em', 'i'],
        replacement: function replacement(content, node, options) {
          if (!content.trim()) return '';
          return options.emDelimiter + content + options.emDelimiter;
        }
      };
      rules.strong = {
        filter: ['strong', 'b'],
        replacement: function replacement(content, node, options) {
          if (!content.trim()) return '';
          return options.strongDelimiter + content + options.strongDelimiter;
        }
      };
      rules.code = {
        filter: function filter(node) {
          var hasSiblings = node.previousSibling || node.nextSibling;
          var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;
          return node.nodeName === 'CODE' && !isCodeBlock;
        },
        replacement: function replacement(content) {
          if (!content.trim()) return '';
          var delimiter = '`';
          var leadingSpace = '';
          var trailingSpace = '';
          var matches = content.match(/`+/gm);

          if (matches) {
            if (/^`/.test(content)) leadingSpace = ' ';
            if (/`$/.test(content)) trailingSpace = ' ';

            while (matches.indexOf(delimiter) !== -1) {
              delimiter = delimiter + '`';
            }
          }

          return delimiter + leadingSpace + content + trailingSpace + delimiter;
        }
      };
      rules.image = {
        filter: 'img',
        replacement: function replacement(content, node) {
          var alt = node.alt || '';
          var src = node.getAttribute('src') || '';
          var title = node.title || '';
          var titlePart = title ? ' "' + title + '"' : '';
          return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : '';
        }
      };
      /**
       * Manages a collection of rules used to convert HTML to Markdown
       */

      function Rules(options) {
        this.options = options;
        this._keep = [];
        this._remove = [];
        this.blankRule = {
          replacement: options.blankReplacement
        };
        this.keepReplacement = options.keepReplacement;
        this.defaultRule = {
          replacement: options.defaultReplacement
        };
        this.array = [];

        for (var key in options.rules) {
          this.array.push(options.rules[key]);
        }
      }

      Rules.prototype = {
        add: function add(key, rule) {
          this.array.unshift(rule);
        },
        keep: function keep(filter) {
          this._keep.unshift({
            filter: filter,
            replacement: this.keepReplacement
          });
        },
        remove: function remove(filter) {
          this._remove.unshift({
            filter: filter,
            replacement: function replacement() {
              return '';
            }
          });
        },
        forNode: function forNode(node) {
          if (node.isBlank) return this.blankRule;
          var rule;
          if (rule = findRule(this.array, node, this.options)) return rule;
          if (rule = findRule(this._keep, node, this.options)) return rule;
          if (rule = findRule(this._remove, node, this.options)) return rule;
          return this.defaultRule;
        },
        forEach: function forEach(fn) {
          for (var i = 0; i < this.array.length; i++) {
            fn(this.array[i], i);
          }
        }
      };

      function findRule(rules, node, options) {
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i];
          if (filterValue(rule, node, options)) return rule;
        }

        return void 0;
      }

      function filterValue(rule, node, options) {
        var filter = rule.filter;

        if (typeof filter === 'string') {
          if (filter === node.nodeName.toLowerCase()) return true;
        } else if (Array.isArray(filter)) {
          if (filter.indexOf(node.nodeName.toLowerCase()) > -1) return true;
        } else if (typeof filter === 'function') {
          if (filter.call(rule, node, options)) return true;
        } else {
          throw new TypeError('`filter` needs to be a string, array, or function');
        }
      }
      /**
       * The collapseWhitespace function is adapted from collapse-whitespace
       * by Luc Thevenard.
       *
       * The MIT License (MIT)
       *
       * Copyright (c) 2014 Luc Thevenard <lucthevenard@gmail.com>
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * collapseWhitespace(options) removes extraneous whitespace from an the given element.
       *
       * @param {Object} options
       */


      function collapseWhitespace(options) {
        var element = options.element;
        var isBlock = options.isBlock;
        var isVoid = options.isVoid;

        var isPre = options.isPre || function (node) {
          return node.nodeName === 'PRE';
        };

        if (!element.firstChild || isPre(element)) return;
        var prevText = null;
        var prevVoid = false;
        var prev = null;
        var node = next(prev, element, isPre);

        while (node !== element) {
          if (node.nodeType === 3 || node.nodeType === 4) {
            // Node.TEXT_NODE or Node.CDATA_SECTION_NODE
            var text = node.data.replace(/[ \r\n\t]+/g, ' ');

            if ((!prevText || / $/.test(prevText.data)) && !prevVoid && text[0] === ' ') {
              text = text.substr(1);
            } // `text` might be empty at this point.


            if (!text) {
              node = remove(node);
              continue;
            }

            node.data = text;
            prevText = node;
          } else if (node.nodeType === 1) {
            // Node.ELEMENT_NODE
            if (isBlock(node) || node.nodeName === 'BR') {
              if (prevText) {
                prevText.data = prevText.data.replace(/ $/, '');
              }

              prevText = null;
              prevVoid = false;
            } else if (isVoid(node)) {
              // Avoid trimming space around non-block, non-BR void elements.
              prevText = null;
              prevVoid = true;
            }
          } else {
            node = remove(node);
            continue;
          }

          var nextNode = next(prev, node, isPre);
          prev = node;
          node = nextNode;
        }

        if (prevText) {
          prevText.data = prevText.data.replace(/ $/, '');

          if (!prevText.data) {
            remove(prevText);
          }
        }
      }
      /**
       * remove(node) removes the given node from the DOM and returns the
       * next node in the sequence.
       *
       * @param {Node} node
       * @return {Node} node
       */


      function remove(node) {
        var next = node.nextSibling || node.parentNode;
        node.parentNode.removeChild(node);
        return next;
      }
      /**
       * next(prev, current, isPre) returns the next node in the sequence, given the
       * current and previous nodes.
       *
       * @param {Node} prev
       * @param {Node} current
       * @param {Function} isPre
       * @return {Node}
       */


      function next(prev, current, isPre) {
        if (prev && prev.parentNode === current || isPre(current)) {
          return current.nextSibling || current.parentNode;
        }

        return current.firstChild || current.nextSibling || current.parentNode;
      }
      /*
       * Set up window for Node.js
       */


      var root = typeof window !== 'undefined' ? window : {};
      /*
       * Parsing HTML strings
       */

      function canParseHTMLNatively() {
        var Parser = root.DOMParser;
        var canParse = false; // Adapted from https://gist.github.com/1129031
        // Firefox/Opera/IE throw errors on unsupported types

        try {
          // WebKit returns null on unsupported types
          if (new Parser().parseFromString('', 'text/html')) {
            canParse = true;
          }
        } catch (e) {}

        return canParse;
      }

      function createHTMLParser() {
        var Parser = function Parser() {};

        {
          var JSDOM = __webpack_require__(
          /*! jsdom */
          4).JSDOM;

          Parser.prototype.parseFromString = function (string) {
            return new JSDOM(string).window.document;
          };
        }
        return Parser;
      }

      var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();

      function RootNode(input) {
        var root;

        if (typeof input === 'string') {
          var doc = htmlParser().parseFromString( // DOM parsers arrange elements in the <head> and <body>.
          // Wrapping in a custom element ensures elements are reliably arranged in
          // a single element.
          '<x-turndown id="turndown-root">' + input + '</x-turndown>', 'text/html');
          root = doc.getElementById('turndown-root');
        } else {
          root = input.cloneNode(true);
        }

        collapseWhitespace({
          element: root,
          isBlock: isBlock,
          isVoid: isVoid
        });
        return root;
      }

      var _htmlParser;

      function htmlParser() {
        _htmlParser = _htmlParser || new HTMLParser();
        return _htmlParser;
      }

      function Node(node) {
        node.isBlock = isBlock(node);
        node.isCode = node.nodeName.toLowerCase() === 'code' || node.parentNode.isCode;
        node.isBlank = isBlank(node);
        node.flankingWhitespace = flankingWhitespace(node);
        return node;
      }

      function isBlank(node) {
        return ['A', 'TH', 'TD', 'IFRAME', 'SCRIPT', 'AUDIO', 'VIDEO'].indexOf(node.nodeName) === -1 && /^\s*$/i.test(node.textContent) && !isVoid(node) && !hasVoid(node);
      }

      function flankingWhitespace(node) {
        var leading = '';
        var trailing = '';

        if (!node.isBlock) {
          var hasLeading = /^\s/.test(node.textContent);
          var hasTrailing = /\s$/.test(node.textContent);
          var blankWithSpaces = node.isBlank && hasLeading && hasTrailing;

          if (hasLeading && !isFlankedByWhitespace('left', node)) {
            leading = ' ';
          }

          if (!blankWithSpaces && hasTrailing && !isFlankedByWhitespace('right', node)) {
            trailing = ' ';
          }
        }

        return {
          leading: leading,
          trailing: trailing
        };
      }

      function isFlankedByWhitespace(side, node) {
        var sibling;
        var regExp;
        var isFlanked;

        if (side === 'left') {
          sibling = node.previousSibling;
          regExp = / $/;
        } else {
          sibling = node.nextSibling;
          regExp = /^ /;
        }

        if (sibling) {
          if (sibling.nodeType === 3) {
            isFlanked = regExp.test(sibling.nodeValue);
          } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
            isFlanked = regExp.test(sibling.textContent);
          }
        }

        return isFlanked;
      }

      var reduce = Array.prototype.reduce;
      var leadingNewLinesRegExp = /^\n*/;
      var trailingNewLinesRegExp = /\n*$/;
      var escapes = [[/\\/g, '\\\\'], [/\*/g, '\\*'], [/^-/g, '\\-'], [/^\+ /g, '\\+ '], [/^(=+)/g, '\\$1'], [/^(#{1,6}) /g, '\\$1 '], [/`/g, '\\`'], [/^~~~/g, '\\~~~'], [/\[/g, '\\['], [/\]/g, '\\]'], [/^>/g, '\\>'], [/_/g, '\\_'], [/^(\d+)\. /g, '$1\\. ']];

      function TurndownService(options) {
        if (!(this instanceof TurndownService)) return new TurndownService(options);
        var defaults = {
          rules: rules,
          headingStyle: 'setext',
          hr: '* * *',
          bulletListMarker: '*',
          codeBlockStyle: 'indented',
          fence: '```',
          emDelimiter: '_',
          strongDelimiter: '**',
          linkStyle: 'inlined',
          linkReferenceStyle: 'full',
          br: '  ',
          blankReplacement: function blankReplacement(content, node) {
            return node.isBlock ? '\n\n' : '';
          },
          keepReplacement: function keepReplacement(content, node) {
            return node.isBlock ? '\n\n' + node.outerHTML + '\n\n' : node.outerHTML;
          },
          defaultReplacement: function defaultReplacement(content, node) {
            return node.isBlock ? '\n\n' + content + '\n\n' : content;
          }
        };
        this.options = extend({}, defaults, options);
        this.rules = new Rules(this.options);
      }

      TurndownService.prototype = {
        /**
         * The entry point for converting a string or DOM node to Markdown
         * @public
         * @param {String|HTMLElement} input The string or DOM node to convert
         * @returns A Markdown representation of the input
         * @type String
         */
        turndown: function turndown(input) {
          if (!canConvert(input)) {
            throw new TypeError(input + ' is not a string, or an element/document/fragment node.');
          }

          if (input === '') return '';
          var output = process.call(this, new RootNode(input));
          return postProcess.call(this, output);
        },

        /**
         * Add one or more plugins
         * @public
         * @param {Function|Array} plugin The plugin or array of plugins to add
         * @returns The Turndown instance for chaining
         * @type Object
         */
        use: function use(plugin) {
          if (Array.isArray(plugin)) {
            for (var i = 0; i < plugin.length; i++) {
              this.use(plugin[i]);
            }
          } else if (typeof plugin === 'function') {
            plugin(this);
          } else {
            throw new TypeError('plugin must be a Function or an Array of Functions');
          }

          return this;
        },

        /**
         * Adds a rule
         * @public
         * @param {String} key The unique key of the rule
         * @param {Object} rule The rule
         * @returns The Turndown instance for chaining
         * @type Object
         */
        addRule: function addRule(key, rule) {
          this.rules.add(key, rule);
          return this;
        },

        /**
         * Keep a node (as HTML) that matches the filter
         * @public
         * @param {String|Array|Function} filter The unique key of the rule
         * @returns The Turndown instance for chaining
         * @type Object
         */
        keep: function keep(filter) {
          this.rules.keep(filter);
          return this;
        },

        /**
         * Remove a node that matches the filter
         * @public
         * @param {String|Array|Function} filter The unique key of the rule
         * @returns The Turndown instance for chaining
         * @type Object
         */
        remove: function remove(filter) {
          this.rules.remove(filter);
          return this;
        },

        /**
         * Escapes Markdown syntax
         * @public
         * @param {String} string The string to escape
         * @returns A string with Markdown syntax escaped
         * @type String
         */
        escape: function escape(string) {
          return escapes.reduce(function (accumulator, escape) {
            return accumulator.replace(escape[0], escape[1]);
          }, string);
        }
      };
      /**
       * Reduces a DOM node down to its Markdown string equivalent
       * @private
       * @param {HTMLElement} parentNode The node to convert
       * @returns A Markdown representation of the node
       * @type String
       */

      function process(parentNode) {
        var self = this;
        return reduce.call(parentNode.childNodes, function (output, node) {
          node = new Node(node);
          var replacement = '';

          if (node.nodeType === 3) {
            replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
          } else if (node.nodeType === 1) {
            replacement = replacementForNode.call(self, node);
          }

          return join(output, replacement);
        }, '');
      }
      /**
       * Appends strings as each rule requires and trims the output
       * @private
       * @param {String} output The conversion output
       * @returns A trimmed version of the ouput
       * @type String
       */


      function postProcess(output) {
        var self = this;
        this.rules.forEach(function (rule) {
          if (typeof rule.append === 'function') {
            output = join(output, rule.append(self.options));
          }
        });
        return output.replace(/^[\t\r\n]+/, '').replace(/[\t\r\n\s]+$/, '');
      }
      /**
       * Converts an element node to its Markdown equivalent
       * @private
       * @param {HTMLElement} node The node to convert
       * @returns A Markdown representation of the node
       * @type String
       */


      function replacementForNode(node) {
        var rule = this.rules.forNode(node);
        var content = process.call(this, node);
        var whitespace = node.flankingWhitespace;
        if (whitespace.leading || whitespace.trailing) content = content.trim();
        return whitespace.leading + rule.replacement(content, node, this.options) + whitespace.trailing;
      }
      /**
       * Determines the new lines between the current output and the replacement
       * @private
       * @param {String} output The current conversion output
       * @param {String} replacement The string to append to the output
       * @returns The whitespace to separate the current output and the replacement
       * @type String
       */


      function separatingNewlines(output, replacement) {
        var newlines = [output.match(trailingNewLinesRegExp)[0], replacement.match(leadingNewLinesRegExp)[0]].sort();
        var maxNewlines = newlines[newlines.length - 1];
        return maxNewlines.length < 2 ? maxNewlines : '\n\n';
      }

      function join(string1, string2) {
        var separator = separatingNewlines(string1, string2); // Remove trailing/leading newlines and replace with separator

        string1 = string1.replace(trailingNewLinesRegExp, '');
        string2 = string2.replace(leadingNewLinesRegExp, '');
        return string1 + separator + string2;
      }
      /**
       * Determines whether an input can be converted
       * @private
       * @param {String|HTMLElement} input Describe this parameter
       * @returns Describe what it returns
       * @type String|Object|Array|Boolean|Number
       */


      function canConvert(input) {
        return input != null && (typeof input === 'string' || input.nodeType && (input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11));
      }
      /* harmony default export */


      __webpack_exports__["default"] = TurndownService;
      /***/
    },

    /***/
    "mgrj":
    /*!***********************************************************************!*\
      !*** ./node_modules/devextreme/ui/html_editor/converters/markdown.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function mgrj(module, exports, __webpack_require__) {
      "use strict";
      /**
       * DevExtreme (ui/html_editor/converters/markdown.js)
       * Version: 20.2.4
       * Build date: Tue Dec 01 2020
       *
       * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
       * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
       */

      exports["default"] = void 0;

      var _turndown = _interopRequireDefault(__webpack_require__(
      /*! turndown */
      "i69e"));

      var _showdown = _interopRequireDefault(__webpack_require__(
      /*! showdown */
      "M55E"));

      var _window = __webpack_require__(
      /*! ../../../core/utils/window */
      "cGv3");

      var _ui = _interopRequireDefault(__webpack_require__(
      /*! ../../widget/ui.errors */
      "D8Ap"));

      var _converterController = _interopRequireDefault(__webpack_require__(
      /*! ../converterController */
      "Oy0/"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;

          if ("value" in descriptor) {
            descriptor.writable = true;
          }

          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
          _defineProperties(Constructor.prototype, protoProps);
        }

        if (staticProps) {
          _defineProperties(Constructor, staticProps);
        }

        return Constructor;
      }

      var MarkdownConverter = function () {
        function MarkdownConverter() {
          var _this$_html2Markdown;

          _classCallCheck(this, MarkdownConverter);

          var window = (0, _window.getWindow)();
          var turndown = window && window.TurndownService || _turndown["default"];
          var showdown = window && window.showdown || _showdown["default"];

          if (!turndown) {
            throw _ui["default"].Error("E1041", "Turndown");
          }

          if (!showdown) {
            throw _ui["default"].Error("E1041", "Showdown");
          }

          this._html2Markdown = new turndown();

          if (null !== (_this$_html2Markdown = this._html2Markdown) && void 0 !== _this$_html2Markdown && _this$_html2Markdown.addRule) {
            this._html2Markdown.addRule("emptyLine", {
              filter: function filter(element) {
                return "p" === element.nodeName.toLowerCase() && "<br>" === element.innerHTML;
              },
              replacement: function replacement() {
                return "<br>";
              }
            });
          }

          this._markdown2Html = new showdown.Converter({
            simpleLineBreaks: true,
            strikethrough: true
          });
        }

        _createClass(MarkdownConverter, [{
          key: "toMarkdown",
          value: function value(htmlMarkup) {
            return this._html2Markdown.turndown(htmlMarkup || "");
          }
        }, {
          key: "toHtml",
          value: function value(markdownMarkup) {
            var markup = this._markdown2Html.makeHtml(markdownMarkup);

            if (markup) {
              markup = markup.replace(new RegExp("\\r?\\n", "g"), "");
            }

            return markup;
          }
        }]);

        return MarkdownConverter;
      }();

      _converterController["default"].addConverter("markdown", MarkdownConverter);

      var _default = MarkdownConverter;
      exports["default"] = _default;
      module.exports = exports["default"];
      /***/
    },

    /***/
    "mrSG":
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function mrSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArray", function () {
        return __spreadArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      var __createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      };

      function __exportStar(m, o) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }
      /** @deprecated */


      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }
      /** @deprecated */


      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
          to[j] = from[i];
        }

        return to;
      }

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      };

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=di-authoring-di-authoring-module-es5.js.map