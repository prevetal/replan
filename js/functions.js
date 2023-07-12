document.addEventListener("DOMContentLoaded", function () {
	// Ленивая загрузка
	const boxes = document.querySelectorAll('.lazyload, .animate, .anchor')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio >= 0.2  && entry.target.classList.contains('lazyload') && !entry.target.classList.contains('loaded')) {
				entry.target.src = entry.target.getAttribute('data-src')
				entry.target.classList.add('loaded')
			}

			entry.intersectionRatio >= 0.8 && entry.target.classList.contains('animate')
				? entry.target.classList.add('animated')
				: entry.target.classList.remove('animated')

			if (entry.intersectionRatio >= 1 && entry.target.classList.contains('anchor')) {
				let anchors = document.querySelectorAll('.anchors .btn'),
					currentAnchor = document.querySelector('.anchors .btn[data-anchor="'+ entry.target.getAttribute('id') +'"]')

				anchors.forEach(el => el.classList.remove('active'))
				currentAnchor.classList.add('active')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))


	// Установка ширины стандартного скроллбара
	document.documentElement.style.setProperty('--scroll_width', widthScroll() + 'px')


	// Моб. версия
	fakeResize = false
	fakeResize2 = true

	if (document.body.clientWidth < 375) {
		document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
	}
})



// Вспомогательные функции
const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}


const is_touch_device = () => !!('ontouchstart' in window)


const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}