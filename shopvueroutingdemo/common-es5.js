(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "fMDc":
    /*!***************************************!*\
      !*** ./src/app/fade-in-transition.ts ***!
      \***************************************/

    /*! exports provided: openCloseAnimation, fadeAnimation */

    /***/
    function fMDc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "openCloseAnimation", function () {
        return openCloseAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeAnimation", function () {
        return fadeAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var openCloseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        height: '100%',
        transform: 'scale(0) opacity(0)'
      })], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1) opacity(1)'
      }))], {
        optional: true
      })])]);
      var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative',
        left: 0,
        opacity: 1,
        height: '100vh',
        width: '100vw'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0) opacity(0)'
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative',
        left: 0,
        opacity: 0,
        height: '100vh',
        width: '100vw'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1) opacity(1)'
      }))], {
        optional: true
      })])]);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map