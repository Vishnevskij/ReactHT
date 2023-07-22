import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../contexts/MainContext";



export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const {setMaxUserNumbers, maxUserNumbers} = useContext(MainContext)!; 
  
  
  
  

  // first render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  }, []);

  // users re-render
  useEffect(() => {}, [users]);

  // all re-renders (not really usable)
  useEffect(() => {});

setMaxUserNumbers(6);


  
  //   const iterateOverObject = () => {}
  
  return (
    
    <div>
      <h2>Users</h2>
      {users.slice(0, maxUserNumbers).map((user, i) => (
        <div key={`${user.name}-${i}`} className="user-card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          {Object.values(user.company).map((data: any, i) => (
            <p key={`${data}-${i}`}>{data}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
