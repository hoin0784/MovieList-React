import React from 'react';
import { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
import styles from "../css/Detail.module.css"


export default function Detail() {
  
  const [detail,SetDetail] = useState([]);
  const [loading,SetLoading] = useState(true);

  const {id} = useParams();

  useEffect(()=>{
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res)=>res.json())
      .then((res)=>{
        SetDetail(res.data.movie);
        SetLoading((prev)=>!prev);
      })
  },[]);
  
  return (
    <div>
      {loading ? (
        <div className={styles.loading}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <img className = {styles.background} src={detail.background_image_original} alt={detail.title} />
            <div className={styles.content}>
              <img className={styles.image} src={detail.medium_cover_image} alt={detail.title} />
              <div className={styles.text_box}>
                <h1>Title: {detail.title}</h1>
                <p className={styles.summary}>Summary: {detail.description_intro}</p>
                <ul>Rating: {detail.rating} / 10</ul>
                <ul>Download: {detail.download_count}</ul>
                <ul>Year: {detail.year}</ul>
              </div>
              <a href = {detail.url}> 
                <button className= {styles.button}>Go to Website</button>
              </a>
            </div>
        </div>
      )}
    </div>
  )
}
// rating , download year 

