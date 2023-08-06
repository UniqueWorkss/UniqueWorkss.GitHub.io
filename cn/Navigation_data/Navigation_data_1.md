**作者：**CCA9230

**日期：**2023/6/20

---

游戏中有2套导航数据，分别是default data和Custom Data。default data随游戏进行更新，Custom Data是从https://forum.navigraph.com/ 网站进行下载更新。

  添加自制机场地景时，经常会遇到没有导航数据问题，解决方法就是自行添加机场导航数据。

添加机场导航数据主要包括以下内容：

1.在earth_fix.dat文件中添加与机场相关的航点数据。

?> 该文件位于`...\X-Plane11(12)\Custom Data`下，你可以使用任意文本编辑器打开。

2.在earth_nav.dat文件中添加与机场相关的导航设施数据。

?> 该文件位于`...\X-Plane11(12)\Custom Data`下，你可以使用任意文本编辑器打开。

3.在earth_msa.dat 文件中添加 MSA 最低安全高度数据。

?> 该文件位于`...\X-Plane11(12)\Custom Data`下，你可以使用任意文本编辑器打开。

4.编写机场的进离场程序文件（ICAO.dat），并将其放入`...X-Plane11(12)\Custom Data\CIFP`文件夹中。

?> 如广州白云机场ICAO是ZGGG，则进离场程序文件则是ZGGG.dat