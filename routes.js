'use strict';
let fs = require('fs');
let path = require('path');
const ROUTES_CONFIG_PATH = './routesConfig/';//所有路由配置放在这里
function walk (dir) {//get files from directory,Recursive
  let newResults = [],
      isExist = fs.existsSync(dir),
      results = isExist ? fs.readdirSync(dir):[];
  if (results) {//success
    if (results.length === 0) {
      return results;
    }
    results.forEach(function(file) {
      file = path.resolve(dir, file);
      let stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        newResults = newResults.concat(walk(file));
      } else {
        newResults.push(file);
      }
    });
  }
  return newResults;
}
let routesFiles = walk(ROUTES_CONFIG_PATH);
let mergeArr = [];//存放所有路由配置
routesFiles.forEach((file) => {
  mergeArr = mergeArr.concat(require(file));
});
module.exports = mergeArr;