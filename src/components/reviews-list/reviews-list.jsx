import React from "react";
import {Review} from "../review/review";
import PropTypes from "prop-types";
import {CommentFormWithActiveItem} from "../comment-form/comment-form";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {reviewPropTypes} from "../../prop-types/review-prop-type";
import {userPropTypes} from "../../prop-types/user-prop-types";

export const ReviewsList = (props) => {
  const {reviewsError, reviews, user, onSendReview, sendingError, isSending, activeOffer, dateFormat} = props;

  if (reviewsError && reviewsError.message) {
    return <h2>{reviewsError.message}</h2>;
  }

  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) => {
        return <Review
          key={props.activeOffer.id.toString() + review.id}
          comment={review}
          dateFormat={dateFormat}
        />;
      })}
    </ul>
    {user && <CommentFormWithActiveItem
      activeOffer={activeOffer}
      sendingError={sendingError}
      onSendReview={onSendReview}
      reviews={reviews}
      isSending={isSending}/>}
  </section>;
};

ReviewsList.propTypes = {
  activeOffer: offerPropTypes,
  reviewsError: PropTypes.object,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  onFetchReviews: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  user: userPropTypes,
  onSendReview: PropTypes.func,
  sendingError: PropTypes.object,
  isSending: PropTypes.bool,
  dateFormat: PropTypes.object
};
