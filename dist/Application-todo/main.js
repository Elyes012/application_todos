(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apitodo.service.ts":
/*!************************************!*\
  !*** ./src/app/apitodo.service.ts ***!
  \************************************/
/*! exports provided: ApitodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApitodoService", function() { return ApitodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApitodoService = /** @class */ (function () {
    function ApitodoService(http) {
        this.http = http;
    }
    ApitodoService.prototype.register = function (data) {
        console.log('register ==>', data);
        return this.http.post('http://localhost:5200/auth/register', data);
    };
    ApitodoService.prototype.login = function (data) {
        console.log('login service ==>', data);
        return this.http.post('http://localhost:5200/auth/login', data);
    };
    ApitodoService.prototype.todoUser = function (id) {
        console.log('  id dans le services ==', id);
        return this.http.get('http://localhost:5200/todo/' + id);
    };
    ApitodoService.prototype.todoAdd = function (id, todo) {
        console.log('ici todo utilisateur ajouter ==', id, todo);
        return this.http.post('http://localhost:5200/todo/' + id, todo);
    };
    ApitodoService.prototype.todoRemove = function (id, i) {
        console.log('  ici index todo a supprimé ==', i);
        return this.http.delete('http://localhost:5200/todo/' + id + '/' + i);
    };
    ApitodoService.prototype.todoUpdate = function (id, i, todo) {
        console.log('  index dans le service ==', i, todo);
        return this.http.put('http://localhost:5200/todo/' + id + '/' + i, todo);
    };
    ApitodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApitodoService);
    return ApitodoService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-menu></app-menu>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Application-todo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: 'register',
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
                    },
                    { path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                    },
                    { path: 'home',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
                    },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*\r\n\r\n.TodoApp__form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-bottom: 0px;\r\n    z-index: 9;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.TodoApp__form__input {\r\n  border: 0;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  padding: 24px 16px;\r\n  display: block;\r\n  font-size: 24px;\r\n  outline: none;\r\n  background: #FFF;\r\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.TodoApp__todo__primary {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1;\r\n  flex: 1;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.TodoApp__todo, .TodoApp__todo--completed {\r\n  background: #fdfdfd;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  padding: 16px 12px;\r\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);\r\n} */\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  font-family: sans-serif;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  background: #EEE;\r\n  minHeight: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\nbutton {\r\n  display: inline-block;\r\n  border: 0;\r\n  background: #333;\r\n  margin: 0;\r\n  color: #FFF;\r\n  height: 36px;\r\n  padding: 0 12px;\r\n  text-transform: uppercase;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  border-radius: 3px;\r\n  outline: none;\r\n}\r\n.material-icons {\r\n  background: transparent;\r\n  color: #000;\r\n  padding: 8px;\r\n  height: auto;\r\n  border-radius: 50%;\r\n}\r\n.material-icons:hover {\r\n  background: rgba(0, 0, 0, 0.1);\r\n}\r\n.TodoApp {\r\n  width: 600px;\r\n  margin: 60px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.TodoApp__filters {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 16px;\r\n  background: transparent;\r\n}\r\n.TodoApp__filter__btn, .TodoApp__filter__btn--active {\r\n  background: transparent;\r\n  color: #999;\r\n  text-transform: none;\r\n  font-size: 14px;\r\n  padding: 0;\r\n  width: 90px;\r\n  height: auto;\r\n  border: 1px solid #999;\r\n}\r\n.TodoApp__filter__btn:nth-child(1), .TodoApp__filter__btn--active:nth-child(1) {\r\n  border-radius: 3px 0 0 3px;\r\n  border-right: 0;\r\n}\r\n.TodoApp__filter__btn:nth-child(2), .TodoApp__filter__btn--active:nth-child(2) {\r\n  border-radius: 0;\r\n  border-right: 0;\r\n}\r\n.TodoApp__filter__btn:nth-child(3), .TodoApp__filter__btn--active:nth-child(3) {\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n.TodoApp__filter__btn--active {\r\n  background: #999;\r\n  color: #FFF;\r\n}\r\n.TodoApp__form {\r\n  display: flex;\r\n  margin-bottom: 0px;\r\n  z-index: 9;\r\n  position: relative;\r\n}\r\n.TodoApp__form__input {\r\n  border: 0;\r\n  flex: 1;\r\n  padding: 24px 16px;\r\n  display: block;\r\n  font-size: 24px;\r\n  outline: none;\r\n  background: #FFF;\r\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n.TodoApp__form__add-btn {\r\n  height: auto;\r\n  padding: 0 24px;\r\n  margin-left: 8px;\r\n}\r\n.TodoApp__todo, .TodoApp__todo--completed {\r\n  background: #fdfdfd;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 16px 12px;\r\n  margin-top: 1px;\r\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);\r\n}\r\n.TodoApp__todo + .TodoApp__todo, .TodoApp__todo--completed + .TodoApp__todo, .TodoApp__todo + .TodoApp__todo--completed, .TodoApp__todo--completed + .TodoApp__todo--completed {\r\n  border-top: 1px solid #EEE;\r\n}\r\n.TodoApp__todo.editing, .editing.TodoApp__todo--completed {\r\n  padding: 0;\r\n}\r\n.TodoApp__todo:hover .TodoApp__todo__delete-btn, .TodoApp__todo--completed:hover .TodoApp__todo__delete-btn {\r\n  opacity: 1;\r\n}\r\n.TodoApp__todo--completed .TodoApp__todo__complete-btn {\r\n  color: green;\r\n}\r\n.TodoApp__todo__edit-input {\r\n  padding: 20px 24px 22px 24px;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n  margin: 0 0 0 0px;\r\n  width: 100%;\r\n  font-weight: 300;\r\n  background: #FFF9C4;\r\n  border: 0;\r\n  outline: none;\r\n}\r\n.TodoApp__todo__label {\r\n  font-size: 20px;\r\n  margin: 0 12px;\r\n  color: #333;\r\n  font-weight: 300;\r\n}\r\n.TodoApp__todo--completed .TodoApp__todo__label {\r\n  color: #CCC;\r\n  text-decoration: line-through;\r\n}\r\n.TodoApp__todo__primary {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n}\r\n.TodoApp__todo__complete-btn {\r\n  border: 1px solid #CCC;\r\n  padding: 4px;\r\n  color: transparent;\r\n}\r\n.TodoApp__todo__complete-btn:hover {\r\n  background: transparent;\r\n}\r\n.editing .TodoApp__todo__complete-btn {\r\n  display: none;\r\n  color : red;\r\n}\r\n.TodoApp__todo__delete-btn {\r\n  transition: all .1s ease-out;\r\n  padding: 4px;\r\n  color: #777;\r\n  opacity: 0;\r\n}\r\n.TodoApp__todo__delete-btn:hover {\r\n  background: transparent;\r\n  color: red;\r\n}\r\n.editing .TodoApp__todo__delete-btn {\r\n  display: none;\r\n}\r\n::-webkit-input-placeholder {\r\n  font-weight: 100;\r\n  color: #BBB;\r\n}\r\n::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  font-weight: 100;\r\n  color: #BBB;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"TodoApp__form\" data-reactid=\".0.1\">\n        <input class=\"TodoApp__form__input\" placeholder=\"Add a todo...\" [(ngModel)]=\"ajouTodo\" data-reactid=\".0.1.0\"\n          [(ngModel)]=\"ajouTodo\" (keyup.enter)=\"addTodo()\">\n      </div>\n    </div>\n  </div>\n\n\n  <!--<button (click)=\"addTodo()\">addtodo</button>-->\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"TodoApp__todo-list\" data-reactid=\".0.2\">\n\n        <div class=\"TodoApp__todo\" data-reactid=\".0.2.0\" *ngFor=\"let item of todo; let i = index\">\n\n          <h4><strong>{{item.content}} : </strong></h4>\n          <h4> {{item.date | date: 'medium'}}</h4>\n\n          <div class=\"TodoApp__todo__primary\" data-reactid=\".0.2.0.0\">\n            <div class=\"TodoApp__todo__label\" data-reactid=\".0.2.0.0.1\">\n            </div>\n          </div>\n          <button class=\"material-icons TodoApp__todo__delete-btn\" data-reactid=\".0.2.0.1\" (click)=\"deleteTodo(i)\">Delete</button>\n          <button class=\"material-icons TodoApp__todo__delete-btn\" data-reactid=\".0.2.0.1\" (click)=\"updateTodo(item, i)\">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apitodo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apitodo.service */ "./src/app/apitodo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(apitodoService) {
        this.apitodoService = apitodoService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('usertoken');
        /*id utilisateur*/
        this.userId = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token).data._id;
        console.log('id utilisateur', this.userId);
        /*importation todo par id utilisateur*/
        this.apitodoService.todoUser(this.userId).subscribe(function (res) {
            console.log('decodage ici', JSON.parse(res.text()));
            _this.todo = JSON.parse(res.text());
        });
    };
    /*ajout de todo par id utilisateur*/
    HomeComponent.prototype.addTodo = function () {
        var _this = this;
        this.apitodoService.todoAdd(this.userId, { content: this.ajouTodo }).subscribe(function (res) {
            console.log('todo ajouter components', res);
            _this.ngOnInit();
        });
    };
    /*supprimer todo par id utilisateur et index []*/
    HomeComponent.prototype.deleteTodo = function (indexTodo) {
        var _this = this;
        this.apitodoService.todoRemove(this.userId, indexTodo).subscribe(function (res) {
            console.log('delete todo', res);
            _this.ngOnInit();
        });
    };
    /*modifier todo par id utilisateur et index []*/
    HomeComponent.prototype.updateTodo = function (modifTodo, indexTodo) {
        var _this = this;
        var todoDescPrompt = prompt('update', modifTodo.content);
        console.log('index update ici', todoDescPrompt);
        this.apitodoService.todoUpdate(this.userId, indexTodo, { content: todoDescPrompt }).subscribe(function (res) {
            console.log('todo a modifier', res);
            _this.ngOnInit();
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_apitodo_service__WEBPACK_IMPORTED_MODULE_2__["ApitodoService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASIC */\r\n\r\nhtml {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 89vh;\r\n}\r\n\r\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 0px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n\r\n/* STRUCTURE */\r\n\r\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 60%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n.formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 0px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n/* TABS */\r\n\r\nh2.inactive {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n/* FORM TYPOGRAPHY*/\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  height: 0px;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\r\n\r\nh1{\r\n    color:#60a0ff;\r\n}\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n    outline: none;\r\n}\r\n\r\n#icon {\r\n  width:15%;\r\n}\r\n\r\n.btnlogin {\r\n  margin: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <!-- Icon -->\n    <div class=\"fadeIn first\">\n      <img src=\"https://i.imgur.com/aSJ0pLd.jpg\" id=\"icon\" alt=\"User Icon\" />\n      <h1>Todo Website</h1>\n    </div>\n\n    <!-- Login Form -->\n    <form [formGroup]=\"formlogin\">\n      <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"Enter email\" formControlName=\"email\">\n      <input type=\"text\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"Enter password\" formControlName=\"password\">\n\n    </form>\n    <button type=\"button\" class=\"btn btn-primary btnlogin\" (click)=\"loginUser()\">Login</button>\n\n    <!-- Remind Passowrd -->\n    <div class=\"formFooter\">\n\n        <h2 style=\"color:firebrick;\"> {{message}}</h2>\n\n    </div>\n\n\n\n\n\n\n\n\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _apitodo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apitodo.service */ "./src/app/apitodo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(apitodoService, router, fb) {
        this.apitodoService = apitodoService;
        this.router = router;
        this.fb = fb;
        this.formlogin = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
        });
    }
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (this.formlogin.valid) {
            this.message = '';
            this.apitodoService.login(this.formlogin.value).subscribe(function (res) {
                console.log('login component ==>', res);
                if (res.json().message === 'ok') {
                    localStorage.setItem('usertoken', res.json().userToken);
                    _this.router.navigateByUrl('/home');
                }
                else {
                    _this.message = res.json().message;
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_apitodo_service__WEBPACK_IMPORTED_MODULE_2__["ApitodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"\">Todo WebSite</a>\n    </div>\n\n    <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!isLoggedIn\">\n      <li><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span> Register</a></li>\n      <li><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"isLoggedIn\">\n      <li><a routerLink=\"/login\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n     </ul>\n     <ul class=\"nav navbar-nav\" *ngIf=\"isLoggedIn\">\n        <li class=\"active\"><a href=\"/home\">Todos</a></li>\n        <li><a href=\"#\"></a></li>\n      </ul>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.isLoggedIn = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = localStorage.getItem('usertoken') ? true : false; /*pour changer login par logout*/
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
            }
        });
        this.ngOnInit();
    };
    MenuComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/login');
        this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASIC */\r\n\r\nhtml {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n\r\n/* STRUCTURE */\r\n\r\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 60%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n.formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n/* TABS */\r\n\r\nh2.inactive {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n/* FORM TYPOGRAPHY*/\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\r\n\r\nh1{\r\n    color:#60a0ff;\r\n}\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n    outline: none;\r\n}\r\n\r\n#icon {\r\n  width:15%;\r\n}\r\n\r\n.btnlogin {\r\n  margin: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n\n      <!-- Icon -->\n      <div class=\"fadeIn first\">\n        <img src=\"https://i.imgur.com/aSJ0pLd.jpg\" id=\"icon\" alt=\"User Icon\" />\n        <h1>Todo Website</h1>\n      </div>\n\n      <!-- Login Form -->\n      <form [formGroup]=\"formregister\">\n          <input formControlName=\"name\" type=\"text\" class=\"form-control\"   placeholder=\"Enter firstname\" >\n          <div class=\"validations\" *ngIf=\"formregister.touched\">\n              <span>\n                <i class=\"fa fa-check-circle\" style=\"color:green;\" *ngIf=\"formregister.controls.name.valid\">Firstname Valid</i>\n                <i class=\"fa fa-times-circle\" style=\"color:firebrick;\"  *ngIf=\"formregister.controls.name.invalid\">Firstname should be minimum 4 characters long.</i>\n\n              </span>\n          </div>\n\n          <input formControlName=\"lastname\" type=\"text\" class=\"form-control\"   placeholder=\"Enter lastname\" >\n          <div class=\"validations\" *ngIf=\"formregister.touched\">\n          <i class=\"fa fa-check-circle\" style=\"color:green;\"  *ngIf=\"formregister.controls.lastname.valid\"> Lastname Valid</i>\n                <i class=\"fa fa-times-circle\" style=\"color:firebrick;\" *ngIf=\"formregister.controls.lastname.invalid\"> Lastname should be minimum 4 characters long.</i>\n                </div>\n\n\n\n          <input formControlName=\"email\" type=\"text\" class=\"form-control\"  placeholder=\"Enter Email\" >\n          <div class=\"validations\" *ngIf=\"formregister.touched\">\n          <i class=\"fa fa-check-circle\" style=\"color:green;\" *ngIf=\"formregister.controls.email.valid\">Email Valid</i>\n          <i class=\"fa fa-times-circle\" style=\"color:firebrick;\" *ngIf=\"formregister.controls.email.invalid\"> Invalid Email</i>\n        </div>\n\n\n          <input formControlName=\"password\" type=\"text\" class=\"form-control\"  placeholder=\"Enter password\" >\n          <div class=\"validations\" *ngIf=\"formregister.touched\">\n          <i class=\"fa fa-check-circle\" style=\"color:green;\" *ngIf=\"formregister.controls.password.valid\">password Valid</i>\n          <i class=\"fa fa-times-circle\" style=\"color:firebrick;\" *ngIf=\"formregister.controls.password.invalid\"> Password should be minimum 8 characters long</i>\n        </div>\n      </form>\n      <button type=\"button\" class=\"btn btn-primary btnlogin\" (click)=\"registerUser()\">Register</button>\n\n      <!-- Remind Passowrd -->\n      <div class=\"formFooter\">\n      </div>\n\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _apitodo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apitodo.service */ "./src/app/apitodo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apitodoService, router, fb) {
        this.apitodoService = apitodoService;
        this.router = router;
        this.fb = fb;
        this.formregister = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
        });
    }
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.formregister.valid) {
            this.apitodoService.register(this.formregister.value).subscribe(function (res) {
                console.log('register respone ==>', res);
                _this.router.navigateByUrl('/login');
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_apitodo_service__WEBPACK_IMPORTED_MODULE_2__["ApitodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elyes\Desktop\Application-todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map