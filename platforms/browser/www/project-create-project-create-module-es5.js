(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-create-project-create-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/project-create.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/project-create.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectCreateProjectCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"globe\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"/project-menu\" color=\"dark\">\n            <ion-icon name=\"book\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" href=\"home\">\n            <img src=\"/assets/BusinessELogoByNamelix.png\"/>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"log-in\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"person\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-header padding>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Erstellen Sie hier ihr Projekt</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #createProjectform=\"ngForm\" novalidate>\n  <ion-list lines>\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Projekttitel*</ion-label>\n      <ion-input [(ngModel)]=\"createProject.title\" name=\"title\" type=\"text\" #title=\"ngModel\" required></ion-input>\n    </ion-item>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"title.valid || submitted == false\" class=\"ion-padding-start\">\n        Title is required\n      </p>\n    </ion-text>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Betrieb*</ion-label>\n      <ion-input [(ngModel)]=\"createProject.company\" name=\"company\" #company=\"ngModel\" type=\"text\" required></ion-input>\n    </ion-item>\n    <ion-text color=\"danger\">\n\n    </ion-text>\n    <p [hidden]=\"company.valid || submitted == false\" class=\"ion-padding-start\">\n      Company is required\n    </p>\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Projektbeschreibung*</ion-label>\n      <ion-input [(ngModel)]=\"createProject.description\" name=\"description\" #description=\"ngModel\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"description.valid || submitted == false\" class=\"ion-padding-start\">\n        Description is required\n      </p>\n    </ion-text>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Projektstart*</ion-label>\n      <ion-input [(ngModel)]=\"createProject.project_start\" name=\"project-start\" #project_start=\"ngModel\" type=\"date\" required></ion-input>\n    </ion-item>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"project_start.valid || submitted == false\" class=\"ion-padding-start\">\n        Project start is required\n      </p>\n    </ion-text>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Voraussichtliches Projektende*</ion-label>\n      <ion-input [(ngModel)]=\"createProject.project_end\" name=\"project-end\" #project_end=\"ngModel\" type=\"date\" required></ion-input>\n    </ion-item>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"project_end.valid || submitted == false\" class=\"ion-padding-start\">\n        Description is required\n      </p>\n    </ion-text>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Anmeldefrist*</ion-label>\n      <ion-input [(ngModel)]=\"createProject.registration_period\" name=\"registration-period\" #registration_period=\"ngModel\" type=\"date\" required></ion-input>\n    </ion-item>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"registration_period.valid || submitted == false\" class=\"ion-padding-start\">\n        Registration period is required\n      </p>\n    </ion-text>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Adresse*</ion-label>\n      <ion-input [(ngModel)]=\"createProject.address\" name=\"address\" #adress=\"ngModel\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"adress.valid || submitted == false\" class=\"ion-padding-start\">\n        Adress period is required\n      </p>\n    </ion-text>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Kommentar zur Adresse</ion-label>\n      <ion-input [(ngModel)]=\"createProject.address_comment\" name=\"address-comment\" #address_comment=\"ngModel\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Entlohnung</ion-label>\n      <ion-input [(ngModel)]=\"createProject.payment\" name=\"payment\" type=\"number\" #payment=\"ngModel\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\" color=\"primary\">Anzahl der gesuchten Auftragnehmer</ion-label>\n      <ion-input [(ngModel)]=\"createProject.number_participants\" name=\"number-participants\" #number_participants=\"ngModel\" type=\"number\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div class=\"ion-padding\">\n    <ion-button (click)=\"onCreateProject(createProjectform)\" type=\"submit\" expand=\"block\">Create</ion-button>\n  </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"help\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"settings\"></ion-icon>\n          </ion-button>\n          <ion-button href=\"#\" color=\"dark\">\n            <ion-icon name=\"wallet\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/project-create/project-create-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/project-create/project-create-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProjectCreatePageRoutingModule */

  /***/
  function srcAppProjectCreateProjectCreateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectCreatePageRoutingModule", function () {
      return ProjectCreatePageRoutingModule;
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


    var _project_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project-create.page */
    "./src/app/project-create/project-create.page.ts");

    const routes = [{
      path: '',
      component: _project_create_page__WEBPACK_IMPORTED_MODULE_3__["ProjectCreatePage"]
    }];
    let ProjectCreatePageRoutingModule = class ProjectCreatePageRoutingModule {};
    ProjectCreatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectCreatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/project-create/project-create.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/project-create/project-create.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProjectCreatePageModule */

  /***/
  function srcAppProjectCreateProjectCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectCreatePageModule", function () {
      return ProjectCreatePageModule;
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


    var _project_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./project-create-routing.module */
    "./src/app/project-create/project-create-routing.module.ts");
    /* harmony import */


    var _project_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./project-create.page */
    "./src/app/project-create/project-create.page.ts");

    let ProjectCreatePageModule = class ProjectCreatePageModule {};
    ProjectCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _project_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectCreatePageRoutingModule"]],
      declarations: [_project_create_page__WEBPACK_IMPORTED_MODULE_6__["ProjectCreatePage"]]
    })], ProjectCreatePageModule);
    /***/
  },

  /***/
  "./src/app/project-create/project-create.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/project-create/project-create.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectCreateProjectCreatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtY3JlYXRlL3Byb2plY3QtY3JlYXRlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/project-create/project-create.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/project-create/project-create.page.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectCreatePage */

  /***/
  function srcAppProjectCreateProjectCreatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectCreatePage", function () {
      return ProjectCreatePage;
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


    var _providers_project_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../providers/project-data */
    "./src/app/providers/project-data.ts");

    let ProjectCreatePage = class ProjectCreatePage {
      constructor(router, projectData) {
        this.router = router;
        this.projectData = projectData;
        this.createProject = {
          title: '',
          company: '',
          description: '',
          project_start: null,
          project_end: null,
          registration_period: null,
          address: '',
          address_comment: '',
          payment: null,
          number_participants: null
        };
        this.submitted = false;
      }

      onCreateProject(form) {
        this.submitted = true;

        if (form.valid) {
          this.projectData.createProject(this.createProject.title);
          /**
           * todo navigateByURL
           */
        }
      }

    };

    ProjectCreatePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _providers_project_data__WEBPACK_IMPORTED_MODULE_3__["ProjectData"]
    }];

    ProjectCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project-create.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/project-create.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project-create.page.scss */
      "./src/app/project-create/project-create.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_project_data__WEBPACK_IMPORTED_MODULE_3__["ProjectData"]])], ProjectCreatePage);
    /***/
  },

  /***/
  "./src/app/providers/project-data.ts":
  /*!*******************************************!*\
    !*** ./src/app/providers/project-data.ts ***!
    \*******************************************/

  /*! exports provided: ProjectData */

  /***/
  function srcAppProvidersProjectDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectData", function () {
      return ProjectData;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    let ProjectData = class ProjectData {
      constructor(storage) {
        this.storage = storage;
        this.IS_CREATED = 'isCreated';
      }

      createProject(title) {
        return this.storage.set(this.IS_CREATED, true).then(() => {
          this.setTitle(title);
          return window.dispatchEvent(new CustomEvent('project:create'));
        });
      }

      setTitle(title) {
        return this.storage.set('username', title);
      }

      getTitle() {
        return this.storage.get('title').then(value => {
          return value;
        });
      }

    };

    ProjectData.ctorParameters = () => [{
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
    }];

    ProjectData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], ProjectData);
    /***/
  }
}]);
//# sourceMappingURL=project-create-project-create-module-es5.js.map