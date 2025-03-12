import Header from './shared/Header';
import Navbar from './shared/Navbar';
import LeftSideNav from './shared/LeftSideNav/LeftSideNav';
import RightSideNav from './shared/RightSideNav/RightSideNav';
import BrakingNews from './BrakingNews';
import { useEffect, useState } from 'react';
import NewsContainer from './NewsContainer';

const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 '>
                    <h2 className="">Dragon News Home</h2>

                    {
                        news.map(info => <NewsContainer key={info._id} info={info}></NewsContainer>)
                    }

                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;