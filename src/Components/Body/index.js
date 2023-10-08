import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicCard from '../Card1';
import { itemData } from './index';
import { load } from 'dotenv';

export default function NavBar() {

    // define state to track the loaded content
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // load initial content when the component mounts
        loadInitialContent();
    }, []);

    // function to load initial content
    const loadInitialContent = () => {
        const initialContent = itemData.slice(0, 5); // replace with your content retrieval method
        setContent(initialContent);
    };

    // function to handle endless scrolling
    const handleEndlessScroll = () => {
        const contentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.innerHeight + window.scroll;

        // detects when user is near bottom of the page
        if (scrollPosition >= contentHeight - 200 && !loading) {
            setLoading(true);

            // fetch and append the next set of content 
            const nextContent = {};
            const startIndex = content.length;
            const endIndex = startIndex + 5;
            const additionalContent = itemData.slide(startIndex, endIndex);

            // append the new content to the existing content
            setContent((prevContent) => [...prevContent, nextContent]);
            setLoading(false);
        }
    };

    // add scroll event listener to trigger infinite scrolling
    useEffect(() => {
        loadInitialContent(); // load initial content when the component mounts
    }, []);


    useEffect(() => {
        window.addEventListener('scroll', handleEndlessScroll);
        return () => {
            window.removeEventListener('scroll', handleEndlessScroll);
        };
    }, [content]);
}


    // return (
    //     <div className="App-body">
    //         {content.map((item, index) => (
    //         <Card key={index} className='App-card' sx={{ width: "50%"}}>
    //             <CardContent className='cardContent' border='50'>
    //                 <Typography variant="h5" component="div">
    //                     {item.question}
    //                 </Typography>
    //                 <Typography variant="body2">
    //                     {item.answer}
    //                 </Typography>
    //             </CardContent>
    //         </Card>
    //         )}
    //         {loading && <p>Loading more content... </p>}
    //         </div>
            
    //     );