import React, { useState, useEffect } from 'react';
import BasicCard from '../Card1'
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
        const initialContent = []; // replace with your content retrieval method
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

            // append the new content to the existing content
            setContent((prevContent) => [...prevContent, nextContent]);
            setLoading(false);
        }
    };

    // add scroll event listener to trigger infinite scrolling
    useEffect(() => {
        window.addEventListener('scroll', handleEndlessScroll);
        return () => {
            window.removeEventListener('scroll', handleEndlessScroll);
        };
    }, []);


    return (
        <div className="App-body">This is the body of the website 
        {content.map((item, index) => (
            <BasicCard key={index} content={item} />
        ))}
        {loading && <p>Loading more content... </p>}
        </div>
    );
}