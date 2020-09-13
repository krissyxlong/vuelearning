1. 基础
   1.1 动态路由匹配

- 使用 :[动态参数]，this.\$router.params 可以取出参数
- 路由参数发生变化，组件声明周期钩子函数不会被触发执行。如果需要做相应处理，可以用 watch 监听 \$router 变化，或者使用[导航守卫]
- 捕获所有路由：\*
- 高级匹配模式

  1.2 嵌套路由

- 类似 react-router

  1.3 编程时导航

- 除了 <router-link> 静态声明导航外还可以动态编写代码实现导航
  router.push、router.replace、router.go
  beforeRouteUpdate：捕捉路径不变参数变化的场景

  1.4 命名路由

- 添加 name 属性
  1.5 命名视图
  1.6 重定向
- 重定向：redirect
- 别名：alias
  1.7 路由组件传参
  很多样化，组件可以放到任何地方
  1.8 h5 history 模式
- 需后端配合配置
- 列出所有可能的路径，其余路径配置到一个 404 页面

2. 进阶
   2.1 导航守卫

- 全局前置守卫

```javascript
// 做页面级别的权限判断
router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
});
```

- 全局解析守卫
  route.beforeResolve

- 全局后置钩子

```javascript
router.afterEach((to, from) => {
  // ...
});
```

- 路由独享守卫

```javascript
const router = new VueRouter({
  routes: [
    {
      path: "/foo",
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
});
```

- 组件内守卫

```javascript
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
};
// 完整导航解析流程：
// 导航被触发。
// 在失活的组件里调用 beforeRouteLeave 守卫。
// 调用全局的 beforeEach 守卫。
// 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 在路由配置里调用 beforeEnter。
// 解析异步路由组件。
// 在被激活的组件里调用 beforeRouteEnter。
// 调用全局的 beforeResolve 守卫 (2.5+)。
// 导航被确认。
// 调用全局的 afterEach 钩子。
// 触发 DOM 更新。
// 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
```

2.2 路由元信息
有个 meta 字段，路由唯一性标识？
2.3 过渡动效
可以使用 <transition> 组件添加过渡效果

- 单个路由过渡
- 基于路由的动态过渡

  2.4 数据获取

- 导航完成后获取数据
  在 created 中获取数据，类似 react 总 componentDidMount
- 导航完成前获取数据
  使用 beforeRouteEnter 中的 next 方法。注意中间状态的展示

  2.5 滚动行为
  页面切换时滚动条位置的控制

- 支持 scrollBehavior 方法
- 异步滚动

  2.6 路由懒加载

- 第一：将异步组件定义为一个返回 Promise 的工厂函数
- 使用动态 import 语法
- 把组件按组打包
