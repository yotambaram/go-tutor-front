import React from 'react'
import "./style.css"

export default function ProfileCard(props) {
    console.log(props);
    
    return (
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="http://placekitten.com/200/300" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div className="media-content">
    <p className="title is-4">{props.userdata.first_name} {props.userdata.last_name}</p>
        <p className="subtitle is-6">{props.userdata.email}</p>
      </div>
    </div>

    <div className="content">
     <a>{props.userdata.email}</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
    )
}
