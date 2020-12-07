sap.ui.define([
    './BaseController',
    '../model/formatter'
], function(BaseController, formatter) {
    'use strict';
    
    return BaseController.extend('zmm.vehicle.catalog.controller.Vehicle', {
        formatter: formatter,

        onInit: function() {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();
            this.oModel = this.oOwnerComponent.getModel();

            this.oRouter.getRoute('vehicle').attachPatternMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function(oEvent) {
            this._vehicleId = oEvent.getParameter('arguments').vehicleId || this._vehicleId || '0';
            this.getView().bindElement({
                path: '/Vehicles/' + this._vehicleId
            });
        },

        onEditToggleButtonPress: function() {
            var oObjectPage = this.getView().byId('ObjPageLayout');
            var bFooterState = oObjectPage.getShowFooter();

            oObjectPage.setShowFooter(!bFooterState);
        }
    });
});