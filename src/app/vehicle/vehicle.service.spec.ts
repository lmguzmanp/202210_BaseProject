import { TestBed } from "@angular/core/testing";

import { VehicleService } from "./vehicle.service";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

describe("VehicleService", () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VehicleService],
    });
    service = TestBed.inject(VehicleService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should have a getVehicles defined function", () => {
    expect(service.getVehicles).toBeDefined();
  });

  it("should return an Observable", () => {
    expect(service.getVehicles()).toBeInstanceOf(Observable);
  });
});
