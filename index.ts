import { TestScheduler } from 'rxjs/testing';
import { throttleTime,concatMap,delay,of } from 'rxjs';

TestScheduler.frameTimeFactor= 1000;
const testScheduler = new TestScheduler((actual, expected) => {
  
  // asserting the two objects are equal - required
  // for TestScheduler assertions to work via your test framework
  // e.g. using chai.
});

// This test runs synchronously.
testScheduler.run((helpers) => {
  const { cold, time, animate, expectObservable ,hot} = helpers;
  animate('1s');

  const e1 = cold('a 1.5s b 9s c|');
  const t  = time('   ---|       '); // t = 3

  console.log('testing marbles ....');
  let result = e1.pipe(throttleTime(2000))
  
  expectObservable(result).toBe('-');
  console.log('xxx');
  result.subscribe(v =>console.log(v));
});
