import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../manager-css/EditMarble.css";
import { updateMarble } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditMarble() {
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const { marbleId } = useParams();

  const handleSubmit = (id) => {
    updateMarble(id, priceValue, quantityValue);
    toast.success("Update successfully");
  };

  return (
    <div className="d-flex align-items-center justify-content-center custom-form-container">
      <div className="custom-form-group">
        <Form>
          <Form.Group className="mb-3">
            <h2>Edit Marble</h2>
            <Form.Control
              type="number"
              value={priceValue}
              onChange={(event) => setPriceValue(event.target.value)}
              placeholder="Price"
            />
            <br />
            <Form.Control
              type="number"
              value={quantityValue}
              onChange={(event) => setQuantityValue(event.target.value)}
              placeholder="Quantity"
            />
          </Form.Group>
          <div className="buttons">
            <button
              type="submit"
              className="edit"
              onClick={() => handleSubmit(marbleId)}
            >
              Edit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
