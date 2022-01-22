import React,{useState} from 'react'
import { ImageBox, ImagesContainer } from './Explore_css'
function Explore() {
    const a = [];
    fetch("https://meme-api.herokuapp.com/gimme/10")
        .then((response) => response.json())
        .then((data) => a.push(data)
    );
    console.log(a.memes);
    return (
        <div>
            { 

            }
        </div>
    )
}

export default Explore
