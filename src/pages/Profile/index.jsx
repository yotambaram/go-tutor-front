import React, { useState } from 'react'
import ProfileCard from "../../components/ProfileCard"
import "./style.css"
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';




export default function Profile(props) {
    const User = props.currentUser;
    return (

        <div className="ProfilePage center-element">

            <div className="columns ">
                <div className="column is-2">
                    <ProfileCard userdata={User} studentsearch={props.studentsearch} teachersearch={props.teachersearch}/>
                </div>
                <div className="column is-4 center-element">
                    <button className="button is-link is-outlined tutor-button"><Link to='/newTeacherPost'>LOOK FOR A STUDENT</Link></button>
                    <ul className="center-element">
                        {props.studentsearch ? props.studentsearch.map(userInfo => (
                            <li key={userInfo.id}>
                                <div className="box studentbox">
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image is-64x64">
                                                <img src={userInfo.studentResults ? userInfo.studentResults[0].User.picture : "https://bulma.io/images/placeholders/128x128.png"} alt="picture" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{userInfo.studentResults ? userInfo.studentResults[0].User.first_name + " " + userInfo.studentResults[0].User.last_name : ""}</strong> <small> asks for help on {userInfo.postDate}</small>
                                                    <br />
                                                    <strong>This student is looking for a tutor. </strong>
                            You have  <strong>{Math.floor(userInfo.percentage)}%</strong> of the skills he is looking for.
                            <br />
                            you can connect him by Email:<br /> {userInfo.studentResults ? userInfo.studentResults[0].User.email : ""}

                                                </p>
                                            </div>
                                            <nav className="level is-mobile">
                                                <div className="level-left">
                                                    <a className="level-item" aria-label="reply">
                                                        <span className="icon is-small">
                                                            <i className="fas fa-reply" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a className="level-item" aria-label="retweet">
                                                        <span className="icon is-small">
                                                            <i className="fas fa-retweet" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a className="level-item" aria-label="like">
                                                        <span className="icon is-small">
                                                            <i className="fas fa-heart" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </article>
                                </div>




                            </li>
                        )) : ""}
                    </ul>
                    <div className="palceholder"></div>
                </div>
                <div className="column is-4">
                    <button className="button is-danger is-outlined tutor-button"><Link to='/newpost'>LOOK FOR TEACHER</Link></button>


                    <ul>

                        {props.teachersearch ? props.teachersearch.map(userInfo => (
                            <li key={userInfo.userID}>
                                <div className="box teacherbox">
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image is-64x64">
                                                <img src={userInfo.teacherResults ? userInfo.teacherResults[0].User.picture : "https://bulma.io/images/placeholders/128x128.png"} alt="picture" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{userInfo.teacherResults ? userInfo.teacherResults[0].User.first_name + " " + userInfo.teacherResults[0].User.last_name : ""}</strong> <small>asks for help on {userInfo.postDate}</small>
                                                    <br />

                                                        You have  <strong>{Math.floor(userInfo.percentage)}%</strong> of the skill he is looking for!
                                                        <br />
                                                        you can connect him by Email:<br /> {userInfo.teacherResults ? userInfo.teacherResults[0].User.email: ""}
                                                </p>
                                            </div>
                                            <nav className="level is-mobile">
                                                <div className="level-left">
                                                    <a className="level-item" aria-label="reply">
                                                        <span className="icon is-small">
                                                            <i className="fas fa-reply" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a className="level-item" aria-label="retweet">
                                                        <span className="icon is-small">
                                                            <i className="fas fa-retweet" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a className="level-item" aria-label="like">
                                                        <span className="icon is-small">
                                                            <i className="fas fa-heart" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </article>
                                </div>

                            </li>

                        )) : ""}
                    </ul>

                </div>
                <div className="column is-2">
                    {User.Teacher ?
                        <div className="box teacher-box">
                            <article className="media">
                                <div className="media-content">
                                    <div className="content center-element">
                                        <br />
                                        <div >
                                            <p className="title is-4 ">Your Teacher Post</p>
                                            <p className="title is-6 left-element">ABOUT: <span className="is-4">{User.Teacher.about}</span></p>
                                            <p className="title is-6 left-element">SKILLS:</p>
                                            <div className="select is-multiple">
                                                <select multiple size="4">
                                                    {User.TeacherSkills.map(element => <option key={element.skill} value={element.skill}> {element.skill}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        : ""}
                    {User.Teacher ?
                        <div className="box student-post">
                            <article className="media">
                                <div className="media-content">
                                    <div className="content center-element">
                                        <br />
                                        <div >
                                            <p className="title is-4 ">Your Student Post</p>
                                            <p className="title is-6 left-element">ABOUT: <span className="is-4">{User.Studentpost.about}</span></p>
                                            <p className="title is-6 left-element">SKILLS:</p>
                                            <div className="select is-multiple">
                                                <select multiple size="4">
                                                    {User.StudentSkills.map(element => <option key={element.skill} value={element.skill}> {element.skill}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                        : ""}











                </div>



            </div>













        </div>

    )
}




