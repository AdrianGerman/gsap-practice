gsap.to(".box", {
  x: 100,
  duration: 1,
  rotate: 360,
  scale: 0.5,
  stagger: {
    each: 0.2,
    repeat: -1,
    yoyo: true
  }
})
