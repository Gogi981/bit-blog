import React from 'react'
import { Redirect } from 'react-router-dom'

class CreatePosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            Content: ""
        }
    }
    handleCancel = () => {
        (this.props.history.push("/"))
    }

    handleSave = () => {
        (this.props.history.push("/"))
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Title
                < input placeholder="Post title" id="title" ></input><br />
                Content
                <textarea>
                </textarea>
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={() => this.handleSave()}> Save</button>
            </div>
        )
    }
}


export default CreatePosts