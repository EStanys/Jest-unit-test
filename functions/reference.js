const createUser = () => {
  const user = {name: 'Bob'}
  user.email = 'bob@email.com'
  return user
}

const copyArr = (arr) => {
  return [...arr]
}

const includesValue = (arr, val) => {
  return arr.includes(val)
}

module.exports = { createUser, copyArr, includesValue };