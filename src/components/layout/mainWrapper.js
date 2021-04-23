import * as React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`


const mainWrapper = (props) => <MainWrapper>{props.children}</MainWrapper>

export default mainWrapper