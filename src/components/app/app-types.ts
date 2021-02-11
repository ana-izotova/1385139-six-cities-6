import {RouteComponentProps} from "react-router-dom";

export interface MatchParams {
  id: string;
}

export type Props = RouteComponentProps<MatchParams>
