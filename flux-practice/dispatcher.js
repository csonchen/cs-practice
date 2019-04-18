var Dispatcher = function () {
  return {
    _stores: [],
    register: function(store) {
      if (!store || store.update) {
        throw new Error('you should provide a store that has update method');
      } else {
	var consumers = []
	var change = function () {
	  consumers.forEach(function(consumer) {
	    consumer(store);
	  });
	}      
	var subscribe = function(consumer, noInit) {
	  consumers.push(consumer)
          !noInit ? consumer(store) : null
	}
        this._stores.push({store: store, change: change})
	return subscribe
      }
      return false
    },
    dispatch: function(action) {
      if (this._stores.length > 0) {
        this._stores.forEach(function(entry) {
	  entry.store.update(action, entry.change);
	});
      }
    }
  }
}

module.exports = {
  create: function() {
    var dispatcher = Dispatcher()
    return {
      createAction: function(type) {
        if (!type) {
	  throw new Error('please provice actions type')
	} else {
	  return function (payload) {
	    return dispatcher.dispatch({
	      type: type,
	      payload: payload
	    })
	  }
	}
      },

      craeteSubscriber: function(store) {
        return dispatcher.register(store)
      }	    
    }
  }
}
