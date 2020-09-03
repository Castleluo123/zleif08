jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"zleif08/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"zleif08/test/integration/pages/Worklist",
		"zleif08/test/integration/pages/Object",
		"zleif08/test/integration/pages/NotFound",
		"zleif08/test/integration/pages/Browser",
		"zleif08/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zleif08.view."
	});

	sap.ui.require([
		"zleif08/test/integration/WorklistJourney",
		"zleif08/test/integration/ObjectJourney",
		"zleif08/test/integration/NavigationJourney",
		"zleif08/test/integration/NotFoundJourney",
		"zleif08/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});