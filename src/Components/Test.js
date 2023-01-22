import React,{useState} from 'react' 
import './Test.css'
import {ButtonB, ButtonA} from './Button'
import TestForm from './TestForm';
import TestContainer from './TestContainer';
import Results from './Results';


const Test = props =>{
    const [testStart, setTestStart] = useState(false);
    const [age, setAge] = useState(null)
    
    
    function startTestHandler(e){
        setAge(e)
        setTestStart(true)
        }

    return <React.Fragment>
        <div className='test'>
           {!testStart && <TestForm startTest={startTestHandler} />}
           {testStart && <TestContainer age={age} onRetakeTest={startTestHandler} />} 
        
        </div>
    </React.Fragment>
}

export default Test;