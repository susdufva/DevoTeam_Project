import React from 'react'

function UserCard( {firstName, lastName, city, image} ) {
  return (
    <>
    <div>UserCard</div>
    <h1 className="">{firstName}</h1>
    <h2> {lastName} </h2>
    <img className="" src={image} alt="user" />
    <div>{city}</div>
    </>
  )
}

export default UserCard