import { LockOutlined } from '@ant-design/icons'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Computer from '../computer/Computer'
import Faq from '../faq/Faq'
import Box from './Box'
import MySlider from './MySlider'

function HomeElements() {
    return (
        <div>
            <HomeElementsContainer>
                <Container>
                    <BgDetails className="bg-details">
                        <h1 className='home-title'>
                            Lightning fast prototyping
                        </h1>
                        <p className='home-description'>
                            Most calendars are designed for teams. Slate is designed for
                            freelancers who want a simple way to plan their schedule.
                        </p>
                        <MySlider slidesNumber={3} rout="/test">
                            <Box active="active">
                                <div>
                                    <h3>Математика</h3>
                                    <p>5 уровней</p>
                                </div>
                            </Box>
                            <Box>
                                <div>
                                    <h3>Геометрия</h3>
                                    <p>5 уровней</p>
                                </div>
                                <div className='lock'>
                                    <LockOutlined />
                                </div>
                            </Box>
                            <Box>
                                <div>
                                    <h3>Биология</h3>
                                    <p>5 уровней</p>
                                </div>
                                <div className='lock'>
                                    <LockOutlined />
                                </div>
                            </Box>
                            <Box>
                                <div>
                                    <h3>Биология</h3>
                                    <p>5 уровней</p>
                                </div>
                                <div className='lock'>
                                    <LockOutlined />
                                </div>
                            </Box>
                        </MySlider>
                    </BgDetails>
                </Container>
                <Computer />
            </HomeElementsContainer>
            <Faq />
        </div >
    )
}

export const HomeElementsContainer = styled.div`
    padding-top: 170px;
    background: url('images/bg.png') no-repeat center bottom / cover;

    @media (max-width: 767.99px){
        padding-top: 70px;
    }
`
export const BgDetails = styled.div`
    width: 100%;
    background: url(/images/shapes.png) no-repeat center top / contain;
`
export default HomeElements