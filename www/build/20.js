webpackJsonp([20],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleEventosPageModule", function() { return DetalleEventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_eventos__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleEventosPageModule = (function () {
    function DetalleEventosPageModule() {
    }
    return DetalleEventosPageModule;
}());
DetalleEventosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detalle_eventos__["a" /* DetalleEventosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_eventos__["a" /* DetalleEventosPage */]),
        ],
    })
], DetalleEventosPageModule);

//# sourceMappingURL=detalle-eventos.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetalleEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleEventosPage = (function () {
    function DetalleEventosPage(navCtrl, navParams, menu, alertCtrl, database, zone, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.zone = zone;
        this.storage = storage;
        this.conteo = 0;
        this.evento = {};
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.eventos = {};
        this.infoEvento$ = this.database.list('eventos');
        this.menu1Active();
        this.accion = navParams.get("accion");
        if (this.accion == 1) {
            this.evento = navParams.get("evento");
            this.id = navParams.get("id");
            this.nombreEvento = this.evento.nombre;
            this.descEvento = this.evento.descripcion;
            this.fechaEvento = this.evento.fecha;
            this.horaEvento = this.evento.hora;
            this.selectedEstado = this.evento.estado;
            this.url = "img/eventos/" + this.evento.nombre + "/" + this.evento.url;
            var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
            var imageRef = storageRef.child(this.url);
            imageRef.getDownloadURL().then(function (url) {
                return _this.eventoImagen = url;
            });
            this.ocultar2 = !this.ocultar2;
            this.conteo = 1;
        }
        else {
            this.ocultar1 = !this.ocultar1;
        }
    }
    DetalleEventosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('nombre').then(function (data) {
            _this.nombre = data;
        });
    };
    DetalleEventosPage.prototype.menu1Active = function () {
        this.menu.enable(true, 'menu2');
        this.menu.enable(false, 'menu1');
    };
    DetalleEventosPage.prototype.seleccionarFoto = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
        this.readPhoto(this.file);
        this.conteo = parseInt(e.target.files.length);
    };
    DetalleEventosPage.prototype.readPhoto = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.zone.run(function () {
                var path = e.target;
                _this.eventoImagen = path.result;
            });
        };
        reader.readAsDataURL(file);
    };
    DetalleEventosPage.prototype.validarDatos = function () {
        this.campos = null;
        if (this.conteo < 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: this.nombre + " el registro debe tener minímo (1) de archivo",
                buttons: ['Aceptar']
            });
            alert_1.present();
            return false;
        }
        if (this.nombreEvento == null) {
            this.campos = "Nombre, ";
        }
        if (this.nombreEvento == "") {
            this.campos = "Nombre, ";
        }
        if (this.fechaEvento == null) {
            if (this.campos == null) {
                this.campos = "Fecha, ";
            }
            else {
                this.campos = this.campos + "Fecha, ";
            }
        }
        if (this.horaEvento == null) {
            if (this.campos == null) {
                this.campos = "Hora, ";
            }
            else {
                this.campos = this.campos + "Hora, ";
            }
        }
        if (this.descEvento == null) {
            if (this.campos == null) {
                this.campos = "Descripción, ";
            }
            else {
                this.campos = this.campos + "Descripción, ";
            }
        }
        if (this.descEvento == "") {
            if (this.campos == null) {
                this.campos = "Descripción, ";
            }
            else {
                this.campos = this.campos + "Descripción, ";
            }
        }
        if (this.selectedEstado == null) {
            if (this.campos == null) {
                this.campos = "Estado, ";
            }
            else {
                this.campos = this.campos + "Estado, ";
            }
        }
        if (this.campos != null) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Verifica los datos ingresados, los campos " + this.campos + "son requeridos",
                buttons: ['Aceptar']
            });
            alert_2.present();
            return false;
        }
        else {
            return true;
        }
    };
    DetalleEventosPage.prototype.modificar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert_3 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de Modificar éste Evento?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo de modificar Evento
                            var name = "";
                            if (_this.file != undefined) {
                                var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
                                //this.url = this.file.name;
                                var imageRefBorrar = storageRef.child("" + _this.url);
                                name = _this.file.name;
                                imageRefBorrar.delete().then(function (snapshot) {
                                });
                                var imageRef = storageRef.child("img/eventos/" + _this.nombreEvento + "/" + _this.file.name);
                                imageRef.put(_this.file).then(function (snapshot) {
                                });
                            }
                            else {
                                name = _this.evento.url;
                            }
                            _this.infoEvento$.update(_this.id, {
                                nombre: _this.nombreEvento,
                                descripcion: _this.descEvento,
                                fecha: _this.fechaEvento,
                                hora: _this.horaEvento,
                                estado: _this.selectedEstado,
                                url: name
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha modificado exitosamente el Evento",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaEventosPage");
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    DetalleEventosPage.prototype.guardar = function () {
        var _this = this;
        if (this.validarDatos() == true) {
            var alert_4 = this.alertCtrl.create({
                title: 'Confirmación',
                subTitle: "¿" + this.nombre + " está seguro de  Agregar éste Evento?",
                buttons: [
                    {
                        text: 'Si',
                        role: 'si',
                        handler: function () {
                            console.log('si');
                            //aqui va el codigo para guardar el evento
                            var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
                            _this.url = _this.file.name;
                            var imageRef = storageRef.child("img/eventos/" + _this.nombreEvento + "/" + _this.file.name);
                            imageRef.put(_this.file).then(function (snapshot) {
                            });
                            console.log("nombre" + _this.url);
                            _this.infoEvento$.push({
                                nombre: _this.nombreEvento,
                                descripcion: _this.descEvento,
                                fecha: _this.fechaEvento,
                                hora: _this.horaEvento,
                                estado: _this.selectedEstado,
                                url: _this.url
                            });
                            //notificacion de accion realizada
                            var alert = _this.alertCtrl.create({
                                title: 'Notifiación',
                                subTitle: "Se ha creado exitosamente el Evento",
                                buttons: [{
                                        text: 'Aceptar',
                                        role: 'Aceptar',
                                        handler: function () {
                                            _this.navCtrl.setRoot("ListaEventosPage");
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                            console.log('no');
                        }
                    }
                ]
            });
            alert_4.present();
        }
    };
    DetalleEventosPage.prototype.cancelar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            subTitle: "¿" + this.nombre + " está seguro que desea salir sin Guardar?",
            buttons: [
                {
                    text: 'Si',
                    role: 'si',
                    handler: function () {
                        _this.nombreEvento = " ";
                        _this.descEvento = " ";
                        _this.fechaEvento = null;
                        _this.horaEvento = null;
                        _this.navCtrl.setRoot("ListaEventosPage");
                    }
                },
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    return DetalleEventosPage;
}());
DetalleEventosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle-eventos',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-eventos\detalle-eventos.html"*/'<!--\n\n  Generated template for the DetalleEventosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title class="titulo">Evento</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label floating>*Nombre:</ion-label>\n\n                    <ion-input \n\n                      [(ngModel)]="nombreEvento" \n\n                      name="nombre" \n\n                      type="text" \n\n                      autocapitalize="off" \n\n                      required>\n\n                    </ion-input>\n\n                  </ion-item>\n\n            </ion-col> \n\n            <ion-col>\n\n                <ion-item class="label">\n\n                    <ion-label>*Fecha:</ion-label>\n\n                    <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="fechaEvento"></ion-datetime>                  </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n                <ion-item>\n\n                        <ion-label floating>*Descripción:</ion-label>\n\n                        <ion-textarea\n\n                          [(ngModel)]="descEvento" \n\n                          name="descripcion" \n\n                          type="textArea" \n\n                          autocapitalize="off" \n\n                          class="area"\n\n                          >\n\n                        </ion-textarea>\n\n                      </ion-item>\n\n                   \n\n                      <br>\n\n                      <div class="divFoto">\n\n                     <ion-label >Foto: </ion-label>\n\n                     <input type="file" (change)="seleccionarFoto($event)"  accept=".jpg, .jpeg, .png" >\n\n                     <div class="preview">\n\n                       <img class="imgPremio" [src]="eventoImagen">\n\n                     </div>\n\n                    </div>   \n\n                   \n\n        </ion-col> \n\n        <ion-col>\n\n            <ion-item>\n\n                <ion-label>*Hora:</ion-label>\n\n                <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="horaEvento"></ion-datetime>\n\n              </ion-item>\n\n                      \n\n                     \n\n                     <ion-item>\n\n                            <ion-label floating>*Estado:</ion-label>\n\n                            <ion-select [(ngModel)]="selectedEstado">\n\n                              <ion-option ><h2>Activo</h2></ion-option>\n\n                              <ion-option ><h2>Inactivo</h2></ion-option>\n\n                            </ion-select>\n\n                    </ion-item> \n\n                    <div class="text-center">\n\n                            <button *ngIf="ocultar1" class="guardar" (click)="guardar()"><ion-icon name="checkmark"></ion-icon> Guardar</button>\n\n                            <button *ngIf="ocultar2" class="modificar" (click)="modificar()"><ion-icon name="checkmark"></ion-icon> Modificar</button>\n\n                            <button class="cancelar" (click)="cancelar()"><ion-icon name="close"></ion-icon> Cancelar</button>               \n\n                            \n\n                    </div>\n\n        </ion-col> \n\n        </ion-row>\n\n  \n\n    \n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\Centro\src\pages\detalle-eventos\detalle-eventos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], DetalleEventosPage);

//# sourceMappingURL=detalle-eventos.js.map

/***/ })

});
//# sourceMappingURL=20.js.map