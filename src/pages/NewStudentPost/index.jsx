import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import FilterSkills from '../../components/Filter';



export default function NewStudentPost(props) {    
        const [userState, setUserState] = useState({
          skills: ["None"],
            about: ""
            
        });
        const history = useHistory();

        const loginState = {
          email:props.currentUser.email
          
        }
        
        const handleInputChange = event => {
          const { name, value } = event.target;
          setUserState({
              ...userState,
              [name]: value
          })
        };
        
        
        const handleFormSubmit = event => {
          event.preventDefault();
          
        API.deleteCurrentPost()
        .then(result => {
          API.createStudentPost(userState)
          .then(newUser => {
              setUserState({
                about: ""
              })
              API.deleteStudentSkills()
              .then(result => {
                API.saveStudentSkills(userState.skills)
                .then(result => {
                  API.login(loginState)
                  .then(res=>{
                      props.submitHandler(res.data)
                      history.push("/profile");
                  })
                })
                .catch(err => {
                  console.log(err);
                })
              })
              .catch(err => {
                console.log(err);
              })
            })
            .catch(err => {
              console.log(err);
            })
          })
          .catch(err => {
            console.log(err);
          })

          

              API.getTeacherMatch({skills:userState.skills.join(",")})
              .then(newUser => {
                props.passTeachers(newUser.data);
              })
              .catch(err => {
                console.log(err);
              })
        
        }

        const getSkills = chosen => {
          let chosenskills = chosen;
          setUserState({
            ...userState,
            skills: chosenskills
        })
        
        }
        
        
            return (
                <div className = "UserForm">
                  <label className="label is-large">Post your Add as a Student:</label>
                  <FilterSkills getSkills={getSkills}/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                    
        
        <div className="field">
          <label className="label">About</label>
          <div className="control">
            <input className="input" type="text" onChange={handleInputChange} name="about" value={userState.about} placeholder="About"/>
          </div>
        </div>
        
        
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light"><Link to ='/profile'>Cancel</Link></button>
          </div>
        </div>
        
        </div>
    )
}
