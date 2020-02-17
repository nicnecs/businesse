(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"globe\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"/project-menu\" color=\"dark\">\n            <ion-icon name=\"book\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" href=\"home\">\n            <img src=\"/assets/BusinessELogoByNamelix.png\"/>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"log-in\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"person\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-header padding>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Projektübersicht</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n    <ion-item-sliding>\n\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"help\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"settings\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"wallet\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/project/project-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/project/project-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageRoutingModule", function() { return ProjectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.page */ "./src/app/project/project.page.ts");




const routes = [
    {
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_3__["ProjectPage"]
    }
];
let ProjectPageRoutingModule = class ProjectPageRoutingModule {
};
ProjectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectPageRoutingModule);



/***/ }),

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function() { return ProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/project/project-routing.module.ts");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.page */ "./src/app/project/project.page.ts");







let ProjectPageModule = class ProjectPageModule {
};
ProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _project_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectPageRoutingModule"]
        ],
        declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
    })
], ProjectPageModule);



/***/ }),

/***/ "./src/app/project/project.page.scss":
/*!*******************************************!*\
  !*** ./src/app/project/project.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/project/project.page.ts":
/*!*****************************************!*\
  !*** ./src/app/project/project.page.ts ***!
  \*****************************************/
/*! exports provided: ProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPage", function() { return ProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectPage = class ProjectPage {
    constructor() { }
    ngOnInit() {
    }
};
ProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.page.scss */ "./src/app/project/project.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectPage);



/***/ })

}]);
//# sourceMappingURL=project-project-module-es2015.js.map