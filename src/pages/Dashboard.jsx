import React from 'react';
import Heading from '../components/Heading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
    return (
        <>

            <div className='bg-primary py-10 place-items-center'>
                <Heading title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
                
            </div>

        </>
    );
};

export default Dashboard;