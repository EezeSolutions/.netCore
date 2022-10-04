import React from 'react';

import { Button, ButtonGroup, Card, Icon } from 'semantic-ui-react'
import { activity } from '../models/activities';


interface Props
{

    activity: activity;
    cancelActivity: () => void;
    formOpen: (id: string) => void;
}
export default function ActivityDetail({ activity, cancelActivity, formOpen }: Props)
{

    return (
        <Card fluid id={activity.id}
            image={`/assets/categoryImages/${activity.category}.jpg`}
            header={activity.title}
            meta={activity.date}
            description={activity.description}
            extra=<div>
                <ButtonGroup widths='2'>
                    <Button onClick={() => formOpen(activity.id)} basic color='blue' content='Edit' />
                    <Button onClick={()=> cancelActivity()} basic color='grey' content='Cancel' />
                </ButtonGroup></div>
        />
        );
}