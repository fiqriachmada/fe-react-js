import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Form, Button, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  createMember,
  getMemberById,
  updateMember,
} from "../../apis/memberService";
import { memberSchema } from "../../validations/validationSchema";

const MemberForm = ({ history, match }) => {
  const { id } = match.params;

  const isAddMode = !id;

  const [member, setMember] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(memberSchema) });

  const submitForm = (data) => {
    return isAddMode ? insert(data) : update(id, data);
  };

  const insert = (data) => {
    return createMember(data).then((response) => {
      history.push(".");
    });
  };

  const update = (id, data) => {
    return updateMember(id, data).then((response) => {
      history.push("..");
    });
  };

  useEffect(() => {
    if (!isAddMode) {
      getMemberById(id).then((response) => {
        let member = response.data;
        const fields = [
          "firstName",
          "lastName",
          "username",
          "email",
          "password",
          "status",
        ];
        fields.forEach((field) => setValue(field, member[field]));
        setMember(member);
      });
    }
  }, []);

  return (
    <section className="py-5 container p-4 mt-5 mb-5">
      <Row className="col-lg-12 mt-5">
        <Card className="p-4 shadow-lg">
          <h3>Member Form Component</h3>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                {...register("firstName")}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                {...register("lastName")}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </Form.Group>

            <Button variant="success" type="submit">
              Save
            </Button>
          </Form>
        </Card>
      </Row>
    </section>
  );
};
export default MemberForm;
