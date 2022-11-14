import axios from "axios"
import { useEffect, useState } from "react"
import "./App.css"
import UsersList from "./components/UsersList"
import UsersForm from "./components/UsersForm"
import Clockloader from "react-spinners/Clockloader"

function App() {
   const [users, setUsers] = useState([])
   const [userSelected, setUserSelected] = useState(null)
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
      }, 3000)
   }, [])

   useEffect(() => {
      axios
         .get("https://users-crud1.herokuapp.com/users/")
         .then((res) => setUsers(res.data))
   }, [])

   const getUsers = () => {
      axios
         .get("https://users-crud1.herokuapp.com/users/")
         .then((res) => setUsers(res.data))
   }

   const selectUser = (user) => {
      setUserSelected(user)
   }

   const deselectUser = () => setUserSelected(null)

   console.log(userSelected)

   return (
      <div className="App">
         {loading ? (
            <div className="loader">
               <Clockloader
                  color={"white"}
                  loading={loading}
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
               />
            </div>
         ) : (
            <div className="users-form">
               <UsersForm
                  getUsers={getUsers}
                  userSelected={userSelected}
                  deselectUser={deselectUser}
               />

               <UsersList
                  users={users}
                  selectUser={selectUser}
                  getUsers={getUsers}
               />
            </div>
         )}
      </div>
   )
}

export default App
