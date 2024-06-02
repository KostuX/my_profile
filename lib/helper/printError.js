export const printError = (err, props)=>{
    // TODO: check if it is array, if not wrap it as array
   let errMsg = err.join()
    return (<span className="block text-red-500">{errMsg}</span>)
}