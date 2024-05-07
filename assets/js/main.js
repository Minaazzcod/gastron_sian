	$('#fullpage').fullpage({
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		scrollingSpeed: 1200,
		recordHistory: false,
		// anchors: ["page1", "page2", "page3", "page4", "page5"],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		// afterLoad: (anchorLink, index) => {
		// 	$('.header').removeClass('h_style01 h_style02')

		// 	if(anchorLink == 'firstPage'){
		// 		$('.header').addClass('h_style01')
		// 	}
		// }
		// 'onLeave' : (index, nextIndex, direction) => {
		// 	if (index == 0 && direction == 'down'){
		// 		$('.header').addClass('h_style01')
		// 	} else if (index == 3 && direction == 'up'){
		// 		alert ('3번에서 2번으로');
		// 	}
		// }
  });