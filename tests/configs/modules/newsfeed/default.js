/* Magic Mirror Test config newsfeed module
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */


var port = process.env.PORT || 8080;

var config = {
	port: port,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 12,
	units: "metric",
	electronOptions: {
		webPreferences: {
			nodeIntegration: true,
		},
	},

	modules: [
		{

			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Rodrigo Ramirez Blog",
						url: "http://localhost:" + port + "/tests/configs/data/feed_test_rodrigoramirez.xml"
					},
				]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
