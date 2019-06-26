import React, {PureComponent} from "react";
import {Review} from "../review/review";
import PropTypes from "prop-types";
import {CommentForm} from "../comment-form/comment-form";

export class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviewsError, reviews, isAuthorizationRequired, user, sendReview, sendingError, isSending, activeOffer} = this.props;
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
  activeOffer: PropTypes.object,
  reviewsError: PropTypes.object,
  reviews: PropTypes.array,
  fetchReviews: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  user: PropTypes.object,
  sendReview: PropTypes.func,
  sendingError: PropTypes.object,
  isSending: PropTypes.bool
};
