jQuery(document).ready(function ($) {
	/*******************
		color swatch
	********************/
	//convert rgba color to hex color
	$.cssHooks.backgroundColor = {
		get: function (elem) {
			if (elem.currentStyle)
				var bg = elem.currentStyle["background-color"];
			else if (window.getComputedStyle)
				var bg = document.defaultView.getComputedStyle(elem,
					null).getPropertyValue("background-color");
			if (bg.search("rgb") == -1)
				return bg;
			else {
				bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				function hex(x) {
					return ("0" + parseInt(x).toString(16)).slice(-2);
				}
				return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
			}
		}
	}
	//set a label for each color swatch
	$('.cd-color-swatch').each(function () {
		var actual = $(this);
		$('<b>' + actual.css("background-color") + '</b>').insertAfter(actual);
	});

	$('.cd-color-swatch-agt').each(function () {
		var actual = $(this);
		$('<b>' + actual.css("background-color") + '</b>').insertAfter(actual);
	});

	$('.cd-color-swatch-stg').each(function () {
		var actual = $(this);
		$('<b>' + actual.css("background-color") + '</b>').insertAfter(actual);
	});

	$('.cd-color-swatch-act').each(function () {
		var actual = $(this);
		$('<b>' + actual.css("background-color") + '</b>').insertAfter(actual);
	});

	$('.cd-color-swatch-pagt').each(function () {
		var actual = $(this);
		$('<b>' + actual.css("background-color") + '</b>').insertAfter(actual);
	});

	$('.cd-color-swatch-trd').each(function () {
		var actual = $(this);
		$('<b>' + actual.css("background-color") + '</b>').insertAfter(actual);
	});

	/*******************
		buttons
	********************/
	var buttonsWrapper = $('#buttons .cd-box'),
		buttonsHtml = buttonsWrapper.html(),
		containerHtml = $('<div class="cd-box cd-box-btn"></div>').insertAfter(buttonsWrapper),
		buttonsHtmlText = buttonsHtml.split('</button>');
		console.log(buttonsHtml);

		$.map(buttonsHtmlText, function(value) {
			if (value.indexOf('<button') >= 0) {
				var buttonHtml = value + '</button>';
				var wrapperElement = $('<p></p>').text(buttonHtml);
				wrapperElement.appendTo(containerHtml);
			}
		});

		var cssStyles = `
		.btn {
			border: none;
			border-radius: 2px;
			font-family: "Montserrat";
			color: black;
			padding: 0.6em 2em;
			cursor: pointer;
			background: #FDD92F;
			box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
		}
	`;

	var styleElement = $('<pre></pre>').text(cssStyles);
	styleElement.appendTo(containerHtml);

	/*******************
		typography
	********************/
	var heading = $('#typography h1'),
		subheading = $('#typography h3'),
		subsubheading = $('#typography h5'),
		headingDescriptionText = heading.children('span').eq(0),
		subHeadingDescriptionText = subheading.children('span').eq(0),
		subsubHeadingDescriptionText = subsubheading.children('span').eq(0),
		body = heading.next('p'),
		subBody = subheading.next('p'),
		subsubBody = subsubheading.next('p'),
		bodyDescriptionText = body.children('span').eq(0),
		subBodyDescriptionText = subBody.children('span').eq(0),
		subsubBodyDescriptionText = subsubBody.children('span').eq(0);
		

	setTypography(heading, headingDescriptionText);
	setTypography(subheading, subHeadingDescriptionText);
	setTypography(subsubheading, subsubHeadingDescriptionText);
	setTypography(body, bodyDescriptionText);
	setTypography(subBody, subBodyDescriptionText);
	setTypography(subsubBody, subsubBodyDescriptionText);

	$(window).on('resize', function () {
		setTypography(heading, headingDescriptionText);
		setTypography(subheading, subHeadingDescriptionText);
		setTypography(subsubheading, subsubHeadingDescriptionText);
		setTypography(body, bodyDescriptionText);
		setTypography(subBody, subBodyDescriptionText);
		setTypography(subsubBody, subsubBodyDescriptionText);
	});

	function setTypography(element, textElement) {
		let fontSize = Math.round(element.css('font-size').replace('px', '')) + 'px',
			fontFamily = (element.css('font-family').split(','))[0].replace(/\'/g, '').replace(/\"/g, ''),
			fontWeight = element.css('font-weight');
		textElement.text(fontFamily + ' ' + fontSize);
	}

	/*******************
		main  navigation
	********************/
	var contentSections = $('main section');
	//open navigation on mobile
	$('.cd-nav-trigger').on('click', function () {
		$('header').toggleClass('nav-is-visible');
	});
	//smooth scroll to the selected section
	$('.cd-main-nav a[href^="#"]').on('click', function (event) {
		event.preventDefault();
		$('header').removeClass('nav-is-visible');
		var target = $(this.hash),
			topMargin = target.css('marginTop').replace('px', ''),
			hedearHeight = $('header').height();
		$('body,html').animate({ 'scrollTop': parseInt(target.offset().top - hedearHeight - topMargin) }, 400);
	});
	//update selected navigation element
	$(window).on('scroll', function () {
		updateNavigation();
	});

	function updateNavigation() {
		contentSections.each(function () {
			var actual = $(this),
				actualHeight = actual.height(),
				topMargin = actual.css('marginTop').replace('px', ''),
				actualAnchor = $('.cd-main-nav').find('a[href="#' + actual.attr('id') + '"]');

			if ((parseInt(actual.offset().top - $('.cd-main-nav').height() - topMargin) <= $(window).scrollTop()) && (parseInt(actual.offset().top + actualHeight - topMargin) > $(window).scrollTop() + 1)) {
				actualAnchor.addClass('selected');
			} else {
				actualAnchor.removeClass('selected');
			}
		});
	}
});