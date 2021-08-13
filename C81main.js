 canvas=document.getElementById("myCanvas");

 pen=canvas.getContext("2d");
 color="violet";
 last_mouse_x=""; 
 last_mouse_y="";
 mouseEvent="";
 line_width=3;

 
 canvas.addEventListener("mousedown",J_mousedown);

 function J_mousedown(e){
      mouseEvent="mousedown";
 }

 canvas.addEventListener("mouseup",J_mouseup);

 function J_mouseup(e){
       mouseEvent="mouseup";
 }

canvas.addEventListener("mouseleave",J_mouseleave);

function J_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",N_mousemove);

function N_mousemove(e){
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        pen.beginPath();
        pen.strokeStyle=color;                                  
        pen.lineWidth=line_width;
        pen.arc(current_mouse_x,current_mouse_y,40,0,2*Math.PI)
        console.log("current position of x and y coordinates are");
        console.log("x="+current_mouse_x+ "y="+current_mouse_y);
        pen.stroke();
    }


}

 function erase(){
     pen.clearRect(0,0,canvas.width,canvas.height);

 }