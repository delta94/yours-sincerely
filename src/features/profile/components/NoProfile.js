import React from "react";
import { Link } from "react-router-dom";
import { login, loginTypes } from "features/auth/actions/authActions";
import { ConnectSection } from "components/ConnectSection";
import { Text } from "components/Text";
import { ProfileDetails } from "./ProfileDetails";

export const NoProfile = () => {
  return (
    <>
      <ProfileDetails>
        <img src="/assets/reading.svg" alt="Not logged in" />
        <div>
          <h1>You’re not signed in...</h1>
          <Text>
            But, you can still <Link to="/new">make a post</Link> anonymously
            without an account
          </Text>
        </div>
      </ProfileDetails>
      <ConnectSection text="Or sign in with" bg="#f5f8fa">
        <button type="button" onClick={() => login(loginTypes.google)}>
          <img src="/assets/google-button.svg" alt="Sign in with Google" />
        </button>
      </ConnectSection>
    </>
  );
};
