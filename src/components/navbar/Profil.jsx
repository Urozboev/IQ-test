import React from 'react'
import ProfilAvatar from './ProfilAvatar'
import { FlexContainer } from './Register'
import { SignInBtn } from './SignInComponent'

function Profil() {
    return (
        <FlexContainer>
            <SignInBtn>
                <img className='key-img' src="images/key-img.png" alt="Key image" />
                <span className="user-notice">1</span>
            </SignInBtn>
            <ProfilAvatar />
        </FlexContainer>
    )
}

export default Profil