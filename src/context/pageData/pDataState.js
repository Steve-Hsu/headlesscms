import axios from 'axios';
import React, { useReducer } from 'react';
import PDataContext from './pDataContext';
import pDataReducer from './pDataReducer';
import {
  GET_JSON_DATA,
  GET_SUBDATA
} from '../type'
import books from '../../books.json'
import bios from '../../bios.json'

const PDataState = (props) => {
  const initialState = {
    pData: null,
    dataName: null,
    text: null,
  }


  const [state, dispatch] = useReducer(pDataReducer, initialState);
  const { pData, dataName, text } = state;

  const getPData = async (name) => {
    // let data;
    if (!name) return;
    if (name === 'default_1' || name === 'default_2') return;
    const JSON = await axios.get(`https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/${name.toLowerCase()}.json`);

    if (!JSON.data) {
      return dispatch({ type: GET_JSON_DATA, payload: [name, 'empty'] });
      // return getSubData();
    }
    return dispatch({ type: GET_JSON_DATA, payload: [name, JSON.data] });
  }

  const getSubData = () => {
    if (pData) {
      return dispatch({ type: GET_SUBDATA, payload: pData });
    }
  }


  return (
    <PDataContext.Provider
      value={{
        pData,
        dataName,
        text,
        getPData
      }}
    >
      {props.children}
    </PDataContext.Provider>
  )
}
export default PDataState;