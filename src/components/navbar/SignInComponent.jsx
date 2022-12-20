import { Button, Checkbox, Form, Input, Modal, Spin } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'

function SignInComponent() {
    const [form] = Form.useForm();
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [buttonDisabledValue, setButtonDisabledValue] = useState(true)
    const [userSignInInfo, setUserSignInInfo] = useState({
        phone_number: '',
        password: '',
        terms_policy: false,
    })

    const handleInputChanged = (ev) => {
        const name = ev.target.name;
        const value = name === 'terms_policy' ? ev.target.checked : ev.target.value
        setUserSignInInfo({
            ...userSignInInfo,
            [name]: value,
        });
    }

    const showModal = () => {
        setOpenSignInModal(true)
    };
    const handleCancel = () => {
        setOpenSignInModal(false);
    };
    const onFinish = (values) => {
        setLoading(true);
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        for (const key in userSignInInfo) {
            if (userSignInInfo[key] !== '') {
                setButtonDisabledValue(false)
            } else {
                setButtonDisabledValue(true)
            }
        }
    }, [userSignInInfo])
    return (
        <>
            <SignInBtn
                name='sign-in'
                onClick={showModal}
            >
                Вход
            </SignInBtn>
            <Modal
                className='my-form'
                title="Войти"
                open={openSignInModal}
                onCancel={handleCancel}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                >
                    <Form.Item
                        label="Phone number"
                        name="phone_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            name="phone_number"
                            onChange={handleInputChanged}
                        />
                    </Form.Item>
                    <Form.Item
                        className='py-0'
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            name="password"
                            onChange={handleInputChanged}
                        />
                    </Form.Item>
                    <Form.Item
                        name="terms_policy"
                        valuePropName="checked"
                    >
                        <Checkbox
                            name='terms_policy'
                            onChange={handleInputChanged}
                        >
                            <CheckText>
                                By creating an account, I agree to our
                                <a href="">Terms of use</a>
                                and
                                <a href="">Privacy Policy</a>
                            </CheckText>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item >
                        <Button
                            loading={loading}
                            htmlType='submit'
                            disabled={buttonDisabledValue}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export const SignInBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 20px 40px;
    filter: drop-shadow(0px 4px 31px rgba(0, 0, 0, 0.15));
    font-weight: 700;
    font-size: 15px;
    line-height: 27px;
    color: #FFFFFF;
    border: none;
    background: transparent;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 992px) {
        padding: 16px 35px;
        line-height: 16px;
    }
    @media (max-width: 768px) {
        padding: 10px 20px;
        font-size: 14px;
        line-height: 16px;
    }
`;

const CheckText = styled.p`
    font-family: 'Raleway';
    max-width: 350px;
    color: #333333;

    a {
        font-family: 'Raleway';
        color: #333333;
        margin: 0 5px;
    }
`

export default SignInComponent