const commentBtn = document.getElementById('commentBtn')

//front end js to retrieve new comment data

const commentFormHandler = async (event) => {
    event.preventDefault()
    const comment = document.getElementById('commentInput').value.trim()


    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                blog_id: commentId,
                content: comment
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
}


