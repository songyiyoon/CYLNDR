
import {Application} from 'https://www.unpkg.com/@splinetool/runtime';
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
.load('https://prod.spline.design/Oi5pPbsT3H7OYL2X/scene.splinecode')
.then(()=>{
  gsap.registerPlugin(ScrollTrigger)
  let rotate=app.findObjectByName("imgrtt");
  console.log(rotate)
  gsap.set(rotate.position,{x:0,y:0,z:0})
  gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        start:"top top",
        end:"+=500px ",
        scrub:1,
       // markers:true,
        pin:true,
        duration:10 ,
        pinSpacing:false
    }
   })
      .to(rotate.rotation,{y:Math.PI*2,x:0},0)
      .to(rotate.position,{x:0,y:0},0)
      
      gsap.to(".section2 h2",{
        scrollTrigger:{
          trigger:".section2 h2 span",
          start:"top top",
          end:"+=1000px",
          scrub:1,
      //     markers:true,
          },
          opacity:1,
          x:0
      })
      
      
})