let users = {
    1: {
        id: 1,
        name: "a",
        surname: "a",
        email: "a",
        password: "a"
    },
};
let workspaces = {};
let issues = {};

function addUser(user, cb){
    if(!user){ if(cb)(new Error("Missing user"));}
    else if(!user.name) { if(cb)(new Error("Missing name"));}
    else if(!user.surname)  {if(cb)(new Error("Missing surname"));}
    else if(!user.email) { if(cb)(new Error("Missing email"));}
    else if(!user.password) { if(cb)(new Error("Missing password"));}
    else {
        user.id = Date.now()
        user.workspaces = [];
        users[user.id] = user;
        if(cb) cb(null, user);
    }

}

function login(email, password, cb){
    if(!email){ if(cb)(new Error("Missing email"));}
    else if(!password) { if(cb)(new Error("Missing password"));}
    else{
        for(let id in users){
            if(users[id].email == email && users[id].password == password){
                if(cb) cb(null, id, users[id]);
                return;
            }
        }
        if(cb) cb(new Error("Failled autentification!"))
    }
}

function updateUser(token, userId, data, cb){
    if(!token){ if(cb)(new Error("Missing token"));}
    else if(!userId) { if(cb)(new Error("Missing userId"));}
    else if(!data) { if(cb)(new Error("Missing data"));}
    else{
        if(!users[token]) if(cb) cb(new Error("Invalid token"));
        else if(token !=userId) if(cb) cb(new Error("Operation not allowed"));
        else{
            for(let prop in data){
                users[token][prop] = data[prop];
            }
            if(cb) cb(null, users);
        }
    }
}

function removeUser(token, userId, cb){
    if(!token){ if(cb)(new Error("Missing token"));}
    else if(!userId) { if(cb)(new Error("Missing userId"));}
    else {
        if(!users[token]) if(cb) cb(new Error("Invalid token"));
        else if(token != userId) if(cb) cb(new Error("Operation not allowed"));
        else{
            delete users[token];
            if(cb) cb(null, !users[token]);
        }
    }
}

function listUsers(token, query, cb){
    
}