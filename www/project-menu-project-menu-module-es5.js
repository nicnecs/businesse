(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-menu-project-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project-menu/project-menu.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-menu/project-menu.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectMenuProjectMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-split-pane>\n<ion-menu>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menü</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-list>\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath === p.url\">\n          {{ p.title}}\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n\n  </ion-menu>\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>\n";
    /***/
  },

  /***/
  "./src/app/project-menu/project-menu-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/project-menu/project-menu-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ProjectMenuPageRoutingModule */

  /***/
  function srcAppProjectMenuProjectMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectMenuPageRoutingModule", function () {
      return ProjectMenuPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _project_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project-menu.page */
    "./src/app/project-menu/project-menu.page.ts");

    const routes = [{
      path: '',
      component: _project_menu_page__WEBPACK_IMPORTED_MODULE_3__["ProjectMenuPage"]
    }];
    let ProjectMenuPageRoutingModule = class ProjectMenuPageRoutingModule {};
    ProjectMenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectMenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/project-menu/project-menu.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/project-menu/project-menu.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectMenuPageModule */

  /***/
  function srcAppProjectMenuProjectMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectMenuPageModule", function () {
      return ProjectMenuPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _project_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./project-menu-routing.module */
    "./src/app/project-menu/project-menu-routing.module.ts");
    /* harmony import */


    var _project_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./project-menu.page */
    "./src/app/project-menu/project-menu.page.ts");

    const routes = [{
      path: 'menu',
      component: _project_menu_page__WEBPACK_IMPORTED_MODULE_6__["ProjectMenuPage"],
      children: [{
        path: 'first',
        loadChildren: './first/first.module#FirstPageModule'
      }, {
        path: 'second',
        loadChildren: './second/second.module#SecondPageModul'
      }]
    }, {
      path: '',
      redirectTo: '/menu/first'
    }];
    let ProjectMenuPageModule = class ProjectMenuPageModule {};
    ProjectMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _project_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectMenuPageRoutingModule"]],
      declarations: [_project_menu_page__WEBPACK_IMPORTED_MODULE_6__["ProjectMenuPage"]]
    })], ProjectMenuPageModule);
    /***/
  },

  /***/
  "./src/app/project-menu/project-menu.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/project-menu/project-menu.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectMenuProjectMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active-item {\n  border-left: 8px solid var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rva3VtZWkvRG9jdW1lbnRzL3Byb2plY3RzL2J1c2luZXNzZS9zcmMvYXBwL3Byb2plY3QtbWVudS9wcm9qZWN0LW1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9qZWN0LW1lbnUvcHJvamVjdC1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDRDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LW1lbnUvcHJvamVjdC1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbVxue1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKVxufVxuIiwiLmFjdGl2ZS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/project-menu/project-menu.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/project-menu/project-menu.page.ts ***!
    \***************************************************/

  /*! exports provided: ProjectMenuPage */

  /***/
  function srcAppProjectMenuProjectMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectMenuPage", function () {
      return ProjectMenuPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ProjectMenuPage = class ProjectMenuPage {
      constructor(router) {
        this.router = router;
        this.pages = [{
          title: 'Projekte erstellen',
          url: '/project-create/'
        }, {
          title: 'Projektübersicht',
          url: '/project/'
        }];
        this.selectedPath = '';
        this.router.events.subscribe(event => {
          this.selectedPath = event.url;
        });
      }

      ngOnInit() {}

    };

    ProjectMenuPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ProjectMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project-menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project-menu/project-menu.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project-menu.page.scss */
      "./src/app/project-menu/project-menu.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ProjectMenuPage);
    /***/
  }
}]);
//# sourceMappingURL=project-menu-project-menu-module-es5.js.map