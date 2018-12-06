import React, { Component } from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import 'normalize.css';

import Masthead from './components/masthead';
import RecentVideo from './components/recent_video';
import broFistBg from './images/bg.png';

WebFont.load({
  google: {
    families: ['Wok Sans:400,700', 'sans-serif']
  }
});

const Wrapper = styled.section`
  font-family: 'Work Sans', sans-serif;
  background-image: url(${broFistBg});
  background-size: cover;
  letter-spacing: 0.05em;
  align-items: center;
  text-align: center;
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Content = styled.section`
  background-color: rgba(255,255,255,0.8);
  justify-items: center;
  margin: 0 auto;
  padding: 1em 0;
  width: 100%;

  @media(min-width: 768px) {
    width: 750px;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Masthead />
          <RecentVideo />
        </Content>
      </Wrapper>
    );
  }
}

export default App;
