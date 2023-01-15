import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private machinesJson = 'assets/mock/machines.json';
  constructor(private http: HttpClient) {}

  public getMachinesData(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.machinesJson);
  }
}
