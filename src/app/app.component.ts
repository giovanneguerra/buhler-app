import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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

  constructor(private machineService: MachineService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.machines$ = this.machineService.getMachinesData();
  }

  generateJSONDownload(value: Machine[]): SafeUrl {
    const json = JSON.stringify(value);
    return this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(json));
  }

}
