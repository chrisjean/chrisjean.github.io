(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\grid-delete-item\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/data-grid */ "ZzPI");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");





class AppComponent {
    constructor() {
        this.title = 'grid-delete-item';
        this.absenceTypes = [
            {
                absenceTypeID: 1,
                absenceName: 'Jury Duty',
            },
            {
                absenceTypeID: 2,
                absenceName: 'Holiday',
            },
            {
                absenceTypeID: 3,
                absenceName: 'Vacation',
            },
        ];
        this.absenceDataSource = [];
    }
    createDescriptionDisplayString(item) {
        return item.absenceName;
    }
    onDelete(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const rowEvent = event;
            if (((_a = rowEvent === null || rowEvent === void 0 ? void 0 : rowEvent.row) === null || _a === void 0 ? void 0 : _a.isEditing) === true && ((_b = rowEvent === null || rowEvent === void 0 ? void 0 : rowEvent.row) === null || _b === void 0 ? void 0 : _b.isNewRow) === true) {
                console.log('Canceling the edit - this is a new row that has not been saved');
                (_c = this.dxGridComponent) === null || _c === void 0 ? void 0 : _c.instance.cancelEditData();
            }
            else {
                if (((_d = rowEvent === null || rowEvent === void 0 ? void 0 : rowEvent.row) === null || _d === void 0 ? void 0 : _d.rowIndex) != null &&
                    ((_e = rowEvent === null || rowEvent === void 0 ? void 0 : rowEvent.row) === null || _e === void 0 ? void 0 : _e.rowIndex) !== undefined) {
                    console.log('Number of rows before delete: ' + this.absenceDataSource.length);
                    const keyIndex = (_f = this.dxGridComponent) === null || _f === void 0 ? void 0 : _f.instance.getKeyByRowIndex((_g = rowEvent === null || rowEvent === void 0 ? void 0 : rowEvent.row) === null || _g === void 0 ? void 0 : _g.rowIndex);
                    (_h = this.dxGridComponent) === null || _h === void 0 ? void 0 : _h.instance.saveEditData().then(() => {
                        var _a, _b, _c, _d;
                        const rowIndex = (_a = this.dxGridComponent) === null || _a === void 0 ? void 0 : _a.instance.getRowIndexByKey(keyIndex);
                        (_b = this.dxGridComponent) === null || _b === void 0 ? void 0 : _b.instance.cancelEditData();
                        if (rowIndex !== undefined) {
                            (_c = this.dxGridComponent) === null || _c === void 0 ? void 0 : _c.instance.deleteRow(rowIndex);
                        }
                        (_d = this.dxGridComponent) === null || _d === void 0 ? void 0 : _d.instance.refresh();
                    });
                    console.log('Number of rows after delete: ' + this.absenceDataSource.length);
                }
                else {
                    console.log('No Row Index returned in event');
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dxGridComponent = _t.first);
    } }, decls: 21, vars: 28, consts: [[1, "gridContainer"], [1, "absenceGrid"], [3, "dataSource", "repaintChangesOnly", "showBorders", "showRowLines", "twoWayBindingEnabled", "wordWrapEnabled"], ["mode", "dragAndDrop", 3, "enabled"], ["mode", "standard"], ["mode", "cell", 3, "allowUpdating", "allowDeleting", "allowAdding", "useIcons", "confirmDelete"], ["dataField", "absenceTypeID", "caption", "Absence Type", 3, "width"], ["valueExpr", "absenceTypeID", 3, "dataSource", "displayExpr"], ["dataField", "time", "caption", "Time", "alignment", "left", 3, "width", "dataType", "showEditorAlways"], ["dataField", "note", "caption", "Note"], ["dxTextArea", ""], ["dataField", "hiddenColumn1", "caption", "hiddenColumn1", "dataType", "string", 3, "visible"], ["dataField", "hiddenColumn2", "caption", "hiddenColumn2", "dataType", "string", 3, "visible"], ["dataField", "hiddenColumn3", "caption", "hiddenColumn3", "dataType", "string", 3, "visible"], ["dataField", "hiddenColumn4", "caption", "hiddenColumn4", "dataType", "string", 3, "visible"], ["dataField", "hiddenColumn5", "caption", "hiddenColumn5", "dataType", "string", 3, "visible"], ["dataField", "hiddenColumn6", "caption", "hiddenColumn6", "dataType", "string", 3, "visible"], ["dataField", "hiddenColumn7", "caption", "hiddenColumn7", "dataType", "string", 3, "visible"], ["dataField", "hiddenColumn8", "caption", "hiddenColumn8", "dataType", "string", 3, "visible"], ["type", "buttons", 3, "width"], ["name", "delete", 3, "onClick"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dx-data-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "dxo-column-chooser", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "dxo-scrolling", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "dxo-editing", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "dxo-lookup", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "dxi-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "dxi-column", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "dxi-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "dxi-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "dxi-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "dxi-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "dxi-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "dxi-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "dxi-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "dxi-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.absenceDataSource)("repaintChangesOnly", true)("showBorders", true)("showRowLines", true)("twoWayBindingEnabled", false)("wordWrapEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowUpdating", true)("allowDeleting", true)("allowAdding", true)("useIcons", true)("confirmDelete", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.absenceTypes)("displayExpr", ctx.createDescriptionDisplayString);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 150)("dataType", "number")("showEditorAlways", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("onClick", ctx.onDelete.bind(ctx));
    } }, directives: [devextreme_angular_ui_data_grid__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoColumnChooserComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoScrollingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoEditingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxiColumnComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoLookupComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxiButtonComponent"]], styles: [".dx-scrollbar-hoverable .dx-scrollable-scroll.dx-state-invisible .dx-scrollable-scroll-content {\n  min-width: 40px;\n}\n\n  .dx-scrollbar-vertical .dx-scrollable-scroll {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsZUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcFxyXG4gIC5keC1zY3JvbGxiYXItaG92ZXJhYmxlXHJcbiAgLmR4LXNjcm9sbGFibGUtc2Nyb2xsLmR4LXN0YXRlLWludmlzaWJsZVxyXG4gIC5keC1zY3JvbGxhYmxlLXNjcm9sbC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtc2Nyb2xsYmFyLXZlcnRpY2FsIC5keC1zY3JvbGxhYmxlLXNjcm9sbCB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DevExtremeModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DevExtremeModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map