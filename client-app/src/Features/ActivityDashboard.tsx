import { act } from '@testing-library/react';
import React from 'react';
import { Button, Item, ItemContent, ItemGroup, List, Segment, Label } from 'semantic-ui-react';
import { activity } from '../models/activities';

interface Props
{

    activity: activity[]
}
export default function ActivityDashboard({ activity }: Props)
{
    return (

        <Segment>

            <Item.Group divided>

                {activity.map((activity) =>
                (
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <span>{activity.description} </span>
                                <span>{activity.city} </span>,<span>{activity.venue} </span>

                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right'  color='blue' content='Details'></Button>
                                <Label basic content={activity.category} />
                             </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>

            
        </Segment>

    );

}