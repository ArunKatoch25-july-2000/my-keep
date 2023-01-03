import React, { useState } from "react";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [expand, setExpand] = useState(false);

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }
    const addEvent = () => {
        if(note.title == "" && note.content==""){
            alert("Please write something on the input fields.")
            return;
        }
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
    }

    const expandIt = () => {
        setExpand(true);
    }

    const btonormal = () => {
        setExpand(false);
    }
    return (
        <>
            <div className="main_note">
                <div className="form">
                    {expand ?
                        <input
                            type="text"
                            placeholder="Title"
                            autoComplete="off"
                            value={note.title}
                            onChange={InputEvent}
                            name="title"
                        />
                        : null}
                    <textarea
                        rows=""
                        cols=""
                        placeholder="Write a Note..."
                        value={note.content}
                        name="content"
                        onChange={InputEvent}
                        onClick={expandIt}
                        onDoubleClick={btonormal}
                    >
                    </textarea>

                    {expand ?
                        <button onClick={addEvent} className="my-btn">+</button>
                        : null}
                </div>
            </div>
        </>

    )
}

export default CreateNote;