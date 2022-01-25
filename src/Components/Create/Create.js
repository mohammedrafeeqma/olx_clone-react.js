import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FireBaseContext,AuthContext } from '../../store/Context'

const Create = () => {
  const {firebase} = useContext(FireBaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage]= useState(null)

  const handleSubmit=()=>{

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number"
              id="fname"
               name="Price" 
               value={price}
               onChange={(e)=>{setPrice(e.target.value)}}
               />
            <br />
        
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          
            <br />
            <input
            onChange={(e)=>{
              setImage(e.target.files[0])
            }}
             type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
