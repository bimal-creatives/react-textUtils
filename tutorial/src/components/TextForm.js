import React,{useState} from 'react'

export default function TextForm(props) {

    const handleupclick = () =>{
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        // setToggle(!toggle)
    }

    const handleloclick = () =>{
        // console.log("uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        // setToggle(!toggle)
    }

    const handleclearclick = () =>{
        let newtext = " "
        setText(newtext)
    }

    const handleonchange = (event) =>{
        // console.log("on change")
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");
    // const [toggle, setToggle] = useState(true)
  return (
    <>
        <div className='container'>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" placeholder='Enter your text' value={text} onChange={handleonchange} rows="8"></textarea>
        </div>
        
        <button className="btn btn-info mx-1" onClick={handleupclick} >Convert to uppercase</button>
        <button className="btn btn-info mx-1" onClick={handleloclick} >Convert to lowercase</button>
        <button className="btn btn-info mx-1" onClick={handleclearclick} >clear text</button>
        <button className="btn btn-info mx-1" onClick={handleCopy} >copy text</button>
        <button className="btn btn-info mx-1" onClick={handleExtraSpaces} >Remove extra space</button>
        
        
        
        
        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length } minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
