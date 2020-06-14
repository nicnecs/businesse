(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <!-- <ion-item>\r\n  <ion-label>Filter</ion-label>\r\n  <ion-select   interface=\"popover\">\r\n                                                  [(ngModel)]=\"toppings\" multiple=\"true\"\r\n    <ion-select-option value=\"Standort\">Standort</ion-select-option>\r\n    <ion-select-option value=\"Bewertung\">Bewertung</ion-select-option>\r\n    <ion-select-option value=\"Bezahlung \">Bezahlung </ion-select-option>\r\n    <ion-select-option value=\"NeusteEinträge\">Neuste Einträge</ion-select-option>\r\n    \r\n  </ion-select>\r\n  </ion-item> -->\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n  <!--Kategorie-Slider-->\r\n  <ion-slides style=\"overflow-x: hidden; background-color: white;\" mode=\"ios\" pager=\"false\" [options]=\"{slidesPerView: 'auto', zoom: false, grabCursor: false}\">\r\n    <ion-slide *ngFor=\"let card of Kategorien\" style=\"width: fit-content;\">\r\n      <ion-col>\r\n        <ion-button mode=\"ios\" color=\"primary\" (click)=\"setCategory(card.name)\" expand=\"block\" fill=\"solid\" shape=\"round\">\r\n          {{card.name}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  \r\n    \r\n    <!-- <ion-row>\r\n      <ion-col size-md=\"9\" size-xs=\"6\">\r\n      </ion-col>\r\n      <ion-col size-md=\"3\" size-xs=\"6\">\r\n        <ion-item>\r\n          <ion-select mode=\"ios\" interface=\"popover\" placeholder=\"Filter\">\r\n            <ion-select-option value=\"Standort\">Standort</ion-select-option>\r\n            <ion-select-option value=\"Bewertung\">Bewertung</ion-select-option>\r\n            <ion-select-option value=\"Bezahlung \">Bezahlung </ion-select-option>\r\n            <ion-select-option value=\"NeusteEinträge\">Neuste Einträge</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n    \r\n    <ion-row>\r\n      <ion-segment value=\"newest\" color=\"secondary\" mode=\"ios\" (ionChange)=\"filterChanged($event)\" style=\"width: 100%;\">\r\n        <ion-segment-button value=\"location\">\r\n          <ion-label>Standort</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"rate\">\r\n          <ion-label>Bewertung</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"price\">\r\n          <ion-label>Bezahlung</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"newest\">\r\n          <ion-label>Neueste Einträge</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"align-content: center;\">\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-input (click)=\"showAddressModal()\" [(ngModel)]=\"address.place\" type=\"text\" placeholder=\"Location Filter\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-row>\r\n\r\n  <ion-grid>\r\n    <ion-row style=\"background-color: rgb(236, 236, 236);\">\r\n      <ion-col size-lg=\"9\" size-xs=\"12\">\r\n\r\n        <!-- <ion-item id=\"previewitem\">\r\n            <ion-grid fixed > -->\r\n    \r\n              <ion-label></ion-label>\r\n              <ion-row *ngFor=\"let project of json\">\r\n                <ion-card *ngIf=\"project.category == this.category || this.category == 'Alle Kategorien'\"   mode=\"ios\" style=\"width: 100%; height: fit-content; background-color: rgb(241, 177, 75);\">\r\n                  <ion-card-content mode=\"ios\" style=\"padding: 6px; height: fit-content\">\r\n                    \r\n                    <!-- <ion-label style=\"position: absolute; top: 2%; left: 2%; font-size: large; font-weight: 800;\">{{project.name}}</ion-label>\r\n                    <ion-label style=\"position: absolute; top: 2%; right: 2%;\">{{project.category}}</ion-label>\r\n                    <ion-label style=\"position: absolute; bottom: 2%; left: 2%;\">{{project.company}}</ion-label>\r\n                    <ion-item id=\"previewitembutton\" button (click)=\"toProject(project.id)\" style=\"position: absolute; right: 0.5%; bottom: 2%; width: fit-content; height: fit-content; font-size: small; font-weight: 800; background-color: lightblue; color: white;\">\r\n                      <ion-label>Zum Projekt</ion-label>\r\n                    </ion-item> -->\r\n\r\n                    <ion-grid fixed style=\"height: 100%; width: 100%;\">\r\n                      <ion-row>\r\n                        <ion-col size-xs=\"0\" size-md=\"5\" size-xl=\"4\" style=\"height: 100%; width: 100%; align-content: center;\">\r\n                          <!-- <ion-item>\r\n                            <ion-avatar slot=\"end\">\r\n                              <img [src]=\"image\" />\r\n                            </ion-avatar>\r\n                            <ion-label>Item Avatar</ion-label>\r\n                          </ion-item> -->\r\n                          <ion-img [src]=\"project.img\"></ion-img>\r\n                        </ion-col>\r\n\r\n                        <ion-col size-md=\"7\" size-xl=\"8\">\r\n\r\n                          <ion-row>\r\n\r\n                            <ion-col size-xs=\"6\" size-sm=\"4\" size-md=\"8\">\r\n                              <ion-label style=\"font-size: large; font-weight: 700;\">{{project.name}}</ion-label>\r\n                            </ion-col>\r\n\r\n                            <ion-col size-xs=\"6\" size-sm=\"3\" size-md=\"4\">\r\n                              <ion-row>\r\n                                <ion-col size-xs=\"12\" size-sm=\"0\">\r\n                                  <ion-img [src]=\"project.img\"></ion-img>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\" style=\"text-align: end;\">{{project.category}}</ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col style=\"text-align: end;\">\r\n                                  <ion-label>7,5 km <ion-icon name=\"ios-navigate\"></ion-icon></ion-label> \r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-col>\r\n\r\n                            <ion-col size-xs=\"0\" size-sm=\"5\" size-md=\"0\">\r\n                              <ion-img [src]=\"project.img\"></ion-img>\r\n                            </ion-col>\r\n                          </ion-row>\r\n\r\n                          <ion-row>\r\n                            <ion-col size-md=\"7\" size-xs=\"12\">\r\n                              <ion-label [routerLink]=\"['/']\">{{project.provider}}</ion-label>\r\n                            </ion-col>\r\n                            <ion-col size-md=\"5\" size-xs=\"12\">\r\n                              <!-- <ion-item id=\"previewitembutton\" button (click)=\"toProject(project.id)\" style=\"font-size: small; font-weight: 800; text-align: center; background-color: #77D12F;\">\r\n                                <ion-label>Zum Projekt</ion-label>\r\n                              </ion-item> -->\r\n                              <ion-button mode=\"ios\" color=\"primary\" [routerLink]=\"['/project', project.project_id ]\"  routerDirection=\"forward\" expand=\"full\" >\r\n                                Zum Projekt\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-row>\r\n            <!-- </ion-grid>\r\n          </ion-item> -->\r\n      </ion-col>\r\n\r\n      <ion-col size-lg=\"3\" size-xs=\"12\">\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: rgb(236, 236, 236);\n  overflow: hidden;\n}\n\nion-header {\n  --ion-background-color: #77D12F;\n}\n\nion-searchbar .searchbar-input-container {\n  background-color: white;\n}\n\n.container {\n  position: relative;\n  display: flex;\n  height: inherit;\n}\n\n#previewitem {\n  position: absolute;\n  width: 80%;\n  top: 0;\n  left: 0;\n}\n\n#sideitem {\n  position: absolute;\n  width: 20%;\n  top: 0;\n  right: 0;\n  background: hotpink;\n}\n\n#previewitembutton[type=button] {\n  background-color: #5BB32E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXJlbnRpcy9Eb2N1bWVudHMvUHJvamVrdGUvYnVzaW5lc3NlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDBDQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLCtCQUFBO0FDQUo7O0FESUk7RUFDSSx1QkFBQTtBQ0RSOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURzQkE7RUFDSSx5QkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNzdEMTJGO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4jcHJldmlld2l0ZW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNzaWRlaXRlbXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IGhvdHBpbms7XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4vLyAgICAgI3ByZXZpZXdpdGVte1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICNzaWRlaXRlbXtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICB0b3A6IHVuc2V0O1xyXG4vLyAgICAgICAgIHJpZ2h0OiB1bnNldDtcclxuLy8gICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgIGJvdHRvbTogMDtcclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcbiNwcmV2aWV3aXRlbWJ1dHRvblt0eXBlPWJ1dHRvbl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCQjMyRTtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM3N0QxMkY7XG59XG5cbmlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4jcHJldmlld2l0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuI3NpZGVpdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBob3RwaW5rO1xufVxuXG4jcHJldmlld2l0ZW1idXR0b25bdHlwZT1idXR0b25dIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCQjMyRTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _autocomplete_autocomplete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autocomplete/autocomplete.page */ "./src/app/autocomplete/autocomplete.page.ts");








let HomePage = class HomePage {
    constructor(http, nativeHttp, plt, loadingCtrl, navCtrl, modalController) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.link = "localhost:8080/businesse/getHomeData.php";
        this.data = "Hallo";
        this.toppings = "";
        this.id = 0;
        this.category = "Alle Kategorien";
        this.filter = "Alle Item";
        this.Filter = [
            { "filter": "Alle Item" },
            { "filter": "Standort" },
            { "filter": "Bewertung" },
            { "filter": "Bezahlung" },
            { "filter": "Neuste Einträge" },
        ];
        this.Kategorien = [
            {
                "name": "Alle Kategorien"
            },
            {
                "name": "Informatik",
                "id": ""
            },
            {
                "name": "Gastronomie",
                "id": ""
            },
            {
                "name": "Rohbau",
                "id": ""
            },
            {
                "name": "Verwaltung",
                "id": ""
            },
            {
                "name": "Lagermanagement",
                "id": ""
            },
            {
                "name": "Handwerk",
                "id": ""
            },
            {
                "name": "Versandhandel",
                "id": ""
            },
            {
                "name": "E-Commerce",
                "id": ""
            },
            {
                "name": "Gebäudereinigung",
                "id": ""
            }
        ];
        this.backupjson = [
            {
                "project_id": 5,
                "name": "Ein cooles Projekt",
                "category": "Informatik",
                "company": "TeaSausage24",
                "img": "./assets/project/1/workplace.png"
            },
            {
                "project_id": 29,
                "name": "Super cooles Projekt",
                "category": "Handwerk",
                "company": "Microsoft",
                "img": "./assets/project/1/workplace.png"
            },
            {
                "project_id": 19000,
                "name": "Super Duper cooles Projekt",
                "category": "Informatik",
                "company": "Apppple",
                "img": "./assets/project/1/workplace.png",
                "frist": "17.02.2020",
                "project-start": "20.02.2020"
            },
            {
                "project_id": 5,
                "name": "Ein cooles Projekt",
                "category": "Gebäudereinigung",
                "company": "TeaSausage24",
                "img": "./assets/project/1/workplace.png"
            },
            {
                "project_id": 29,
                "name": "Super cooles Projekt",
                "category": "Handwerk",
                "img": "./assets/project/1/workplace.png",
                "company": "Microsoft"
            },
            {
                "project_id": 19000,
                "name": "Super Duper cooles Projekt",
                "category": "Rohbau",
                "company": "Apppple",
                "img": "./assets/project/1/workplace.png",
                "frist": "17.02.2020",
                "project-start": "20.02.2020"
            }
        ];
        this.address = {
            place: ''
        };
    }
    ionViewWillEnter() {
        this.getStandardData();
    }
    getStandardData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.http.get('http://businesse.eastus.cloudapp.azure.com:8080/businesse/getHomeDataxampp.php').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => loading.dismiss())).subscribe(data => {
                this.data = data['_body'];
                console.log(this.data);
                this.json = JSON.parse(data['_body']);
                console.log(this.json);
                console.log("On the Way");
            }, err => {
                console.log("Error", err);
                // console.log('Call error: ', err);
            });
        });
    }
    // Für Cordova Ausführung
    // async getNativeData(){
    //   let loading = await this.loadingCtrl.create();
    //   await loading.present();
    //   let nativeCall = this.nativeHttp.get('http://businesse.eastus.cloudapp.azure.com:8080/businesse/getHomeData.php', {}, {
    //     'Content-Type': 'application/json'
    //   })
    //   from(nativeCall).pipe(
    //     finalize(() => loading.dismiss())
    //   ).subscribe(data => {
    //     console.log('native data: ', data);
    //     this.data = JSON.parse(data.data).results;
    //   }, err => {
    //     console.log('Call error: ', err);
    //   })
    // }
    //Normale Abfrage
    getData() {
        this.http.get('http://businesse.eastus.cloudapp.azure.com:8080/businesse/getHomeData.php').subscribe(data => {
            // this.json = data['_body'];
        }, success => {
            console.log("Success");
        });
    }
    filterChanged(ev) {
        console.log('Segment changed', ev);
    }
    toProject(project_id) {
        this.id = project_id;
    }
    setCategory(name) {
        this.category = name;
        this.getStandardData();
    }
    showAddressModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _autocomplete_autocomplete_page__WEBPACK_IMPORTED_MODULE_6__["AutocompletePage"]
            });
            let me = this;
            // modal.onDidDismiss(data => {
            //   this.address.place = data;
            // });
            yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map