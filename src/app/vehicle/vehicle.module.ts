import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";

@NgModule({
  declarations: [VehicleListComponent],
  imports: [CommonModule],
  exports: [VehicleListComponent],
})
export class VehicleModule {}
