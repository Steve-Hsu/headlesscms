import { GET_NAVBAR_TITLES } from '../type'

export default (state, action) => {
  switch (action.type) {
    case GET_NAVBAR_TITLES:
      return {
        route_1: action.payload[Object.keys(action.payload)[0]],
        route_2: action.payload[Object.keys(action.payload)[1]],
        didGetRoutes: true,
      }
    default:
      return state;
  }
}