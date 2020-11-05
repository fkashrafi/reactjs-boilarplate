import React from 'react';

// import Components
import ourComp from './routes.components';



const routes = [
    {
        path: '/',
        exact: true,
        private: true,
        component: (props) => <ourComp.SampleOne {...props} />
    },
];

export default routes;