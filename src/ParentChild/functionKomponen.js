import React, {useState} from 'react'
import ChildComponentFunction from './functionKomponenChild'


const ParentComponentFunction = () => {
    const[messeage,setAnswer] = useState("")
    const setQuiz = (Quiz) => {
        if(Quiz === 'react') {
            setAnswer(`your asnwer ${Quiz} is true`)
        }else {
            setAnswer(`your answer ${Quiz} is false`)
        }
    }

    return (
        <div>
            <ChildComponentFunction
            yourAnswer = {messeage}
            onQuiz = {setQuiz} 
            />
        </div>
    )
}

export default ParentComponentFunction