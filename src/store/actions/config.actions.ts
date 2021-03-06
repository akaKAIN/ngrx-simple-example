import {Action} from '@ngrx/store';
import {Config} from '../../models/base.model';

export enum EConfigActions {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;

  constructor(public payload: Config) {
  }
}

export type ConfigActions = GetConfig | GetConfigSuccess;
