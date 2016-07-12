<script>
    var oXh = $('xh');
    var oSx = $('sx');
    var oText = $('text');
    var oSpanId = $('spanID');
    var oPrev = $('prev');
    var oNext = $('next');
    var oImgID = $('imgID');
    var OPId = $('pId');
    var arr = ['images/tab/1.jpg','images/tab/2.jpg','images/tab/3.jpg','images/tab/4.jpg'];
    var arrPid = ['这是第一张','这是第二张','这是第三张','这是第四张'];
    var num = 0;
    var onOff = true;
    //循环切换事件
    oXh.onclick = function () {
        onOff = true;
        oText.innerHTML = '图片循环切换';
        oText.style.color = 'red';
    }
　　//顺序切换事件
    oSx.onclick = function () {
        onOff = false;
        oText.innerHTML = '图片顺序切换';
        oText.style.color = 'blue';
    }
    //默认显示第一张图片
    function funTab(){
        oImgID.src = arr[num];
        OPId.innerHTML = arrPid[num];
        oSpanId.innerHTML = (num+1) +'/'+ (arr.length);
    }
    funTab();
    //下一张
    oNext.onclick = function(){
        num++;
        if(num == arr.length){
            if(onOff == true){
                num = 0;
            } else {
                num = arr.length-1;
                alert('已经到了最后一张了，~ ~!');
            }
        }
        funTab();
    }
    //上一张
    oPrev.onclick = function(){
        num--;
        if(num == -1){
            if(onOff == false){
                num = 0;
                alert('这已经是第一张了，~ ~!');
            } else{
                num = arr.length-1;
            }
        }
        funTab();
    }
    //ID调用通用函数
    function $(id){
        return document.getElementById(id);
    }
</script>
