import styled from 'styled-components'
import Box from '../home/Box'
import { LockOutlined } from '@ant-design/icons'
import MySlider from '../home/MySlider'

function Display() {
    return (
        <div className='display'>
            <DisplayBg>
                <div className="container">
                    <MySlider
                        slidesNumber={3}
                    >
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
                </div>
            </DisplayBg>
        </div>
    )
}

export const DisplayBg = styled.div`
    width: 100%;
    padding-top: 50px;
    position: relative;

    &::after {
        content: '';
        width: 70%;
        height: 100px;
        background: #1E1E1E;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 0 0 100px 100px;
        z-index: 0;
    }
`

export default Display
