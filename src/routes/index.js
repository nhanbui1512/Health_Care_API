const RootRoute = require("./RootRoute");
const RealtimeRoute = require("./RealtimeRoute");
const AuthRoute = require("./auth.route");
const deviceRoute = require("./device.route");
const fallAlertRoute = require("./fallAlert.route");
const heartRateRoute = require("./heartRateReading.route");
const statisticRoute = require("./statistic.route");

/**
 * @swagger
 *components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
 */

function routes(app) {
  app.use("/", RootRoute);
  app.use("/realtime", RealtimeRoute);
  app.use("/auth", AuthRoute);
  app.use("/devices", deviceRoute);
  app.use("/fall-alerts", fallAlertRoute);
  app.use("/heart-rates", heartRateRoute);
  app.use("/statistics", statisticRoute);
}

module.exports = routes;
