import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-between mt-5 mb-4">
      {props.contacts.map((item, index) => (
        <Card
          className="cards"
          style={{ width: "12rem", marginLeft: "2rem", marginRight: "2rem" }}
        >
          <Card.Img variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <Button
              onClick={() => props.handleDeleteContact(item.id)}
              variant="primary"
            >
              Delete
            </Button>
            <Button
              onClick={() => props.handleEditIndex(index)}
              variant="primary"
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
        // <ul key={item.id} className="Contacts-list">
        //   <li>{item.name}</li>
        //   <li>{item.lastName}</li>
        //   <img
        //     width={100}
        //     src={item.photo}
        //     alt="photo"
        //     className="imgContact"
        //   />
        //   <li>
        //     <button onClick={() => props.handleDeleteContact(item.id)}>
        //       Delete
        //     </button>
        //     <button onClick={() => props.handleEditIndex(index)}>Edit</button>
        //   </li>
        // </ul>
      ))}
    </div>
  );
};

export default ContactList;
