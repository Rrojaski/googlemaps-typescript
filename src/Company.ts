import faker from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseInt(faker.address.latitude(), 10),
      lng: parseInt(faker.address.longitude(), 10)
    };
  }

  markerContent(): string {
    return `
    <h1>Company Name: ${this.companyName}</h1>
    <br/>
    <h3>Catchphrase: ${this.catchPhrase}</h3>
    `;
  }
}
