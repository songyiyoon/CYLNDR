gsap.registerPlugin(ScrollTrigger)
function lenis(){
    const lenis = new Lenis()
    
    lenis.on('scroll', (e) => {
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
}
lenis()
gsap.fromTo("#header .textBox .logo",{opacity:0,y:"20%"},{opacity:1,duration:1,y:0},0.5)

/* 시간 */
setInterval(()=>{
  let today=new Date()
  let hh=addZero(today.getHours())
  let mm=addZero(today.getMinutes())
  let ss=addZero(today.getSeconds())

  document.querySelector('.time_box #hours').innerHTML=hh;
  document.querySelector('.time_box #min').innerHTML=mm;
  document.querySelector('.time_box #sec').innerHTML=ss;

/* ==============section4 sub clock */
  document.querySelector('.sec4_sub-clc .clc .HH').innerHTML=hh;
  document.querySelector('.sec4_sub-clc .clc .MM').innerHTML=mm;
  document.querySelector('.sec4_sub-clc .clc .SS').innerHTML=ss;

  function addZero(num){
      return(num<10?"0"+num:num)
  }
},1000)


//글자 추출
let clutter = ""
let line1 = document.querySelector('#line .line1').textContent.split("")
line1.forEach(function (dets) {
  clutter += `<span>${dets}</span>`
  document.querySelector("#line .line1").innerHTML = clutter
})
let b1=""
let line2 = document.querySelector("#line .line2").textContent.split("")
line2.forEach(function(dets){
  b1 += `<span>${dets}</span>`
  document.querySelector("#line .line2").innerHTML = b1
})
let b2=""
let line3 = document.querySelector("#line .line3").textContent.split("")
line3.forEach(function(dets){
  b2 += `<span>${dets}</span>`
  document.querySelector("#line .line3").innerHTML = b2
})

gsap.timeline({ 
  scrollTrigger:{
  trigger:"#section1",
    start:"-=50% +=50%",
    end:"+=100%",
    scrub:1,
    duration:1,
  //  markers: true,  
}})
  .to("#line .line1>span",{color:"#fff",scrub:1,stagger:0.02})
  .to("#line .line2>span",{color:"#06D001",scrub:1,stagger:0.02})
  .to("#line .line3>span",{color:"#fff",scrub:1,stagger:0.02})


gsap.to(".section1 .sub_t span",{
  scrollTrigger:{
    trigger:".sub_t",
    start:"top +=50%",
    end:"bottom bottom",
    scrub:1,
    duration:2,
//  markers:true
  },
  opacity:1,
  y:"0%",

},2)



/* section3 */
gsap.timeline({
  scrollTrigger:{
  trigger:"#section3 #circle div ",
  start:"top top",
  end:"+=300% +=1000px",
  scrub:1,
  //markers:true,
  pin:"#section3" ,
  pinSpacing:false

}
})
  .fromTo("#circle .c1",{x:0},{x:"60%",duration:1,scrub:1,
    ease: "power2.out"} ,"-=1"  
  )
  .fromTo("#circle .c1 .text",{opacity:0},{opacity:1,scrub:1} ,"-=1"  
  )
  .fromTo("#circle .c3",{x:0},{x:"-60%",duration:1,scrub:1,
    ease: "power2.out"}  ,"-=1"  
  )
  .fromTo("#circle .c3 .text",{opacity:0},{opacity:1,scrub:1} ,"-=1"  

  ).fromTo("#circle .c2",{x:0},{x:0} ,"-=1.3")
 
  .fromTo("#circle .c2 .text",{opacity:0},{opacity:1,scrub:1} ,"-=1"  
  )
  .fromTo("#circle .c3",{x:"-60%"},
    {x:"-20%",y:"10%", scale:"0.8",duration:1,ease: "power2.out",scrub:1},"1" 
  ) 
  .fromTo("#circle .c1",{x:"60%"},
    {x:"20%",y:"10%", scale:"0.8",duration:1,ease: "power2.out",scrub:1},"1" 
  )
  .fromTo("#circle .c2",{x:"0%",y:0},
    {x:"0%",y:"-10%", scale:"0.8",duration:1,ease: "power2.out",scrub:1},"1" 
  )
  .fromTo("#circle .c3",{x:"-20%",y:"10%", scale:"0.8"},
    {x:0,y:0, scale:1,duration:1,ease: "power2.out",scrub:1},"2" 
  ) 
  .fromTo("#circle .c3 .text",{opacity:1},
    {opacity:0,ease: "power2.out",scrub:1},"2" 
  ) 
  .fromTo("#circle .c1",{x:"20%",y:"10%", scale:"0.8"},
    {x:0,y:0, scale:1,duration:1,ease: "power2.out",scrub:1},"2" 
  ) 
  .fromTo("#circle .c1 .text",{opacity:1},
    {opacity:0,ease: "power2.out",scrub:1},"2" 
  ) 
  .fromTo("#circle .c2",{x:"0%",y:"-10%", scale:"0.8"},
    {x:0,y:0, scale:1,duration:1,ease: "power2.out",scrub:1},"2" 
  )
  .fromTo("#circle .c2 .text",{opacity:1},
    {opacity:0,ease: "power2.out",scrub:1},"2" 
  ) 
  .to("#circle h2",{opacity:1,y:"0",scrub:1})

//section4 clock

setInterval(()=>{
  let now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
 

let degH= h * (360 /12) + m * (360 / 12 / 60);
let degM= m * (360 / 60);
let degS= s * (360 / 60);

let elH=document.querySelector("#section4 .clock .lineHour")
let elM=document.querySelector("#section4 .clock .lineMin")
let elS=document.querySelector("#section4 .clock .lineSec")

elH.style.transform= `rotate(${degH}deg)`;
elM.style.transform=`rotate(${degM}deg)`;
elS.style.transform=`rotate(${degS}deg)`;


let dayList=['sun','mon','tues','wed','thu','fri','sat'];
 let yy=zero(now.getFullYear())
  let Mm=zero(now.getMonth()+1)
  let Dd=zero(now.getDay())

document.querySelector(".sec4_sub-clc .YY").innerHTML=yy
document.querySelector(".sec4_sub-clc .Mm").innerHTML=Mm
document.querySelector(".sec4_sub-clc .Dd").innerHTML=Dd

function zero(num){
return(num<10?"0"+num:num)
}

},50)


//section5 slide img

let target = 0;
let current = 0;
let ease = 0.075;

const slider = document.querySelector(".slider");
const wheel = document.querySelector(".slider .wheel");
const card = document.querySelectorAll(".wheel .card");

let maxScroll = wheel.offsetWidth - window.innerWidth;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function updateScaleAndPosition() {
    card.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const centerPosition = (rect.left + rect.right) / 2;
        const distanceFromCenter = centerPosition - window.innerWidth / 2;

        let scale, offsetX;
        if (distanceFromCenter > 0) {
            scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
            offsetX = (scale - 1) * 300;
        } else {
            scale = Math.max(0.5, 1 - Math.abs(distanceFromCenter) / window.innerWidth);
            offsetX = 0;
        }
        gsap.set(slide, { scale: scale, x: offsetX });
    });
}

function update() {
    current = lerp(current, target, ease);
    gsap.set(".wheel", {
        x: -current,
    });

    updateScaleAndPosition();
    requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
    maxScroll = wheel.offsetWidth - window.innerWidth;
});


ScrollTrigger.create({
    trigger: "#section5",
    start: "top top",
    end: "+=150%",
    scrub: true,
    pin:true,
    onUpdate: (self) => {
        target = self.progress * 2000;
        update();
    }
});

update();

//section6 ball
gsap.timeline({
  scrollTrigger:{
    trigger:".s6_wrap",
    start:"top 60%",
   // markers:true
  }
})
.fromTo(".ball",{y:0},{y:500,duration:1,ease:"bounce.out"},)
.fromTo(".ball",{scale:1},{scaleX:28, scaleY:10,delay:0.5},0)
.to("#section7", { backgroundColor: "#2020c9",delay:0.5 },0)
.fromTo(".s6_tit h2",{x:"500%"},{x:"0"},0)


/* section7 */
gsap.timeline({
  scrollTrigger:{
    trigger:".s7_tb",
    start: "-=20% +=50%",
    end:"+=150%",
    scrub:1,
//
  },
  backgroundColor:"#000"
  
})
.to(".section7",{backgroundColor:"#000"})
.to(".t1,.t3,.t5",{
  x:"-50%",
duration:1 
})
.to(".t2,.t4,.t6",{
  x:"50%",duration:1
},"-=1")

/* section8 */

let fic=document.querySelectorAll(".mb_fic img")

gsap.timeline({
  scrollTrigger:{
    trigger:".section8",
    start:"top top",
    end:"+=150%",
    scrub:1,
    pin:true,
    //markers:true
  }
})
.add("start")
.set(Array.from(fic).slice(1),{autoAlpha:0})
.to(fic,{autoAlpha:2,duration:1,stagger:2})

