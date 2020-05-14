import axios from "axios";

// const BASE_URL = "https://joes-baseball-stats-api.herokuapp.com"
const BASE_URL = "http://localhost:8080"
const API = {
    login:function(userData){
        return axios.get(`${BASE_URL}/login`,userData)
    },
    createUser:function(userData){
        return axios.post(`${BASE_URL}/userSignup`,userData,{withCredentials:true})
    },
    createStudentPost:function(userData){
        return axios.post(`${BASE_URL}/posts`,userData,{withCredentials:true})
    },
    createTeacherPost:function(userData){
        return axios.post(`${BASE_URL}/signup/teacher`,userData,{withCredentials:true})
    },

}
export default API
