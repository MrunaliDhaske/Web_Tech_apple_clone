/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function sdf(){
    pi=document.getElementById('scrollimg').src
    if (pi=='http://127.0.0.1:5500/static/c2i1.png'){
        document.getElementById('scrollimg').src='./static/c2i2.png'
    }
    else if (pi=='http://127.0.0.1:5500/static/c2i2.png'){
        document.getElementById('scrollimg').src='./static/c2i3.png'
    }
    else if (pi=='http://127.0.0.1:5500/static/c2i3.png'){
        document.getElementById('scrollimg').src='./static/c2i1.png'
    }
}