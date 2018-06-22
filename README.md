## 1. 简介
jsdoc3 自动化文档生成 demo演示

运行结果会根据 demo 目录里面的代码和代码注释，生成文档，文档目录为 docs

jsdoc3 注释标准请[查看文档](http://www.css88.com/doc/jsdoc/tags-abstract.html),或查看[demo目录代码注释](./demo)

## 2. 安装
```
git clone https://github.com/jimczj/jsdoc_demo.git
cd jsdoc_demo
npm i
```
## 3.运行

#### 3.1 方法一 gulp全局方式运行
```
# 全局安装gulp
npm install -g gulp
gulp doc # 跟gulpfile.js同目录执行


```
#### 3.2 方法二 gulp 项目本地方式运行
```
./node_modules/.bin/gulp doc  # 跟gulpfile.js同目录执行

```

#### 3.3 方法三 jsdoc 全局方式运行
```
# 全局安装jsdoc
npm install -g jsdoc
jsdoc -c jsdoc.json # 跟jsdoc.json同目录执行

```
#### 3.4 方法四 jsdoc 项目本地方式运行
```
./node_modules/.bin/jsdoc  -c jsdoc.json # 跟jsdoc.json同目录执行

```

## 4. jsdoc.json配置文件说明
```
{
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc"]
    },
    "source": {
        "include": ["demo"],// 源文件目录 ["demo","src"]
        "includePattern": ".js$",// 正则匹配源文件
        "excludePattern": "(node_modules/|docs)"
    },
    "plugins": [
        "plugins/markdown"
    ],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": true,
        "useLongnameInNav": false,
        "showInheritedInNav": true
    },
    "opts": {
        "destination": "./docs/",// 生成的文档目录
        "encoding": "utf8",
        "private": true,
        "recurse": true,
        "template": "./node_modules/docdash"
    }
}

```

