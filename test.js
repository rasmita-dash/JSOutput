import React from 'react'

const test = () => {
    const myDebounce = (cb, d) => {
        let timer;
        return function(...args) {
            if(timer) clearTimeout(timer)
            setTimeout(() => {
                cb(...args)
            }, d);
        }
    }
    
    const onChange = myDebounce((e) => {
        console.log(e.target.value)
    }, 1000)
    
    
  return (
    <div>test</div>
  )
}

export default test