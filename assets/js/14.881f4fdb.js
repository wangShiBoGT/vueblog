(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{700:function(e,n,t){"use strict";t.r(n);var a=t(4),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"var、let、const区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#var、let、const区别"}},[e._v("#")]),e._v(" var、let、const区别")]),e._v(" "),t("hr"),e._v(" "),t("ol",[t("li",[e._v("var存在提升，可以在声明之前使用。let、const因为暂时死区的原因，不能在声明之前使用")])]),e._v(" "),t("p",[e._v("例子1:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("console.log(a); // 输出： undefiend\nvar a = 10; \n\nconsole.log(b); // 输出：报错 ReferenceError: b is not defined\nlet b = 20;\n")])])]),t("p",[e._v("使用var声明的变量在编译的时候，会将声明提升，编译后如下，所以console输出的结果是10。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var a;\nconsole.log(a);\na = 10;\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("函数提升优于变量提升，函数提升把整个函数挪到了作用域的顶部，变量提升只会声明挪到作用域顶部")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("console.log(foo); // 输出：function foo\nvar foo = 123;\nfunction foo () {}\nconsole.log(foo); // 输出：123\n\nconsole.log(foo1); // 输出：function foo1\nfunction foo1 () {}\nvar foo1 = 123;\nconsole.log(foo1); // 输出：123\n\n")])])]),t("p",[e._v("从上面代码可以看出，用函数方式声明的函数 在编译的时候会被整体提升，所以在第一次console的结果都是函数，第二次输出的为变量的值。编译后的两块大致如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 第一段代码\nvar foo;\nfunction foo() {};\nconsole.log(foo);\nfoo = 123；\nconsole.log(foo);\n\n// 第二段代码\nvar foo1;\nfunction foo1() {};\nconsole.log(foo1);\nfoo1 = 123；\nconsole.log(foo1);\n\n")])])]),t("p",[e._v("大家是否疑惑过为什么存在变量提升这个东西，多麻烦呀，但是存在即合理，提升根本原始是为了解决函数相互调用的情况，如下代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function test1() {\n    test2();\n}\nfunction test2() {\n    test1();\n}\ntest1();\n")])])]),t("p",[e._v("在上述代码中，如果没有变量提升，是无法实现的。")]),e._v(" "),t("p",[e._v("报错是因为存在暂时死区，不能在声明变量前进行访问")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("const和let基本一致，const声明的基础类型的数据无法变更，声明的对象类型可以变更属性的值 4. 全局中使用var声明的变量会挂挂载window上，let和const不会")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var a = 1;\nlet b = 2;\nconst c = 3;\nconsole.log(window.a, window.b, window.c); // 输出：1 undefined undefiend\n")])])]),t("h2",{attrs:{id:"原型继承和class继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型继承和class继承"}},[e._v("#")]),e._v(" 原型继承和class继承")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("JS中不存在类，"),t("strong",[e._v("class")]),e._v("只是语法糖，其本质是函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Person {};\nPerson instanceof Function; // true\n")])])]),t("h3",{attrs:{id:"组合继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合继承"}},[e._v("#")]),e._v(" 组合继承")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function Parent(name) {\n    this.name = name\n}\nParent.prototype.getName = function() {\n    console.log(this.name);\n}\nfunction Child(name) {\n    Parent.call(this, name);\n}\nChild.prototype = new Parent();\nlet child = new Child('1');\nchild instanceof Parent; // true\nchild.getName(); // '1'\n")])])]),t("p",[e._v("组合继承的核心在于子类的构造函数中**Parent.call(this, name);"),t("strong",[e._v("继承父类的属性，然后改变子类的原型为")]),e._v("new Parent()**来继承父类的函数。\n组合继承有点在于构造函数可以传参，不会和父类共享引用数据类型，但可以共享父类的函数。但存在一个缺点是在继承父类函数的时候调用了父类的构造函数，导致子类原型上多了不数据父类的属性，存在内存上的浪费。\n"),t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa46142a26d64059abf6d3b555b38752~tplv-k3u1fbpfcp-watermark.awebp?"}})]),e._v(" "),t("h3",{attrs:{id:"寄生组合继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寄生组合继承"}},[e._v("#")]),e._v(" 寄生组合继承")]),e._v(" "),t("p",[e._v("这种方式是对组合继承的优化，而组合继承的缺点在于继承父类方法的时候调用了构造函数，我们只需要优化了这点就行。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function Parent(name) {\n    this.name = name;\n}\nParent.prototype.getName = function() {\n    console.log(this.name);\n}\nfunction Child(name) {\n    Parent.call(this, name);\n}\nChild.prototype = Object.create(Parent.prototype, {\n    constructor: {\n        value: Child,\n        enumerable: false,\n        writable: true,\n        configurable: true\n    }\n});\nlet child = new Child();\nchild instanceof Parent // true\n")])])]),t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5718f93ea7eb4a1d939e9944a3aa57c1~tplv-k3u1fbpfcp-watermark.awebp?"}}),e._v(" "),t("h3",{attrs:{id:"class-继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-继承"}},[e._v("#")]),e._v(" class 继承")]),e._v(" "),t("p",[e._v("组合继承和寄生组合继承都是通过原型继承，在es6中，我们可以直接通过class解决。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Parent {\n    constructor(name) {\n        this.name = name;\n    }\n    getName() {\n        console.log(this.name);\n    }\n}\nclass Child extends Parent {\n    constructor(name) {\n        super(name);\n        this.name = name;\n    } \n}\nlet child = new Child('捌');\nchild.getName(); // 捌\nchild instanceof Parent; // true\n")])])]),t("p",[t("strong",[e._v("class")]),e._v("继承核心在与子类使用"),t("strong",[e._v("extends")]),e._v("表明继承那个父类，并在子类中调用"),t("strong",[e._v("super")]),e._v("，这代码可以看成 "),t("strong",[e._v("Parent.call(this, name);")])]),e._v(" "),t("h2",{attrs:{id:"模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[e._v("#")]),e._v(" 模块化")]),e._v(" "),t("hr"),e._v(" "),t("blockquote",[t("p",[e._v("面试题：什么是模块化？都有哪几种方式？各有什么特点\n好处：")])]),e._v(" "),t("ul",[t("li",[e._v("解决命名冲突")]),e._v(" "),t("li",[e._v("提供复用性")]),e._v(" "),t("li",[e._v("提高代码可维护性")])]),e._v(" "),t("h3",{attrs:{id:"立即执行函数-方式1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#立即执行函数-方式1"}},[e._v("#")]),e._v(" 立即执行函数（方式1）")]),e._v(" "),t("p",[e._v("早期，立即执行函数是实现模块化最常见的手段，通过函数作用域解决各种命名冲突，污染全局作用域的问题")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("(function(data) {\n    console.log(t);\n    // 进行各种声明和操作\n})(globlaData)\n")])])]),t("h3",{attrs:{id:"amd-和-cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd-和-cmd"}},[e._v("#")]),e._v(" AMD 和 CMD")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// AMD\ndefined('./a', './b', function(a, b) {\n    // 模块加载完成后可以使用\n    a.do();\n    b.do();\n});\n\n// CMD\ndefined(function(require, exports, module) {\n    // 加载模块，可以把require卸载任意地方，使用模块的延迟加载\n    let a = reuire('./a');\n    a.do();  \n})\n")])])]),t("h3",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[e._v("#")]),e._v(" CommonJS")]),e._v(" "),t("p",[e._v("commonJs最早是在node中使用，目前仍然使用广泛，我们在webpack中也会经常看到它。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// a.js\nmodule.exports = {\n    name: 'commonJs'\n}\n// 或者\nexports.name = 'commonJs'\n\n// b.js\nconst module = require('./a.js');\nconsole.log(module.name); // commonJs\n")])])]),t("h3",{attrs:{id:"commonjs的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs的实现"}},[e._v("#")]),e._v(" commonJs的实现")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const module = require('./a.js');\nmodule.name;\n// 这里其实包装了一层立即执行函数，防止对全局变量造成影响\n\n// 这里的module是Node中的一个独有变量\nmodule.exports = {\n    name: 'commonJs'\n}\n\n// module的实现\nlet module = {\n    id: 'XXX',\n    exports: {\n        name: 'commonJs'\n    }\n}\n// exports 和 module。exports共用一个内存地址，所以用法一样\nlet exports = module.exports;\n\nlet load = function(module) {\n    // 导出的内容\n    var name = 'commonJs';\n    module.exports = name;\n    return module.exports;\n}\n// 当require的时候，去找到独特的id对应的内容，然后将使用的内容用立即执行函数包装下。\n")])])]),t("p",[t("strong",[e._v("exports")]),e._v(" 和 "),t("strong",[e._v("module.exports")]),e._v("用法相同的原因是 共用了一个内存地址，所以不能直接对"),t("strong",[e._v("exports")]),e._v("直接进行赋值，如果直接赋值会导致 和"),t("strong",[e._v("module.exports")]),e._v("内存地址不一致，修改并不会修改"),t("strong",[e._v("module.exports")]),e._v("的值。")]),e._v(" "),t("h3",{attrs:{id:"es-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[e._v("#")]),e._v(" ES Module")]),e._v(" "),t("p",[e._v("与CommonJS的区别")]),e._v(" "),t("ul",[t("li",[e._v("CommonJS支持动态倒入，例如const module = require(path + '/a.js'), ES Module目前不支持")]),e._v(" "),t("li",[e._v("CommonJS 是同步加载，因为用于服务端，文件就在本地，同步导入，即使卡住对主线程影响也不大。后者是异步导入，因为用于浏览器，需要下载文件，如果也才用同步导入会对渲染造成很大的影响")]),e._v(" "),t("li",[e._v("CommonJS 导入都是值拷贝，就算导出的值改变了，前面导入的值也不会改变，如果需要更新，需要再重新导入。ES Module采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入的值会随导出的值变化。")]),e._v(" "),t("li",[e._v("ES Module会变编译成reuire/exports来执行")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 导出模块儿\nexport function foo () {};\nexport default function() {};\n\n// 导入模块\nimport {foo} from './a';\nimport foo from './a';\n")])])]),t("h3",{attrs:{id:"proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[e._v("#")]),e._v(" Proxy")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("vue3讲使用Proxy代码Object.defineProperty来实现响应式。Proxy是es6中新增的功能，可以用来定义对象。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let obj = new Proxy(target, handler);\n")])])]),t("p",[e._v("target表示添加代理的对象，handler用来自定义对象中的操作，比如set和get函数")]),e._v(" "),t("p",[e._v("接下来用Proxy实现一个响应式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let onWatch = (obj, setBind, getLogger) => {\n    const handler = {\n        set(obj, property, value, receiver) {\n            console.log('receiver==', receiver);\n            setBind(property, value);\n            return Reflect.set(obj, property, value);\n        },\n        get(obj, property, receiver) {\n            getLogger(obj, property);\n            return Reflect.get(obj, property, receiver);\n        }\n    }\n    return new Proxy(obj, handler);\n}\nconst obj = { age: 16 };\nconst p = onWatch(\n    obj,\n    (property, value) => {\n        console.log(`监听到${property}变更为${value}`);\n    },\n    (obj, property) => {\n        console.log(`${property} = ${obj[property]}`);\n    }\n)\np.age // a = 16\np.age = 24 // 监听到age变更为24\n")])])]),t("p",[e._v("作者：捌玖ki\n"),t("a",{attrs:{href:"https://juejin.cn/post/7052474934224191496#heading-7",title:"超链接标题",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击跳转至原文章"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);