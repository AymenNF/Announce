import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios"
import React, { useState } from "react";
const AdminCard = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/details/${props.productId}`);
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  if (isDeleted) {
    return null;
  }
  return (
    <div class="relative flex h-96 p-3 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-lg">
      <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={props.imageUrl} class="h-full w-full object-cover" alt="image" />
      </div>
      <div class="p-6">
        <div class="mb-2 flex items-center justify-between">
          <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {props.name}
          </p>
          <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {props.price} $
          </p>
        </div>
        <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {props.description}
        </p>
      </div>
      <div class="pt-0">
        <Button type="reset" variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};
export default AdminCard;
