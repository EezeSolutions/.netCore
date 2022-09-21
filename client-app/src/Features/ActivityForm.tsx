import React from 'react';
import { Button, ButtonGroup, Form, Segment } from 'semantic-ui-react';

export default function ActivityForm()
{

    return (

        <Segment clearing>

            <Form>

                <Form.Input placeholder='Title' />
                <Form.TextArea placeholder='Description' />
                <Form.Input placeholder='Category' />
                <Form.Input placeholder='Date' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />

                

                <Button floated='right' title='Submit Form' type='button' color='grey' content='Cancel' />

                <Button floated='right' color='blue' positive content='Submit' type='submit' />


                </Form>

            </Segment>
        
        )
}