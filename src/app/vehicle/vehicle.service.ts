import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vehicle } from "./vehicle";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  private apiUrl = `${environment.baseUrl}/202212_MISW4104_Grupo1.json`;

  constructor(private httpClient: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(this.apiUrl);
  }
}
