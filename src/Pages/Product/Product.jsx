import './product.scss';
import img1 from '../../Images/new-pics/IMG-20230115-WA0003.jpg';
import img2 from '../../Images/new-pics/IMG-20230115-WA0006.jpg';
import img3 from '../../Images/new-pics/IMG-20230115-WA0007.jpg';
import { StyledButton } from './../../Components/Button/StyledButton';

const Product = () => {
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <div className="mainImg">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>title</h1>
        <span>price</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          incidunt nobis reprehenderit corrupti laboriosam, dignissimos,
          molestias explicabo vel, temporibus ea perspiciatis. Fugit quo
          eligendi totam non delectus dolorem sapiente assumenda.
        </p>
        <div className="quantity">
          <button>-</button>
          <span>{0}</span>
          <button>-</button>
        </div>
        <StyledButton>add to cart</StyledButton>
        <div className="info">
          <span>Vendor: polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tage: T-shirt, Men, Top</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
