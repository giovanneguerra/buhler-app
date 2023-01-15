import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from './models/machine';
import { MachineService } from './services/machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  machines$?: Observable<Machine[]>;

  constructor(private machineService: MachineService) {}

  ngOnInit() {
    this.machines$ = this.machineService.getMachinesData();
  }
}
