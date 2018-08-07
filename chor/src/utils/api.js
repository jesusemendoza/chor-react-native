const people = [
  { name: 'Hector', age: 40 },
  { name: 'Jesus', age: 28 },
  { name: 'Lee', age: 30 }
]

export default () => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      return resolve(people)
    }, 3000)
  })
}