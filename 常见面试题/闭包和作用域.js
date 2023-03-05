// 函数作为返回值
function create() {
    let a = 100;
    return function () {
        console.log(a);
    };
}

const fn = create();
const a = 200;
fn(); // 100

// 函数作为参数被传递
function print(fb) {
    const b = 200;
    fb();
}
const b = 100;
//此处涉及到函数执行上下文以及函数创建对象VO，函数在一开始就被创建好了的，里面所用的变量要从上下文找
function fb() {
    console.log(b);
}
print(fb); // 100

