import { Pipe, PipeTransform } from '@angular/core';
import { MachineState } from '../models/machine-state';

@Pipe({
  name: 'machineState'
})
export class MachineStatePipe implements PipeTransform {

  transform(value: MachineState): string {
    return this.getIcon(value);
  }

  getIcon(state: MachineState): string {
    switch(state) {
      case MachineState.RUNNING : return 'update';
      case MachineState.WARNING : return'warning';
      case MachineState.ALARM : return 'error';
    }
  }

}
