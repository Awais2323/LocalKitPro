import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { authApi } from "../__fake-api__/auth-api";
import { axiosClient } from "../api/config";

var ActionType;
(function (ActionType) {
  ActionType["INITIALIZE"] = "INITIALIZE";
  ActionType["LOGIN"] = "LOGIN";
  ActionType["LOGOUT"] = "LOGOUT";
  ActionType["REGISTER"] = "REGISTER";
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  platform: "JWT",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = globalThis.localStorage.getItem("accessToken");
        if (accessToken) {
          const user = state.user;

          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);
  const login = async (email, password) => {
    const userLoginData = await axiosClient.post("Authenticate/login", {
      username: email,
      password: password,
    });

    if (userLoginData.data.token) {

      // const { accessToken } = await authApi.login({ email, password });
      const accessToken = userLoginData.data.token;
      // const user = await authApi.me({ accessToken });
      localStorage.setItem("accessToken", accessToken);

      dispatch({
        type: ActionType.LOGIN,
        payload: {
          user: userLoginData.data.user,
        },
      });
      return true;
    }
    return false;
  };
  const logout = async () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: ActionType.LOGOUT });
  };

  const register = async (email, name, password) => {
    const { accessToken } = await authApi.register({ email, name, password });
    const user = await authApi.me({ accessToken });

    localStorage.setItem("accessToken", accessToken);

    dispatch({
      type: ActionType.REGISTER,
      payload: {
        user,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: "JWT",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
