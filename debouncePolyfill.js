
//*****************************Debounce implementation************* */
// const myDebounce = (cb, d) => {
//     console.log('debounce');
//     let timer;
//     return function(...args) {
//         if(timer) clearTimeout(timer)
//         setTimeout(() => {
//             cb(...args)
//         }, d);
//     }
// }

// const handleOnChange = myDebounce((e) => {
//     console.log(e.target.value)
// }, 1000)