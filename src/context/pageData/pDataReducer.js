import {
  GET_JSON_DATA,
  GET_SUBDATA,
} from '../type'

export default (state, action) => {
  switch (action.type) {
    case GET_JSON_DATA:
      return {
        pData: action.payload[1],
        dataName: action.payload[0],
        text: action.payload[1][0].text,
      }
    case GET_SUBDATA:
      return {

      }
    default:
      return state;
  }
}