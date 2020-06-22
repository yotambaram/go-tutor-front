import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import "./style.css"


//const logoX = "https://avatars2.githubusercontent.com/u/56105414?s=400&u=e52d89d5d9701146a87f29bb59c3d47fd362b66b&v=4"

function FilterSkills(props) {
 // const [allSkillsState, setAllSkillsState] = useState([])
  const [skillState, setWorkingSkillsState] = useState([])
  const [chosenSkillState, setChosenSkillState] = useState([])
  const [searchState, setSearchState] = useState("");
  //const [saveState, setSaveState] = useState([]);

  //all skills
  useEffect(() => {
    API.getSkillResult().then(res => {
      const skillsArr = res.data.map(skill => skill.skill)
  //    setAllSkillsState(skillsArr)
      setWorkingSkillsState(skillsArr)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  //filter the skills
  useEffect(() => {
    const tempState = [...skillState];
    const filteredSkills = tempState.filter(skill => {
      if (skill.toLowerCase().includes(searchState)) {
        return true
      } else {
        return false
      }
    })
    setWorkingSkillsState(filteredSkills);
  }, [searchState])

  // save user search state to db
  // useEffect(() => {
  //   API.saveUserSkills(saveState).then(result => {
  //     console.log(result)
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }, [saveState])

  

  const handleSkillClick = event => {
    event.preventDefault()
    setChosenSkillState([...chosenSkillState, event.target.value])
    for(let i = 0; i < skillState.length; i++ ) {
      if(skillState[i] === event.target.value) {
        skillState.splice(i, 1)
      }
    }

    props.getSkills([...chosenSkillState, event.target.value])


  }

  const handleInput = event => {
    event.preventDefault()
    setSearchState(event.target.value.toLowerCase());


  }

  const handleSkillClick2 = event => {
    event.preventDefault()
    setWorkingSkillsState([...skillState, event.target.value])
    for(let i = 0; i < chosenSkillState.length; i++ ) {
      if(chosenSkillState[i] === event.target.value) {
        chosenSkillState.splice(i, 1)
      }
    }

    props.getSkills(...chosenSkillState, event.target.value)

  }

  // const handleSearch = event => {
  //   event.preventDefault()
  //   if(chosenSkillState){
  //     setSaveState(chosenSkillState)
  //   } else{
  //     alert("didnt choose skills") //we need to change the alert to nice html
  //   }

  // }

  return (
    <div className="container1">
    <div className="filter-card">
      <div className="find-card-header">
        <span className="Txt" className="navbar-brand find-card-header"><h1>Find Skills</h1></span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0">
                <input onChange={handleInput} className="form-control mr-sm-2" type="search" placeholder="Filter Skills here" aria-label="Search" />
              </form>
            </div>
      </div>

      <div className="card-content border">
      <div id="skill-holder" className="row">
          {skillState.map(skill => (
            <div className="row" key={skill}>
              <button onClick={handleSkillClick} className="button is-rounded is-small " value={skill}>{skill} </button>
            </div>
          ))}
        </div>
        </div> 
        
        <div className="content border">
        {/* <span><img src={logoX} alt="logo" height="15" width="15"/> </span> */}
        {chosenSkillState.map(skill => (
            <div className="row" key={skill}>
              <button onClick={handleSkillClick2} className="button is-primary is-rounded is-small" value={skill}>{skill}</button>
            </div>
          ))}
          {/* <button onClick={handleSearch} className="button is-rounded is-small"> SEARCH </button> */}
    </div>

        </div>
        </div>
    

  )
}
export default FilterSkills;




// SORT



    // //filtered skills
    // useEffect(() => {
    //   chosenSkillsState.filter(skill => {
    //     if (skill.skill.toLowerCase().includes(searchState)) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   })
    // }, [chosenSkillState])
    
  /*
  useEffect(() => {
    const NewskillState = [...skillState];
    if (NewskillState.length > 0) {
      if (NewskillState[0].name.first > NewskillState[NewskillState.length - 1].name.first) {
        NewskillState.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
      } else {
        NewskillState.sort((a, b) => a.name.first < b.name.first ? 1 : -1)
      }
      setWorkingSkillsState(NewskillState);
    }
  }, [sortedState])
  */

  // const hundleSort = event => {
  //   event.preventDefault()
  //   setSortedState(...skillState);
  // }