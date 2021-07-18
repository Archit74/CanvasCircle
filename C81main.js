canvas=document.getElementById("canvas1");
ctx=canvas.getContext('2d');
colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,20,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
 colour=document.getElementById("input1").value;
 mouse_x = e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
  circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,20,0,2*Math.PI);
    ctx.stroke();
}




