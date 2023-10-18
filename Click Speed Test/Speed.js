var setint  = '';
$(document).ready(function() {
var val = 0;
$('#hold').on('mousedown',function (e) {
   clearInterval(setint);
   val = 0;
   setint = setInterval(function () {
       $("#btext").val(++val);
       $("#myBar").val(++val).css('width',val + "%");
       $("#btext").val(--val);
       if(val > 100){
       alert("You are over 100, you failed the goal");
       val = -100;
       }
   },50);
});
$('#hold').on("mouseleave mouseup", function () {
   $("#btext").val(val);
   clearInterval(setint);
});
});
