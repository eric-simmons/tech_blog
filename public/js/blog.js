const blogForm = document.querySelector('.blogForm')

const blogFormHandler = async (event) => {
    console.log(event)
   
    event.preventDefault()
    
    const title = document.querySelector('.blogTitle').value.trim()
    const content = document.querySelector('.blogContent').value.trim()

console.log(title, content)
    if (title && content) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
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
    else {
        alert("Title and content required for post")
    }
}

blogForm.addEventListener("submit", blogFormHandler)