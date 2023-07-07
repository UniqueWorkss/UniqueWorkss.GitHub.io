

飞机的涂装，狭义上来说就是机身上各种线条、图案、文字的组合。涂装的设计和图案一般由航空公司根据自身的标识，品牌形象等进行定制，以此区别于不同航空公司的飞机。



在X-Plane中制作飞机的涂装大致与其他平台的制作方法相似，但在制作之前，你需要了解以下概念：

### 1.UV

我们在小学都学习过，如果将一个正方体沿着几条切割线展开，那么你就能将一个三维的立方体，展开成二维的平面。

![](https://picss.sunbangyan.cn/2023/07/02/gmycrn.png)

![](https://picdl.sunbangyan.cn/2023/07/02/gnncal.png)

切割展开的这个过程，我们称之为UV展开。在这个过程中，三维正方体上每个顶点通过UV映射，将UV坐标分配给了展开平面上的每个顶点。与常见的XY坐标系类似，U表示水平轴，V表示垂直轴，取值为0-1。U=0表示纹理的最左边，U=1表示纹理最右边。V=0表示纹理的最底部，V=1表示纹理最顶部。

现在，我们将正方体换为飞机模型，并在机身上添加要切割的线，就能得到与正方形展开类似的，飞机模型的平面贴图。

![](https://picss.sunbangyan.cn/2023/07/02/gn4jmz.png)

![](https://picdl.sunbangyan.cn/2023/07/02/god01t.png)

### 2.模板（Paintkit）

#### 2.1模板是什么

现在你已经知道了，如何将三维的机身转换为二维的的平面。那么如果将展开的机身平面比作一张白纸，制作涂装的过程就是在白纸上进行作画。

将UV图导出做参考，使用Photoshop或Adobe Substance Painter进行机身贴图的制作，添加铆钉线，标志，污渍，阴影等，我们就能得到平常在涂装文件夹中看到的空白的机身贴图。我们称之为模板，英文是Paintkit。

在这些模板上再次作画，放入机模livery文件夹中，就可以得到一份可在游戏中加载的涂装了。

![](https://picss.sunbangyan.cn/2023/07/02/gpd5h3.png)

![](https://picdl.sunbangyan.cn/2023/07/02/gr8ib4.png)

![](https://picst.sunbangyan.cn/2023/07/02/grpmag.png)

一般来说，各大厂商都会发布自己机模的空白模板给涂装制作者进行使用。模板通常是psd文件，也有少部分是spp文件。psd使用ps打开即可，spp则需要Adobe Substance Painter打开。在基础教程中，我们暂不涉及spp，这个会在高级教程中讲解。

当然也有一些厂商不发布模板，需要我们自己制作。

#### 2.2寻找模板

你可以使用bing搜索关键词 `机模全称 + paintkit  `  来获取，比如 `tls paintkit`。你也可以加上机型关键词来精确得到搜索结果。

![](https://picss.sunbangyan.cn/2023/07/02/kn539q.png)

![](https://picst.sunbangyan.cn/2023/07/02/gt4pwi.png)



### 3.涂装文件组成

#### 3.1 文件层级

在此之前，我们先了解下机模如何读取物体及贴图的。正常来说，所有机模模型及贴图储存在机模文件夹objects中。XPlane会根据在acf中的设定，在该路径中寻找物体及贴图并加载。

![](https://picss.sunbangyan.cn/2023/07/02/gtju22.png)

![](https://picdm.sunbangyan.cn/2023/07/02/kmjowh.png)

我们双击任一个obj格式的文件，比如A330_fuselage_A.obj。

![](https://picdm.sunbangyan.cn/2023/07/02/knbsel.png)

在红圈处，你可以看到这里指定了贴图的路径，包括颜色贴图，法线贴图，光泽贴图。贴图是和obj在同个文件夹，名字是A330_fuselage_a_ ALB.png等。

再打开一个cabin.obj，这里还指定了夜间贴图。

![](https://picdm.sunbangyan.cn/2023/07/02/guc7tm.png)

各标签含义如下

- TEXTURE 指定模型的颜色贴图
- TEXTURE_MAP normal 指定模型的法线贴图（另一种写法 TEXTURE_NORMAL）
- TEXTURE_MAP material_gloss 指定模型的光泽贴图（X-Plane12新特性）
- TEXTURE_LIT 指定模型的夜间贴图

如果我们改变贴图的内容，并替换掉原本的贴图，那么我们在游戏中就能看到贴图相应的变化。但这对于多个涂装来说显然不是个便捷的方法，你总不能想每次切涂装都要进文件夹手动拖拽文件吧。那么，在XPlane中，我们可以在机模文件夹下创建一个Liveries文件夹，在这个文件夹下以航司名称为名新建各个文件夹。XPlane将会识别这些文件夹并在机模设置界面涂装选择处显示对应名称。

![](https://picss.sunbangyan.cn/2023/07/02/guxp90.png)

![](https://picss.sunbangyan.cn/2023/07/02/gusc9s.png)

完成这一步后，将这个以航司名称命名的文件夹视为机模文件夹（伪），在里面新建与机模主文件夹相同层级的objects文件夹。将贴图放入其中就可以了。需注意，这个贴图名称必须和原贴图名称相同才能实现替换效果。

对于这架A330中，你还可以看到有cabin文件夹，这是存放驾驶舱，客舱模型及贴图的地方。如果你制作了自己的客舱贴图，你可以在你制作的涂装文件夹中创建同样的cabin文件夹，并放入贴图。

![](https://picdm.sunbangyan.cn/2023/07/02/gvdja0.png)

![](https://picdl.sunbangyan.cn/2023/07/02/gvk2tm.png)



总结一下，默认贴图与涂装文件层级关系如下：

```> - A330
>   - objects
>     - 模型及贴图 
>     - cabin
>       - 模型及贴图
>   - liveries	
>     - 涂装名称
>       - objects
>         - 贴图
>         - cabin
>           - 贴图 	
```
#### 3.2文件格式
X-Plane支持PNG与DDS格式，最常用的是PNG格式。

- PNG图像包含RGBA通道，其中R、G、B通道用于表示颜色信息，A用于表示透明度信息。

- DDS格式支持各类压缩算法，可以提供更高的性能和更快的加载速度。DDS文件可以可以使用不同压缩格式，比如DXT1、DXT3和DXT5以及不同程度MIP贴图级别，以实现更好的性能和视觉效果。

?> 要想在Photoshop中打开dds格式文件，你需要额外下载插件 [Nvidia Texture Tools](https://developer.nvidia.cn/zh-cn/nvidia-texture-tools-exporter)

你可以根据个人需要选择不同格式来制作。

