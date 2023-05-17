import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const AdminCard = (props) => {
  return (
    <div class="relative flex h-96 p-3 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-lg">
      <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={props.imageUrl} class="h-full w-full object-cover" />
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
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default AdminCard;
=======
export default AdminCard;
>>>>>>> ccc18adc72a8d1a89f74b792080ba91be7e3c66d
