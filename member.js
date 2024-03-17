function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'React', 'Node'],
        print: function() {
            console.log(this.name + ' is ' + this.age + ' years old and knows ' + this.skills);
        }
    };
    return member;
}