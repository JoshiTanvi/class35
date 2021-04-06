var ball;

var mydb, mypos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    mydb = firebase.database();
   // console.log(db);

    mypos = mydb.ref('ball/position');
    console.log(mypos);

    mypos.on('value', readPos);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPos(data){
    console.log(data.val())
    ball.x = data.val().x;
    ball.y = data.val().y;

}
function writePos(x, y){

    mypos.set({
        'x': ball.x + x,
        'y': ball.y + y 
    })

}