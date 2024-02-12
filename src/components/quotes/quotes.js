import React, { useState, useEffect} from 'react';
import "./quotes.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const quotesArray = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
    {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron"}
]   

const colorsArray = [
    "rgb(115, 168, 87)",
    "rgb(231, 76, 60)",
    "rgb(251, 105, 100)",
    "rgb(119, 177, 169)",
    "rgb(39, 174, 96)",
    "rgb(52, 34, 36)",
    "rgb(44, 62, 80)",
];

function Quotes() {

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// UPDATE COLOR AND QUOTES
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const [color, setColor] = useState("#fff");
    const [randomQuote, setRandomQuote] = useState("");

    useEffect(() => {
        let randomQuoteIndex = quotesArray[Math.floor(Math.random() * quotesArray.length)]
        let randomColorIndex = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        setRandomQuote(randomQuoteIndex)
        setColor(randomColorIndex)
    })

    const updateQuote = () => {
        let randomQuoteIndex = quotesArray[Math.floor(Math.random() * quotesArray.length)]
        let randomColorIndex = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        setRandomQuote(randomQuoteIndex)
        setColor(randomColorIndex)
    }

    return (
        <div className="quotes-handler" style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="quotes-container">
                <h2 className="quote" style={{color: color}}>"{randomQuote.quote}"</h2>
                <p className="author" style={{color: color}}>- {randomQuote.author}</p>
                <div className="quotes-footer">
                    <div className="socials-links">
                        <a className="link-button" href="https://www.linkedin.com/in/murilocamara/" style={{backgroundColor: color}}>
                            <FaLinkedin />
                        </a>
                        <a className="link-button" href="https://github.com/MuriloCSilva" style={{backgroundColor: color}}>
                            <FaGithub />
                        </a>
                    </div>
                    <button className="new-quote-button" onClick={updateQuote} style={{backgroundColor: color}}>New Quote</button>
                </div>
            </div>
            <p className='by-author'>by Murilo Câmara</p>
        </div>
    )
}

export default Quotes;