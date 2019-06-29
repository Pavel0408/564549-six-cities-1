import React from "react";
import {reviewPropTypes} from "../../prop-types/review-prop-type";

export const Review = (props) => {
  const {comment} = props;
  const dateFormat = new Intl.DateTimeFormat(`en-US`, {
    month: `long`,
    year: `numeric`
  });
  return <React.Fragment>
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.userAvatar} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${comment.rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.message}
        </p>
        <time className="reviews__time" dateTime={comment.date.toISOString()}>{dateFormat.format(comment.date)}</time>
      </div>
    </li>
  </React.Fragment>;
};

Review.propTypes = {
  comment: reviewPropTypes
};
