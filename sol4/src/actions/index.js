
// export const ItemsShow=async()=>{
//     const res=await fetch("http://localhost:9001/courses",{
//         method: "GET"
//     })
//     const data=await res.json()
//     return{
//         type:"COURSES_VIEW",
//         payload:data
//     }
// }
// export const PostShow=async (name,phone,email,subject)=>{
//     let random=Math.floor(Math.random()*10000);
//     let list = {
//         id:random,
//         name: name,
//         phone:phone ,
//         email:email,
//         subject:subject,
// }
//     const res=await fetch("http://localhost:9001/enquires",{
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(list),
//     })
//     const data=await res.json()
//     console.log(data)
//     return{
//         type:"POST_VIEW",
//         payload:""
//     }
// }


const url = "http://localhost:9001"

export function Courses(){
    const output = fetch(`${url}/courses`,{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_COURSES',
        payload:output
    }
}

export function PostDate(name,phone,email,subject){

    var random = Math.floor(Math.random()*1000)
    var data = {
            id:random,
            name: name,
            phone:phone ,
            email:email,
            subject:subject,
    }
      fetch(`${url}/enquiries`,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
      })

      .then((response) => response.json())


      return{
          type:'POST_FORM',
          payload: ''
      }
}