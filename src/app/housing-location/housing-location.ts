import { Component, input } from '@angular/core';
import {HousingLocationInterface} from "./interface/housing.interface"
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: "housing-location.html"
})

export class HousingLocation {
  housingLocation = input.required<HousingLocationInterface>();
}
