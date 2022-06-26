import React, {useState, useEffect, Suspense} from 'react';
import axios from 'axios';
import Sort from './Sort'
const UserCard = React.lazy(() => import("./UserCard"));


function GetAllUsers() {

    const [users, setUsers] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(()=>{
        const fecthUsers= async()=>{
           const response = await axios.get(`https://randomuser.me/api/?results=50`)
           console.log(response)

           setUsers(response.data.results)
           setNames(response.data.results)

        }

        fecthUsers();
        
    }, [])
      

  return (
    <>
        <Suspense
            fallback={ //fallback while waiting on the users to load
            <div className=" ">
                Loading...
            </div>
            }
        >
            <div className='grid'>
            
                {users.map((user) =>{
                    return(
                        <UserCard 
                            key={user.id} 
                            firstName={user.name.first} 
                            lastName={user.name.last} 
                            city={user.location.city} 
                            image={user.picture.medium} />
                    )
                })}

                    {names.map((name) =>{
                    return(
                        <Sort 
                            key={name.id} 
                            firstName={name.name.first} 
                         />
                    )
                })}
            </div>
        </Suspense>
    </>
  )
}

export default GetAllUsers