class User{
   public name: string
    age: number
    private city:string="bangalore"
    constructor(name: string, age: number) {
        this.name=name;
        this.age = age;
        this.city="bangalore";
    }
}
const nand = new User("anand", 21);
//nand.city = "jaipur";
