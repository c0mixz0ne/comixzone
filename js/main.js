//Hello guys
//let`s go
//preload
$(window).on('load', function(){ 
	var date = new Date();//<---time on life for preload cookie
	var minutes = 30; // <--- need minutes
	date.setTime(date.getTime() + (minutes * 60 * 1000));
	
	if ($.cookie('preload') === 'load' ){
		$( ".for_preload" ).fadeOut( "slow", function() {
			$('.for_preload').remove();
		});
		$('.menu_toggle').addClass('animated fadeInLeft');
		$('.shop_card').addClass('animated fadeInRight');
		$('.logo').addClass('animated bounceInDown');
		$('.comic').addClass('animated bounceInUp');
		console.log(date);
	}
	else{
		// setTimeout(function(){
			var $preloader = $('.for_preload');
			$preloader.fadeOut('slow',function(){
				$.cookie('preload', 'load', { expires: date });
				$('.for_preload').remove();
			});
			$('.menu_toggle').addClass('animated fadeInLeft');
			$('.shop_card').addClass('animated fadeInRight');
			$('.logo').addClass('animated bounceInDown');
			$('.comic').addClass('animated bounceInUp');
		// }, 1500);
	}
});

var styles = [
'background: red',
'background: orange',
'background: gold',
'background: yellowgreen',
'background: skyblue',
'background: steelblue',
'background: darkviolet'
];
console.log ( '%c P %c O %c W %c E %c R %c E %c D %c %c b %c y %c %c C %c O %c M %c I %c X %c Z %c O %c N %c E',
    styles[0], styles[1], styles[2],
	styles[3], styles[4], styles[5],
	styles[6],styles[0],styles[1],
	styles[2], styles[3], styles[4],
	styles[5],styles[6],styles[0],
	styles[1],styles[2],styles[3],
	styles[4],styles[5]);
//Get Browser version
	function get_browser() {
		var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
		if(/trident/i.test(M[1])){
			tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
			return {name:'IE',version:(tem[1]||'')};
			}   
		if(M[1]==='Chrome'){
			tem=ua.match(/\bOPR|Edge\/(\d+)/)
			if(tem!=null)   {return {name:'Opera', version:tem[1]};}
			}   
		M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
		return {
		  name: M[0],
		  version: M[1]
		};
	 }
	 var browser = get_browser();
	 var browser_name = browser.name;
	 var browser_version = browser.version;
		if ((browser_name) === 'Chrome' & (browser_version) >= 40 ||  
		    (browser_name) === 'Firefox' & (browser_version) >= 40 ||
			(browser_name) === 'Opera' ||
			(browser_name) === 'MSIE' & (browser_version) >= 12 ||
			(browser_name) === 'Safari' & (browser_version) >= 10 
			
		   )
				{
					// alert('ok');
				}
		else{
			$('.page').remove();
			$( 'body' ).append( "<div class='browser_check'><p>У вас cтарый браузер </br> <span id='browser_name'>  </span> : <span id='browser_version'> </span>.</br> Пожалуйста обновите его и попробуйте снова.</p></div>" );
			$('#browser_name').text(browser_name);
			$('#browser_version').text(browser_version);
			// alert('trouble');
			
		}
	 console.log(browser_name + ':' + browser_version);


$( document ).ready(function() {
//menu
	var $page = $('.page');
	$('.menu_toggle').on('click', function(){
	  $page.toggleClass('shazam');
	  $('.shop_overlay').addClass('opacity');
			setTimeout(function(){
				$('.shop_overlay').addClass('d-none');
				$('.shop_overlay').removeClass('opacity');
			}, 500);
			return false;
	});
	$('.content').on('click', function(){
	  $page.removeClass('shazam');
	  return false;
	});
//create toasty elements
	$("body").toasty();
// Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows',
	  getSortData: {
		name: '.name',
		price: function( itemElem ) { // function
		  var price = $( itemElem ).find('.price').text();
		  return parseFloat( price.replace( /[\(\)]/g, '') );
		}
	  }
	});
	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
		var name = $(this).find('.name').text();
		return name.match( /ium$/ );
	  }
	};

	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  console.log(filterValue);
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	  return false;
	});
	// bind sort button click
	$('#sorts').on( 'click', 'button', function() {
	  var sortByValue = $(this).attr('data-sort-by');
	  $grid.isotope({ sortBy: sortByValue });
	  console.log(sortByValue);
	  return false;
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.active').removeClass('active');
		$( this ).addClass('active');
	  });
	});	
//Tilt
	$('.prod_wrapper').tilt({
		glare: true,
		maxGlare: .7,
		speed:1000,
		maxTilt:9
	})
//random colors
	var safeColors = ['00','33','66','99','cc','ff'];
	var rand = function() {
		return Math.floor(Math.random()*6);
		return false;
	};
	var randomColor = function() {
		var r = safeColors[rand()];
		var g = safeColors[rand()];
		var b = safeColors[rand()];
		return "#"+r+g+b;

	}
	$('.prod_wrapper').each(function() {
		$(this).css('background',randomColor());
	});
//Links
	$(".prod_image").click(function() {
	  window.location = $(this).attr("data-link"); 
	  return false;
	});
});
//hide titles
	$(".prod_wrapper_item").hide();
	$(".prod_wrapper").hover(function(){
		$(".prod_wrapper_item").hide();
		$(this).find(".prod_wrapper_item").show();
	});
// toasty callback call
function show_toasty(){
	$("body").toasty('pop');
}
//shopcard Show
function shopcard_action(){
	if($('.page').hasClass('shazam')){
		$('.page').removeClass('shazam');
		setTimeout(function(){
			if($('.shop_overlay').hasClass('d-none')){
				$('.shop_overlay').removeClass('d-none');
			}
			else{
				$('.shop_overlay').addClass('opacity');
				setTimeout(function(){
					$('.shop_overlay').addClass('d-none');
					$('.shop_overlay').removeClass('opacity');
				}, 500);
			}
		}, 600);
	}
	else{
		if($('.shop_overlay').hasClass('d-none')){
			$('.shop_overlay').removeClass('d-none');
		}
		else{
			$('.shop_overlay').addClass('opacity');
			setTimeout(function(){
				$('.shop_overlay').addClass('d-none');
				$('.shop_overlay').removeClass('opacity');
			}, 500);
		}
	}
	

}

