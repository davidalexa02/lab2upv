let users = {
    1: {
        id: 1,
        name: "a",
        surname: "a",
        email: "a",
        password: "a"
    },
};
let workspaces = {
    1: {
        name_w: "1",
    }
};
let issues = {
    1: {
        date: "18/05/2022",
        user_id: "1",
        workspace_id: "1",
    }
};


import axios from "axios";
const url_base = 'http://localhost:9090';
const url_users = url_base + '/users.php';
const url_workspaces = url_base + '/workspaces.php';
const url_issues = url_base + '/issues.php';


function addUser(user, cb) {
    console.log(`addUser(${JSON.stringify(user)})`);
    if (!user) throw new Error("User not specified");
    axios.post(url_users, user)
        .then((resp) => {
            console.log('success: ' + JSON.stringify(resp.data));
            cb(null, resp.data);
        })
        .catch((err) => {
            if (err.response) {
                cb(new Error(err.response.status));
            } else if (err.request) {
                cb(new Error('No response received'));
            } else {
                cb(err);
            }
        });
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