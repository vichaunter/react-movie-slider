import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 7em;
`

const StyledTitle = styled.h2`
    font-family: Kanit;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0px;
    font-weight: 600!important;
    font-size: 2.5em!important;
    line-height: 1em!important;
    border-color: rgb(255, 255, 255);
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform-origin: 50% 50% 0px;
    @media screen and (max-width: 768px) {
          font-size: 30px;
    }
`
const StyledDescription = styled.p`
    font-size: 18px;
    font-family: Kanit,sans-serif;
    letter-spacing: 0;
    font-weight: 300;
    line-height: 2em;
    text-shadow: #000 0 0 30px;
        @media screen and (max-width: 768px) {
          font-size: 1em;
          line-height: 1.3em;
    }
`

class Title extends Component {
    render() {
        const {first, second, subtitle} = this.props
        return (
            <TitleWrapper>
                <StyledTitle>{first}{second && <br />}{second && second}</StyledTitle>
                <StyledDescription>{subtitle}</StyledDescription>
            </TitleWrapper>
        );
    }
}

Title.propTypes = {
    first: PropTypes.string,
    second: PropTypes.string,
    subtitle: PropTypes.string
};

export default Title;
