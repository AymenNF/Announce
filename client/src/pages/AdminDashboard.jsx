import React, { useEffect, useState } from "react";
import axios from "axios"
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminCard from '../components/AdminCard';

function AdminDashboard() {
    document.body.style.backgroundImage = "none";
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All');

  const typeChangeSubmit = async (e) => {

    try {

      await axios.post("http://localhost:5000/details", {
        selectedOption
      })
        .then(res => {
          if (res.data === 'fail') {
            console.log("Somethig went wrong!");

          }
          else {
            const x = res.data
            setData(x.allProducts)
          }


        })
        .catch(e => {
          console.log(e);;
        })
    }


    catch (e) {
      console.log(e);;

    }


  }

  useEffect(() => {
    typeChangeSubmit()
  }, [])
  return (
    <div>
      <Header/>
        <div className="py-10 px-4 grid grid-cols-4 gap-10">
        {data.map((product) => (<div key={product._id}>
          <AdminCard
            productId={product._id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            description={product.description}
          />
        </div>
        ))}
        </div>
        <Footer/>
        </div>
      
  );
};

export default AdminDashboard;
