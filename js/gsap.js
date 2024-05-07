gsap.from('#box', {
    y: -100,
    duration: .8,
    delay: 0,
    ease: 'back.out',
})

gsap.from('ul, li, a', {
    y: -80,
    duration: .5,
    delay: .1,
    opacity: 1,
    ease: 'back.out',
    stagger: .08,
})

gsap.from('.anim-up', {
    opacity: 0,
    y: 200,
    duration: .5,
    delay: .1,
    ease: 'back.out',
    stagger: .08,
})

gsap.from('.anim-up2', {
    opacity: 0,
    y: 200,
    duration: .5,
    delay: .1,
    ease: 'back.out',
    stagger: .08,

    scrollTrigger: {
        trigger: '.anim-up2 .weather',
        scroller: 'body',
        start: 'top 0%',
    }
})

gsap.from('.anim-opac', {
    rotate: 30,
    opacity: 0,
    duration: .5,
    delay: 1,
    ease: 'back.out'
})


gsap.from('.anim-trig-up', {
    opacity: 0,
    y: 200,
    duation: .5,
    delay: .1,
    ease: 'back.out',
    stagger: 0.8,

    scrollTrigger: {
        trigger: '.anim-trig-up',
        scroller: 'body',
        start: 'top 80%',
    }
})

gsap.to('.scrub', {
    scale: 1,

    scrollTrigger: {
        trigger: '.scrub',
        scroller: 'body',
        start: 'top 70%',
        end: 'bottom 80%',
        scrub: 2,
    }
})


gsap.to('.horizontal h1', {
    transform: 'translateX(-100%)',
    delay: 2,

    scrollTrigger: {
        trigger: '.horizontal',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2,
        pin: true,
    }
})

gsap.from('.anim-right', {
    x: 500,
    opacity: 0,
    duration: 2,
    ease: 'back.out',
    
    scrollTrigger: {
        trigger: '.anim-right',
        scroller: 'body',
        start: 'top 80%',
    }
})

gsap.from('.anim-right2', {
    x: 500,
    opacity: 0,
    duration: 2,
    ease: 'back.out',
    
    scrollTrigger: {
        trigger: '.anim-right2',
        scroller: 'body',
        start: 'top 80%',
    }
})

gsap.from('.anim-left', {
    x: -500,
    opacity: 0,
    delay: 1,
    duration: 2,
    ease: 'back.out',
    
    scrollTrigger: {
        trigger: '.anim-left',
        scroller: 'body',
        start: 'top 80%',
    }
})

gsap.from('.anim-left2', {
    x: -500,
    opacity: 0,
    duration: 2,
    ease: 'back.out',
    
    scrollTrigger: {
        trigger: '.anim-left2',
        scroller: 'body',
        start: 'top 80%',
    }
})
