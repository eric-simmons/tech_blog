const loginForm = document.getElementById('login')
const signupForm = document.getElementById('signup')

const handleSubmit = event => {
  event.preventDefault()

  //if form submit is the signup form, hit api users route, otherwise login route
  const formId = event.target.id
  const url = formId === 'signup'
    ? '/api/users'
    : '/api/users/login'

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

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status === 200) {
        window.location.href = '/'
      }
    })
    .catch(err => console.log(err))

}

loginForm.addEventListener('submit', handleSubmit)
signupForm.addEventListener('submit', handleSubmit)