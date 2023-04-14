import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart({ cartArray }) {
  console.log(cartArray);
  return (
    <div>
      {cartArray &&
        cartArray.map((cart) => {
          <table>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>d</td>
              <td>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </table>;
        })}
    </div>
  );
}
