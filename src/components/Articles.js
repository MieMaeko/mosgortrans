import React from 'react';
import Article from './Article';
import img1 from '../assets/images/article1.svg';
import img2 from '../assets/images/article2.svg';
import img3 from '../assets/images/article3.svg';
const obj = [
    {
      key:1,
      id:1,
      title: 'Новое приложение',
      description: 'Мы рады представить новое приложение, которое значительно упростит ваши поездки по городу. Удобные маршруты, точные расписания и актуальная информация о транспорте теперь всегда под рукой. Независимо от того, куда вам нужно добраться, приложение поможет выбрать лучший маршрут и сэкономить ваше время. Получайте информацию о времени отправления, ближайших остановках и возможных пересадках в реальном времени. Уже доступно для скачивания!',
      date: '12.03.2025',
      image: img1
    },
    {
      key:2,
      id:2,
      title: 'Всё для вас!',
      description: 'Сообщаем Вам о запуске новых автобусов, оснащенных современными удобствами для вашего комфорта и безопасности. Эти автобусы улучшат качество перевозок и снизят нагрузку на старые транспортные средства. Также с запуском новых ночных маршрутов теперь можно удобно и безопасно путешествовать по городу в любое время суток. Эти изменения обеспечат вам комфорт и удобство при поездках по Москве, независимо от времени суток.',
      date: '10.03.2025',
      image: img2,
    },
    {
      key:3,
      id:3,
      title: 'Уважайте других!',
      description: 'Помните, что общественный транспорт — это пространство, где каждый из нас должен чувствовать себя комфортно и безопасно. Уважайте личное пространство других пассажиров, уступайте место пожилым людям, инвалидам и тем, кто в этом нуждается. Будьте внимательны и не создавайте лишнего шума. Простой акт вежливости и уважения делает поездку приятной для всех. Давайте вместе сделаем общественный транспорт комфортным и дружелюбным для каждого!',
      date: '14.03.2025',
      image: img3,
    }

]
const news = obj.map(item=>{
    return <Article
    key={item.key}
    id={item.id}
    title={item.title}
    description={item.description}
    date={item.date}
    image={item.image}
    />
})
const Articles = () => {
  return (
    <div>
        {news}
    </div>
  );
}

export default Articles;