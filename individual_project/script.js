let name = document.getElementById('student-name').value.trim();
let age = Number(document.getElementById('student-age').value.trim());
let url = document.getElementById('image').value.trim();
let subject1 = Number(document.getElementById('sub1').value.trim());
let subject2 = Number(document.getElementById('sub2').value.trim());
let subject3 = Number(document.getElementById('sub3').value.trim());
const average = ((subject1+subject2+subject3)/3).toFixed(2)



let students = JSON.parse(localStorage.getItem('students'))|| [];
console.log(students);



addStudentInfo() = () =>{
 
 
if (name !== "" && age !== ""&& url !== ""&& subject1 !== ""&& subject2 !== ""&& subject3 !== ""){
    
}
}
