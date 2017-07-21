// 网址：www.sakill.com
// 作者：sakill；
// 标签切换使用；
function a_active (argument) {
		// body...
		for (var i=0;i<argument.length;i++) {
			argument[i].onclick=function(){
				for(var j=0;j<argument.length;j++){
					argument[j].className=" ";
				}
			this.className="active";
		}
	};
}