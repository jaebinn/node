const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs"); //fs모듈의 요청

//HTML 파일에 매핑되는 라우트 설정
const routeMap = {
  "/": "views/index.html",
};
http.createServer((req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  if (routeMap[req.url]) {
    fs.readFile(routeMap[req.url], (error, data) => {
      //매핑된 파일들의 콘텐츠 읽기
      res.write(data); //파일 콘텐츠로 응답
      res.end();
    });
  } else {
    res.end("<h1>Sorry, not found</h1>");
  }
});

app.listen(port);
console.log(`The server has started and is listening on port number : ${port}`);
