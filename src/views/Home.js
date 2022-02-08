import React from 'react';
import AddTask from '../components/AddTask';
import ListTask from '../components/ListTask';

export const Home = () => {
    return (
    <div> <h1>TO DO LIST</h1>
       <AddTask/>
       <ListTask/>
    </div>
    );
};
