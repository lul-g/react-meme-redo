import React, {useState} from 'react'

export default function Main() {
    
    const [click, setClick] = useState(false)
    const[meme, setMeme] = useState({   
        topTxt: '',
        btmTxt: '',
        imgUrl: ''
    })
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                setMeme(prevState => {
                    let index = Math.floor(Math.random() * 100)
                    index === 94 ? index = Math.floor(Math.random() * 100): index = index
                    return   {
                        ...prevState,
                        imgUrl: data.data.memes[index].url
                    }
                }  
            )
            })
    }, [click])
    
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
        setClick(prev => !prev)
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