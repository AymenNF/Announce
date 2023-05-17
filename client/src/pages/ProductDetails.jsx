import StarRating from "../components/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import React from "react";
import Header from "../components/Header";
const ProductDetails = (props) => {
  let imagesUrls = [
    "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
    "https://cdn.blessthisstuff.com/imagens/stuff/black-airpods.jpg",
    "https://images.macrumors.com/t/NOSBT8abQNK_hSBGKOyfPj-0PCc=/1600x1200/smart/article-new/2016/09/Jet-Black-AirPods-1-800x450.jpg",
  ];
  let [url, setUrl] = React.useState(
    "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
  );
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
      <div className="ProductDetails">
        <div>
          <img src={url} class="product-details-images" />
          <div className="small-images">
            <button onClick={handleChangePrevious}>
              <img
                className="change-big-image"
                src="https://cdn.icon-icons.com/icons2/2838/PNG/512/go_previous_icon_180850.png"
              />
            </button>
            <button>
              <img className="product-small-img 0" src={imagesUrls[0]} />
            </button>
            <button>
              <img className="product-small-img 1" src={imagesUrls[1]} />
            </button>
            <button>
              <img className="product-small-img 2" src={imagesUrls[2]} />
            </button>
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
            Price : <span class="font-bold">{props.price}$</span>
          </h4>
          <br />
          <h4 class="font-bold">{props.description}</h4>
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
  );
};
export default ProductDetails;
