let STORE = [
    { 
      qnumber:"Question 1",
      question: "What are the names of the street tuffs who steal the armoir from Kramer?",
      options: ["Albert/Bruce", "Cedric/Bob", "Seth/John", "Jose/Carl"],
      answer:"Cedric/Bob"
    },
    {
    qnumber:"Question 2",
    question: "What does Elaine try to make into her song?",
    options: ["Witchy-Woman", "Desperado", "Blackbird", "Landslide"],
    answer: "Witchy-Woman"
    },
  {
     qnumber: "Question 3",
     question:"When did Seinfelds last episode air?",
     options: ["1995", "1996", "1997", "1998"],
     answer: "1998"
    
    },
    {
     qnumber: "Question 4",
     question: "Elaines rock-climbing boyfriend Tony dislikes what kind of sandwiches?",
     options: ["Turkey", "BLT", "Peanut-butter", "PBJ"],
     answer: "Peanut-butter"
    },
    {
     qnumber:"Question 5",
     question: "What was the name of Kramers mother",
     options: ["Estelle", "Laura", "Babs", "Helen"],
     answer:"Babs"
    },
    {
     qnumber: "Question 6",
     question: "Where did Jerry go to college?",
     options:["Bronx", "Brooklyn", "Queens", "Manhattan"],
     answer:"Queens"
   
    },
    {
     qnumber: "Question 7",
     question: "Who took the nickname of Murphy?",
     options: ["Jerry", "George", "Kramer", "Elaine"],
     answer:"Jerry"
    
    },
    {
     qnumber: "Question 8",
     question: "What offended their boss by wearing an Orioles cap to a Yankees game?",
     options: ["George", "Elaine", "Jerry", "Newman"],
     answer: "Elaine"
  },
    {
     qnumber: "Question 9",
     question: "How many sponges come in a case?",
     options: ["30", "4p", "50", "60"],
     answer: "60"
    
    },
    {
     qnumber: "Question 10",
     question: "What was Jerry's apartment address?",
     options: ["5A", "2B", "6E", "4C"],
     answer: "5A"
  }
  ]
  
  let points=0;
  let qnum=0;
  
  function startGame(){
    $("#qanda").hide();
    $(".startGame").on("click", function(){
      $("header").hide();
      $("#qanda").show();
      loadQuestion();
    });
  }
  
    function loadQuestion(){
      if(qnum<STORE.length) {
        $("#qanda").html(createQuestion());
  }
      else{
        $("#qanda").html(showResults());
  }
  }
  
  function createQuestion(){
    return `
    <div id="page">
      <div class-"row">
      <div class="col-12">
        <div class="questionsheader">
         <h1>Seinfeld Quiz</h1>
        </div>
      </div>
    <main class="mainquestion" role="main">
      <div class="row">
        <div class="col-12">
          <h2 class = "questionnum">Question ${qnum+1} out of ${STORE.length}</h2>
          <h2 class="status">You have scored ${points} out of a possible ${(qnum*10)} points</h2>
          <h2 class = "q">${STORE[qnum].question}</h2>
          <form class="questionnum">
            <fieldset>
            <div class="block"><label for="choice1"></label><input type="radio" checked name="option" value=${STORE[qnum].options[0]} id="choice1" required>${STORE[qnum].options[0]}</div>
            <div class="block"><label for="choice2"></label><input type="radio"  name="option" value=${STORE[qnum].options[1]} id="choice2" required>${STORE[qnum].options[1]}</div>
            <div class="block"><label for="choice3"></label><input type="radio"  name="option" value=${STORE[qnum].options[2]} id="choice3" required>${STORE[qnum].options[2]}</div>
            <div class="block"><label for="choice4"></label><input type="radio"  name="option" value=${STORE[qnum].options[3]} id="choice4" required>${STORE[qnum].options[3]}</div>
            <input type="submit" value="Submit Answer" id="enteranswer">
            </fieldset>
          </form>
        </div>
      </div>
    </main>
      <section class="questionresult" role="contentinfo"></div>
      </div>
      </div>
      
      
     
    `;
    }
    
    function checkAnswer(){
     $("#qanda").on('click', '#enteranswer', function(event){
        event.preventDefault();
        $(".mainquestion").hide();
        let userAnswer=$('input[name=option]:checked').val();
        let rightAnswer=STORE[qnum].answer;
  
        if(userAnswer===rightAnswer) {
         correctAnswer();
         $(this).attr('disabled',true);
         }
       else {
        incorrectAnswer();
        $(this).attr('disabled',true);
  
  }
  
  }
  );
  }
   
  
  function correctAnswer(){
    points+=10;
    $(".questionresult").html(
    
      `
              <div class="row">
              <div class="col-3">
                <p class="hidden">a</p>
              </div>
              <div class="col-6">
                <section role="banner" class="rightanswer">
                  <h3 class="rightresult">You are right!<h3>
                  <h2 class = "qnext">You just finished question ${qnum+1} out of ${STORE.length}</h2>
                  <button id="nextquestion">Contunue</button>
                  <h3 class="resultpoints">You have scored ${points} out of a possible ${(qnum+1)*10} points</h3>
                </section>
          
              <div class-"frame">
               <img src="https://vignette.wikia.nocookie.net/seinfeld/images/f/fd/The_race.jpeg/revision/latest/scale-to-width-down/249?cb=20120908035008" alt="Jerry winning a race" class= "resultimg" role="img">
            </div>
            </div>
             </div>
         `
        );
    }
   
  function incorrectAnswer(){
     $(".questionresult").html(
        `
        <div class="row">
          <div class="col-3">
           <p class="hidden">a</p>
         </div>
          <div class="col-6">
            <section role="region" class="wronganswer">
          
             <h2 class="result">No soup for you! The answer was ${STORE[qnum].answer}</h2>
             <h2 class = "qnext">You just finished question ${qnum+1} out of ${STORE.length}</h2>
             <button id="nextquestion">Continue</button>
             <h2 class="resultpoints">You have scored ${points} out of a possible ${(qnum+1)*10} points</h2>
        
          
            </section role="region">
            <img src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/06/15/104531669-soupnazi-1.530x298.jpg?v=1497538075" alt="Soup Nazi" class="resultimg" role="img">
          </div>
        </div>
        `
        )
    
    
  }
  
  function nextQuestion(){
      $("#qanda").on('click', "#nextquestion", function(event){
      
      event.stopPropagation();
      event.preventDefault();
      qnum++;
      loadQuestion();
  
    })
  }
  
  function showResults(){
      return `
      <div class="row">
        <div class="col-12">
          <h2>Thanks!</h2>
          <h2 class="score">You scored  ${points} out of a possible ${10*qnum} points</h2>
          <button class="restart">Restart</button>
        </div>
      </div>
      <img src="http://cdn.newsapi.com.au/image/v1/f3112e2e3f6be3b4e9d617777a116157" class="bow" alt="Seinfeld Cast Final Bow" role="img">
      `;
    }
  
  function restart(){
      $("#qanda").on("click", ".restart", function(event){
        event.preventDefault();
        window.location.reload(true)
       }); 
    }
    
  function runQuiz() {
      startGame();
      loadQuestion();
      checkAnswer();
      nextQuestion();
      restart();
    }
  
  $(runQuiz);