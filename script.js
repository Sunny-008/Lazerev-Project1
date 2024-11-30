function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

function navAnimation() {
  const nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "9.5vw",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration: 0.3,
      // stagger: 0.1,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 23,
      // duration: 0.3,
      // stagger: 0.1,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
    });
  });
}

function page2Animation() {
  const rightelem = document.querySelectorAll(".right-elem");
  rightelem.forEach(function (hi) {
    hi.addEventListener("mouseenter", function () {
      gsap.to(hi.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    hi.addEventListener("mouseleave", function () {
      gsap.to(hi.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    hi.addEventListener("mousemove", function (ho) {
      // console.log(hi);
      // console.log(ho);

      // console.log(ho.y);
      // console.log(hi.getBoundingClientRect().y);

      gsap.to(hi.childNodes[3], {
        duration: 1.2,
        x: ho.x - hi.getBoundingClientRect().x - 50,
        y: ho.y - hi.getBoundingClientRect().y - 135,
      });
    });
  });
}

function page3videoAnimation() {
  const video = document.querySelector("#page3 video");
  const divbtn = document.querySelector(".page3-center");
  divbtn.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.8) scaleY(0)",
      opacity: 0,
    });
  });
}

function page4videoAnimation() {
  const section = document.querySelectorAll(".sec1-right");
  section.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      // elem.childNodes[3].pause();
      elem.childNodes[3].load();
    });
  });
}

function page6Animations() {
  gsap.from(".btm6-parts h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".btm6-parts",
      scroller: "#main",
      // markers:true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}

locomotiveAnimation();
loadingAnimation();
navAnimation();
page2Animation();
page3videoAnimation();
page4videoAnimation();
page6Animations();
