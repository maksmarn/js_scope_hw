let someUser = {
    firstName: "Smart",
    lastName: "Ninja",
    powerLevel: 9000,

    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    } // In this case, 'this' refers to someUser
}

someUser.fullName();