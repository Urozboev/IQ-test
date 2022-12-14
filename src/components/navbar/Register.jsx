import styled from 'styled-components'
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';

function Register() {
    return (
        <FlexContainer>
            <SignInComponent></SignInComponent>
            <SignUpComponent></SignUpComponent>
        </FlexContainer>
    )
}

export const FlexContainer = styled.div`
    display: flex;
    align-items:center;
`;

export default Register