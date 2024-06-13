/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comincture/vanitha_mam_applications/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
