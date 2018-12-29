// 菜单鼠标移动标题显示
$(function(){
    $(".menu ul li a").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        $("body").append("<div id='div_toop'>"+ this.myTitle +"</div>");
        $("#div_toop").css({
            "position":"absolute",
            "top":(e.pageY-15)+"px",
            "left":"45px",
            "width":"80px",
            "height":"40px",
            "background":"url(./src/images/aiBubble.svg) no-repeat transparent",
            "text-align":"center",
            "line-height":"35px",
            "color":"#ffffff",
            "padding-left":"3px"
        }).show("fast");
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#div_toop").remove();
    });
    $(".menu ul li").click(function(){   //鼠标点击添加选中样式
        $(this).siblings("li").removeClass("selected");
        $(this).addClass("selected");
    })
})

// 基础数据部分
function baseNavbar(){
    var baseNavbar = '<div id="baseNavbar">'+
    '<ul>'+
    '</ul>'+
    '</div>';
    $("#layer").append(baseNavbar);
}