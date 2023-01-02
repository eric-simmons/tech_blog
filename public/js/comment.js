const commentForm = document.querySelector('.commentForm')

//front end js to retrieve new comment data

const commentFormHandler = async (event) => {
    event.preventDefault()
    const content = document.querySelector('.commentInput').value.trim()
    // let blogId = window.location.href.split("/")
    // blogId = parseInt(blogId[4])

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                content,
                // blog_id: blogId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            // document.location.replace('/home')
        } else {
            alert(response.statusText)
        }
    }
}

commentForm.addEventListener('submit', commentFormHandler)


