function loadingAnimation(){
    var tl = gsap.timeline()
    tl.from(".line h1,#line-part1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5,
        onStart: function(){const counter = document.querySelector("#line-part1 h5");
            let count = 0;
            
            const CountInterval = setInterval(() => {
              counter.innerHTML = ++count;
              if (count === 100) clearInterval(CountInterval);
            }, 30);
            }
    })
    tl.to(".line h2",{
        opacity: 1,
        animationName: "anime"
    })
    
    tl.to("#loader",{
        opacity: 0,
        delay: 2.5,
        duration: 0.2,
    })
    
    tl.from("#page1",{
        opacity: 0,
        delay: 0.4,
        duration: 0.5,
        y:1200,
    })
    tl.to("#loader",{
        display: "none"
    })
    
    
}

loadingAnimation()

