import React, { ChangeEvent, useState } from 'react';
import { Button, ButtonGroup, Form, Segment } from 'semantic-ui-react';
import { activity } from '../models/activities';


interface Props
{
    activity: activity | undefined;
    cancelActivity: () => void;
    formClose: () => void;

}
export default function ActivityForm({ activity:selectedactivity, cancelActivity, formClose }: Props) {


    const initialState = selectedactivity ?? { id:'', title:'', category:'', description:'', date:'', city:'', venue:'' };

    const [activity, setactivity] = useState(initialState);


    function ontextchange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const { name, value } = event.target;
        setactivity({ ...activity, [name]: value });
    }
    function onsubmitForm()
    {
        console.log(activity);
    }
    return (

        <Segment clearing>

            <Form onSubmit={onsubmitForm}>

                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={ontextchange} />
                <Form.TextArea placeholder='Description' value={activity.description} onChange={ontextchange} name='desc' />
                <Form.Input placeholder='Category' value={activity.category} onChange={ontextchange}  name='category' />
                <Form.Input placeholder='Date' value={activity.date} name='date' onChange={ontextchange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={ontextchange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={ontextchange} />

                

                <Button floated='right' onClick={() => formClose()} type='button' color='grey' content='Cancel' />

                <Button floated='right' title='Submit Form' color='blue' positive content='Submit' type='submit' />


                </Form>

            </Segment>
        
        )
}