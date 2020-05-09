import React from "react";
import { connect } from "react-redux";
import Sidebar from "../sidebar/sidebar-component";
import {useParams} from 'react-router-dom';
import {setCurrentMessage, sendMessage} from '../../redux/mensajes/mensajes-actions';

function Chat(props) {
  let { id } = useParams();
  return (
    <div className="container app">
      <div className="row app-one">
        <Sidebar />
        
        <div className="col-sm-8 conversation">
          <div className="row heading">
            <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
              <div className="heading-avatar-icon">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
              </div>
            </div>
            <div className="col-sm-8 col-xs-7 heading-name">
              <a className="heading-name-meta">John Doe</a>
              <span className="heading-online">Online</span>
            </div>
            <div className="col-sm-1 col-xs-1  heading-dot pull-right">
              <i
                className="fa fa-ellipsis-v fa-2x  pull-right"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="row message" id="conversation">
            <div className="row message-previous">
              <div className="col-sm-12 previous">
                <a onclick="previous(this)" id="ankitjain28" name="20">
                  Show Previous Message!
                  {id}
                </a>
              </div>
            </div>

            {/* Mensajes */}
            
            {
              props.chat.itemConversations.filter(conversation => conversation.userId === id)[0].messagesItems.map(chat => {
                {return (
                  <div className="row message-body">
                    <div className="col-sm-12 message-main-receiver">
                      <div
                        className={chat.senderId === 1232 ? "sender" : "receiver"}
                      >
                        <div className="message-text">{chat.content}</div>
                        <span className="message-time pull-right">
                          {chat.date}
                        </span>
                      </div>
                    </div>
                  </div>
                );}
                
              })
            }
          </div>

          <div className="row reply">
            <div className="col-sm-1 col-xs-1 reply-emojis">
              <i className="fa fa-smile-o fa-2x" />
            </div>
            <div className="col-sm-9 col-xs-9 reply-main">
              <textarea className="form-control" rows="1" id="comment" onChange={(e) => props.setCurrentMessage(e.target.value)}/>
            </div>
            <div className="col-sm-1 col-xs-1 reply-recording">
              <i className="fa fa-microphone fa-2x" aria-hidden="true" />
            </div>
            <div className="col-sm-1 col-xs-1 reply-send" onClick={() => props.sendMessage(id)}>
              {/* <i className="fa fa-send fa-2x" aria-hidden="true" /> */}
              Enviar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message)),
    sendMessage: (id) => dispatch(sendMessage(id)) 
  }
}

const mapStateToProps = state => {
  return { chat: state.chat };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
