### Q:  为什么采用 Tailwindcss 的组件css开发形式

A:  作者之前开发的过程中, 使用过 antd 的这个组件库, 它的功能很强大, 但是使用时会感觉被限制在一个圈内, 在圈内做事半功倍, 一旦要出圈其实很不方便, 

所以在一开始 我会想象我自己的组件库, 应该是怎样的, 应该如何设计API

```jsx
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```


```jsx
<Card 
  title="Shoes!" 
  description="If a dog chews shoes whose shoes does he choose?" 
  buttonText="Buy Now" 
/>
```
antd 已经很好, 但是能否在实现类似 antd 强大的组件功能的基础上, 添加一些灵活性

对于使用者来说 第二种方法 其实是最好的, 暴露少量的api调整组件内容, 效率最高, 
但是一旦涉及到定制化的样式开发, 第一种方式暴露了最多的定制化能力,  这让我深刻体会到了技术没有银弹的说法,  只有最适合场景的开发技术, 没有万能的技术

对于需要配置定制的组件 , 可以学习chakara UI , shadcn/ui 组件分层去处理

对于组件库的开发者 , 我想要达到的效果是开箱即用, 使用者可以直接使用 达成业务效果, 也可以扩展

<!-- 例如 antd 覆盖组件本身的样式是一个痛点, 很多情况下只能通过 全局样式覆盖 -->

以下是作者在开发时调研的现代前端组件库

- antd 为代表的 headless UI 开发

antd 组件基于 [react-components](https://github.com/react-component) 的headless UI 库 提供功能,

headless 组件库的开发思想是很好的, 组件开发过程中专注于 组件逻辑的开发,  而样式 动画 的添加放在另外
的地方维护, 达到解耦的目的, 所以我们也是基于这个思路进行的分层开发

  > headless UI 库 可以参考
  >  - antd 依赖的 react-components  
  >  - shadcn/ui 所依赖的 Radix UI


接下来就是着色的过程, 基础库提供了功能, 现在需要 css 的方案去全局管理样式

这里又有几个选择

- Sass/Less 样式预处理器 (Sass Less)

- css in js ( emotion , cva )

- atom css 原子类css 代表(tailwindcss. unocss)  ,   shadcn/ui , daisyui为代表  


选择基于  shacn/ui(react)  shacn/vue(vue) 进行组件库的二次开发,

首先 shadcn/ui 不是组件库, 它在项目直接生成了代码, 不会有多余的依赖 , 其次 shadcn/ui 已经完成了大量的组件, 很多基础工作被解放, 可以专注于实现 组件高级功能 和 业务项目组件 的代码


<!-- chakra-ui -->





[为什么Shadcn UI 是2023前端最受欢迎的库](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/why-shadcn-ui-is-so-popular-in-2023-0f95e66f3ddc)

### Q: 介绍一下项目的结构分层

A:  


### Q: 这个项目的起点


