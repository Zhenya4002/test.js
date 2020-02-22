class User {
    constructor(firstName, lastName, password, skills, isSuperuser = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.isSuperuser = isSuperuser;
        this.string = (list) => {
            let string = new String('');
            for (let i = 0; i < list.length; i++) {
              string += `${list[i]} `;}
            return string;
        }
        this.skills = this.string(skills);
    }
    info() {
        console.table({
            'First name': this.firstName,
            'Last name': this.lastName,
            'Skills': this.skills,
            'Password': String('*').repeat(this.password.length),
            'Is superuser': this.isSuperuser ? 'Yes' : 'No'
        });
    }
    correct(type, value) {
        switch (type) {
            case 'First name':   this.firstName = value;   break;
            case 'Last name':    this.lastName = value;    break;
            case 'Password':     this.password = value;    break;
            case 'Skills':       this.skills = value;      break;
            case 'Is superuser': this.isSuperuser = value; break;
            default: console.log(Error('There is no such argument.'))
        }
    }
}

class Users {
    constructor(users) {
        if (typeof users != 'object') {
            console.log(Error('The argument must be a list.'))
        }
        this.users = users;
    }
    getByPassword(password) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].password == password) {
                return this.users[i];
            }
            else {
                console.log(Error('User not found.'))
            }
        }
    }
}

const user1 = new User('Max', 'Daniels', 'u9g5jh#jju)hg%', ['python', 'js', 'db']);
const user2 = new User('John', 'Cena', '7gjj@k&jgd$u3vk', ['c++', 'c#', 'db']);
user1.correct('First name', 'Adam');

users = new Users([user1, user2]);
Adam = users.getByPassword('u9g5jh#jju)hg%');

Adam.info();
user2.info();
