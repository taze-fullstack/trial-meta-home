import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import { Helmet } from 'react-helmet'

export default class Home extends React.Component { 
  componentDidMount() {
    // document.title = 'This is my trial title';

    // var meta = document.createElement('meta');
    // meta.name = "description";
    // meta.content = "This is my trial description.";
    // document.getElementsByTagName('head')[0].appendChild(meta);
  }
  render() {
    return (
      <div>
        <Helmet
          defaultTitle="Trial TITLE"
          // meta={
          //   [
          //     {
          //       "property": "description", 
          //       "content": "One of the world's trusted PSD to HTML conversion service provider on demand. Unlimited revisions. Low pricing. High standards. Strictly confidential."
          //     }
          //   ]
          // }
        >
          <meta name="description" content="Trial DESCRIPTION" />
          <meta name="google-site-verification" content="oRG8fQfIRrLphNm6wE7e-zAqKhMinR6z-LQzJiJpAA0" />
        </Helmet>
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
