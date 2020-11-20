import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {isTheme, THEME_DARK} from "../libs/theme";

const StyledControls = styled.div`
  font-family: Kanit;
  display:flex;
  justify-content: space-between;
  .arrows {
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }
`

const StyledArrow = styled.div`
  border-radius: 50%;
  border: 1px solid ${isTheme(THEME_DARK) ? 'white' : 'black'};
    font-size: 2em;
    width: 2.3em;
    height: 2.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 .5rem;
    cursor: pointer;
    &:hover {
      background-color: ${isTheme(THEME_DARK) ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.2)"};  
    }
`

const StyledSeparator = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .line {
    width: 95%;
    border-top: 2px solid ${isTheme(THEME_DARK) ? 'white' : 'black'};
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.5);
  }
`

const StyledCurrent = styled.div`
font-size: 3em;
font-weight: 300;
`

class Controls extends Component {
    render() {
        const {currentPage, selectPage} = this.props
        return (
            <StyledControls>
                <div className="arrows">
                    <StyledArrow onClick={() => selectPage(currentPage - 1)}>{'<'}</StyledArrow>
                    <StyledArrow onClick={() => selectPage(currentPage + 1)}>{'>'}</StyledArrow>
                </div>
                <StyledSeparator>
                    <div className="line"/>
                </StyledSeparator>
                <StyledCurrent>{`${currentPage+1 < 10 ? '0' : ''}${currentPage+1}`}</StyledCurrent>
            </StyledControls>
        );
    }
}

Controls.propTypes = {
    selectPage: PropTypes.func,
    currentPage: PropTypes.number
};

export default Controls;
