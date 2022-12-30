const blogBtn = document.getElementById('blogBtn')

const blogFormHandler = async (event) => {
    event.preventDefault()
    const title = document.getElementById('blogTitle').value.trim()
    const description = document.getElementById('blogContent').value.trim()
   

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
            document.location.replace('/home')
        } else {
            alert(response.statusText)
        }
    }
    else{
        alert("Title and Description required for post")
    }
}
