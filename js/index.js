/**
 * Created by 成成 on 2017/6/5.
 */
$(function () {

    var i=0;   //当前页码

    //获取总的页数
    var pageCount=$(".page").length-1;

    //向上滑
    $("body").swipeUp(
        function () {

            if(i<pageCount){

                $(".page").eq(i).addClass("pageUp");
                //每次都有动画效果
                $(".page").eq(i).children().addClass("hide");
                i++;
                $(".page").eq(i).removeClass("pageDown");
                $(".page").eq(i).children().removeClass("hide");

            }



        }
    );

    //向下滑
    $("body").swipeDown(
        function () {

            if(i>0){

                $(".page").eq(i).addClass("pageDown");
                $(".page").eq(i).children().addClass("hide");
                i--;
                $(".page").eq(i).removeClass("pageUp");
                $(".page").eq(i).children().removeClass("hide");
            }

        }
    );

    $(".page-2,.page-3,.page-4").swipeLeft(
        function () {

            $(this).children().eq(0).addClass("pageLeft");

            $(this).children().eq(1).removeClass("pageRight");

        }
    );

    $(".page-2,.page-3,.page-4").swipeRight(
        function () {

            $(this).children().eq(0).removeClass("pageLeft");

            $(this).children().eq(1).addClass("pageRight");

        }
    )
});