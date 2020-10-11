import React, { Component } from 'react';
import { Card, Row } from 'antd';
import { withFirebase } from '../../../services/firebase';

class UserItem extends Component {
  state = { user: null, loading: false, ...this.props.location.state };

  componentDidMount() {
    if (this.state.user) {
      return;
    }
    this.setState({ loading: true });
    this.props.firebase
      .user(this.props.match.params.id)
      .on('value', (snapshot) => {
        this.setState({
          user: snapshot.val(),
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }
  render() {
    return (
      <Card>
        <Row>
          <h2>
            <strong>User:</strong> {this.state.item.username}
          </h2>
        </Row>
        <Row>
          <h2>
            <strong>Email:</strong> {this.state.item.email}
          </h2>
        </Row>
        <Row>
          <h2>
            <strong>Uid:</strong> {this.state.item.uid}
          </h2>
        </Row>
        <Row>
          <h2>
            <strong>Admin:</strong>
            {this.state.item.roles ? <div>Yes</div> : <div>No</div>}
          </h2>
        </Row>
      </Card>
    );
  }
}

export default withFirebase(UserItem);
