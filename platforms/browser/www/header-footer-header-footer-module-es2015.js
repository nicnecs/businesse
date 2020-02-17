(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["header-footer-header-footer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header-footer/header-footer.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header-footer/header-footer.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"globe\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"menu-content-open\" href=\"/project-menu\" color=\"dark\">\n            <ion-icon name=\"book\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" href=\"home\">\n            <img src=\"/assets/BusinessELogoByNamelix.png\"/>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"log-in\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"person\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-nav>\n    <ion-grid>\n      <ion-row>\n\n        <ion-button href=\"#\" color=\"dark\">\n          Startseite\n        </ion-button>\n\n        <ion-button href=\"/project-create\" color=\"dark\">\n          Projekte\n        </ion-button>\n\n        <ion-button href=\"#\" color=\"dark\">\n          Mitglieder\n        </ion-button>\n      </ion-row>\n    </ion-grid>\n  </ion-nav>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"help\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"settings\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"wallet\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/header-footer/header-footer-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/header-footer/header-footer-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HeaderFooterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFooterPageRoutingModule", function() { return HeaderFooterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_footer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-footer.page */ "./src/app/header-footer/header-footer.page.ts");




const routes = [
    {
        path: '',
        component: _header_footer_page__WEBPACK_IMPORTED_MODULE_3__["HeaderFooterPage"]
    }
];
let HeaderFooterPageRoutingModule = class HeaderFooterPageRoutingModule {
};
HeaderFooterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HeaderFooterPageRoutingModule);



/***/ }),

/***/ "./src/app/header-footer/header-footer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/header-footer/header-footer.module.ts ***!
  \*******************************************************/
/*! exports provided: HeaderFooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFooterPageModule", function() { return HeaderFooterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_footer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-footer-routing.module */ "./src/app/header-footer/header-footer-routing.module.ts");
/* harmony import */ var _header_footer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-footer.page */ "./src/app/header-footer/header-footer.page.ts");







let HeaderFooterPageModule = class HeaderFooterPageModule {
};
HeaderFooterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _header_footer_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeaderFooterPageRoutingModule"]
        ],
        declarations: [_header_footer_page__WEBPACK_IMPORTED_MODULE_6__["HeaderFooterPage"]]
    })
], HeaderFooterPageModule);



/***/ }),

/***/ "./src/app/header-footer/header-footer.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/header-footer/header-footer.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1mb290ZXIvaGVhZGVyLWZvb3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/header-footer/header-footer.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/header-footer/header-footer.page.ts ***!
  \*****************************************************/
/*! exports provided: HeaderFooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFooterPage", function() { return HeaderFooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderFooterPage = class HeaderFooterPage {
    constructor() { }
    ngOnInit() {
    }
};
HeaderFooterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-footer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header-footer/header-footer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-footer.page.scss */ "./src/app/header-footer/header-footer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderFooterPage);



/***/ })

}]);
//# sourceMappingURL=header-footer-header-footer-module-es2015.js.map