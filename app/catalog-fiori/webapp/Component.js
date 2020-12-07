sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel',
	'sap/f/library'
], function(UIComponent, JSONModel, fioriLibrary) {
	'use strict';

	return UIComponent.extend('zmm.vehicle.catalog.Component', {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			var oModel = new JSONModel();
			this.setModel(oModel, 'appSettings');

			var oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
		},

		_onBeforeRouteMatched: function(oEvent) {
			var oSettingModel = this.getModel('appSettings'),
				sLayout = oEvent.getParameters().arguments.layout;

			if (!sLayout) {
				sLayout = fioriLibrary.LayoutType.OneColumn;
			}

			oSettingModel.setProperty('/layout', sLayout);
		}
	});
});