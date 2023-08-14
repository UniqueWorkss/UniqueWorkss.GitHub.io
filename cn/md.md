
编辑器
编写文档需要使用markdown语言，请你准备以下其中之一编辑器。
- 记事本 （免费）

优点是免费，轻量，便捷。缺点是没有预览

- Visual Studio Code （免费）

优点是免费，有预览。缺点是界面相对没有那么美观

- Typora（付费）

优点是有预览，界面简洁可以自定义主题。缺点是需要一次性付费，如果使用频率不高可能没有那么划算。

>[!tip] 
>如果你使用markdown有困难，你也可以直接联系我们来排版。

### 基础语法
Markdown的基本语法知识请参照 >>>[ Markdown语法及原理从入门到高级 ](https://www.zhihu.com/tardis/zm/art/99319314?source_id=1005)。请相信，这个语法非常简单，学习起来不会有任何负担。

### 本站支持的扩展语法

#### 强调内容

适合显示重要的提示信息，语法为  `!> 内容`。

!> 一段重要的内容，可以和其他 **Markdown** 语法混用。!> 一段重要的内容，可以和其他 Markdown 语法混用。

#### 普通提示

普通的提示信息，比如写 TODO 或者参考内容等。

?> _TODO_ 完善示例?> TODO 完善示例

#### 忽略编译链接

有时候我们会把其他一些相对路径放到链接上，你必须告诉网站你不需要编译这个链接。 例如：
[link](/demo/)它将被编译为 link 并将加载 /demo/README.md. 可能你想跳转到 /demo/index.html。
设置链接的 target 属性

[link](/demo ':target=_blank')
[link](/demo2 ':target=_self')禁用链接
[link](/demo ':disabled')###### [Github 任务列表]()

```
md
- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] limfoo

```

- bar
- baz
- [] bam <~ not working
	- bim
	- lim

#### 展开

```
<details>
<summary>自我评价（点击展开）</summary>

- Abc
- Abc

</details>

```

<details>
<summary>自我评价（点击展开）Abc</summary>

Abc

</details>

#### 自定义标签

Markdown 内容也可以被 html 标签包裹。

```
<div style='color: red'>

- listitem
- listitem
- listitem


</div>

```
 
<div style='color: red'>

- listitem
- listitem
- listitem


</div>