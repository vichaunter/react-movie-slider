import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledOpacityOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(25, 25, 25, 0.5);
  //background: linear-gradient(0deg, rgba(25,25,25,1) 0%, rgba(25,25,25,0) 13%, rgba(25,25,25,0) 87%, rgba(25,25,25,1) 100%);
  background: ${({gradientColor}) => gradientColor ?
    `linear-gradient(0deg, ${gradientColor} 0%, rgba(25,25,25,0) 13%, rgba(25,25,25,0) 87%, ${gradientColor} 100%)`
    : `linear-gradient(0deg, rgba(25,25,25,1) 0%, rgba(25,25,25,0) 13%, rgba(25,25,25,0) 87%, rgba(25,25,25,1) 100%)`};
  top: 0;
  z-index: 1;
`

const StyledSlideBackground = styled.div.attrs(({ fadeOut }) => ({
  className: fadeOut ? 'fade-out' : '',
}))`
  background-image: url("${({ url }) => url}");
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  z-index: 0;
  transition: all 500ms ease-in-out;
  opacity: .4;
  top: 0;
  
  .fade-out {
    opacity: 0;
  }
  
`

class SlideBackground extends Component {
  state = {
    url: null,
    fadeOut: false,
  }

  componentDidMount() {
    this.setState({ url: this.props.url })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.url !== this.props.url) {
      this.setState({ fadeOut: true }, () => {
        setTimeout(() => {
          this.setState({ url: this.props.url, fadeOut: false })
        }, 600)
      })
    }
  }

  render() {
    const { fadeOut } = this.state
    return (
      <React.Fragment>
        <StyledOpacityOverlay gradientColor={this.props.gradientColor} />
        <StyledSlideBackground fadeOut={fadeOut} url={this.state.url} />
      </React.Fragment>
    )
  }
}

SlideBackground.propTypes = {
  url: PropTypes.string,
  gradientColor: PropTypes.string
}

export default SlideBackground
