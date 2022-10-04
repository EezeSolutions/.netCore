import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Container, Grid, GridColumn, Header, List, Menu } from 'semantic-ui-react';
import { activity } from '../models/activities';
import NavBar from './NavBar';
import ActivityDashboard from '../Features/ActivityDashboard';
import ActivityDetail from '../Features/ActivityDetail';
import { act } from '@testing-library/react';
import ActivityForm from '../Features/ActivityForm';
import { setegid } from 'process';


function App() {
    const [activities, setActivity] = useState<activity[]>([]);
    const [choosenactivity, setSelectedActivity] = useState<activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    
    useEffect(() =>
    {
        axios.get<activity[]>('https://localhost:5001/api/Activities').then(resp => {
            console.log(resp);
            setActivity(resp.data);
        });
    },[])

    function handleSelecectedctivity(id : string)
    {
        console.log(id);
        setSelectedActivity(activities.find(x => x.id === id));
        setEditMode(false);
    }

    function handleCancelselectActivity()
    {
        setSelectedActivity(undefined);
    }

    function formOpen(id?: string)
    {
        id ? handleSelecectedctivity(id) : handleCancelselectActivity();

        setEditMode(true);
    }

    function editCancel()
    {
        setEditMode(false);
        handleCancelselectActivity();
    }

    return (

        <div>
            <NavBar createnewactivity={formOpen} />

            <ActivityDashboard
                activity={activities}
                choosenactivity={choosenactivity}
                selectActivity={handleSelecectedctivity}
                cancelActivity={handleCancelselectActivity}
                editMode={editMode}
                formOpen={formOpen}
                editCancel={editCancel}

            />


            
               
      
    </div>
  );
}

export default App;
