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
        <div className='container' style={{ color:props.mode=== 'dark'?'white': '#112B3C'}}>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{ color:props.mode=== 'dark'?'white': '#112B3C', backgroundColor:props.mode=== 'dark'?'#21325E':'#C4DDFF', borderColor:props.mode==='dark'?'#21325E':'#C4DDFF'}} placeholder='Enter your text' value={text} onChange={handleonchange}  rows="8"></textarea>
        </div>
        
        <button className="btn btn-primary mx-1" onClick={handleupclick} >Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloclick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick} >clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove extra space</button>
        
        
        
        
        </div>
        <div className="container" style={{ color:props.mode=== 'dark'?'white': '#112B3C'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length } minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"enter something to preview"}</p>
        </div>
    </>
  )
}
