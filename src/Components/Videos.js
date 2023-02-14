import React from 'react';
import { useVideoList } from '../my-hooks/useVideoList';
import Video from './Video';
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';


const Videos = () => {
    const {loading, error, videos, haseMore} = useVideoList(0);
    const [page, setPage] = useState(1)
    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll
                 dataLength={videos.length} 
                 hasMore = {haseMore}
                  loader="loading..."
                   next= {()=>setPage(page + 8) }>
                    {videos.map((video)=>(
                    <Link to={`/quiz/${video.youtubeID}`}key={video.youtubeID}><Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                        </Link> ))}
                        </InfiniteScroll>
            )};
            
            {!loading && videos.length === 0 && <div>No data found!</div>}
            {error && <div>The was an error!</div>}
            {loading && <div>Loading...</div>}
        </div>
    );
};

export default Videos;