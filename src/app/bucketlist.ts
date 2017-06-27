export class Bucketlist {
  id: number;
  title: string;
  complete: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
