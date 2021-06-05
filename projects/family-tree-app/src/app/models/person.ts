import {Deserializable} from './deserializable.model';
import {Contact} from './contact';
import { Photo } from './photo';

export class Person implements Deserializable {
  public id: number;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public contact : Contact;
  public photoUrl: string;
  public photos?: Photo[];


  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize to prevent already deserialized objects from being overwritten.
    Object.assign(this, input);

    // Iterate over all cars for our user and map them to a proper `Car` model
    //this.cars = input.cars.map(car => new Car().deserialize(car));

    return this;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
