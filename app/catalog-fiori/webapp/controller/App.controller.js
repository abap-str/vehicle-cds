sap.ui.define([
    './BaseController',
    'sap/f/library'
], function(BaseController, fioriLibrary) {
    'use strict';
    
    return BaseController.extend('zmm.vehicle.catalog.controller.App', {
        onInit: function() {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();
            this.oRouter.attachRouteMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function(oEvent) {
            var sRouteName = oEvent.getParameter('name'),
                oArguments = oEvent.getParameter('arguments');
            
                this.currentRouteName = sRouteName;
        },
        
        onStateChange: function(oEvent) {
            var sLayout = oEvent.getParameter('layout'),
                iColumns = oEvent.getParameter('maxColumnCount'),
                oModel = this.getView().getModel('appSettings');
            
            // if (iColumns === 1) {
            //     oModel.setProperty('/smallScreenMode', true);
            // } else {
            //     oModel.setProperty('/smallScreenMode', false);
            //     if (sLayout === fioriLibrary.LayoutType.OneColumn) {
            //         oModel.setProperty('/layout', fioriLibrary.LayoutType.TwoColumnsMidExpanded);
            //     }
            // }
        },

        onExit: function() {
            this.oRouter.detachRouteMatched(this.onRouteMatched, this);
        }
    });
});