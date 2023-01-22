import React, {useState, useEffect} from 'react'
import './TestContainer.css'
import { ButtonA, ButtonB } from './Button'
import Questions from './Questions';
import Results from './Results';
import { iqTestQuestions } from './IqTestQuestions';


const TestContainer = props =>{

    const [questionNum, setQuestionNum] = useState(0);
    const [finish, setFinish] = useState(false);
    const [testFinished, setTestFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [timeState, setTimeState] = useState('');
    const [testCheck, setTestCheck] = useState(false)

    
   const [filteredQuestions, setFilteredQuestions] = useState(iqTestQuestions.sort(() => Math.random() - 0.5).filter(question => question.age <= props.age)
   ) ;
    const [mainQuestions, setMainQuestions] = useState(filteredQuestions.slice(0, 25));
    const [answeres, setAnsweres] = useState(mainQuestions.map( item =>{return {correctOption: item.correctOption, selectedOption: ''}} ));
function nextHandler(event){

    if(questionNum < mainQuestions.length - 1){
        setQuestionNum( prev => prev + 1)
        setFinish(false) 
    }
    if(questionNum === mainQuestions.length - 2){
        setFinish(true)
    }
    else{
        return; 

    }

    }

    function previousHandler(){
        if(questionNum >= 1){
            setQuestionNum(prev => prev - 1)
            setFinish(false)
        }else{
            return;
        }
    }

    const questions = [mainQuestions[questionNum]]

    function selectHandler (option){
    if(option){
     answeres[questionNum].selectedOption = option
    }else{
        return;
    }
    }
    let timer;
    useEffect(function timerStart(){
    
        let time = 600;
        timer = setInterval(() => {
          time--;
          if (time < 0) time = 0;
          const minutes = Math.floor(time / 60);
          const seconds = time % 60;
          const timeState = document.getElementById('time');
          const progressBar = document.getElementById('progress-bar');
          if(timeState){
            timeState.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
          progressBar.style.width = `${(time / 600) * 100}%`;
          }

          if (time === 0) {
            clearInterval(timer);
            finishHandler();
          }
        }, 1000);
        return () => clearInterval(timer);
      }, [testFinished]);
      function finishHandler(){
        setTestFinished(true);
        setTestCheck(false);
        let points = 0;
       for(let i = 0; i < answeres.length; i++){
        if(answeres[i].correctOption === answeres[i].selectedOption){
            points = points + 1
        }
        }
       setScore(points)
    }
function reTakeHandler(){
  setQuestionNum(0);
  setFinish(false);
  setTestFinished(false);
  setTestCheck(false)
  setScore(0);
  setTimeState('');
  setFilteredQuestions(iqTestQuestions.sort(() => Math.random() - 0.5).filter(question => question.age <= props.age));
  setAnsweres(mainQuestions.map( item =>{return {correctOption: item.correctOption, selectedOption: ''}} ));
  setMainQuestions(filteredQuestions.slice(0, 25))

}
function checkHandler(e){
   setQuestionNum(0);
   setFinish(false);
   setTestFinished(true);
    setTestCheck(e);   
}
    return <React.Fragment>
        <div className='test-container'>
            {!testFinished || testCheck ? <React.Fragment>

           { !testCheck && <div className='timer-section'>
           <div className='progress'><div id="progress-bar"></div></div> 
            <div id="time"></div>
            </div>}
        {questions.map( question => <Questions 
        key={question.id}
        questionCount={questionNum}
        question={question.question}
        option1={question.option1}
        option2={question.option2} 
        option3={question.option3} 
        option4={question.option4}  
        correctOption={question.correctOption} 
        selectOption={selectHandler}
        answeres={answeres[questionNum]}
        onCheck={testCheck}
        />)}
            <div className='control-section'>
                <ButtonA className='prev-btn' onClick={previousHandler}>Previous</ButtonA>
               {!finish? <ButtonB className='next-btn' onClick={nextHandler}>Next</ButtonB> : <ButtonB className='next-btn' onClick={finishHandler}>Finish</ButtonB>}
            </div>
            </React.Fragment>: <Results score={score} onRetake={reTakeHandler} onCheck={checkHandler}/> }
        </div>
    </React.Fragment>
}

export default TestContainer;