// Characteristics Control

(function() {

	var litreVal = $('.litre-val'),
	bkVal = $('.bk-val'),
	colValP = $('.col-valP'),
	charImg = $('.char-img img'),
	weight = $('#weight'),
	speed = $('#speed'),
	diam = $('#diam'),
	inTank = $('#inTank'),
	cleanSpirt = $('#cleanSpirt'),
	inside = $('#inside'),
	insideButle = $('#insideButle'),
	formCharValue = $('#modal-formChar-value'),
	formOldChar = $('#form-old-char'),
	charFormCum = $('#char-form-cum'),
	hidCharComAdd = $('#formCharMod [name="DATA[COMMENTS]"]'),
	tenTankL = $('#tens'),
	twentyTankL = $('#twenty'),
	thirdTankL = $('#third'),
	fiftyTankL = $('#fifty'),
	formValueChar = $('#form-value-char');

	var tenTank = {
		urlA: 'img/10/10.jpg',
		urlT: 'img/10/tank-10.jpg',
		weightA: '6 кг',
		weightT: '4 кг',
		inTank: '10 л',
		cleanSpirt: '1 л',
		inside: '2.5 л',
		insideButle: '5 бутылок по 0.5',
		oldPrice: '5 590₴',
		newPrice: '4 990₴',
		tankPrice: '2 700₴',
		appName: 'AquaGradus Компакт 14 л',
		tankName: 'Испарительная емкость 14 л'
	};

	var twentyTank = {
		urlA: 'img/20/20.jpg',
		urlP: 'img/20/20P.jpg',
		urlT: 'img/20/tank-20.jpg',
		weightA: '7 кг',
		weightP: '8 кг',
		weightT: '5 кг',
		inTank: '20 л',
		cleanSpirt: '2 л',
		inside: '5.0 л',
		insideButle: '10 бутылок по 0.5',
		oldPrice: '6 090₴',
		newPrice: '5 490₴',
		oldPricePlus: '6 890₴',
		newPricePlus: '6 590₴',
		tankPrice: '3 200₴',
		appName: 'AquaGradus Компакт 25 л',
		appNameP: 'AquaGradus Компакт Плюс 25 л',
		tankName: 'Испарительная емкость 25 л'
	};

	var thirtyTank = {
		urlA: 'img/30/30.jpg',
		urlP: 'img/30/30P.jpg',
		urlT: 'img/30/tank-30.jpg',
		weightA: '9 кг',
		weightP: '10 кг',
		weightT: '7 кг',
		inTank: '30 л',
		cleanSpirt: '3 л',
		inside: '7.5 л',
		insideButle: '15 бутылок по 0.5',
		oldPrice: '6 690₴',
		newPrice: '6 090₴',
		oldPricePlus: '7 490₴',
		newPricePlus: '7 190₴',
		tankPrice: '3 800₴',
		appName: 'AquaGradus Компакт 35 л',
		appNameP: 'AquaGradus Компакт Плюс 35 л',
		tankName: 'Испарительная емкость 35 л'
	};

	var fiftyTank = {
		urlA: 'img/30/30.jpg',
		urlP: 'img/50/50P.jpg',
		urlT: 'img/50/tank-50.jpg',
		weightA: '11 кг',
		weightP: '12 кг',
		weightT: '9 кг',
		inTank: '38 л',
		cleanSpirt: '3.8 л',
		inside: '9.5 л',
		insideButle: '19 бутылок по 0.5',
		oldPrice: '7 290₴',
		newPrice: '6 690₴',
		oldPricePlus: '8 090₴',
		newPricePlus: '7 790₴',
		tankPrice: '4 400₴',
		appName: 'AquaGradus Компакт 50 л',
		appNameP: 'AquaGradus Компакт Плюс 50 л',
		tankName: 'Испарительная емкость 50 л'
	};

	fiftyTankL.hide();

	// Litre 'Click' handler

	$(litreVal).on('click', function (event) {

		event.preventDefault();

		$(this).addClass('active').siblings().removeClass('active');

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( bkVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlT') );
			weight.text( eval (dataTank + '.weightT') );
			formOldChar.hide();
			formValueChar.text( eval (dataTank + '.tankPrice') );
			charFormCum.text( eval (dataTank + '.tankPrice') );
			formCharValue.text( eval (dataTank + '.tankName') );
			hidCharComAdd.val( eval (dataTank + '.tankName') );
		} else if ( colValP.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlP') );
			weight.text( eval (dataTank + '.weightP') );
			formOldChar.text( eval (dataTank + '.oldPricePlus') );
			formValueChar.text( eval (dataTank + '.newPricePlus') );
			charFormCum.text( eval (dataTank + '.newPricePlus') );
			formCharValue.text( eval (dataTank + '.appNameP') );
			hidCharComAdd.val( eval (dataTank + '.appNameP') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			formOldChar.show();
			formOldChar.text( eval (dataTank + '.oldPrice') );
			formValueChar.text( eval (dataTank + '.newPrice') );
			charFormCum.text( eval (dataTank + '.newPrice') );
			formCharValue.text( eval (dataTank + '.appName') );
			hidCharComAdd.val( eval (dataTank + '.appName') );
		};
		
		inTank.text( eval (dataTank + '.inTank') );
		cleanSpirt.text( eval (dataTank + '.cleanSpirt') );
		inside.text( eval (dataTank + '.inside') );
		insideButle.text( eval (dataTank + '.insideButle') );

	});



	// Tank 'Click' handler

	$(bkVal).on('click', function (event) {

		event.preventDefault();

		tenTankL.show();
		fiftyTankL.show();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		charImg.attr('src', eval (dataTank + '.urlT') );
		weight.text( eval (dataTank + '.weightT') );
		// $('.carSuh').addClass('hide');
		$(this).toggleClass('active');
		if ( bkVal.hasClass('active') ) {
			$(this).text('Аппарат в сборе');
			formOldChar.hide();
			formValueChar.text( eval (dataTank + '.tankPrice') );
			charFormCum.text( eval (dataTank + '.tankPrice') );
			formCharValue.text( eval (dataTank + '.tankName') );
			hidCharComAdd.val( eval (dataTank + '.tankName') );
		} else if ( colValP.hasClass('active') ) {
			$(this).text('Бак отдельно');
			tenTankL.hide();
			fiftyTankL.show();
			charImg.attr('src', eval (dataTank + '.urlP') );
		} else {
			$(this).text('Бак отдельно');
			tenTankL.siblings().removeClass('active');
			tenTankL.show().addClass('active');
			dataTank = 'tenTank';
			fiftyTankL.hide();
			formOldChar.show();
			formOldChar.text( eval (dataTank + '.oldPrice') );
			formValueChar.text( eval (dataTank + '.newPrice') );
			charFormCum.text( eval (dataTank + '.newPrice') );
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			formCharValue.text( eval (dataTank + '.appName') );
			hidCharComAdd.val( eval (dataTank + '.appName') );
		};

	});



	// Colonna Change 'Click' handler

	$(colValP).on('click', function (event) {

		event.preventDefault();

		tenTankL.hide();
		fiftyTankL.show();

		if ( tenTankL.hasClass( 'active' ) ) {
			tenTankL.removeClass( 'active' );
			twentyTankL.addClass('active');
		};

		var dataTank = $('a.litre-val.active').attr('data-tank');

		charImg.attr('src', eval (dataTank + '.urlP') );
		weight.text( eval (dataTank + '.weightT') );
		speed.text( '5 л/час' );
		diam.text( '40 мм (Фланец 91мм")' );
		$(this).toggleClass('active');
		if ( colValP.hasClass('active') ) {
			$(this).text('Компакт');
			bkVal.text('Бак отдельно');
			formOldChar.text( eval (dataTank + '.oldPricePlus') );
			formValueChar.text( eval (dataTank + '.newPricePlus') );
			charFormCum.text( eval (dataTank + '.newPricePlus') );
			formCharValue.text( eval (dataTank + '.appNameP') );
			hidCharComAdd.val( eval (dataTank + '.appNameP') );
		} else {
			$(this).text('Компакт Плюс');
			bkVal.text('Бак отдельно');
			tenTankL.show();
			fiftyTankL.hide();
			formOldChar.show();
			formOldChar.text( eval (dataTank + '.oldPrice') );
			formValueChar.text( eval (dataTank + '.newPrice') );
			charFormCum.text( eval (dataTank + '.newPrice') );
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			speed.text( '3 л/час' );
			diam.text( '32 мм (Фланец 91мм")' );
			formCharValue.text( eval (dataTank + '.appName') );
			hidCharComAdd.val( eval (dataTank + '.appName') );
		};

	});

})();

// // Constructor Catalog

(function() {

	var litreVl = $('.litre-vl'),
	formValue = $('#form-value, #modal-value'),
	formOld = $('#form-old'),
	imgConstr = $('.constructor-img'),
	mtextValue = $('#modal-text-value'),
	colVal = $('#col-val'),
	colValPC = $('#col-valPC'),
	bakVal = $('#bak-val'),
	buyBtn = $('.btn.constr-btn.buy-btn'),
	modalBtn = $('.btn.modal-btn'),
	hiddenComment = $('#formBuy [name="DATA[COMMENTS]"]'),
	arrCompl = $('.compl-item'),
	formValueChar = $('#form-value-char');

	$('#litre a').each(function(i) {
		$(this).attr( 'id', 'litr' + i );
	});

	$('#litr3').hide();

	// Litre Btn "Click" Handler

	$(litreVl).on('click', function (e) {

		e.preventDefault();

		$(litreVl).removeClass('active');
		$(this).addClass('active');

		var dataTk = $('a.litre-vl.active').attr('data-tank');

		if ( bakVal.hasClass('active') ) {
			formOld.hide();
			if ( dataTk == 'tenTk' ) {
				formValue.text('2 700₴');
				imgConstr.css({
					background: 'url(/img/constructor/10l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 14л');
				hiddenComment.val('Бак Aquagradus Стандарт на 14л');
			} else if ( dataTk == 'twentyTk' ) {
				formValue.text('3 200₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 25л');
				hiddenComment.val('Бак Aquagradus Стандарт на 25л');
			} else if ( dataTk == 'thirtyTk' ) {
				formValue.text('3 800₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 35л');
				hiddenComment.val('Бак Aquagradus Стандарт на 35л');
			} else if ( dataTk == 'fiftyTk' ) {
				formValue.text('4 400₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 50л');
				hiddenComment.val('Бак Aquagradus Стандарт на 50л');
			};
		} else if ( colValPC.hasClass('active') ) {
			
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
			formOld.show();

			if ( dataTk == 'twentyTk' ) {
				formOld.text('6 890₴');
				formValue.text('6 590₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l+-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт Плюс с баком на 25л');
				hiddenComment.val('Самогонный аппарат Компакт Плюс с баком на 25л');

			} else if ( dataTk == 'thirtyTk' ) {
				formOld.text('7 490₴');
				formValue.text('7 190₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l+-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт Плюс с баком на 35л');
				hiddenComment.val('Самогонный аппарат Компакт Плюс с баком на 35л');

			} else if ( dataTk == 'fiftyTk' ) {
				formOld.text('8 090₴');
				formValue.text('7 790₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l+-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт Плюс с баком на 50л');
				hiddenComment.val('Самогонный аппарат Компакт Плюс с баком на 50л');
			};

		} else {
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
			formOld.show();

			if ( dataTk == 'tenTk' ) {
				formOld.text('5 590₴');
				formValue.text('4 990₴');
				imgConstr.css({
					background: 'url(/img/constructor/10l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 14л');
				hiddenComment.val('Самогонный аппарат с баком на 14л');
			} else if ( dataTk == 'twentyTk' ) {
				formOld.text('6 090₴');
				formValue.text('5 490₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 25л');
				hiddenComment.val('Самогонный аппарат с баком на 25л');
			} else if ( dataTk == 'thirtyTk' ) {
				formOld.text('6 690₴');
				formValue.text('6 090₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 35л');
				hiddenComment.val('Самогонный аппарат с баком на 35л');
			};
		}
	});

	// Colonna Btn "Click" Handler

	$(colVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').toggleClass('hide');
		bakVal.removeClass('active');
		formOld.hide();

		if ( colValPC.hasClass('active') ) {
			formValue.text('3 700₴');
			imgConstr.css({
				background: 'url(/img/constructor/pro_big+.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Колонна Aquagradus Компакт Плюс');
			hiddenComment.val('Колонна Aquagradus Компакт Плюс');
		} else {
			formValue.text('2 900₴');
			imgConstr.css({
				background: 'url(/img/constructor/pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Колонна Aquagradus Компакт');
			hiddenComment.val('Колонна Aquagradus Компакт');
		};


		if ( colVal.hasClass('active') ) {
			colVal.text('Аппарат в сборе');
			bakVal.text('Бак отдельно');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить колонну');
			modalBtn.text('Купить колонну');
		} else {
			colVal.text('Колонна отдельно');
			formValue.text('4 990₴');
			formOld.text('5 590₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/10l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат Компакт с баком на 14л');
			hiddenComment.val('Самогонный аппарат Компакт с баком на 14л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

	});

	// Tank Btn "Click" Handler

	$(bakVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').removeClass('hide');
		colVal.removeClass('active');
		formOld.hide();
		$('#litr0').show();
		$('#litr3').show();
		formValue.text('2 700₴');
		imgConstr.css({
			background: 'url(/img/constructor/10l-nocolumn_big.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'top center'
		});
		mtextValue.text('Бак Aquagradus Стандарт на 14л');
		hiddenComment.val('Бак Aquagradus Стандарт на 14л');
		$(litreVl).removeClass('active');
		$(litreVl[0]).addClass('active');

		if ( bakVal.hasClass('active') ) {
			bakVal.text('Аппарат в сборе');
			colVal.text('Колонна отдельно');

			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				$(val).addClass('hide');
				if ( i > 3 ) {
					return false;
				}
			});
			buyBtn.text('Купить бак отдельно');
			modalBtn.text('Купить бак отдельно');
		} else {
			bakVal.text('Бак отдельно');
			$('#litr3').hide();
			formValue.text('4 990₴');
			formOld.text('5 590₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/10l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат с баком на 14л');
			hiddenComment.val('Самогонный аппарат с баком на 14л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

		
	});

	// Colonna Changer Btn "Click" Handler

	$(colValPC).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		bakVal.removeClass('active');

		if ( colVal.hasClass('active') ) {

			$('#litre').addClass('hide');
			bakVal.removeClass('active');
			formOld.hide();

			if ( colValPC.hasClass('active') ) {
				colValPC.text('Колонна Компакт');
				formValue.text('3 700₴');
				imgConstr.css({
					background: 'url(/img/constructor/pro_big+.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Колонна Aquagradus Компакт Плюс');
				hiddenComment.val('Колонна Aquagradus Компакт Плюс');
			} else {
				formValue.text('2 900₴');
				colValPC.text('Колонна Компакт Плюс');
				imgConstr.css({
					background: 'url(/img/constructor/pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Колонна Aquagradus Компакт');
				hiddenComment.val('Колонна Aquagradus Компакт');
			};

		} else {
			$('#litr0').hide();
			$('#litr3').show();

			if ( $('#litr0').hasClass( 'active' ) ) {
				$('#litr0').removeClass( 'active' );
				$('#litr1').addClass('active');
			};

			formOld.text('6 890₴');
			formValue.text('6 590₴');
			imgConstr.css({
				background: 'url(/img/constructor/20l+-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат Компакт Плюс с баком 25л');
			hiddenComment.val('Самогонный аппарат Компакт Плюс с баком 25л');
			if ( colValPC.hasClass('active') ) {
				colValPC.text('Колонна Компакт');
				bakVal.text('Бак отдельно');
				$(arrCompl).removeClass('hide');
				$.each(arrCompl, function(i, val) {
					if ( i > 4) {
						$(val).addClass('hide');
					};
				});
				buyBtn.text('Купить аппарат');
				modalBtn.text('Купить аппарат');
			} else {
				colValPC.text('Колонна Компакт Плюс');
				formValue.text('4 990₴');
				formOld.text('5 590₴');
				formOld.show();
				imgConstr.css({
					background: 'url(/img/constructor/10l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт с баком на 14л');
				hiddenComment.val('Самогонный аппарат Компакт с баком на 14л');
				$('#litr0').show();
				$('#litr3').hide();
				$(litreVl).removeClass('active');
				$(litreVl[0]).addClass('active');
				$(arrCompl).removeClass('hide');
				$.each(arrCompl, function(i, val) {
					if ( i > 4 && i < 9) {
						$(val).addClass('hide');
					};
				});
				buyBtn.text('Купить аппарат');
				modalBtn.text('Купить аппарат');
			};
		}


		
	});

})();

// $(function() { // fridayblack

// 	// When the user scrolls the page, execute myFunction
// 	window.onscroll = function() {myFunction()};

// 	// Get the navbar
// 	var wehave = document.getElementById("header-text");
// 	var navbar = document.getElementById("navbar");

// 	// Get the offset position of the navbar
// 	var showMenu = wehave.offsetTop;

// 	// Add the sticky class to the navbar
// 	function myFunction() {
// 		if (window.pageYOffset >= showMenu) {
// 			navbar.classList.add("showMenu")
// 		} else {
// 			navbar.classList.remove("showMenu");
// 		}
// 	}

// });

// Modal Control - Book

$(function() {

	var modal = $('#book.modal-mask');

	$('.recipe-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW1' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog

$(function() {

	var modal = $('#catalog.modal-mask');

	$('.buy-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW2' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog

$(function() {

	var modal = $('#char-form-modal.modal-mask');

	$('.buy-btn-char').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW6' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Header

$(function() {

	var modal = $('#header-modal.modal-mask');

	$('#menu .btnHead').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW3' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Black friday

// $(function() { // fridayblack

// 	var modal = $('#blackfriday-modal.modal-mask');

// 	$('.bf-text-block .bf-btn').on('click', function(e) {
// 		e.preventDefault();
// 		modal.removeClass('hide');
// 	});

// 	$('.modal-close').on('click', function() {
// 		modal.addClass('hide');
// 	});

// 	$(document).on('click', function(event) {
// 		if ( event.target.id == 'mW3' ) {
// 			modal.addClass('hide');
// 		}
// 	});

// });

// Modal Control - About

$(function() {

	var modal = $('#about-modal.modal-mask');

	$('#aboutBtn').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW4' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Additionally

$(function() {

	var modal = $('#additionally-modal.modal-mask'),
	addPrice = $('#additionally-modal #modal-value-add'),
	addTextm = $('#additionally-modal #modal-text-add')
	hiddenComAdd = $('#additionally-modal [name="DATA[COMMENTS]"]');
		// console.log(hiddenComAdd);

		$('#carga, #komplOhl, #areom, #rashiga, #popugai, #dioptr, #ugol, #regMosh, #ten').on('click', function(e) {
			e.preventDefault();
		// $(this).addClass('active');
		modal.removeClass('hide');

		if ( $(this).attr('id') == 'carga' ) {
			addPrice.text('600₴');
			addTextm.text('Отвод под вытяжку');
			hiddenComAdd.val('Отвод под вытяжку');
			// console.log('carga');
		} else if ( $(this).attr('id') == 'dioptr' ) {
			addPrice.text('1 900₴');
			addTextm.text('Инновационный диоптр 4 в 1');
			hiddenComAdd.val('Инновационный диоптр 4 в 1');
			// console.log('dioptr');
		} else if ( $(this).attr('id') == 'popugai' ) {
			addPrice.text('900₴');
			addTextm.text('Непрерывный контроль крепости (Попугай)');
			hiddenComAdd.val('Непрерывный контроль крепости (Попугай)');
			// console.log('popugai');
		} else if ( $(this).attr('id') == 'rashiga' ) {
			addPrice.text('850₴');
			addTextm.text('Кольца Рашига 1 кг');
			hiddenComAdd.val('Кольца Рашига 1 кг');
			// console.log('rashiga');
		} else if ( $(this).attr('id') == 'areom' ) {
			addPrice.text('550₴');
			addTextm.text('Набор профессиональных ареометров и мерная колба');
			hiddenComAdd.val('Набор профессиональных ареометров и мерная колба');
			// console.log('areom');
		} else if ( $(this).attr('id') == 'komplOhl' ) {
			addPrice.text('750₴');
			addTextm.text('Комплект охлождения ДеЛюкс 6 мм');
			hiddenComAdd.val('Комплект охлождения ДеЛюкс 6 мм');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ugol' ) {
			addPrice.text('850₴');
			addTextm.text('Угольная колонна AquaGradus');
			hiddenComAdd.val('Угольная колонна AquaGradus');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'regMosh' ) {
			addPrice.text('1 850₴');
			addTextm.text('Регулятор мощности нагрева АГ-2');
			hiddenComAdd.val('Регулятор мощности нагрева АГ-2');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ten' ) {
			addPrice.text('350₴');
			addTextm.text('Водяной ТЭН для самогонного аппарат');
			hiddenComAdd.val('Водяной ТЭН для самогонного аппарат');
			// console.log('drogi');
		};
	});

		$('.modal-close').on('click', function() {
			modal.addClass('hide');
		});

		$(document).on('click', function(event) {
			if ( event.target.id == 'mW5' ) {
				modal.addClass('hide');
			}
		});

	});

// Date Today

$(function() {

	var dateNow = new Date(),
	todayInner = $('.today');
	// dateNow.toDateString();
	function formatDate(date) {

		var dd = date.getDate();
		if (dd < 10) dd = '0' + dd;

		var mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;

		return dd + '.' + mm;
	};

	todayInner.text(formatDate(dateNow));
	// console.log(formatDate(dateNow));
});

// Parallax

$(function() {

	$(window).mousemove(function(e) {
		var change;
		var xpos=e.clientX;
		var ypos=e.clientY;
		var left= change*20;
		var  xpos=xpos*2;ypos=ypos*2;
		$('.layer-1').css('top',((80-(ypos/30))+"px"));
		$('.layer-1').css('left',(( 280-(xpos/50))+"px"));

	});

});

// Tab Additionally

$(function() {

	$('.tab-content').hide();

	$('.tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-content').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tablink').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab').removeClass('active');
		$(this).closest('.tab').addClass('active');
		getWrapper.find('.tab-content').hide();
		getWrapper.find('.tab-content[data-tab='+dataTab+']').fadeIn('slow');

	});

	$('.tab-close').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab-content').fadeOut('fast');
		getWrapper.find('.tab').removeClass('active');

	})

});

// Scroll to

$(function() { // fridayblack

	$('.more a, #menu a, .goto a, .card-block a, .banner a, .bannerm a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 75}, 2000); // анимируем скроолинг к элементу scroll_el

	    if ( $(window).width() < 768 && $(this).hasClass('h-menu') ) {
	    	// console.log(this);
	    	$('.icon').toggleClass('active');
	    	var menu = $('#menu');
	    	menu.slideToggle();
	    };	    
	}
	    return false; // выключаем стандартное действие
	});

});

// Accardeon FAQ

$(function() {

	$('.accordeon .card>.collapse').not(':eq(1)').hide();
	$('.accordeon .card .x-link').not(':eq(1)').addClass('collapsed');

	$('.accordeon .card .x-link').on('click', function(e) {
		e.preventDefault();
		// console.log('click');
		
		var findCollapse = $(this).closest('.card-header').next('.collapse');
		// console.log(findCollapse);

		var findWrapper = $(this).closest('.accordeon');
		// console.log(findWrapper);

		if ( findCollapse.is(':visible') ) {
			findCollapse.slideUp();
			findWrapper.find('.card .x-link').addClass('collapsed');
		} else {
			findWrapper.find('.card>.collapse').slideUp();
			findCollapse.slideDown();
			findWrapper.find('.card .x-link').addClass('collapsed');
			$(this).removeClass('collapsed');
		};

		
	});

});

// Scroll Header

$(function() {

	$(window).scroll(function() {

		var winWidth = $(window).width();

		if ( winWidth > 767 && winWidth < 1090 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
				$('.headChar').hide();
			} else {
				$('.header-navbar .btnHead').hide();
				$('.headChar').show();
			};
		} else if ( winWidth > 767 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
			} else {
				$('.header-navbar .btnHead').hide();
			};
		};

	});

});

// Drag img

$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// Burger bar

$(function() {
	
	$('.icon').on('click', function(e) {
		e.preventDefault();

		$('.icon').toggleClass('active');

		var menu = $('#menu');

		menu.slideToggle();
	});

});

//E-mail & Bitrix Ajax Send

$(function() { // fridayblack

	$("#headerCall, #bf-call, #headerForm, #modalBook, #formBuy, #aboutCall, #formAdd, #question, #char-form, #formBonus, #formCharMod, #formTank, #formVideo").submit(function() { //Change
		var th = $(this);
		var submitButton = th.find("button[type='submit']");
		console.log(submitButton);
		submitButton.addClass('btn-disable').prop("disabled", true);

		$.ajax({
			type: "POST",
			url: "rest.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				// th.trigger("reset");
				location.href = "http://aquagradus.in.ua/sps/";
			}, 500);
		});
		return false;
	});


});

// Phone Mask

$(function() {
	$('[type="tel"]').mask('+389999999999');
});

// Show-hide for tips Btn 

$(function() {

	$('.red-more').on('click', function(e) {
		e.preventDefault();
		
		$('.hide-tip').toggle('slow');
		$(this).text('Свернуть');

		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
		} else {
			$(this).text('Больше информации... ');
		};

	});

});

// Timer Settings

$(function() {

	function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2018, 1, 6);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
  	var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
  	// console.log(diff % 1000);
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;

    if ( days < '1' ) {
    	// console.log(days);
    	$('.timer-red').css('color', '#EE4034');
    };

    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
}
setTimeout(update, 0);
}

updater(document.getElementById("days1"),
	document.getElementById("hours1"),
	document.getElementById("minutes1"),
	document.getElementById("seconds1"));

updater(document.getElementById("days2"),
	document.getElementById("hours2"),
	document.getElementById("minutes2"),
	document.getElementById("seconds2"));

// updater(document.getElementById("days3"),
// 	document.getElementById("hours3"),
// 	document.getElementById("minutes3"),
// 	document.getElementById("seconds3"));

});

// Show-Hide for Timer in top

$(function() {
	
	var goTo = $('#goto'),
	sticky = goTo.offset().top,
	timeHeader = $('.time-wrap');

	$(window).scroll(function() {

		var topPos = $(this).scrollTop();

		if ( $(window).width() > 767 ) {
			if ( topPos >= sticky ) {
				timeHeader.removeClass('animateHide');

			} else {
				timeHeader.addClass('animateHide');

			}
		} else {
			if ( topPos >= sticky ) {
				timeHeader.addClass('active');

			} else {
				timeHeader.removeClass('animateHide');
				timeHeader.removeClass('active');
				timeHeader.addClass('animateHideMob');
				$('#time-text').text('Акция: ');
			}
		}

	});

});

// Blinking Bonus on First Plan

$(function() {
	
	setInterval(function() {

		$('.header-bonus').toggleClass('blink');

	}, 1000);

});