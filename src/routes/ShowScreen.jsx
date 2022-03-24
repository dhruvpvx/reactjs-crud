import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUser } from '../redux/actions'

const ShowScreen = () => {
  const { id } = useParams()
  const { showData } = useSelector(state => state.data)
  const dispatch = useDispatch()

  const getData = () => (
    <tr>
      <th>{showData.id}</th>
      <th>{showData.name}</th>
      <th>{showData.gender}</th>
      <th>{showData.email}</th>
      <th>{showData.status}</th>
    </tr>
  )
  useEffect(() => {
    dispatch(getUser(id))
    console.log(showData)
  }, [])
  return (
    <table className="ui basic table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {showData && getData()}
      </tbody>
    </table>
  )
}

export default ShowScreen