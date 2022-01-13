import { Categories } from '../types';

class MsgCreateBatchRequest {
  public category: Categories;
  public type: string;
  public json: any;
  public issuer: string;

  constructor(payload: any) {
    this.category = 'ecocredit';
    this.json = payload.json;
    this.type = payload.type;
    this.issuer = payload.issuer;
  }

  static fromJson(json: any) {
    return new MsgCreateBatchRequest({
      json,
      type: json['@type'],
      issuer: json.issuer,
    });
  }
}

export default MsgCreateBatchRequest;