前面我们讲到了在 Substance 中用透贴的方式给机模贴一个图案，接下来我们使用投影的方式来实现同样的效果。这种方法更加便捷，后期可操作性强。

我们以 Condor A339 为例。

![d-anrj-condor-airbus-a330-941_PlanespottersNet_1432038_e9b6206c42_o.jpg (1920×1296) (plnspttrs.net)](https://cdn.plnspttrs.net/03313/d-anrj-condor-airbus-a330-941_PlanespottersNet_1432038_e9b6206c42_o.jpg)

<small>拍摄者：[Sierra Aviation Photography](https://www.planespotters.net/photos/gallery/Sierra-Aviation-Photography)</small>

这里先讲一下原理。我们将一个长方形，首尾相接，组成一个圆环，有光线垂直于圆环平面的方向进行照射，这个圆环在机身上的投影就是我们看到的，机身上一圈一圈的黄色条纹。从四周投影，就可以做出这个涂装了。

![image-20230811160055280](https://bu.dusays.com/2023/08/11/64d5eaca23279.png)

在 PS 中做好素材，这里我使用的尺寸为1024*4096。

![image-20230811155151739](https://bu.dusays.com/2023/08/11/64d5e860ef8f9.png)

---

随后将模型与导入 Substance，先点击模板（Template）选择如图配置，设置材质分辨率4096x4096，点击文件（File）导入模型，最后点击OK完成文件创建。

![image-20230814215602491](https://bu.dusays.com/2023/08/14/64da32596a8a0.png)

>[!warning]
>Substance对低配置电脑不友好，在操作过程中可能会卡顿，甚至闪退导致文件损坏。请养成随时按Ctrl+s的习惯。这里建议创建完之后马上点击Ctrl+s保存。

将图片素材包括模板拖进如图资产库中。在弹出的窗口设置素材为Texture，导入到library'your_assets'。

![image-20230814214836499](https://bu.dusays.com/2023/08/14/64da30b70e3b0.png)

![image-20230814215804690](https://bu.dusays.com/2023/08/14/64da32c794c02.png)