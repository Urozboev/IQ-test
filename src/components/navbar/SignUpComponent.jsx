import { Button, Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components'

function SignUpComponent() {
    const [form] = Form.useForm();
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [buttonDisabledValue, setButtonDisabledValue] = useState(true)
    const [userSignUpInfo, setUserSignUpInfo] = useState({
        username: '',
        lastname: '',
        phone_number: '',
        password: '',
    })

    const handleInputChanged = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;
        setUserSignUpInfo({ ...userSignUpInfo, [name]: value });
    }

    const showModal = () => {
        setOpenSignUpModal(true);
    };
    const handleCancel = () => {
        setOpenSignUpModal(false);
    };
    const onFinish = (values) => {
        setLoading(true);
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        let i = 0;
        for (const key in userSignUpInfo) {
            i++
            if (userSignUpInfo[key] != '' && i > 3) {
                setButtonDisabledValue(false)
            }
        }
    }, [userSignUpInfo])

    return (
        <>
            <SignUpBtn
                onClick={showModal}
            >
                Регистрация
            </SignUpBtn>
            <Modal
                className='my-form'
                title="Создать аккаунт"
                open={openSignUpModal}
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
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input
                            name="username"
                            onInput={handleInputChanged}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Lastname"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your lastname!',
                            },
                        ]}
                    >
                        <Input
                            name="lastname"
                            onInput={handleInputChanged}
                        />
                    </Form.Item>
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
                            onInput={handleInputChanged}
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
                            onInput={handleInputChanged}
                        />
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

export const SignUpBtn = styled.button`
    padding: 18px 60px;
    background: #00B6F0;
    box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    border: none;

    @media (max-width: 992px) {
        padding: 16px 35px;
    }
    @media (max-width: 768px) {
        padding: 10px 20px;
        font-size: 14px;
    }
`

export default SignUpComponent