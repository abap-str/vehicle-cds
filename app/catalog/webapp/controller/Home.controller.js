sap.ui.define([
	"./BaseController",
	"sap/f/library",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
], function (BaseController, fLibrary, Filter, FilterOperator, Sorter, MessageBox) {
	"use strict";

	return BaseController.extend("zmm.vehicle.catalog.controller.Home", {
		onInit: function () {
			this.oView = this.getView();
			this.oRouter = this.getOwnerComponent().getRouter();
			// this._bDescendingSort = false;
			// this.oProductsTable = this.oView.byId("productsTable");
		},

		onListItemPress: function(oEvent) {
			// var oParent = this.oView.getParent(),
			// 	oLayout = oParent.getParent(),
				// oBindingContext = oEvent.getSource().getBindingContext(),
				// sObject = oBindingContext.getObject(),
			var	sVehicleId = oEvent.getSource().getBindingContext().getObject().ID;
				
			this.oRouter.navTo('vehicle', {
				vehicleId: sVehicleId,
				layout: fLibrary.LayoutType.TwoColumnsMidExpanded
			});
		}

		// onSearch: function (oEvent) {
		// 	var oTableSearchState = [],
		// 		sQuery = oEvent.getParameter("query");

		// 	if (sQuery && sQuery.length > 0) {
		// 		oTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
		// 	}

		// 	this.oProductsTable.getBinding("items").filter(oTableSearchState, "Application");
		// },

		// onAdd: function () {
		// 	MessageBox.information("This functionality is not ready yet.", {title: "Aw, Snap!"});
		// },

		// onSort: function () {
		// 	this._bDescendingSort = !this._bDescendingSort;
		// 	var oBinding = this.oProductsTable.getBinding("items"),
		// 		oSorter = new Sorter("Name", this._bDescendingSort);

		// 	oBinding.sort(oSorter);
		// }
	});
});
