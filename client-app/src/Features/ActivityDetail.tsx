import React from 'react';

import { Button, ButtonGroup, Card, Icon } from 'semantic-ui-react'
import { activity } from '../models/activities';


interface Props
{

    activity: activity
}
export default function ActivityDetail({ activity }: Props)
{

    return (
        <Card fluid
            image={`/assets/categoryImages/${activity.category}.jpg`}
            header={activity.title}
            meta={activity.date}
            description={activity.description}
            extra=<div>
                <ButtonGroup widths='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </ButtonGroup></div>
        />
        );
}