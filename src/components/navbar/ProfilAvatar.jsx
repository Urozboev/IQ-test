import { Avatar } from 'antd';
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

function ProfilAvatar() {
    return (
        <div>
            <Dropdown className="profil-avatar">
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <FlexContainer>
                        <span className="user-name">Muhammad</span>
                        <Avatar size={50} src={'images/user.png'} />
                    </FlexContainer>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href='#'>Kabinet</Dropdown.Item>
                    <Dropdown.Item href="#">Chiqish</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;

    .user-name {
        margin-right: 10px;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        text-align: right;
        color: #FFFFFF;
        text-transform: uppercase;
    }
`

export default ProfilAvatar