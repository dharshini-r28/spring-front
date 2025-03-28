import Header from './header';
import './App.css';
import AddUser from './AddUser';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import ContactList from './ContactList';
import { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import api from '../api/contact'
function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  // const [users,setUsers]=useState([]);
  // const addUserHandler = (user) => {
  //   console.log(user);
  //   setUsers([...users, {id: uuidv4(), ...user }]); 
  //   console.log(users);
  //  } 

  //  const removeContactHandler = (id) => {
  //   const newContactList = users.filter((user) => {
  //     return user.id !== id;
  //   });

  //   setUsers(newContactList);
  // };

  // useEffect(() => {
  //   console.log(users);
  // }
  // ,[users]);
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {


    const request = {
      id: Math.floor(Math.random() * 1000000),
      ...contact
    }
    const response = await api.post("/user/create", request);
    console.log(response.data);

    setContacts([...contacts, response.data]); 
    // setContacts(contact)
    console.log(contact);

   } 
   const removeContactHandler = async (id) => {
    try {
      await api.delete(`/user/delete/${id}`);
      const newContactList = contacts.filter((contact) => contact.id !== id);
      setContacts(newContactList);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  


  const retriveContacts= async () => {
    const response = await api.get("user/details");
    return await response.data;
  }
  useEffect(() => {
   
     
  
  
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
    }
    , []);
  
    useEffect(() => {
      //console.log("useEffect");
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);
  

  return (
    // <div className="App">
    //  <Header/>
     
    //   <center>
    //   <h1>Add User</h1>
    //   </center>
    <div className="ui container">

   
    <Router>
    <Header/>
      <Routes>
        <Route path='/add' exact Component={() => (<AddUser addContactHandler={addContactHandler} />)} />

        <Route path='/' exact Component={ () => (<ContactList contacts={contacts} getContactId={removeContactHandler} />)} />
      </Routes>
   
    {/* <AddUser addUserHandler={addUserHandler}/>
    <ContactList users={users} getContactId={removeContactHandler}/> */}
    {/* </div> */}
    </Router>

</div>

  );
}

export default App;












































// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './header';
// import AddUser from './AddUser';
// import ContactList from './ContactList';
// import api from '../api/contact';

// function App() {
//   const [contacts, setContacts] = useState([]);

//   const addContactHandler = async (contact) => {
//     const request = {
//       id: Math.floor(Math.random() * 1000000),
//       ...contact,
//     };

//     const response = await api.post("/user/create", request);
//     setContacts([...contacts, response.data]);
//   };

//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => contact.id !== id);
//     setContacts(newContactList);
//   };

//   const retrieveContacts = async () => {
//     const response = await api.get("/user/details");
//     return Array.isArray(response.data) ? response.data : [];
//   };

//   useEffect(() => {
//     const getAllContacts = async () => {
//       const allContacts = await retrieveContacts();
//       if (allContacts) setContacts(allContacts);
//     };
//     getAllContacts();
//   }, []);

//   return (
//     <div className="ui container">
//       <Router>
//         <Header />
//         <Routes>
//           <Route
//             path="/add"
//             element={<AddUser addContactHandler={addContactHandler} />}
//           />
//           <Route
//             path="/"
//             element={
//               <ContactList
//                 contacts={contacts}
//                 getContactId={removeContactHandler}
//               />
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
