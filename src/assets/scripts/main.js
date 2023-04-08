//--------------------------
// Import dependencies from node_modules
//--------------------------

// import { AOS } from "aos";
// import * as AOS from 'aos/dist/aos.js';
import AOS from 'aos';

//--------------------------
// Write any other JavaScript below
//--------------------------

+( function() {
  window.addEventListener('load', ()=>{
    AOS.init({
      once: true,
      duration: 1500
    });
  });
} )();
