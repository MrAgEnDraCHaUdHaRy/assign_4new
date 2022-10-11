// import { combineReducers } from "redux";
// import courses from "./course_reducer";
// const rootReducers=()=>combineReducers({
//     courses

// })
// export default rootReducers
import { combineReducers} from 'redux';
import courses from './course_reducer';

const rootReducer = combineReducers({
    courses
})

export default rootReducer
