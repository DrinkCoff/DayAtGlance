/* Magic Mirror Test config default weather
 *
 * By fewieden https://github.com/fewieden
 *
 * MIT Licensed.
 */


var port = process.env.PORT || 8080;

let config = {
	port: port,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	electronOptions: {
		webPreferences: {
			nodeIntegration: true,
		},
	},

	modules: [
		{
			module: "weather",
			position: "bottom_bar",
			config: {
				location: "Munich",
				apiKey: "fake key",
				initialLoadDelay: 3000,
				useBeaufort: false,
				showWindDirectionAsArrow: true,
				showHumidity: true,
				roundTemp: true,
				degreeLabel: true
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
