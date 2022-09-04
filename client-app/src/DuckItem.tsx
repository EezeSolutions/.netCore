import React from 'react';
import { Duck } from './demo';

interface props
{
    duck: Duck
}

export default function DuckItem({ duck }: props)
{
    return (
    <div key={duck.name}>
        <span>i am  a {duck.name}</span>
        <button onClick={() => duck.makesound(duck.name + ' quack quack')}>
            Click Me to Make Sound
        </button>
        </div>
        )
}