const blogBtn = document.querySelector('.blogBtn')

const blogFormHandler = async (event) => {
 
    event.preventDefault()
    console.log('clicked')
    const title = document.querySelector('.blogTitle').value.trim()
    const description = document.querySelector('.blogContent').value.trim()
   
console.log(title, description)
    if (title && description) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ 
                title, 
                description }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            console.log('fetched')
            document.location.replace('/home')
        } else {
            alert(response.statusText)
        }
    }
    else{
        alert("Title and Description required for post")
    }
}

blogBtn.addEventListener("submit", blogFormHandler)