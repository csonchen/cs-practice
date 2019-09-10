var commandPattern = (function() {
  var commandSet = {
    doSomething: function(arg1, arg2) {
      // console.log(this) 
      console.log( 'this is argument1 ' + arg1 + ' and this arg2 ' + arg2)
    },

    doSomethingElse: function(arg3) {
      console.log( 'this is arg3 ' + arg3)
    },
    executeCommands: function(name) {
      return commandSet[name] && commandSet[name].apply(commandSet, [].slice.call(arguments, 1))
    }
  }
  return commandSet
})();

commandPattern.executeCommands('doSomethingElse', 'cson', 1)
commandPattern.executeCommands('doSomething', 'chen', 2)