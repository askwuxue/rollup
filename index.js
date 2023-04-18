const fs = require('fs');
const acorn = require('acorn');
const MagicString = require('magic-string');

const code = fs.readFileSync('./source.js', 'utf8').toString()

// 语法树解析
const ast = acorn.parse(code, {
  locations: true,
  ranges: true,
  sourceType: 'module',
  ecmaVersion: 7
})

// 对字符方便处理
const ms = new MagicString(code)

const declaration = {};
const expresstion = [];

// 声明收集
ast.body.filter((node) => node.type === 'VariableDeclaration')
  .forEach(element => {
    declaration[element.declarations[0].id.name] = element;
  });

// 表达式收集
ast.body.filter((node) => node.type !==  'VariableDeclaration')
  .forEach(element => {
    const declarationNode = declaration[element.expression.callee.name];
    expresstion.push(declarationNode);
    expresstion.push(element);
  })

// 剔除没有使用到的代码，只留下使用的
let expressionStr = '';
expresstion.forEach((item) => {
  expressionStr += ms.snip(item.start, item.end) + '\n'
})
 
