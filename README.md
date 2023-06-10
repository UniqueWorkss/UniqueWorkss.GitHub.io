

## **你的XPlane11/12全套开发指南**

### 背景

---

本指南旨在提供一份完整且详细的开发指南给各位开发者使用，不论你是资深的开发者还是刚入坑的小白，相信你都能从这份指南中收获新的知识。

虽然文档主要围绕X-Plane11/12，但是其中的部分内容诸如建模和材质的制作理念对于其他平台也适用。

在制作过程中，我们也参考了诸多教程文档，他们的链接也会附在教程的每一章节之中。同时我们也尽可能的为每一部分内容配图，以求直观易懂。

目前，站点主要由Unique Works维护，具体内容由开发者参与贡献。你可以点击[这里](#项目成员)查看他们的名单。

### 如何贡献

---

#### 1. 联系我们

如果你也想参与到文档的维护当中，你可以发送邮件到[gcaptain3@outlook.com](mailto:gcaptain3@outlook.com)，表明你的意愿。为了节省沟通时间，请在邮件中说明以下内容。

> 你的称呼，除邮箱外的联系方式（QQ）
>
> 你主要擅长的部分（建模，材质，代码，涂装，插件，地景等）
>
> 你的作品（如果有）

#### 2. 准备工具

##### 编辑器

编写文档需要使用markdown语言，请你准备以下其中之一编辑器。

- 记事本

- Visual Studio Code

- Typora（推荐）

  

?> 如果你使用markdown有困难，你也可以直接联系我们来排版。

##### 语法

Markdown的基本语法知识请参照 >>> [Markdown语法及原理从入门到高级](https://www.zhihu.com/tardis/zm/art/99319314?source_id=1005)  。请相信，这个语法非常简单，学习起来不会有任何负担。

本站支持的扩展语法

###### **强调内容**

适合显示重要的提示信息，语法为 `!> 内容`。

```markdown
!> 一段重要的内容，可以和其他 **Markdown** 语法混用。
```

!> 一段重要的内容，可以和其他 **Markdown** 语法混用。

###### **普通提示**

普通的提示信息，比如写 TODO 或者参考内容等。

```markdown
?> _TODO_ 完善示例
```

?> *TODO* 完善示例

###### **忽略编译链接**

有时候我们会把其他一些相对路径放到链接上，你必须告诉网站你不需要编译这个链接。 例如：

```md
[link](/demo/)
```

它将被编译为 `<a href="/#/demo/">link</a>` 并将加载 `/demo/README.md`. 可能你想跳转到 `/demo/index.html`。



###### 设置链接的 target 属性

```md
[link](/demo ':target=_blank')
[link](/demo2 ':target=_self')
```

###### 禁用链接

```md
[link](/demo ':disabled')
```


```
###### [Github 任务列表](https://docsify.js.org/#/zh-cn/helpers?id=github-任务列表)

```md
- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim
```

-  foo
-  bar
-  baz
-  [] bam <~ not working
   -  bim
   -  lim

###### 图片处理

###### 缩放

```md
![logo](https://picdl.sunbangyan.cn/2023/06/09/vfe62s.png ':size=WIDTHxHEIGHT')
![logo](https://picdl.sunbangyan.cn/2023/06/09/vfe62s.png ':size=50x100')
![logo](https://picdl.sunbangyan.cn/2023/06/09/vfe62s.png ':size=100')

<!-- 支持按百分比缩放 -->

![logo](https://picdl.sunbangyan.cn/2023/06/09/vfe62s.png ':size=10%')
```

![logo](https://picdl.sunbangyan.cn/2023/06/09/vfe62s.png ':size=50x100')



![logo](https://picdl.sunbangyan.cn/2023/06/09/vfe62s.png ':size=100')



![logo](https://picdl.sunbangyan.cn/2023/06/09/vfe62s.png ':size=10%')  

```markdown
<details>
<summary>自我评价（点击展开）</summary>

- Abc
- Abc

</details>
```

<details open="" style="-webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; box-sizing: border-box; font-size: 15px; color: rgb(52, 73, 94); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="-webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; box-sizing: border-box;">自我评价（点击展开）</summary><ul style="-webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; box-sizing: border-box; line-height: 1.6rem; word-spacing: 0.05rem; padding-left: 1.5rem;"><li style="-webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; box-sizing: border-box;">Abc</li><li style="-webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-size-adjust: none; box-sizing: border-box;">Abc</li></ul></details>

Markdown 内容也可以被 html 标签包裹。

```markdown
<div style='color: red'>

- listitem
- listitem
- listitem

</div>
```

<div style='color: red'>
- Abc
- Abc
</div>

### 项目成员
---
[@UniqueWorkss](https://github.com/UniqueWorkss)
