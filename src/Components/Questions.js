import React, { useState } from 'react'


const Questions = props => {
    const [answere, setAnswere] = useState('');
    function resetOptions() {
        const options = document.querySelectorAll('.a');
        options.forEach(option => option.classList.remove('selected'));
    }
    function choiceHandler(e) {
        if (!props.onCheck) {
            resetOptions();
            setAnswere(e.target.innerHTML.slice(3));
            e.target.classList.add('selected');
        }
    }
    props.selectOption(answere)
    const selectedOption = props.answeres.selectedOption;
    const correctOption = props.answeres.correctOption;

    return <React.Fragment>
        {!props.onCheck ? <>
            <div className='question-section'>{`${props.questionCount + 1}. ${props.question}`}</div>
            <div className='options-section'>
                <div onClick={choiceHandler} className={`option1 a  ${selectedOption === props.option1 ? 'selected' : ''}`} >A. {props.option1}</div>
                <div onClick={choiceHandler} className={`option2 a  ${selectedOption === props.option2 ? 'selected' : ''}`}>B. {props.option2}</div>
                <div onClick={choiceHandler} className={`option3 a  ${selectedOption === props.option3 ? 'selected' : ''}`}>C. {props.option3}</div>
                <div onClick={choiceHandler} className={`option4 a  ${selectedOption === props.option4 ? 'selected' : ''}`}>D. {props.option4}</div>
            </div>
        </> : <>
            <div className='question-section'>{props.question}</div>
            <div className='options-section'>
                <div onClick={choiceHandler} className={`option1 a  ${selectedOption === props.option1 ? selectedOption === correctOption ? 'right' : 'wrong' : correctOption === props.option1 ? 'right' : ''}`} >A. {props.option1}</div>
                <div onClick={choiceHandler} className={`option2 a  ${selectedOption === props.option2 ? selectedOption === correctOption ? 'right' : 'wrong' : correctOption === props.option2 ? 'right' : ''}`}>B. {props.option2}</div>
                <div onClick={choiceHandler} className={`option3 a  ${selectedOption === props.option3 ? selectedOption === correctOption ? 'right' : 'wrong' : correctOption === props.option3 ? 'right' : ''}`}>C. {props.option3}</div>
                <div onClick={choiceHandler} className={`option4 a  ${selectedOption === props.option4 ? selectedOption === correctOption ? 'right' : 'wrong' : correctOption === props.option4 ? 'right' : ''}`}>D. {props.option4}</div>
            </div>
        </>}
    </React.Fragment>
}

export default Questions;