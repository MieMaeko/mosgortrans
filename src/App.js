import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import bus from './assets/images/bus.svg';
function App() {
  return (
    <div>
      <Header/>
      <main>
        <div className='mainBlock'>
            <div className='mainBlock_text'>
              <p>
                <span className='mainBlock_first'>Ваш путь по Москве начинается с нами! </span>
                <br/> 
                <span className='mainBlock_second'>Мы обеспечим вам <span className='textblue'>надёжность и удобство</span> на каждом маршруте.</span>
                </p>
              <ul className='mainBlock_ul'>
                <li><div className='block'/>Современная инфраструктура</li>
                <li><div className='block'/>Быстрое время ожидания</li>
                <li><div className='block'/>Интеграция с городскими сервисами</li>
                <li><div className='block'/>Безопасность и комфорт</li>
              </ul>
            </div>
            <div className='mainBlock_img'>
              <div class="circle"></div>
              <img src={bus} alt='bus'/>
            </div>
        </div>
        <section>
          <div>МОСГОРТРАНС</div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
