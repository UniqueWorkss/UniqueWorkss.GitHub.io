**作者：**CCA9230

**日期：**2023/6/20

---

在X-Plane 11/X-Plane 12中，所有国内机场的导航数据，都是根据中国民用航空局 CAAC对外公开发布的《中华人民共和国航空资料汇编》（AIP）编写的；因此，这些机场也不需要自己编写导航数据。而中国民用航空局 CAAC 编制的《中国民航国内航空资料汇编》（NAIP）是不对外公开；所以，在 X-Plane 11/X-Plane 12 中没有 NAIP 中的机场或者是航路。

学习导航数据编写，更多情况是给已有机场航路添加新的导航方式，或者是给自建机场设计航路。下面通过几个范例介绍导航数据的编写过程。

> 给VHHX香港启德机场的13号跑道，添加RNP（AR）RW13进近程序

RNP（AR）程序能够提供固定转弯飞行模式（沿固定的转弯弧度或坡度转弯），所以，将RNP（AR）用于 VHHX 香港启德机场的13号跑道的转弯落地，可以给模拟飞行带来新的尝试和体验。

VHHX的 13号跑道使用IGS导航方式，因此，可以使用这一进近航路，如下图所示：

![](https://picso.sunbangyan.cn/2023/06/30/k28819.png)

在`IGS13`进近航路上已具备所有航点，只需要增加一个飞圆弧的中心点。从VHHX航点数据中发现是自带这个圆心点数据的，这个点就是 `RVH02`。下面需要测量圆弧的半径，计算圆弧的长度。

使用LittleNavmap软件的测量功能，测得`MM13`到`RVH02`的距离是`8425英尺`，换算成海里是`1.386海里`。测量圆弧（MM13-RW）的夹角是`64°`，根据公式计算`弧长=r(θ/180) *π* =8425(64/180) *π*=9406.0 英尺=1.6海里`。

<img src="https://picdo.sunbangyan.cn/2023/06/30/k307nn.png"  />



编写RNP（AR）RW13进近程序如下:

```
APPCH:010,A,R13,CH,CH,VH,D, ,V A, ,302,IF, , , , , ,   ,  ,  ,  ,  , ,08000,   ,11000, ,  ,  ,  , , , , , ,B,P,S;
APPCH:020,A,R13,CH,GOLF,VH,P,C,E  , ,302,TF, , , , , ,   ,  ,  ,2710,0070, ,06000,   ,   ,-,210,  ,  , , , , , ,B,P,S;
APPCH:030,A,R13,CH,SL,VH,D,B,N  ,R,302,TF, , , , , ,   ,  ,  ,0050,0045, ,   ,   ,   , ,  ,  ,  , , , , , ,B,P,S;
APPCH:040,A,R13,CH,D15,VH,P,C,EE , ,302,TF, , , , , ,   ,  ,  ,0460,0021, ,04500,   ,   , ,  ,  ,  , , , , , ,B,P,S;
APPCH:010,R,R13, ,D15,VH,P,C,E I, ,302,IF, , , , , ,   ,  ,  ,  ,  , ,   ,   ,11000, ,  ,  ,  ,TH,VH,D, , ,B,P,S;
APPCH:020,R,R13, ,OM13,VH,P,C,E F, ,302,TF, , , , , ,   ,  ,  ,0890,0089, ,01920,   ,   , ,  ,  ,  , , , , , ,B,P,S;
APPCH:030,R,R13, ,MM13,VH,P,C,E  , ,302,TF, , , , , ,   ,  ,  ,0089,0041, ,00660,   ,   , ,  ,-290,  , , , , , ,B,P,S;
APPCH:040,R,R13, ,RW,VH,D,B,N  ,R,302,RF, , , , , ,001386,  ,  ,  ,0016, ,00175,   ,   , ,  ,-290,  ,RVH02,VH,P,C, ,B,P,S;
APPCH:050,R,R13, ,RW13,VH,P,G,GY M, ,302,TF, , , , , ,   ,  ,  ,1370,0001, ,00140,   ,   , ,  ,-290,  , , , , , ,B,P,S;
APPCH:060,R,R13, ,TH,VH,D, ,VYM , ,302,TF, ,TH,VH,D, ,   ,0000,0000,  ,  , ,04500,   ,   , ,  ,  ,  , , , , , ,B,P,S;
APPCH:070,R,R13, ,TH,VH,D, ,VE H,R,302,HM, ,TH,VH,D, ,   ,  ,  ,3160,T010, ,04500,   ,   ,-,210,  ,  , , , , , ,B,P,S;
```

!> 严禁将本教程用于非法用途