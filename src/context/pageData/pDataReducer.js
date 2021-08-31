import { GET_JSON_DATA } from '../type'

export default (state, action) => {
  switch (action.type) {
    case GET_JSON_DATA:
      return {
        pData: action.payload[1],
        dataName: action.payload[0],
      }
    default:
      return state;
  }
}