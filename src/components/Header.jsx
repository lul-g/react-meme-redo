import React from 'react'
import img from '../assets/tf.png'

export default function Header() {
    return (
        <div className="header flex">
            <div className="left flex">
                <img src={img} /> meme generator
            </div>
            <div className="right">react course project - 1</div>
        </div>
    )
}