import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {filterUsers} from '../../redux/mensajes/mensajes-actions';

function Sidebar(props) {
  return (
    <div className="col-sm-4 side" >
      <div className="side-one">
        <div className="row heading">
          <div className="col-sm-3 col-xs-3 heading-avatar">
            <div className="heading-avatar-icon">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
            </div>
          </div>
          <div className="col-sm-1 col-xs-1  heading-dot  pull-right">
            <i
              className="fa fa-ellipsis-v fa-2x  pull-right"
              aria-hidden="true"
            />
          </div>
          <div className="col-sm-2 col-xs-2 heading-compose  pull-right">
            <i
              className="fa fa-comments fa-2x  pull-right"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="row searchBox">
          <div className="col-sm-12 searchBox-inner">
            <div className="form-group has-feedback">
              <input
                id="searchText"
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Buscar"
                onChange={(e) => props.filterUsers(e.target.value)}
              />
              <span className="glyphicon glyphicon-search form-control-feedback" />
            </div>
          </div>
        </div>

        <div className="row sideBar">
          {props.chat.itemConversations.filter(conversation => conversation.username.includes(props.chat.filter)).map((conversation, index) => {
            return (
              <Link to={`/conversation/${conversation.userId}`}>
                <div className="row sideBar-body">
                  <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="avatar-icon">
                      <img src={conversation.profileImg} alt="perfil" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-xs-9 sideBar-main">
                    <div className="row">
                      <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">{conversation.username}</span>
                        <p>
                          {
                            props.chat.itemConversations[index].messagesItems[
                              props.chat.itemConversations[index].messagesItems
                                .length - 1
                            ].content
                          }
                        </p>
                      </div>
                      <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">{conversation.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="side-two">
        <div className="row newMessage-heading">
          <div className="row newMessage-main">
            <div className="col-sm-2 col-xs-2 newMessage-back">
              <i className="fa fa-arrow-left" aria-hidden="true" />
            </div>
            <div className="col-sm-10 col-xs-10 newMessage-title">New Chat</div>
          </div>
        </div>

        <div className="row composeBox">
          <div className="col-sm-12 composeBox-inner">
            <div className="form-group has-feedback">
              <input
                id="composeText"
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search People"
              />
              <span className="glyphicon glyphicon-search form-control-feedback" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { chat: state.chat };
};

const mapDispatchToProps = dispatch => {
  return {
    filterUsers: (user) => dispatch(filterUsers(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
