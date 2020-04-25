/* Magic Mirror Test config sample ipWhitelist
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */


var port = process.env.PORT || 8080;

var config = {
	port: port,
	ipWhitelist: ["x.x.x.x"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	electronOptions: {
		webPreferences: {
			nodeIntegration: true,
		},
	},

	modules: [
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
