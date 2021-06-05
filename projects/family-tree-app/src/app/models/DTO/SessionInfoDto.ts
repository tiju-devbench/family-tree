export class SessionInfoDto{
  public data : Session;


}

export class Session{
  public member : Member;
  public antiForgeryToken : string

}

export class Member{
  public userId : number;
  public name:string


}
