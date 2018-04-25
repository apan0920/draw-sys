/*
* @Author: pz
* @Date:   2018-04-16 15:10:06
* @Last Modified by:   pz
* @Last Modified time: 2018-04-19 16:23:55
*/

$(function () {
	changeFontSize();
	
	// fontAuto();
});

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

// 开始停止按钮
$('.btn').click(function () {
	if ($(this).hasClass("btn-start")) {
		drawInterval = setInterval(function () {
			init();
		},150);
		$(this).html("停止");
		$(this).removeClass("btn-start").addClass("btn-stop");
	}else if ($(this).hasClass("btn-stop")) {
		clearInterval(drawInterval);
		var initPaperHtml = '<img class="chouqian-box-init-paper" src="../images/chouqian-box-init-paper.png" alt="抽签初始化盒子里的纸团">';
		$("#content").html(initPaperHtml);
		
		// $(".chouqian-box").hide();//隐藏抽签盒子
		$(".result-no-bg").fadeIn();// 显示抽签结果
	}
});
// 下一组按钮
$('.btn-go-on').click(function () {
	if (!$(".result-no-bg").is(":visible")) {
			$(".prompt-mask").fadeIn();//显示提示信息
			return;
		} 
	$(".btn-stop").html("开始").removeClass("btn-stop").addClass("btn-start");
	$(".result-no-bg").fadeOut();// 隐藏抽签结果
	// $(".chouqian-box").show();//显示抽签盒子
	// 切换学校名称
});
// 点击确定关闭提示信息
$(".prompt-sure").click(function () {
	$(".prompt-mask").fadeOut();//显示提示信息
});

// 函数：初始化函数。
function init(){
	$("#content").empty();
	// i页面图片的总数
	for(var i=1;i<=20;i++){
		// 通过getNum函数获取图片xy轴的坐标。
		var x=getNum(550)/100,y=getNum(250)/100;
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

// 抽签盒子上的学校名称
function changeFontSize() {
	var schoolName = $(".chouqian-box-school-name");
	var letterNum = schoolName.text().length;
	if (letterNum > 11) {
		schoolName.addClass("font-size-04");
	} 
	if (15<letterNum && letterNum < 25) {
		schoolName.addClass("font-size-03");
	} 
	if (24<letterNum && letterNum < 30) {
		schoolName.addClass("font-size-025");
	} 
	if (30<letterNum) {
		schoolName.addClass("font-size-02");
	} 
}

/*function fontAuto(){
    var obj = $("#schoolName");
    obj.height();
    var maxHeight = obj.get(0).offsetHeight;
    var size = maxHeight;
    do {
        obj.attr({"style":"font-size:"+(size--)+"px;"});
    } while(obj[0].scrollHeight>maxHeight);
}*/

$(".a-upload").on("change","input[type='file']",function(){
    var filePath=$(this).val();
    if(filePath.indexOf("xls")!=-1 || filePath.indexOf("xlsx")!=-1){
        $(".file-error-tip").html("").hide();
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        $(".show-file-name").html(fileName);
    }else{
        $(".show-file-name").html("");
        $(".file-error-tip").html("您未上传文件，或者您上传文件类型有误！").show();
        return false 
    }
})