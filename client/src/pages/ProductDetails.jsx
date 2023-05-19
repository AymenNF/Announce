import React, { useEffect, useState } from 'react';
import StarRating from "../components/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import axios from "axios"
import Footer from '../components/Footer';
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  let [url, setUrl] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/details/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);
  let imagesUrls = [
    "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
    "https://cdn.blessthisstuff.com/imagens/stuff/black-airpods.jpg",
    "https://images.macrumors.com/t/NOSBT8abQNK_hSBGKOyfPj-0PCc=/1600x1200/smart/article-new/2016/09/Jet-Black-AirPods-1-800x450.jpg",
  ];
  let [currentUrlIndex, setCurrentUrlIndex] = React.useState(0);
  function handleChangeNext() {
    if (currentUrlIndex < imagesUrls.length - 1) {
      setCurrentUrlIndex(currentUrlIndex++);
      setUrl(imagesUrls[currentUrlIndex]);
    } else {
      setCurrentUrlIndex((currentUrlIndex = 0));
      setUrl(imagesUrls[currentUrlIndex]);
    }
  }
  function handleChangePrevious() {
    if (currentUrlIndex > 0) {
      setCurrentUrlIndex(currentUrlIndex--);
      setUrl(imagesUrls[currentUrlIndex]);
    } else {
      setCurrentUrlIndex(imagesUrls.length - 1);
      setUrl(imagesUrls[currentUrlIndex]);
    }
  }
  document.body.style.backgroundImage = "none";

  return (
    <div>
      <Header />

      <div className='p-16'>

        <div className="ProductDetails">
          <div>
            <img src={product?.imageUrl} class="product-details-images" />
            <div className="small-images">
              <button onClick={handleChangePrevious}>
                <img
                  className="change-big-image"
                  src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180850.png"
                />
              </button>
              {imagesUrls.map((imageUrl, index) => (
                <button key={index}>
                  <img className={`product-small-img ${index}`} src={product?.imageUrl} alt="Thumbnail" />
                </button>
              ))}
              <button onClick={handleChangeNext}>
                <img
                  className="change-big-image"
                  src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180852.png"
                />
              </button>
            </div>
          </div>
          <div class="rating">
            <StarRating />
            <h4>
              Price : <span class="font-bold">{product?.price}$</span>
            </h4>
            <br />
            <h4 class="font-bold">{product?.description}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              <br />
              dolore nulla sunt neque ipsam perferendis necessitatibus magni autem
              <br />
              soluta quaerat dolores excepturi vero, cum alias ea, <br />
              explicabo quo ex?
            </p>
          </div>
        </div>
        <div className="Add-to-cart-div">
          <button className="Add-to-cart-button">Add to cart</button>
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default ProductDetails;
