(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-item class=\"header-item\">\n    <ion-button href=\"home\" color=\"dark\">\n      <ion-icon name=\"globe\"></ion-icon>\n    </ion-button>\n\n    <ion-button href=\"/project-menu\" color=\"dark\">\n      <ion-icon name=\"book\"></ion-icon>\n    </ion-button>\n\n    <ion-searchbar color=\"light\" class=\"searchbar-input-container\" mode=\"ios\" style=\"color: black;\"></ion-searchbar>\n    <ion-button color=\"secondary\" style=\"height: 55%;\" href=\"login.page.html\">Login</ion-button>\n\n    <ion-button href=\"#\" color=\"dark\">\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</ion-header> -->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Header</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        {{id}}\n      </ion-col>\n      <ion-col *ngIf=\"this.account_id != null\" >\n        Deine ID: {{this.account_id}}\n      </ion-col>\n      <ion-col *ngIf=\"this.isPartner == true\" >\n        Sie sind Partner\n      </ion-col>\n      <ion-col *ngIf=\"this.isProvider == true\" >\n        Sie sind Provider\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\n          Click me\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let ProjectPage = class ProjectPage {
    constructor(activatedRoute, storage) {
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.isPartner = false;
        this.isProvider = false;
        this.json = [
            {
                "img_workplace": "./assets/project/1/workplace.png"
            }
        ];
        this.activatedRoute.params.subscribe((params) => {
            this.id = params["id"];
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.storage.ready().then(() => {
        // });
        this.storage.get('id').then((id) => {
            this.account_id = id;
        });
        this.storage.get('isPartner').then((state) => {
            this.isPartner = state;
        });
        this.storage.get('isProvider').then((state) => {
            this.isProvider = state;
        });
    }
};
ProjectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
ProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.page.scss */ "./src/app/project/project.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], ProjectPage);



/***/ })

}]);
//# sourceMappingURL=project-project-module-es2015.js.map