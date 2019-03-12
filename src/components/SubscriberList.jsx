import React, { Component } from "react";
import Subscriber from "./Subscriber";
import _ from "lodash";

class SubscriberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriber: {}
    };
    let app = this.props.db.database().ref("subscriber");
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    let messagesVal = values;
    let subscriber = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      subscriber: subscriber
    });
  }

  render() {
    let messageNodes = this.state.subscriber.map(message => {
      return (
        <div className="card">
          <div className="card-content">
            <Subscriber message={message.message} />
          </div>
        </div>
      );
    });
    return <div>{messageNodes}</div>;
  }
}

export default SubscriberList;
