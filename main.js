function preaload()
{

}

function setup()
{
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();

}

function draw()
{
    image(video,100,100,200,200);
    fill(255,0,0)
rect(30,20,55,55)
rect(300,20,55,55)
rect(300,310,55,55)
rect(30,310,55,55)

fill(0,255,0)
rect(100,310,25,55)
rect(140,310,25,55)
rect(180,310,25,55)
rect(220,310,25,55)
rect(260,310,25,55)
}

function take_snapshot()
{
save('creep.jpeg')
}