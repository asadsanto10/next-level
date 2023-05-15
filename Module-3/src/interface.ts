interface IUser {
  name: string;
  email: string;
  userId: number;
}

interface IExtraInfo extends IUser {
  lastLogin: string;
}

// type extraInfo = IUser & {
//   isActive: boolean;
// };

const infoUser: IExtraInfo = {
  email: "info@example.com",
  name: "info",
  userId: 45,
  lastLogin: "lastLogin",
};

interface IDemoArr {
  [index: number]: number;
}

const demoArr: IDemoArr = [1, 4, 5, 6, 7];
