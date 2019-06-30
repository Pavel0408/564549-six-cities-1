import React, {PureComponent} from "react";
import {RatingName} from "../../constants/rating-names";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-types/offer-prop-types";
import {reviewPropTypes} from "../../prop-types/review-prop-type";
import {WithActiveItem} from "../../hocs/with-active-item";

export class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingIschecked = false;
    this.textAreaIsCompleted = false;
    this.formRef = React.createRef();
    props.onChangeFormIsValid(false);
    this.changeRatingHandle = this.changeRatingHandle.bind(this);
    this.textareaChangeHandle = this.textareaChangeHandle.bind(this);
    this.changeRatingChecked = this.changeRatingChecked.bind(this);
    this.changeTextAreaIsCompleted = this.changeTextAreaIsCompleted.bind(this);
  }

  checkForm() {
    const {onChangeFormIsValid} = this.props;
    if (this.ratingIschecked && this.textAreaIsCompleted) {
      onChangeFormIsValid(true);
    } else {
      onChangeFormIsValid(false);
    }
  }
  changeRatingChecked() {
    this.ratingIschecked = true;
  }
  changeTextAreaIsCompleted(evt) {
    if (evt.target.value.length > 50 && evt.target.value.length < 300) {
      this.textAreaIsCompleted = true;
    } else {
      this.textAreaIsCompleted = false;
    }
  }
  changeRatingHandle() {
    this.changeRatingChecked();
    this.checkForm();
  }
  textareaChangeHandle(evt) {
    this.changeTextAreaIsCompleted(evt);
    this.checkForm();
  }

  render() {
    const {onSendReview, sendingError, activeOffer, isSending, formIsValid} = this.props;

    return <form className="reviews__form form" action="#" method="post" onSubmit={onSendReview} ref={this.formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      {sendingError && <h3>Review is not sent to the server. Error: {sendingError.message}</h3>}
      <div className="reviews__rating-form form__rating">
        {new Array(5).fill(``).map((it, i) =>{
          const index = 5 - i;
          return <React.Fragment key={`${activeOffer.id}${i}`}>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={index} id={`${index}-stars`} type="radio" onChange={this.changeRatingHandle} />
            <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={RatingName[index]} onClick={this.changeRatingHandle}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>;
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} onChange={this.textareaChangeHandle}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <input type="hidden" name="activeOfferId" value={activeOffer.id}/>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formIsValid || isSending}>Submit</button>
      </div>
    </form>;
  }

  componentDidUpdate(prevProps) {
    const {onChangeFormIsValid} = this.props;
    if (this.props.activeOffer !== prevProps.activeOffer || this.props.reviews.length !== prevProps.reviews.length) {
      this.formRef.current.reset();
      onChangeFormIsValid(false);
      this.ratingIschecked = false;
      this.textAreaIsCompleted = false;
    }
  }
}

CommentForm.propTypes = {
  onSendReview: PropTypes.func,
  sendingError: PropTypes.object,
  activeOffer: offerPropTypes,
  isSending: PropTypes.bool,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  onChangeFormIsValid: PropTypes.func,
  formIsValid: PropTypes.bool
};

export const CommentFormWithActiveItem = (props) => {
  return <WithActiveItem render={(data) => {
    const {activeItem, onChange} = data;

    return <CommentForm {...props}
      formIsValid={activeItem}
      onChangeFormIsValid={onChange}
    />;
  }
  }
  />;
};


