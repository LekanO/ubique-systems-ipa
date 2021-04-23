import * as React from 'react';
import styled from 'styled-components';
import { device } from '../helpers';
import PropTypes from 'prop-types';

const Image = styled.img`
  display: inline-block;
  height: 100vh;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }
`

const image = ({url}) => {
  return (
    <>
      <Image src={url} />
    </>
  )
}

Image.propTypes = {
  url: PropTypes.number 
}

export default image