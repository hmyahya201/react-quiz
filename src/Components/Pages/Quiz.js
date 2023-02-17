import React from 'react';
import { useReducer, useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import  {useQuestions} from '../../my-hooks/useQuestions';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';
import _ from 'lodash';
import {useAuth} from '../../contexts/AuthContext';
import { getDatabase, ref, set } from 'firebase/database';

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
  const {currentUser} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch({
      type:"questions",
      value: questions,
    })
  }, [questions]);

 const handleAnswerChange = (e, index)=>{
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  //nexeQuestion function
  const nextQuestion = ()=> {
    if(currentQuestion + 1< questions.length){
      setCurrentQuestion((prevCurrent)=> prevCurrent + 1)
    }
  }
  
  //prevQuestion function
  const prevQuestions = ()=>{
    if(currentQuestion >= 1 && currentQuestion <= questions.length){
      setCurrentQuestion((prevCurrent)=> prevCurrent - 1)
    }
  }

  //progressBar function
  const percentage = questions.length> 0 ? ((currentQuestion + 1)/questions.length)*100: 0;

  //submit function
  async function submit(){
    const {uid} = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna
    })
    navigate(`/result/${id}`,{state:{qna}});
  }
    return (
      <>
      {loading && <div>Loading...</div>}
      {error && <div>there was an error</div>}
      {!loading && !error && qna && qna.length>0 && (
        <>
        <h1>{qna[currentQuestion].title}</h1>
        <h4>Question can have multiple answers</h4>
        <Answers
         input
         options={qna[currentQuestion].options}
          handleChange={handleAnswerChange} />
        <ProgressBar
         next={nextQuestion} 
         prev={prevQuestions}
         submit={submit}
         progress={percentage}/>
        <MiniPlayer id={id}/>
        </>
      )}
       
      </>
    );
};

export default Quiz;