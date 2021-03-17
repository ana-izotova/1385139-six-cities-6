import {ReactElement} from "react";

export interface PrivateRouteProps {
  renderComponent: () => ReactElement,
  redirect: () => ReactElement
}
