(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-roles-manage-roles-module"], {
    /***/
    "/d1N":
    /*!*************************************************************!*\
      !*** ./src/app/manage-roles/manage-roles-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ManageRolesRoutingModule */

    /***/
    function d1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageRolesRoutingModule", function () {
        return ManageRolesRoutingModule;
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


      var _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-roles/manage-roles.component */
      "GV0n");
      /* harmony import */


      var _pages_edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/edit-role/edit-role.component */
      "4zXG");
      /* harmony import */


      var _pages_new_role_new_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/new-role/new-role.component */
      "vZQ7");
      /* harmony import */


      var _pages_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/delete-role/delete-role.component */
      "IuY2");
      /* harmony import */


      var _pages_manage_roles_page_manage_roles_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/manage-roles-page/manage-roles-page.component */
      "5Z8V");

      var routes = [{
        path: '',
        component: _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_2__["ManageRolesComponent"],
        data: {
          animationState: 'One'
        },
        children: [{
          path: '',
          component: _pages_manage_roles_page_manage_roles_page_component__WEBPACK_IMPORTED_MODULE_6__["ManageRolesPageComponent"],
          data: {
            animationState: 'One',
            pageTitle: 'Manage Roles'
          }
        }, {
          path: 'edit-role',
          component: _pages_edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_3__["EditRoleComponent"],
          data: {
            animationState: 'Two',
            pageTitle: 'Edit Role'
          }
        }, {
          path: 'new-role',
          component: _pages_new_role_new_role_component__WEBPACK_IMPORTED_MODULE_4__["NewRoleComponent"],
          data: {
            animationState: 'Two',
            pageTitle: 'New Role'
          }
        }, {
          path: 'delete-role',
          component: _pages_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_5__["DeleteRoleComponent"],
          data: {
            animationState: 'Two',
            pageTitle: 'Delete Role'
          }
        }]
      }];

      var ManageRolesRoutingModule = function ManageRolesRoutingModule() {
        _classCallCheck(this, ManageRolesRoutingModule);
      };

      ManageRolesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ManageRolesRoutingModule
      });
      ManageRolesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ManageRolesRoutingModule_Factory(t) {
          return new (t || ManageRolesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageRolesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageRolesRoutingModule, [{
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
    "4zXG":
    /*!*********************************************************************!*\
      !*** ./src/app/manage-roles/pages/edit-role/edit-role.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EditRoleComponent */

    /***/
    function zXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function () {
        return EditRoleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EditRoleComponent = /*#__PURE__*/function () {
        function EditRoleComponent(router) {
          _classCallCheck(this, EditRoleComponent);

          this.router = router;
        }

        _createClass(EditRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }, {
          key: "openLink",
          value: function openLink(link) {
            this.router.navigate([link]);
          }
        }]);

        return EditRoleComponent;
      }();

      EditRoleComponent.ɵfac = function EditRoleComponent_Factory(t) {
        return new (t || EditRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      EditRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditRoleComponent,
        selectors: [["app-edit-role"]],
        decls: 7,
        vars: 0,
        consts: [[1, "edit-role-container"], [1, "link-button", 3, "click"]],
        template: function EditRoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A sibling of Manage Roles.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditRoleComponent_Template_a_click_5_listener() {
              return ctx.openLink("manage-roles");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".edit-role-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: rgba(53, 122, 56, 0.5);\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding-top: 20px;\n  color: #ffffff;\n  text-align: center;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  align-self: center;\n  background-color: #004D40;\n  color: white;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 10px;\n  cursor: pointer;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJlZGl0LXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1yb2xlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MywgMTIyLCA1NiwgLjUpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluay1idXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0RDQwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxZW0gMS41ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRoleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-role',
            templateUrl: './edit-role.component.html',
            styleUrls: ['./edit-role.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5Z8V":
    /*!*************************************************************************************!*\
      !*** ./src/app/manage-roles/pages/manage-roles-page/manage-roles-page.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ManageRolesPageComponent */

    /***/
    function Z8V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageRolesPageComponent", function () {
        return ManageRolesPageComponent;
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


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! devextreme-angular */
      "384S");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function ManageRolesPageComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var button_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/manage-roles/" + (button_r1.link || "")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r1.name, " ");
        }
      }

      var ManageRolesPageComponent = /*#__PURE__*/function () {
        function ManageRolesPageComponent(router, activeRoute) {
          _classCallCheck(this, ManageRolesPageComponent);

          this.router = router;
          this.activeRoute = activeRoute;
          this.pageButtons = [{
            name: 'Edit Role',
            link: 'edit-role'
          }, {
            name: 'New Role',
            link: 'new-role'
          }, {
            name: 'Delete Role',
            link: 'delete-role'
          }];
          this.value = '';
        }

        _createClass(ManageRolesPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ManageRolesPageComponent;
      }();

      ManageRolesPageComponent.ɵfac = function ManageRolesPageComponent_Factory(t) {
        return new (t || ManageRolesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      ManageRolesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManageRolesPageComponent,
        selectors: [["app-manage-roles-page"]],
        decls: 7,
        vars: 5,
        consts: [[1, "manage-roles-container"], [1, "textArea"], [3, "height", "width", "maxLength", "value", "valueChange"], [1, "pageButtons"], ["class", "link-button disable-text-selection", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "link-button", "disable-text-selection", 3, "routerLink"]],
        template: function ManageRolesPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage Roles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dx-text-area", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ManageRolesPageComponent_Template_dx_text_area_valueChange_4_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageRolesPageComponent_a_6_Template, 2, 4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 90)("width", 200)("maxLength", 500)("value", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageButtons);
          }
        },
        directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTextAreaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".manage-roles-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #e9ecf3;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  padding-top: 20px;\n  color: #000000;\n}\n\n.pageButtons[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  flex-direction: row;\n  \n  width: 100%;\n  justify-content: center;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  background-color: #0c2886;\n  color: white;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.textArea[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-self: center;\n}\n\n.disable-text-selection[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFuYWdlLXJvbGVzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtBQUVGIiwiZmlsZSI6Im1hbmFnZS1yb2xlcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmFnZS1yb2xlcy1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZjM7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnBhZ2VCdXR0b25zIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLyogYm9keSBpcyBzYW5zLXNlcmlmICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxpbmstYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDQwLCAxMzQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxZW0gMS41ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHRBcmVhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXNhYmxlLXRleHQtc2VsZWN0aW9uIHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageRolesPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manage-roles-page',
            templateUrl: './manage-roles-page.component.html',
            styleUrls: ['./manage-roles-page.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GV0n":
    /*!*********************************************************************!*\
      !*** ./src/app/manage-roles/manage-roles/manage-roles.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ManageRolesComponent */

    /***/
    function GV0n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageRolesComponent", function () {
        return ManageRolesComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ManageRolesComponent = /*#__PURE__*/function () {
        function ManageRolesComponent() {
          _classCallCheck(this, ManageRolesComponent);
        }

        _createClass(ManageRolesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }, {
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animationState"];
          }
        }]);

        return ManageRolesComponent;
      }();

      ManageRolesComponent.ɵfac = function ManageRolesComponent_Factory(t) {
        return new (t || ManageRolesComponent)();
      };

      ManageRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManageRolesComponent,
        selectors: [["app-manage-roles"]],
        decls: 3,
        vars: 1,
        consts: [[1, "manage-roles-container"], ["manageRoles", "outlet"]],
        template: function ManageRolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx.prepareRoute(_r0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".manage-roles-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYW5hZ2Utcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoibWFuYWdlLXJvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmFnZS1yb2xlcy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"],
        data: {
          animation: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageRolesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manage-roles',
            templateUrl: './manage-roles.component.html',
            styleUrls: ['./manage-roles.component.scss'],
            animations: [src_app_fade_in_transition__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "IuY2":
    /*!*************************************************************************!*\
      !*** ./src/app/manage-roles/pages/delete-role/delete-role.component.ts ***!
      \*************************************************************************/

    /*! exports provided: DeleteRoleComponent */

    /***/
    function IuY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteRoleComponent", function () {
        return DeleteRoleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DeleteRoleComponent = /*#__PURE__*/function () {
        function DeleteRoleComponent(router) {
          _classCallCheck(this, DeleteRoleComponent);

          this.router = router;
        }

        _createClass(DeleteRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }, {
          key: "openLink",
          value: function openLink(link) {
            this.router.navigate([link]);
          }
        }]);

        return DeleteRoleComponent;
      }();

      DeleteRoleComponent.ɵfac = function DeleteRoleComponent_Factory(t) {
        return new (t || DeleteRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DeleteRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteRoleComponent,
        selectors: [["app-delete-role"]],
        decls: 7,
        vars: 0,
        consts: [[1, "delete-role-container"], [1, "link-button", 3, "click"]],
        template: function DeleteRoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A sibling of Manage Roles.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteRoleComponent_Template_a_click_5_listener() {
              return ctx.openLink("manage-roles");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".delete-role-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: rgba(23, 105, 170, 0.5);\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding-top: 20px;\n  color: #ffffff;\n  text-align: center;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  align-self: center;\n  background-color: #0c2886;\n  color: white;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 10px;\n  cursor: pointer;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGVsZXRlLXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImRlbGV0ZS1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZS1yb2xlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMTA1LCAxNzAsIC41KTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmstYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA0MCwgMTM0KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteRoleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-role',
            templateUrl: './delete-role.component.html',
            styleUrls: ['./delete-role.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "v/Nc":
    /*!*****************************************************!*\
      !*** ./src/app/manage-roles/manage-roles.module.ts ***!
      \*****************************************************/

    /*! exports provided: ManageRolesModule */

    /***/
    function vNc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageRolesModule", function () {
        return ManageRolesModule;
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


      var _manage_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-roles-routing.module */
      "/d1N");
      /* harmony import */


      var _pages_manage_roles_page_manage_roles_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/manage-roles-page/manage-roles-page.component */
      "5Z8V");
      /* harmony import */


      var _pages_edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/edit-role/edit-role.component */
      "4zXG");
      /* harmony import */


      var _pages_new_role_new_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/new-role/new-role.component */
      "vZQ7");
      /* harmony import */


      var _pages_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/delete-role/delete-role.component */
      "IuY2");
      /* harmony import */


      var _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./manage-roles/manage-roles.component */
      "GV0n");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      var ManageRolesModule = function ManageRolesModule() {
        _classCallCheck(this, ManageRolesModule);
      };

      ManageRolesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ManageRolesModule
      });
      ManageRolesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ManageRolesModule_Factory(t) {
          return new (t || ManageRolesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageRolesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageRolesModule, {
          declarations: [_pages_manage_roles_page_manage_roles_page_component__WEBPACK_IMPORTED_MODULE_3__["ManageRolesPageComponent"], _pages_edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_4__["EditRoleComponent"], _pages_new_role_new_role_component__WEBPACK_IMPORTED_MODULE_5__["NewRoleComponent"], _pages_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_6__["DeleteRoleComponent"], _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_7__["ManageRolesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageRolesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageRolesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pages_manage_roles_page_manage_roles_page_component__WEBPACK_IMPORTED_MODULE_3__["ManageRolesPageComponent"], _pages_edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_4__["EditRoleComponent"], _pages_new_role_new_role_component__WEBPACK_IMPORTED_MODULE_5__["NewRoleComponent"], _pages_delete_role_delete_role_component__WEBPACK_IMPORTED_MODULE_6__["DeleteRoleComponent"], _manage_roles_manage_roles_component__WEBPACK_IMPORTED_MODULE_7__["ManageRolesComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageRolesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vZQ7":
    /*!*******************************************************************!*\
      !*** ./src/app/manage-roles/pages/new-role/new-role.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NewRoleComponent */

    /***/
    function vZQ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewRoleComponent", function () {
        return NewRoleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NewRoleComponent = /*#__PURE__*/function () {
        function NewRoleComponent(router) {
          _classCallCheck(this, NewRoleComponent);

          this.router = router;
        }

        _createClass(NewRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }, {
          key: "openLink",
          value: function openLink(link) {
            this.router.navigate([link]);
          }
        }]);

        return NewRoleComponent;
      }();

      NewRoleComponent.ɵfac = function NewRoleComponent_Factory(t) {
        return new (t || NewRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NewRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewRoleComponent,
        selectors: [["app-new-role"]],
        decls: 7,
        vars: 0,
        consts: [[1, "new-role-container"], [1, "link-button", 3, "click"]],
        template: function NewRoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A sibling of Manage Roles.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewRoleComponent_Template_a_click_5_listener() {
              return ctx.openLink("manage-roles");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Close ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".new-role-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #ffebee;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding-top: 20px;\n  color: #000000;\n  text-align: center;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  align-self: center;\n  background-color: #b71c1c;\n  color: white;\n  padding: 1em 1.5em;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 10px;\n  cursor: pointer;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmV3LXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im5ldy1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1yb2xlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmstYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3MWMxYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewRoleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-role',
            templateUrl: './new-role.component.html',
            styleUrls: ['./new-role.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=manage-roles-manage-roles-module-es5.js.map