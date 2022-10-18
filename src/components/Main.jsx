import React, {useState} from 'react'
import Meme_Data from '../memesData'


export default function Main() {
    let index = Math.floor(Math.random() * 100)
    const memesData = Meme_Data.data.memes
    // const memeArr = memesData
    const[meme, setMeme] = useState({
        topTxt: '',
        btmTxt: '',
        imgUrl: memesData[index].url
    })
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    function getMeme() {
        index = Math.floor(Math.random() * 100)
        setMeme(prevState => (
                {
                ...prevState,
                imgUrl: memesData[index].url
            }
        ))
    }
    
    return (
        <div className="main">
            <div className="top">
                <div className="input flex">
                    <input 
                        type="text" 
                        placeholder='text1' 
                        name='topTxt' 
                        value={meme.topTxt} 
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        placeholder='text2' 
                        name='btmTxt' 
                        value={meme.btmTxt} 
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMeme}>
                    get a new meme image <i className="fa-solid fa-image"></i>
                </button>
            </div>
            <div className="bottom flex">
                <img src={meme.imgUrl} />
                <h2 className='ttxt'>{meme.topTxt}</h2>
                <h2 className='btxt'>{meme.btmTxt}</h2>
            </div>
        </div>
    )
}