//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000;
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var diffcultLevel;
var lifeRemain;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    clueHoldTime = 1000;

    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("levelLable").classList.add("hidden");
    document.getElementById("level").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("gameContent").classList.remove("hidden");
    
    // Set variables based on level
    var e = document.getElementById("level");
    diffcultLevel = e.value;
    var patternAmount = 2 * diffcultLevel + 2;
    console.log("DiffcultLevel: " + diffcultLevel + " Pattern Amount: " + patternAmount);
    for (let i = 0; i < patternAmount; i++){
      pattern.push(Math.floor(Math.random() * 4) + 1);
    }
    
    lifeRemain = 5 - diffcultLevel;
    setGameContent();
    
    
    console.log(pattern)
  
    playClueSequence();
}

function setGameContent(){
  var label = document.getElementById("gameContent")
  label.innerHTML = "Diffculuty Level: " + diffcultLevel + " | Life: " + lifeRemain;
}

function stopGame(){
    //reset game variables
    gamePlaying = false;
    pattern = [];
    document.getElementById("gameContent").classList.add("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("levelLable").classList.remove("hidden");
    document.getElementById("level").classList.remove("hidden");
    
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 10 * diffcultLevel * progress;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    lifeRemain--;
    if (lifeRemain < 1){
      loseGame();
    }else{
      setGameContent();
      guessCounter = 0;
    }
  }
}    


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
