

// structural typing or duck typing 
interface ICredential {
    username : string;
    password : string;
    isAdmin : boolean;
}

function login(credentials :ICredential): boolean{
    console.log(credentials);
    return true;
}



const myUser = {
    username : "Manik",
    password : "heythere",
    isAdmin : true
}

login(myUser)


