import {
    LockOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons'
import { Container } from 'react-bootstrap'
import Box from '../home/Box'
import { BgDetails } from '../home/HomeElements'
import MySlider from '../home/MySlider'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Checkbox, Progress } from 'antd'
import { LetterBtn, TestBg } from '../test/Test'
import TableInfo from './TableInfo'

function Result() {
    const navigate = useNavigate()
    return (
        <div className='pb-5'>
            <TestBg>
                <Container>
                    <BgDetails className="bg-details">
                        <h1 className='home-title'>
                            Математика
                        </h1>
                        <p className='home-description'>
                            Most calendars are designed for teams. Slate is designed for
                            freelancers who want a simple way to plan their schedule.
                        </p>
                        <MySlider
                            slidesNumber={3}
                        >
                            <Box
                                onClick={() => navigate('/test')}
                                active="active"
                            >
                                <div>
                                    <h3>Математика</h3>
                                    <p>5 уровней</p>
                                </div>
                            </Box>
                            <Box
                                onClick={() => navigate('/test')}
                            >
                                <div>
                                    <h3>Геометрия</h3>
                                    <p>5 уровней</p>
                                </div>
                                <div className='lock'>
                                    <LockOutlined />
                                </div>
                            </Box>
                            <Box
                                onClick={() => navigate('/test')}
                            >
                                <div>
                                    <h3>Биология</h3>
                                    <p>5 уровней</p>
                                </div>
                                <div className='lock'>
                                    <LockOutlined />
                                </div>
                            </Box>
                            <Box
                                onClick={() => navigate('/test')}
                            >
                                <div>
                                    <h3>Биология</h3>
                                    <p>5 уровней</p>
                                </div>
                                <div className='lock'>
                                    <LockOutlined />
                                </div>
                            </Box>
                            <Box
                                onClick={() => navigate('/test')}
                            >
                                <div>
                                    <h3>Биология</h3>
                                    <p>5 уровней</p>
                                </div>
                                <div className='lock'>
                                    <LockOutlined />
                                </div>
                            </Box>
                            <Box
                                onClick={() => navigate('/test')}
                            >
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
            </TestBg>
            <Container className='my-container'>
                <div className="row">
                    <div className="col-9 col-lg-10">
                        <div className="test-question-parent">
                            <div className="test-question active">
                                <h5 className="test-question-number">1</h5>
                                <div className="test-question-images-box">
                                    <img src="/images/user.png" alt="" />
                                </div>
                            </div>
                            <div className="test-question">
                                <h5 className="test-question-number">1</h5>
                                <div className="test-question-images-box">
                                    <LockOutlined />
                                </div>
                            </div>
                            <div className="test-question">
                                <h5 className="test-question-number">1</h5>
                                <div className="test-question-images-box">
                                    <LockOutlined />
                                </div>
                            </div>
                            <div className="test-question">
                                <h5 className="test-question-number">1</h5>
                                <div className="test-question-images-box">
                                    <LockOutlined />
                                </div>
                            </div>
                            <div className="test-question">
                                <h5 className="test-question-number">1</h5>
                                <div className="test-question-images-box">
                                    <LockOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-2">
                        <div className="answers-number text-end">
                            <img
                                className="answers-number-img"
                                src="/images/key-gray.png"
                                alt=""
                            />
                            <p className="answers-number-num">1</p>
                        </div>
                        <div className="answers-info text-end">
                            <p className="answers-info-author">John Doe</p>
                            <h5 className="answers-info-title">John Doe</h5>
                        </div>
                    </div>
                </div>

                <div className="shadow-box">
                    <h3 className='letters-change-title'>Наберите слово</h3>
                    <TableInfo />
                </div>
            </Container>
        </div>
    )
}
export default Result
