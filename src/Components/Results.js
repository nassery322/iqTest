import React from 'react'
import './Results.css'
import { ButtonB, ButtonA } from './Button'

const Results = props =>{

    function reTakeHandler(){
        props.onRetake(true)
    }
    function checkHandler(){
        props.onCheck(true)
    }
    return <React.Fragment>
            <div className='results'>
                <div className='results-header'>Your IQ is:</div>
                <div className='score'>{props.score * 8}</div>
                <div className='results-question'> You have got {props.score} out of 25 questions right!</div>
                <div className='recheck'><ButtonA className='check-btn' onClick={checkHandler}>Check your answeres</ButtonA></div>
                <div className='retake'><ButtonB onClick={reTakeHandler}>Retake test</ButtonB></div>
            </div>
            </React.Fragment>
}

export default Results;







