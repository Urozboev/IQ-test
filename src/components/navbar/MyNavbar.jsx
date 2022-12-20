import { useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Profil from './Profil';
import Register from './Register';

function MyNavbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [register, setRegister] = useState(false);
    return (
        <NavbarFluid>
            <Container className='my-container d-flex align-items-center justify-content-between py-1'>
                <nav className="my-navbar">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="my-navbar-toggle"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`my-navbar-list ${showMenu && 'active'}`}>
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className='close-btn'
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <Link className='nav-link' to="/">Главная</Link>
                        <Link className='nav-link' to="/faq">FAQs</Link>
                        <Link className='nav-link' to="/contact">Контакты</Link>
                        <Link className='nav-link' to="/result">Результаты</Link>
                    </ul>
                </nav>
                <FlexContainer>
                    <Dropdown className="lang-dropdown">
                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                            <img
                                className='lang-icon'
                                src="images/lang-icon.png"
                                alt="language image"
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item className="active">O'zbekcha</Dropdown.Item>
                            <Dropdown.Item href="#">Русский</Dropdown.Item>
                            <Dropdown.Item href="#">English</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {register ? <Profil /> : <Register />}
                </FlexContainer>
            </Container>
        </NavbarFluid>
    )
}

const NavbarFluid = styled.div`
background: #1E1E1E;
`

const FlexContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: end;
    @media (max-width: 767.99px) {
        padding: 9px 0;
    }
`

export default MyNavbar