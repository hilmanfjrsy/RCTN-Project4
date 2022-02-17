import React, { Component } from 'react';

export default function Movies({item}) {
  return(
    <div style={{minHeight:214, width:150}}>
      <img src={item.Poster} style={{height:214, width:150, objectFit:'cover'}} />
      <h6 className='m-0 mt-2'>{item.Title}</h6>
      <small className='text-muted'>{item.Year}</small>
    </div>
  )
}