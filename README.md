

### 背景

---

本指南旨在提供一份完整且详细的开发指南给各位开发者使用，不论你是资深的开发者还是刚入坑的小白，相信你都能从这份指南中收获新的知识。

虽然文档主要围绕X-Plane11/12，但是其中的部分内容诸如建模和材质的制作理念对于其他平台也适用。

在制作过程中，我们也参考了诸多教程文档，他们的链接也会附在教程的每一章节之中。同时我们也尽可能的为每一部分内容配图，以求直观易懂。

目前，站点主要由Unique Works维护，具体内容由开发者参与贡献。你可以点击[这里](#项目贡献者)查看他们的名单。

### 如何贡献

---

#### 1. 联系我们

如果你也想参与到文档的维护当中，你可以发送邮件到[gcaptain3@outlook.com](mailto:gcaptain3@outlook.com)，表明你的意愿。为了节省沟通时间，请在邮件中说明以下内容。

- 你的称呼，除邮箱外的联系方式（QQ）
- 你主要擅长的部分（建模，材质，代码，涂装，插件，地景等）
- 你的作品（如果有）

#### 2. 克隆文档

> [!warning]
> 在此之前请务必阅读本站的[用户协议](cn/terms_of_service)要求。

##### 2.1 Github客户端
复制本站仓库链接
```
https://github.com/UniqueWorkss/UniqueWorkss.GitHub.io.git
```

打开Github客户端，点击File -> Clone repository

![image-20230731152727701](https://bu.dusays.com/2023/07/31/64c7626c45eca.png)

选择URL选项卡，在弹出的窗口中，粘贴链接到第一行。在Local path选择你希望问的储存在你本地的位置。点击Clone即可。

![image-20230731152915134](https://bu.dusays.com/2023/07/31/64c762d6f2f4e.png)

##### 2.2 Git bash


访问Git官方网站[https://git-scm.com/downloads](https://git-scm.com/downloads)，然后下载适用于Windows的Git安装程序。网站会自动检测您的操作系统，然后提供正确的下载链接。

双击下载的Git安装程序（通常是一个名为"Git-版本号-64-bit.exe"或类似的文件），然后按照安装向导的指示进行操作。

> [!note]
> 您可以一路选择默认选项，但是务必勾选`Git bash here`。这将允许你从右键菜单打开Git bash。
> 在安装过程中，您可能会被询问是否要将Git添加到系统的环境变量中。选择`Git from the command line and also from 3rd-party software`，这样您就可以在命令提示符或其他终端中直接使用Git命令。

安装完成后，我们需要配置git。

桌面右键 - > Git Bash Here，在弹出的窗口输入以下命令

配置用户名和邮箱，注意替换`你的用户名`为你实际的用户名，替换`xxx@xx.com`为你GitHub邮箱。

```
git config --global user.name "你的用户名"
```

``` 
git config --global user.email xxxx@xx.com
```

输入以下命令，如果能看到自己用户名及邮箱那么就配置成功。

```
git config --global --list
```
接下来我们要生成密钥，
### 项目贡献者
---
[@UniqueWorkss](https://github.com/UniqueWorkss) | [@CCA9230]() | [@SpreaderVCA321]() | [@Alex]()
