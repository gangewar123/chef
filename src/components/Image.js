import React, { Component } from 'react';
import styled from 'styled-components';

export default class Image extends Component {
 render(){
  return( <ImageComponent src={this.props.source} alt={this.props.text} /> )
 }
}

const ImageComponent = styled.img`
	width: 100%;
	height: 100%;
`;