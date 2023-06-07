

function logger(reducer) {
    return function(preState, action,args) {
        console.group(action)
        console.log('preState: ',preState)
        console.log('argument: ',args)
        const newState = reducer(preState, action, args);
        console.log('newState: ',newState)
        console.groupEnd()
        return newState;
    }
}
 
export default logger;