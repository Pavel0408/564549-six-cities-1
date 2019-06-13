const parseReview = (data) => {
  return {
    id: data[`id`],
    userId: data[`user`][`id`],
    userIsPro: data[`user`][`is_pro`],
    userName: data[`user`][`name`],
    userAvatar: data[`user`][`avatar_url`],
    rating: data[`rating`],
    message: data[`comment`],
    date: new Date(data[`date`])
  };
};

export const parseServerResponseReviews = (response) => {
  return response.data.map(parseReview);
};
