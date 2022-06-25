import React, {useState, useEffect, Suspense} from 'react';
import axios from 'axios';
const UserCard = React.lazy(() => import("./UserCard"));

function GetAllUsers() {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fecthUsers= async()=>{
           const response = await axios.get(`https://randomuser.me/api/?results=50`)
           console.log(response)

           setUsers(response.data.results)
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
            <div>Grid / List
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
            </div>
        </Suspense>
    </>
  )
}

export default GetAllUsers