import Header from './shared/Header';
import Navbar from './shared/Navbar';
import LeftSideNav from './shared/LeftSideNav/LeftSideNav';
import RightSideNav from './shared/RightSideNav/RightSideNav';
import BrakingNews from './BrakingNews';
import NewsContainer from './NewsContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const newsData = useLoaderData();
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
                        newsData.map(info => <NewsContainer key={info._id} info={info}></NewsContainer>)
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