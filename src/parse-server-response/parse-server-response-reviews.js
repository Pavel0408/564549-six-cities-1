const parseReview = (data) => {
  return {
    id: data[`id`],
    userId: data[`user`][`id`],
    userIsPro: data[`user`][`is_pro`],
    userName: data[`user`][`name`],
    userAvatar: data[`user`][`avatar`],
    rating: data[`rating`],
    comment: data[`comment`],
    date: new Date(data[`date`])
  };
};

export const parseServerResponseReviews = (response) => {
  console.log(response.data);
 return  response.data.map(parseReview);
};
