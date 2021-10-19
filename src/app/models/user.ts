export class User{
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
}
public FirstName:string;
public LastName:string;
public UserName:string;
public Password:string;
}
