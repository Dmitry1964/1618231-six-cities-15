import { Link } from 'react-router-dom';
import { OfferType } from 'src/shared/app-types';
import { AppRoutes } from 'src/shared/constans';
import { RATING_STARS } from 'src/shared/constans';

type PlaceCardProp = {
  offer: OfferType;
  setActiveCard: (offer: OfferType | null) => void;
}

const PlaceCard = ({ offer, setActiveCard }: PlaceCardProp) => {
  const { previewImage, price, title, type, rating, id } = offer;
  const starsRating = (rating / RATING_STARS.length * 100).toString();

  return (
    <article
      onMouseEnter={() => setActiveCard(offer)}
      onMouseLeave={() => setActiveCard(null)}
      className="cities__card place-card"
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoutes.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${starsRating}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
};
export default PlaceCard;