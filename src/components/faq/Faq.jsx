import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import FaqQuestions from './FaqQuestions'

function Faq() {
    return (
        <FaqContainer>
            <Container className='my-container'>
                <FaqTitle>FAQ</FaqTitle>
                <FaqQuestions />
            </Container>
        </FaqContainer>
    )
}

const FaqContainer = styled.div`
    padding: 100px 0 200px;

    @media (max-width: 767.99px) {
        padding: 60px 0 80px
    }
`

const FaqTitle = styled.h2`
    font-weight: 400;
    font-size: 46px;
    line-height: 57px;
    letter-spacing: 0.2px;
    color: #000000;
    margin-bottom: 64px;
    text-align: center;

    @media (max-width: 767.99px) {
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 30px;
    }
`

export default Faq
