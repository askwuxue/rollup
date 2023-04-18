// unicode编码最全的，ASCII编码，各个国家，组织提出的的字符集标准

const reg = /^0$|^-{0,1}[1-9][0-9]{0,}$/;

reg.test(3);
console.log('reg.test(0): ', reg.test(0));
reg.test(011);
console.log('reg.test(011): ', reg.test(011));
reg.test(-1);
console.log('reg.test(-1): ', reg.test(-1));
// decimal
// ascii
// for (let i = 1; i < 128; i++) {
//   console.log(String.fromCharCode(i));
// }



const reg1 = /abcedf/;

let flag = null;
// exec 执行会是一个循环，超过循环exec返回的是null
// 典型的c程序员的风格
while (flag === reg.exec()) {
  console.log('=====');
}