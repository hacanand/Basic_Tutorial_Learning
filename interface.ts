interface User{
    githubToken: string;
}
interface Admin extends User {
    role:"admin"|"ta"
}

const anand: Admin= {
    githubToken:"kljgldjgl",
    role:"admin",
}
    