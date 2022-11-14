import axios from "axios"
import React from "react"

const UsersList = ({ users, selectUser, getUsers }) => {
   const deleteUser = (id) => {
      axios
         .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
         .then(() => getUsers())
   }
   const colors = [
      "#00B62F",
      "#56C58A",
      "#F800FF",
      "#FF00B7",
      "#FF5279",
      "#0087FF",
   ]
   const randomColor = Math.floor(Math.random() * colors.length)
   document.body.style = `background: ${colors[randomColor]}`
   return (
      <div className="users-list">
         {/* <h1>Users List</h1> */}
         <ul>
            {users.map((user) => (
               <li
                  key={user.id}
                  className="card"
                  style={{ color: colors[randomColor] }}
               >
                  {user.name}
                  <div>{user.first_name}</div>
                  <div>{user.last_name}</div>
                  <div>{user.email}</div>
                  <div>
                     <b>
                        <i className="fa-solid fa-cake-candles"></i>
                     </b>
                     {user.birthday}
                  </div>
                  <button
                     onClick={() => selectUser(user)}
                     style={{ color: colors[randomColor] }}
                     className="select-user"
                  >
                     <i className="fa-solid fa-pencil edit-btn"></i>
                  </button>
                  <button
                     onClick={() => deleteUser(user.id)}
                     className="delete-user"
                  >
                     <i className="fa-solid fa-trash delete-btn"></i>
                  </button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default UsersList
