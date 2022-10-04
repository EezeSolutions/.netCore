import { act } from '@testing-library/react';
import React from 'react';
import { Button, Item, ItemContent, ItemGroup, List, Segment, Label, Container, Grid, GridColumn } from 'semantic-ui-react';
import { activity } from '../models/activities';
import ActivityDetail from './ActivityDetail';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';

interface Props
{
    activity: activity[];
    choosenactivity: activity | any;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    editMode: boolean;
    formOpen: (id: string) => void;
    editCancel: () => void;
  
}
export default function ActivityDashboard({ activity, choosenactivity, selectActivity, cancelActivity, editMode, formOpen, editCancel }: Props)
{
    return (


        <Container style={{marginTop:'7em'}}>

                <Grid>

                    <GridColumn width="10">

                    <ActivityList Activities={activity}
                        selectActivity={selectActivity}
                    />
                      
                    </GridColumn>

                <GridColumn width="6">
                    {choosenactivity && !editMode &&
                        <ActivityDetail activity={choosenactivity} cancelActivity={cancelActivity} formOpen={formOpen} />}

                    {editMode &&
                        <ActivityForm activity={choosenactivity} cancelActivity={cancelActivity} formClose={editCancel}/>}
                    </GridColumn>

                </Grid>
               
            </Container>


        

    );

}