import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCard = ({ id, name }) => {
  const navigate = useNavigate()
  const handleShow = () => {
    navigate(`/show/${id}`)
  }
  return (
    <tr>
      <th>{id}</th>
      <th>{name}</th>
      <th>
        <button onClick={handleShow} class="ui inverted green button">
          Show
        </button>
        <button class="ui inverted blue button">
          Edit
        </button>
        <button class="ui inverted red button">
          Delete
        </button>
      </th>
    </tr>
  )
}

export default UserCard