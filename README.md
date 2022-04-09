---
title: Vue 技术栈(全家桶)
---

> 尚硅谷前端研究院

# 第 1 章：Vue 核心

1.  ## Vue 简介

    1.  ### 官网

        1.  英文官网:
            > [[https://vuejs.org/]{.underline}](https://vuejs.org/)

        2.  中文官网:
            > [[https://cn.vuejs.org/]{.underline}](https://cn.vuejs.org/)

    2.  ### 介绍与描述

        1.  动态构建用户界面的**渐进式** JavaScript 框架

        2.  作者: 尤雨溪

    3.  ### Vue 的特点

        1.  遵循 **MVVM** 模式

        2.  编码简洁, 体积小, 运行效率高, 适合移动/PC 端开发

        3.  它本身只关注UI, 也可以引入其它第三方库开发项目

    4.  ### 与其它 JS 框架的关联

        1.  借鉴Angular 的**模板**和**数据绑定**技术

        2.  借鉴React 的**组件化**和**虚拟DOM** 技术

    5.  ### Vue 周边库

        1.  vue-cli: vue 脚手架

        2.  vue-resource

        3.  axios

        4.  vue-router: 路由

        5.  vuex: 状态管理

        6.  element-ui: 基于vue 的UI 组件库(PC 端)

> ......

## 初识 Vue

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image2.jpeg){width="3.7305577427821524in"
height="2.4133333333333336in"}

3.  **模板语法**

    1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image3.jpeg){width="3.469717847769029in"
height="2.5in"}

2.  **模板的理解**

> html 中包含了一些JS 语法代码，语法分为两种，分别为：

1.  插值语法（双大括号表达式）

2.  指令（以v-开头）

```{=html}
<!-- -->
```
3.  ### 插值语法

    1.  功能: 用于解析标签体内容

    2.  语法: {{xxx}} ，xxxx 会作为js 表达式解析

4.  ### 指令语法

    1.  功能: 解析标签属性、解析标签体内容、绑定事件

    2.  举例：v-bind:href = \'xxxx\' ，xxxx 会作为js 表达式被解析

    3.  说明：Vue 中有有很多的指令，此处只是用v-bind 举个例子

```{=html}
<!-- -->
```
4.  ## 数据绑定

    1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image4.jpeg){width="3.2907852143482064in"
height="3.02in"}

2.  **单向数据绑定**

    1.  语法：v-bind:href =\"xxx\" 或简写为 :href

    2.  特点：数据只能从data 流向页面

3.  ### 双向数据绑定

    1.  语法：v-mode:value=\"xxx\" 或简写为 v-model=\"xxx\"

    2.  特点：数据不仅能从data 流向页面，还能从页面流向 data

## MVVM 模型

1.  M：模型(Model) ：对应data 中的数据

2.  V：视图(View) ：模板

3.  VM：视图模型(ViewModel) ： Vue 实例对象

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image5.jpeg){width="4.690661636045494in"
height="2.763333333333333in"}

1.  ## 事件处理

    1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image6.jpeg){width="4.320697725284339in"
height="2.9166666666666665in"}

2.  **绑定监听**

    1.  v-on:xxx=\"fun\"

    2.  \@xxx=\"fun\"

    3.  \@xxx=\"fun(参数)\"

    4.  默认事件形参: event

    5.  隐含属性对象: \$event

3.  ### 事件修饰符

    1.  .prevent : 阻止事件的默认行为 event.preventDefault()

    2.  .stop : 停止事件冒泡 event.stopPropagation()

4.  ### 按键修饰符

    1.  keycode : 操作的是某个keycode 值的键

    2.  .keyName : 操作的某个按键名的键(少部分)

```{=html}
<!-- -->
```
2.  ## 计算属性与监视

    1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image7.jpeg){width="2.7018405511811023in"
height="1.783332239720035in"}

2.  **计算属性-computed**

    1.  要显示的数据不存在，要通过计算得来。

    2.  在computed 对象中定义计算属性。

    3.  在页面中使用{{方法名}}来显示计算的结果。

3.  ### 监视属性-watch

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image8.jpeg){width="3.504767060367454in"
height="2.9566666666666666in"}

1.  通过通过vm 对象的\$watch()或watch 配置来监视指定的属性

2.  当属性变化时, 回调函数自动调用, 在函数内部进行计算

```{=html}
<!-- -->
```
3.  ## class 与 style 绑定

    1.  ### 理解

        1.  在应用界面中, 某个(些)元素的样式是变化的

        2.  class/style 绑定就是专门用来实现动态样式效果的技术

    2.  ### class 绑定

        1.  :class=\'xxx\'

        2.  表达式是字符串: \'classA\'

        3.  表达式是对象: {classA:isA, classB: isB}

        4.  表达式是数组: \[\'classA\', \'classB\'\]

    3.  ### style 绑定

        1.  :style=\"{ color: activeColor, fontSize: fontSize + \'px\'
            }\"

        2.  其中activeColor/fontSize 是data 属性

4.  ## 条件渲染

    1.  ### 条件渲染指令

        1.  v-if 与v-else

        2.  v-show

    2.  ### 比较v-if 与v-show

        1.  如果需要频繁切换 v-show 较好

        2.  当条件不成立时, v-if 的所有子节点不会解析(项目中使用)

5.  ## 列表渲染

    1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image9.jpeg){width="2.40255905511811in"
height="1.96in"}![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image10.png){width="2.9441524496937883in"
height="1.9998950131233595in"}![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image11.jpeg){width="3.9392902449693787in"
height="1.7966666666666666in"}

2.  **列表显示指令**

> 遍历数组: v-for / index 遍历对象: v-for / key

## 收集表单数据

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image12.jpeg){width="3.948034776902887in"
height="5.003333333333333in"}

7.  **过滤器**

    1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image13.jpeg){width="2.6823851706036748in"
height="1.5666666666666667in"}

2.  **理解过滤器**

```{=html}
<!-- -->
```
1.  功能: 对要显示的数据进行特定格式化后再显示

2.  注意: 并没有改变原本的数据, 是产生新的对应的数据

    1.  ## 内置指令与自定义指令

        1.  ### 常用内置指令

```{=html}
<!-- -->
```
1.  v-text : 更新元素的 textContent

2.  v-html : 更新元素的 innerHTML

3.  v-if : 如果为true, 当前标签才会输出到页面

4.  v-else: 如果为false, 当前标签才会输出到页面

5.  v-show : 通过控制display 样式来控制显示/隐藏

6.  v-for : 遍历数组/对象

7.  v-on : 绑定事件监听, 一般简写为@

8.  v-bind : 绑定解析表达式, 可以省略v-bind

9.  v-model : 双向数据绑定

10. v-cloak : 防止闪现, 与css 配合: \[v-cloak\] { display: none }

    1.  ### 自定义指令

##### 注册全局指令

> Vue.directive(\'my-directive\', function(el, binding){ el.innerHTML =
> binding.value.toupperCase()
>
> })

##### 注册局部指令

> directives : {
>
> \'my-directive\' : { bind (el, binding) {
>
> el.innerHTML = binding.value.toupperCase()
>
> }
>
> }
>
> }
>
> 1\) 使用指令
>
> v-my-directive=\'xxx\'

1.  ## Vue 实例生命周期

    1.  **效果**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image14.jpeg){width="2.3182436570428697in"
height="0.9966666666666667in"}

2.  **生命周期流程图**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image15.jpeg){width="1.8756977252843394in"
height="4.375in"}

3.  **vue 生命周期分析**

```{=html}
<!-- -->
```
1)  初始化显示

    -   beforeCreate()

    -   created()

    -   beforeMount()

    -   mounted()

2)  更新状态: this.xxx = value

    -   beforeUpdate()

    -   updated()

3)  销毁vue 实例: vm.\$destory()

    -   beforeDestory()

    -   destoryed()

        1.  ### 常用的生命周期方法

            1.  mounted(): 发送ajax 请求, 启动定时器等异步任务

            2.  beforeDestory(): 做收尾工作, 如: 清除定时器

# 第 2 章：Vue 组件化编程

1.  ## 模块与组件、模块化与组件化

    1.  ### 模块

        1.  理解: 向外提供特定功能的 js 程序, 一般就是一个js 文件

        2.  为什么: js 文件很多很复杂

        3.  作用: 复用js, 简化js 的编写, 提高js 运行效率

    2.  ### 组件

        1.  理解:
            > 用来实现局部(特定)功能效果的代码集合(html/css/js/image.....)

        2.  为什么: 一个界面的功能很复杂

        3.  作用: 复用编码, 简化项目编码, 提高运行效率

    3.  ### 模块化

> 当应用中的js 都以模块来编写的, 那这个应用就是一个模块化的应用。

### 组件化

> 当应用中的功能都是多组件的方式来编写的,
> 那这个应用就是一个组件化的应用,。

2.  ## 非单文件组件

    1.  模板编写没有提示

    2.  没有构建过程, 无法将ES6 转换成ES5

    3.  不支持组件的CSS

    4.  真正开发中几乎不用

3.  ## 单文件组件

    1.  ### 一个.vue 文件的组成(3 个部分)

##### 模板页面

> \<template\> 页面模板
>
> \</template\>

##### JS 模块对象

> \<script\> export default {
>
> data() {return {}}, methods: {},
>
> computed: {}, components: {}
>
> }
>
> \</script\>

##### 样式

> \<style\> 样式定义
>
> \</style\>

### 基本使用

1.  引入组件

2.  映射成标签

3.  使用组件标签

# 第 3 章：使用 Vue 脚手架

1.  ## 初始化脚手架

    1.  ### 说明

```{=html}
<!-- -->
```
1.  Vue 脚手架是Vue 官方提供的标准化开发工具（开发平台）。

2.  最新的版本是 4.x。

3.  文档:
    [[https://cli.vuejs.org/zh/]{.underline}](https://cli.vuejs.org/zh/)。

    1.  ## 具体步骤

> 第一步（仅第一次执行）：全局安装@vue/cli。
>
> npm install -g \@vue/cli
>
> 第二步：**切换到你要创建项目的目录**，然后使用命令创建项目
>
> vue create xxxx 第三步：启动项目
>
> npm run serve
>
> 备注：
>
> https://registry.npm.taobao.org
>
> ![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image16.png){width="3.598811242344707in"
> height="3.730413385826772in"}2. Vue 脚手架隐藏了所有webpack
> 相关的配置，若想查看具体的webpakc 配置， 请执行：vue inspect \>
> output.js

2.  **模板项目的结构**

## ref 与 props

> **ref**

1.  **作用：**用于给节点打标识

2.  **读取方式：**this.\$refs.xxxxxx

## props

1.  ![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image16.png){width="3.598811242344707in"
    height="3.730413385826772in"}**作用：**用于父组件给子组件传递数据

2.  ##### 读取方式一: 只指定名称

> props: \[\'name\', \'age\', \'setName\'\]

##### 读取方式二: 指定名称和类型

> props: {
>
> name: String, age: Number,
>
> setNmae: Function
>
> }

##### 读取方式三: 指定名称/类型/必要性/默认值

> props: {
>
> name: {type: String, required: true, default:xxx},
>
> }

## 混入

1.  Vue 插件是一个包含install 方法的对象

2.  通过install 方法给Vue 或Vue 实例添加方法, 定义全局指令等

    1.  ## 插件

```{=html}
<!-- -->
```
1.  Vue 插件是一个包含install 方法的对象

2.  通过install 方法给Vue 或Vue 实例添加方法, 定义全局指令等

    1.  ## Todo-list 案例

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image17.jpeg){width="4.50536854768154in"
height="2.1433333333333335in"}

### 组件化编码流程（通用）

1.  实现静态组件：抽取组件，使用组件实现静态页面效果

2.  展示动态数据：

    1.  数据的类型、名称是什么？

    2.  数据保存在哪个组件？ 3.交互------从绑定事件监听开始

    ```{=html}
    <!-- -->
    ```
    1.  ## Vue 中的自定义事件

> **绑定事件监听**
>
> **触发事件**

2.  ## 全局事件总线

    1.  ### 理解

```{=html}
<!-- -->
```
1.  Vue 原型对象上包含事件处理的方法

    1.  \$on(eventName, listener): 绑定自定义事件监听

    2.  \$emit(eventName, data): 分发自定义事件

    3.  \$off(eventName): 解绑自定义事件监听

    4.  \$once(eventName, listener): 绑定事件监听, 但只能处理一次

2.  所有组件实例对象的原型对象的原型对象就是Vue 的原型对象

    1.  所有组件对象都能看到Vue 原型对象上的属性和方法

    2.  Vue.prototype.\$bus = new Vue(), 所有的组件对象都能看到\$bus
        这个属性对象

3.  全局事件总线

    1.  包含事件处理相关方法的对象(只有一个)

    2.  所有的组件都可以得到

        1.  **指定事件总线对象**

        2.  **绑定事件**

        3.  **分发事件**

        4.  **解绑事件**

    ```{=html}
    <!-- -->
    ```
    1.  ## 消息订阅与发布

        1.  ### 理解

```{=html}
<!-- -->
```
1.  这种方式的思想与全局事件总线很相似

2.  它包含以下操作:

    1.  订阅消息 \--对应绑定事件监听

    2.  发布消息 \--分发事件

    3.  取消消息订阅 \--解绑事件监听

3.  需要引入一个消息订阅与发布的第三方实现库:
    [**PubSubJS**](https://github.com/mroderick/PubSubJS)

    1.  ### 使用PubSubJS

```{=html}
<!-- -->
```
1.  在线文档:
    [[https://github.com/mroderick/PubSubJS]{.underline}](https://github.com/mroderick/PubSubJS)

2.  下载: npm install -S pubsub-js

3.  相关语法

    1.  import PubSub from \'pubsub-js\' // 引入

    2.  PubSub.subscribe('msgName', functon(msgName, data){ })

    3.  PubSub.publish('msgName', data): 发布消息,
        触发订阅的回调函数调用

    4.  PubSub.unsubscribe(token): 取消消息的订阅

    ```{=html}
    <!-- -->
    ```
    1.  ## 过度与动画

        1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image18.jpeg){width="6.091011592300962in"
height="2.0266655730533683in"}

2.  **vue 动画的理解**

    1.  操作css 的trasition 或animation

    2.  vue 会给目标元素添加/移除特定的class

    3.  过渡的相关类名：

        1.  xxx-enter-active: 指定显示的transition

        2.  xxx-leave-active: 指定隐藏的transition

        3.  xxx-enter/xxx-leave-to: 指定隐藏时的样式

> ![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image19.jpeg){width="4.723819991251093in"
> height="2.5966666666666667in"}

### 基本过渡动画的编码

1.  在目标元素外包裹\<transition name=\"xxx\"\>

2.  定义class 样式

    a.  指定过渡样式: transition

    b.  指定隐藏时的样式: opacity/其它

# 第 4 章：Vue 中的 ajax

## 解决开发环境 Ajax 跨域问题

> 使用代理服务器

2.  **github 用户搜索案例**

    1.  **效果**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image20.jpeg){width="5.2580282152230975in"
height="3.366665573053368in"}

2.  **接口地址**

> [[https://api.github.com/search/users?q=xxx]{.underline}](https://api.github.com/search/users?q=xxx)

3.  ## vue 项目中常用的 2 个 Ajax 库

    1.  ### axios

> 通用的Ajax 请求库, 官方推荐，使用广泛

### vue-resource

> vue 插件库, vue1.x 使用广泛，**官方已不维护。**

4.  ## slot 插槽

    1.  ### 效果

> 效果一（不使用插槽）：

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image21.jpeg){width="4.111956474190726in"
height="1.9266666666666667in"}

> 效果二（默认插槽）：

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image22.jpeg){width="4.198650481189851in"
height="2.1033333333333335in"}

> 效果三（具名插槽）：

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image23.jpeg){width="4.279575678040245in"
height="2.1066666666666665in"}

> 效果三（作用域插槽）：
>
> ![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image24.jpeg){width="4.443740157480315in"
> height="2.063332239720035in"}

### 理解

> 父组件向子组件传递带数据的标签，当一个组件有不确定的结构时,
> 就需要使用slot 技术，注意：插槽内容是在父组件中编译后,
> 再传递给子组件的。

### 分类

1.  默认插槽

2.  命名插槽

3.  作用域插槽

# 第 5 章：vuex

1.  ## 理解 vuex

    1.  ### vuex 是什么

```{=html}
<!-- -->
```
1.  概念：专门在Vue 中实现集中式状态（数据）管理的一个Vue 插件，对vue
    应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

2.  Github 地址:
    [[https://github.com/vuejs/vuex]{.underline}](https://github.com/vuejs/vuex)

    1.  ### 什么时候使用 Vuex

        1.  多个组件依赖于同一状态

        2.  来自不同组件的行为需要变更同一状态

    2.  **案例**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image25.jpeg){width="3.1190627734033245in"
height="1.6633333333333333in"}

3.  **Vuex 工作原理图**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image26.jpeg){width="3.7112270341207347in"
height="3.04in"}

1.  ## vuex 核心概念和 API

    1.  **state**

        1.  vuex 管理的状态对象

        2.  它应该是唯一的

        3.  示例代码：

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image27.jpeg){width="1.2824628171478565in"
height="0.5833333333333334in"}

2.  ## actions

    1.  值为一个对象，包含多个响应用户动作的回调函数

    2.  通过commit( )来触发mutation 中函数的调用, 间接更新state

    3.  如何触发actions 中的回调？

> 在组件中使用: **\$store.dispatch(\'对应的action 回调名\')** 触发

4.  可以包含异步代码（定时器, ajax 等等）

5.  示例代码：

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image28.jpeg){width="2.6221587926509184in"
height="0.9661450131233595in"}

3.  ## mutations

    1.  值是一个对象，包含多个直接更新state 的方法

    2.  谁能调用mutations 中的方法？如何调用？

> 在action 中使用：**commit(\'对应的 mutations 方法名\')** 触发

3.  mutations 中方法的特点：不能写异步代码、只能单纯的操作state

4.  示例代码：

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image29.jpeg){width="2.0276290463692037in"
height="0.9479166666666666in"}

4.  ## getters

    1.  值为一个对象，包含多个用于返回数据的函数

    2.  如何使用？------ **\$store.getters.xxx**

    3.  示例代码：

> ![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image30.jpeg){width="2.1584995625546806in"
> height="0.9674989063867017in"}

5.  ## modules

    1.  包含多个module

    2.  一个module 是一个store 的配置对象

    3.  与一个组件（包含有共享数据）对应

# 第 6 章：vue-router

1.  ## 相关理解

    1.  ### vue-router 的理解

> vue 的一个插件库，专门用来实现SPA 应用

2.  ### 对SPA 应用的理解

    1.  单页Web 应用（single page web application，SPA）。

    2.  整个应用只有**一个完整的页面**。

    3.  点击页面中的导航链接**不会刷新**页面，只会做页面的**局部更新。**

    4.  数据需要通过ajax 请求获取。

3.  ### 路由的理解

    1.  ##### 什么是路由?

        1.  一个路由就是一组映射关系（key - value）

        2.  key 为路径, value 可能是function 或component

    2.  ##### 路由分类

        1.  后端路由：

            1.  理解：value 是function, 用于处理客户端提交的请求。

            2.  工作过程：服务器接收到一个请求时,
                根据**请求路径**找到匹配的**函数**来处理请求,
                返回响应数据。

        2.  前端路由：

            1.  理解：value 是component，用于展示页面内容。

            2.  工作过程：当浏览器的路径改变时, 对应的组件就会显示。

```{=html}
<!-- -->
```
2.  ## 基本路由

    1.  ### 效果

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image31.jpeg){width="4.750976596675415in"
height="2.903332239720035in"}

2.  **总结: 编写使用路由的 3 步**

```{=html}
<!-- -->
```
1.  定义路由组件

2.  注册路由

3.  使用路由

    1.  **嵌套（多级）路由**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image32.jpeg){width="4.761999125109361in"
height="3.0299989063867017in"}

2.  **路由传参**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image33.jpeg){width="4.524914698162729in"
height="3.716666666666667in"}

3.  **编程式路由导航**

![](C:/Users/shuho/Documents/Code/Vue_Demo02/media/image34.jpeg){width="4.038762029746282in"
height="4.136665573053368in"}

#### 相关 API：

1.  this.\$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)

2.  this.\$router.replace(path):
    用新路由替换当前路由(不可以返回到当前路由界面)

3.  this.\$router.back(): 请求(返回)上一个记录路由

4.  this.\$router.go(-1): 请求(返回)上一个记录路由

5.  this.\$router.go(1): 请求下一个记录路由

# 第 7 章：Vue UI 组件库

### 移动端常用UI 组件库

1.  Vant
    [[https://youzan.github.io/vant]{.underline}](https://youzan.github.io/vant/)

2.  Cube UI
    [[https://didi.github.io/cube-ui]{.underline}](https://didi.github.io/cube-ui)

3.  Mint UI
    [[http://mint-ui.github.io]{.underline}](http://mint-ui.github.io/)

    1.  ### PC 端常用UI 组件库

```{=html}
<!-- -->
```
1.  Element UI
    [[https://element.eleme.cn]{.underline}](https://element.eleme.cn/)

2.  IView UI
    [[https://www.iviewui.com]{.underline}](https://www.iviewui.com/)
