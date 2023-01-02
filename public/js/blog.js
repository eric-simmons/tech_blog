const blogForm = document.querySelector('.blogForm')

const blogFormHandler = async (event) => {
    event.preventDefault()
    const title = document.querySelector('.blogTitle').value.trim()
    const content = document.querySelector('.blogContent').value.trim()


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