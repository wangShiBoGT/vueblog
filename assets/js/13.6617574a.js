(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{698:function(t,v,a){"use strict";a.r(v);var s=a(4),_=Object(s.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"css-的盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-的盒子模型"}},[t._v("#")]),t._v(" CSS 的盒子模型")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("一个元素占有空间的大小由几个部分构成，其中包括")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("内容（content）")])]),t._v(" "),a("li",[a("p",[t._v("内边距（padding），内容与边框之间的距离")])]),t._v(" "),a("li",[a("p",[t._v("边框（border）")])]),t._v(" "),a("li",[a("p",[t._v("外边距（margin），边框与外部元素之间的距离")])])]),t._v(" "),a("p",[t._v("四个部分，这四个部分一起构成了盒子模型")]),t._v(" "),a("h3",{attrs:{id:"盒模型分为-w3c-标准盒子-、ie-盒子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒模型分为-w3c-标准盒子-、ie-盒子"}},[t._v("#")]),t._v(" 盒模型分为： W3C 标准盒子 、IE 盒子")]),t._v(" "),a("p",[t._v("W3C 标准盒子（content-box）：内容盒子，现代浏览器中使用的都是正常盒模型"),a("strong",[t._v("content-box")]),t._v("。一般设置元素的 "),a("strong",[t._v("width")]),t._v(" 只包含 内容的宽度，不包含 "),a("strong",[t._v("border")]),t._v("，"),a("strong",[t._v("padding")])]),t._v(" "),a("p",[t._v("CSS 设置为 "),a("strong",[t._v("content-box")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("box-sizing: content-box;\n")])])]),a("p",[t._v("盒子总宽度 = margin + border + padding + width")]),t._v(" "),a("p",[t._v("IE 盒子（border-box）：一般设置的 width 包含 内容的宽度 + padding + border")]),t._v(" "),a("p",[t._v("CSS 设置为 border-box")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("box-sizing: border-box;\n")])])]),a("p",[t._v("盒子总宽 = margin + width")]),t._v(" "),a("h2",{attrs:{id:"bfc-块格式上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-块格式上下文"}},[t._v("#")]),t._v(" BFC（块格式上下文）")]),t._v(" "),a("p",[t._v("块格式化上下文（Block Formatting Context，BFC）是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。")]),t._v(" "),a("h3",{attrs:{id:"bfc-的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-的特性"}},[t._v("#")]),t._v(" BFC 的特性")]),t._v(" "),a("ol",[a("li",[t._v("BFC 可以看作一个独立的容器，容器内部的元素不会影响区块外部的元素布局")]),t._v(" "),a("li",[t._v("BFC 里面的元素从左到右，从上到下依次排列")]),t._v(" "),a("li",[t._v("同一个 BFC，相邻的元素 "),a("strong",[t._v("margin")]),t._v(" 会发生重叠")]),t._v(" "),a("li",[t._v("BFC 里面如果有 "),a("strong",[t._v("float")]),t._v(" 元素，也可以撑开，避免高度坍塌")])]),t._v(" "),a("h3",{attrs:{id:"如何创建-bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何创建-bfc"}},[t._v("#")]),t._v(" 如何创建 BFC")]),t._v(" "),a("p",[t._v("下面介绍几个常见的创建 BFC 的方法")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("float")]),t._v(" 属性的值不为 "),a("strong",[t._v("none")])]),t._v(" "),a("li",[a("strong",[t._v("position")]),t._v(" 属性的值为 "),a("strong",[t._v("absolute")]),t._v(" 或者 "),a("strong",[t._v("fixed")])]),t._v(" "),a("li",[a("strong",[t._v("display")]),t._v(" 为 "),a("strong",[t._v("inline-block")]),t._v("，"),a("strong",[t._v("flow-root")]),t._v("，"),a("strong",[t._v("table-cell")]),t._v("，"),a("strong",[t._v("table-caption")]),t._v("，以及 "),a("em",[t._v("table")]),t._v(" 相关的属性，例如 "),a("strong",[t._v("table-caption")]),t._v("，"),a("strong",[t._v("table-row")]),t._v(" 等")]),t._v(" "),a("li",[a("strong",[t._v("overflow")]),t._v(" 属性值不为 "),a("strong",[t._v("visible")])]),t._v(" "),a("li",[a("strong",[t._v("display")]),t._v(" 属性值为 "),a("strong",[t._v("flex")]),t._v(" ，"),a("strong",[t._v("grid")]),t._v(" ，"),a("strong",[t._v("inline-flex")]),t._v(" ，"),a("strong",[t._v("inline-grid")])])]),t._v(" "),a("h2",{attrs:{id:"css解决高度坍塌的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css解决高度坍塌的问题"}},[t._v("#")]),t._v(" CSS解决高度坍塌的问题")]),t._v(" "),a("p",[t._v("什么是高度坍塌，就是父元素的子元素脱离了文档流，且它本身也没设置高度，那么它的高度就会为零")]),t._v(" "),a("h3",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),a("p",[t._v("创建BFC，如何创建可以查看上面那道题\n新增一个空div元素或者伪元素，设置清除浮动，"),a("strong",[t._v("clear: both")]),t._v(";")]),t._v(" "),a("h4",{attrs:{id:"visibility-hidden-和-display-none-和-opacity-0-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visibility-hidden-和-display-none-和-opacity-0-有什么区别"}},[t._v("#")]),t._v(" visibility: hidden 和 display: none 和 opacity: 0 有什么区别")]),t._v(" "),a("p",[t._v("三个属性都可以设置元素隐藏，但是控制元素隐藏的方式不一样")]),t._v(" "),a("h4",{attrs:{id:"visibility-hidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visibility-hidden"}},[t._v("#")]),t._v(" visibility: hidden")]),t._v(" "),a("p",[t._v("元素还是会渲染在文档流中，不会更改页面的布局，此时可以通过设置子元素的 visibility: visible 来控制子元素的展示，click 事件不会触发")]),t._v(" "),a("h4",{attrs:{id:"display-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-none"}},[t._v("#")]),t._v(" display: none")]),t._v(" "),a("p",[t._v("元素包括子元素直接从 HTML 文档流删除，不参与排版，绑定的 click 事件也会丢失")]),t._v(" "),a("h4",{attrs:{id:"opacity-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opacity-0"}},[t._v("#")]),t._v(" opacity: 0")]),t._v(" "),a("p",[t._v("元素还是在文档流，不能控制子元素展示，绑定的 click 事件可以触发")]),t._v(" "),a("h2",{attrs:{id:"css-选择符有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-选择符有哪些"}},[t._v("#")]),t._v(" CSS 选择符有哪些？")]),t._v(" "),a("ul",[a("li",[t._v("id 选择器 ==#app==")]),t._v(" "),a("li",[t._v("类选择器 ==.container==")]),t._v(" "),a("li",[t._v("标签选择器 ==div, h1, p==")]),t._v(" "),a("li",[t._v("子选择器 ==ul > li==")]),t._v(" "),a("li",[t._v("后代选择器 ==h1 p==")]),t._v(" "),a("li",[t._v("兄弟选择器 ==li ~ a==")]),t._v(" "),a("li",[t._v("相邻兄弟选择器 ==li + a==")]),t._v(" "),a("li",[t._v('属性选择器 ==a[rel="external"]==')]),t._v(" "),a("li",[t._v("伪类选择器 ==a:hover, li:nth-child==")]),t._v(" "),a("li",[t._v("伪元素选择器 ==::before、::after==")]),t._v(" "),a("li",[t._v("通配符选择器 ==*==")])]),t._v(" "),a("h2",{attrs:{id:"css-选择器及其优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器及其优先级"}},[t._v("#")]),t._v(" CSS 选择器及其优先级")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("!important > 行内 > ID > CLASS ｜属性选择 > 伪元素 ｜ 标签\n")])])]),a("h2",{attrs:{id:"css-中哪些属性可以继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-中哪些属性可以继承"}},[t._v("#")]),t._v(" CSS 中哪些属性可以继承")]),t._v(" "),a("ul",[a("li",[t._v("字体相关，常见的有："),a("strong",[t._v("font")]),t._v("，"),a("strong",[t._v("font-size")]),t._v("，"),a("strong",[t._v("font-family")]),t._v("，"),a("strong",[t._v("font-weight")]),t._v(" 等等")]),t._v(" "),a("li",[t._v("文本相关，常见的有："),a("strong",[t._v("line-height")]),t._v("，"),a("strong",[t._v("color")]),t._v("，"),a("strong",[t._v("text-align")])]),t._v(" "),a("li",[a("strong",[t._v("visibility: visible")])]),t._v(" "),a("li",[t._v("列表，"),a("strong",[t._v("list-style")])]),t._v(" "),a("li",[t._v("鼠标属性："),a("strong",[t._v("cursor")])])]),t._v(" "),a("h2",{attrs:{id:"什么是渲染层合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是渲染层合并"}},[t._v("#")]),t._v(" 什么是渲染层合并？")]),t._v(" "),a("p",[t._v("渲染层合并是浏览器在渲染 HTML 元素的时候，会创建多个层来绘制，然后在每个层绘制完成之后，再合并成一个完整的图层，最终渲染到屏幕上。")]),t._v(" "),a("h2",{attrs:{id:"块级元素-行内元素-行内块元素的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级元素-行内元素-行内块元素的区别"}},[t._v("#")]),t._v(" 块级元素，行内元素，行内块元素的区别")]),t._v(" "),a("p",[a("strong",[t._v("块级元素")]),t._v("：自动占据一行，可以设置宽高")]),t._v(" "),a("p",[t._v("常见的有 "),a("strong",[t._v("div")]),t._v("，"),a("strong",[t._v("p")]),t._v("，"),a("strong",[t._v("h1-h6")]),t._v("，"),a("strong",[t._v("ul")]),t._v("，"),a("strong",[t._v("li")]),t._v("，"),a("strong",[t._v("form")]),t._v("，"),a("strong",[t._v("table")])]),t._v(" "),a("p",[a("strong",[t._v("行内元素")]),t._v("：占据一行的一小部分，多个行内元素水平排版，无法设置宽高")]),t._v(" "),a("p",[t._v("常见的有 "),a("strong",[t._v("span")]),t._v(" ，"),a("strong",[t._v("img")]),t._v("，"),a("strong",[t._v("a")])]),t._v(" "),a("p",[a("strong",[t._v("行内块级元素")]),t._v("：跟行内元素类似，不过可以设置宽高")]),t._v(" "),a("p",[t._v("常见的有 "),a("strong",[t._v("button")]),t._v("，"),a("strong",[t._v("img")]),t._v(" ， "),a("strong",[t._v("input")]),t._v(", "),a("strong",[t._v("select")]),t._v(", "),a("strong",[t._v("label")]),t._v("，"),a("strong",[t._v("textarea")])]),t._v(" "),a("h2",{attrs:{id:"伪元素和伪类的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素和伪类的区别"}},[t._v("#")]),t._v(" 伪元素和伪类的区别")]),t._v(" "),a("p",[a("strong",{staticStyle:{background:"linear-gradient(270deg,#bfdbfe,#bfdbfe) no-repeat 8px 8px"}},[t._v("伪元素")]),t._v("：对选择元素的指定部分进行修改样式，常见的有  "),a("strong",[t._v(": before")]),t._v("，"),a("strong",[t._v(":after")]),t._v("，"),a("strong",[t._v(":first-line")]),t._v("，"),a("strong",[t._v("first-letter")]),t._v("  等等")]),t._v(" "),a("p",[a("strong",{staticStyle:{background:"linear-gradient(270deg,#bfdbfe,#bfdbfe) no-repeat 8px 8px"}},[t._v("伪类")]),t._v("：对选择元素的特殊状态进行修改样式，常见的有 "),a("strong",[t._v(":hover")]),t._v("，"),a("strong",[t._v(":active")]),t._v("，"),a("strong",[t._v(":checked")]),t._v("，"),a("strong",[t._v(":focus")]),t._v("，"),a("strong",[t._v(":first-child")]),t._v(" 等等")]),t._v(" "),a("h2",{attrs:{id:"如何解决-margin-重叠问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决-margin-重叠问题"}},[t._v("#")]),t._v(" 如何解决 margin 重叠问题")]),t._v(" "),a("p",[t._v("margin 重叠发生在相邻的两个块级元素，当设置 margin 的时候，会以重叠到一起，例如下面代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div>\n  <div className="div"></div>\n  <div className="div"></div>\n</div>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".div {\n  margin: 20px 0;\n  background-color: #83bbff;\n}\n")])])]),a("p",[t._v("运行结果可以看出，两个 div 的间隔是 20px 而不是 40px;")]),t._v(" "),a("p",[t._v("解决办法就是在不想要合并的元素创建一个 BFC，在第一个元素新建一个空元素，配置 overflow: hidden")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div>\n  <div className="parent">\n    <div className="div"></div>\n  </div>\n  <div className="div"></div>\n</div>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".parent {\n  overflow: hidden;\n}\n.div {\n  margin: 20px 0;\n  background-color: #83bbff;\n}\n")])])]),a("h2",{attrs:{id:"css-实现一个-0-5px-的横线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-实现一个-0-5px-的横线"}},[t._v("#")]),t._v(" CSS 实现一个 0.5px 的横线")]),t._v(" "),a("p",[t._v("1.使用垂直渐变，上部分透明，下部分配置想要的颜色")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("background-image: linear-gradient(0deg, #f00 50%, transparent 50%);\n")])])]),a("p",[t._v("2.使用 transform: scale(0.5);")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".half-pixel {\n  position: relative;\n}\n.half-pixel:after {\n  content: '';\n  position: absolute;\n  left: -50%;\n  border: 0;\n  width: 200%;\n  height: 1px;\n  background: red;\n  transform: scale(0.5);\n}\n")])])])])}),[],!1,null,null,null);v.default=_.exports}}]);