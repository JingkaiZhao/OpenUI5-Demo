// sap.ui.core.UIComponent.extend("jzhao.test.sample.Component", {
// 	metadata: {
// 		name: "TestSample",
// 		version: "1.0.0",
// 		includes: ["css/styles.css"],
// 		dependencies: {
// 			libs: ["sap.m"]
// 		},
// 		rootView: "jzhao.test.sample.view.App"
// 	}
// });
sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
], function(UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("jzhao.test.sample.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

    }
  });

});