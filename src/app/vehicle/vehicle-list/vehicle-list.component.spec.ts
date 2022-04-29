import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { VehicleListComponent } from "./vehicle-list.component";
import { HttpClientModule } from "@angular/common/http";
import { createFakeVehicle } from "../vehicle.spec";

describe("VehicleListComponent", () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehicleListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    component.vehicles = [
      createFakeVehicle(),
      createFakeVehicle(),
      createFakeVehicle(),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have three vehicles", () => {
    expect(component.vehicles.length).toEqual(3);
  });

  it("should have a table element", () => {
    let table = debug.query(By.css("table"));

    expect(table).toBeDefined();
  });

  it("should have one row in the thead", () => {
    let tbody = debug.query(By.css("table")).children[0];
    let trows = tbody.children;

    expect(trows.length).toEqual(1);
  });

  it("should match 'Marca' table heading", () => {
    let thead = debug.query(By.css("table")).children[0];
    let trows = thead.children;

    let numberTitle = trows[0].children[0].nativeNode.innerHTML;
    let marcaTitle = trows[0].children[1].nativeNode.innerHTML;
    let lineaTitle = trows[0].children[2].nativeNode.innerHTML;
    let modeloTitle = trows[0].children[3].nativeNode.innerHTML;

    expect(numberTitle).toEqual("#");
    expect(marcaTitle).toEqual("Marca");
    expect(lineaTitle).toEqual("Línea");
    expect(modeloTitle).toEqual("Modelo");
  });

  it("should have three rows in the tbody", () => {
    let tbody = debug.query(By.css("table")).children[1];
    let trows = tbody.children;

    expect(trows.length).toEqual(3);
  });

  it("should match the vehicle's 'marca'", () => {
    let tbody = debug.query(By.css("table")).children[1];
    let trows = tbody.children;

    let firstVehicleBrand = trows[0].children[1].nativeNode.innerHTML;
    let secondVehicleBrand = trows[1].children[1].nativeNode.innerHTML;
    let thirdVehicleBrand = trows[2].children[1].nativeNode.innerHTML;

    expect(firstVehicleBrand).toContain(`${component.vehicles[0].marca}`);
    expect(secondVehicleBrand).toContain(`${component.vehicles[1].marca}`);
    expect(thirdVehicleBrand).toContain(`${component.vehicles[2].marca}`);
  });

  it("should match the vehicle's 'modelo'", () => {
    let tbody = debug.query(By.css("table")).children[1];
    let trows = tbody.children;

    let firstVehicleModelo = trows[0].children[3].nativeNode.innerHTML;
    let secondVehicleModelo = trows[1].children[3].nativeNode.innerHTML;
    let thirdVehicleModelo = trows[2].children[3].nativeNode.innerHTML;

    expect(firstVehicleModelo).toContain(`${component.vehicles[0].modelo}`);
    expect(secondVehicleModelo).toContain(`${component.vehicles[1].modelo}`);
    expect(thirdVehicleModelo).toContain(`${component.vehicles[2].modelo}`);
  });
});
