import React, { Component } from 'react';
import ErrorImg from './noimage.png'
export default function Movies({item}) {
  return(
    // <div style={{minHeight:214, width:150}}>
    //   <img src={item.Poster} style={{height:214, width:150, objectFit:'cover'}} />
    //   <h6 className='m-0 mt-2'>{item.Title}</h6>
    //   <small className='text-muted'>{item.Year}</small>
    // </div>
    <div className="card shadow  bg-body rounded" style={{width: '14rem'}}>
    <img src={item.Poster} class="card-img-top" alt="..." style={{height: '300px'}} onError={(e)=>{e.target.onerror = null  ; e.target.src= ErrorImg}}/>
    <div className="card-body">
      <p className="card-text">{item.Title} <span className="badge bg-secondary">{item.Year}</span></p>
    </div>
  </div>
  )
}