import React, {useRef} from 'react'
import './TestForm.css'
import {ButtonB, ButtonA} from './Button'


const TestForm = props =>{

    const age = useRef();
    function submitHandler(e){
        e.preventDefault();

        if(age.current.value){
            props.startTest(age.current.value)
        }else{
            return;
        }
    }

    return <React.Fragment>
        <div className='test-startup'>
        <div className='test-header'>
            IQ Test
            </div>
            <div className='test-quote'>
                Examine your IQ with our professtional IQ test!
            </div>
            <div className='test-info'>
            <p>Note: you well have 10 minutes to answer these 25 questions and in the end you well see your results.</p>
            Please Enter your age in the field bellow:
            </div>
            <div className='test-form'>
                <form onSubmit={submitHandler}>
                    <label htmlFor='age'>Age(Years):</label><input ref={age} type='number' placeholder='Ex: 18' min='8' required /> 
                    <ButtonA className='start-btn'>Start</ButtonA>
                </form>
            </div>
            </div>
    </React.Fragment>
}

export default TestForm;