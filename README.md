基于node+express+velocity来启动node加载velocity模版

step1: npm install

step2: 修改index.js里的项目目录，指向项目目录

step3: 修改routesConfig里的json文件来相对指向项目目录里的vm

step4: node index.js启动服务

step5: http://127.0.0.1:8181访问

（commonHeadFooter里放置头部和尾部，routesConfig里的json文件配置每个vm的路由和路径，具体可查看index.js源码）