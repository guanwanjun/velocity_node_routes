'use strict';
let express = require('express');
let path = require('path');
let app = express();
let Engine = require('velocity').Engine;
let routesArr = require('./routes');
let needHead = true;
let needFooter = true;
const PROJECT_ROOT = 'E:/codes/project/';//项目目录
routesArr.map((file) => {
  file.template = path.join(PROJECT_ROOT, file.template);
  return file;
});
routesArr.forEach((data) => {
  app.get(data.url, function (req, res) {
    let engine = null;
    let result = '';
    if (needHead) {//加载头部的vm
      let headData = require('./commonHeadFooter/head.json');
      engine = new Engine( {template: path.join(PROJECT_ROOT, headData.template) });
      result = engine.render( headData.renderVar);
    }
    engine = new Engine( {template: data.template });
    result += engine.render( data.renderVar);
    if (needFooter) {//加载尾部的vm
      let footerData = require('./commonHeadFooter/footer.json');
      engine = new Engine( {template: path.join(PROJECT_ROOT, footerData.template) });
      result += engine.render( footerData.renderVar);
    }
    res.send(result);
  });
});

let server = app.listen(8181, () => {
  let host = server.address().address;
  let port = server.address().port;
});