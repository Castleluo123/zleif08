sap.ui.define([
		"zleif08/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zleif08.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);