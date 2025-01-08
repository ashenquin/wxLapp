1、  一些元素带有默认margin，比如body、ul、p等，在开始制作网页时要清除
    * {
      margin: 0;
      padding: 0;
    } 存在效率问题，因为要选择所有的元素
    推荐使用：
    body, ul, p {
      margin: 0;
      padding: 0;
    }

2、 span元素具有空白折叠现象，并行书写可以消除默认间距

3、 margin在竖直方向上具有塌陷现象：小的margin会坍塌到大的margin里，使得竖直方向上的marign不叠加，但是横向的margin不受此影响

4、 盒子的水平居中，通过 margin: 0 auto; 设置盒子水平居中，区别于文字水平居中 text-align: center;

5、 margin的传递问题：
    页面上有父子两个元素，当子元素不设置margin-top时，二者都会位于浏览器顶部显示，当子元素设置margin-top时，父子元素依然紧贴，但是父元素会被子元素的margin-top拽下来。(此问题存在于纵向，不存在于横向)
    如何解决margin的传递问题:
    1、将margin替换成padding，但是由于padding会增大元素的尺寸，所以要注意元素尺寸的问题
    2、将父元素设置 overflow: hidden 意为“超出隐藏”，若是子元素必须超出父元素才能实现效果，则不建议使用此方法，否则子元素可能会被隐藏。 