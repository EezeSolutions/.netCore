import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { activity } from '../models/activities';



interface Props
{
    Activities: activity[];
    selectActivity: (id: string) => void;
    
}


export default function ActivityList({ Activities, selectActivity }: Props)
{
    return (
        <Segment>

            <Item.Group divided>

                {Activities.map((activity) =>
                (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <span>{activity.description} </span>
                                <span>{activity.city} </span>,<span>{activity.venue} </span>

                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' color='blue' content='Details'></Button>
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>


        </Segment>)
}