const http = require("http");

const handler = (req, res) => {
  const cookie = req.headers["cookie"];

  if (cookie && cookie.includes("sid")) {
    res.write("welcome Back");
    res.end();
    return;
  }

  res.setHeader("Set-Cookie", "sid=1;  HttpOnly; Secure;");
  res.write("welcome");
  res.end();
};

const server = http.createServer(handler);
server.listen(3000, () => console.log("Server is running on port 3000"));
