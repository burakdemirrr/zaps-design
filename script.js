const tl=gsap.timeline();

tl.from(".logo,.menu-items li",{
    duration:1,
    delay:0.5,
    opacity:0,
    y:50,
    stagger:{
        amount:0.4,
    },
});

tl.from(".top span",{
    duration:1,
    opacity: 0,
    x:50,
})

tl.from(".bt",{
    duration:0.7,
    y:100,
    skewY:5,
    opacity:0,
   
}),
"-=2"