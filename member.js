function addMember() {
    var member = new member();
    member.name = "John";
    member.age = 30;
    member.save(function(err) {
        if (err) throw err;
        console.log('Member saved successfully!');
    });
}

