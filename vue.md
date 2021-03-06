- 优点：体积小、运行效率高、双向数据绑定、生态丰富，学习成本低
- 设计成自底向上逐层应用
- vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合；另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
- 在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
- 直接下载并用 <script> 标签引入，Vue 会被注册为一个全局变量。
- Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

# 1、基础

## 1.1 模板语法

### 插值

使用 v-once，值只会变化一次

#### 文本：双大括号

#### 原始 html：v-html

#### attribute: v-bind

v-bind:[属性]=值

#### js 表达式：双大括号

### 指令

#### 参数

带有 v- 前缀的特殊 attribute
v-if v-for v-on v-bind

#### 动态参数

#### 修饰符

用于指出一个指令应该以特殊方式绑定

### 缩写

对 v-bind、v-on 使用频繁的语法提供了缩写版本。

## 1.2 计算属性和侦听器

### 计算属性

对于复杂的属性监听需使用计算属性，存于 computed 中。
也可在 methods 中维护一个方法，来返回监听计算值。

#### 计算属性 vs 方法

计算属性有缓存，适合于大运算量的可缓存属性；实时变化使用方法。

#### 计算属性 vs 侦听属性

大多数场景下 watch 不如 computed

#### 计算属性中使用 getter setter

### 侦听器

watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的【todo，处理复杂数据联动？】

## 1.3 class 与 style 绑定【todo】

### 绑定 html class

#### 对象语法

v-bind:class={}

#### 数组语法

v-bind:class=[]

#### 用在组件上

### 绑定内联样式

v-bind:style={}

#### 对象语法\数组语法\自动添加前缀\多重置

## 1.4 条件渲染

v-if: 更高切换开销、适合频繁切换场景
v-show：更高初始化开销，适合不怎么切换场景
v-for

## 1.5 列表渲染

v-if v-for <template>
状态维护需注意

## 1.6 事件处理

### 监听事件

v-on:click="clickFn"

### 事件处理方法

### 内敛处理器中的方法

\$event 传递原始事件对象

### 事件修饰符

.stop/prevent/capture/self/once/passive

### 按键修饰符

### 系统修饰键

### 为什么在 HTML 中监听事件

## 1.7 表单输入绑定

### 基础用法

v-modal 指令在表单元素 input\textarea\select 创建双向数据绑定
文本、多行文本、单选、复选、选择框【值得初始化需注意】

### 值绑定

表单元素的值绑定

### 修饰符

#### .lazy

change 事件后再触发数据同步

#### .number

转化数据类型

#### .trim

去除前后空格

### 在组件上使用 v-modal

自定义输入组件

## 1.8 组件基础

### 基本示例\组件的复用\组件的组织

组件是可复用的 vue 实例，跟根实例接受同样的属性。
差异：data 属性必须是一个函数，为了每次实例化都能复制一份数据
组件注册：全局注册、局部注册

### 通过 prop 向子组件传递数据

组件定义时，添加 props 属性，组件渲染时使用

### 单个根元素

同 react，组件只能有一个根元素

### 监听子组件事件

子组件实例中调用 this.\$emit 方法，父组件监听

### 通过插槽分发内容

类似于 react 组件的 children 元素，子组件中通过 <slot> 渲染 children

### 动态组件【todo】

### 解析 DOM 模板时的注意事项

写模板时会有些限制

# 2、深入了解组件

## 组件注册

全局组件需在根 vue 实例初始化之前定义。

## prop

prop 大小写、类型、静态传递、动态传递（通过 v-bind 实现）
传递数字、布尔值、对象
单向数据流：需把根据 prop 初始化一些值。
数组和对象是引用传入子组件的，子组件改变这些值，父组件也会受影响。
props 还可以提供类型验证

### 非 prop 的 attribute 属性

因为显式定义的 prop 适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。这也是为什么组件可以接受任意的 attribute，而这些 attribute 会被添加到这个组件的根元素上。
组件内部可以使用外部传入的没有定义的属性
可以通过设置 inheritAttrs: false 来禁止组件使用传进来的未定义值

## 自定义事件

## 插槽

## 动态组件 & 异步组件

## 处理边界情况

# 3、过渡 & 动画

# 4、可复用性和组合

# 5、工具

单文件组件
测试【todo】

#### ts 支持

工具链、基于类的 vue 组件、增强类型、标注返回值、标注 prop

#### 生产环境部署

- 模板预编译
  当使用 DOM 内模板或 JavaScript 内的字符串模板时，模板会在运行时被编译为渲染函数。通常情况下这个过程已经足够快了，但对性能敏感的应用还是最好避免这种用法。

预编译模板最简单的方式就是使用单文件组件——相关的构建设置会自动把预编译处理好，所以构建好的代码已经包含了编译出来的渲染函数而不是原始的模板字符串。

如果你使用 webpack，并且喜欢分离 JavaScript 和模板文件，你可以使用 vue-template-loader，它也可以在构建过程中把模板文件转换成为 JavaScript 渲染函数。

- 提取组件的 css
  当使用单文件组件时，组件内的 CSS 会以 <style> 标签的方式通过 JavaScript 动态注入。这有一些小小的运行时开销，如果你使用服务端渲染，这会导致一段“无样式内容闪烁 (fouc)”。将所有组件的 CSS 提取到同一个文件可以避免这个问题，也会让 CSS 更好地进行压缩和缓存。

- 跟踪运行时错误
  Vue.config.errorHandler

# 6、规模化

## 6.1 路由

简易版：维护一个 currentRoute 状态保存当前路由，根据路径返回不同的组件。
通用版：vue-router

## 6.2 状态管理

vuex

## 6.3 服务器渲染

## 6.4 安全

# 7、内在

## 深入响应式原理

### 如何追踪变化

### 检测变化的注意事项

### 声明响应式 property

### 异步更新队列
