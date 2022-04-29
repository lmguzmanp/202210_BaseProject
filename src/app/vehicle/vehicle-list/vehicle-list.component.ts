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

  constructor(private vehicleService: VehicleService) {}

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}
