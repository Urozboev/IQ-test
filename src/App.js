import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import 'swiper/css';
import styled from 'styled-components';
import MyNavbar from './components/navbar/MyNavbar';
import HomeElements from './components/home/HomeElements';
import Test from './components/test/Test';
import Footer from './components/footer/Footer';
import Result from './components/result/Result';
import Cabinet from './components/cabinet/Cabinet';

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<HomeElements />} />
        <Route path='/test' element={<Test />} />
        <Route path='/result' element={<Result />} />
        <Route path='/cabinet' element={<Cabinet />} />
        <Route path='/contact' element={<HomeElements />} />
      </Routes>
      <Footer />
    </div>
  )
}

export const BgContainer = styled.div`
  width: 100%;
  // min-height: 100vh;
  // background: url('images/bg.png') no-repeat center top / cover;
`

export default App

