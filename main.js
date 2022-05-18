function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    background("white")
}
array_1=['pen','paper','book','bottle','laptop','mouse','fan','table','lolipop','basketball','football'];
random_no = Math.floor((Math.random()*array_1.length)+1);
console.log(array_1[random_no]);
sketch= array_1[random_no];
document.getElementById("result").innerHTML="Sketch to be drawn: "+sketch;

time_counter= 0;
score= 0;
timer_check="";
drawn_sketch="";
answer_holder="";

function draw(){

}
function check_sketch(){
    
}