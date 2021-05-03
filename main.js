function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);   
    video.hide();
}
function draw(){
    image(video,60,60,390,300);
    fill(0,100,0);
    stroke(0,60,0);
    rect(40,40,420,20);  
    
    fill(250,0,0);
    stroke(250,0,0);
    circle(50,50,80);    
    circle(50,50,80);   
    circle(100,100,80); 
}
function take_snap(){
    save("Natasha's Clicks.png");        
}