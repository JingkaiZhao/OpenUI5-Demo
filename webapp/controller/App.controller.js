(function() {
	"use strict";

	sap.ui.controller("jzhao.test.sample.controller.App", {

		onInit: function() {
			this.oModel = new sap.ui.model.json.JSONModel({
				newTodo: "",
				todos: [
					{
						title: "Start this app",
						completed: true
					},
					{
						title: "Learn OpenUI5",
						completed: false
					}
				],
				someCompleted: true,
				completedCount: 1
			});
			this.initEditable();
			this.getView().setModel(this.oModel);
			var oJSONModel = new sap.ui.model.json.JSONModel({
				items: [
					{
						label: "Create",
						key: "create-key"
					},
					{
						label: "Delete",
						key: "delete-key"
					},
					{
						label: "Change",
						key: "change-key"
					}
				]
			});
			this.getView().setModel(oJSONModel, "actions");
			// this.getRoute("object").attachRouteMatched(this.onFunc);
		},

		initEditable: function() {
			var oJSONModel = new sap.ui.model.json.JSONModel({
				smartFieldEditable: false,
				refObjectEditable: false
			});
			this.getView().setModel(oJSONModel, "viewConfigurations");
		},

		onFunc: function(oEvent) {
			this.getModel("viewConfigurations").setProperty("/fieldControl", oResponse);
		},

		onActionPress: function(oEvent) {
			var oButton = oEvent.getSource();
			console.log(oButton.data("actionKey"));
		},

		addTodo: function() {
			var aTodos = this.oModel.getObject("/todos");
			aTodos.unshift({
				title: this.oModel.getProperty("/newTodo"),
				completed: false
			});
			this.oModel.setProperty("/newTodo", "");
			this.oModel.refresh();
		},

		toggleCompleted: function() {
			var iCompletedCount = 0;
			var aTodos = this.oModel.getObject("/todos");
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					iCompletedCount++;
				}
			}
			this.setCompletedCount(iCompletedCount);
			this.oModel.refresh();
		},

		clearCompleted: function() {
			var aTodos = this.oModel.getObject("/todos");
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}
			this.setCompletedCount(0);
			this.oModel.refresh();
		},

		setCompletedCount: function(iCount) {
			this.oModel.setProperty("/completedCount", iCount);
			this.oModel.setProperty("/someCompleted", iCount > 0);
			this.oModel.refresh();
		}

	});

})();
