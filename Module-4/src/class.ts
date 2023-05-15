// class

// paramaters use korle typescript auto compile kore type declear kore fele. tar jonno method ar parameter gulake public korte hobe.

class UserClassInfo {
  // name: string;
  // email: string;
  // isActive: boolean;

  constructor(
    public name: string,
    public email: string,
    public isActive: boolean
  ) {
    // this.name = name;
    // this.email = email;
    // this.isActive = isActive;
  }

  public makeUser() {
    console.log(
      "user make " + this.name + " Email " + this.email + " is " + this.isActive
    );
  }
}

const callUser = new UserClassInfo("asad", "asad@gmail.com", true);
callUser.makeUser();
