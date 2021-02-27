export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  FILL_OFFERS_LIST: `main/fillOffersList`,
  LOGIN: `login/login`,
  LOGOUT: `logout`
};

export const ActionCreator = {
  changeCity: (city: string) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  login: () => ({
    type: ActionType.LOGIN
  }),
  logout: () => ({
    type: ActionType.LOGOUT
  })
};
