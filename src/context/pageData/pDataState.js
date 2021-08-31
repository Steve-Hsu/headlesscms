// import axios from 'axios';
import React, { useReducer } from 'react';
import PDataContext from './pDataContext';
import pDataReducer from './pDataReducer';
import { GET_JSON_DATA } from '../type'
import books from '../../books.json'
import bios from '../../bios.json'

const PDataState = (props) => {
  const initialState = {
    pData: null,
    dataName: null,
  }


  const [state, dispatch] = useReducer(pDataReducer, initialState);
  const { pData, dataName } = state;

  const getPData = async (name) => {
    let data;
    if (!name) return;
    // https://github.com/Bounteous-Inc/headless-cms-assessment/blob/main/books.json
    // const JSON = await axios.get(`https://github.com/Bounteous-Inc/headless-cms-assessment/blob/main/${name.toLowerCase()}.json`);
    // const JSON = await axios.get(`https://github.com/Bounteous-Inc/headless-cms-assessment/blob/main/books.json`);
    // const JSON = await axios.get(__dirname + 'books.json');
    switch (name) {
      case 'Books':
        data = books;
        break;
      case 'Bios':
        data = bios;
        break;
      default:
    }

    if (!data) {
      return dispatch({ type: GET_JSON_DATA, payload: [name, 'empty'] });
    }
    return dispatch({ type: GET_JSON_DATA, payload: [name, data] });
  }


  return (
    <PDataContext.Provider
      value={{
        pData,
        dataName,
        getPData
      }}
    >
      {props.children}
    </PDataContext.Provider>
  )
}
export default PDataState;