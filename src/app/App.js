import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import AuthorsPage from './AuthorsPage'
import SinglePostPage from './SinglePostPage'
import SingleAuthorPage from './SingleAuthorPage'
import { Route, Switch } from 'react-router-dom'
import { getPostData } from '../services/postServices'
import Loader from '../components/Loader'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    getPostData()
      .then(posts => this.setState({ posts, loading: false }))
  }

  render() {

    if (this.state.loading) {
      return <Loader />
    }
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Header />
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Switch>
              <Route exact path="/" component={() => <HomePage posts={this.state.posts} />} />
              <Route exact path="/post/:id" component={SinglePostPage} />
              <Route exact path="/authors" component={AuthorsPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/author/:userid" component={SingleAuthorPage} />
            </Switch>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Footer />
          </div>
          <div className="col-1"></div>
        </div>

      </div>

    );
  }
}

export default App;
