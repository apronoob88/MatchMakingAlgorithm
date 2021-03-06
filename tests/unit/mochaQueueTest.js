// unit test for Queue object
const assert = require('chai').assert;
const queue = require("../../handlers/queue");

describe('Queue Test: Attributes', () => {
  let q;
  beforeEach((done) => {
    q = new queue.Queue();
    done();
  });

  it("Queue must have empty array", () => {
    assert.isTrue(Array.isArray(q.q), "Queue does not have array");
    assert.equal(q.q.length, 0, "Queue array length is not 0");
  });
});

describe('Queue Test: Methods', () => {
  let q;
  beforeEach((done) => {
    q = new queue.Queue();
    q.enqueue("1");
    q.enqueue("2");
    q.enqueue("3");
    q.enqueue("4");
    done();
  });

  it("Queue enqueue() works properly", () => {
    let expected = ["1", "2", "3", "4"];
    for (var i=0; i<expected.length; i++) {
      assert.equal(q.q[i], expected[i], "Queue enqueue() does not return [1,2,3,4]");
    };
  });

  it("Queue dequeue() works properly", () => {
    let top = q.dequeue();
    assert.equal(top, "1", "Queue dequeue() does return 1")

    let expected = ["2", "3", "4"];
    for (var i=0; i<expected.length; i++) {
      assert.equal(q.q[i], expected[i], "Queue dequeue() subsequent return is incorrect");
    };

    q.dequeue();
    q.dequeue();
    assert.equal(q.q[0], "4", "Queue dequeue() last element is not 4");
  });

  it("Queue length() works properly", () => {
    assert.equal(q.length(), 4, "Queue length() does return 4");
  });

  it("Queue peek() works properly", () => {
    assert.equal(q.peek(), "1", "Queue length() does return 1");
    q.dequeue();
    q.dequeue();
    assert.equal(q.peek(), "3", "Queue length() does return 3");
  })

  it("Queue search() works properly", () => {
  	assert.equal(q.search("1"), 0, "Queue search() does not return 0");
  	assert.equal(q.search("4"), 3, "Queue search() does not return 3");
  })

  it("Queue peek2() works properly", () => {
  	assert.equal(q.peek2(), "2", "Queue peek2() does not return 2");
  })

  it("Queue steal() works properly", () => {
  	let stolen = q.steal();
  	assert.equal(stolen, "2", "Queue steal() does not return 2");
  	assert.equal(q.length(), 3, "Queue length() does return 3");
  })
});

describe('Queue Test: Scenarios', () => {
  let q;
  beforeEach((done) => {
    q = new queue.Queue();
    done();
  });

  it("dequeue() empty queue", () => {
    assert.equal(q.q.length, 0, "Queue array length is not 0");
    let isNull = q.dequeue();
    assert.isNull(isNull, null, "Queue array length is not null");
  });

  it("peek() empty queue", () => {
    assert.equal(q.q.length, 0, "Queue array length is not 0");
    let isUndefined = q.peek();
    assert.isUndefined(isUndefined, "Queue array length is not undefined");
  });

  it("length() empty queue", () => {
    assert.equal(q.q.length, 0, "Queue array length is not 0");
    let isZero = q.length();
    assert.equal(isZero, 0, "Queue array length is not 0");
  });

  it("Queue search() empty queue", () => {
  	assert.equal(q.q.length, 0, "Queue array length is not 0");
  	let isNull = q.search("1");
  	assert.isNull(isNull, "Queue search() empty does not return null");
  })

});
