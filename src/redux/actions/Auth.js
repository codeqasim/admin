import {
  SIGNIN,
  AUTH,
  ONLOADING,
  AUTHENTICATED,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNUP,
  SETTINGS,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  SIGNIN_WITH_GOOGLE,
  SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  SIGNIN_WITH_FACEBOOK,
  SIGNIN_WITH_FACEBOOK_AUTHENTICATED
} from '../constants/Auth';

export const authentication = (user) => {
  return {
    type: AUTH,
    payload: user
  }
}
export const onLoading = (value) => {
  return {
    type: ONLOADING,
    payload: value
  }
}

export const signIn = (value) => {
  return {
    type: AUTH,
    payload: value
  }
};

export const authenticated = (token) => {
  return {
    type: AUTHENTICATED,
    token
  }
};

export const settings = (data) => {
  return {
    type: SETTINGS,
    payload:data,
  }
};

export const signOut = () => {
  return {
    type: SIGNOUT
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  }
};

export const signUp = (user) => {
  return {
    type: SIGNUP,
    payload: user
  };
};

export const signUpSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    token
  };
};

export const signInWithGoogle = () => {
  return {
    type: SIGNIN_WITH_GOOGLE
  };
};

export const signInWithGoogleAuthenticated = (token) => {
  return {
    type: SIGNIN_WITH_GOOGLE_AUTHENTICATED,
    token
  };
};

export const signInWithFacebook = () => {
  return {
    type: SIGNIN_WITH_FACEBOOK
  };
};

export const signInWithFacebookAuthenticated = (token) => {
  return {
    type: SIGNIN_WITH_FACEBOOK_AUTHENTICATED,
    token
  };
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_AUTH_MESSAGE,
    payload:message
  };
};

export const hideAuthMessage = () => {
  return {
    type: HIDE_AUTH_MESSAGE,
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
