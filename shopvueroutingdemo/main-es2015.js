(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\shopvueroutingdemo\src\main.ts */"zUnb");


/***/ }),

/***/ "1P0b":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/progress/progress.component.ts ***!
  \******************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProgressComponent {
    constructor() {
        this.progress = 0;
    }
    ngOnInit() { }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["app-progress"]], inputs: { progress: "progress" }, decls: 2, vars: 2, consts: [[1, "progress-cont"], [1, "progress"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.progress + "%");
    } }, styles: [".progress-cont[_ngcontent-%COMP%] {\n  height: 7px;\n  width: 100%;\n  border-radius: 4px;\n  background-color: #d0d0d0;\n  position: relative;\n}\n.progress-cont[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  background-color: #4c97cb;\n  transition: 0.5s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtY29udCB7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAucHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Yzk3Y2I7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress',
                templateUrl: './progress.component.html',
                styleUrls: ['./progress.component.scss'],
            }]
    }], function () { return []; }, { progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2NUr":
/*!***************************************!*\
  !*** ./src/app/navigation.service.ts ***!
  \***************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







class NavigationService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.backButtonEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.canGoBack = () => !this.location.isCurrentPathEqualTo('');
        this.routerEventSubscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((_) => {
            this.backButtonEnabled.next(!this.canGoBack());
        }))
            .subscribe();
    }
    goBack() {
        if (this.canGoBack()) {
            // TODO: Use browser history
            this.location.back();
            /*
            // TODO: Back to parent, trim off last path segment
            const parts = this.router.url.split('/');
            parts.pop();
            const url = parts.join('/');
            this.router.navigateByUrl(url);
            */
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.routerEventSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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

/***/ "Jl5b":
/*!*******************************************************************************!*\
  !*** ./src/app/my-shopvue/pages/my-shopvue-page/my-shopvue-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MyShopVuePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShopVuePage", function() { return MyShopVuePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app-update-dialog.service */ "UnT9");



class MyShopVuePage {
    constructor(appUpdateDialogService) {
        this.appUpdateDialogService = appUpdateDialogService;
        this.value = '';
    }
    ngOnInit() { }
    ngAfterViewChecked() { }
    updateAvailable() {
        this.appUpdateDialogService.available(undefined);
    }
    updateActivated() {
        this.appUpdateDialogService.activated(undefined);
    }
    updateUnrecoverable() {
        this.appUpdateDialogService.unrecoverable(undefined);
    }
}
MyShopVuePage.ɵfac = function MyShopVuePage_Factory(t) { return new (t || MyShopVuePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_1__["AppUpdateDialogService"])); };
MyShopVuePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyShopVuePage, selectors: [["app-my-shopvue"]], decls: 10, vars: 0, consts: [[1, "my-shopvue-container"], [1, "pageButtons"], [1, "link-button", 3, "click"]], template: function MyShopVuePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "my-shopvue works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyShopVuePage_Template_a_click_4_listener() { return ctx.updateAvailable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyShopVuePage_Template_a_click_6_listener() { return ctx.updateActivated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Update Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyShopVuePage_Template_a_click_8_listener() { return ctx.updateUnrecoverable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update Unrecoverable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".my-shopvue-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #e9ecf3;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  padding-top: 20px;\n}\n\n.textArea[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-self: center;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  align-self: center;\n  background-color: #0c2886;\n  color: white;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.pageButtons[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  flex-direction: row;\n  \n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbXktc2hvcHZ1ZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUFGIiwiZmlsZSI6Im15LXNob3B2dWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1zaG9wdnVlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0EzRDlGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2YzO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0QXJlYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluay1idXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDQwLCAxMzQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxZW0gMS41ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhZ2VCdXR0b25zIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLyogYm9keSBpcyBzYW5zLXNlcmlmICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyShopVuePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-shopvue',
                templateUrl: './my-shopvue-page.component.html',
                styleUrls: ['./my-shopvue-page.component.scss'],
            }]
    }], function () { return [{ type: src_app_core_services_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_1__["AppUpdateDialogService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pending_changes_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pending-changes.guard */ "brP6");
/* harmony import */ var _shopvue_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopvue-title.service */ "VxZl");
/* harmony import */ var _components_time_entry_time_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/time-entry/time-entry.component */ "wBb6");
/* harmony import */ var _directives_sv_time_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/sv-time-input.directive */ "PbCD");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "R6Eq");
/* harmony import */ var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/progress/progress.component */ "1P0b");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_pending_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"], _shopvue_title_service__WEBPACK_IMPORTED_MODULE_3__["ShopvueTitleService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCalendarModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCheckBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxContextMenuModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDateBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDrawerModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownButtonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFormModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxListModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadIndicatorModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadPanelModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxNumberBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxPopupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxScrollViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSwitchModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextAreaModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToastModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTooltipModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeListModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidationSummaryModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxRadioGroupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxHtmlEditorModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonGroupModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCalendarModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxContextMenuModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDateBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDrawerModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFormModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadIndicatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxNumberBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSwitchModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextAreaModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToastModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTooltipModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidationSummaryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFileUploaderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxRadioGroupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxHtmlEditorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonGroupModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"],
        _components_time_entry_time_entry_component__WEBPACK_IMPORTED_MODULE_4__["TimeEntryComponent"],
        _directives_sv_time_input_directive__WEBPACK_IMPORTED_MODULE_5__["SvTimeInputDirective"],
        _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__["ProgressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCalendarModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxContextMenuModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDateBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDrawerModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFormModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadIndicatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxNumberBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSwitchModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextAreaModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToastModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTooltipModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidationSummaryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxRadioGroupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxHtmlEditorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonGroupModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCalendarModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxContextMenuModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDateBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDrawerModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFormModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadIndicatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxNumberBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSwitchModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextAreaModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToastModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTooltipModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidationSummaryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFileUploaderModule"],
        _components_time_entry_time_entry_component__WEBPACK_IMPORTED_MODULE_4__["TimeEntryComponent"],
        _directives_sv_time_input_directive__WEBPACK_IMPORTED_MODULE_5__["SvTimeInputDirective"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxRadioGroupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxHtmlEditorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonGroupModule"],
        _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__["ProgressComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"],
                    _components_time_entry_time_entry_component__WEBPACK_IMPORTED_MODULE_4__["TimeEntryComponent"],
                    _directives_sv_time_input_directive__WEBPACK_IMPORTED_MODULE_5__["SvTimeInputDirective"],
                    _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__["ProgressComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCalendarModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCheckBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxContextMenuModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDateBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDrawerModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFormModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxListModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadIndicatorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadPanelModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxNumberBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxScrollViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSwitchModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextAreaModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToastModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTooltipModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeListModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidationSummaryModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxRadioGroupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxHtmlEditorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonGroupModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCalendarModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxCheckBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxContextMenuModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDateBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDrawerModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFormModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxListModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadIndicatorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLoadPanelModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxMenuModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxNumberBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxScrollViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxSwitchModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextAreaModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTextBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToastModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTooltipModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeListModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidationSummaryModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxValidatorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxFileUploaderModule"],
                    _components_time_entry_time_entry_component__WEBPACK_IMPORTED_MODULE_4__["TimeEntryComponent"],
                    _directives_sv_time_input_directive__WEBPACK_IMPORTED_MODULE_5__["SvTimeInputDirective"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxRadioGroupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxHtmlEditorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxToolbarModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonGroupModule"],
                    _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__["ProgressComponent"],
                ],
                providers: [_pending_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"], _shopvue_title_service__WEBPACK_IMPORTED_MODULE_3__["ShopvueTitleService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "PbCD":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sv-time-input.directive.ts ***!
  \**************************************************************/
/*! exports provided: SvTimeInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvTimeInputDirective", function() { return SvTimeInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/localization */ "XUoT");
/* harmony import */ var devextreme_localization__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_localization__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_localization_globalize_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/localization/globalize/date */ "HCrx");
/* harmony import */ var devextreme_localization_globalize_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_localization_globalize_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _services_date_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/date-utils.service */ "Tuen");






class SvTimeInputDirective {
    constructor(dateBox, dateUtils) {
        this.dateBox = dateBox;
        this.dateUtils = dateUtils;
        this.parseTime = (value, currentDate) => {
            let dateCreated = null;
            let dateStringValue = '';
            // If the current day is passed in use that to get the date portion of the datetime value
            if (currentDate && currentDate instanceof Date !== false) {
                dateStringValue = this.dateUtils.dateToString(currentDate, 'YYYY-MM-DD');
            }
            else {
                dateStringValue = this.dateUtils.dateToString(new Date(), 'YYYY-MM-DD');
            }
            const dateToTest = dateStringValue + ' ' + value;
            // Try to use the devextreme formatDate call
            dateCreated = new Date(dateToTest);
            let dateReturnedString;
            try {
                dateReturnedString = Object(devextreme_localization__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(dateCreated, 'shortTime');
            }
            catch (_a) {
                dateReturnedString = undefined;
            }
            // If the devextreme formatDate succeeds
            if (dateCreated instanceof Date !== false &&
                !isNaN(dateCreated.getTime()) &&
                dateReturnedString !== undefined) {
                return dateCreated;
            }
            else {
                // Try to parse the string to build a time value
                value = value.toLocaleLowerCase();
                const parts = value.split(/[:h]/);
                let hours = '';
                let minutes = '';
                let isPm = false;
                let hoursIntValue = 0;
                let minutesIntValue = 0;
                if (parts.length === 0) {
                    return 0;
                }
                if (parts.length >= 1) {
                    hours = parts[0];
                    if (hours.endsWith('p') || hours.endsWith('pm')) {
                        isPm = true;
                    }
                    hours = hours.replace(/[^0-9]/g, '');
                    hoursIntValue = parseInt(hours, 10);
                    if (hoursIntValue > 23) {
                        return 0;
                    }
                }
                if (parts.length > 1) {
                    if (parts[1].length > 0) {
                        minutes = parts[1];
                        if (minutes.endsWith('p') || minutes.endsWith('pm')) {
                            isPm = true;
                        }
                        minutes = minutes.replace(/[^0-9]/g, '');
                        minutesIntValue = parseInt(minutes, 10);
                        if (isNaN(minutesIntValue)) {
                            minutesIntValue = 0;
                        }
                        if (minutesIntValue > 59) {
                            return 0;
                        }
                    }
                    else {
                        minutesIntValue = 0;
                    }
                }
                if (isPm === true && hoursIntValue < 12) {
                    hoursIntValue = hoursIntValue + 12;
                }
                const timeValue = hoursIntValue.toString().padStart(2, '0') +
                    ':' +
                    minutesIntValue.toString().padStart(2, '0');
                const dateToFormat = dateStringValue + 'T' + timeValue;
                const dateToReturn = new Date(dateToFormat);
                if (dateToReturn instanceof Date && !isNaN(dateToReturn.getTime())) {
                    return dateToReturn;
                }
                else {
                    return 0;
                }
            }
        };
        this.formatDate = (value) => {
            if (value instanceof Date) {
                return Object(devextreme_localization__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value, 'shortTime');
            }
            else {
                return Object(devextreme_localization__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(value), 'shortTime');
            }
        };
        dateBox.displayFormat = {
            parser: this.parseTime,
            formatter: this.formatDate,
        };
    }
    ngOnInit() { }
    /*
    parseTime = (value: string): number | Date => {
      let dateCreated = null;
      let dateValue;
  
      // If the current day is passed in use that to get the date portion of the datetime value
      if (this.currentDate && this.currentDate instanceof Date !== false) {
        dateValue = this.getFormattedDateString(this.currentDate);
      } else {
        dateValue = this.getFormattedDateString(new Date());
      }
  
      const dateToTest = dateValue + ' ' + value;
  
      // Try to use the devextreme formatDate call
      dateCreated = new Date(dateToTest);
      const dateReturnedString = formatDate(dateCreated, 'shortTime');
  
      // If the devextreme formatDate succeeds
      if (
        dateCreated instanceof Date !== false &&
        !isNaN(dateCreated.getTime()) &&
        dateReturnedString !== undefined
      ) {
        return dateCreated;
      } else {
        // Try to parse the string to build a time value
        value.toLocaleLowerCase();
  
        const parts = value.split(/[:h]/);
  
        let hours = '';
        let minutes = '';
        let isPm = false;
  
        let hoursIntValue = 0;
        let minutesIntValue = 0;
  
        if (parts.length === 0) {
          return 0;
        }
  
        if (parts.length >= 1) {
          hours = parts[0];
  
          if (hours.endsWith('p') || hours.endsWith('pm')) {
            isPm = true;
          }
  
          hours = hours.replace(/[^0-9]/g, '');
          hoursIntValue = parseInt(hours, 10);
  
          if (hoursIntValue > 23) {
            return 0;
          }
        }
  
        if (parts.length > 1) {
          minutes = parts[1];
          if (minutes.endsWith('p') || minutes.endsWith('pm')) {
            isPm = true;
          }
  
          minutes = minutes.replace(/[^0-9]/g, '');
          minutesIntValue = parseInt(minutes, 10);
  
          if (minutesIntValue > 59) {
            return 0;
          }
        } else {
          minutesIntValue = 0;
        }
  
        if (isPm === true && hoursIntValue < 12) {
          hoursIntValue = hoursIntValue + 12;
        }
  
        let timeValue =
          hoursIntValue.toString().padStart(2, '0') +
          ':' +
          minutesIntValue.toString().padStart(2, '0');
  
        const dateToFormat = dateValue + 'T' + timeValue;
        dateCreated = new Date(dateToFormat);
      }
      return dateCreated;
    };
    */
    getFormattedDateString(date) {
        const year = date.getFullYear();
        const month = (1 + date.getMonth()).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return year + '-' + month + '-' + day;
    }
}
SvTimeInputDirective.ɵfac = function SvTimeInputDirective_Factory(t) { return new (t || SvTimeInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDateBoxComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_utils_service__WEBPACK_IMPORTED_MODULE_4__["DateUtilsService"])); };
SvTimeInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SvTimeInputDirective, selectors: [["", "svTimeInput", ""]], inputs: { currentDate: "currentDate" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvTimeInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[svTimeInput]',
            }]
    }], function () { return [{ type: devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDateBoxComponent"] }, { type: _services_date_utils_service__WEBPACK_IMPORTED_MODULE_4__["DateUtilsService"] }]; }, { currentDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "R6Eq":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConfirmComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(); };
ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["app-confirm"]], decls: 0, vars: 0, template: function ConfirmComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm',
                templateUrl: './confirm.component.html',
                styleUrls: ['./confirm.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.service */ "2NUr");
/* harmony import */ var _shopvue_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopvue-title.service */ "VxZl");
/* harmony import */ var _core_services_app_update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/app-update.service */ "luug");
/* harmony import */ var _core_components_main_menu_button_main_menu_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/main-menu-button/main-menu-button.component */ "Vnq2");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function (a0) { return [a0]; };
function AppComponent_div_7_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.hideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/" + (item_r3.link || "")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.icon);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_7_a_2_Template, 5, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
} }
class AppComponent {
    constructor(navigationService, shopvueTitleService, appUpdateService) {
        this.navigationService = navigationService;
        this.shopvueTitleService = shopvueTitleService;
        this.appUpdateService = appUpdateService;
        this.appTitle = 'ShopVueRoutingDemo';
        this.opened = false;
        this.appDatabase = 'SV_Open';
        this.menuItems = [
            {
                name: 'Home',
                link: '',
                icon: 'home',
            },
            {
                name: 'Manage Roles',
                link: 'manage-roles',
                icon: 'settings',
            },
            {
                name: 'Week At A Glance',
                link: 'week-at-a-glance',
                icon: 'today',
            },
            {
                name: 'DI Authoring',
                link: 'di-authoring',
                icon: 'article',
            },
        ];
    }
    ngOnInit() { }
    toggleMenu() {
        var _a, _b;
        if (!this.opened) {
            (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.instance.show();
        }
        else {
            (_b = this.drawer) === null || _b === void 0 ? void 0 : _b.instance.hide();
        }
    }
    navigateBack() {
        this.navigationService.goBack();
    }
    hideMenu() {
        var _a;
        (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.instance.hide();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopvue_title_service__WEBPACK_IMPORTED_MODULE_3__["ShopvueTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_app_update_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDrawerComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, decls: 9, vars: 4, consts: [[1, "container"], ["role", "banner", 1, "toolbar"], [1, "mainMenuButton", 3, "toggleMenu", "goBack"], [1, "appTitle"], [1, "spacer"], ["id", "sideNav", "template", "template", 3, "minSize", "height", "opened", "openedChange"], ["style", "min-width: 200px", "class", "sideNavTemplate", 4, "dxTemplate", "dxTemplateOf"], [1, "routerOutlet"], [1, "sideNavTemplate", 2, "min-width", "200px"], [1, "menu-items"], ["class", "function item disable-text-selection", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "function", "item", "disable-text-selection", 3, "routerLink", "click"], [1, "material-icons"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-main-menu-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleMenu", function AppComponent_Template_app_main_menu_button_toggleMenu_2_listener() { return ctx.toggleMenu(); })("goBack", function AppComponent_Template_app_main_menu_button_goBack_2_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ShopVue Routing Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "dx-drawer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function AppComponent_Template_dx_drawer_openedChange_6_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minSize", 50)("height", 250)("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "template");
    } }, directives: [_core_components_main_menu_button_main_menu_button_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuButtonComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDrawerComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__["DxTemplateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.body[_ngcontent-%COMP%] {\n  min-height: 90vh;\n  width: 100%;\n  margin: 0;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.appTitle[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 60px);\n  padding: 60px 0 0 0;\n  width: 100%;\n}\n\n.mainMenuButton[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n#sideNav[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n}\n\n.routerOutlet[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px);\n  background-color: #ffffff;\n}\n\n  #content {\n  height: 100%;\n  padding: 10px 20px;\n  min-height: calc(100vh - 60px);\n  background-color: #ffffff;\n}\n\n  .dx-drawer-panel-content {\n  background-color: #1976d2;\n  max-width: 200px;\n}\n\n.menu-items[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.menu-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  min-height: 46px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1em;\n}\n\n.menu-items[_ngcontent-%COMP%]   .function-category-header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-weight: bold;\n  color: inherit;\n}\n\n.menu-items[_ngcontent-%COMP%]   .function[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #1b4170;\n  text-decoration: none;\n}\n\n.menu-items[_ngcontent-%COMP%]   .function[_ngcontent-%COMP%]:hover {\n  background-color: #1a3d69;\n}\n\n.menu-items[_ngcontent-%COMP%]   .function[_ngcontent-%COMP%]:active {\n  background-color: #17365d;\n}\n\n.menu-items[_ngcontent-%COMP%]   .function.router-link-active[_ngcontent-%COMP%] {\n  border-right: 4px solid #f2a007;\n}\n\n.menu-items[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.menu-items[_ngcontent-%COMP%]   .disable-text-selection[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEpBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUVBOzs7Ozs7RUFNRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBQ0k7RUFDRSx5QkFBQTtBQUNOOztBQUNJO0VBQ0UseUJBQUE7QUFDTjs7QUFDSTtFQUNFLCtCQUFBO0FBQ047O0FBR0U7RUFDRSxlQUFBO0FBREo7O0FBS0U7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7QUFISiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSxcclxuICAgIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uYXBwVGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbk1lbnVCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuI3NpZGVOYXYge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxufVxyXG5cclxuLnJvdXRlck91dGxldCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAjY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5keC1kcmF3ZXItcGFuZWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubWVudS1pdGVtcyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICB9XHJcbiAgLmZ1bmN0aW9uLWNhdGVnb3J5LWhlYWRlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgLmZ1bmN0aW9uIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2NhbGUtY29sb3IoJGNvbG9yOiAjMWU0ODdjLCAkbGlnaHRuZXNzOiAtMTAlKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzY2FsZS1jb2xvcigkY29sb3I6ICMxZTQ4N2MsICRsaWdodG5lc3M6IC0xNSUpO1xyXG4gICAgfVxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzY2FsZS1jb2xvcigkY29sb3I6ICMxZTQ4N2MsICRsaWdodG5lc3M6IC0yNSUpO1xyXG4gICAgfVxyXG4gICAgJi5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjZjJhMDA3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuZGlzYWJsZS10ZXh0LXNlbGVjdGlvbiB7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }, { type: _shopvue_title_service__WEBPACK_IMPORTED_MODULE_3__["ShopvueTitleService"] }, { type: _core_services_app_update_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateService"] }]; }, { drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDrawerComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "Tuen":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/date-utils.service.ts ***!
  \*******************************************************/
/*! exports provided: DateUtilsService, normalizeDateProperties, stringPropertiesToDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtilsService", function() { return DateUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDateProperties", function() { return normalizeDateProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringPropertiesToDates", function() { return stringPropertiesToDates; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class DateUtilsService {
    constructor() { }
    addDays(date, days) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(date).add(days, 'day').toDate();
    }
    stringToDate(dateString, dateFormat) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(dateString, dateFormat).toDate();
    }
    dateToString(date, dateFormat) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(date).format(dateFormat);
    }
    stringToDateWithFormatArray(dateString, dateFormat) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(dateString, dateFormat, 'en', true).toDate();
    }
    stringToTimeWithFormatArray(dateString, timeFormat) {
        console.log('Date String: ' + dateString);
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(dateString, timeFormat, 'en', true).toDate();
    }
    toShortDate(date) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(date).startOf('date').toDate();
    }
    getNumberOfSeconds(currentdate) {
        let startTime = new Date(currentdate);
        startTime = new Date(startTime.setHours(0, 0, 0, 0));
        const seconds = Math.floor((currentdate.getTime() - startTime.getTime()) / 1000);
        return seconds;
    }
    isDateInArray(dateValue, arrayToSearch) {
        for (const item of arrayToSearch) {
            if (dateValue.getTime() === item.getTime()) {
                return true;
            }
        }
        return false;
    }
    compareDate(date1, date2) {
        const blankDate = new Date(0);
        // trucate dates just in case
        date1 = this.toShortDate(date1);
        date2 = this.toShortDate(date2);
        if (date1.getDate() === blankDate.getDate() &&
            date2.getDate() === blankDate.getDate()) {
            return 0;
        }
        if (date1.getDate() === blankDate.getDate()) {
            return -1;
        }
        if (date2.getDate() === blankDate.getDate()) {
            return 1;
        }
        // If the values are not blank dates compare the two date objects to sort by the time
        if (date1.valueOf() === date2.valueOf()) {
            return 0;
        }
        else if (date1.valueOf() > date2.valueOf()) {
            return 1;
        }
        else {
            return -1;
        }
    }
    compareDateTime(date1, date2) {
        const blankDate = new Date(0);
        if ((date1 === undefined || date1.getDate() === blankDate.getDate()) &&
            (date2 === undefined || date2.getDate() === blankDate.getDate())) {
            return 0;
        }
        if (date1 === undefined || date1.getDate() === blankDate.getDate()) {
            return -1;
        }
        if (date2 === undefined || date2.getDate() === blankDate.getDate()) {
            return 1;
        }
        // If the values are not blank dates compare the two date objects to sort by the time
        if (date1.valueOf() === date2.valueOf()) {
            return 0;
        }
        else if (date1.valueOf() > date2.valueOf()) {
            return 1;
        }
        else {
            return -1;
        }
    }
    sameDay(date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return false;
        }
        else {
            return dayjs__WEBPACK_IMPORTED_MODULE_1__(date1).isSame(dayjs__WEBPACK_IMPORTED_MODULE_1__(date2), 'day');
        }
    }
    getMostRecentStartOfCycle(asOfDate, cycleStartDate, cycleLength) {
        if (cycleLength === 0) {
            return cycleStartDate;
        }
        const daysSinceStartOfCycle = dayjs__WEBPACK_IMPORTED_MODULE_1__(asOfDate).diff(cycleStartDate, 'day');
        const lestMultipleOfCycleLength = cycleLength * Math.floor(daysSinceStartOfCycle / cycleLength);
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(asOfDate)
            .add(lestMultipleOfCycleLength - daysSinceStartOfCycle, 'day')
            .toDate();
    }
    today() {
        let result = this.toShortDate(new Date());
        result = new Date(result.toISOString().replace('Z', ''));
        return result;
    }
    now() {
        let result = new Date();
        result = new Date(result.toISOString());
        return result;
    }
}
DateUtilsService.ɵfac = function DateUtilsService_Factory(t) { return new (t || DateUtilsService)(); };
DateUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateUtilsService, factory: DateUtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeDateProperties = (obj) => {
    for (const k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            if (obj[k] instanceof Date) {
                // TODO: Temporary hack to get a non UTC date
                // with 0 hours minutes and seconds
                const localDate = new Date(obj[k].valueOf() - obj[k].getTimezoneOffset() * 60000);
                obj[k] = localDate.toISOString().slice(0, -1);
            }
            else {
                normalizeDateProperties(obj[k]);
            }
        }
    }
    return obj;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stringPropertiesToDates = () => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((x) => {
    iso8601StringPropertiesToDate(x);
    return x;
});
const iso8601 = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iso8601StringPropertiesToDate = (obj) => {
    for (const k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            iso8601StringPropertiesToDate(obj[k]);
        }
        else if (typeof obj[k] === 'string') {
            if (iso8601.test(obj[k])) {
                obj[k] = new Date(obj[k]);
            }
        }
    }
};


/***/ }),

/***/ "UnT9":
/*!************************************************************!*\
  !*** ./src/app/core/services/app-update-dialog.service.ts ***!
  \************************************************************/
/*! exports provided: AppUpdateDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdateDialogService", function() { return AppUpdateDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/dialog */ "XF11");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class AppUpdateDialogService {
    constructor() { }
    available(event) {
        let buttons = [
            {
                text: 'Update Now',
                onClick: (e) => {
                    return true;
                },
            },
        ];
        let updateAvailableDialog = Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__["custom"])({
            title: 'Update Detected',
            messageHtml: 'An update is available and will be applied in N seconds.',
            buttons,
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(updateAvailableDialog.show());
    }
    activated(event) {
        let buttons = [
            {
                text: 'OK',
                onClick: (e) => {
                    return true;
                },
            },
        ];
        let updateActivatedDialog = Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__["custom"])({
            title: 'Update Completed',
            // TODO: Add 'You have been updated to the version XYZ.'
            messageHtml: 'You have been updated to the current version.',
            buttons,
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(updateActivatedDialog.show());
    }
    unrecoverable(event) {
        let buttons = [
            {
                text: 'OK',
                onClick: (e) => {
                    return true;
                },
            },
        ];
        let updateUnrecoverableDialog = Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__["custom"])({
            title: 'Automatic Update Incomplete',
            messageHtml: 'The automatic update was unable to complete on its own.<br/>Please do a Refresh in the browser to complete the update.',
            buttons,
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(updateUnrecoverableDialog.show());
    }
}
AppUpdateDialogService.ɵfac = function AppUpdateDialogService_Factory(t) { return new (t || AppUpdateDialogService)(); };
AppUpdateDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppUpdateDialogService, factory: AppUpdateDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUpdateDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Vnq2":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/main-menu-button/main-menu-button.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainMenuButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuButtonComponent", function() { return MainMenuButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/navigation.service */ "2NUr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









class MainMenuButtonComponent {
    constructor(router, navigationService) {
        this.router = router;
        this.navigationService = navigationService;
        this.toggleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // TODO: Put this in navigation service
        this.routerEventSubscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((_) => {
            if (this.backButton) {
                this.backButton.disabled = !this.navigationService.canGoBack();
            }
        }))
            .subscribe();
    }
    ngOnDestroy() {
        var _a;
        (_a = this.routerEventSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
MainMenuButtonComponent.ɵfac = function MainMenuButtonComponent_Factory(t) { return new (t || MainMenuButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"])); };
MainMenuButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuButtonComponent, selectors: [["app-main-menu-button"]], viewQuery: function MainMenuButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxButtonComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.backButton = _t.first);
    } }, outputs: { toggleMenu: "toggleMenu", goBack: "goBack" }, decls: 4, vars: 3, consts: [[1, "menuButtonContainer"], ["id", "backButton", "type", "default", "icon", "arrowleft", "text", "", 3, "onClick"], ["id", "menuButton", "type", "default", "icon", "menu", 3, "text", "onClick"]], template: function MainMenuButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MainMenuButtonComponent_Template_dx_button_onClick_1_listener() { return ctx.goBack.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MainMenuButtonComponent_Template_dx_button_onClick_2_listener() { return ctx.toggleMenu.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "Menu"));
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: [".menuButtonContainer[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: row;\n}\n\n#backButton[_ngcontent-%COMP%] {\n  border-right: 2px solid #1e487c;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  width: 50px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n\n#backButton[_ngcontent-%COMP%]     .dx-icon {\n  font-size: 22px;\n}\n\n#menuButton[_ngcontent-%COMP%] {\n  border-left: 1px solid #1e487c;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1tZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0FBQ0o7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBQUYiLCJmaWxlIjoibWFpbi1tZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51QnV0dG9uQ29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNiYWNrQnV0dG9uIHtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMWU0ODdjO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG5cclxuICA6Om5nLWRlZXAgLmR4LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuI21lbnVCdXR0b24ge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzFlNDg3YztcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-menu-button',
                templateUrl: './main-menu-button.component.html',
                styleUrls: ['./main-menu-button.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] }]; }, { toggleMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], goBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], backButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxButtonComponent"]]
        }] }); })();


/***/ }),

/***/ "VxZl":
/*!******************************************!*\
  !*** ./src/app/shopvue-title.service.ts ***!
  \******************************************/
/*! exports provided: ShopvueTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopvueTitleService", function() { return ShopvueTitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






class ShopvueTitleService {
    constructor(titleService, router, activatedRoute) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appDatabase = 'SV_Open';
        this.appTitle = 'ShopVueRoutingDemo';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            let child = this.activatedRoute.firstChild;
            while (child === null || child === void 0 ? void 0 : child.firstChild) {
                child = child.firstChild;
            }
            if (child === null || child === void 0 ? void 0 : child.snapshot.data['pageTitle']) {
                return this.appDatabase + ' | ' + child.snapshot.data['pageTitle'];
            }
            return this.appDatabase + ' | ' + this.appTitle;
        }))
            .subscribe((title) => {
            this.titleService.setTitle(title);
        });
    }
}
ShopvueTitleService.ɵfac = function ShopvueTitleService_Factory(t) { return new (t || ShopvueTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ShopvueTitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShopvueTitleService, factory: ShopvueTitleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopvueTitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pending_changes_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pending-changes.guard */ "brP6");
/* harmony import */ var _confirmDialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirmDialog.service */ "tWqY");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _core_services_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/services/app-update-dialog.service */ "UnT9");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./drag-drop.directive */ "l/Jr");


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _pending_changes_guard__WEBPACK_IMPORTED_MODULE_8__["PendingChangesGuard"],
        _confirmDialog_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogService"],
        _core_services_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_12__["AppUpdateDialogService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _drag_drop_directive__WEBPACK_IMPORTED_MODULE_15__["DragDropDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"]], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _drag_drop_directive__WEBPACK_IMPORTED_MODULE_15__["DragDropDirective"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production,
                        // Register the ServiceWorker as soon as the app is stable
                        // or after 30 seconds (whichever comes first).
                        registrationStrategy: 'registerWhenStable:30000',
                    }),
                ],
                exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
                providers: [
                    _pending_changes_guard__WEBPACK_IMPORTED_MODULE_8__["PendingChangesGuard"],
                    _confirmDialog_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogService"],
                    _core_services_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_12__["AppUpdateDialogService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "brP6":
/*!******************************************!*\
  !*** ./src/app/pending-changes.guard.ts ***!
  \******************************************/
/*! exports provided: PendingChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingChangesGuard", function() { return PendingChangesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PendingChangesGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
PendingChangesGuard.ɵfac = function PendingChangesGuard_Factory(t) { return new (t || PendingChangesGuard)(); };
PendingChangesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PendingChangesGuard, factory: PendingChangesGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingChangesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "l/Jr":
/*!****************************************!*\
  !*** ./src/app/drag-drop.directive.ts ***!
  \****************************************/
/*! exports provided: DragDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirective", function() { return DragDropDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DragDropDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = true;
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            console.log('Dropped ${files.length} files');
            this.fileDropped.emit(files);
        }
    }
}
DragDropDirective.ɵfac = function DragDropDirective_Factory(t) { return new (t || DragDropDirective)(); };
DragDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDropDirective, selectors: [["", "appDragDrop", ""]], hostBindings: function DragDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, outputs: { fileDropped: "fileDropped" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDragDrop]',
            }]
    }], function () { return []; }, { fileDropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ }),

/***/ "luug":
/*!*****************************************************!*\
  !*** ./src/app/core/services/app-update.service.ts ***!
  \*****************************************************/
/*! exports provided: AppUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdateService", function() { return AppUpdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _app_update_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-update-dialog.service */ "UnT9");






class AppUpdateService {
    constructor(appRef, updates, appUpdateDialogService) {
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // Only if service worker is available
        if (updates.isEnabled) {
            // Poll for updates
            const appIsStable$ = appRef.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])((isStable) => isStable === true));
            // TODO: 10 seconds for debugging, make this configurable?
            const updateCheckInterval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(10 * 1000);
            const updateCheckIntervalOnceAppIsStable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(appIsStable$, updateCheckInterval$);
            this.subscriptions.add(updateCheckIntervalOnceAppIsStable$.subscribe(() => updates.checkForUpdate()));
            // Inform user about available update
            this.subscriptions.add(updates.available
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((event) => appUpdateDialogService.available(event)))
                .subscribe((value) => {
                if (value)
                    updates.activateUpdate();
            }));
            // Inform user that update was applied
            this.subscriptions.add(updates.activated
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((event) => appUpdateDialogService.activated(event)))
                .subscribe(
            // Reload page here.
            // If we do it in upates.available, the activated dialog won't show.
            (e) => document.location.reload()));
            // Inform user that the update is unrecoverable and the page needs to be reloaded.
            // TODO: Can we just reload the page programatically?
            // Hard to test this one!
            this.subscriptions.add(updates.unrecoverable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((event) => appUpdateDialogService.unrecoverable(event)))
                .subscribe());
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AppUpdateService.ɵfac = function AppUpdateService_Factory(t) { return new (t || AppUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_update_dialog_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateDialogService"])); };
AppUpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppUpdateService, factory: AppUpdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] }, { type: _app_update_dialog_service__WEBPACK_IMPORTED_MODULE_4__["AppUpdateDialogService"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_main_menu_button_main_menu_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-menu-button/main-menu-button.component */ "Vnq2");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");





class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_main_menu_button_main_menu_button_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_components_main_menu_button_main_menu_button_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_main_menu_button_main_menu_button_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuButtonComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                exports: [_components_main_menu_button_main_menu_button_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuButtonComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "tWqY":
/*!******************************************!*\
  !*** ./src/app/confirmDialog.service.ts ***!
  \******************************************/
/*! exports provided: ConfirmDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/dialog */ "XF11");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class ConfirmDialogService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    confirm(message, title, showOkButton = true) {
        let buttons = [
            {
                text: 'Cancel',
                onClick: (e) => {
                    console.log('Returning false');
                    return false;
                },
            },
        ];
        if (showOkButton) {
            buttons.push({
                text: 'OK',
                onClick: (e) => {
                    console.log('Returning true');
                    return true;
                },
            });
        }
        let saveChangesDialog = Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__["custom"])({
            title: title || 'Unsaved Changes',
            messageHtml: message ||
                'Press Cancel to go back and save these changes, or OK to lose these changes.',
            buttons,
        });
        const saveChangesObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(saveChangesDialog.show());
        saveChangesObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe((value) => {
            var _a, _b;
            if (value === false) {
                const trigger = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.trigger;
                // The trigger can be 'popstate' or 'imperative' depending on what the user is pressing
                // to start the navigation.  Popstate will be retured when the browser location is changed, through the back
                // button, refresh or close.  If 'popstate' is called we need to go back to the current location to restore
                // it to the history.  If the navigation is done through a router.navigate call the router will return a
                // trigger type of'imperative' and the location is still in the history
                if (trigger === 'popstate') {
                    this.location.go(this.router.url);
                }
            }
        });
        return saveChangesObs;
    }
}
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ConfirmDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_shopvue_pages_my_shopvue_page_my_shopvue_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-shopvue/pages/my-shopvue-page/my-shopvue-page.component */ "Jl5b");





const routes = [
    {
        path: '',
        component: _my_shopvue_pages_my_shopvue_page_my_shopvue_page_component__WEBPACK_IMPORTED_MODULE_2__["MyShopVuePage"],
        data: { pageTitle: 'My Shopvue' },
    },
    {
        path: 'week-at-a-glance',
        loadChildren: () => Promise.all(/*! import() | week-at-a-glance-week-at-a-glance-module */[__webpack_require__.e("common"), __webpack_require__.e("week-at-a-glance-week-at-a-glance-module")]).then(__webpack_require__.bind(null, /*! ./week-at-a-glance/week-at-a-glance.module */ "N/SL")).then((m) => m.WeekAtAGlanceModule),
    },
    {
        path: 'manage-roles',
        loadChildren: () => Promise.all(/*! import() | manage-roles-manage-roles-module */[__webpack_require__.e("common"), __webpack_require__.e("manage-roles-manage-roles-module")]).then(__webpack_require__.bind(null, /*! ./manage-roles/manage-roles.module */ "v/Nc")).then((m) => m.ManageRolesModule),
    },
    {
        path: 'di-authoring',
        loadChildren: () => Promise.all(/*! import() | di-authoring-di-authoring-module */[__webpack_require__.e("common"), __webpack_require__.e("di-authoring-di-authoring-module")]).then(__webpack_require__.bind(null, /*! ./di-authoring/di-authoring.module */ "ezpe")).then((m) => m.DiAuthoringModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wBb6":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/time-entry/time-entry.component.ts ***!
  \**********************************************************************/
/*! exports provided: TimeEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeEntryComponent", function() { return TimeEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _directives_sv_time_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/sv-time-input.directive */ "PbCD");




class TimeEntryComponent {
    constructor() {
        this.selectedTime = new Date();
        this.controlType = '';
    }
    ngOnInit() { }
    setTime(event) {
        console.log('Event: ' + event);
        if (event == null || !(event instanceof Date)) {
            return;
        }
        const dateFromCalendarEvent = new Date(event);
        console.log(dateFromCalendarEvent);
        this.selectedTime = dateFromCalendarEvent;
    }
}
TimeEntryComponent.ɵfac = function TimeEntryComponent_Factory(t) { return new (t || TimeEntryComponent)(); };
TimeEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeEntryComponent, selectors: [["app-time-entry"]], inputs: { controlType: "controlType", currentDate: "currentDate" }, decls: 1, vars: 6, consts: [["svTimeInput", "", "invalidDateMessage", "Enter a valid time", "validationMessageMode", "always", 3, "value", "type", "interval", "showClearButton", "showDropDownButton", "currentDate"]], template: function TimeEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dx-date-box", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedTime)("type", ctx.controlType)("interval", 15)("showClearButton", true)("showDropDownButton", false)("currentDate", ctx.currentDate);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDateBoxComponent"], _directives_sv_time_input_directive__WEBPACK_IMPORTED_MODULE_2__["SvTimeInputDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lLWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-time-entry',
                templateUrl: './time-entry.component.html',
                styleUrls: ['./time-entry.component.scss'],
            }]
    }], function () { return []; }, { controlType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main-es2015.js.map