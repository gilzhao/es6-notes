// 惰性求值 lazy evaluation
// function* lazy() {
//     yield 123 + 456;
// }

// let testLazy = lazy();
// console.log(testLazy.next());

// Generator 函数可以不用 yield 语句，这时就变成了一个单纯的暂缓执行函数
// function* reprieve() {
//     console.log('执行了')
// }

// var testReprieve = reprieve();

// setTimeout(function() {
//     testReprieve.next();
// }, 2000);

// yield 语句不能用在普通函数中，否则会报错
// (function() {
//     yield 1;
// })()

// forEach 方法的参数是一个普通函数，改用 for 循环
// var arr = [1, [[2, 3], 4], 5, 6];
// var flat = function* (a) {
//     var length = a.length;
//     for (var i = 0; i < length; i++) {
//         var item = a[i];
//         if (typeof item !== 'number') {
//             yield* flat(item);
//         } else {
//             yield item;
//         }
//     }
// };

// for (var f of flat(arr)) {
//     console.log(f);
// }

// yield 语句如果用在一个表达式之中，必须放在圆括号里面
// function* foo() {
//     console.log('hello ' + (yield));
// }

// yield 语句用作函数参数或赋值表达式的右边，可以不加括号
// function* foo() {
//     let input = yield;
//     console.log(yield 'a', yield 'b');
// }

// 与 Iterator 接口的关系
// function* gen() {
//     // some code
// }
// var g = gen();
// console.log(g[Symbol.iterator]() === g);