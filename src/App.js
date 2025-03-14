import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import bus from './assets/images/busdraw.svg';
import Articles from './components/Articles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPeopleGroup, faClock } from '@fortawesome/free-solid-svg-icons'; 
import { faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons'; 

function App() {
  const adv = [
    {
      icon: faLeaf,
      description:'Внедрение электробусов в парк, что способствует значительному снижению выбросов вредных веществ и улучшению экологической ситуации в городе.'
    },
    {
      icon:faPeopleGroup,
      description:'Каждый день Мосгортранс перевозят более 8 миллионов пассажиров, обеспечивая удобство и безопасность на всех маршрутах города!'
    },
    {
      icon: faClock,
      description:'Гарантия минимального времени ожидания и точного соблюдения расписания, чтобы каждое ваше путешествие было максимально удобным и быстрым.' }
  ]
  const advantages = adv.map(block=>{
    return <div className='block'>
        <div className='block_text'>
          <FontAwesomeIcon icon={block.icon} className='icons'/>
          <p>{block.description}</p>
        </div>
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
                <li><div className='block_li'/>Современная инфраструктура</li>
                <li><div className='block_li'/>Быстрое время ожидания</li>
                <li><div className='block_li'/>Интеграция с городскими сервисами</li>
                <li><div className='block_li'/>Безопасность и комфорт</li>
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
        <div className='last_block'>
          <div className='advantages'>
            {advantages}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
