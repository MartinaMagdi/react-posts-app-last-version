import React, { Component } from 'react'
import { Col, Row, Card, Button, Container, Alert } from 'react-bootstrap'
import '../css/home.css'

export default class Home extends Component {
    state = {
        show: false
    }

    deletePost(id) {
        this.props.deletePost(id);
        this.setState({
            show: true
        })
        setTimeout(() => this.setState({ show: false }), 2000);
    }

    viewPost = (id) => {
        window.location.href = `/post/${id}`;
    }

    render() {
        const posts = this.props.posts
        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <Col xs={3} key={post.id} className="single-post">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className="capitalize">{post.title}</Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>
                                <Button variant="primary" onClick={() => this.viewPost(post.id)}>View</Button>
                                <Button variant="danger" onClick={() => this.deletePost(post.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col >
                )
            })
        ) : (
                <div>No posts yet</div>
            )
        return (
            <div className="home container">
                <Container>
                    <h2 className="center">Home</h2>
                    <Alert show={this.state.show} variant="danger">
                        <Alert.Heading>Post is deleted successfully</Alert.Heading>
                    </Alert>
                    <Row>
                        {postsList}
                    </Row>
                </Container>
            </div>
        )
    }
}
