const http = require("http");

const url = process.argv[2];

if (!url) {
  console.log("Please provide a URL as an argument.");
  process.exit();
}

const options = new URL(url);

const handler = (res) => {
  const data = [];

  res.on("data", (chunk) => {
    data.push(chunk.toString());
  });

  res.on("end", () => {
    console.log(data.join(""));
  });
};

const req = http.request(options, handler);

req.end();
