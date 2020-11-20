import React from 'react';
import styled from 'styled-components'
import Title from "./components/Title";
import {Col, Container, Row} from "react-bootstrap";
import Description from "./components/Description";
import Posters from "./components/Posters";
import Controls from "./components/Controls";
import {isTheme, THEME_DARK} from "./libs/theme";
import SlideBackground from "./components/SlideBackground";

const StyledWrapper = styled(Container)`
  font-family: "Kanit", sans-serif;
  color: ${isTheme(THEME_DARK) ? 'white' : 'black'};
  width: 100%;
  height: 100%;
  padding: 5rem 0 5rem 0;
  text-shadow: 0 0 5px ${isTheme(THEME_DARK) ? 'black' : 'white'};
  position: relative;
  font-size: 16px;
  //display: none;
  //@media screen and (min-width: 771px){
  //  display: unset;
  //}
`

const StyledContent = styled(Container)`
  position: relative;
  z-index: 10;
`

const data = window.jumboSliderPostersData

class App extends React.Component {
    state = {
        pageIndex: 0,
        itemIndex: 0,
        showDescription: false,
        showContent: false,
        backdrop: null
    }

    componentDidMount() {
        const item = this.getCurrentItem()
        let backdrop = null
        if (item && item.posterUrl) {
            backdrop = item.posterUrl
        }
        this.setState({showDescription: true, showContent: true, backdrop, showBg: true})
    }

    getPages = () => {
        return data.pages
    }

    getPage = index => {
        return this.getPages()[index]
    }

    getItems = () => {
        return this.getPage(this.state.pageIndex)['items']
    }

    getItem = index => {
        return this.getItems()[index]
    }

    getCurrentPage = () => {
        return this.getPage(this.state.pageIndex)
    }

    getCurrentItem = () => {
        return this.getItem(this.state.itemIndex)
    }

    getAllItems = () => {
        let items = []
        this.getPages().forEach(page => {
            items.push(...page.items)
        })
        return items
    }

    getBackdrops = () => {
        const items = this.getAllItems()

        return items.map(({backdrop}) => backdrop)
    }

    handleSelectItem = index => {
        const total = this.getItems().length
        if (this.getItems() && (index < total && index >= 0)) {
            this.setState({showDescription: index === this.state.itemIndex}, () => {
                    const item = this.getItem(index)
                    this.setState({
                        currentItem: item,
                        itemIndex: index,
                        showDescription: true,
                        backdrop: item && item.backdrop
                    })
                }
            )
        }
    }

    handleSelectPage = index => {
        const total = this.getPages().length
        if (index < total && index >= 0) {
            this.setState({showDescription: false, pageIndex: index},
                () => {
                    const item = this.getCurrentItem()
                    this.setState({
                        currentPage: this.getPage(index),
                        showDescription: true,
                        backdrop: item && item.backdrop
                    })
                }
            )
        }
    }

    render() {
        if (!data) {
            console.error('Missing component data')
            return null
        }
        const {pageIndex, itemIndex, showDescription, showBg} = this.state
        console.log('victor showbg:', showBg)
        const activePage = this.getCurrentPage()
        const activeItem = this.getCurrentItem()

        if (!this.getPages() || !activePage || !activeItem) {
            console.error('Invalid data format')
            return null;
        }
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: {max: 4000, min: 3000},
                items: 5
            },
            desktop: {
                breakpoint: {max: 3000, min: 760},
                items: 3
            },
            tablet: {
                breakpoint: {max: 760, min: 464},
                items: 2
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 1
            }
        };

        return (
            <>
                <StyledWrapper className='bs4slider' fluid>
                    <StyledContent>
                        <Title first={activePage.titleFirst}
                               second={activePage.titleSecond}
                               subtitle={activePage.subtitle}/>
                        <Row>
                            <Description title={activeItem.title}
                                         description={activeItem.synopsis}
                                         link={activeItem.link}
                                         show={showDescription}/>
                            {this.getPages().map(({items}, i) => {
                                return <Posters key={`posterRow${i}`} current={i === pageIndex} items={items}
                                                selectItem={this.handleSelectItem}
                                                selectedIndex={itemIndex}/>
                            })}
                        </Row>
                        <Row>
                            <Col md={5}/>
                            <Col md={7}>
                                <Controls selectPage={this.handleSelectPage} currentPage={pageIndex}/>
                            </Col>
                        </Row>
                    </StyledContent>
                    <SlideBackground url={this.state.backdrop} gradientColor={data.gradientColor}/>
                    {/*{this.getBackdrops().map(backdrop =>*/}
                    {/*    <StyledBackground key={`backdroup${backdrop}`} current={this.state.backdrop === backdrop}*/}
                    {/*                      backdrop={backdrop}*/}
                    {/*                      gradientColor={data.gradientColor}/>*/}
                    {/*)}*/}
                </StyledWrapper>
            </>
        )
    }
}

export default App;
