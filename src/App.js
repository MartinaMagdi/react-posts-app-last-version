import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Createpost from './components/Createpost'
import Singlepost from './components/Singlepost'

export default class App extends Component {
  state = {
    posts: [],
    show: false
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.splice(0, 10)
        })
      })
  }

  deletePost = (id) => {
    this.setState({
      posts: [...this.state.posts.filter(post => post.id !== id)]
    })
  }

  createPost = (newpost) => {
    this.setState({
      posts: [...this.state.posts, newpost]
    })
  }

  editPost = (id, post) => {
    this.state.posts[id - 1].title = post.title
    this.state.posts[id - 1].body = post.body
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <div className="App">
          <BrowserRouter>
            <div className="App">
              <Header />
              <Route exact path='/' render={() => <Home posts={this.state.posts} deletePost={this.deletePost} />} />
              <Route path='/createpost' render={() => <Createpost createPost={this.createPost} />} />
              <Route path='/post/:post_id' render={() => <Singlepost editPost={this.editPost} />} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
