export const parseAuthorizationResponse = (response) => {
  const data = response.data;

  return {
    id: data[`id`],
    email: data[`email`],
    name: data[`name`],
    avatar: data[`avatar_url`],
    isPro: data[`is_pro`]
  };
};
