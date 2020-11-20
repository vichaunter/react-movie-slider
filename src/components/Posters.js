import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Poster from "./Poster";
import {Col, Row} from "react-bootstrap";

const StyledPosters = styled(Col)`
  justify-content: space-between;
  opacity: ${({current}) => current ? 1 : 0};
  display: ${({current}) => current ? 'flex' : 'none'};
`

class Posters extends Component {
    render() {
        const {items, selectItem, selectedIndex, current} = this.props

        return (
            <StyledPosters md={7} current={current}>
                <Row className="d-flex justify-content-center">
                    {items.slice(0,3).map(({title, logoUrl, posterUrl}, index) => (
                        <Poster
                            key={`poster-${title}-${index}`}
                            title={title}
                            logoUrl={logoUrl}
                            posterUrl={posterUrl}
                            selectItem={selectItem}
                            index={index}
                            active={index === selectedIndex}
                        />
                    ))}
                </Row>
            </StyledPosters>
        );
    }
}

Posters.propTypes = {
    items: PropTypes.array,
    selectItem: PropTypes.func,
    selectedIndex: PropTypes.number
};

export default Posters;
