const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
          callback(values[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let arr = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          arr.push(callback(collection[i]))
        }
      } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
          arr.push(callback(values[i]))
        }
      }
      return arr
    },

    reduce: function(collection, callback, acc=0) {
      let total = acc;
      for (let i = 0; i < collection.length; i++) {
        total += callback(collection[i])
      }
      return total
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
