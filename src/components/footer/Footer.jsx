import { Container } from 'react-bootstrap'
import {
    MailOutlined,
    PhoneOutlined,
    InstagramOutlined,
    TwitterOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    YoutubeOutlined
} from '@ant-design/icons'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterBox>
            <Container className='my-container'>
                <FooterContent>
                    <MailBox href='#'>
                        <MailOutlined />
                        <p>info@Teamwork.com</p>
                    </MailBox>
                    <PhoneBox href='#'>
                        <PhoneOutlined />
                        <p>+998 97 750-00-04</p>
                    </PhoneBox>
                    <MessengersBox>
                        <MessengerLink href='#'>
                            <InstagramOutlined />
                        </MessengerLink>
                        <MessengerLink href='#'>
                            <TwitterOutlined />
                        </MessengerLink>
                        <MessengerLink href='#'>
                            <FacebookOutlined />
                        </MessengerLink>
                        <MessengerLink href='#'>
                            <LinkedinOutlined />
                        </MessengerLink>
                        <MessengerLink href='#'>
                            <YoutubeOutlined />
                        </MessengerLink>
                    </MessengersBox>
                </FooterContent>
            </Container>
        </FooterBox>
    )
}

const FooterBox = styled.footer`
    padding: 20px 0;
    background: #1e1e1e;
`;

const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const MailBox = styled.a`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    color: #71717A;
    text-decoration: none;
    // width: calc(100% / 3);

    @media (max-width: 767.99px) {
        width: calc(100% / 2);
        margin-bottom: 10px;
    }

    @media (max-width: 575.99px) {
        width: calc(100% / 1);
    }

    &:hover {
        color: #91909A;
    }

    span {
        font-size 18px;
    }

    p {
        margin: 0 0 0 10px;
    }
`

const PhoneBox = styled.a`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    color: #71717A;
    text-decoration: none;
    // width: calc(100% / 3);

    @media (max-width: 767.99px) {
        width: calc(100% / 2);
        justify-content: end;
        margin-bottom: 10px;
    }

    @media (max-width: 575.99px) {
        width: calc(100% / 1);
        justify-content: start;
    }

    &:hover {
        color: #91909A;
    }

    span {
        font-size 18px;
    }

    p {
        margin: 0 0 0 12px;
    }
`

const MessengersBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 767.99px) {
        width: calc(100% / 1);
        justify-content: center;
    }

    @media (max-width: 575.99px) {
        width: calc(100% / 1);
        justify-content: start;
    }
`

const MessengerLink = styled.a`
    color: #71717A;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:first-child) {
        margin-left: 20px;
    }
`

export default Footer
