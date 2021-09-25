import React from "react";
import { ButtonGroup, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MemberComponent.css";
const MemberComponent = ({
  path,
  memberId,
  firstName,
  lastName,
  username,
  email,
  password,
  status,
}) => {
  return (
    <Col lg={3} md={6}>
      <Card className="member-card-css text-center ">
        <Card.Header>
          {firstName} {lastName}
        </Card.Header>
        <Card.Body>
          <Card.Title>{firstName}</Card.Title>
          <Card.Text>{lastName}</Card.Text>
          <Card.Text>{username}</Card.Text>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{password}</Card.Text>
          <Card.Text>{status}</Card.Text>
        </Card.Body>
        <ButtonGroup aria-label="Basic example" className="">
          <Link
            to={`${path}/${memberId}`}
            className="btn btn-sm btn-outline-secondary"
          >
            Detail
          </Link>

          <Link
            to={`${path}/edit/${memberId}`}
            className="btn btn-sm btn-outline-warning"
          >
            Update
          </Link>

          {/* {status > 0 || status === null ? (
            <button
              onClick={() => handleDelete(memberId)}
              className="btn btn-sm btn-outline-danger"
              disabled={true}
            >
              Delete
            </button>
          ) : (
            <button
              onClick={() => handleDelete(memberId)}
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          )} */}
          <button
            // onClick={() => 
            //   // handleDelete(memberId)
            // }
            className="btn btn-sm btn-outline-danger"
          >
            Delete
          </button>
        </ButtonGroup>
      </Card>
    </Col>
  );
};

export default MemberComponent;
