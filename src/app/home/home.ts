import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInterface } from '../housing-location/interface/housing.interface';
import { HousingService } from '../housing-location/service/housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: "home.html"
})
export class Home {
  housingLocationList: HousingLocationInterface[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInterface[] = [];
  
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(h => 
        h?.city.toLowerCase().includes(text.toLowerCase()));
  }
}

