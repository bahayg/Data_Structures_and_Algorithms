function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        if ((grades[i] > 37) && (grades[i] + 1) % 5 === 0) grades[i] = (grades[i] + 1)
        if ((grades[i] > 37) && (grades[i] + 2) % 5 === 0) grades[i] = (grades[i] + 2)
    }
    return grades
}
