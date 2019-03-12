import React, {
  Component
} from "react";
import {
  fire
} from "./config/fbConfig";
import "./App.css";
import image from "./static/images/phone_4.svg";
import gif from "./static/images/load_7.gif";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribers: [],
      loading: false
    };

    this.itemsRef = fire.ref("subscriber");
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.itemsRef.on("value", data => {
      var subscriber = data.val() || {};
      console.log(subscriber);
      var keys = Object.keys(subscriber);
      const subscribers = keys.map(key => ({
        key,
        ...subscriber[key]
      }));
      this.setState({
        subscribers,
        loading: false
      });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.refs.phone_number.value.length !== 10) {
      alert("Invalid Phone Number");
    } else {
      this.itemsRef.push({
        username: this.refs.username.value,
        phone_number: this.refs.phone_number.value
      });

      this.refs.username.value = "";
      this.refs.phone_number.value = "";
    }
  };

  deleteSubscriber = id => {
    this.itemsRef.update({
      [id.key]: null
    });
  };

  render() {
    const {
      length: count
    } = this.state.subscribers;
    return ( <
      React.Fragment >
      <
      div className = "container" >
      <
      div >
      <
      img className = "logo"
      src = {
        image
      }
      alt = "logo" / >
      <
      h1 > phone - e - diary < /h1> <
      form onSubmit = {
        this.handleSubmit
      } >
      <
      div className = "form-group"
      id = "spc-1" >
      <
      div className = "input-1" >
      <
      i className = "fa fa-user" / >
      <
      input type = "text"
      className = "form-control"
      ref = "username"
      placeholder = "Your name"
      required /
      >
      <
      /div> < /
      div > <
      div className = "form-group" >
      <
      div className = "input-1" >
      <
      i className = "fa fa-phone" / >
      <
      input type = "number"
      className = "form-control"
      minLength = "10"
      maxLength = "10"
      size = "10"
      ref = "phone_number"
      placeholder = "Your phone number"
      required /
      >
      <
      /div> < /
      div > <
      button type = "submit"
      className = "btn btn-primary" >
      Add <
      /button> < /
      form > <
      /div> < /
      div > {
        this.state.loading ? ( <
          div className = "gif" >
          <
          img src = {
            gif
          }
          alt = "gif" / >
          <
          /div>
        ) : count === 0 ? ( <
          p className = "gif" > There is no subscriber in the Database < /p>
        ) : ( <
          div className = "list" >
          <
          table className = "table" >
          <
          thead >
          <
          tr id = "tablehead" >
          <
          th id = "name" > Name < /th> <
          th id = "phone" > Phone Number < /th> <
          th id = "null" / >
          <
          /tr> < /
          thead > <
          tbody > {
            this.state.subscribers.map(subscriber => ( <
              tr key = {
                subscriber.key
              } >
              <
              td className = "user" > {
                subscriber.username
              } < /td> <
              td className = "mobno" > {
                subscriber.phone_number
              } < /td> <
              td >
              <
              button className = "delete--button"
              onClick = {
                () => this.deleteSubscriber(subscriber)
              } >
              Delete <
              /button> < /
              td > <
              /tr>
            ))
          } <
          /tbody> < /
          table > <
          /div>
        )
      } <
      /React.Fragment>
    );
  }
}

export default App;