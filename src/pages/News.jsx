import React from 'react';
import Header from './shared/Header';
import Navbar from './shared/Navbar';
import { useParams } from 'react-router';

const News = () => {
    const news = useParams();
    console.log(news.id)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            this is news: {news.id}
        </div>
    );
};

export default News;