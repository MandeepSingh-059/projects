import React, {useState} from 'react';

export default function TextForm(props){
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleOnChange = event => {
        setText(event.target.value);
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleMemeClick = () => {
        let str = '';
        for(let i=0; i<text.length; i++){
            if(i%2 === 0){
                str += text[i].toUpperCase();
            }
            else{
                str += text[i].toLowerCase();
            }
        }
        setText(str);
        props.showAlert("Converted to MeMe CaSe", "success");
    }
    
    const handleCpyText = () => {
        var text = document.getElementById("textArea");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to ClipBoard", "success");
    }

    const selectedMode = {    
        backgroundColor: props.mode === "dark" ? "#042743" : "white",
        color: props.mode === "dark" ? "white" : "black"
    }    

    const [text, setText] = useState('');
    const noOfWords = text.length === 0 ? text.split(" ").length-1 : text.split(" ").length;

    return(
        <>
        <div className="container my-3">
            <h4>
                <label htmlFor="Textarea">{props.heading}</label>
            </h4>
            <textarea style={selectedMode} className="form-control" id="Textarea" value={text} onChange={handleOnChange} rows="15"></textarea>
            <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mt-3 mx-2" onClick={handleMemeClick}>Convert to MemeCase</button>
            <button className="btn btn-primary mt-3 mx-2" onClick={handleCpyText}>Copy Text</button>
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