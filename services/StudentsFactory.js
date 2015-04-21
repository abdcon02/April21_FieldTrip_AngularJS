studentRoster.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [];

    factory.addStudent = function (name) {
        this.students.push( { name: name } );
    };

    factory.deleteStudent = function(student) {
        var index = factory.students.indexOf(student);
        factory.students.splice(index, 1);
    };
    return factory;
})
