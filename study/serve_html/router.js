const httpStatus = require("http-status-codes");
const htmlContentType = {
  "Content-Type": "text/html",
};

//POST 및 GET 요청에 매핑된 라우트를 저장할 routes 객체의 정의
routes = {
  GET: {
    "/info": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/plain",
      });
      res.end("Welcome to the Info Page!");
    },
  },
  POST: {},
};

//라우트에 다른 콜백 함수를 처리하기 위한 함수 handle의 생성
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>");
    }
  } catch (ex) {
    console.log("error:", ex);
  }
};

//main.js로부터 routes에 등록하기 위한 get 및 post 함수 생성
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
