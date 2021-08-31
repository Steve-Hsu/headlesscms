import axios from 'axios';
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
    // let data;
    if (!name) return;
    if (name === 'default_1' || name === 'default_2') return;
    const JSON = await axios.get(`https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/${name.toLowerCase()}.json`);

    if (!JSON) {
      return dispatch({ type: GET_JSON_DATA, payload: [name, 'empty'] });
    }
    return dispatch({ type: GET_JSON_DATA, payload: [name, JSON] });
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