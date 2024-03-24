type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: true;
  creditCard?: number;
};

// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "anand", isPaid: true });

// createUser(User);
// function createCourse(): { name: string; price: number } {
//   return { name: "anand", price: 10 };
// }

// function createCourse(user = User): typeof User{
//     return{name:" ", email: "", isPaid:false, isActive:true}
// }

let myUser: User = {
  _id: "123",
  name: "anand",
  email: "anand@gmail.com",
  isActive: true,
};
type creditCardNumber = {
  cardNumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = creditCardNumber &
  cardDate & {
    cvv: number;
  };

export {};
