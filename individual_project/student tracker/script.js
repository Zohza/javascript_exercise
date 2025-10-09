const nameInput = document.getElementById('student-name');
const ageInput = document.getElementById('student-age');
const classInput = document.getElementById('student-class');
const urlInput = document.getElementById('image');
const firstSubInput = document.getElementById('sub1');
const secondSubInput = document.getElementById('sub2');
const thirdSubInput = document.getElementById('sub3');
const searchBar = document.getElementById('search-bar');
const tableBody = document.getElementById('tablebody');

const form = document.getElementById('student-form');
form.addEventListener('submit',function(e){
     e.preventDefault();
     addStudentInfo();
})


let students = JSON.parse(localStorage.getItem('students')) || []
getPerformance = function (average) {
     if (average >= 75) return {
          text: 'Excellent',
          class: 'excellent'
     }; else if (average >= 50) return {
          text: 'Good',
          class: 'good'
     }; else return {
          text: 'Needs help',
          class: 'needs'
     }
}

addStudentInfo = () => {
     const name = nameInput.value.trim();
     const age = ageInput.value.trim();
     const studentClass = classInput.value.trim();
     const url = urlInput.value.trim();
     const score1 = Number(firstSubInput.value.trim());
     const score2 = Number(secondSubInput.value.trim());
     const score3 = Number(thirdSubInput.value.trim());

     if (name === '' || age === '' || studentClass === '' || url === '' || isNaN(score1) || isNaN(score2) || isNaN(score3)) {
          const errorMessage = document.getElementById('Error');
          errorMessage.innerHTML='please fill all details correctly!';
          errorMessage.style.color='red';
          return;
     }
     const average = ((score1 + score2 + score3) / 3).toFixed(1);
     let performance = getPerformance(average);
     const newStudent = {
          name, age, studentClass, url, average,
          performance: performance.text
     };

     students.push(newStudent);
     localStorage.setItem('students', JSON.stringify(students));

     clearForm();
     displayStudent(students);

}

function displayStudent(studentList){
     document.getElementById('tablebody').innerHTML='';
   studentList.forEach((student, index)=> {
     const row = document.createElement('tr');
     row.innerHTML = `
     <td><img src="${student.url}" width= "50px" height ="50px"></td>
   <td> ${student.name}</td>
   <td> ${student.age}</td>
   <td> ${student.studentClass}</td>
   <td> ${student.average}</td>
   <td class="${student.performance.toLowerCase()}"> ${student.performance}</td>
   <td> <button class ="deletebuton" onclick="deleteStudent(${index})">Delete</button></td>
     `;
     tableBody.appendChild(row)

   })  
}

function deleteStudent(index){
     students.splice(index,1);
     localStorage.setItem('students',JSON.stringify(students));
     displayStudent(students)
}


function clearForm(){
     nameInput.value='';
    ageInput.value='';
     classInput.value='';
     urlInput.value='';
     firstSubInput.value='';
     secondSubInput.value='';
     thirdSubInput.value='';
  
}
windows.onload = () => displayStudent(students);
