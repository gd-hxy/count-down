function show(){
	function mess(){
var year=Number(document.getElementById("inyear").value);
var month=Number(document.getElementById("inmonth").value)-1;
var day=Number(document.getElementById("inday").value);
var hour=Number(document.getElementById("inhour").value);
var minute=Number(document.getElementById("inminute").value);
var second=Number(document.getElementById("insecond").value);
var riqi= new Date(year,month,day,hour,minute,second);
var nowdate=Date.now();
var cha=Math.round((riqi-nowdate)/1000);
var day1=parseInt(cha/(3600*24));
var left_day=cha%(3600*24);
var hour1=parseInt(left_day/3600);
var hour_left=left_day%3600;
var minute1=parseInt(hour_left/60);
var second1=hour_left%60;
document.getElementById("1").innerHTML=day1+"天";
document.getElementById("2").innerHTML=hour1+"时";
document.getElementById("3").innerHTML=minute1+"分";
document.getElementById("4").innerHTML=second1+"秒";
}
setInterval(mess,1000);}
