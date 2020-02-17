(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"globe\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"/project-menu\" color=\"dark\">\n            <ion-icon name=\"book\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        \n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"log-in\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"person\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-grid style=\"left: 30%; height: 100%;\">\n    <ion-row>\n      categorys in small sliders\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"width: 70%;\">\n        <ion-card style=\"border: 0;\">\n          <ion-card-header>\n            <ion-card-subtitle>shortfilter</ion-card-subtitle>\n            <ion-card-title></ion-card-title>\n          </ion-card-header>\n          <ion-card-content style=\"height: fit-content;\">\n            <ion-grid fixed>\n              \n              <ion-label></ion-label>\n              <ion-row *ngFor=\"let project of json\">\n                <ion-card style=\"width: 90%; height: fit-content;\">\n                  <ion-card-content style=\"height: 90px;\">\n                    \n                    <ion-label style=\"position: absolute; top: 0%; left: 0%; font-size: large; font-weight: 800;\">{{project.name}}</ion-label>\n                    <ion-label style=\"position: absolute; top: 0; right: 0;\">{{project.category}}</ion-label>\n                    <ion-label style=\"position: absolute; bottom: 0%; left: 0%;\">{{project.company}}</ion-label>\n                    <ion-button (click)=\"toProject(project.id)\" style=\"position: absolute; right: 0%; bottom: 0%; width: 10%; background-color: darkblue;\" expand=\"block\">\n                      block\n                    </ion-button>\n                  </ion-card-content>\n                </ion-card>\n              </ion-row>\n            \n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        {{id}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n<ion-footer style=\"max-height: 10%;\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HomePage = class HomePage {
      constructor() {
        this.id = 0;
        this.json = [{
          "id": 5,
          "name": "Ein cooles Projekt",
          "category": "Programming",
          "company": "TeaSausage24"
        }, {
          "id": 29,
          "name": "Super cooles Projekt",
          "category": "Handwerk",
          "company": "Microsoft"
        }, {
          "id": 19000,
          "name": "Super Duper cooles Projekt",
          "category": "fff",
          "company": "Apppple",
          "img": "img",
          "frist": "17.02.2020",
          "project-start": "20.02.2020"
        }];
      }

      toProject(project_id) {
        this.id = project_id;
      }

    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map