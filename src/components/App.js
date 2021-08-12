import {Switch, Route} from 'react-router-dom';
import { Navbar, PostDetail, CreatePost, Home } from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/post/:postID' component={PostDetail} />
        <Route exact path='/createPost' component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
