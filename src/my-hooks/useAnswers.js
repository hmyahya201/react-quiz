import {useEffect, useState } from "react";
import {getDatabase, ref, query, get, orderByKey} from 'firebase/database'

export function useAnswers(videoID){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [answers, setAnswers] = useState([]);
    
    useEffect(()=>{

        async function fetchAnswers(){
            //database related work
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + videoID + "/questions");
            
            const answerQuery = query(answerRef, orderByKey());
            

            try{
                setError(false);
                setLoading(true);
                //request firebase database
                const snapshot = await get(answerQuery);
                setLoading(false);
                if (snapshot.exists()) {
                setAnswers((prevAnswers)=>{
                    return [...prevAnswers, ...Object.values(snapshot.val())];
                })
                }
            }catch(err){
                setLoading(false)
                console.log(err)
                setError(true)
            }
        }

        fetchAnswers()

    },[videoID])

    return {
        loading,
        error,
        answers,
    }

}