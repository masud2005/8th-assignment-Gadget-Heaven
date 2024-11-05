import React from 'react';
// import Heading from '../Heading';
import { Helmet } from 'react-helmet-async';
import Heading from '../components/Heading';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics || Gadget Heaven</title>
            </Helmet>
            {/* <h1>This is Statistics component</h1> */}
            <div className='bg-primary py-10'>
                <Heading title='Statistics' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
            </div>
        </div>
    );
};

export default Statistics;