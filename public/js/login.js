const loginForm = document.getElementById('login')
const signupForm = document.getElementById('signup')

const handleSubmit = event => {
  event.preventDefault()

  //get form id from event target
  const formId = event.target.id
  //if formId is 'signup' hit api/users route, otherwise hit the login route
  const url =
    formId === 'signup' ? '/api/users' : '/api/users/login'

  //destructuring and renaming
  const {
    name: nameInput,
    email: emailInput,
    password: passwordInput
  } = event.target.elements

  const userData = {
    //? optional chaining name input for when there is no name
    name: nameInput?.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  //either create user or signs in
  //if success go to /home
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status === 200) {
        window.location.href = '/home'
      }
    })
    .catch(err => console.log(err))
}

loginForm.addEventListener('submit', handleSubmit)
signupForm.addEventListener('submit', handleSubmit)