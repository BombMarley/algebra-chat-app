import { useState } from "react";

function Input({sendMessage}) {
    const [input, setInput] = useState("");

    function handleClick(e) {
        if(input === ""){
            e.preventDefault();
            alert("Error: Cannot send empty message. Please type a message before sending.");
        }
        else{
            e.preventDefault();
            setInput("");
            sendMessage(input.trim());
        }
    }; 

    return(
        <form>
            <input type="text" placeholder="Start a new message" autoFocus={false} value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={handleClick}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#fff"></path></svg></button>
        </form>
    );
};

export default Input;