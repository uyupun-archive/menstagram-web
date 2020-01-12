import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LinkStyle, UserAvatar, UserLink, FollowButton } from './styled';

export default class FollowListItem extends Component {
  actionButton = () => {
    if (this.props.user.is_me) {
      return;
    } else if (this.props.user.is_following) {
      return (
        <FollowButton
          type="button"
          className="c-button__white c-button__commonWidth"
          onClick={this.props.openModal}
        >
          フォロー中
        </FollowButton>
      );
    } else {
      return (
        <FollowButton
          type="button"
          className="c-button__orange c-button__commonWidth"
        >
          フォローする
        </FollowButton>
      );
    }
  };
  render() {
    return (
      <li className="row mx-0 mb-3 align-items-center">
        <Link
          to={`/profile/${this.props.user.user_id}`}
          className="col-7 d-flex align-items-center p-0 pr-1"
          style={LinkStyle}
        >
          <img
            src={this.props.user.avatar}
            alt="user_avatar"
            className="d-inline-block rounded-circle border"
            height="55px"
            width="55px"
            style={UserAvatar}
          />
          <UserLink>
            {this.props.user.screen_name}
            <br />
            {this.props.user.user_id}
          </UserLink>
        </Link>
        <div className="col-5 p-0 text-right">{this.actionButton()}</div>
      </li>
    );
  }
}

FollowListItem.propTypes = {
  user: PropTypes.object,
  openModal: PropTypes.func
};
