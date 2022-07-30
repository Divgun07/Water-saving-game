var play,about,how,next,home
 var gameState="wait"

function preload(){


}


function setup(){
createCanvas(windowWidth,windowHeight)

play= createImg("images/play.png")
play.position(20,20)
play.size(100,100)

/*about= createButton("about")
about.position(20,45)

how= createButton("how")
how.position(20,70)

next= createButton("next")
next.position(20,95)*/

home=createImg("images/home.png")
home.position(20,120)
home.size(100,100)
home.hide()
}

function draw(){

    if(gameState==="wait"){
background("cyan")
home.hide()}

//play button functioning

if(play.mousePressed(()=>{
    gameState="playstate"

}))
    


if(gameState==="playstate"){
    background(0)
    home.show()
    play.hide()
}





}