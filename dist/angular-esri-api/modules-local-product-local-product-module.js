(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-local-product-local-product-module"],{

/***/ "5fQp":
/*!******************************************************************************************************!*\
  !*** ./src/app/+modules/local-product/components/local-product-list/local-product-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LocalProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalProductListComponent", function() { return LocalProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/app-urls.config */ "Don0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_modals_google_map_dialog_google_map_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/modals/google-map-dialog/google-map-dialog.component */ "osYl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/map-sidebar/map-sidebar.service */ "VMWZ");
/* harmony import */ var src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/to-detail-page-service/to-detail-page.service */ "JwAH");
/* harmony import */ var src_app_services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/paginator-info-to-search/paginator-info-to-search.service */ "tx6e");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../pipes/paginate.pipe */ "6yyQ");
























const _c0 = ["paginator"];
function LocalProductListComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Choose a type of shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hotelera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Extrahotelera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LocalProductListComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LocalProductListComponent_mat_form_field_10_Template_mat_form_field_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onSearchTerm($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Search by term");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LocalProductListComponent_section_34_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r7.distance, " km");
} }
function LocalProductListComponent_section_34_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-panel-title", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LocalProductListComponent_section_34_p_7_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_section_34_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.zoomToMap(item_r7.ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_section_34_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.goToDetail(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_section_34_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.openDialog(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.NOMBRE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r7.distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Municipalitie: ", item_r7.MUNICIPIO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Places: ", item_r7.PLAZAS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Phone: ", item_r7.TELEFONO, "");
} }
class LocalProductListComponent {
    constructor(router, mapSidebarService, toDetailService, paginatorInfoToSearchService, dialog) {
        this.router = router;
        this.mapSidebarService = mapSidebarService;
        this.toDetailService = toDetailService;
        this.paginatorInfoToSearchService = paginatorInfoToSearchService;
        this.dialog = dialog;
        this.show = false;
        this.formDetailPage = false;
        this.hasDataOnForm = false;
        this.routesArray = [];
        this.pageSizeOptions = [5, 10, 20];
        this.ordersData = [];
        this.changePage = true;
        this.byMunicipalitie = true;
        this.isSubmit = false;
        this.canChangePage = true;
        this.sortByLocation = false;
        this.isTermSelected = true;
        this.orderAlphaOption = {
            label: 'Alpha', value: 'alpha', checked: true
        };
        this.orderLocationOption = {
            label: 'Location', value: 'location', checked: false
        };
        this.localForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            shopping: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            muni: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            radioLocationMuni: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            test: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            byTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.mapSidebarService.formDetailPage$.subscribe(response => {
            this.formDetailPage = response;
        });
        if (!this.formDetailPage) {
            localStorage.removeItem('filterFormLocal');
            localStorage.removeItem('pageChangeClick');
            localStorage.removeItem('page');
        }
        this.getDataShops();
        if (!this.formDetailPage) {
            this.localForm.controls['shopping'].setValue('All');
            const shoppingValue = this.localForm.get('shopping').value;
            const radioButtonsValue = this.localForm.get('radioLocationMuni').value;
            const filterFormLocal = [shoppingValue];
            localStorage.setItem('filterFormLocal', JSON.stringify(filterFormLocal));
        }
        const formFilter = JSON.parse(localStorage.getItem('filterFormLocal'));
        if (formFilter && this.formDetailPage) {
            this.localForm.controls['shopping'].setValue(formFilter[0]);
        }
    }
    getDataShops() {
        this.mapSidebarService.dataToLocalProductLayer$.subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.originalData = data;
            const localSPage = localStorage.getItem('page');
            if (localSPage && this.formDetailPage) {
                this.pageNumber = Number(localSPage);
            }
            else {
                this.pageNumber = 1;
            }
            this.pageSize = 20;
            const dataMap = data.map((feature) => feature.attributes);
            this.orderShops(dataMap);
        }));
    }
    orderShops(dataMap) {
        this.sortBy = sessionStorage.getItem('sort');
        if (this.sortBy === 'location') {
            this.localProductShops = [];
            setTimeout(() => {
                this.sortLocation(dataMap);
            }, 2000);
        }
        else if (!this.sortBy || this.sortBy === 'alpha') {
            const orderDataMap = dataMap.sort((a, b) => {
                return (a.NOMBRE > b.NOMBRE) ? 1 : -1;
            });
            this.localProductShops = orderDataMap;
            this.onSearchShops = orderDataMap;
        }
    }
    handlePage(event) {
        this.pageSize = event.pageSize;
        this.pageNumber = event.pageIndex + 1;
        if (this.changePage) {
            localStorage.setItem('page', this.pageNumber);
        }
        else {
            this.changePage = true;
        }
        this.paginatorInfoToSearchService.isHandle$.emit(true);
    }
    pageChange() {
        const pageChangeClick = [this.paginator.pageIndex, this.pageNumber];
        localStorage.setItem('pageChangeClick', JSON.stringify(pageChangeClick));
    }
    goToDetail(event) {
        const shopToEmit = this.localProductShops.filter(shop => shop.NOMBRE === event.NOMBRE);
        this.toDetailService.shopToDetailPage.next(shopToEmit);
        this.router.navigate([src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_2__["AppUrls"].AppLocalProductList, 'detail']);
    }
    zoomToMap(event) {
        this.mapSidebarService.idItemToMap$.emit(event);
    }
    onSearchChange(filterValue) {
        this.changePage = false;
        if (filterValue === '') {
            this.localProductShops = this.onSearchShops;
            const pageChangeClick = JSON.parse(localStorage.getItem('pageChangeClick'));
            if (pageChangeClick) {
                this.paginator.pageIndex = pageChangeClick[0];
                this.pageNumber = pageChangeClick[1];
            }
        }
        else {
            const shopsFilteredBySearch = this.onSearchShops.filter(shop => shop.NOMBRE.toLowerCase().includes(filterValue.toLowerCase()));
            this.localProductShops = shopsFilteredBySearch;
            this.paginator.firstPage();
        }
    }
    onSearchTerm(event) {
    }
    onSubmit() {
        if (this.isTermSelected) {
            const byTermValue = this.localForm.get('byTerm').value;
            const dataFilter = [this.removeAccents(byTermValue), this.pageNumber, true];
            this.mapSidebarService.filtersToMap(dataFilter);
        }
        else {
            const shoppingValue = this.localForm.get('shopping').value;
            const dataFilter = [shoppingValue, this.pageNumber, false];
            this.mapSidebarService.filtersToMap(dataFilter);
            const filterFormLocal = [shoppingValue];
            localStorage.setItem('filterFormLocal', JSON.stringify(filterFormLocal));
        }
        if (this.sortBy === 'location') {
            this.obtainLocation();
        }
        this.paginator.firstPage();
    }
    removeAccents(byTermValue) {
        return byTermValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    obtainLocation() {
        this.orderAlphaOption.checked = false;
        this.orderLocationOption.checked = true;
        this.returnFormDetail = false;
        this.getCoordinates();
        setTimeout(() => {
            if (this.coordinatesLocation) {
                this.sortByLocation = true;
                sessionStorage.setItem('sort', 'location');
                this.mapSidebarService.orderDataByLocation(this.coordinatesLocation);
            }
            else {
                alert('There is a problem with the coordinates');
            }
        }, 500);
    }
    getCoordinates() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        let coordinates;
        function success(pos) {
            const crd = pos.coords;
            coordinates = {
                latitude: crd.latitude,
                longitude: crd.longitude
            };
        }
        ;
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }
        ;
        navigator.geolocation.getCurrentPosition(success, error, options);
        setTimeout(() => {
            if (coordinates) {
                this.coordinatesLocation = coordinates;
            }
        }, 500);
    }
    orderBy(event) {
    }
    orderByAlpha() {
        this.orderAlphaOption.checked = true;
        this.orderLocationOption.checked = false;
        this.localProductShops = [];
        setTimeout(() => {
            const data = this.onSearchShops;
            const orderDataMap = data.sort((a, b) => {
                return (a.NOMBRE > b.NOMBRE) ? 1 : -1;
            });
            this.localProductShops = orderDataMap;
            sessionStorage.setItem('sort', 'alpha');
            //firtPage not respond without setTimeout
            this.paginator.firstPage();
        }, 1000);
    }
    sortLocation(dataMap) {
        const orderDataMap = dataMap.sort((a, b) => {
            return parseFloat(a.distance) - parseFloat(b.distance);
        });
        this.localProductShops = orderDataMap;
        this.onSearchShops = dataMap;
        if (!this.returnFormDetail) {
            this.paginator.firstPage();
        }
    }
    byCatOrTerm(event) {
        if (event.value === "term") {
            this.isTermSelected = true;
        }
        else {
            this.isTermSelected = false;
        }
    }
    openDialog(item) {
        if (this.coordinatesLocation) {
            this.openMapDialog(this.coordinatesLocation, item);
        }
        else {
            this.getCoordinates();
            setTimeout(() => {
                this.openMapDialog(this.coordinatesLocation, item);
            }, 500);
        }
    }
    openMapDialog(coordinates, item) {
        let final;
        this.originalData.map((shop) => {
            if (shop.attributes.NOMBRE === item.NOMBRE) {
                final = shop;
            }
        });
        const dialogRef = this.dialog.open(src_app_core_modals_google_map_dialog_google_map_dialog_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapDialogComponent"], {
            width: '60%',
            data: {
                dataKey: coordinates,
                shop: {
                    latitude: final.geometry.latitude,
                    longitude: final.geometry.longitude
                }
            }
            //TO PHONE SCREEN:
            // maxWidth: '100vw',
            // maxHeight: '100vh',
            // height: '100%',
            // width: '100%',
            // panelClass: 'full-screen-modal'
        });
    }
    ngAfterViewInit() {
        const page = localStorage.getItem('page');
        const updatePage = Number(page);
        if (this.formDetailPage && updatePage) {
            setTimeout(() => {
                this.paginator.pageIndex = updatePage - 1;
                this.returnFormDetail = this.formDetailPage;
                this.mapSidebarService.detailPage(false);
                this.canChangePage = false;
            }, 1000);
        }
        else {
            setTimeout(() => {
                this.canChangePage = false;
            }, 1000);
        }
    }
    ngOnDestroy() {
        this.mapSidebarService.detailPage(false);
    }
}
LocalProductListComponent.ɵfac = function LocalProductListComponent_Factory(t) { return new (t || LocalProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["MapSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_7__["ToDetailPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_8__["PaginatorInfoToSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
LocalProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LocalProductListComponent, selectors: [["app-local-product"]], viewQuery: function LocalProductListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 36, vars: 20, consts: [[1, "local-product-panel"], [3, "formGroup"], ["aria-label", "Select an option", 3, "change"], ["value", "category"], ["value", "term", 3, "checked"], ["class", "selectorFilterTypeOfShop", "appearance", "fill", 4, "ngIf"], ["style", "width:90%", "class", "example-full-width", 3, "input", 4, "ngIf"], ["mat-flat-button", "", 3, "click"], [1, "example-full-width", 2, "width", "90%", 3, "input"], ["matInput", "", "placeholder", "", 1, "searchShops"], [1, "listItems"], [1, "paginator-container"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 2, "height", "fit-content", 3, "click"], [1, "grid"], [3, "checked", "value"], ["aria-label", "Select page", 3, "disabled", "length", "pageSize", "pageSizeOptions", "page", "click"], ["paginator", ""], [4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "selectorFilterTypeOfShop"], ["formControlName", "shopping", 3, "disabled"], ["value", "All"], ["value", "Hotelera"], ["value", "Extrahotelera"], ["formControlName", "byTerm", "matInput", "", "placeholder", "", 1, "searchShops"], [1, "card-tittle"], [4, "ngIf"], [1, "detailAndZoomButtons"], ["title", "Zoom to Shop", "mat-raised-button", "", 1, "zoomButton", 3, "click"], ["title", "Detail", "mat-raised-button", "", 1, "detailButton", 3, "click"], ["title", "Route", "mat-raised-button", "", 1, "googleMapButton", 3, "click"]], template: function LocalProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LocalProductListComponent_Template_mat_radio_group_change_4_listener($event) { return ctx.byCatOrTerm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "By Categorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "By Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LocalProductListComponent_mat_form_field_9_Template, 10, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LocalProductListComponent_mat_form_field_10_Template, 4, 0, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Consult");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LocalProductListComponent_Template_mat_form_field_input_13_listener($event) { return ctx.onSearchChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_Template_button_click_24_listener() { return ctx.orderByAlpha(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocalProductListComponent_Template_button_click_28_listener() { return ctx.obtainLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-paginator", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function LocalProductListComponent_Template_mat_paginator_page_32_listener($event) { return ctx.handlePage($event); })("click", function LocalProductListComponent_Template_mat_paginator_click_32_listener() { return ctx.pageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LocalProductListComponent_section_34_Template, 18, 5, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.localForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isTermSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTermSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.orderAlphaOption.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.orderAlphaOption.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.orderAlphaOption.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.orderLocationOption.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.orderLocationOption.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.orderLocationOption.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.canChangePage)("length", ctx.localProductShops.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](35, 16, ctx.localProductShops, ctx.pageSize, ctx.pageNumber));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelTitle"]], pipes: [_pipes_paginate_pipe__WEBPACK_IMPORTED_MODULE_21__["PaginatePipe"]], styles: [".local-product-panel[_ngcontent-%COMP%] {\n      position: absolute;\n      right: 0%;\n      width: 95%;\n      height: 100%;\n      background: white;\n      top: 0;\n      z-index: 1;\n  }\n  \n  .checkbox-allergens[_ngcontent-%COMP%] {\n      margin-right: 10px;\n  }\n  \n  .listItems[_ngcontent-%COMP%] {\n      overflow-y: scroll;\n      height: 650px;\n  }\n  \n  .selectorFilterMuni[_ngcontent-%COMP%] {\n      width: 80%;\n      margin-top: 5%;\n  }\n  \n  .selectorFilterTypeOfShop[_ngcontent-%COMP%] {\n      width: 80%;\n      margin-top: 5%;\n  }\n  \n  form[_ngcontent-%COMP%] {\n      height: 30%;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      align-items: center;\n  }\n  \n  \n  \n    .mat-paginator-page-size ng-star-inserted {\n      display: none !important;\n  }\n  \n    .mat-paginator-page-size-label {\n      display: none !important;\n  }\n  \n  .searchByLocation[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n  }\n  \n  .selectDistanceText[_ngcontent-%COMP%] {\n      margin: 0 0 0px;\n      margin-top: 10px;\n  }\n  \n  .radioButtonLocation[_ngcontent-%COMP%] {\n      margin-left: 10px;\n  }\n  \n  .detailAndZoomButtons[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n  }\n  \n  .zoomButton[_ngcontent-%COMP%] {\n      color: white;\n      background: url(https://i.ibb.co/VwkZBkF/loupe.png) no-repeat;\n      background-color: white;\n      background-size: 20px;\n      background-position: center;\n      text-align: center;\n      height: 30px;\n      width: 0px !important;\n      min-width: unset !important;\n  }\n  \n  .detailButton[_ngcontent-%COMP%] {\n      color: white;\n      background: url(https://i.ibb.co/8cYy8yV/list-1.png) no-repeat;\n      background-color: white;\n      background-size: 20px;\n      background-position: center;\n      text-align: center;\n      height: 30px;\n      margin-left: 10px;\n      width: 0px !important;\n      min-width: unset !important;\n  }\n  \n  .googleMapButton[_ngcontent-%COMP%] {\n    color: white;\n    background: url(https://i.ibb.co/q9vHMM5/ruta-1.png) no-repeat;\n    background-color: white;\n    background-size: 20px;\n    background-position: center;\n    text-align: center;\n    height: 30px;\n    margin-left: 10px;\n    width: 0px !important;\n    min-width: unset !important;\n}\n  \n    .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n      border-color: #B6D93B;\n  }\n  \n    .mat-radio-button.mat-accent .mat-radio-inner-circle {\n      color: #B6D93B;\n      background-color: #B6D93B;\n  }\n  \n    .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n      background-color: #B6D93B;\n  }\n  \n    .mat-accent .mat-slider-track-fill {\n      color: #B6D93B;\n      background-color: #B6D93B !important;\n  }\n  \n    .mat-slider-thumb-label {\n      color: #B6D93B;\n      background-color: #B6D93B !important;\n  }\n  \n    .mat-slider-thumb {\n      color: #B6D93B;\n      background-color: #B6D93B !important;\n  }\n  \n    .mat-accent .mat-slider-thumb-label {\n      color: #B6D93B;\n      background-color: #B6D93B !important;\n  }\n  \n  .card-tittle[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n  }\n  \n  .description-panel[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      align-items: flex-end;\n  }\n  \n  .paginator-container[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: row;\n      align-items: center; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO01BQ0ksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVO01BQ1YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixNQUFNO01BQ04sVUFBVTtFQUNkOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGFBQWE7RUFDakI7O0VBRUE7TUFDSSxVQUFVO01BQ1YsY0FBYztFQUNsQjs7RUFFQTtNQUNJLFVBQVU7TUFDVixjQUFjO0VBQ2xCOztFQUVBO01BQ0ksV0FBVztNQUNYLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsc0JBQXNCO01BQ3RCLG1CQUFtQjtFQUN2Qjs7RUFFQTs7O0tBR0c7O0VBRUY7TUFDRyx3QkFBd0I7RUFDNUI7O0VBRUM7TUFDRyx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxlQUFlO01BQ2YsZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix5QkFBeUI7RUFDN0I7O0VBRUE7TUFDSSxZQUFZO01BQ1osNkRBQTZEO01BQzdELHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsMkJBQTJCO01BQzNCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1oscUJBQXFCO01BQ3JCLDJCQUEyQjtFQUMvQjs7RUFFQTtNQUNJLFlBQVk7TUFDWiw4REFBOEQ7TUFDOUQsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLDJCQUEyQjtFQUMvQjs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4REFBOEQ7SUFDOUQsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7RUFFRztNQUNHLHFCQUFxQjtFQUN6Qjs7RUFFQztNQUNHLGNBQWM7TUFDZCx5QkFBeUI7RUFDN0I7O0VBRUM7TUFDRyx5QkFBeUI7RUFDN0I7O0VBRUM7TUFDRyxjQUFjO01BQ2Qsb0NBQW9DO0VBQ3hDOztFQUVDO01BQ0csY0FBYztNQUNkLG9DQUFvQztFQUN4Qzs7RUFFQztNQUNHLGNBQWM7TUFDZCxvQ0FBb0M7RUFDeEM7O0VBRUM7TUFDRyxjQUFjO01BQ2Qsb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7RUFDbEM7O0VBRUE7TUFDSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHFCQUFxQjtFQUN6Qjs7RUFFQTtNQUNJLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6ImxvY2FsLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAubG9jYWwtcHJvZHVjdC1wYW5lbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMCU7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB0b3A6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuY2hlY2tib3gtYWxsZXJnZW5zIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmxpc3RJdGVtcyB7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBoZWlnaHQ6IDY1MHB4O1xuICB9XG4gIFxuICAuc2VsZWN0b3JGaWx0ZXJNdW5pIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuICBcbiAgLnNlbGVjdG9yRmlsdGVyVHlwZU9mU2hvcCB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbiAgXG4gIGZvcm0ge1xuICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCNkQ5M0I7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH0gKi9cbiAgXG4gICA6Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIG5nLXN0YXItaW5zZXJ0ZWQge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAgOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zZWFyY2hCeUxvY2F0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuc2VsZWN0RGlzdGFuY2VUZXh0IHtcbiAgICAgIG1hcmdpbjogMCAwIDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5yYWRpb0J1dHRvbkxvY2F0aW9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAuZGV0YWlsQW5kWm9vbUJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIFxuICAuem9vbUJ1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmliYi5jby9Wd2taQmtGL2xvdXBlLnBuZykgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5kZXRhaWxCdXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5pYmIuY28vOGNZeTh5Vi9saXN0LTEucG5nKSBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmdvb2dsZU1hcEJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kuaWJiLmNvL3E5dkhNTTUvcnV0YS0xLnBuZykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xufVxuICBcbiAgIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI0I2RDkzQjtcbiAgfVxuICBcbiAgIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RDkzQjtcbiAgfVxuICBcbiAgIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RDkzQjtcbiAgfVxuICBcbiAgIDo6bmctZGVlcCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RDkzQiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RDkzQiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RDkzQiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAgOjpuZy1kZWVwIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAjQjZEOTNCO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RDkzQiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FyZC10aXR0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgXG4gIC5kZXNjcmlwdGlvbi1wYW5lbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuXG4gIC5wYWdpbmF0b3ItY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-local-product',
                templateUrl: './local-product-list.component.html',
                styleUrls: ['./local-product-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["MapSidebarService"] }, { type: src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_7__["ToDetailPageService"] }, { type: src_app_services_paginator_info_to_search_paginator_info_to_search_service__WEBPACK_IMPORTED_MODULE_8__["PaginatorInfoToSearchService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['paginator']
        }] }); })();


/***/ }),

/***/ "JwAH":
/*!***************************************************************************!*\
  !*** ./src/app/services/to-detail-page-service/to-detail-page.service.ts ***!
  \***************************************************************************/
/*! exports provided: ToDetailPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDetailPageService", function() { return ToDetailPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ToDetailPageService {
    constructor() {
        this.shopToDetailPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.shopToDetailPage$ = this.shopToDetailPage.asObservable();
    }
}
ToDetailPageService.ɵfac = function ToDetailPageService_Factory(t) { return new (t || ToDetailPageService)(); };
ToDetailPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToDetailPageService, factory: ToDetailPageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDetailPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XmWs":
/*!****************************************************************!*\
  !*** ./src/app/+modules/local-product/local-product.module.ts ***!
  \****************************************************************/
/*! exports provided: LocalProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalProductModule", function() { return LocalProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/local-product-list/local-product-list.component */ "5fQp");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/local-product-detail/local-product-detail.component */ "fKYo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









// import { VisualsModule } from 'src/app/shared/visuals/visuals.module';
//Because is the "local-product" page  ----> "RouterModule.forChild(["   in imports 
class LocalProductModule {
}
LocalProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LocalProductModule });
LocalProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LocalProductModule_Factory(t) { return new (t || LocalProductModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"]
                },
                {
                    path: 'detail',
                    component: _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]
                }
            ]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            // VisualsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LocalProductModule, { declarations: [_components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"], _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        // VisualsModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"], _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _components_local_product_list_local_product_list_component__WEBPACK_IMPORTED_MODULE_3__["LocalProductListComponent"]
                        },
                        {
                            path: 'detail',
                            component: _components_local_product_detail_local_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["LocalProductDetailComponent"]
                        }
                    ]),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                    // VisualsModule
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "fKYo":
/*!**********************************************************************************************************!*\
  !*** ./src/app/+modules/local-product/components/local-product-detail/local-product-detail.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LocalProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalProductDetailComponent", function() { return LocalProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/app-urls.config */ "Don0");
/* harmony import */ var src_app_shared_components_dialog_photo_gallery_dialog_photo_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/dialog-photo-gallery/dialog-photo-gallery.component */ "9bNl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/to-detail-page-service/to-detail-page.service */ "JwAH");
/* harmony import */ var src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/map-sidebar/map-sidebar.service */ "VMWZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class LocalProductDetailComponent {
    constructor(router, toDetailService, mapSidebarService, dialog) {
        this.router = router;
        this.toDetailService = toDetailService;
        this.mapSidebarService = mapSidebarService;
        this.dialog = dialog;
        this.images = [944, 1011].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    ngOnInit() {
        this.toDetailService.shopToDetailPage$.subscribe(shop => {
            this.shopShowed = shop[0];
        });
        this.mapSidebarService.detailPage(true);
    }
    goToBackPage() {
        this.router.navigate([src_app_config_app_urls_config__WEBPACK_IMPORTED_MODULE_1__["AppUrls"].AppLocalProductList]);
    }
    openDialog() {
        // width: '100vw',
        // maxWidth: '100vw',
        this.dialog.open(src_app_shared_components_dialog_photo_gallery_dialog_photo_gallery_component__WEBPACK_IMPORTED_MODULE_2__["DialogPhotoGalleryComponent"], {
            width: '800px'
            // maxWidth: '100vw',
        });
    }
}
LocalProductDetailComponent.ɵfac = function LocalProductDetailComponent_Factory(t) { return new (t || LocalProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_4__["ToDetailPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["MapSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
LocalProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalProductDetailComponent, selectors: [["app-local-product-detail"]], decls: 14, vars: 4, consts: [[1, "local-product-detail"], [3, "click"], [1, "attributesShop"], ["mat-button", "", 3, "click"]], template: function LocalProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalProductDetailComponent_Template_button_click_1_listener() { return ctx.goToBackPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalProductDetailComponent_Template_button_click_12_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Open dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.NOMBRE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.PLAZAS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.TELEFONO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shopShowed.MUNICIPIO);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".local-product-detail[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0%;\n    width: 100%;\n    height: 100%;\n    background: white;\n    top: 0;\n    z-index: 1;\n  }\n\n  .attributesShop[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCIiwiZmlsZSI6ImxvY2FsLXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYWwtcHJvZHVjdC1kZXRhaWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmF0dHJpYnV0ZXNTaG9we1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-local-product-detail',
                templateUrl: './local-product-detail.component.html',
                styleUrls: ['./local-product-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_to_detail_page_service_to_detail_page_service__WEBPACK_IMPORTED_MODULE_4__["ToDetailPageService"] }, { type: src_app_services_map_sidebar_map_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["MapSidebarService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-local-product-local-product-module.js.map