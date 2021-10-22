
$('nav').hover(function() {
	//マウスを乗せたら色が変わる
	$('.overlay').addClass('disp');
  }, function() {
	    //色指定を空欄にすれば元の色に戻る
	$('.overlay').removeClass('disp');
});

$('nav .box ul li').hover(function() {
	$(this).addClass('active');
},
function () {
	$(this).removeClass('active');
});

$('.sp-menu-btn').click(function(){
	$('header').toggleClass('active');
	if($('.rightnav').is(':visible')){
 		$('.rightnav').fadeToggle(200);
	}
});

$('header .parent').click(function(){
	$(this).toggleClass('open');
});

$('.gotop').click(function(){
	$("body, html").animate({scrollTop: 0}, 500);
	return false;
});

window.onload = function() {
		startObserve();
		startObserveKv();
		startObserveOverlay();
}

function startObserve () {
  // 見えている量が閾値を上回るか下回ったときに呼ばれる
	var callback = function callback(entries, observer) {
	  entries.forEach(function (entry) {
	    if (entry.intersectionRatio > 0.3) {
	      $('.rightnav').removeClass('fixed');
	    } else if (!entry.isIntersecting) {
	      $('.rightnav').addClass('fixed');
	    }
	  });
	};

  const option = {
    // 20%と100％の閾値
    threshold: [0.3, 1.0]
  }

  const observer = new IntersectionObserver(
    callback, option
  )

  const target = document.querySelector('footer')
  observer.observe(target)
}

function startObserveKv () {
  // 見えている量が閾値を上回るか下回ったときに呼ばれる
	var callback = function callback(entries, observer) {
	  entries.forEach(function (entry) {
	    if (entry.intersectionRatio > 0.3) {
	      $('.rightnav').fadeOut();
	    } else if (!entry.isIntersecting) {
	      $('.rightnav').fadeIn();
	    }
	  });
	};

  const option = {
    threshold: [0.3, 1.0]
  }

  const observer = new IntersectionObserver(
    callback, option
  )

  const target = document.querySelector('header')
  observer.observe(target)
}

function startObserveOverlay () {
  // 見えている量が閾値を上回るか下回ったときに呼ばれる
	var callback = function callback(entries, observer) {
	  entries.forEach(function (entry) {
	    if (entry.intersectionRatio == 0 ) {
	      $('.overlay').css("z-index","-1");
	    } else if (entry.isIntersecting > 0) {
	      $('.overlay').css("z-index","1");
	    }
	  });
	};

  const option = {
    threshold: [0, 1.0]
  }

  const observer = new IntersectionObserver(
    callback, option
  )

  const target = document.querySelector('nav')
  observer.observe(target)
}
