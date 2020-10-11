import React, { Component } from 'react';
import { AuthUserContext } from '../../services/auth';
import { withFirebase } from '../../services/firebase';
import { Card, Row } from 'antd';
import DefaultLoginToggle from './components/defaultLoginToggle';
import SocialLoginToggle from './components/socialLoginToggle';

const Account = () => {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => {
        return (
          <div>
            <LoginManagement authUser={authUser} />
          </div>
        );
      }}
    </AuthUserContext.Consumer>
  );
};
const SIGN_IN_METHODS = [
  {
    id: 'password',
    provider: null,
  },
  {
    id: 'google.com',
    provider: 'googleProvider',
  },
  {
    id: 'facebook.com',
    provider: 'facebookProvider',
  },
];
class LoginManagementBase extends Component {
  state = { activeSignInMethods: [], error: null };

  componentDidMount() {
    this.fetchSignInMethods();
  }

  fetchSignInMethods = () => {
    this.props.firebase.auth
      .fetchSignInMethodsForEmail(this.props.authUser.email)
      .then((activeSignInMethods) =>
        this.setState({ activeSignInMethods, error: null })
      )
      .catch((error) => this.setState({ error }));
  };

  onDefaultLoginLink = (password) => {
    const credential = this.props.firebase.emailAuthProvider.credential(
      this.props.authUser.email,
      password
    );
    this.props.firebase.auth.currentUser
      .linkAndRetrieveDataWithCredential(credential)
      .then(this.fetchSignInMethods)
      .catch((error) =>
        this.setState({ error }, console.log(error, 'ondefault'))
      );
  };

  onSocialLoginLink = (provider) => {
    this.props.firebase.auth.currentUser
      .linkWithPopup(this.props.firebase[provider])
      .then(this.fetchSignInMethods)
      .catch((error) =>
        this.setState({ error }, console.log(error, 'onsocial'))
      );
  };

  onUnlink = (providerId) => {
    this.props.firebase.auth.currentUser
      .unlink(providerId)
      .then(this.fetchSignInMethods)
      .catch((error) => this.setState({ error }));
  };
  render() {
    const { activeSignInMethods, error } = this.state;
    return (
      <Card>
        <Row justify="center">Sign In methods:</Row>
        {SIGN_IN_METHODS.map((signInMethod) => {
          const onlyOneLeft = activeSignInMethods.length === 1;
          const isEnabled = activeSignInMethods.includes(signInMethod.id);
          return (
            <div key={signInMethod.id}>
              {signInMethod.id === 'password' ? (
                <Row justify="center">
                  <DefaultLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onDefaultLoginLink}
                    onUnlink={this.onUnlink}
                  />
                </Row>
              ) : (
                <Row style={{ paddingTop: '2%' }} justify="center">
                  <SocialLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onSocialLoginLink}
                    onUnlink={this.onUnlink}
                  />
                </Row>
              )}
            </div>
          );
        })}
        {error && error.message}
      </Card>
    );
  }
}

const LoginManagement = withFirebase(LoginManagementBase);

export default Account;
