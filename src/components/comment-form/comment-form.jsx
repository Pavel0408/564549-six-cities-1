import React, {PureComponent} from "react";
import {RatingName} from "../../constants/rating-names";
import {childrenOfNode} from "enzyme/src/RSTTraversal";

export class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingIschecked = false;
    this.textAreaIsCompleted = false;
    this.state = {
      formIsValid: false
    };
    this.changeRatingHandler = this.changeRatingHandler.bind(this);
    this.textareaChangeHandler = this.textareaChangeHandler.bind(this);
    this.changeRatingChecked = this.changeRatingChecked.bind(this);
    this.changeTextAreaIsCompleted = this.changeTextAreaIsCompleted.bind(this);
  }

  checkForm() {
    if (this.ratingIschecked && this.textAreaIsCompleted) {
      this.setState(() => {
        return {
          formIsValid: true
        };
      });
    }
  }

  changeRatingChecked() {
    this.ratingIschecked = true;
  }

  changeTextAreaIsCompleted(evt) {
    if (evt.target.value.length > 50 && evt.target.value.length < 300) {
      this.textAreaIsCompleted = true;
    }
  }

  changeRatingHandler() {
    this.changeRatingChecked();
    this.checkForm();
  }

  textareaChangeHandler(evt) {
    this.changeTextAreaIsCompleted(evt);
    this.checkForm();
  }

  render() {
    return <form className="reviews__form form" action="#" method="post" onSubmit={this.props.sendReview}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      {this.props.sendingError && <h3>Review is not sent to the server. Error: {this.props.sendingError.message}</h3>}
      <div className="reviews__rating-form form__rating">
        {new Array(5).fill(``).map((it, i) =>{
          const index = 5 - i;
          return <React.Fragment key={`${this.props.activeOffer.id}${i}`}>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={index} id={`${index}-stars`} type="radio" onChange={this.changeRatingHandler} />
            <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={RatingName[index]}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>;
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} onChange={this.textareaChangeHandler}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <input type="hidden" name="activeOfferId" value={this.props.activeOffer.id}/>
        <button className="reviews__submit form__submit button" type="submit" disabled={!this.state.formIsValid || this.props.isSending}>Submit</button>
      </div>
    </form>;
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeOffer !== prevProps.activeOffer || this.props.reviews.length !== prevProps.reviews.length) {
      document.querySelector(`.reviews__form`).reset();
      this.setState(() => {
        return {
          formIsValid: false
        };
      });
      this.ratingIschecked = false;
      this.textAreaIsCompleted = false;
    }
  }
}
