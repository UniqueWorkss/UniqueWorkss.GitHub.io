

## 一、 基本概念

### 1.什么是DataRefs

在开始之前，你需要了解什么是DataRefs。 

DataRefs是游戏内连接各项数据与用户之间的桥梁。比如说你所看到的指示空速就储存在sim/cockpit2/gauges/indicators/airspeed_kts_pilot之中。Xplane默认的DataRefs以sim开头，但在你开发的过程中，你可能看到有些DataRefs并非如此，这些则是开发者自定义的DataRefs。

关于Xplane内置的DataRefs，你可以在这里找到 --> [Xplane DataRefs]([X-Plane Datarefs - X-Plane Developer](https://developer.x-plane.com/datarefs/))

Xplane中的DataRefs分为只读类和可编辑类。你可以通过只读类或编辑类DataRefs来读取相关信息，也可以通过编辑类DataRefs来改写部分信息。我们刚才所举例的sim/cockpit2/gauges/indicators/airspeed_kts_pilot就属于可编辑的类型。查询结果如图。

![image-20230415215251262](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20230415215251262.png)

### 2.开发的语言和工具

开发所使用的语言是Lua。FlyWithLua使用LuaJIT作为编译器。这使得代码执行速度非常快，比原来的Lua解释器快得多，同时它支持Windows， Linux，Mac OS X三个平台，你无需担心你插件的系统适配问题。

为了使用这种语言进行编辑，你需要一个编辑器。在此，我非常向你推荐[Virsual Studio Code](https://code.visualstudio.com/)。它的代码高亮相当好用，同时支持多种语言编辑。不论你是MacOS还是Windows，这款软件都能给你带来优秀的编辑体验。

![image-20230415220427697](https://picdl.sunbangyan.cn/2023/06/09/vjo3ni.png)

为了在游戏中获取DataRefs及观察DataRefs的改变情况，你还需要下载 [DataRef Tool](https://datareftool.com/)

![Screenshot of DataRefTool](https://datareftool.com/datareftool.png)



当你完成以上操作后，你就可以开启下一章开始你的开发之旅了。



## 二、 代码的一些逻辑

### 1. if

首先请看这一段代码：

![image-20230416104836151](https://picdl.sunbangyan.cn/2023/06/09/vk8w75.png)

我们定义了一个Door_Status的功能，当指示空速小于15时，Door_Open = 1（开门）。

### 2. elseif

再看这段：

![image-20230416105111436](https://picdl.sunbangyan.cn/2023/06/09/vm1tao.png)

