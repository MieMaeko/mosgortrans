import React from 'react';

function Article({key,id,title,description,date,image}){
    return <div className='article' key={key}>
        <img src={image} alt={title}/>
        <div className='article_text'>
            <h5>{title}</h5>
            <p className='date'>{date}</p>
            <p className='description'>{description}</p>
        </div>
    </div>
}

export default Article;