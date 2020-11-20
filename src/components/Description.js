import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "react-bootstrap";
import styled from 'styled-components'
import {isTheme, THEME_DARK} from "../libs/theme";
import {CSSTransition} from "react-transition-group";

const StyledDescription = styled(Col)`
  text-align: left;
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.5em;
    }
  }
`

const StyledTitle = styled.h2`
  white-space: normal!important;
  text-transform: uppercase;
  font-weight: 600!important;
  font-size: 2.5em!important;
  line-height: 1em!important;
`

const StyledSeparator = styled.hr`
    width: 30%;
    border-top: 2px solid ${isTheme(THEME_DARK) ? 'white' : 'black'}!important;
    margin: 0 0 1em 0;
`


const StyledText = styled.p`
    line-height: 1.2em;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 1em;
`

const StyledButton = styled.a`
    font-size: 1.5em!important;
    font-weight: 300!important;
    border-radius: 0;
    padding: .25em 1.2em!important;
`

class Description extends Component {
    render() {
        const {title, description, link, show} = this.props
        return (
            <StyledDescription className="d-flex flex-column justify-content-end align-items-start mb-3" md={5}>
                <CSSTransition
                    in={show}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                    style={{width: "100%"}}
                >
                    <div className=''>
                        <StyledSeparator />
                        <StyledTitle className='text-left'>{title}</StyledTitle>
                        <StyledText>{description}</StyledText>
                        <StyledButton href={link} className='btn btn-primary btn-lg' rel='noopener noreferrer'
                           target='_blank'>Přehrát</StyledButton>
                    </div>
                </CSSTransition>
            </StyledDescription>
        );
    }
}

Description.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    show: PropTypes.bool,
};

export default Description;
