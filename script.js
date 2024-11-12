const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


var tl=gsap.timeline()

tl.to("#page1",{
  y:"100vh",
  duration:0,
  scale:0.6,
})

tl.to("#page1",{
  y:"20vh",
  duration:1,
  delay:1
})
tl.to("#page1",{
  y:"0vh",
  top:0,
  duration:0.8,
  rotate:360,
  scale:1
})
