export let topic="js modules"
export function fun(name){
    alert("hello"+name)

}
function add(a,b){
    return(a+b)
}

let Language="javascript"
function subtraction(a,b){
    return a-b
}
export {Language,subtraction as sub}
export default add