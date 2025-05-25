// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')

header = document.querySelector('header')
headerWrap = document.querySelector('.header_wrap')


document.addEventListener('DOMContentLoaded', function () {

	if ($(window).width() > 768) {
		$(".menu-item-has-children > a").addClass("sub_link");
		let html_el = $('.new_sub_menu');
		$('.new_sub_menu').remove()
		$(".sub_menu").after(html_el);
		$('.new_sub_menu').show();
	}



	document.addEventListener( 'wpcf7mailsent', function( event ) {
		if ( '270' == event.detail.contactFormId ) {
		    Fancybox.close()
			Fancybox.show([{
				src: '#success_modal2',
				type: 'inline'
			}])
		}
		else
		{
		    Fancybox.close()
			Fancybox.show([{
				src: '#success_modal',
				type: 'inline'
			}])
		}
	}, false );

	$(".wpcf7").addClass("form");

	$(".calc .wpcf7 input[type='checkbox']:not(input[name='agree[]'])").on('change', function (e) {
		//$(this).closest(".wpcf7").find(".wpcf7-form-control-wrap:not(span[data-name='agree'])").removeClass("checked");
		$(this).closest(".wpcf7-form-control-wrap").toggleClass("checked");
	});


	// Основной слайдер на главной
	let mainSlider = document.querySelector('.main_slider .swiper')
	let countSlidesMain = document.querySelectorAll('.main_slider .swiper-slide')


	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: countSlidesMain==1 ? true : false,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			autoplay: {
				delay: 7000,
				disableOnInteraction: false
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.data'))
				},
				resize: swiper => {
					setHeight(swiper.el.querySelectorAll('.data'))
				}
			}
		})
	}


	// Карусель 3 шага
	const stepsSliders = [],
		steps = document.querySelectorAll('.steps .swiper')

	steps.forEach(function (el, i) {
		el.classList.add('steps_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto',
				},
				480: {
					spaceBetween: 24,
					slidesPerView: 'auto',
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3,
				},
				1248: {
					spaceBetween: 48,
					slidesPerView: 3,
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.item .name'))
					setHeight(swiper.el.querySelectorAll('.item .desc'))
				},
				resize: swiper => {
					let itemName = swiper.el.querySelectorAll('.item .name'),
						itemDesc = swiper.el.querySelectorAll('.item .desc')

					itemName.forEach(el => el.style.height = 'auto')
					itemDesc.forEach(el => el.style.height = 'auto')

					setHeight(itemName)
					setHeight(itemDesc)
				}
			}
		}

		stepsSliders.push(new Swiper('.steps_s' + i, options))
	})


	// Карусель в выпадающем меню
	const subMenuSliders = [],
		subMenus = document.querySelectorAll('header .main_menu .new_sub_menu .swiper')

	subMenus.forEach(function (el, i) {
		el.classList.add('new_sub_menu_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 20,
			slidesPerView: 1,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false
			}
		}

		subMenuSliders.push(new Swiper('.new_sub_menu_s' + i, options))
	})


	// Карусель - Избавим от головной боли...
	const headacheSliders = [],
		headache = document.querySelectorAll('.headache .swiper')

	headache.forEach(function (el, i) {
		el.classList.add('headache_s' + i)

		let options = {
			loop: false,
			speed: 500,
			initialSlide: 1,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto',
					initialSlide: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1248: {
					spaceBetween: 40,
					slidesPerView: 2
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.item'))
				},
				resize: swiper => {
					let item = swiper.el.querySelectorAll('.item')

					item.forEach(el => el.style.height = 'auto')

					setHeight(item)
				}
			}
		}

		headacheSliders.push(new Swiper('.headache_s' + i, options))
	})


	// Карусель отзывов
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 16
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 24
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 24
				},
				1248: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 48
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let totalSlides = swiper.snapGrid.length

						$(swiper.$el).find('.count .total').text(totalSlides)

						if(totalSlides == 1) {
							$(swiper.$el).find('.controls').hide()
						}
					})
				},
				activeIndexChange: swiper => {
					setTimeout(() => $(swiper.$el).find('.count .current').text((swiper.snapIndex + 1)))

				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Карусель сертификатов
	const certsSliders = [],
		certs = document.querySelectorAll('.certs .swiper')

	certs.forEach(function (el, i) {
		el.classList.add('certs_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 16
				},
				480: {
					slidesPerView: 'auto',
					spaceBetween: 24
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 24
				},
				1248: {
					slidesPerView: 1,
					spaceBetween: 48
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let totalSlides = swiper.slides.length - 2

						$(swiper.$el).find('.count .total').text(totalSlides)
					})
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.data'))
					}, 1000);

				},
				resize: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.data'))
					}, 1000);
				},
				activeIndexChange: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.count .current').text((swiper.realIndex + 1))

						$(swiper.$el).find('.bg').removeClass('active')
						$(swiper.$el).find('.bg' + (swiper.realIndex + 1)).addClass('active')
					})

				}
			}
		}

		certsSliders.push(new Swiper('.certs_s' + i, options))
	})


	// Карусель статей
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach(function (el, i) {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 16
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 24
				},
				1248: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 48
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let totalSlides = swiper.snapGrid.length

						$(swiper.$el).find('.count .total').text(totalSlides)

						if(totalSlides == 1) {
							$(swiper.$el).find('.controls .swiper-button-prev').hide()
						}
					})
				},
				activeIndexChange: swiper => {
					setTimeout(() => $(swiper.$el).find('.count .current').text((swiper.snapIndex + 1)))
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Карусель изображенгий в проекте
	const projectThumbsSliders = [],
		projectThumbs = document.querySelectorAll('.projects .project .thumb .swiper')

	projectThumbs.forEach(function (el, i) {
		el.classList.add('project_thumb_s' + i)
        let numOfSlides
		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1,
			on: {
				beforeInit: swiper => {
					numOfSlides = $(swiper.$el).find(".swiper-slide").length;
    				/*if(numOfSlides==1)
					{
						$(swiper.$el).addClass("not_navi");
					}*/
				}
			}
		}

		projectThumbsSliders.push(new Swiper('.project_thumb_s' + i, options))

		if (numOfSlides == 1) {
			options.loop = false
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false
			projectThumbsSliders[i].destroy(true, true)
			projectThumbsSliders[i] = new Swiper('.project_thumb_s' + i, options)
		}
	})


	// Сдайжер в тексте
	const textSliders = [],
		textSlider = document.querySelectorAll('.text_block .slider .swiper')

	textSlider.forEach(function (el, i) {
		el.classList.add('text_slider_s' + i)

		let options = {
			loop: false,
			speed: 100,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 24,
			slidesPerView: 1,
			breakpoints: {
				0: {
					autoHeight: true
				},
				1280: {
					effect: 'fade',
					fadeEffect: {
						crossFade: true
					}
				}
			},
			/*on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('img').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('img').outerHeight() * 0.5
						)
					})
				}
			}*/
		}

		textSliders.push(new Swiper('.text_slider_s' + i, options))
	})


	// Галерея
	const textGallerySliders = [],
		textGallerySlider = document.querySelectorAll('.text_block .gallery_slider .swiper')

	textGallerySlider.forEach(function (el, i) {
		el.classList.add('text_gallery_slider_s' + i)

		let options = {
			loop: el.querySelectorAll('.swiper-slide').length > el.getAttribute('data-slides-count') ? true : false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 8
				},
				768: {
					spaceBetween: 24,
					slidesPerView: el.getAttribute('data-slides-count')
				},
                1024: {
                    noSwiping: true,
                    noSwipingClass: 'swiper-slide',
                    slidesPerView: el.getAttribute('data-slides-count'),
                    spaceBetween: 24,
                }
			}
		}

		textGallerySliders.push(new Swiper('.text_gallery_slider_s' + i, options))
	})


	// Этапы технического обследования
	const inspectionStepsSliders = [],
		inspectionStepsSlider = document.querySelectorAll('.inspection_steps .items.swiper')

	inspectionStepsSlider.forEach(function (el, i) {
		el.classList.add('inspection_steps_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			autoHeight: true,
			scrollbar: {
				draggable: true,
				el: '.swiper-scrollbar',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 24,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			}
		}

		inspectionStepsSliders.push(new Swiper('.inspection_steps_s' + i, options))
	})


	// Этапы технического обследования
	const inspectionStagesSliders = [],
		inspectionStagesSlider = document.querySelectorAll('.inspection_stages .swiper')

	inspectionStagesSlider.forEach(function (el, i) {
		el.classList.add('inspection_stages_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			autoHeight: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
		}

		inspectionStagesSliders.push(new Swiper('.inspection_stages_s' + i, options))
	})



	// История компании
	if ($('.history').length) {
		const years = new Swiper('.history .years .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1
				},
				768: {
					slidesPerView: 7,
					spaceBetween: 28
				},
				1024: {
					slidesPerView: 9,
					spaceBetween: 40
				},
				1280: {
					slidesPerView: 9,
					spaceBetween: 48
				}
			}
		})

		new Swiper('.history > .swiper', {
			loop: false,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			thumbs: {
				swiper: years
			}
		})
	}


	// Коммерческая недвижимость — наша специализация
	const projectsMapSliders = [],
		projectsMaps = document.querySelectorAll('.projects_map .swiper')

	projectsMaps.forEach(function (el, i) {
		el.classList.add('projects_map_s' + i)

		let options = {
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			centeredSlides: true,
			speed: $(window).width() > 768 ? 5000 : 2500,
			autoplay: {
				delay: 1
			},
			loop: true,
			slidesPerView:'auto',
			allowTouchMove: true,
			disableOnInteraction: false
		}

		projectsMapSliders.push(new Swiper('.projects_map_s' + i, options))
	})


	// Лендинг - Что это - Карусель примеров
	const lendingWhatItSliders = [],
		lendingWhatIt = document.querySelectorAll('.lending_what_it .swiper')

	lendingWhatIt.forEach(function (el, i) {
		el.classList.add('lending_what_it_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			slidesPerView: 1,
			spaceBetween: 24,
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		lendingWhatItSliders.push(new Swiper('.lending_what_it_s' + i, options))
	})



	// Лендинг - У качественного сервиса есть лицо
	const lendingDepartmentsSliders = [],
		lendingDepartments = document.querySelectorAll('.lending_departments .swiper')

	lendingDepartments.forEach(function (el, i) {
		el.classList.add('lending_departments_s' + i)

		let options = {
			loop: true,
			speed: 500,
			autoHeight: false,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			autoplay: {
				delay: 10000,
				disableOnInteraction: false
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 12
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 24
				}
			},
			on: {
				beforeInit: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.info'))
					}, 1000);
				},
				init: swiper => {
					setTimeout(() => {
						let totalSlides = swiper.slides.length - 2

						$(swiper.$el).find('.count .total').text(totalSlides)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.info'))
					}, 1000);
				},
				activeIndexChange: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.count .current').text((swiper.realIndex + 1))
					})
				}
			}


		}

		lendingDepartmentsSliders.push(new Swiper('.lending_departments_s' + i, options))
	})


	// Лендинг - Документы
	const lendingDocumentsSliders = [],
		lendingDocumentsSlider = document.querySelectorAll('.lending_documents .swiper')

	lendingDocumentsSlider.forEach(function (el, i) {
		el.classList.add('lending_documents_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			autoHeight: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 12
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 48
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 48
				}
			},
			on: {
				beforeInit: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.name'))
					}, 1);
				},
				resize: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.name'))
					}, 1000);
				},
				init: swiper => {
					setTimeout(() => {
						let totalSlides = swiper.snapGrid.length

						$(swiper.$el).find('.count .total').text(totalSlides)

						if(totalSlides == 1) {
							$(swiper.$el).find('.count .controls').hide()
						}
					})
				},
				activeIndexChange: swiper => {
					setTimeout(() => $(swiper.$el).find('.count .current').text((swiper.snapIndex + 1)))
				}
			}
		}

		lendingDocumentsSliders.push(new Swiper('.lending_documents_s' + i, options))
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent           = $(this).closest('.tabs_container'),
				  activeTab         = $(this).data('content'),
				  $activeTabContent = $(activeTab),
				  level             = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')

			$parent.find('.tabs').animate({ scrollLeft: $parent.find('.tabs').scrollLeft() + $(this).position().left - 24 }, 300)
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab        = $(`.tabs button[data-content="${locationHash}"]`),
			  $activeTabContent = $(locationHash),
			  $parent           = $activeTab.closest('.tabs_container'),
			  level             = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Меню
	$('.responsive_menu').responsiveMenu({
		containerClass: 'main_menu',
		itemClass: 'item',
		linkText: '<svg class="icon"><use xlink:href="https://replanmos.ru/wp-content/themes/raten/images/sprite.svg#ic_menu"></use></svg>'
	})

	$('header .responsive_menu').mouseleave(function() {
		$('header .main_menu .more_btn').removeClass('active')
		$('header .main_menu .dropdown').fadeOut(200).removeClass('show')
	})

	$('header .main_menu .item > a.sub_link').mouseenter(function() {
		$('header .main_menu .more_btn').removeClass('active')
		$('header .main_menu .dropdown').fadeOut(200).removeClass('show')
	})

	$("header .contacts .time a").on("click", function(e){
		$(".time").find('.info').css({
			left: e.clientX+20,
			top: e.clientY+20
		})
		e.preventDefault();
	})


	 const clipboard = new ClipboardJS('header .contacts .time a')

	 clipboard.on('success', (e) => {
	 	$("html").addClass("copied");

	 	$("html").mousemove(function(y){
	 		$(".time").find('.info').css({
	 			left: y.clientX+20,
	 			top: y.clientY+20
	 		})
	 	})

	 	$(".time").find('.info').addClass("show");

	 	setTimeout(() => {
	 		$("html").removeClass('copied');
	 		$(".time").find('.info').removeClass("show");
	 		$( "html" ).off("mousemove");
	 	}, 3000);
	 	e.clearSelection()
	 })


	// Логотипы
	$('.logos .item').mousemove(function(e){
		if ($(window).scrollTop() + $(window).outerHeight() < $(this).offset().top + $(this).outerHeight() + $(this).find('.info').outerHeight()) {
			$(this).find('.info').css({
				left: e.offsetX,
				top: 'auto',
				bottom: (e.offsetY - $(this).outerHeight()) * -1
			})
		} else {
			$(this).find('.info').css({
				left: e.offsetX,
				bottom: 'auto',
				top: e.offsetY
			})
		}
	})

	$('.logos .item').hover(function(e){
		e.preventDefault()

		$(this).find('.info').addClass('show')
	})

	$('.logos .item').mouseleave(function(){
		$(this).find('.info').removeClass('show')
	})


	// Проекты
	$('.projects .tags label').click(function(e){
		let _self = $(this)

		setTimeout(() => {

			if(_self.find('input').prop('checked'))
			{
				_self.parent().css({ order: parseInt(_self.data('count')) * -1 })
			}
			else
			{
				_self.parent().css({ order: 'initial' })
			}
		})
	})


	// Страница проекта
	if ($('.project_info .images').length) {
		const projectThumbs = new Swiper('.project_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 5,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 16,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})

		const projectSlider = new Swiper('.project_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 16,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			thumbs: {
				swiper: projectThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="https://replanmos.ru/wp-content/themes/raten/images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	/*const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}*/

	$('body').on('click', '.modal_btn', function (e) {
	    e.preventDefault()

	    Fancybox.close()

	    Fancybox.show([{
	      src: "#" + $(this).data('modal'),
	      type: 'inline'
	    }])
  	})

	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		$item.hasClass('active')
			? $item.removeClass('active').find('.data').slideUp(300)
			: $item.addClass('active').find('.data').slideDown(300)
	})


	// Моб. меню
	const mobMenuBtn = document.querySelector('.mob_header .mob_menu_btn'),
		mobMenu = document.querySelector('.header_wrap')

	if (mobMenuBtn) {
		mobMenuBtn.addEventListener('click', e => {
			e.preventDefault()

			mobMenuBtn.classList.toggle('active')
			BODY.classList.toggle('menu_open')
			mobMenu.classList.toggle('show')
		})
	}


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true,
			})
		})
	}


	// Кастомный select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => NiceSelect.bind(el))
	}


	// Mode toggle
	$('header .mode .btn').click(function(e) {
		e.preventDefault()

		$(this).hasClass('dark')
			? deleteCookie('dark')
			: setCookie('dark', '1', {'max-age': 360000})

		$(this).toggleClass('dark')
		$('html').toggleClass('dark_theme')
	})


	// Выпадающее меню
	if ($(window).width() > 767) {
		$('header .responsive_menu > .item > a.sub_link').mouseenter(function() {
			$('.overlay').fadeIn(400)
		})

		$('header .responsive_menu > .item').mouseleave(function() {
			$('.overlay').fadeOut(400)
		})
	}


	// Проверка наличия скролла
	$('header .main_menu .new_sub_menu .categories .scroll').prop('scrollHeight') > $('header .main_menu .new_sub_menu .categories .scroll').height()
		? $('header .main_menu .new_sub_menu .categories .up_down_btn').fadeIn(300)
		: $('header .main_menu .new_sub_menu .categories .up_down_btn').hide()


	$('header .main_menu .new_sub_menu .categories .up_down_btn').click(function(e) {
		e.preventDefault()

		let scroll = $(this).closest('.categories').find('.scroll')

		if ($(this).hasClass('up')) {
			$(this).removeClass('up')

			scroll.animate({ scrollTop: scroll.outerHeight() }, 500)
		} else {
			$(this).addClass('up')

			scroll.animate({ scrollTop: 0 }, 500)
		}
	})

	$('header .main_menu .new_sub_menu .categories .scroll').scroll(function() {
		let scroll = $(this),
			btn = $(this).closest('.categories').find('.up_down_btn')

		// Проверяем, достиг ли скролл верха
		if (scroll.scrollTop() === 0) {
			btn.addClass('up')
		}

		// Проверяем, достиг ли скролл конца
		if (scroll.scrollTop() + scroll.innerHeight() >= scroll[0].scrollHeight) {
			btn.removeClass('up')
		}
	})


	if (is_touch_device() && $(window).width() > 767) {
		const subMenus = document.querySelectorAll('header .main_menu .new_sub_menu')

		// Подменю на тач скрине
		$('header .main_menu .item > a.sub_link').addClass('touch_link')

		$('header .main_menu .item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				$dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Закрываем под. меню при клике за её пределами
		document.addEventListener('click', e => {
			if ($(e.target).closest('.main_menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Отправка форм
	$('.custom_submit').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})


	// Согласовывать с нами
	// if($('.coordinate').length) {
	// 	offsetStart = $('.coordinate .block_head_wrap').offset().top - ($(window).height() / 2) + $('.coordinate .block_head_wrap').outerHeight() / 2
	// 	offsetFinish = offsetStart + + $('.coordinate .block_head_wrap').outerHeight() / 2
	// }


	// Фиксация блока
	$('.sticky').stick_in_parent({
		offset_top: header.clientHeight + 24
	}).on('sticky_kit:bottom', e => {
		e.target.classList.add('on_bottom')
	}).on('sticky_kit:unbottom', e => {
		e.target.classList.remove('on_bottom')
	})

	$('.sticky2').stick_in_parent({
		offset_top: header.clientHeight
	})


	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).style = 'scroll-margin-top: '+ (header.clientHeight + 24) +'px;'

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Статьи - категории
	$('.tags .more_btn').click(function(e) {
		e.preventDefault()

		$(this).addClass('active')
		$('.tags .hide').removeClass('hide')
	})


	// Инициалы в форме
	// $('.form #input_name').keyup(function() {
	// 	let text = $(this).val().split(/\s+/).map(w => w.substring(0,1).toUpperCase()).join('')

	// 	$(this).closest('.form').find('.initials').text(text)
	// })


	// Клмментарии
	$('.comments .comment .reply_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.comment')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? parent.next('.add_comment').slideDown(300)
			: parent.next('.add_comment').slideUp(200)
	})


	// Калькулятор
	var currentStep = 1

	$('.calc .next_btn').click(function(e) {
		e.preventDefault()

		currentStep += 1

		if(currentStep == 2) {
			$('.calc .form .step1, .calc .form .step3').hide()
			$('.calc .form .step2').fadeIn(300)
		}

		if(currentStep == 3) {
			$('.calc .form .step1, .calc .form .step2, .calc .form .next_btn').hide()
			$('.calc .form .step3').fadeIn(300)
		}

		$('.calc .form .steps_info .current').text(currentStep)
	})


	// Фильтрация статей по дате
	$('.articles .period .btn').click(function(e) {
		e.preventDefault()

		$('.articles .period .btn').removeClass('active')
		$(this).addClass('active')
	})

	$(".responsive_menu > .item > a").wrapInner("<span></span>").append('<svg class="icon hide"><use xlink:href="'+myajax.template_url+'/images/sprite.svg#ic_arr_ver"></use></svg>');

	$(".responsive_menu .sub_menu .item.menu-item-has-children > a").wrapInner("<span></span>").append('<svg class="icon hide"><use xlink:href="'+myajax.template_url+'/images/sprite.svg#ic_arr_ver"></use></svg>');

	$(".menu-item-has-children .hide").removeClass("hide");

	$(".sub_menu").wrapInner("<div class='row'></div>").wrapInner("<div class='cont'></div>");


	if (is_touch_device()) {
		$('body').on('click', '.menu-item-has-children > a', function(e) {
		//$(".menu-item-has-children > a").click(function (e) {
			e.preventDefault();
			$(this).next().addClass("show");
		});

		$("header .main_menu .level-0 > .sub_menu > .cont > .row").prepend("<a class='back_menu js-menu-back'><svg class='icon hide'><use xlink:href='https://replanmos.ru/wp-content/themes/raten/images/sprite.svg#ic_arr_ver'></use></svg>Назад</a>")

		$("header .main_menu .sub_menu .sub_menu .row").prepend("<a class='back_menu js-menu-back-sub'><svg class='icon hide'><use xlink:href='https://replanmos.ru/wp-content/themes/raten/images/sprite.svg#ic_arr_ver'></use></svg>Все услуги</a>")



		$('body').on('click', '.js-menu-back', function (e) {
	    	e.preventDefault()
			$(".sub_menu").removeClass("show");
		});

		$('body').on('click', '.js-menu-back-sub', function (e) {
	    	e.preventDefault()
			$(".sub_menu .sub_menu").removeClass("show");
		});
	}

	/*$(".text_block figure.wp-block-image a, .text_block .wp-block-image figure a").append('<div class="zoom"><svg><use xlink:href="https://replanmos.ru/wp-content/themes/raten/images/sprite.svg#ic_zoom"></use></svg></div>');
    Fancybox.bind('.text_block figure.wp-block-image a, .text_block .wp-block-image figure a', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Лендинг - Спойлер в тексте
	$('.lending_bottom_text .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).closest('.lending_bottom_text').find('.text_block:nth-child(3)').toggleClass('hide')
	})


	// Лендинг - Цены
	$('.lending_prices .table').each((key, value) => lendingPricesHeight(value))*/

	$('.lending_prices .table').each((key, value) => lendingPricesHeight(value))
})



window.addEventListener('load', () => {
	// Fix. header
	headerInit = true,
		windowOffsetTop = window.pageYOffset

	headerWrap.style.height = header.clientHeight + 'px'

	/*headerInit && window.scrollY > 0
		? header.classList.add('fixed')
		: header.classList.remove('fixed')*/


	// Проекты - Теги
	initProjectsTagsSliders()

	// Все инстанции
	initLogosSliders()

	// Бюрократия
	initNoBureaucracySliders()

	// Специалисты
	initSpecialistsSliders()
})



window.addEventListener('scroll', function () {
	// Fix. header
	/*typeof headerInit !== 'undefined' && headerInit && window.scrollY > 0
		? header.classList.add('fixed')
		: header.classList.remove('fixed')*/

	typeof headerInit !== 'undefined' && headerInit && window.scrollY > 0 && windowOffsetTop > window.pageYOffset
		? header.classList.add('show')
		: header.classList.remove('show')

	windowOffsetTop = window.pageYOffset


	// Согласовывать с нами
	if(typeof offsetStart != 'undefined' && typeof offsetFinish != 'undefined') {
		let = scrollTop = $(window).scrollTop()

		if(scrollTop > offsetStart && scrollTop < offsetFinish) {
			$('.coordinate .block_head').removeClass('bottom')
			$('.coordinate .block_head').addClass('is_stuck')

			$('.coordinate .block_head').css({
				'top': $(window).height() / 2 - $('.coordinate .block_head_wrap').outerHeight() / 2
			})
		} else if(scrollTop > offsetFinish) {
			$('.coordinate .block_head').addClass('bottom')
			$('.coordinate .block_head').removeClass('is_stuck')
			$('.coordinate .block_head').css({ 'top': 0 })
		} else {
			$('.coordinate .block_head').removeClass('bottom')
			$('.coordinate .block_head').removeClass('is_stuck')
			$('.coordinate .block_head').css({ 'top': 0 })
		}
	}
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Проверка наличия скролла
		$('header .main_menu .new_sub_menu .categories .scroll').prop('scrollHeight') > $('header .main_menu .new_sub_menu .categories .scroll').height()
			? $('header .main_menu .new_sub_menu .categories .up_down_btn').fadeIn(300)
			: $('header .main_menu .new_sub_menu .categories .up_down_btn').hide()


		// Fix. header
		/*headerInit = false

		setTimeout(() => {
			headerInit = true

			headerWrap.style.height = 'auto'
			headerWrap.style.height = header.clientHeight + 'px'

			headerInit && window.scrollY > 0
				? header.classList.add('fixed')
				: header.classList.remove('fixed')
		}, 100)*/


		// Проекты - Теги
		initProjectsTagsSliders()

		// Все инстанции
		initLogosSliders()

		// Бюрократия
		initNoBureaucracySliders()

		// Специалисты
		initSpecialistsSliders()


		// Лендинг - Цены
		$('.lending_prices .table').each((key, value) => lendingPricesHeight(value))


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Проекты - Теги
projectsTagsSliders = []

function initProjectsTagsSliders() {
	if ($(window).width() < 1248) {
		if ($('.projects .tags .row').length) {
			$('.projects .tags .row > *').addClass('swiper-slide')
			$('.projects .tags .row').addClass('swiper-wrapper').removeClass('row')

			$('.projects .tags .swiper').each(function (i) {
				$(this).addClass('projects_tags_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					breakpoints: {
						0: {
							spaceBetween: 8
						},
						1248: {
							spaceBetween: 16
						}
					}
				}

				projectsTagsSliders.push(new Swiper('.projects_tags_s' + i, options))
			})
		}
	} else {
		projectsTagsSliders.forEach(element => element.destroy(true, true))

		projectsTagsSliders = []

		$('.projects .tags .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.projects .tags .row > *').removeClass('swiper-slide')
	}
}



// Все инстанции
logosSliders = []

function initLogosSliders() {
	if ($(window).width() < 1248) {
		if ($('.logos .row').length) {
			$('.logos .row > *').addClass('swiper-slide')
			$('.logos .row').addClass('swiper-wrapper').removeClass('row')

			$('.logos .swiper').each(function (i) {
				$(this).addClass('logos_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 16,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					},
					on: {
						init: swiper => {
							setHeight(swiper.el.querySelectorAll('.item .info'))
						},
						resize: swiper => {
							let itemInfo = swiper.el.querySelectorAll('.item .info')

							itemInfo.forEach(el => el.style.height = 'auto')

							setHeight(itemInfo)
						}
					}
				}

				logosSliders.push(new Swiper('.logos_s' + i, options))
			})
		}
	} else {
		logosSliders.forEach(element => element.destroy(true, true))

		logosSliders = []

		$('.logos .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.logos .row > *').removeClass('swiper-slide')
	}
}



// Бюрократия
noBureaucracySliders = []

function initNoBureaucracySliders() {
	if ($(window).width() < 768) {
		if ($('.no_bureaucracy .mob_swiper-wrapper').length) {
			$('.no_bureaucracy .mob_swiper-slide').addClass('swiper-slide')
			$('.no_bureaucracy .mob_swiper-wrapper').addClass('swiper-wrapper')

			$('.no_bureaucracy .swiper').each(function (i) {
				$(this).addClass('no_bureaucracy_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 16,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					},
					on: {
						init: swiper => {
							setHeight(swiper.el.querySelectorAll('.tab_content'))
						},
						resize: swiper => {
							let tabContent = swiper.el.querySelectorAll('.tab_content')

							tabContent.forEach(el => el.style.height = 'auto')

							setHeight(tabContent)
						}
					}
				}

				noBureaucracySliders.push(new Swiper('.no_bureaucracy_s' + i, options))
			})
		}
	} else {
		noBureaucracySliders.forEach(element => element.destroy(true, true))

		noBureaucracySliders = []

		$('.no_bureaucracy .swiper-wrapper').removeClass('swiper-wrapper')
		$('.no_bureaucracy .mob_swiper-slide').removeClass('swiper-slide')
	}
}



// Специалисты
specialistsSliders = []

function initSpecialistsSliders() {
	if ($(window).width() < 1024) {
		if ($('.specialists .row').length) {
			$('.specialists .row > *').addClass('swiper-slide')
			$('.specialists .row').addClass('swiper-wrapper').removeClass('row')

			$('.specialists .swiper').each(function (i) {
				$(this).addClass('specialists_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 16,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					},
					on: {
						init: swiper => {
							setHeight(swiper.el.querySelectorAll('.person'))
						},
						resize: swiper => {
							let person = swiper.el.querySelectorAll('.person')

							person.forEach(el => el.style.height = 'auto')

							setHeight(person)
						}
					}
				}

				specialistsSliders.push(new Swiper('.specialists_s' + i, options))
			})
		}
	} else {
		specialistsSliders.forEach(element => element.destroy(true, true))

		specialistsSliders = []

		$('.specialists .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.specialists .row > *').removeClass('swiper-slide')
	}
}



function initAjaxProject()
{
	// Карусель изображенгий в проекте
	const projectThumbsSliders = [],
		projectThumbs = document.querySelectorAll('.projects .project .thumb .swiper')

	projectThumbs.forEach(function (el, i) {
		el.classList.add('project_thumb_s' + i)
        let numOfSlides
		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1,
			on: {
				beforeInit: swiper => {
					numOfSlides = $(swiper.$el).find(".swiper-slide").length;
    				/*if(numOfSlides==1)
					{
						$(swiper.$el).addClass("not_navi");
					}*/
				}
			}
		}

		projectThumbsSliders.push(new Swiper('.project_thumb_s' + i, options))

		if (numOfSlides == 1) {
			options.loop = false
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false
			projectThumbsSliders[i].destroy(true, true)
			projectThumbsSliders[i] = new Swiper('.project_thumb_s' + i, options)
		}
	})
}


var img = document.getElementsByTagName('img');

for(var i in img)
{
    img[i].oncontextmenu = function()
    {
        return false;
    }
}



// Лендинг - Цены
function lendingPricesHeight(table) {
	$(table).find('.labels > *, .features > *').height('auto')

	let tableFeatures = $(table).find('.features'),
		tableLabels = $(table).find('.labels'),
		sizes = new Object()

	tableLabels.each(function () {
		$(this).find('> *').each(function () {
			if (sizes[$(this).index()]) {
				if ($(this).outerHeight() > sizes[$(this).index()]) {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	tableFeatures.each(function () {
		$(this).find('> *').each(function () {
			if (sizes[$(this).index()]) {
				if ($(this).outerHeight() > sizes[$(this).index()]) {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	$.each(sizes, (key, data) => {
		tableLabels.each(function () {
			$(this).find('> *').eq(key).innerHeight(data)
		})

		tableFeatures.each(function () {
			$(this).find('> *').eq(key).innerHeight(data)
		})
	})
}