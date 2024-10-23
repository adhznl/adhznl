async function loadStudents() {
    const response = await fetch('../data/students.json');
    const students = await response.json();
    const studentList = document.getElementById('student-list');
    students.forEach(student => {
        const div = document.createElement('div');
        div.textContent = `${student.first_name} ${student.last_name} (${student.status})`;
        studentList.appendChild(div);
    });
}

async function loadCourses() {
    const response = await fetch('../data/courses.json');
    const courses = await response.json();
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const div = document.createElement('div');
        div.textContent = `${course.name} - ${course.credits} Credits`;
        courseList.appendChild(div);
    });
}

if (document.getElementById('student-list')) {
    loadStudents();
}

if (document.getElementById('course-list')) {
    loadCourses();
}
