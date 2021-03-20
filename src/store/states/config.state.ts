import {Config} from '../../models/base.model';

export interface ConfigState {
  config: Config;
}

export const initialConfigState: ConfigState = {
  config: null
};
