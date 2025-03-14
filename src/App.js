import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import bus from './assets/images/busdraw.svg';
import Articles from './components/Articles';
function App() {
  const adv = [
    {
      icon:'eead',
      title:'',
      description:'11'
    },
    {
      icon:'eead',
      title:'',
      description:'12'
    },
    {
      icon:'eead',
      title:'',
      description:'13'
    }
  ]
  const advantages = adv.map(block=>{
    return <div className='block'>
        {/* <i>{block.icon}</i> */}
        <h4>{block.title}</h4>
        <p>{block.description}</p>
    </div>
  })
  return (
    <div>
      <Header/>
      <main>
        <div className='mainBlock'>
          <div className='mainBlock_img'>
              <img src={bus} alt='bus'/>
          </div>
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
        </div>
        <section>
          <div>МОСГОРТРАНС</div>
          <div>МОСГОРТРАНС</div>
          <div>МОСГОРТРАНС</div>
          <div>МОСГОРТРАНС</div>
          <div>МОСГОРТРАНС</div>
        </section>
        <div className='newsBlock'>
          <h2>Новости</h2>
          <Articles/>
        </div>
        <div className='advantages'>
          {advantages}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
