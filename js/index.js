/*
* @Author: pz
* @Date:   2018-04-16 15:10:06
* @Last Modified by:   pz
* @Last Modified time: 2018-04-17 09:23:41
*/

// 左侧参赛队伍名称菜单
$('.team-menu').hover(function () {
	$('.team-menu').animate({left:'0rem'});
	var imgHtml = '<img src="../images/close-table.png" class="margin-center table-btn" alt="关闭菜单按钮">';
	$('.table-state').html(imgHtml);
},function(){
	$('.team-menu').animate({left:'-4rem'});	
	var imgHtml = '<img src="../images/open-table.png" class="margin-center table-btn" alt="打开菜单按钮">';
	$('.table-state').html(imgHtml);	
});

// 打开导入数据界面
$('.import-data').click(function () {
	$('.import-data-mask').show();
});
// 导入数据界面--关闭按钮
$('.import-close').click(function () {
	$('.import-data-mask').hide();
});

$('.btn').click(function () {
	// init();
	if ($(this).hasClass("btn-start") || $(this).hasClass("btn-go-on")) {
		$(".result-no-bg").hide();// 隐藏抽签结果
		drawInterval = setInterval(function () {
			init();
		},150);
		$(this).html("停止");
		if ($(this).hasClass("btn-start") ) {
			$(this).removeClass("btn-start");
		} else {
			$(this).removeClass("btn-go-on");
		}
		$(this).addClass("btn-stop");
	}else if ($(this).hasClass("btn-stop")) {
		clearInterval(drawInterval);
		$(this).html("继续");
		$(this).removeClass("btn-stop").addClass("btn-go-on");
		
		$(".result-no-bg").show();// 显示抽签结果
	}
});

// 函数：初始化函数。
function init(){
	$("#content").empty();
	// 页面图片的总数
	for(var i=1;i<=20;i++){
		// 通过getNum函数获取图片xy轴的坐标。
		var x=getNum(450)/100,y=getNum(200)/100;
		// 追加到div容器中。
		$("<img/>",{"id":"img"+i,"src":"../images/spitball.png"}).appendTo("#content").click(function(){
			// alert("hello world");
		}).css({"top":y+"rem","left":x+"rem","position":"absolute","width":"0.5rem"});
	}
};


// 函数：主动创建符合要求的整数，并返回。
function getNum(limit){
	var num;
	while(true){
		num=Math.random()*1000;
		if(num<=limit&&num>0){
			break;
		}
	}
	return parseInt(num);
};