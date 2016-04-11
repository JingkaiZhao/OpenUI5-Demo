sap.ui.core.UIComponent.extend("jzhao.test.sample.Component", {
	metadata: {
		name: "TestSample",
		version: "1.0.0",
		includes: ["css/styles.css"],
		dependencies: {
			libs: ["sap.m"]
		},
		rootView: "jzhao.test.sample.view.App"
	}
});
