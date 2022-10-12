import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData()
    
    return (
        <div>
            <h3>Show me all the phones you have</h3>
            <h5>{users.length}</h5>
            {
                users.map(ph => <li><Link to={`phone/${ph.id}`}>{ph.name}</Link></li>)
            }
        </div>
    );
};

export default Home;