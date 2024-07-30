
const Name =document.getElementById("name")
const age = document.getElementById("age")
const address = document.getElementById("address")
const gpa = document.getElementById("gpa")
const email = document.getElementById("email")
const skills = document.getElementById("skills")
const add = document.getElementById("add")
const update = document.getElementById("update")
const sreachInput = document.getElementById("searchInput")

let studentsContainer =[]

if (localStorage.getItem("student" )){
    studentsContainer = JSON.parse(localStorage.getItem("student"));
    Display()
}
//////////////////add////////////////
function addStudent() {
    const students ={
        name : Name.value,
        age :age.value,
        address :address.value,
        gpa:gpa.value,
        email:email.value,
        skills :skills.value,
    }
    studentsContainer.push(students);
    localStorage.setItem("student",JSON.stringify(studentsContainer));
    Display()
    clear()
}

///////////////////display////////////////////
function Display(){
    let showStudent =``;
    for (let i=0 ;i<studentsContainer.length; i++){
        showStudent +=`
        <tr>
        <td>${studentsContainer[i].name}</td>
        <td>${studentsContainer[i].age}</td>
        <td>${studentsContainer[i].address}</td>
        <td>${studentsContainer[i].gpa}</td>
        <td>${studentsContainer[i].email}</td>
        <td>${studentsContainer[i].skills}</td>
        <td><button class="fas fa-pen-to-square btn-btn-success" onclick="editStudent(${i}"></button></td>
        <td><button class="fas fa-xmark btn btn-danger" onclick="deleteStudent(${i})"></button></td>
        </tr>
        `
    }
    document.getElementById("show").innerHTML = showStudent;

}

//////////////////clear////////////////////////

function clear(){
    Name.value="";
    age.value="";
    address.value="";
    gpa.value="";
    email.value="";
    skills.value="";

}

//////////////////////deleteelement//////////////
function deleteStudent(index){
    studentsContainer.splice(index,1)
    localStorage.setItem("student",JSON.stringify(studentsContainer));
    Display()
}

//////////////////search//////////////
function searchStudent(textSearch){
    let showStudent =``;

    for (let i=0 ;i<studentsContainer.length; i++){
        if (studentsContainer[i].name.toLowerCase().includes(textSearch.toLowerCase())) {
        showStudent +=`
        <tr>
        <td>${studentsContainer[i].name}</td>
        <td>${studentsContainer[i].age}</td>
        <td>${studentsContainer[i].address}</td>
        <td>${studentsContainer[i].gpa}</td>
        <td>${studentsContainer[i].email}</td>
        <td>${studentsContainer[i].skills}</td>
        <td><button class="fas fa-pen-to-square btn-btn-success" onclick="editStudent(${i})"></button></td>
        <td><button class="fas fa-xmark btn btn-danger" onclick="deleteStudent(${i})"></button></td>
        </tr>
        `
    }
}
    document.getElementById("show").innerHTML = showStudent;
}

searchInput.addEventListener('input',()=>{
    searchStudent(searchInput.value)
})

////////update //////////
function updateStudent(currentIndex) {
    const student = getStudent();
    studentsContainer[currentIndex] = student;
    localStorage.setItem("student", JSON.stringify(studentsContainer));
    clear();
    Display();

    add.classList.remove('d-none');
    update.classList.add('d-none');
    currentIndex = -1;
}

function getStudent() {
        return {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            address: document.getElementById('address').value,
            gpa: document.getElementById('gpa').value,
            email: document.getElementById('email').value,
            skills: document.getElementById('skills').value,
        };
    }
window.editStudent = function (index) {
        const student = studentsContainer[index];
        Name.value = student.name;
        age.value = student.age;
        address.value = student.address;
        gpa.value = student.gpa;
        email.value = student.email;
        skills.value = student.skills;

        add.style.display('d-none');
        update.style.display('d-none');
        currentIndex = index;
    }



