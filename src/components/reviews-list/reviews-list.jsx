import React, {PureComponent} from "react";
import {Review} from "../review/review";
import PropTypes from "prop-types";
import {CommentForm} from "../comment-form/comment-form";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {reviewPropTypes} from "../../prop-types/review-prop-type";
import {userPropTypes} from "../../prop-types/user-prop-types";

export class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviewsError, reviews, user, sendReview, sendingError, isSending, activeOffer} = this.props;
    if (reviewsError && reviewsError.message) {
      return <h2>{reviewsError.message}</h2>;
    }

    return <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((rewview) => {
          return <Review
            key={this.props.activeOffer.id.toString() + rewview.id}
            comment={rewview}
          />;
        })}
      </ul>
      {user && <CommentForm
        activeOffer={activeOffer}
        sendingError={sendingError}
        sendReview={sendReview}
        reviews={reviews}
        isSending={isSending}/>}
    </section>;
  }
}

ReviewsList.propTypes = {
  activeOffer: offerPropTypes,
  reviewsError: PropTypes.object,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  fetchReviews: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  user: userPropTypes,
  sendReview: PropTypes.func,
  sendingError: PropTypes.object,
  isSending: PropTypes.bool
};
