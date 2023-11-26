//포트번호 3000
const port = 3000;
//http 및 http-status-code모듈
const http = require("http");
const httpStatus = require("http-status-codes");

//요청과 응답을 매캐변수를 갖는 웹 서버
const app = http.createServer((req, res) => {
  console.log("Received an incoming request!");
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  console.log(req.method); //사용된 HTTP 메소드의 로그
  console.log(req.url); //요청된 URL의 로그
  console.log(req.headers); //요청 헤더

  //클라이언트에 전달할 응답 작성
  let responseMessage = "<h1>Hello, Universal!</h1>";
  res.write(responseMessage);
  res.end();
  console.log(`Sent a response: ${responseMessage}`);
});

const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2); //JavaScript 객체의 스트링 변환
};

// app.on("request", (req, res) => {
//   var body = [];
//   req.on("data", (bodyData) => {
//     body.push(bodyData);
//   });
//   req.on("end", () => {
//     body = Buffer.concat(body).toString();
//     console.log(`Request Body Contents: ${body}`);
//   });

//   console.log(`Method: ${getJSONString(req.method)}`);
//   console.log(`URL: ${getJSONString(req.url)}`);
//   console.log(`Headers: ${getJSONString(req.headers)}`);
//   res.writeHead(httpStatus.OK, {
//     "Content-Type": "text/html",
//   });

//   let responseMessage = "<h1>This will show on the screen. </h1>";
//   res.end(responseMessage);
// });

//어플리케이션 서버에 3000번 포트를 수신
app.listen(port);
console.log(`The server has started and is linstening on port number: ${port}`);
