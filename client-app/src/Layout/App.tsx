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


function App() {
    const [activities, setActivity] = useState<activity[]>([]);

    useEffect(() =>
    {
        axios.get<activity[]>('https://localhost:5001/api/Activities').then(resp => {
            console.log(resp);
            setActivity(resp.data);
        });
    },[])

    return (

        <div>
            <NavBar />

            <Container style={{marginTop:'7em'}}>

                <Grid>

                    <GridColumn width="10">

                        <ActivityDashboard activity={activities} />

                    </GridColumn>

                    <GridColumn width="6">
                        {activities[0] &&
                            <ActivityDetail activity={activities[0]} />}

                        <ActivityForm />
                    </GridColumn>

                </Grid>
               
            </Container>
               
      
    </div>
  );
}

export default App;
