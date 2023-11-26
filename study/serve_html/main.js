const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs"); //fs����� ��û

//HTML ���Ͽ� ���εǴ� ���Ʈ ����
const routeMap = {
  "/": "views/index.html",
};
http.createServer((req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  if (routeMap[req.url]) {
    fs.readFile(routeMap[req.url], (error, data) => {
      //���ε� ���ϵ��� ������ �б�
      res.write(data); //���� �������� ����
      res.end();
    });
  } else {
    res.end("<h1>Sorry, not found</h1>");
  }
});

app.listen(port);
console.log(`The server has started and is listening on port number : ${port}`);
