import { MachineState } from "./machine-state"

export interface Machine {
  id: number,
  state: MachineState,
  title: string,
  icon: string
}
