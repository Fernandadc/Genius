var gameColours= ["green", "red", "yellow", "blue"];
var levelColours = [];
var playerColours = [];
var level = 1;

$(document).keydown(function(Event){
    if (Event.key === "s"){
        setupLevel();
    }
})

function setupLevel(){

    $("h1").html("Level " + level);
    let newSrcWin = $('#gameimg').attr('src').replace("imgs/play.gif", "imgs/happy.gif");
        $('#gameimg').attr('src', newSrcWin);
    level++;
    var randomizer = Math.floor(gameColours.length*Math.random());
    levelColours.push(gameColours[randomizer]);
    $("#" + gameColours[randomizer]).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(gameColours[randomizer]);
    playerColours = [];
}

$(".btn").click(function(){
    var chosenColour = $(this).attr("id");
    playerColours.push(chosenColour);
    playSound(chosenColour);
    let curColour = playerColours.length - 1;

    animatePress(chosenColour);
    checkResponse(curColour);
});

function checkResponse(currentLevel){

    if(levelColours[currentLevel] === playerColours[currentLevel]){
        if(levelColours.length === playerColours.length){
            setTimeout(function () {
                setupLevel();
              }, 1000);
    }}
    else{
        $("h1").html("GAME OVER \n Reload the page");
        let newSrcLose = $('#gameimg').attr('src').replace("imgs/happy.gif", "imgs/sad.gif");
        $('#gameimg').attr('src', newSrcLose);
        var audio = new Audio("SoundEffects/Loser.mp3"); 
        audio.play();
    }
}

function animatePress(playerCurColor) {
    $("#" + playerCurColor).addClass("pressed");
    setTimeout(function () {
      $("#" + playerCurColor).removeClass("pressed");
    }, 100);
  }

  function playSound(name) {
    var audio = new Audio("SoundEffects/" + name + ".mp3");
    audio.play();
  }