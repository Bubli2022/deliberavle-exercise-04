import axios from "axios"
import React, { useEffect } from "react"

import { useForm } from "react-hook-form"

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
   const { register, handleSubmit, reset } = useForm()

   useEffect(() => {
      if (userSelected) {
         reset(userSelected)
      }
   }, [userSelected])

   const submit = (data) => {
      if (userSelected) {
         axios
            .put(
               `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
               data
            )
            .then(() => getUsers())
      } else {
         //user create
         axios
            .post("https://users-crud1.herokuapp.com/users/", data)
            .then(() => getUsers())
            .catch((error) => console.log(error.response))
      }
      clear()
   }
   const clear = () => {
      reset({
         first_name: "",
         last_name: "",
         email: "",
         password: "",
         birthday: "",
      })
      deselectUser()
   }

   return (
      <div>
         <form onSubmit={handleSubmit(submit)}>
            <h2>New User</h2>
            <div className="input-container">
               <label htmlFor="first_name">first_name</label>
               <input type="text" id="first_name" {...register("first_name")} />
            </div>
            <div className="input-container">
               <label htmlFor="last_name">last_name</label>
               <input type="text" id="last_name" {...register("last_name")} />
            </div>
            <div className="input-container">
               <label htmlFor="email">email</label>
               <input type="text" id="email" {...register("email")} />
            </div>
            <div className="input-container">
               <label htmlFor="password">password</label>
               <input type="password" id="password" {...register("password")} />
            </div>
            <div className="input-container">
               <label htmlFor="birthday">birthday</label>
               <input type="date" id="birthday" {...register("birthday")} />
            </div>
            <button className="submit">submit</button>
            <button onClick={clear} type="button" className="clear">
               clear
            </button>
         </form>
      </div>
   )
}

export default UsersForm
