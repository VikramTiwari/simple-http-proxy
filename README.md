# Simple Proxy Server

This project allows you to expose your local service over your network. Beware that this might open it to external network attacks. I would suggest using [TailScale](https://tailscale.com/) to form a private mesh network for your devices.

## How does it work

- Source code is fairly simple. It piggybacks on the fantastic `node-http-proxy` package. It just move everything to configuration and I don't have to worry about code.
- Start with determining what service you want to open to your network. Generally it's a web like service. The project also supports websocket based services too.
- Get the port that the service is running on `PORT_OF_SERVICE`
- Get the port at which you want to expose your service `PORT_TO_SERVE_ON`
- Now start the project using npm `PORT_OF_SERVICE=8000 PORT_TO_SERVE_ON=8080 npm start`
- Now you can access the service on this new port

## When do I need this

- If you are using tailscale, it already does a fantastic job of identifying services running on local host and exposing it to your private network.
- This project is for those pesky services that don't want to be exposed to network outside of localhost. If you don't know about a service like that, you probably aren't running a service like that, so you most probably don't need this project.
