import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';

const title = (
  <h1 className="topBanner">What We Do</h1>
);

function Panel(props) {
  return <li>
    <div className="bullet-top">{props.header}</div>
    <div className="bullet-body">{props.body}</div>
  </li>;
}

class About extends React.Component {
  render() {
    return (
      <div>
        {title}
        <ul className="bullets">
          <Panel header="Bullet One" body="info"/>          
          <Panel header="Bullet Two" body="info"/>
          <Panel header="Bullet Three" body="words words words words words words words words words words words words words words words words words"/>
        </ul>
      </div>
    );
  }
}

export default About




