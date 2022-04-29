import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { VehicleModule } from "./vehicle/vehicle.module";
import { HttpClientModule } from "@angular/common/http";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        VehicleModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TuSegundazo.com'`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app.title).toEqual("TuSegundazo.com");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".header__title a")?.textContent).toContain(
      "TuSegundazo.com"
    );
  });

  it("should render hero section", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".hero")).toBeTruthy();
  });

  it("should render a footer with my GitHub main username", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector(".footer > p")?.lastChild?.textContent
    ).toContain("@lmaero");
  });
});
