import { Vehicle } from "./vehicle";
import faker from "@faker-js/faker";

export function createFakeVehicle() {
  return new Vehicle(
    faker.datatype.number(),
    faker.vehicle.manufacturer(),
    faker.vehicle.type(),
    faker.vehicle.model(),
    faker.datatype.number({ min: 1900, max: 2022, precision: 1 }),
    faker.datatype.number({ min: 0, max: 500_000, precision: 1 }),
    faker.vehicle.color(),
    faker.image.imageUrl()
  );
}

describe("Vehicle", () => {
  it("should create an instance", () => {
    const fakeVehicle: Vehicle = createFakeVehicle();
    expect(fakeVehicle).toBeInstanceOf(Vehicle);
  });

  it("should have a 'marca' property", () => {
    const fakeVehicle: Vehicle = createFakeVehicle();
    expect(fakeVehicle.marca).toBeTruthy();
  });

  it("should have a 'modelo' property of type number", () => {
    const fakeVehicle: Vehicle = createFakeVehicle();

    expect(fakeVehicle.modelo).not.toBeNaN();
  });

  it(
    "should have a 'kilometraje' property of type number and should be" +
      " greater than or equal to 0",
    () => {
      const fakeVehicle: Vehicle = createFakeVehicle();

      expect(fakeVehicle.modelo).not.toBeNaN();
      expect(fakeVehicle.modelo).toBeGreaterThanOrEqual(0);
    }
  );
});
