interface User {
    githubToken: string;
}
interface Admin extends User {
    role:"admin"|"ta"
}

 