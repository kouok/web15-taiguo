
window.onload = function () {
	banner();
};



function banner() {
	var width = document.body.offsetWidth;
	var moveUl = document.getElementsByClassName('banner_images')[0];
	var indexLiArr = document.querySelectorAll('.banner_index li');
	var index = 1;
	var timeId = setInterval(function () {
		index++;
		moveUl.style.transition = 'all .3s';
		moveUl.style.transform = 'translateX('+index*width*-1+'px)';

	},1000);
	moveUl.addEventListener('webkitTransitionEnd',function () {
		console.log('过渡结束');
		if (index>8) {
			index = 1;
			moveUl.style.transition = '';
			moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		}else if(index<1){
			index= 8;
			moveUl.style.transition = '';
			moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		}
		for (var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}
		indexLiArr[index-1].className = 'current';

	})
	var startX = 0;
	var moveX = 0;
	var distanceX = 0;
	moveUl.addEventListener('touchstart',function (event) {
		clearInterval(timeId);
		moveUl.style.transition = '';
		startX = event.touches[0].clientX;
		console.log(event);
	})
	moveUl.addEventListener('touchmove',function (event) {
		moveX = event.touches[0].clientX - startX;
		moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
	})

	moveUl.addEventListener('touchend',function (event) {
		var maxDistance = width/3;
		if (Math.abs(moveX)>maxDistance) {
			if (moveX>0) {
				index--;
			}else{
				index++;
			}
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';

		}else{
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
		}
		timeId = setInterval(function () {
			index++;
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		},1000)
	})

}