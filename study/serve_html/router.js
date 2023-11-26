const httpStatus = require("http-status-codes");
const htmlContentType = {
  "Content-Type": "text/html",
};

//POST �� GET ��û�� ���ε� ���Ʈ�� ������ routes ��ü�� ����
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

//���Ʈ�� �ٸ� �ݹ� �Լ��� ó���ϱ� ���� �Լ� handle�� ����
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

//main.js�κ��� routes�� ����ϱ� ���� get �� post �Լ� ����
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
