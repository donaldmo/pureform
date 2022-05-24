window.onload = function () {

	gsap.to(mountainRange, {
		y: 100,
		scrollTrigger: {
			trigger: 'home-hero',
			scrub: true,
		}
	})

	gsap.to(title, {
		y: 500,
		scrollTrigger: {
			trigger: "home-hero",
			scrub: true,
		}
	})
}