

        /* HEADER BANNER */
        const preload_line1 = new SplitType('#preload_line1');
    const preload_line2 = new SplitType('#preload_line2');
    const preload_line3 = new SplitType('#preload_line3');
    const preload_line4 = new SplitType('#preload_line4');
    const preload_line5 = new SplitType('#preload_line5');
    const preload_line6 = new SplitType('#preload_line6');

    gsap.to('#preload_line1 .char',{
        y:0,
        delay:0,
        duration:0.2
    })
    gsap.to('#preload_line2 .char',{
        y:0,
        delay:0.7,
        duration:0.1
    })
    gsap.to('#preload_line3 .char',{
        y:0,
        delay:1.0,
        duration:0.2
    })
    gsap.to('#preload_line4 .char',{
        y:0,
        delay:2.0,
        duration:0.1
    })
    gsap.to('#preload_line5 .char',{
        y:0,
        delay:3.0,
        duration:0.1
    })
    gsap.to('#preload_line6 .char',{
        y:0,
        delay:3.5,
        duration:0.5,
        stagger : 0.1
    })

        /* banner */
        gsap.registerPlugin(ScrollTrigger);

        const myText_hello = new SplitType('#hello');
        const myText_name = new SplitType('#name');
        const linkedin = new SplitType('#linkedin');
        const instagram = new SplitType('#instagram');
        const twitter = new SplitType('#twitter');
        const facebook = new SplitType('#facebook');
        const github = new SplitType('#github');
        const emailme = new SplitType('#emailme');
        const contact_through = new SplitType('#contact_through');
        const skill1 = new SplitType('.skill1');
        const skill2 = new SplitType('.skill2');
        const skill3 = new SplitType('.skill3');
        const skill4 = new SplitType('.skill4');
        const skill5 = new SplitType('.skill5');
        const skill6 = new SplitType('.skill6');
        const skill7 = new SplitType('.skill7');
        const skill8 = new SplitType('.skill8');
        const skill9 = new SplitType('.skill9');
        const skil10 = new SplitType('.skil10');

        gsap.to('#hello .char',{
            y:0,
            stagger:0.05,
            delay:0,
            duration:0.1
        })
        gsap.to('#name .char',{
            y:0,
            stagger:0.05,
            delay:0,
            duration:0.1
        })

        
        /* skills */
        gsap.to('.skill1 .char',{
            y:0,
            delay:0,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill2 .char',{
            y:0,
            delay:0.5,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill3 .char',{
            y:0,
            delay:1.0,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill4 .char',{
            y:0,
            delay:1.5,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill5 .char',{
            y:0,
            delay:2.2,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill6 .char',{
            y:0,
            delay:2.3,
            duration:1.2,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill7 .char',{
            y:0,
            delay:2.8,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill8 .char',{
            y:0,
            delay:3.1,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skill9 .char',{
            y:0,
            delay:3.4,
            duration:1.3,
            scrollTrigger: '.skill'
        })
        gsap.to('.skil10 .char',{
            y:0,
            delay:3.7,
            duration:1.3,
            scrollTrigger: '.skill'
        })

        /* contact me */
        gsap.to('#contact_through .char',{
            y:0,
            delay:1.0,
            duration:0.6,
            scrollTrigger: '#contact_d'
        })

        gsap.to('#linkedin .char',{
            y:0,
            stagger:0.05,
            delay:1.5,
            duration:0.3,
            scrollTrigger: '#contact_d'
        })

        gsap.to('#instagram .char',{
            y:0,
            stagger:0.05,
            delay:2.0,
            duration:0.3,
            scrollTrigger: '#contact_d'
        })

        gsap.to('#twitter .char',{
            y:0,
            stagger:0.05,
            delay:2.5,
            duration:0.3,
            scrollTrigger: '#contact_d'
        })
        
        gsap.to('#facebook .char',{
            y:0,
            stagger:0.05,
            delay:3.0,
            duration:0.3,
            scrollTrigger: '#contact_d'
        })

        gsap.to('#github .char',{
            y:0,
            stagger:0.05,
            delay:3.5,
            duration:0.3,
            scrollTrigger: '#contact_d'
        })

        gsap.to('#emailme .char',{
            y:0,
            stagger:0.05,
            delay:4.0,
            duration:0.3,
            scrollTrigger: '#contact_d'
        })
        
        /* photo banner */

        gsap.from(".img",{
            scale:0.1,
            duration:2.5,
            delay:0,
            scrollTrigger: '.photo_banner'
        })

        /* list */

        const link = document.querySelectorAll('.link');
        const linkHoverReveal = document.querySelectorAll('.hover-reveal');
        const linkImages = document.querySelectorAll('.hidden-img');    


for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}

        //smooth //
        
        var html = document.documentElement;
        var body = document.body;

        var scroller = {
        target: document.querySelector("#scroll-container"),
        ease: 0.05, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
        };

        var requestId = null;

        TweenLite.set(scroller.target, {
        rotation: 0.01,
        force3D: true
        });

        window.addEventListener("load", onLoad);

        function onLoad() {    
        updateScroller();  
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll); 
        }

        function updateScroller() {
        
        var resized = scroller.resizeRequest > 0;
            
        if (resized) {    
            var height = scroller.target.clientHeight;
            body.style.height = height + "px";
            scroller.resizeRequest = 0;
        }
            
        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }
        
        TweenLite.set(scroller.target, { 
            y: -scroller.y 
        });
        
        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
        }

        function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
        }

        function onResize() {
        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
        }