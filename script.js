gsap.to(".grid div", {
  duration: 2,
  scale: 0.9,
  opacity: 0,
  stagger: {
    each: 0.5,
    repeat: -1,
    yoyo: true,
    grid: "auto",
    from: "center"
  }
})
