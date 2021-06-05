export class FamilySummaryResult {
  public data : FamilySummaries;
}

export class FamilySummaries{
  public items : FamilySummary[];

}

export class FamilySummary{
  public familyId : number;
  public name : string;
  public description : string;
  public address : string;
  public weddingAnniversary : Date;
  public mastheadTitle : number;
  //public displayImage : Image;


}
