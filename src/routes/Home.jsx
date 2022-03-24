import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserCard from '../components/UserCard'
import { getData } from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.data)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div>
      <button onClick={() => navigate('/add')}>Add User</button>
      <table className="ui basic table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(item => {
            return <UserCard {...item} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home