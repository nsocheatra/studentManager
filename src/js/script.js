const addForm = document.getElementById('add-student-form');
const studentNameInput = document.getElementById('student-name');
const studentGradeInput = document.getElementById('student-grade');
const studentListElement = document.getElementById('student-list');
const totalStudentsElement = document.getElementById('total-students');
const filterGradeInput = document.getElementById('filter-grade');
const filterBtn = document.getElementById('filter-btn');
const resetBtn = document.getElementById('reset-btn');

let students = [
    { id: 1, name: 'NONG Socheatra', grade: 'E' },
    { id: 2, name: 'PRUM SAKKADA', grade: 'B' }
];

function renderStudents(studentsToDisplay) {
    studentListElement.innerHTML = '';

    if (studentsToDisplay.length === 0) {
        studentListElement.innerHTML = `<p class="text-gray-500 col-span-2 text-center">No students found.</p>`;
    } else {
        studentsToDisplay.forEach((student, index) => {
            const studentCardHTML = `
                <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 class="text-xl font-bold text-gray-800">${index + 1}. ${student.name}</h3>
                    <p class="text-gray-600 mt-2">Grade: <span class="font-semibold text-blue-600">${student.grade.toUpperCase()}</span></p>
                </div>
            `;
            studentListElement.innerHTML += studentCardHTML;
        });
    }

    totalStudentsElement.textContent = `Total Students: ${students.length}`;
}

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = studentNameInput.value.trim();
    const grade = studentGradeInput.value.trim();

    if (name && grade) {
        students.push({
            id: Date.now(),
            name: name,
            grade: grade
        });

        addForm.reset();
        studentNameInput.focus();
        
        renderStudents(students);
    }
});

filterBtn.addEventListener('click', () => {
    const filterText = filterGradeInput.value.trim().toLowerCase();

    const filteredStudents = students.filter(student => {
        return student.grade.toLowerCase().includes(filterText);
    });

    renderStudents(filteredStudents);
});

resetBtn.addEventListener('click', () => {
    filterGradeInput.value = '';
    renderStudents(students);
});

renderStudents(students);