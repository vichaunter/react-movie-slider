import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {isTheme, THEME_DARK} from "../libs/theme";
import {Col} from "react-bootstrap";


const StyledPosterWrapper = styled(Col)`
  cursor: pointer;
  transition: all .5s;
  &:hover {
    transform: scale(1.05);
  }
`
const StyledPoster = styled.div.attrs(({active}) => ({
    className: active ? 'active' : ''
}))`
  box-shadow: 0 0 10px 5px ${isTheme(THEME_DARK) ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'};
  &.active {
  outline: 2px solid ${isTheme(THEME_DARK) ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
    //box-shadow: 0 0 10px 8px ${isTheme(THEME_DARK) ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
  }
  img {
    width: 100%;
    max-height: 360px;
    height: 100%;
  }
`

const StyledLogo = styled.div`
  background-color: ${isTheme(THEME_DARK) ? 'black' : 'white'};
  text-align: center;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 75%;
  }
`

const StyledName = styled.div`
    font-family: "Kanit",sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    overflow: hidden;
    white-space: nowrap;
    padding: 1.3em .5em;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: white;
`

class Poster extends Component {
    render() {
        const {logoUrl, posterUrl, title, index, active} = this.props
        // const src = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vky6H7mCBjSsg1GMGJtJpGUeVS1.jpg';
        return (
            <StyledPosterWrapper md={4} onClick={() => this.props.selectItem(index)}>
                <StyledLogo>
                    <img src={logoUrl} alt="logo"/>
                </StyledLogo>
                <StyledPoster active={active}>
                    <img src={posterUrl} alt={title}/>
                </StyledPoster>
                <StyledName className={`poster-title`}>
                    {title}
                </StyledName>
            </StyledPosterWrapper>
        );
    }
}

Poster.propTypes = {
    logoUrl: PropTypes.string,
    posterUrl: PropTypes.string,
    title: PropTypes.string,
    index: PropTypes.number,
    active: PropTypes.bool
};

export default Poster;
