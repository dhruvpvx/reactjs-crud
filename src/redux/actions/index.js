import axios from "axios"
import { ALL_DATA, SINGLE_USER } from "../types"

const istance = axios.create({
  baseURL: "https://gorest.co.in/public/v2"
})

export const getData = () => async dispatch => {
  try {
    const { data } = await istance.get('/users')
    dispatch({ type: ALL_DATA, payload: data})
  } catch (err) {

  }
}

export const getUser = id => async dispatch => {
  try {
    const { data } = await istance.get(`/users/${id}`)
    dispatch({ type: SINGLE_USER, payload: data })
  } catch (err) {

  }
}