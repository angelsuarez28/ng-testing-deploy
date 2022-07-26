(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7Jw":
/*!*************************************************!*\
  !*** ./src/app/shared/visuals/visual.module.ts ***!
  \*************************************************/
/*! exports provided: VisualsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualsModule", function() { return VisualsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
































const ALL_MATERIAL_MODULES = [
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]
];
class VisualsModule {
}
VisualsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VisualsModule });
VisualsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VisualsModule_Factory(t) { return new (t || VisualsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            ...ALL_MATERIAL_MODULES
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisualsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisualsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    ...ALL_MATERIAL_MODULES
                ],
                exports: [
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    ...ALL_MATERIAL_MODULES
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/angel/Documentos/new_app/src/main.ts */"zUnb");


/***/ }),

/***/ "3Mpc":
/*!*******************************************!*\
  !*** ./src/app/core/map/map.component.ts ***!
  \*******************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/Map */ "bRsD");
/* harmony import */ var _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/views/MapView */ "phGV");
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "W9Wu");
/* harmony import */ var _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/layers/GraphicsLayer */ "zgsL");
/* harmony import */ var _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/symbols/SimpleMarkerSymbol */ "Tcmu");
/* harmony import */ var _arcgis_core_geometry_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @arcgis/core/geometry/Point */ "SuVq");
/* harmony import */ var _arcgis_core_rest_geometryService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @arcgis/core/rest/geometryService */ "DMBf");
/* harmony import */ var _arcgis_core_rest_support_DistanceParameters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @arcgis/core/rest/support/DistanceParameters */ "cjkr");
/* harmony import */ var _arcgis_core_config_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @arcgis/core/config.js */ "EyXx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/map-sidebar/map-sidebar.service */ "VMWZ");
/* harmony import */ var src_app_services_data_map_service_data_map_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/data-map-service/data-map-service.service */ "Xf1B");
/* harmony import */ var src_app_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/sidebar-menu-service/sidebar-menu.service */ "kzSU");


















const _c0 = ["mapViewNode"];
class MapComponent {
    constructor(zone, MapSidebarService, router, dataMapServiceService, SidebarService) {
        this.zone = zone;
        this.MapSidebarService = MapSidebarService;
        this.router = router;
        this.dataMapServiceService = dataMapServiceService;
        this.SidebarService = SidebarService;
        this.view = null;
        this.viewEsriMap = false;
        this.title = 'ng-cli';
        this.MapSidebarService.formDetailPage$.subscribe(response => {
            this.formDetailPage = response;
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationEnd"]))
            .subscribe(event => {
            this.actualURL = event['url'];
            // if (this.firstLoad) {
            //   this.firstLoad = false;
            // }
            if (event['url'] !== '/local-product' && event['url'] !== '/local-product/detail') {
                localStorage.removeItem('filterFormLocal');
            }
        });
    }
    initializeMap(layerArrived) {
        const container = this.mapViewEl.nativeElement;
        const LAYERS_MAP = {
            local: 'https://services9.arcgis.com/4RxTGB2fxcbFrzj3/ArcGIS/rest/services/categories_shops/FeatureServer/0',
        };
        const layerToMap = LAYERS_MAP[layerArrived];
        const municipalitieLayerUrl = 'https://services.arcgis.com/hkQNLKNeDVYBjvFE/ArcGIS/rest/services/Municipios/FeatureServer/0';
        this.municipalitieLayer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({
            url: municipalitieLayerUrl,
            visible: false
        });
        this.actualLayer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({
            url: layerToMap
        });
        this.myMap = new _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({
            basemap: "streets-vector",
            layers: [this.actualLayer]
        });
        this.graphicLayer = new _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({
            listMode: "hide"
        });
        this.myMap.add(this.graphicLayer);
        const view = new _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_3__["default"]({
            container,
            map: this.myMap,
            zoom: 10,
            center: [-17.93, 28.66]
        });
        this.view = view;
        return this.view.when();
    }
    ngOnInit() {
        const LAYERS_MAP = {
            local: 'https://services9.arcgis.com/4RxTGB2fxcbFrzj3/ArcGIS/rest/services/categories_shops/FeatureServer/0'
        };
        //DELETE OBSERVABLE
        // this.SidebarService.sidebarView$.subscribe(data => {
        //   this.changeLayer(data);
        // });
        _arcgis_core_config_js__WEBPACK_IMPORTED_MODULE_10__["default"].assetsPath = 'assets/';
        const layer = 'local'; //local layer by default but we need change this and do dinamically
        this.zone.runOutsideAngular(() => {
            this.initializeMap(layer).then(() => {
                this.zone.run(() => {
                });
            });
        });
        this.MapSidebarService.changeLayerOnMap$.subscribe(data => {
            this.view.graphics.removeAll();
        });
        this.initDataMap();
        this.filterLocalProductByCategorieOrTerm();
        // this.filterLocalProductLayerByLocation();
        this.orderByLocation();
        this.zoomToFeature();
    }
    initDataMap() {
        const localProductLayer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({
            url: 'https://services9.arcgis.com/4RxTGB2fxcbFrzj3/ArcGIS/rest/services/alojamientos_turisticos_shp/FeatureServer/0'
        });
        const queryLocal = localProductLayer.createQuery();
        localProductLayer.queryFeatures(queryLocal)
            .then((response) => {
            const features = response.features;
            //const dataMap = features.map((feature) => feature.attributes);
            this.shops = features;
            this.MapSidebarService.sendDataFromMap(features);
        });
    }
    filterLocalProductByCategorieOrTerm() {
        //LOCAL PRODUCT LAYER FILTER BY CATEGORIE
        this.MapSidebarService.filtersToMapChanges$.subscribe(data => {
            this.view.graphics.removeAll();
            const layerUrl = this.myMap.layers.items[0].url;
            if (data.length > 0) {
                this.graphicLayer.graphics.removeAll();
                this.view.zoom = 10;
                this.view.center = [-17.93, 28.66];
                //definitionExpression
                if (data[0] === 'All') {
                    this.actualLayer.definitionExpression = "1=1";
                }
                else {
                    this.actualLayer.definitionExpression = "MODALIDAD" + "=" + "'" + data[0] + "'";
                }
                //query shops
                let query = this.actualLayer.createQuery();
                if (data[0] === 'All' || (data[2])) {
                    query.where = "1=1";
                }
                else {
                    query.where = "MODALIDAD" + "=" + "'" + data[0] + "'";
                }
                this.actualLayer.queryFeatures(query)
                    .then((response) => {
                    if (data[2]) {
                        this.actualLayer.visible = false;
                        const allFeatures = response.features;
                        const filteredShops = allFeatures.filter(item => item.attributes.Categories.includes(data[0]));
                        const fields = response.fields;
                        this.layerByLocation = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({
                            fields,
                            objectIdField: "ObjectID",
                            geometryType: "point",
                            spatialReference: { wkid: 4326 },
                            source: filteredShops,
                        });
                        this.myMap.removeAll();
                        this.myMap.add(this.layerByLocation);
                        this.layerByLocation.visible = true;
                        this.shops = filteredShops;
                        this.MapSidebarService.sendDataFromMap(filteredShops);
                    }
                    else {
                        this.layerByLocation.visible = false;
                        this.myMap.add(this.actualLayer);
                        this.actualLayer.visible = true;
                        const features = response.features;
                        this.shops = features;
                        const sortBy = sessionStorage.getItem('sort');
                        if (!sortBy || sortBy === 'alpha') {
                            this.MapSidebarService.sendDataFromMap(features);
                        }
                    }
                });
            }
        });
    }
    orderByLocation() {
        // https://www.npmjs.com/package/@arcgis/webpack-plugin
        //webpack-plugin
        this.MapSidebarService.orderByLocationChanges$.subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aux = data;
            const geometrySrv = _arcgis_core_rest_geometryService__WEBPACK_IMPORTED_MODULE_8__;
            const url = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer';
            const newShopping = this.shops.map(shop => {
                const myPromise = new Promise((resolve, reject) => {
                    // setTimeout(() => {
                    const testPointUserInTazacorte = new _arcgis_core_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({
                        latitude: 28.65194343028121,
                        longitude: -17.94569064538474
                    });
                    const distParams = new _arcgis_core_rest_support_DistanceParameters__WEBPACK_IMPORTED_MODULE_9__["default"]();
                    //distParams.geometry1 = locationUserPoint;
                    distParams.geometry1 = testPointUserInTazacorte;
                    distParams.distanceUnit = 'kilometers';
                    distParams.geodesic = true;
                    let testingPoint = new _arcgis_core_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({
                        latitude: shop.geometry.latitude,
                        longitude: shop.geometry.longitude
                    });
                    distParams.geometry2 = testingPoint;
                    resolve(geometrySrv.distance(url, distParams));
                    // }, 1000);
                });
                myPromise.then((value) => {
                    shop.attributes['distance'] = value.toFixed(2);
                });
                return shop;
            });
            //TO CONTROL THE PROBLEM WITH ASYNC DATA DISTANCE ************
            setTimeout(() => {
                this.MapSidebarService.sendDataFromMap(newShopping);
            }, 2000);
        }));
    }
    zoomToFeature() {
        this.MapSidebarService.idItemToMap$.subscribe(data => {
            const layerUrl = this.myMap.layers.items[0].url;
            const query = this.actualLayer.createQuery();
            query.where = "id = '" + data + "'";
            this.actualLayer.queryFeatures(query)
                .then((response) => {
                const features = response.features[0];
                const Sym = new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    // type: "simple-marker",
                    color: "blue",
                    size: 8,
                    outline: {
                        width: 0.5,
                        color: "darkblue"
                    }
                });
                features.symbol = Sym;
                const graphs = this.view.graphics.items;
                const graphicsToDelete = graphs.filter(graph => graph.symbol.size !== 12);
                graphicsToDelete.forEach(item => {
                    this.view.graphics.remove(item);
                });
                //this.view.graphics.removeAll();
                this.view.graphics.add(features);
                this.view.goTo({
                    target: features,
                    zoom: 14
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.view) {
            this.view.destroy();
        }
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_13__["MapSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_map_service_data_map_service_service__WEBPACK_IMPORTED_MODULE_14__["DataMapServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_15__["SidebarMenuService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapViewEl = _t.first);
    } }, decls: 2, vars: 0, consts: [["mapViewNode", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    } }, styles: [".esri-view[_ngcontent-%COMP%] {\n    height: calc(100% - 64px);\n    width: 100%;\n    position: absolute;\n    outline: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzcmktdmlldyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_13__["MapSidebarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: src_app_services_data_map_service_data_map_service_service__WEBPACK_IMPORTED_MODULE_14__["DataMapServiceService"] }, { type: src_app_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_15__["SidebarMenuService"] }]; }, { mapViewEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mapViewNode', { static: true }]
        }] }); })();


/***/ }),

/***/ "6yyQ":
/*!****************************************!*\
  !*** ./src/app/pipes/paginate.pipe.ts ***!
  \****************************************/
/*! exports provided: PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/paginator-info-to-search/paginator-info-to-search.service */ "tx6e");



class PaginatePipe {
    constructor(paginatorInfoToSearchService) {
        this.paginatorInfoToSearchService = paginatorInfoToSearchService;
        this.count = 1;
    }
    transform(array, page_size, page_number) {
        if (!array.length)
            return [];
        if (page_size === 'all') {
            return array;
        }
        page_size = page_size || 20;
        page_number = page_number || 2;
        --page_number;
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
}
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_1__["PaginatorInfoToSearchService"])); };
PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginate", type: PaginatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paginate'
            }]
    }], function () { return [{ type: _services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_1__["PaginatorInfoToSearchService"] }]; }, null); })();


/***/ }),

/***/ "8rb8":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "header"], [1, "sectionLogo"], ["title", "Home", 1, "logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: [".header[_ngcontent-%COMP%] {\n    background-color: #F2F2F2;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: white; \n  background: url(https://i.ibb.co/9sT4bbF/shop-1.png) no-repeat;\n  background-color: #F2F2F2;\n  background-size: 50px;\n  background-position: center;\n  text-align: center;\n  box-shadow: none;\n  border: none;\n}\n\n.sectionLogo[_ngcontent-%COMP%] {\n    width: 5%;\n    height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osOERBQThEO0VBQzlELHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlOyBcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5pYmIuY28vOXNUNGJiRi9zaG9wLTEucG5nKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlY3Rpb25Mb2dvIHtcbiAgICB3aWR0aDogNSU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9bNl":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-photo-gallery/dialog-photo-gallery.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DialogPhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPhotoGalleryComponent", function() { return DialogPhotoGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






function DialogPhotoGalleryComponent_ngb_carousel_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DialogPhotoGalleryComponent_ngb_carousel_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Second slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DialogPhotoGalleryComponent_ngb_carousel_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Third slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DialogPhotoGalleryComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogPhotoGalleryComponent_ngb_carousel_2_ng_template_1_Template, 7, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogPhotoGalleryComponent_ngb_carousel_2_ng_template_2_Template, 7, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogPhotoGalleryComponent_ngb_carousel_2_ng_template_3_Template, 7, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogPhotoGalleryComponent {
    constructor(data) {
        this.data = data;
        this.slides = [
            { 'image': 'https://i.ibb.co/xjjt4Tb/1633640000-555805-1633640051-noticia-normal-recorte1.jpg' },
            { 'image': 'https://i.ibb.co/pPB8wZr/335192.jpg' },
            { 'image': 'https://i.ibb.co/NyycVKj/335101.jpg' },
            { 'image': 'https://i.ibb.co/KLZsyPK/335089.jpg' },
            { 'image': 'https://i.ibb.co/8NrTJ5M/c3306322cc33a3d8e5e4e01c48f689d8.jpg' }
        ];
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    ngOnInit() {
    }
    open() {
        alert('ese');
    }
}
DialogPhotoGalleryComponent.ɵfac = function DialogPhotoGalleryComponent_Factory(t) { return new (t || DialogPhotoGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogPhotoGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogPhotoGalleryComponent, selectors: [["app-dialog-photo-gallery"]], decls: 3, vars: 1, consts: [[1, "mat-typography"], [1, "mainContent"], [4, "ngIf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"]], template: function DialogPhotoGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogPhotoGalleryComponent_ngb_carousel_2_Template, 4, 0, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"]], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 -24px;\n    padding: 0 24px;\n    max-height: 85vh;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1waG90by1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7QUFJSCwrQ0FBK0M7Ozs7QUFDL0M7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlDQUFpQztBQUNyQyIsImZpbGUiOiJkaWFsb2ctcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1haW5Db250ZW50e1xuICAgIHdpZHRoOiA4MDBweDsgXG59ICovXG5cblxuXG4vKiBpcyBpbXBvcnRhdCB0aGUgbWF4LWhlaWdodCB0byAxM1wiIGRpc3BsYXlzICovXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgLTI0cHg7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICAgIG1heC1oZWlnaHQ6IDg1dmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogPhotoGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-photo-gallery',
                templateUrl: './dialog-photo-gallery.component.html',
                styleUrls: ['./dialog-photo-gallery.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Don0":
/*!*******************************************!*\
  !*** ./src/app/config/app-urls.config.ts ***!
  \*******************************************/
/*! exports provided: AppUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUrls", function() { return AppUrls; });
const AppUrls = {
    App: '',
    AppRoot: '/',
    // Local Product
    AppLocalProductList: 'local-product',
    AppLocalProductListRoot: '',
    AppLocalProductDetail: 'detail',
    AppLocalProductDetailRoot: '',
    // Walking Trails
    AppWalkingTrails: 'walking-trails',
    AppWalkingTrailsRoot: '',
    AppWalkingTrailsDetail: 'detail',
    AppWalkingTrailsDetailRoot: '',
    // Experience
    AppExperience: 'experience',
    AppExperienceRoot: '',
    // Portfolio
    AppPortfolio: 'portfolio',
    AppPortfolioRoot: '',
};


/***/ }),

/***/ "EE06":
/*!*****************************************************************!*\
  !*** ./src/app/+modules/home/components/home/home.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hgpz":
/*!*************************************************************!*\
  !*** ./src/app/core/menu-sidebar/menu-sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSidebarComponent", function() { return MenuSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/app-urls.config */ "Don0");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sidebar-menu-service/sidebar-menu.service */ "kzSU");
/* harmony import */ var src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/map-sidebar/map-sidebar.service */ "VMWZ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











const _c0 = function (a0, a1) { return { "sidebar-menu-off": a0, "sidebar-menu": a1 }; };
const _c1 = function (a0, a1) { return { "sidebar-menu-off-xs": a0, "sidebar-menu-xs": a1 }; };
const _c2 = function (a0, a1) { return { "sidebar-menu-off-sm": a0, "sidebar-menu-sm": a1 }; };
const _c3 = function (a0, a1) { return { "sidebar-menu-off-md": a0, "sidebar-menu-md": a1 }; };
class MenuSidebarComponent {
    constructor(SidebarService, router, activateRoute, MapSidebarService) {
        this.SidebarService = SidebarService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.MapSidebarService = MapSidebarService;
        this.show = false;
        this.links = [];
        this.changeRoute = false;
        this.includesDetailLocalP = false;
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(event => {
            switch (event['url']) {
                case '/local-product/detail':
                    this.includesDetailLocalP = true;
                    break;
                default:
                    this.includesDetailLocalP = false;
            }
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.changeRoute = true;
            }
            else {
                this.changeRoute = false;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            }
            ;
        });
    }
    ngOnInit() {
        this.SidebarService.sidebarView$.subscribe(changeShow => {
            if (!this.show) {
                this.show = true;
            }
            else {
                this.show = changeShow;
            }
        });
    }
    goToLocal() {
        if (!this.includesDetailLocalP) {
            this.router.navigate([src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__["AppUrls"].AppLocalProductList]);
        }
        const layer = 'local';
        this.sendInfo(layer);
    }
    sendInfo(layer) {
        if (this.changeRoute) {
            this.SidebarService.sidebarChange(true);
            this.MapSidebarService.changeLayer(layer);
        }
        else {
            this.SidebarService.sidebarChange(false);
        }
    }
}
MenuSidebarComponent.ɵfac = function MenuSidebarComponent_Factory(t) { return new (t || MenuSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidebarMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["MapSidebarService"])); };
MenuSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuSidebarComponent, selectors: [["app-menu-sidebar"]], decls: 2, vars: 16, consts: [[3, "ngClass", "ngClass.xs", "ngClass.sm", "ngClass.md"], ["mat-raised-button", "", "routerLinkActive", "active-route", 1, "button-local", 3, "click"]], template: function MenuSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_Template_button_click_1_listener() { return ctx.goToLocal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, !ctx.show, ctx.show))("ngClass.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, !ctx.show, ctx.show))("ngClass.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, !ctx.show, ctx.show))("ngClass.md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c3, !ctx.show, ctx.show));
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".sidebar-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 21%;\n  top: 0;\n}\n\n.sidebar-menu-off[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 0%;\n  top: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.sidebar-menu-xs[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 80%;\n  top: 0;\n}\n\n.sidebar-menu-off-xs[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 0%;\n  top: 0;\n}\n\n.sidebar-menu-sm[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 40%;\n  top: 0;\n}\n\n.sidebar-menu-off-sm[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 0%;\n  top: 0;\n}\n\n.sidebar-menu-md[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 30%;\n  top: 0;\n}\n\n.sidebar-menu-off-md[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 5%;\n  background-color: #F2F2F2;\n  z-index: 1;\n  right: 0%;\n  top: 0;\n}\n\n.divButton[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n  border-style: solid;\n  border-color: white;\n}\n\n.button-local[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: white; \n  background-color: #B6D93B;\n  background-size: 50px;\n  background-position: center;\n  text-align: center;\n  border-top-left-radius: 1px;\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 40px;\n}\n\n.buttonWalking[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: white; \n  background: url(https://i.ibb.co/1LpnQ3f/senderismo.png) no-repeat;\n  background-color: #B6D93B;\n  background-size: 50px;\n  background-position: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFVBQVU7RUFDVixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztFQUNULE1BQU07QUFDUjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsVUFBVTtFQUNWLE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixTQUFTO0VBQ1QsTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFVBQVU7RUFDVixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztFQUNULE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixVQUFVO0VBQ1YsTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7RUFDVCxNQUFNO0FBQ1I7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0VBQWtFO0VBQ2xFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJtZW51LXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAyMSU7XG4gIHRvcDogMDtcbn1cblxuLnNpZGViYXItbWVudS1vZmYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiAwO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZWJhci1tZW51LXhzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogODAlO1xuICB0b3A6IDA7XG59XG5cbi5zaWRlYmFyLW1lbnUtb2ZmLXhzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogMCU7XG4gIHRvcDogMDtcbn1cblxuLnNpZGViYXItbWVudS1zbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDQwJTtcbiAgdG9wOiAwO1xufVxuXG4uc2lkZWJhci1tZW51LW9mZi1zbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDAlO1xuICB0b3A6IDA7XG59XG5cbi5zaWRlYmFyLW1lbnUtbWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAzMCU7XG4gIHRvcDogMDtcbn1cblxuLnNpZGViYXItbWVudS1vZmYtbWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiAwO1xufVxuXG5cbi5kaXZCdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tbG9jYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZEOTNCO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG59XG5cbi5idXR0b25XYWxraW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlOyBcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5pYmIuY28vMUxwblEzZi9zZW5kZXJpc21vLnBuZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZEOTNCO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-sidebar',
                templateUrl: './menu-sidebar.component.html',
                styleUrls: ['./menu-sidebar.component.css']
            }]
    }], function () { return [{ type: _services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidebarMenuService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["MapSidebarService"] }]; }, null); })();


/***/ }),

/***/ "LyMJ":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-urls.config */ "Don0");





const routes = [
    { path: _config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__["AppUrls"].App, redirectTo: _config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__["AppUrls"].AppLocalProductList, pathMatch: 'full' },
    { path: _config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__["AppUrls"].AppLocalProductList, loadChildren: () => __webpack_require__.e(/*! import() | modules-local-product-local-product-module */ "modules-local-product-local-product-module").then(__webpack_require__.bind(null, /*! ../+modules/local-product/local-product.module */ "XmWs")).then(m => m.LocalProductModule) },
    { path: _config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__["AppUrls"].AppLocalProductDetail, loadChildren: () => __webpack_require__.e(/*! import() | modules-local-product-local-product-module */ "modules-local-product-local-product-module").then(__webpack_require__.bind(null, /*! ../+modules/local-product/local-product.module */ "XmWs")).then(m => m.LocalProductModule) },
];
class CoreRoutingModule {
}
CoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
CoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "OnFr":
/*!***********************************************************************************!*\
  !*** ./src/app/core/sidebar-content/sidebar-content/sidebar-content.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SidebarContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContentComponent", function() { return SidebarContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sidebar-menu-service/sidebar-menu.service */ "kzSU");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a0, a1) { return { "sidebar-content-off": a0, "sidebar-content": a1 }; };
const _c1 = function (a0, a1) { return { "sidebar-content-off-xs": a0, "sidebar-content-xs": a1 }; };
const _c2 = function (a0, a1) { return { "sidebar-content-off-sm": a0, "sidebar-content-sm": a1 }; };
const _c3 = function (a0, a1) { return { "sidebar-content-off-md": a0, "sidebar-content-md": a1 }; };
class SidebarContentComponent {
    constructor(SidebarService) {
        this.SidebarService = SidebarService;
        this.show = false;
    }
    ngOnInit() {
        this.SidebarService.sidebarView$.subscribe(changeShow => {
            if (!this.show) {
                this.show = true;
            }
            else {
                this.show = changeShow;
            }
        });
    }
}
SidebarContentComponent.ɵfac = function SidebarContentComponent_Factory(t) { return new (t || SidebarContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidebarMenuService"])); };
SidebarContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarContentComponent, selectors: [["app-sidebar-content"]], decls: 2, vars: 16, consts: [[3, "ngClass", "ngClass.xs", "ngClass.sm", "ngClass.md"]], template: function SidebarContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, !ctx.show, ctx.show))("ngClass.xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, !ctx.show, ctx.show))("ngClass.sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, !ctx.show, ctx.show))("ngClass.md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c3, !ctx.show, ctx.show));
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".sidebar-content-off[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  background: white;\n  right: -20%;\n  display: none;\n  top: 0;\n}\n\n.sidebar-content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 21%;\n  background-color: white;\n  z-index: 0;\n  right: 0%;\n  top: 0;\n}\n\n.sidebar-content-off-xs[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  background: white;\n  right: -80%;\n  display: none;\n  top: 0;\n}\n\n.sidebar-content-xs[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 80%;\n  background-color: white;\n  z-index: 0;\n  right: 0%;\n  top: 0;\n}\n\n.sidebar-content-off-sm[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  background: white;\n  right: -40%;\n  display: none;\n  top: 0;\n}\n\n.sidebar-content-sm[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 40%;\n  background-color: white;\n  z-index: 0;\n  right: 0%;\n  top: 0;\n}\n\n.sidebar-content-off-md[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  background: white;\n  right: -30%;\n  display: none;\n  top: 0;\n}\n\n.sidebar-content-md[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 30%;\n  background-color: white;\n  z-index: 0;\n  right: 0%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxNQUFNO0FBQ1I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsU0FBUztFQUNULE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixTQUFTO0VBQ1QsTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxNQUFNO0FBQ1IiLCJmaWxlIjoic2lkZWJhci1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1jb250ZW50LW9mZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcmlnaHQ6IC0yMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMDtcbn1cblxuLnNpZGViYXItY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMDtcbiAgcmlnaHQ6IDAlO1xuICB0b3A6IDA7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQtb2ZmLXhzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICByaWdodDogLTgwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdG9wOiAwO1xufVxuXG4uc2lkZWJhci1jb250ZW50LXhzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAwO1xuICByaWdodDogMCU7XG4gIHRvcDogMDtcbn1cblxuLnNpZGViYXItY29udGVudC1vZmYtc20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHJpZ2h0OiAtNDAlO1xuICBkaXNwbGF5OiBub25lO1xuICB0b3A6IDA7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQtc20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDA7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiAwO1xufVxuXG4uc2lkZWJhci1jb250ZW50LW9mZi1tZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcmlnaHQ6IC0zMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMDtcbn1cblxuLnNpZGViYXItY29udGVudC1tZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMDtcbiAgcmlnaHQ6IDAlO1xuICB0b3A6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar-content',
                templateUrl: './sidebar-content.component.html',
                styleUrls: ['./sidebar-content.component.css']
            }]
    }], function () { return [{ type: src_app_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidebarMenuService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _visuals_visual_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visuals/visual.module */ "+7Jw");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/paginate.pipe */ "6yyQ");
/* harmony import */ var _components_dialog_photo_gallery_dialog_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dialog-photo-gallery/dialog-photo-gallery.component */ "9bNl");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _visuals_visual_module__WEBPACK_IMPORTED_MODULE_2__["VisualsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"].forRoot()
        ], _visuals_visual_module__WEBPACK_IMPORTED_MODULE_2__["VisualsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _components_dialog_photo_gallery_dialog_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["DialogPhotoGalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _visuals_visual_module__WEBPACK_IMPORTED_MODULE_2__["VisualsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"]], exports: [_visuals_visual_module__WEBPACK_IMPORTED_MODULE_2__["VisualsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _components_dialog_photo_gallery_dialog_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["DialogPhotoGalleryComponent"]],
                providers: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _visuals_visual_module__WEBPACK_IMPORTED_MODULE_2__["VisualsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_6__["MatCarouselModule"].forRoot()
                ],
                exports: [
                    _visuals_visual_module__WEBPACK_IMPORTED_MODULE_2__["VisualsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/header/header.component */ "8rb8");
/* harmony import */ var _core_map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/map/map.component */ "3Mpc");
/* harmony import */ var _core_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/menu-sidebar/menu-sidebar.component */ "Hgpz");
/* harmony import */ var _core_sidebar_content_sidebar_content_sidebar_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/sidebar-content/sidebar-content/sidebar-content.component */ "OnFr");








class AppComponent {
    constructor(mediaObserver) {
        this.mediaObserver = mediaObserver;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs' ? true : false;
        });
    }
    ngOnDestroy() {
        this.mediaSub.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["fxLayout", "column"], ["fxLayout", "row", 2, "width", "100%"], [2, "width", "100%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-menu-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sidebar-content");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _core_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], _core_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"], _core_sidebar_content_sidebar_content_sidebar_content_component__WEBPACK_IMPORTED_MODULE_6__["SidebarContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }]; }, null); })();


/***/ }),

/***/ "VMWZ":
/*!*************************************************************!*\
  !*** ./src/app/services/map-sidebar/map-sidebar.service.ts ***!
  \*************************************************************/
/*! exports provided: MapSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSidebarService", function() { return MapSidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class MapSidebarService {
    constructor() {
        // filtersToMapChange$ = new EventEmitter<String[]>();
        this.changeLayerMap$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idItemToMap$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataToLocalProductLayer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.dataToLocalProductLayer$ = this.dataToLocalProductLayer.asObservable();
        this.changeLayerOnMap = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('local');
        this.changeLayerOnMap$ = this.changeLayerOnMap.asObservable();
        this.filtersToMapChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.filtersToMapChanges$ = this.filtersToMapChanges.asObservable();
        this.orderByLocation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.orderByLocationChanges$ = this.orderByLocation.asObservable();
        this.filtersToMapChangesWalking = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.filtersToMapChangesWalking$ = this.filtersToMapChangesWalking.asObservable();
        this.formDetailPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.formDetailPage$ = this.formDetailPage.asObservable();
    }
    filtersToMap(data) {
        this.filtersToMapChanges.next(data);
    }
    orderDataByLocation(data) {
        this.orderByLocation.next(data);
    }
    filtersToMapWalking(data) {
        this.filtersToMapChangesWalking.next(data);
    }
    detailPage(data) {
        this.formDetailPage.next(data);
    }
    changeLayer(data) {
        this.changeLayerOnMap.next(data);
    }
    sendDataFromMap(data) {
        this.dataToLocalProductLayer.next(data);
    }
}
MapSidebarService.ɵfac = function MapSidebarService_Factory(t) { return new (t || MapSidebarService)(); };
MapSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapSidebarService, factory: MapSidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapSidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Xf1B":
/*!***********************************************************************!*\
  !*** ./src/app/services/data-map-service/data-map-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: DataMapServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMapServiceService", function() { return DataMapServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataMapServiceService {
}
DataMapServiceService.ɵfac = function DataMapServiceService_Factory(t) { return new (t || DataMapServiceService)(); };
DataMapServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataMapServiceService, factory: DataMapServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataMapServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/sidebar-menu-service/sidebar-menu.service */ "kzSU");
/* harmony import */ var _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+modules/home/components/home/home.component */ "EE06");
/* harmony import */ var _services_data_map_service_data_map_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data-map-service/data-map-service.service */ "Xf1B");
/* harmony import */ var src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/map-sidebar/map-sidebar.service */ "VMWZ");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_8__["SidebarMenuService"], _services_data_map_service_data_map_service_service__WEBPACK_IMPORTED_MODULE_10__["DataMapServiceService"], src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_11__["MapSidebarService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_12__["GoogleMapsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_12__["GoogleMapsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_12__["GoogleMapsModule"]
                ],
                providers: [_services_sidebar_menu_service_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_8__["SidebarMenuService"], _services_data_map_service_data_map_service_service__WEBPACK_IMPORTED_MODULE_10__["DataMapServiceService"], src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_11__["MapSidebarService"]],
                exports: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
;


/***/ }),

/***/ "kzSU":
/*!***********************************************************************!*\
  !*** ./src/app/services/sidebar-menu-service/sidebar-menu.service.ts ***!
  \***********************************************************************/
/*! exports provided: SidebarMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenuService", function() { return SidebarMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SidebarMenuService {
    constructor() {
        this.sidebarView = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sidebarView$ = this.sidebarView.asObservable();
        //Change to Subject 
        this.sidebarViewChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    sidebarChange(show) {
        this.sidebarView.next(show);
    }
}
SidebarMenuService.ɵfac = function SidebarMenuService_Factory(t) { return new (t || SidebarMenuService)(); };
SidebarMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarMenuService, factory: SidebarMenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "osYl":
/*!******************************************************************************!*\
  !*** ./src/app/core/modals/google-map-dialog/google-map-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: GoogleMapDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapDialogComponent", function() { return GoogleMapDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function GoogleMapDialogComponent_map_marker_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "map-marker", 9);
} if (rf & 2) {
    const marker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", marker_r1.position);
} }
class GoogleMapDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.travelModel = 'DRIVING';
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.mapOptions = {
            center: { lat: 38.9987208, lng: -77.2538699 },
            zoom: 14
        };
        this.marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
        this.marker2 = { position: { lat: 39.7, lng: -76.0 } };
        this.marker3 = { position: { lat: 37.9, lng: -76.8 } };
        this.markers = [this.marker1, this.marker2, this.marker3];
    }
    onClose() {
        this.dialogRef.close(true);
    }
    ngOnInit() {
        //https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-coordinateFormatter.html#fromUtm
    }
    getBounds(markers) {
        let north;
        let south;
        let east;
        let west;
        for (const marker of markers) {
            // set the coordinates to marker's lat and lng on the first run.
            // if the coordinates exist, get max or min depends on the coordinates.
            north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
            south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
            east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
            west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
        }
        ;
        const bounds = { north, south, east, west };
        return bounds;
    }
    calculateRoute() {
        this.directionsService.route({
            //origin: { lat: this.data.dataKey.latitude, lng: this.data.dataKey.longitude },
            origin: { lat: 28.637702659757593, lng: -17.895406657412668 },
            destination: { lat: this.data.shop.latitude, lng: this.data.shop.longitude },
            travelMode: google.maps.TravelMode[this.travelModel],
        }, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.directionsDisplay.setDirections(response);
            }
            else {
                alert('Could not display directions due to: ' + status);
            }
        });
        const indicatorsEle = document.getElementById('indicators');
        this.directionsDisplay.setPanel(indicatorsEle);
    }
    travelModeChange(e) {
        this.travelModel = e.value;
        this.calculateRoute();
    }
    ngAfterViewInit() {
        const bounds = this.getBounds(this.markers);
        this.map.googleMap.fitBounds(bounds);
        this.directionsDisplay.setMap(this.map.googleMap);
        this.calculateRoute();
    }
}
GoogleMapDialogComponent.ɵfac = function GoogleMapDialogComponent_Factory(t) { return new (t || GoogleMapDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
GoogleMapDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleMapDialogComponent, selectors: [["app-google-map-dialog"]], viewQuery: function GoogleMapDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
    } }, decls: 13, vars: 3, consts: [[1, "googleMap", 3, "options"], [3, "position", 4, "ngFor", "ngForOf"], ["id", "indicators"], ["aria-label", "Select an option", 1, "tavelModeSwitch", 3, "change"], ["value", "DRIVING", 1, "drivingOption", 3, "checked"], ["value", "BICYCLING", 1, "bicyclingOption"], ["value", "WALKING"], ["align", "center"], ["mat-button", "", "mat-dialog-close", ""], [3, "position"]], template: function GoogleMapDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "google-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GoogleMapDialogComponent_map_marker_1_Template, 1, 1, "map-marker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GoogleMapDialogComponent_Template_mat_radio_group_change_3_listener($event) { return ctx.travelModeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Driving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bicycling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Walking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.mapOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
    } }, directives: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapMarker"]], styles: [".map-container{\n    width: 70% !important;\n    height: 100%;\n    margin-top: 10px;\n}\n\n.googleMap[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\n\n#indicators[_ngcontent-%COMP%]{\n    overflow-y: scroll;\n    max-height: 500px;\n}\n\n.tavelModeSwitch[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.drivingOption[_ngcontent-%COMP%]{\n    margin-right: 10px;\n}\n\n.bicyclingOption[_ngcontent-%COMP%]{\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Imdvb2dsZS1tYXAtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hcC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZ29vZ2xlTWFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI2luZGljYXRvcnN7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4udGF2ZWxNb2RlU3dpdGNoe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHJpdmluZ09wdGlvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5iaWN5Y2xpbmdPcHRpb257XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-google-map-dialog',
                templateUrl: './google-map-dialog.component.html',
                styleUrls: ['./google-map-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, { map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"]]
        }] }); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "8rb8");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "3Mpc");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-sidebar/menu-sidebar.component */ "Hgpz");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core-routing.module */ "LyMJ");
/* harmony import */ var _sidebar_content_sidebar_content_sidebar_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-content/sidebar-content/sidebar-content.component */ "OnFr");
/* harmony import */ var _modals_google_map_dialog_google_map_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/google-map-dialog/google-map-dialog.component */ "osYl");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");











class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_6__["CoreRoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"], _sidebar_content_sidebar_content_sidebar_content_component__WEBPACK_IMPORTED_MODULE_7__["SidebarContentComponent"], _modals_google_map_dialog_google_map_dialog_component__WEBPACK_IMPORTED_MODULE_8__["GoogleMapDialogComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_routing_module__WEBPACK_IMPORTED_MODULE_6__["CoreRoutingModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsModule"]], exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"], _sidebar_content_sidebar_content_sidebar_content_component__WEBPACK_IMPORTED_MODULE_7__["SidebarContentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"], _sidebar_content_sidebar_content_sidebar_content_component__WEBPACK_IMPORTED_MODULE_7__["SidebarContentComponent"], _modals_google_map_dialog_google_map_dialog_component__WEBPACK_IMPORTED_MODULE_8__["GoogleMapDialogComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_routing_module__WEBPACK_IMPORTED_MODULE_6__["CoreRoutingModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsModule"]
                ],
                exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"], _sidebar_content_sidebar_content_sidebar_content_component__WEBPACK_IMPORTED_MODULE_7__["SidebarContentComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "tx6e":
/*!***************************************************************************************!*\
  !*** ./src/app/services/paginator-info-to-search/paginator-info-to-search.service.ts ***!
  \***************************************************************************************/
/*! exports provided: PaginatorInfoToSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorInfoToSearchService", function() { return PaginatorInfoToSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class PaginatorInfoToSearchService {
    constructor() {
        this.dataInfoToSearch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.dataInfoToSearch$ = this.dataInfoToSearch.asObservable();
        this.handlePage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.handlePage$ = this.handlePage.asObservable();
        this.isHandle$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    infoToLocalProduct(data) {
        this.dataInfoToSearch.next(data);
    }
    isHandlePage(data) {
        this.handlePage.next(data);
    }
}
PaginatorInfoToSearchService.ɵfac = function PaginatorInfoToSearchService_Factory(t) { return new (t || PaginatorInfoToSearchService)(); };
PaginatorInfoToSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginatorInfoToSearchService, factory: PaginatorInfoToSearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorInfoToSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vGbJ":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
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
webpackEmptyAsyncContext.id = "vGbJ";

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map