import MyNavbar from './components/navbar/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import styled from 'styled-components';

function App() {
  return (
    <BgContainer>
      <MyNavbar />
    </BgContainer>
  )
}

const BgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('images/bg.png') no-repeat center top / cover;
`

export default App

