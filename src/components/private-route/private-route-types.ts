export interface PrivateRouteProps {
  renderComponent: () => Element,
  redirect: () => void,
  isDataLoaded: boolean,
  authorizationStatus: string
}
