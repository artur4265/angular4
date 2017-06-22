webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 103;


/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire4_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AboutComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AboutComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(184),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire4_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire4_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire4_database__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(db) {
        this.title = 'app works!';
        this.items = db.list('/messages');
        this.articles = db.list('/articles');
    }
    AppComponent.prototype.addItem = function (newName) {
        this.items.push({ text: newName });
    };
    AppComponent.prototype.updateItem = function (key, newText) {
        this.items.update(key, { text: newText });
    };
    AppComponent.prototype.deleteItem = function (key) {
        this.items.remove(key);
    };
    AppComponent.prototype.deleteEverything = function () {
        this.items.remove();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(185),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire4_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire4_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notfound_notfound_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire4__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire4_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire4_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__notfound_notfound_component__["a" /* NotfoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__notfound_notfound_component__["a" /* NotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__["a" /* MainpageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9_angularfire4__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_10_angularfire4_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire4_auth__["a" /* AngularFireAuthModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpageComponent = (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-mainpage',
        template: __webpack_require__(186),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], MainpageComponent);

//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-notfound',
        template: __webpack_require__(187),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "main {\n  width: 305px;\n  height: 305px;\n  background: red; }\n\n.product {\n  width: 200px;\n  color: red; }\n  .product .productname {\n    color: blue;\n    font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n\n <div> {{ (user | async)?.uid }} </div>\n  <button (click)=\"login()\">Login</button>\n  <button (click)=\"logout()\">Logout</button>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<nav>\n  <a routerLink=\"/\" routerLinkActive=\"active\">home</a>\n  <a routerLink=\"/about\" routerLinkActive=\"active\">about</a>\n</nav>\n\n\n\n\n\n<ul>\n  <li class=\"text\" *ngFor=\"let item of items | async\">\n    {{item.text}}\n  </li>\n</ul>\n\n<br>\n\n<hr>\n\n\n\n<ul>\n  <li class=\"text\" *ngFor=\"let item of articles | async\">\n   <div>Article name \"{{item.name}}\"</div>\n   <div>Article body \"{{item.text}}\"</div>\n  </li>\n  <hr>\n</ul>\n\n\n<br>\n<br>\n<br>\n<br>\n\n  <ul>\n    <li *ngFor=\"let item of items | async\">\n      <input type=\"text\" #updatetext [value]=\"item.text\" />\n      <button (click)=\"updateItem(item.$key, updatetext.value)\">Update</button>\n      <button (click)=\"deleteItem(item.$key)\">Delete</button>\n    </li>\n  </ul>\n\n  <input type=\"text\" #newitem />\n  <button (click)=\"addItem(newitem.value)\">Add</button>\n  <button (click)=\"deleteEverything()\">Delete All</button>\n\n\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<p>\n  mainpage works!\n</p>\n\n\n<div id=\"main\">\n<p>this is main page</p>\n\n\n<ul>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n</ul>\n\n\n\n\n</div>\n\n<ul>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n\t<li>11111</li>\n</ul>\n\n\n<div class=\"product\">\ntext\n\t<div class=\"productname\">name</div>\n</div>\n\n<br>\n\n<main>\n\t3333\n</main>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD1Y-c_bCRDt6RUwzqQOj0K2hsb971Uo30",
        authDomain: "angular4-72744.firebaseapp.com",
        databaseURL: "https://angular4-72744.firebaseio.com",
        projectId: "angular4-72744",
        storageBucket: "angular4-72744.appspot.com",
        messagingSenderId: "141069947558"
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.bundle.js.map