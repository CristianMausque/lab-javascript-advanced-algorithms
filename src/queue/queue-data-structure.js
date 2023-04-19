class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true
    } else { return false }


  }

  isEmpty() {
    if (!this.queueControl.length) {
      return true
    } else if (this.queueControl.length > 0) {
      return false
    }
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item)

      return this.queueControl

    } else {
      throw new Error('QUEUE_OVERFLOW')
    } // ... your code goes here
  }

  dequeue() {
    if (!this.isEmpty()) {
      const variable = this.queueControl.shift()
      return variable
    } else {

      throw new Error('QUEUE_UNDERFLOW')

    }
  }

  display() {
    return this.queueControl
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;