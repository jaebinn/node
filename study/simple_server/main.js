//��Ʈ��ȣ 3000
const port = 3000;
//http �� http-status-code���
const http = require("http");
const httpStatus = require("http-status-codes");

//��û�� ������ ��ĳ������ ���� �� ����
const app = http.createServer((req, res) => {
  console.log("Received an incoming request!");
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  console.log(req.method); //���� HTTP �޼ҵ��� �α�
  console.log(req.url); //��û�� URL�� �α�
  console.log(req.headers); //��û ���

  //Ŭ���̾�Ʈ�� ������ ���� �ۼ�
  let responseMessage = "<h1>Hello, Universal!</h1>";
  res.write(responseMessage);
  res.end();
  console.log(`Sent a response: ${responseMessage}`);
});

const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2); //JavaScript ��ü�� ��Ʈ�� ��ȯ
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

//���ø����̼� ������ 3000�� ��Ʈ�� ����
app.listen(port);
console.log(`The server has started and is linstening on port number: ${port}`);
