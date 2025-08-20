import { Injectable } from '@angular/core';
import { HousingLocationInterface } from '../interface/housing.interface';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  url = "http://localhost:3000/locations";

  async getAllHousingLocations(): Promise<HousingLocationInterface[]> {
    const dadosCasas = await fetch(this.url);
    return (await dadosCasas.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInterface | undefined> {
    const homes = await fetch(`${this.url}?id=${id}`);
    const jsonHomes = await homes.json();
    return jsonHomes[0]?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
