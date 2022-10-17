import React, {useState} from 'react'
import Meme_Data from '../memesData'


export default function Main() {
    let index = Math.floor(Math.random() * 100)
    const memesData = Meme_Data.data.memes
    // const memeArr = memesData
    const[meme, setMeme] = useState({
        topTxt: 'hi',
        btmTxt: 'bye',
        imgUrl: memesData[index].url
    })
    // const [imgUrl, setImgUrl] = useState(memesData[index].url)
    return (
        <div className="main">
            <div className="top">
                <div className="input flex">
                    <input type="text" placeholder='text1'/>
                    <input type="text" placeholder='text2'/>
                </div>
                <button
               onClick={
                () => {
                    index = Math.floor(Math.random() * 100)
                    setMeme(prevState => (
                         {
                            ...prevState,
                            imgUrl: memesData[index].url
                        }
                    ))
                }
               }
               >
                    get a new meme image <i className="fa-solid fa-image"></i>
                </button>
            </div>
            <div className="bottom flex">
                <img src={meme.imgUrl} />
            </div>
        </div>
    )
}