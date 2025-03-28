import React from "react";
import ContactCard from "./Contactcard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHander={deleteContactHandler}
      />
    );
  });

  return (
    <>
      <div class="main">

<h2>

  ContactList
  <Link to="/add">
<button className="ui button blue right">Add Contact</button>
</Link>
</h2>
<div className="ui celled list">{renderContactList}</div> 
</div>
    </>
  );
};

export default ContactList;
// import React from "react";
// import ContactCard from "./Contactcard";

// const ContactList = ({ contacts = [], getContactId }) => {
//   const deleteContactHandler = (id) => {
//     getContactId(id);
//   };

//   const renderContactList = contacts.map((contact) => {
//     return (
//       <ContactCard
//         key={contact.id}
//         contact={contact}
//         clickHandler={deleteContactHandler}
//       />
//     );
//   });

//   return (
//     <div className="main">
//       <h2>Contact List</h2>
//       <div className="ui celled list">{renderContactList}</div>
//     </div>
//   );
// };

// export default ContactList;

