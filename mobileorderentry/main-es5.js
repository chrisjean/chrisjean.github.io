(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/account.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/account.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <div class=\"account-container\">\n          <mat-card class=\"account-card\">\n      \n              <mat-card-header>\n          \n                <mat-card-title>Account Settings</mat-card-title>\n          \n              </mat-card-header>\n          \n              <mat-card-content>\n          \n                <form class=\"account-form\">\n          \n                  <table class=\"account-full-width\" cellspacing=\"0\">\n          \n                    <tr>\n          \n                      <td>\n          \n                        <mat-form-field class=\"account-full-width\">\n          \n                        <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n          \n                        </mat-form-field>\n          \n                      </td>\n          \n                    </tr>\n          \n                    <tr>\n          \n                    <td><mat-form-field class=\"account-full-width\">\n          \n                      <input matInput placeholder=\"Password\" [(ngModel)]=\"password\"type=\"password\" name=\"password\" required>\n          \n                    </mat-form-field></td>\n          \n                  </tr>\n                  <tr>\n          \n                    <td><mat-form-field class=\"account-full-width\">\n            \n                        <input matInput placeholder=\"Password Hint\" [(ngModel)]=\"passwordHint\" name=\"passwordHint\" required>\n            \n                    </mat-form-field></td>\n            \n                  </tr>\n                  <tr>\n          \n                        <td><mat-form-field class=\"account-full-width\">\n                \n                            <input matInput placeholder=\"Number if items to display\" [(ngModel)]=\"itemsToDisplay\" name=\"numberItemsToDisplay\" required>\n                \n                        </mat-form-field></td>\n                \n                      </tr>\n\n                    <tr>\n        \n                        <td> <!--<mat-form-field class=\"account-full-width\">\n                \n                            <input matInput placeholder=\"Show Images\" [(ngModel)]=\"showImages\" name=\"showIamges\" required>\n                \n                        </mat-form-field> -->\n                        <mat-slide-toggle>Show Images</mat-slide-toggle>\n                        </td>\n                \n                        </tr>\n\n\n                    </table>\n          \n                </form>\n          \n                <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n          \n              </mat-card-content>\n          \n              <mat-card-actions>\n          \n                <button mat-raised-button (click)=\"save()\" color=\"primary\">Save</button>\n          \n              </mat-card-actions>\n          \n            </mat-card>\n          </div>\n      </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/details/details.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/details/details.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\n    <div class='backgroundImage'>\n        <img class='fit' src=\"assets/splash/launch-2048x2732.jpg\">\n    </div>\n    <div class=\"messageHeader\">\n        <div class=\"message\">\n            <div class=\"messageText\">Mobile Order Entry</div>\n            <div class=\"details\">Hours: 7:00am - 6:00pm</div>\n            <div class=\"phone\">Phone: 603-893-9090</div>\n            <div class=\"website\">www.multiprocess.com</div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <mat-sidenav-container \r\n      fullscreen\r\n      [hasBackdrop]=\"mobileQuery.matches\">\r\n      <mat-sidenav #lnav\r\n        mode=\"over\" \r\n        class=\"sidenav\"\r\n        [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n        <div class=\"content\"> \r\n          <mat-list>\r\n            <mat-list-item>\r\n                <i class=\"material-icons\">\r\n                    home\r\n                    </i>\r\n            <a mat-button routerLink='/home/details' (click)=\"lnav.toggle()\">Home</a>\r\n            </mat-list-item>\r\n            <mat-list-item>\r\n                <i class=\"material-icons\">\r\n                    account_box\r\n                    </i>\r\n            <a mat-button routerLink=\"/home/account\" (click)=\"lnav.toggle()\">Account</a>\r\n            </mat-list-item>\r\n            <mat-list-item>\r\n                <i class=\"material-icons\">\r\n                    shopping_cart\r\n                    </i>\r\n              <a mat-button routerLink=\"/home/orderlist\" (click)=\"lnav.toggle()\">Orders</a>\r\n            </mat-list-item>\r\n            <mat-divider></mat-divider>\r\n            <mat-list-item>\r\n                <i class=\"material-icons\">\r\n                    power_settings_new\r\n                    </i>\r\n              <a mat-button routerLink=\"/login\" (click)=\"logout\">Logout</a>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n      </mat-sidenav>\r\n      <mat-sidenav-content class=\"sidenav-content\">\r\n        <mat-toolbar \r\n          class=\"toolbar\" \r\n          [class.app-is-mobile]=\"mobileQuery.matches\" \r\n          color=\"primary\">\r\n          <button \r\n            mat-icon-button \r\n            (click)=\"lnav.toggle()\" \r\n            *ngIf=\"mobileQuery.matches\">\r\n            <mat-icon>menu</mat-icon>\r\n          </button>\r\n          <img src=\"assets/logo/fccd_logo_2019.png\" alt=\"FoodConnex\" style=\"width:250px;height:46px;\">\r\n          <div class=\"fill-space\"></div>\r\n          <span whoami></span>\r\n        </mat-toolbar>\r\n          <mat-drawer-container class=\"sidenav-container\">\r\n            <mat-drawer \r\n              mode=\"side\" \r\n              [opened]=\"!mobileQuery.matches\">\r\n              <div class=\"content\">\r\n                <mat-list>\r\n                  <mat-list-item>\r\n                      <i class=\"material-icons\">\r\n                          home\r\n                          </i>\r\n                    <a mat-button routerLink='/home/details' >Home</a>\r\n                  </mat-list-item>\r\n                  <mat-list-item>\r\n                      <i class=\"material-icons\">\r\n                          account_box\r\n                          </i>\r\n                    <a mat-button routerLink=\"/home/account\">Account</a>\r\n                  </mat-list-item>\r\n                  <mat-list-item>\r\n                      <i class=\"material-icons\">\r\n                          shopping_cart\r\n                          </i>\r\n                    <a mat-button routerLink=\"/home/orderlist\">Orders</a>\r\n                  </mat-list-item>\r\n                  <mat-divider></mat-divider>\r\n                  <mat-list-item>\r\n                      <i class=\"material-icons\">\r\n                          power_settings_new\r\n                          </i>\r\n                    <a mat-button routerLink=\"/login\" (click)=\"logout()\">Logout</a>\r\n                  </mat-list-item>\r\n                </mat-list>\r\n              </div>\r\n            </mat-drawer>\r\n            <mat-drawer-content>\r\n                <div class=\"content\">\r\n                  <router-outlet></router-outlet>\r\n                </div>\r\n            </mat-drawer-content>\r\n          </mat-drawer-container>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/orderlist/orderlist.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/orderlist/orderlist.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tableView\">\n\n    <mat-form-field class=\"filter\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n    <table mat-table [dataSource]=\"datasource\" matSort class=\"striped\">\n  \n    \n        <ng-container matColumnDef=\"select\" class=\"select\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\">\n                <button mat-button (click)=\"openOrder()\"><i class=\"material-icons\">\n                        add_shopping_cart\n                        </i>\n                </button></td>\n        </ng-container>\n        <ng-container matColumnDef=\"orderNo\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Number</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.orderNo}}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"dateNeeded\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Date Needed</th>\n            <td mat-cell class=\"dateNeeded-cell\" *matCellDef=\"let element\">{{element.dateNeeded}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"billingName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name</th>\n            <td mat-cell  *matCellDef=\"let element\">{{element.billingName}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"customerCode\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer Code</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.customerCode}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"poNo\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>PO Number</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.poNo}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"statusCode\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n            <td mat-cell *matCellDef=\"let element\">{{element.statusCode}}</td>\n        </ng-container>\n     \n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        \n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n\n        \n\n    </table >\n    <mat-paginator [length]=\"100\"\n        [pageSize]=\"10\"\n        [pageSizeOptions]=\"[5, 10, 25, 100]\"\n        showFirstLastButtons >\n    </mat-paginator>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ios-install/ios-install.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ios-install/ios-install.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n    Install this app on your device. \r\n    <br/>Tap the share icon and then <br/><strong>Add to homescreen</strong>.\r\n    <div class=\"full-width\"><mat-icon>arrow_downward</mat-icon></div>\r\n  </div>\r\n  <button class=\"btn-close\" mat-icon-button (click)=\"close()\" aria-label=\"Close\">\r\n      <mat-icon>close</mat-icon>\r\n  </button>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"login-container\">\n    <mat-card class=\"login-card\">\n\n        <mat-card-header>\n    \n          <mat-card-title>Login</mat-card-title>\n    \n        </mat-card-header>\n    \n        <mat-card-content>\n    \n          <form class=\"login-form\">\n    \n            <table class=\"login-full-width\" cellspacing=\"0\">\n                <tr>\n    \n                    <td>\n        \n                      <mat-form-field class=\"login-full-width\">\n        \n                      <input matInput placeholder=\"Company\" [(ngModel)]=\"company\" name=\"company\" required>\n        \n                      </mat-form-field>\n        \n                    </td>\n        \n                  </tr>\n\n    \n              <tr>\n    \n                <td>\n    \n                  <mat-form-field class=\"login-full-width\">\n    \n                  <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n    \n                  </mat-form-field>\n    \n                </td>\n    \n              </tr>\n    \n              <tr>\n    \n              <td><mat-form-field class=\"login-full-width\">\n    \n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n    \n              </mat-form-field></td>\n    \n            </tr>\n            <tr>\n                <td><mat-form-field class=\"login-full-width\">\n    \n                    <input matInput placeholder=\"Developer\" [(ngModel)]=\"developer\" name=\"developer\" >\n        \n                  </mat-form-field></td>\n            </tr>\n          </table>\n    \n            \n          </form>\n    \n          <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    \n        </mat-card-content>\n    \n        <mat-card-actions>\n    \n          <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n    \n        </mat-card-actions>\n    \n      </mat-card>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            var routes = [
                { path: '', pathMatch: 'full', redirectTo: 'login' },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true } // <-- debugging purposes only)
                        )],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.active {\r\n    color: blueviolet;\r\n}\r\n.valid, .primary {\r\n    color: blue;\r\n}\r\nhtml, body { height: 100%; \r\nbackground: #e0e0e0;}\r\nbody { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\r\nform {\r\n    width: 100%;\r\n}\r\nform > * {\r\n    margin-bottom: 1.5em;\r\n    width: 100%;\r\n}\r\na {\r\n    color: blue;\r\n}\r\n.content {\r\n    padding: 0.5em;\r\n}\r\n.sidenav-content {\r\n    flex-direction: column;\r\n}\r\n.sidenav-container {\r\n    height: 90%;\r\n}\r\n.app-content {\r\n    flex: 1;\r\n    margin: 0 auto;\r\n    padding: 2em;\r\n}\r\n.cursor-pointer {\r\n    cursor: pointer;\r\n}\r\n.full-width {\r\n    width: 100%;\r\n}\r\n.active {\r\n    color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFJQSxhQUFhLFlBQVk7QUFDekIsbUJBQW1CLENBQUM7QUFDcEIsT0FBTyxTQUFTLEVBQUUsaURBQWlELEVBQUU7QUFDckU7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLE9BQU87SUFDUCxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG59XHJcbi52YWxpZCwgLnByaW1hcnkge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcblxyXG5cclxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgXHJcbmJhY2tncm91bmQ6ICNlMGUwZTA7fVxyXG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZm9ybSA+ICoge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uYXBwLWNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ios-install/ios-install.component */ "./src/app/ios-install/ios-install.component.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(changeDetectorRef, media, toast) {
                    this.toast = toast;
                    this.title = 'Mobile Order Entry';
                    this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.mobileQuery = media.matchMedia('(max-width: 600px)');
                    this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
                    this.mobileQuery.addListener(this._mobileQueryListener);
                }
                AppComponent.prototype.ngOnInit = function () {
                    // Detects if device is on iOS 
                    var isIos = function () {
                        var userAgent = window.navigator.userAgent.toLowerCase();
                        return /iphone|ipad|ipod/.test(userAgent);
                    };
                    // Detects if device is in standalone mode
                    var isInStandaloneMode = function () { return ('standalone' in window.navigator) && (window.navigator.standalone); };
                    // Checks if should display install popup notification:
                    if (isIos() && !isInStandaloneMode()) {
                        this.toast.openFromComponent(_ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_4__["IosInstallComponent"], {
                            duration: 8000,
                            horizontalPosition: 'start',
                            panelClass: ['mat-elevation-z3']
                        });
                    }
                };
                AppComponent.prototype.toggleMobileNav = function (nav) {
                    if (this.mobileQuery.matches) {
                        nav.toggle();
                    }
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AppComponent.prototype, "toggleSideNav", void 0);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ios-install/ios-install.component */ "./src/app/ios-install/ios-install.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                        _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_10__["IosInstallComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                        _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production })
                    ],
                    providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["APP_BASE_HREF"], useValue: '/' }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    entryComponents: [_ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_10__["IosInstallComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/authentication.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/authentication.service.ts ***!
          \*******************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthenticationService.prototype.login = function (username, password, company, developer) {
                    var _this = this;
                    var params = new URLSearchParams();
                    params.append('m', 'authenticate');
                    params.append('c', company);
                    params.append('u', username);
                    params.append('p', password);
                    params.append('developer', developer);
                    var parameterString = params.toString();
                    var headers = {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "cache-control": "no-cache"
                    };
                    return this.http.post("vnmarcus/md", parameterString, { headers: headers })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                        user.authdata = window.btoa(username + ':' + password);
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        localStorage.setItem('clientId', JSON.stringify(user.clientId));
                        _this.currentUserSubject.next(user);
                        return user;
                    }));
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('clientId');
                    this.currentUserSubject.next(null);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/home/account/account.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/home/account/account.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".account-card {\r\n    width: 95%;\r\n    margin: auto;\r\n    /*padding-top: 10px;*/\r\n    height: 100%;\r\n}\r\n\r\n.account-container {\r\n    /*padding-top: 20px;*/\r\n    height: 100%;\r\n}\r\n\r\n.container {\r\n    height: 100%;\r\n    width: 100%;\r\n    /*background: #e0e0e0;*/\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCOztBQUUzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1jYXJkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAvKnBhZGRpbmctdG9wOiAxMHB4OyovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hY2NvdW50LWNvbnRhaW5lciB7XHJcbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKmJhY2tncm91bmQ6ICNlMGUwZTA7Ki9cclxuICAgIFxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/account/account.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/home/account/account.component.ts ***!
          \***************************************************/
        /*! exports provided: AccountComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function () { return AccountComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AccountComponent = /** @class */ (function () {
                function AccountComponent() {
                }
                AccountComponent.prototype.ngOnInit = function () {
                };
                return AccountComponent;
            }());
            AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-account',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/account/account.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/home/account/account.component.css")).default]
                })
            ], AccountComponent);
            /***/ 
        }),
        /***/ "./src/app/home/details/details.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/home/details/details.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    position: relative;\r\n}\r\n\r\n\r\n.fit {\r\n    padding: 0;\r\n    display: block;\r\n    margin: 0 auto;\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n.backgroundImage {\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.messageHeader {\r\n    position: absolute;\r\n    padding-top:20px;\r\n    width: 100%;\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-content: center;\r\n    z-index:10;\r\n}\r\n\r\n\r\n.message {\r\n\r\n    \r\n    text-align: center;\r\n    color: #336699;\r\n    width: 30%;\r\n    background: rgba(255, 255, 255, 0.92);\r\n    padding: 10px;\r\n    align-self: center;\r\n    border-radius: 3px;\r\n    vertical-align: top;\r\n}\r\n\r\n\r\n.messageText {\r\n    font-size: 35px;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    /*top: 20%;*/\r\n    transform: translateY(20%);\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n.details {\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.phone {\r\n    font-size: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOzs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uZml0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4uYmFja2dyb3VuZEltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1lc3NhZ2VIZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDoxMDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG5cclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMzY2OTk7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ubWVzc2FnZVRleHQge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qdG9wOiAyMCU7Ki9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnBob25lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/details/details.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/home/details/details.component.ts ***!
          \***************************************************/
        /*! exports provided: DetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () { return DetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DetailsComponent = /** @class */ (function () {
                function DetailsComponent() {
                }
                DetailsComponent.prototype.ngOnInit = function () {
                };
                return DetailsComponent;
            }());
            DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/details/details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.css */ "./src/app/home/details/details.component.css")).default]
                })
            ], DetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/home/home-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderlist/orderlist.component */ "./src/app/home/orderlist/orderlist.component.ts");
            /* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "./src/app/home/account/account.component.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/home/details/details.component.ts");
            var routes = [
                {
                    path: 'home',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    children: [
                        { path: 'orderlist', component: _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_3__["OrderlistComponent"] },
                        { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"] },
                        { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] }
                    ]
                }
            ];
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.content {\r\n    padding: 0.5em;\r\n}\r\n\r\n.sidenav-content {\r\n    flex-direction: column;\r\n}\r\n\r\n.sidenav-container {\r\n    height: 90%;\r\n}\r\n\r\n.app-content {\r\n    flex: 1;\r\n    margin: 0 auto;\r\n    padding: 2em;\r\n}\r\n\r\n.cursor-pointer {\r\n    cursor: pointer;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.active {\r\n    color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxufVxyXG5cclxuLnNpZGVuYXYtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5hcHAtY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ios-install/ios-install.component */ "./src/app/ios-install/ios-install.component.ts");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(changeDetectorRef, media, toast, authenticationService) {
                    this.toast = toast;
                    this.authenticationService = authenticationService;
                    this.title = 'Mobile Order Entry';
                    this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.mobileQuery = media.matchMedia('(max-width: 600px)');
                    this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
                    this.mobileQuery.addListener(this._mobileQueryListener);
                }
                HomeComponent.prototype.ngOnInit = function () {
                    // Detects if device is on iOS 
                    var isIos = function () {
                        var userAgent = window.navigator.userAgent.toLowerCase();
                        return /iphone|ipad|ipod/.test(userAgent);
                    };
                    // Detects if device is in standalone mode
                    var isInStandaloneMode = function () { return ('standalone' in window.navigator) && (window.navigator.standalone); };
                    // Checks if should display install popup notification:
                    if (isIos() && !isInStandaloneMode()) {
                        this.toast.openFromComponent(_ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_4__["IosInstallComponent"], {
                            duration: 8000,
                            horizontalPosition: 'start',
                            panelClass: ['mat-elevation-z3']
                        });
                    }
                };
                HomeComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                };
                HomeComponent.prototype.toggleMobileNav = function (nav) {
                    if (this.mobileQuery.matches) {
                        nav.toggle();
                    }
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], HomeComponent.prototype, "toggleSideNav", void 0);
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
            /* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
            /* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/home/account/account.component.ts");
            /* harmony import */ var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderlist/orderlist.component */ "./src/app/home/orderlist/orderlist.component.ts");
            /* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details/details.component */ "./src/app/home/details/details.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /*import { OrderService } from './order.service';*/
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_6__["OrderlistComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]
                    ]
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/home/order.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/home/order.service.ts ***!
          \***************************************/
        /*! exports provided: OrderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function () { return OrderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var OrderService = /** @class */ (function () {
                function OrderService(http) {
                    this.http = http;
                }
                // "m=rpc&n=mobileShipOrderGet&v=1&type=Order&calledFrom=Mobile&searchWords="
                OrderService.prototype.getOrderList = function (cb) {
                    var params = new URLSearchParams();
                    params.append('m', 'rpc');
                    params.append('n', 'mobileShipOrderGet');
                    params.append('v', "1");
                    params.append('type', "Order");
                    params.append('calledFrom', "Mobile");
                    params.append('searchWords', "");
                    var parameterString = params.toString();
                    var headers = {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "cache-control": "no-cache",
                        observe: 'response'
                    };
                    return this.http.post("vnmarcus/md", parameterString, { headers: headers })
                        .subscribe(function (response) {
                        cb(response.outOrder);
                    });
                };
                return OrderService;
            }());
            OrderService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OrderService);
            /***/ 
        }),
        /***/ "./src/app/home/orderlist/orderlist.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/home/orderlist/orderlist.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n  \r\n.tableView {\r\n    width: 100%;\r\n}\r\n  \r\n.mat-cell {\r\n    padding: 8px 8px 8px 0;\r\n}\r\n  \r\n.filter {\r\n    width: 75%;\r\n}\r\n  \r\n.select {\r\n    max-width: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9vcmRlcmxpc3Qvb3JkZXJsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0FBRUY7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9vcmRlcmxpc3Qvb3JkZXJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbi50YWJsZVZpZXcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/orderlist/orderlist.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/home/orderlist/orderlist.component.ts ***!
          \*******************************************************/
        /*! exports provided: OrderlistComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function () { return OrderlistComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/home/order.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            var OrderlistComponent = /** @class */ (function () {
                function OrderlistComponent(orderService) {
                    this.orderService = orderService;
                    this.displayedColumns = ['select', 'orderNo', 'dateNeeded', 'billingName', 'customerCode', 'poNo', 'statusCode'];
                    //datasource = this.orderList;
                    this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
                }
                OrderlistComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.orderService.getOrderList(function (res) {
                        _this.orderList = res;
                        _this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
                        _this.datasource.paginator = _this.paginator;
                        _this.datasource.sort = _this.sort;
                    });
                    //this.datasource.paginator = this.paginator;
                    // this.orderList = this.orderService.orderListValue;
                };
                OrderlistComponent.prototype.applyFilter = function (filterValue) {
                    this.datasource.filter = filterValue.trim().toLowerCase();
                };
                OrderlistComponent.prototype.openOrder = function () {
                    console.log("User pressed open button");
                };
                return OrderlistComponent;
            }());
            OrderlistComponent.ctorParameters = function () { return [
                { type: _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], OrderlistComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
            ], OrderlistComponent.prototype, "sort", void 0);
            OrderlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-orderlist',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/orderlist/orderlist.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderlist.component.css */ "./src/app/home/orderlist/orderlist.component.css")).default]
                })
            ], OrderlistComponent);
            /***/ 
        }),
        /***/ "./src/app/ios-install/ios-install.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/ios-install/ios-install.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    opacity: 0.8;\r\n}\r\n.content {\r\n    margin: 0.5em;\r\n    text-align: center;\r\n}\r\n.full-width {\r\n    margin-top: 1em;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.link-close {\r\n    color: red;\r\n    font-variant-caps: all-petite-caps;\r\n    font-weight: bold;\r\n}\r\n.btn-close {\r\n    position: absolute;\r\n    top: 1em;\r\n    right: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW9zLWluc3RhbGwvaW9zLWluc3RhbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9pb3MtaW5zdGFsbC9pb3MtaW5zdGFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpbmstY2xvc2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtcGV0aXRlLWNhcHM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYnRuLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMWVtO1xyXG4gICAgcmlnaHQ6IDFlbTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/ios-install/ios-install.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/ios-install/ios-install.component.ts ***!
          \******************************************************/
        /*! exports provided: IosInstallComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosInstallComponent", function () { return IosInstallComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var IosInstallComponent = /** @class */ (function () {
                function IosInstallComponent(snackBarRef) {
                    this.snackBarRef = snackBarRef;
                }
                IosInstallComponent.prototype.ngOnInit = function () {
                };
                IosInstallComponent.prototype.close = function () {
                    this.snackBarRef.dismiss();
                };
                return IosInstallComponent;
            }());
            IosInstallComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"] }
            ]; };
            IosInstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ios-install',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ios-install.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ios-install/ios-install.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ios-install.component.css */ "./src/app/ios-install/ios-install.component.css")).default]
                })
            ], IosInstallComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-card {\r\n    width: 300px;\r\n    margin: auto;\r\n    padding-top: 10px;\r\n}\r\n\r\n.login-container {\r\n    padding-top: 30px;\r\n}\r\n\r\n.container {\r\n    height: 100%;\r\n    width: 100%;\r\n    background: #e0e0e0;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgIFxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, route, authenticationService) {
                    this.router = router;
                    this.route = route;
                    this.authenticationService = authenticationService;
                    this.loading = false;
                    this.submitted = false;
                    this.error = '';
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/home/details']);
                    }
                }
                LoginComponent.prototype.ngOnInit = function () {
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    //this.submitted = true;
                    // stop here if form is invalid
                    // if (this.loginForm.invalid) {
                    //    return;
                    //}
                    //this.loading = true;
                    this.authenticationService.login(this.username, this.password, this.company, this.developer)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.router.navigate(['home/details']);
                    }, function (error) {
                        _this.error = error;
                        _this.loading = false;
                    });
                };
                LoginComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    this.router.navigate(['login']);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/material/material.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/material/material.module.ts ***!
          \*********************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
            /* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    exports: [
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                    ]
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Projects\angularmobileorderentry\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map