**作者：**CCA9320

**日期：**2023/6/20

------

机场的进离场程序文件（文件名称的格式是ICAO.data）包含：

- SID离场场程序
- STAR进场程序
- APPCH进近程序
- PRDAT程序数据（需要时）
- RWY跑道数据

### 1.机场的离场/进场/进近程序行各字段的定义

X-Plane 12的离场/进场/进近程序使用统一的行格式，共有38个字段，106位，如下表所示：

![image-20230705182818057](https://img1.imgtp.com/2023/07/05/uwKPzRut.png)

### 2.   航径终止码对应字段填写规则

![](https://img1.imgtp.com/2023/07/05/XmIce2Fy.png)

### 3. 离场/进场/进近程序主要字段填写要求

#### 3.1航线类型（Route Type）

##### 3.1.1 离场航线类型选择如下表所示：

![](https://img1.imgtp.com/2023/07/05/DsCfr59k.png)

按照不同导航方式，常用离场程序的航线类型（Route Type)分别有2种，一种是按照指定的导航台引导飞行时，选择航线类型“2”；另一种是按照RNAV引导的航点飞行时，选择航线类型“5”。

##### 3.1.2进场航线类型选择如下表所示：

![image-20230705183242402](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20230705183242402.png)

按照不同导航方式，常用进场程序的航线类型（Route Type）分别有2种，一种是按照给定的VOR导航台方位引导飞行时，选择航线类型“2”；另一种是按照RNAV引导的航点飞行时，选择航线类型“5”。

##### 3.1.3进近航线类型选择如下表所示：

![image-20230707164348488](https://img1.imgtp.com/2023/07/07/L9VBWyAk.png)



#### 3.2离场/进场/进近程序名称（SID/STAR/Approach Identifier）  

离场或进场程序名称可以从机场航图上得到。

进近程序名称的命名规则如下：

![](https://img1.imgtp.com/2023/07/07/aS9HDUcy.png)

例如：ILS进近：I02L-Z；VOR/DME进近：D20；RNAV 进近：R02；GLS进近： J32；NDB/DME 进近：Q02；NDB-X进近： N05。

 

#### 3.3航段起始过渡点名称（Transition Identifier）

##### 3.3.1 离场/进场程序

每行填写起飞/落地跑道标识符，如：RW09、RW12L。

如果程序适用所有跑道填写：ALL；

如果程序适用于多条平行跑道，填写“RWxxB”（xx跑道编号）。

##### 3.3.2过渡程序

每行填写过渡点IAF标识符。

##### 3.3.3进近及复飞程序

每行填空格。

 

#### 3.4  航段末端定位点名称（Fix Identifier）

   离场/进场/过渡/进近：每行填写本航段到达的定位点名称。

#### 3.5 航段末端定位点所属管制区域代码（ICAO Code）

   ZB-中国华北。ZG-中国华南，ZH-中国华中，ZL-中国西北，ZP-中国云南，ZS-中国华东，ZU-中国西南，ZW-中国新疆，ZY-中国东北。 

#### 3.6  航段末端航点类型代码及子代码（Section Code ，Subsection Code）

  ![](https://img1.imgtp.com/2023/07/07/PJe5eM3T.png)

 

 

 

 

#### 3.7 航点描述代码（Waypoint Description Code）

![image-20230707164444832](https://img1.imgtp.com/2023/07/07/p6ujLMsv.png)

 

#### 3.8 RNP导航精度表示方式

  当RNP导航精度≥1.0时，公式：0x * 100，字段：0x0。如：RNP 1.00，公式：01 *100=1，字段：010。

当RNP导航精度＜1.0时，公式：x0 *10-2，字段：x02。如：RNP 0.30，公式：30 *10-2=0.30，字段：302。

通常情况下，有RNP导航精度要求的进离场程序，其精度要求为RNP1.00，进近过程的过渡点程序，其精度要求为RNP1.00。RNP（AR）进近过程的过渡点程序和最终进近程序，其精度要求为RNP 0.30。

#### 3.9 航径终止码（Path and Termination）

![image-20230707164520206](https://img1.imgtp.com/2023/07/07/aSTpt4hD.png)

 

![image-20230707164529279](https://img1.imgtp.com/2023/07/07/DAATRJGz.png)

 

![image-20230707164553356](https://img1.imgtp.com/2023/07/07/axs4NF1h.png)

 

![](https://picsl.sunbangyan.cn/2023/06/24/r7kiui.png)

 

![](https://picdl.sunbangyan.cn/2023/06/21/gqosa3.png)



说明：仅适用于RNAV程序设计中使用航径终止码，如下表所示：

![](https://picdl.sunbangyan.cn/2023/06/21/gr49bx.png)

#### 3.10 转航向有效（Turn Direction Valid）

  转航向有效需要与转湾方向字段配合使用，使用字符“Y”。

#### 3.11 指定使用的导航设备（Recommended Navaid）

以导航设施为定位点或按照给出的导航设施方位飞行时，须指定导航设施的标识符。

#### 3.12 导航设施所属管制区域（ICAO Code）

ZB-中国华北。ZG-中国华南，ZH-中国华中，ZL-中国西北，ZP-中国云南，ZS-中国华东，ZU-中国西南，ZW-中国新疆，ZY-中国东北。

#### 3.13 导航设施类型代码及子代码（RECD NAV Section，RECD NAV Subsection）

![](https://picdl.sunbangyan.cn/2023/06/21/gr8ak4.png)

 

#### 3.14 圆弧半径（ARC Radius）

  用于RF航段，指定圆弧半径，表示方法：6nm= 006000。

#### 3.15由指定导航设施定位的方位点的径向线磁方向角（Theta）

当导航设施作为定位点时，飞向或飞离导航设施时，磁方向角填写“0000”。

当需要按照指定导航设施给定的方位飞到指定的航点时，填写该航点与导航设施的径向线磁方向角。

 

#### 3.16由指定导航设施定位的方位点的DME弧线距离（Rho）

当导航设施作为定位点时，飞向或飞离导航设施时，DME弧线距离填写“0000”。

当需要按照指定导航设施给定的方位飞到指定的航点时，填写该航点与导航设施的DME弧线距离。

#### 3.17 指定飞行的磁航向角（Magnetic Course）

填写飞行器实际飞行的磁航向。等待程序时，填写入航边角度。

#### 3.18指定飞行的距离或等待时间（Route Distance/Holding Distance or Time）

填写飞行器实际飞行的距离。等待程序时，填写等待时间。

#### 3.19高度限制类型（Altitude Description）

根据航图标注的航点高度要求，选择高度限制类型。高度限制类型如下表所示：

![image-20230621101313154](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20230621101313154.png)

#### 3.20 高度1和高度2（Altitude 1，Altitude 2）

根据航图标注的航点高度要求，填写高度值。

#### 3.21过渡高度或过渡高度层（Transition Altitude /Level）

离场程序有过渡高度（TA）要求时，在离场程序的起始行填写过渡高度值。进场或进近程序有过渡高度层（TL）要求时，在进场的起始行或进近程序的FAF点填写过渡高度层值。

#### 3.22速度限制类型（Speed Limit Description）

根据航图标注的航点速度要求，选择速度限制类型。速度限制类型如下表所示：

![](https://picdl.sunbangyan.cn/2023/06/21/grq8er.png)

#### 3.23速度极限值（Speed Limit） 

根据航图标注的航点速度要求，填写速度极限值。

#### 3.24 下滑角度（Vertical Angle）

如：-300：-3°，-350：-3.5°

#### 3.25垂直比例尺（Vertical Scale Factor）

本节内容略。

#### 3.26圆弧中心点或TAA（MSA）的中心点（Center Fix or TAA Procedure Turn Indicator）

飞RF航段时，填写圆弧中心点名称。

进离场程序有最低扇区高度（MSA）要求时，在进离场程序第一行填写MAS中心点名称。ILS进近程序有最低扇区高度MSA要求时，在过渡点程序起始行和最后进近点（FAF）程序行填写MAS中心点名称。VOR/DEM进近程序有最低扇区高度MSA要求时，在最后进近点（FAF）程序行填写MAS中心点名称。

#### 3.27圆弧中心点或TAA（MSA）的中心点的所属管制区（ICAO Code）

ZB-中国华北。ZG-中国华南，ZH-中国华中，ZL-中国西北，ZP-中国云南，ZS-中国华东，ZU-中国西南，ZW-中国新疆，ZY-中国东北。

 

 

 

 

 

#### 3.28 圆弧中心点或TAA（MSA）的中心点类型代码及子代码（Section Code ，Subsection Code）

![](https://picdl.sunbangyan.cn/2023/06/21/grun7v.png)

注：MSA选择机场中心时，中心点类型代码及子代码为P，A。

 

#### 3.29多代码或TAA管制区域的标识符（Multiple Code or TAA Sector Identifier）

本节内容略。

 

 

 

 

#### 3.30 GNSS/FMS授权指示（GNSS/FMS Indication）

![](https://picdl.sunbangyan.cn/2023/06/21/gsd87q.png)

注：该字段仅用于进近程序。

 

 

 

 

 

 

 

 

 

 

#### 3.31进近航路限定符1和限定符2（Route Qualifier 1，Route Qualifier 2）

![](https://picdl.sunbangyan.cn/2023/06/21/gsimnz.png)

#### 进近航线类型对应GNSS/FMS指示/限定符1/限定符2的常用组合示例：

![](https://picdl.sunbangyan.cn/2023/06/21/gsmgxz.png)



### 4.   添加跑道数据

跑道数据的格式

![](https://picdl.sunbangyan.cn/2023/06/21/gt05l1.png)

注1：跑道识别码的字符数5位，不足5位时必须添加空格。ILS/MLS/GLS标识符的字符数4位，不足4位时必须添加空格。

注2：跑道坡度第一个位是+或-符号，“+”表示向上，“-”向下的坡度；最大坡度为（+9.000或-9.000）。

注3：进近导航设备类别/等级表：

![](https://picdl.sunbangyan.cn/2023/06/21/gt7f31.png)

 

 

 

 

 

 

 

 

 

 

### 5.添加PRDAT 数据

PRDAT 字段格式：

![](https://picdl.sunbangyan.cn/2023/06/21/gto7z0.png)

是否授权字符表：

![](https://picdl.sunbangyan.cn/2023/06/21/gts8bd.png)

 

 

 

 

 

FAS、LNAV/VNAV、LNAV服务级别名称字符表：

![](https://picdl.sunbangyan.cn/2023/06/21/gu3urc.png)

RNP服务级别值字符：

![](https://picdl.sunbangyan.cn/2023/06/21/gu6qze.png)

RNP精度值含义：031表示RNP 0.3，03×10^(-1)=0.3，152表示RNP 0.15，15* 10^(-2)=0.15，112表示RNP 0.11，11×10^(-2)=0.11。

 

采用RNP导航精度的进近时，需要在FAF点前添加PRDAT 数据。

常见编写示例：

PRDAT: ,     ,A, LNAV/VNAV,A,   LNAV, ,  , ,  , ,  , ,  ,R,S;

PRDAT: ,     , ,     ,A,   LNAV, ,  , ,  , ,  , ,  ,J,S; （适用于阶梯下降）

 

注：RNP（AR）进近程序不需要添加PRDAT 数据。

 

### 6.注意事项

!>在原有机场文件里添加新的航路时，一定要进行备份；否则，更新导航数据后会造成添加的新航路程序丢失。