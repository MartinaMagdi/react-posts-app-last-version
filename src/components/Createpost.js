import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, InputGroup, Container, Button } from 'react-bootstrap'
import '../css/createPost.css'

export default class Createpost extends Component {
    state = {
        title: '',
        body: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const post = {
            id: Math.random(),
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <Container className="create-post">
                    <h2>Create Post</h2>
                    <form>
                        <InputGroup className="mb-3">
                            <FormControl
                                id="title"
                                onChange={this.handleChange}
                                placeholder="Title"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormControl id="body" onChange={this.handleChange} placeholder="body" as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <Link to="/"><Button onClick={this.handleSubmit} variant="primary">Add</Button></Link>
                    </form>
                </Container>
            </div>
        )
    }
}
