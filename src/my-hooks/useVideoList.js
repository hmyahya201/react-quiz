import { useEffect, useState } from "react";
import {getDatabase, ref, query, orderByKey, get, startAt, limitToFirst} from 'firebase/database'

export function useVideoList(page){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [videos, setVideos] = useState([]);
    const [haseMore, setHasMore] = useState(true);
    useEffect(()=>{

        async function fetchVideos(){
            //database related work
            const db = getDatabase();

            const videosRef = ref(db, "videos");

            const videoQuery = query( 
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
                );

            try{
                setError(false);
                setLoading(true);
                //request firebase database
                const snapshot = await get(videoQuery);
                setLoading(false);
                if(snapshot.exists()){
                    setVideos((prevVieos)=>[...prevVieos, ...Object.values(snapshot.val())])
                }else{
                   setHasMore(false)
                }

            }catch(err){
                setLoading(false)
                console.log(err)
                setError(true)
            }

        }

        fetchVideos()

    },[page])

    return {
        loading,
        error,
        videos,
        haseMore
    }

}