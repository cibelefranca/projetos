function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Carlos', 'Admin');
usuarios.set('Pedro', 'User');
usuarios.set('Sofia', 'Admin');

console.log(getAdmins(usuarios));