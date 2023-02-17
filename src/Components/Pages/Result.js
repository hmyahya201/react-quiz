import React from 'react';
import Summary from '../Summary';
import Analysis from '../Analysis';
import { useLocation, useParams } from 'react-router-dom';
import { useAnswers } from '../../my-hooks/useAnswers';
import _ from "lodash";


const Result = () => {
    const {id} = useParams();
    const location = useLocation();
    const {state} = location;
    const {qna} = state;
    const {loading, error, answers} = useAnswers(id);

    function caculate(){
        let score = 0;
        answers.forEach((question, index)=>{
            let correctIndexes = [], checkedIndexes = [];

            question.options.forEach((option, index2)=>{
                if (option.correct) correctIndexes.push(index2);
                if(qna[index].options[index2].checked){
                    checkedIndexes.push(index2);
                    option.checked = true;
                } 
            });

            if(_.isEqual(correctIndexes, checkedIndexes)){
                score = score + 5;
            };
        })
        return score;
    }
    const userScore = caculate();
    return (
        <>
        {loading && <div>lodaing..</div>}
        {error && <div>There was an error</div>}
        {answers && answers.length> 0 && (
            <>
            <Summary score= {userScore} noq={answers.length}/>
            <Analysis answers = {answers} />
            </>
        )}
        </>
    );
};

export default Result;