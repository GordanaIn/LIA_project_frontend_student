
const StudentClient = {
    getStudents:()=>{
        return fetch('http://localhost:8080/stud').then(res=>res.json());
    },
    getStudent:(studId)=>{
        return (studId != null) ?
            fetch( `http://localhost:8080/stud/${studId}`)
                .then(resp => resp.json()).catch(err=>console.log(err))
            : "Student not found";
    },
    searchStudents:(status)=>{
        return fetch( `http://localhost:8080/stud/search/${status}`)
            .then(resp => resp.json());
    },

}
export default StudentClient;