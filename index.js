import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // Home page
  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    return res.end(`
      <form action="/create-user" method="POST">
        <label>Name:</label>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    `);
  }

  // Handle form submit
  if (url === "/create-user" && method === "POST") {
    const dataChunk = [];

    req.on("data", (chunk) => {
        log("Chunk received:", chunk);
      dataChunk.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(dataChunk).toString(); // username=John
      const username = parsedBody.split("=")[1];

      console.log("Username:", decodeURIComponent(username));

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });

    return;
  }

  // Not found
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Page Not Found</h1>");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
