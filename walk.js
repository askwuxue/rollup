/**
 * 
 * @param {*} node 当前节点
 * @param {*} parent 
 * @param {*} enter 进入节点的回到方法
 * @param {*} leave 离开节点的回调方法
 * @returns 
 */
 const walk = function (node, parent, enter, leave) {
  enter(node)
  return 'a';
}

module.exports = walk;