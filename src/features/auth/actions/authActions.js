import firebase from "firebase/app";

export const loginTypes = {
  anonymous: "anonymous",
  google: "google",
};

const getProvider = {
  [loginTypes.anonymous]: () => null,
  [loginTypes.google]: () => new firebase.auth.GoogleAuthProvider(),
};

export const login = (loginType) => {
  const provider = getProvider[loginType]();
  if (provider) return firebase.auth().signInWithRedirect(provider);
  return firebase.auth().signInAnonymously();
};

export const getCurrentUserClaim = () => {
  return firebase.auth().currentUser.getIdTokenResult();
};

export const logout = () => {
  return firebase.auth().signOut();
};
