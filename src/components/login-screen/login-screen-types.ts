export interface loginData {
  login: string,
  password: string
}

export interface LoginScreenProps {
  onSubmit: ({login, password}: loginData) => void;
}
