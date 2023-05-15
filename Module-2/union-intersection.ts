// union |   interSection &

type User = {
  name: string;
  email: string;
};

// intersection
type ExtraInfo = User & {
  password: string;
  zipCode: number;
  level: "1" | "0" | "2"; //pre define value
};
// union
const userInformation: User | ExtraInfo = {
  name: "asad",
  email: "asad@gmail.com",
  level: "1",
};
