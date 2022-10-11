// const courses=(state={},action)=>{
//     switch(action.type){
//         case "COURSES_VIEW":
//             return {
//                 ...state,items:action.payload
//             }
//         case "POST_VIEW":
//             return {
//                 ...state,info:action.payload
//             }
//         default:
//             return state    
//     }
// }
// export default courses
export default function(state={}, action){
    switch(action.type){
        case 'GET_COURSES':
            return{...state,topics:action.payload}
        case 'POST_COURSES':
            return{...state,article:action.payload}
        default:
            return state
    }
}