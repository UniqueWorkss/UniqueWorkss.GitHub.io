**作者：**CCA9320

**日期：**2023/6/20

------

### 1.导航设备起始代码的含义

![](https://picdl.sunbangyan.cn/2023/06/20/ig3d96.png)

 

### 2. 添加NDB导航设备

按照NDB导航设备各字段的定义填写数据

![](https://picdl.sunbangyan.cn/2023/06/20/igh73m.png)

### 3.添加VOR/DME导航设备

按照VOR/DME导航设备各字段的定义填写数据

![](https://picdl.sunbangyan.cn/2023/06/20/igka6a.png)

### 4.添加ILS（LOC/GS/DME）导航设备

按照ILS（LOC/GS/DME）导航设备各字段的定义填写数据

![](https://picdl.sunbangyan.cn/2023/06/20/igmvoa.png)

注1：LOC航向道的角度计算公式：`下滑跑道磁航向角×360 +下滑跑道真实航向角`。如：下滑跑道磁航向角204.00°，跑道真实航向角是201.849°，

经公式计算：`204×360+201.849=73641.849`。

注2：GS下滑角航向角字段中，`300`表示下滑角`3°`，`201.849°`表示跑道真实航向角。

注3：LOC设备名称根据实际设备，可选择使用`ILS-cat-I`, `ILS-cat-II`, `ILS-cat-III`。

### 5.添加GLS导航设备

按照GLS导航设备各字段的定义填写数据

![](https://picdl.sunbangyan.cn/2023/06/20/igpy65.png)

### 6.添加Marker beacons导航设备

按照Marker beacons导航设备各字段的定义填写数据

![](https://picdl.sunbangyan.cn/2023/06/20/iha9ka.png)

### 7. 添加FPAP导航设备

按照FPAP导航设备各字段的定义填写数据

![](https://picdl.sunbangyan.cn/2023/06/20/iiieni.png)

注1：目前支持的进近类型包括：`LP`， `LPV`， `APV-II` ， `GLS`。

### 8. 添加SBAS/GBAS导航设备

按照SBAS/GBAS导航设备各字段的定义填写数据

![](https://picdl.sunbangyan.cn/2023/06/20/ik3mmi.png)

注1：SBAS服务的提供商可以是：WAAS、EGNOS和MSAS。如果没有指定供应商，或者这属于GLS进近，可以使用“GP”作为默认值。

### 9. 将导航设备添加到earth_nav.dat文件中

按照上述方法，编写出新增机场所需的全部导航设备数据，并添加到earth_nav.dat文件中即可。earth_nav.dat文件可以用EmEditor软件进行编辑，将导航设备数据复制到末尾的99结束行前面，并保存退出即可。

### 10.备份 

!> 由于每次更新导航数据时，会造成自行添加的机场导航设备数据被清除，因此，要做好数据备份。在完成导航数据更新后，重新复制即可。

 

