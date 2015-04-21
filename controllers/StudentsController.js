studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {

    $scope.students = StudentsFactory.students;

    $scope.addStudent = function() {
        var name = $scope.studentName;
        StudentsFactory.addStudent(name);
        $scope.studentName = null;
    };

    $scope.deleteStudent = function(student) {
        var index = $scope.students.indexOf(student);
        $scope.students.splice(index, 1);
    };

});
