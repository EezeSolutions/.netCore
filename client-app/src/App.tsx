import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
    const [activities, setActivity] = useState([]);

    useEffect(() =>
    {
        axios.get('https://localhost:5001/api/Activities').then(resp =>
        {
            console.log(resp);
            setActivity(resp.data);
        });
    },[])

    return (

        <div>
            <Header as='h2' content="Learning React" />
            <List>
                {activities.map((activity: any) =>
                (
                    <List.Item key={activity.id}>{activity.title} </List.Item>
                )
                )}
            </List>
      
    </div>
  );
}

export default App;
