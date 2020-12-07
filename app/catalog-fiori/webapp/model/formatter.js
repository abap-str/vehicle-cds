sap.ui.define([
    'sap/ui/core/format/NumberFormat',
], function(NumberFormat) {
    'use strict';
    
    var formatter = {
        imageUrl: function (sUrl) {
			if (sUrl){
				return  sap.ui.require.toUrl(sUrl);
			} else {
				return undefined;
			}
        },
        
        price: function (sValue) {
			var numberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 2,
				minFractionDigits: 2,
				groupingEnabled: true,
				groupingSeparator: ".",
				decimalSeparator: ","
			});
			return numberFormat.format(sValue);
		},
    }

    return formatter;
});