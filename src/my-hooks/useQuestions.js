import {useEffect, useState } from "react";
import {getDatabase, ref, query, get, orderByKey} from 'firebase/database'

export function useQuestions(videoID){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [questions, setQuestions] = useState([]);
    
    useEffect(()=>{

        async function fetchQuestions(){
            //database related work
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions");
            
            const quizQuery = query(quizRef, orderByKey());
            

            try{
                setError(false);
                setLoading(true);
                //request firebase database
                const snapshot = await get(quizQuery);
                console.log(snapshot.val())
                setLoading(false);
                if (snapshot.exists()) {
                setQuestions((prevQuestions)=>{
                    return [...prevQuestions, ...Object.values(snapshot.val())];
                })
                }else{
                    console.log("no data avilable")
                }
            }catch(err){
                setLoading(false)
                console.log(err)
                setError(true)
            }
        }

        fetchQuestions()

    },[videoID])

    return {
        loading,
        error,
        questions,
    }

}