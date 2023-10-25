import './offerP.scss';
import OfferProductCard from './OfferProductCard';
import { StyledButton } from '../../Components/Button/StyledButton';
import useFetch from './../Utils/useFetch';

const OfferProducts = () => {
  const { data } = useFetch('https://fakestoreapi.com/products?limit=6');

  return (
    <div className="offerproduct">
      <div className="offerproduct-container">
        {data?.map((item) => (
          <OfferProductCard key={item.id} items={item} />
        ))}
      </div>
      <br />
      <br />
      <StyledButton fontSize="20px" fontWeight="600">
        view all
      </StyledButton>
    </div>
  );
};

export default OfferProducts;
