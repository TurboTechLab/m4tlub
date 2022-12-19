import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs';

TestScheduler.frameTimeFactor= 1000;
const testScheduler = new TestScheduler((actual, expected) => {
  
  // asserting the two objects are equal - required
  // for TestScheduler assertions to work via your test framework
  // e.g. using chai.
});

// This test runs synchronously.
testScheduler.run((helpers) => {
  const { cold, time, animate } = helpers;
  animate('              ---x---x---x---x');

  const e1 = cold(' -a--b--c--d-e-|');
  const t  = time('   ---|       '); // t = 3
  const expected = '-a-----c---|';

  console.log('testing marbles ....');
  e1.pipe(throttleTime(1000)).subscribe(v =>console.log(v));
});
