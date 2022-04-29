import { Component, OnInit } from "@angular/core";
import { VehicleService } from "../vehicle.service";
import { Vehicle } from "../vehicle";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"],
})
export class VehicleListComponent implements OnInit {
  vehicles!: Vehicle[];

  // The following type was needed to allow iteration over string index
  vehiclesPerBrand: { [key: string]: { marca: string; quantity: number } } = {};

  // The following type allows to organize ObjectOfObjects into ArrayOfObjects
  totalsPerBrand: { marca: string; quantity: number }[] = [];

  constructor(private vehicleService: VehicleService) {}

  addBrands(vehicles: Vehicle[]): void {
    vehicles.forEach(({ marca }) => {
      if (!this.vehiclesPerBrand[marca]) {
        this.vehiclesPerBrand[marca] = { marca, quantity: 0 };
      }
      this.vehiclesPerBrand[marca].quantity += 1;
    });

    // Convert ObjectOfObjects to ArrayOfObjects
    Object.keys(this.vehiclesPerBrand).map(marca => {
      this.totalsPerBrand.push(this.vehiclesPerBrand[marca]);
    });
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
      this.addBrands(vehicles);
    });
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}
