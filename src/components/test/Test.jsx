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

function Test() {
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
                            slidesNumber={5}
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
                    <Progress percent={0} showInfo={false} />
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="question-image">
                                <QuestionCircleOutlined />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="question">
                                <h5 className="question-title">Standart</h5>
                                <p className="question-text">
                                    Полыхающая спальня, крики младшего брата и безумные глаза отца – душераздирающие <Link>Файл:HTML</Link> воспоминания Дина Винчестера.
                                </p>
                                <p className="question-text">
                                    После исчезновения папы, который отправился на охоту и не вернулся, им приходится объединиться и организовать большое путешествие по стране. Оставленный без присмотра дневник, где находятся важные записи, служит для них компасом, указывающим верное направление. Трудностей возникает много, но взаимовыручка и братство по крови помогают им выпутываться из самых сложных передряг <Link>Файл:CSS</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form action="" className='variants-form'>
                        <div className="variants">
                            <div className="variant">
                                <Checkbox>Bot</Checkbox>
                            </div>
                            <div className="variant">
                                <Checkbox>Android</Checkbox>
                            </div>
                            <div className="variant">
                                <Checkbox>FrontEnd</Checkbox>
                            </div>
                            <div className="variant">
                                <Checkbox>BackEnd</Checkbox>
                            </div>
                        </div>
                        <div className="time-submit">
                            <div className="time-box">
                                <i className="fal fa-stopwatch"></i>
                                <div className="time">
                                    00:15
                                </div>
                            </div>
                            <button type='button' className="hint-btn">
                                Подсказка
                                <img src="/images/key-gray.png" alt="" />
                            </button>
                            <button className="submit-btn">
                                Далее
                            </button>
                        </div>
                    </form>
                </div>

                <div className="shadow-box">
                    <Progress percent={50} showInfo={false} />
                    <div className="row align-items-end">
                        <div className="col-12 col-lg-4">
                            <div className="question-image">
                                <img src="/images/user.png" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="letters-box">
                                <div className="letters-text">
                                    Буквы которые можно использовать:
                                </div>
                                <div className="letters-items">
                                    <LetterBtn>A</LetterBtn>
                                    <LetterBtn>A</LetterBtn>
                                    <LetterBtn>A</LetterBtn>
                                    <LetterBtn>A</LetterBtn>
                                    <LetterBtn>B</LetterBtn>
                                    <LetterBtn>B</LetterBtn>
                                    <LetterBtn>B</LetterBtn>
                                    <LetterBtn>B</LetterBtn>
                                    <LetterBtn>C</LetterBtn>
                                    <LetterBtn>C</LetterBtn>
                                    <LetterBtn>C</LetterBtn>
                                    <LetterBtn>C</LetterBtn>
                                </div>
                            </div>
                            <div className="letters-change">
                                <h3 className='letters-change-title'>Наберите слово</h3>
                                <div className="changed-box">
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                    <div
                                        contentEditable={true}
                                        className="change-input"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" className='variants-form'>
                        <div className="variants">
                            <div className="variant">
                                <Checkbox>Bot</Checkbox>
                            </div>
                            <div className="variant">
                                <Checkbox>Android</Checkbox>
                            </div>
                            <div className="variant">
                                <Checkbox>FrontEnd</Checkbox>
                            </div>
                            <div className="variant">
                                <Checkbox>BackEnd</Checkbox>
                            </div>
                        </div>
                        <div className="time-submit">
                            <div className="time-box">
                                <i className="fal fa-stopwatch"></i>
                                <div className="time">
                                    00:15
                                </div>
                            </div>
                            <button type='button' className="hint-btn">
                                Подсказка
                                <img src="/images/key-gray.png" alt="" />
                            </button>
                            <button className="submit-btn">
                                Далее
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}
export const TestBg = styled.div`
    padding-top: 170px;
    background: url('images/test_bg.png') no-repeat center -70px / cover;
`

export const LetterBtn = styled.button`
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.1px;
    color: #000000;

    &:not(:last-child) {
        margin-right: 30px;
    }
`
export default Test
