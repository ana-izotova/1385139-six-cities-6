import React, {FormEvent, useRef} from "react";
import Header from "../header/header";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/api-actions";
import {NameSpace, RootStateType} from "../../store/root-reducer";
import {changeFetchStatus} from "../../store/actions";
import {FetchStatus} from "../../const";

const LoginScreen: React.FC = () => {
  const {fetchStatus: userFetchStatus} = useSelector((state: RootStateType) => state.USER);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(login({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    }));
    dispatch(changeFetchStatus(FetchStatus.SENDING, NameSpace.USER));
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={userFetchStatus === FetchStatus.SENDING}
              >
                Sign in
              </button>
              {userFetchStatus === FetchStatus.ERROR ? <span style={{color: `red`}}>An error has occurred. Please try again.</span> : ``}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginScreen;
