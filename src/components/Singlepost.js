import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/singlepost.css'

export default class Singlepost extends Component {
    state = {
        id: null,
        post: null,
        title: null,
        body: null
    }

    componentDidMount() {
        const x = window.location.href.split("/");
        const id = x[x.length - 1];
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => {
                this.setState({
                    post: res.data,
                    id: id,
                    title: res.data.title,
                    body: res.data.body
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = () => {
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.editPost(this.state.id, post)
    }

    render() {
        const post = this.state.post ? (
            <div>
                <Container className="create-post">
                    <h2>Edit Post</h2>
                    <form>
                        <InputGroup className="mb-3">
                            <FormControl
                                value={this.state.title}
                                id="title"
                                onChange={this.handleChange}
                                placeholder="Title"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormControl value={this.state.body} id="body" onChange={this.handleChange} placeholder="body" as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <Link to="/"><Button onClick={this.handleSubmit} variant="primary" className="edit-btn">Edit</Button></Link>
                    </form>
                </Container>
            </div>
        ) : (
                <div className="center">Loading post...</div>
            )
        return (
            <div className="single-post">
                {post}
            </div>
        )
    }
}
