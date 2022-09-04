import React from 'react';
import { dog, Duck } from './demo';

interface props
{
    duck: Duck,
}

export default function duckInfo(prop: props) {

    return(
    <div key={prop.duck.name}>
            <span>i am  a {prop.duck.name}</span>
            <span>i am  a {dog.name}</span>

            <button onClick={() => prop.duck.makesound(prop.duck.name + ' quack quack')}>
            Click Me to Make Sound
        </button>
        </div>
        )
}
