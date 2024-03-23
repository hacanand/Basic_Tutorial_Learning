function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean = false) {
  let loginUser = { name, email, isPaid };
  return loginUser;
}
addTwo(3);
getUpper("hello");

const getHero = (s:string) :string =>{
  return ""
}
const heros= ["thor", "spiderman", "ironman"];
  heros.map((hero):string=>{
    
    return `hero is ${hero}`
  })

function consoleError(errmsg: string): void {
  console.log(errmsg);
  
}
function  handleError(errmsg: string): never {
  throw new Error(errmsg);
  
}