import { useState } from "react";
import { useEffect } from "react";
import User from "../services/module/User";
import UserServiceImpl from "../services/module/UserServiceImpl";
import UserList from "../components/UserList"


function AllUsers() {
  const [users, setUsers] = useState<User[]>();
  const userServiceImpl = new UserServiceImpl();

  useEffect (()=>{
      userServiceImpl.findAll().then(users =>setUsers(users))
  },);


  return (
    <div className="App">
      {users?.map((element) => {
        return(
          <div>
            <UserList firstname={element.firstname} lastname={element.lastname} street={element.street} plz={element.plz} place={element.place}></UserList>
            </div>
      );})}
      
      
    </div>
  );
}

export default AllUsers;