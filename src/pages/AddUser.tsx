import { ErrorMessage, Field, Form, Formik, } from "formik";
import * as yup from "yup";
import React from "react";
import { useState } from "react";
import { FormEvent } from "react";
import User from "../services/module/User";
import UserServiceImpl from "../services/module/UserServiceImpl";

function AddFormular() {
  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [plz, setPlz] = useState(0);
  const [place, setPlace] = useState("");

  const submit = () => {
    const user: User = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      street: street,
      plz: plz,
      place: place,
    };
    let userService = new UserServiceImpl();
    userService.add(user);
  };

  const onIdChange = (e: FormEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };
  const onFirstnameChange = (e: FormEvent<HTMLInputElement>) => {
    setFirstname(e.currentTarget.value);
  };
  const onLastnameChange = (e: FormEvent<HTMLInputElement>) => {
    setLastname(e.currentTarget.value);
  };
  const onSteetChange = (e: FormEvent<HTMLInputElement>) => {
    setStreet(e.currentTarget.value);
  };
  const onPlzChange = (e: FormEvent<HTMLInputElement>) => {
    setPlz(e.currentTarget.valueAsNumber);
  };
  const onPlaceChange = (e: FormEvent<HTMLInputElement>) => {
    setPlace(e.currentTarget.value);
  };

  const validation = yup.object().shape({
    lastname: yup.string().max(20, "Too Long").required("Required"),
    firstname: yup.string().max(20, "Too Long").required("Required"),
    street: yup.string().max(100, "Too Long").required("Required"),
    plz: yup.string().max(4, "Too Long").min(4, "Too Short").required("Required"),
    place: yup.string().max(30, "Too Long").required("Required"),
  });

  return (
    <Formik
      initialValues={{
        id: "",
        firstname: "",
        lastname: "",
        street: "",
        plz: 0,
        place: "",
      }}
      onSubmit={(values) => {
        submit();
      }}
      validationSchema={validation}>
      {({ error, touched}) => (
        <Form>
          <label>Id</label>
          <Field type="text" name="id" onChange={onIdChange}></Field>
          <label>Firstname</label>
          <Field type="text" name="firstname" onChange={onFirstnameChange}></Field>
          {error.firstname && touched.firstname ? (
            <div>{error.firstname}</div>
          ) : null}
          <ErrorMessage
            name="title"
            component="div"
            className="text-danger"
          ></ErrorMessage>
          <label>Lastname</label>
          <Field type="text" name="lastname" onChange={onLastnameChange}></Field>
          {error.lastname && touched.lastname ? (
            <div>{error.lastname}</div>
          ) : null}
          <ErrorMessage
            name="title"
            component="div"
            className="text-danger"
          ></ErrorMessage>
          <label>Street</label>
          <Field type="text" name="street" onChange={onSteetChange}></Field>
          {error.street && touched.street ? <div>{error.street}</div> : null}
          <ErrorMessage
            name="title"
            component="div"
            className="text-danger"
          ></ErrorMessage>
          <label>Plz</label>
          <Field type="text" name="plz" onChange={onPlzChange}></Field>
          {error.plz && touched.plz ? <div>{error.plz}</div> : null}
          <ErrorMessage
            name="title"
            component="div"
            className="text-danger"
          ></ErrorMessage>
          <label>Place</label>
          <Field type="text" name="place" onChange={onPlaceChange}></Field>
          {error.place && touched.place ? <div>{error.place}</div> : null}
          <ErrorMessage
            name="title"
            component="div"
            className="text-danger"
          ></ErrorMessage>
          <button type="submit" onClick={submit}>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AddFormular;
