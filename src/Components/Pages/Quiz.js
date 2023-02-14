import React from 'react';
import { useReducer, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  {useQuestions} from '../../my-hooks/useQuestions';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';
import _ from 'lodash';


const initialState = null;
const reducer = (state, action) =>{
  switch(action.type){
    case "questions":
      action.value.forEach((question)=>{
        question.options.forEach((option)=>{
        option.checked = false;
        })
      });
      return action.value;

      case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked = action.value;

      return questions;

      default: 
      return state;
  }
}

const Quiz = () => {
  const {id} = useParams();
  const {loading, error, questions} = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    dispatch({
      type:"questions",
      value: questions,
    })
  }, [questions]);

 function handleAnswerChange(e, index){
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
    return (
      <>
      {loading && <div>Loading...</div>}
      {error && <div>there was an error</div>}
      {!loading && !error && qna && qna.length>0 && (
        <>
        <h1>{qna[currentQuestion].title}</h1>
        <h4>Question can have multiple answers</h4>
        <Answers options={qna[currentQuestion].options} handleChange={handleAnswerChange} />
        <ProgressBar />
        <MiniPlayer />
        </>
      )}
       
      </>
    );
};

export default Quiz;