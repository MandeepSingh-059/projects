import React, {useState} from 'react';

export default function TextForm(props){
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleOnChange = event => {
        setText(event.target.value);
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    
    const [text, setText] = useState('');
    const noOfWords = text.length == 0 ? text.split(" ").length-1 : text.split(" ").length;

    return(
        <>
        <div className="container my-3">
            <h4>
                <label htmlFor="Textarea">{props.heading}</label>
            </h4>
            <textarea className="form-control" id="Textarea" value={text} onChange={handleOnChange} rows="15"></textarea>
            <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mt-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h4>Your Text Summary: </h4>
            <p>{noOfWords} Words and {text.length} Characters</p>
            <p>Time to read = {(0.008 * noOfWords).toFixed(2)} Minutes</p>
        </div>
        </>
    );
}
//Make memefy button

TextForm.defaultProps = {
    heading: "Enter Txt Below"
};