import imagen2 from "../imagenes/image-product-desktop.jpg";
import icon from "../imagenes/icon-cart.svg";
import "../style/Desktop.css";
export const Desktop = () => {
  return (
    <>
      <div className="desktop-card">
        <div>
          <img className="image-desktop" src={imagen2} alt="product-image" />
        </div>
        <div className="text-desktop">
          <p className="p-desktop perfume">PERFUME</p>
          <h1 className="h1-desktop">Gabrielle Essence Eau De Parfum</h1>
          <p className="p-desktop">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <h1 className="price-desktop">
            $149.99 <span className="span-price">$169.99</span>
          </h1>
          <button className="button-desktop">
            {" "}
            <img className="icon-cart" src={icon} alt="" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
