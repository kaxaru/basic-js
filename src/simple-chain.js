let chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(value)
    return this
  },
  removeLink(position) {
    if(Number.isNaN(+position) || position > this.arr.length || position <= 0) {
      this.arr = []
      throw error
    }
    this.arr.splice(position-1, 1)
    return this;
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let chain = ''
    if(this.arr.length == 1) {     
      chain = `( ${this.arr[0]} )`
      this.arr = [];
      return chain
    } else {
      this.arr.map((el,idx) => {
        if(idx == 0) {
          chain = `( ${el} )~`
        } else if(idx == this.arr.length - 1) {
          chain = chain.concat(`~( ${el} )`)
        } else {
          chain = chain.concat(`~( ${el} )~`)
        }
      })
      this.arr = [];
      return chain
    }
  },
  visual() {
    return this.arr
  }
};

module.exports = chainMaker;
