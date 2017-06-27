import {Bucketlist} from './bucketlist';

describe('Bucketlist', () => {
  it('should create an instance', () => {
    expect(new Bucketlist()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let bucketlist = new Bucketlist({
      title: 'hello';
      complete: true;
    });
    expect(bucketlist.title).toEqual('hello');
    expect(bucketlist.complete).toEqual(true);
  });
});
