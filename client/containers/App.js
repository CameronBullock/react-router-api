import React from 'react';
import { Link } from 'react-router';
import Videos from '../components/Videos';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  links = () => {
    return [
      { name: 'Home', path: '/' },

    ].map( (link, i) => {
      return (
        <li key={i}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="black">
        <nav className="red darken-2 white-text">
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo center">VimFlix</a>
            <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              {this.links()}
            </ul>
            <ul className="side-nav" id="mobile">
              {this.links()}
            </ul>
          </div>
        </nav>
            {this.props.children}
      </div>
    );
  }
}

export default App;
