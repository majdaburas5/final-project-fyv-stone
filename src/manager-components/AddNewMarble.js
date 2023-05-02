import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { addMarble } from "../api";
import "../manager-css/AddNewMarble.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddNewMarble() {
  const [codeValue, setCodeValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const [styleValue, setStyleValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [imgValue, setImgValue] = useState("");
  const [colorValue, setColorValue] = useState("");

  const handleSubmit = () => {
    addMarble(
      codeValue,
      typeValue,
      priceValue,
      quantityValue,
      styleValue,
      nameValue,
      imgValue,
      colorValue
    );
    toast.success("Added succssesful");
  };

  return (
    <div className="d-flex align-items-center justify-content-center custom-form-container">
      <div className="custom-form-group">
        <Form>
          <Form.Group className="mb-3">
            <h2>Add New Marble</h2>
            <Form.Control
              type="number"
              value={codeValue}
              onChange={(event) => setCodeValue(event.target.value)}
              placeholder="Code"
              required
            />
            <Form.Control
              type="text"
              value={typeValue}
              onChange={(event) => setTypeValue(event.target.value)}
              placeholder="Type"
              required
            />
            <br />
            <Form.Control
              type="number"
              value={priceValue}
              onChange={(event) => setPriceValue(event.target.value)}
              placeholder="Price"
              required
            />
            <Form.Control
              type="number"
              value={quantityValue}
              onChange={(event) => setQuantityValue(event.target.value)}
              placeholder="Quantity"
              required
            />
            <Form.Control
              type="text"
              value={styleValue}
              onChange={(event) => setStyleValue(event.target.value)}
              placeholder="Style"
              required
            />
            <br />
            <Form.Control
              type="text"
              value={nameValue}
              onChange={(event) => setNameValue(event.target.value)}
              placeholder="Name"
              required
            />
            <br />
            <Form.Control
              type="text"
              value={imgValue}
              onChange={(event) => setImgValue(event.target.value)}
              placeholder="Image"
              required
            />
            <br />
            <Form.Control
              type="number"
              value={colorValue}
              onChange={(event) => setColorValue(event.target.value)}
              placeholder="Color"
              required
            />
          </Form.Group>
          <div className="buttons">
            <button
              type="submit"
              className="edit"
              onClick={() => handleSubmit()}
            >
              Add
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
