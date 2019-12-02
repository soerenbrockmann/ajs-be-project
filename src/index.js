import http from "http";
import getData from "./module";

class Server {
  constructor() {
    this.port = 3000;
    this.initServer();
    this.start();
  }

  initServer() {
    this.server = http.createServer((request, response) => {
      response.writeHead(200, {
        "Content-Type": "text/json",
        "Access-Control-Allow-Origin": "*"
      });

      this.routes(response, request);
    });
  }

  routes(response, request) {
    const { url, method } = request;
    if (url === "/reports") {
      if (method === "GET") {
        const data = getData();
        const parsedData = JSON.stringify(data);
        response.end(parsedData);
      }
      if (method === "POST") {
        response.end("Ok");
      }
    } else {
      response.end("404 - Route not found");
    }
  }

  start() {
    this.server.listen(this.port, () =>
      console.log(`Server is listening on port ${this.port}`)
    );
  }
}

new Server();
