let users = {
    "u1": {
        id: "u1",
        name: "User 1",
        surname: "Surname 1",
        email: "a",
        password: "a",
        workspaces: ["w1"]
    },
    "u2": {
        id: "u2",
        name: "User 2",
        surname: "Surname 2",
        email: "u2@upv.es",
        password: "xxx",
        workspaces: ["w1"]
    },
};
let workspaces = {
    "w1": {
        id: "w1",
        title: "Workspace 1",
        desc: "Workspace 1",
        users: ["u1", "u2"]
    },
    "w2": {
        id: "w2",
        title: "Workspace 2",
        desc: "Workspace 2",
        users: ["u1", "u2"]
    }
};
let issues = {
    "i1": {
        id: "i1",
        workspace: "w1",
        title: "Issue 1",
        ini: 1633284222739,
        due: 1633284222739,
        actions: [
            {
                type: "propose",
                created: 1633284222739,
                owner: "u1",
                content: ""
            },
            {
                type: "assign",
                created: 1633284222739,
                owner: "u1",
                content: "u2"
            },
            {
                type: "accept",
                created: 1633284222739,
                owner: "u2",
                content: ""
            },
            {
                type: "complete",
                created: 1633284222739,
                owner: "u2",
                content: ""
            },
        ]
    },
    "i2": {
        id: "i2",
        workspace: "w1",
        title: "Issue 2",
        ini: 1633284222739,
        due: 1633284222739,
        actions: []
    },
    "i3": {
        id: "i3",
        workspace: "w1",
        title: "Issue 3",
        ini: 1633284222739,
        due: 1633284222739,
        actions: []
    },


};

export {
    issues,
    workspaces,
}

function addUser(user, cb) {
    if (!user) { if (cb) (new Error("Missing user")); }
    else if (!user.name) { if (cb) (new Error("Missing name")); }
    else if (!user.surname) { if (cb) (new Error("Missing surname")); }
    else if (!user.email) { if (cb) (new Error("Missing email")); }
    else if (!user.password) { if (cb) (new Error("Missing password")); }
    else {
        user.id = Date.now()
        user.workspaces = [];
        users[user.id] = user;
        if (cb) cb(null, user);
    }

}

function login(email, password, cb) {
    if (!email) { if (cb) (new Error("Missing email")); }
    else if (!password) { if (cb) (new Error("Missing password")); }
    else {
        for (let id in users) {
            if (users[id].email == email && users[id].password == password) {
                if (cb) cb(null, id, users[id]);
                return;
            }
        }
        if (cb) cb(new Error("Failled autentification!"))
    }
}

function updateUser(token, userId, data, cb) {
    if (!token) { if (cb) (new Error("Missing token")); }
    else if (!userId) { if (cb) (new Error("Missing userId")); }
    else if (!data) { if (cb) (new Error("Missing data")); }
    else {
        if (!users[token]) if (cb) cb(new Error("Invalid token"));
        else if (token != userId) if (cb) cb(new Error("Operation not allowed"));
        else {
            for (let prop in data) {
                users[token][prop] = data[prop];
            }
            if (cb) cb(null, users);
        }
    }
}

function removeUser(token, userId, cb) {
    if (!token) { if (cb) (new Error("Missing token")); }
    else if (!userId) { if (cb) (new Error("Missing userId")); }
    else {
        if (!users[token]) if (cb) cb(new Error("Invalid token"));
        else if (token != userId) if (cb) cb(new Error("Operation not allowed"));
        else {
            delete users[token];
            if (cb) cb(null, !users[token]);
        }
    }
}

function listUsers(token, query, cb) {

}
export default {
    login,
    addUser,
    updateUser,
    removeUser
}