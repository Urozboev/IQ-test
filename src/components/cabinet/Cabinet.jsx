import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TestBg } from '../test/Test'

function Cabinet() {
    return (
        <CabinetContainer>
            <TestBg>
                <Container className='my-container'>
                    <CloseButton>
                        <i className="fal fa-angle-left"></i>
                        Выйти
                    </CloseButton>
                    <div className="shadow-box mt-0">
                        <div className="row align-items-stretch">
                            <div className="col-12 col-lg-4">
                                <div className="question-image">
                                    <img src="/images/user.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-8">
                                <div className="user">
                                    <div className="user-infoBox">
                                        <p className="user-type">Имя</p>
                                        <h3 className="user-info">
                                            Muhammad Hudayberdiyev
                                        </h3>
                                    </div>
                                    <div className="user-infoBox">
                                        <p className="user-type">Статус</p>
                                        <h3 className="user-info">
                                            Школьник
                                        </h3>
                                    </div>
                                    <div className="user-infoBox">
                                        <p className="user-type">Номер телефона</p>
                                        <h3 className="user-info">
                                            + 998 (33) 408-28-08
                                        </h3>
                                    </div>
                                    <UserEditButton>
                                        Редактировать
                                        <i className="fad fa-pen-alt"></i>
                                    </UserEditButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </TestBg>
        </CabinetContainer>
    )
}

const CabinetContainer = styled.div`
    padding: 0 0 100px;
`

const CloseButton = styled.button`
    padding: 15px 30px;
    background: #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.1px;
    color: #A0A0A0;
    display: flex;
    align-items: center;

    i {
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        margin-right: 10px;
    }
`

const UserEditButton = styled(CloseButton)`
    background: #00B6F0;
    box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
    border: none;
    padding: 18px 60px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    margin-bottom: 0;

    @media (max-width: 767.99px) {
        display: block;
        width: 100%;
        text-align: center;
        padding: 15px 40px;
    }

    i {
        margin-left: 20px;

        @media (max-width: 767.99px) {
            margin-left: 10px;
        }
    }
`

export default Cabinet
