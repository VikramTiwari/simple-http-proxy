const httpProxy = require("http-proxy");

const { SERVICE = `http`, DOMAIN = `localhost` } = process.env;

switch (SERVICE) {
  case `ws`: {
    // For websocket server proxying
    const { PORT_OF_SERVICE = 12345, PORT_TO_SERVE_ON = 54321 } = process.env;
    console.log(
      `Proxying websocket server on ${DOMAIN}:${PORT_OF_SERVICE} to port ${PORT_TO_SERVE_ON}`
    );
    httpProxy
      .createServer({ target: `ws://${DOMAIN}:${PORT_OF_SERVICE}`, ws: true })
      .listen(PORT_TO_SERVE_ON);
    break;
  }

  case `http`: {
    // For http server proxying
    const { PORT_OF_SERVICE = 8000, PORT_TO_SERVE_ON = 8080 } = process.env;
    console.log(
      `Proxying http server on port ${DOMAIN}:${PORT_OF_SERVICE} to port ${PORT_TO_SERVE_ON}`
    );
    httpProxy
      .createServer({ target: `http://${DOMAIN}:${PORT_OF_SERVICE}` })
      .listen(PORT_TO_SERVE_ON);
    break;
  }

  default:
    break;
}
