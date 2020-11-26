sap.ui.define([
    './BaseController'
], function(BaseController) {
    'use strict';
    
    return BaseController.extend('zmm.vehicle.catalog.controller.Vehicle', {
        onInit: function() {
            
        },
        onEditToggleButtonPress: function() {
            var oObjectPage = this.getView().byId('ObjPageLayout');
            var bFooterState = oObjectPage.getShowFooter();

            oObjectPage.setShowFooter(!bFooterState);
        }
    });
});