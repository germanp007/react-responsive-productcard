import imagen from "../imagenes/image-product-mobile.jpg";
import icon from "../imagenes/icon-cart.svg";
import "../style/Mobile.css";
export const Mobile = () => {
  return (
    <>
      <div className="card">
        <div>
          <img className="img-mobile" src={imagen} alt="product-image" />
          <p className="p-mobile">PERFUME</p>
          <h1 className="h1-mobile">Gabrielle Essence Eau De Parfum</h1>
          <p className="p-mobile">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div>
          <h1 className="price-mobile">
            $149.99 <span className="span-price">$169.99</span>
          </h1>
          <button className="button-mobile">
            {" "}
            <img className="icon-cart" src={icon} alt="" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
