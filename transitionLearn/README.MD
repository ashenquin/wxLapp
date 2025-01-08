1、 transition过渡属性是CSS3的特性，可以为一个元素在不同样式之间的变化自动添加补间动画
    过渡从IE10开始兼容，移动端兼容良好，相较于js定时器实现的动画效果，更细腻，内存开销更小
    eg：transition: width 1s linear 0s;
                    属性  时长 曲线  延迟
    