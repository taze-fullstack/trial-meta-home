import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

export default class Home extends React.Component { 
  componentDidMount() {
    document.title = 'This is my trial title';

    var meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "This is my trial description.";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Hello World</h1>
      </div>
    )   
  }
}
// export default withSiteData(() => (
//   <div>
//     <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
//     <img src={logoImg} alt="" />
//   </div>
// ))
