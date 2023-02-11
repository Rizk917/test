// import React from "react";
import logo from '../images/logo_transparent.png';

import React, { useState, useEffect } from 'react';
import axios from 'axios';




function NewsCards(props) {
  const [articles, setarticles] = useState([]);


  useEffect(() => {
    loadarticles();
  }, []);

  const loadarticles = async () => {
    const result = await axios.get("https://mobilixbackend.onrender.com/news");
    const sortedArticles = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setarticles(sortedArticles);
  }


  return <div className="scrl-cnt-news" onClick={() => props.setShow(false)}>


    {/* <div className="news-c main-new"> */}
    {articles.map(article => (
      <div className='news-c main-new' key={article.id}>
        <img src={`https://mobilixbackend.onrender.com/${article.image}`} className="logo" alt={article.phoneModels}></img>
        <h5>{article.title}</h5>
        <p className="p">{article.article}</p>

      </div>
    ))}
  </div>





}
export default NewsCards;