import faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: 30.31921,
      lng: -81.658289
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
