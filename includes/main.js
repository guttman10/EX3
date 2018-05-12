$(document).ready(function(){
    var divList = $(".unasigned");
    var boxList =$(".box_style_l3")
    var counter = 0;
    var prevColor;
    var prevOpacity;
    ({ prevColor, prevOpacity } = colorChange(prevColor, prevOpacity, boxList,divList));
    counter = addSquares(divList, counter);
})

function colorChange(prevColor, prevOpacity, boxList,divList) {
    boxList.hover(function () {
        prevColor = $(this).css("background-color");
        prevOpacity = $(this).css("opacity");
        $(this).css({ "background-color": "#ffffff", "opacity": "1" });
    }, function () {
        $(this).css({ "background-color": prevColor, "opacity": prevOpacity });
    });
    divList.hover(function () {
        prevColor = $(this).css("background-color");
        prevOpacity = $(this).css("opacity");
        $(this).css({ "background-color": "#ffffff", "opacity": "1" });
    }, function () {
        $(this).css({ "background-color": prevColor, "opacity": prevOpacity });
    });
    return { prevColor, prevOpacity };
}
function colorChange2(prevColor, prevOpacity, divList) {

    return { prevColor, prevOpacity };
}
function addSquares(divList, counter) {
    $(".plus").on("click", function () {
        var curr=divList.get(counter);
            $(curr).addClass("box_style_l3").css("opacity", Math.random());
            console.log(counter);
            counter=(counter+1)%8;
    });
    
    return {counter};
}
