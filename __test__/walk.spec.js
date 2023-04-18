describe('ast walk function', () => {
  test('单个节点', () => {
    const walk = require('../walk');
    // expect(walk()).toBe('b')
    const ast = {a: '1'};
    const mockEnter = jest.fn();
    const mockLeave = jest.fn();
    // 调用
    walk(ast, null, mockEnter, mockLeave);
    // 函数信息
    let calls = mockEnter.mock.calls;
    // 调用次数
    expect(calls.length).toBe(1);
    // 函数调用的参数 
    expect(calls[0][0]).toEqual({a: '1'})
  })
})