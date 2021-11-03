import React from 'react'

const BlogDetailsPage = ({match}) => {
    return (
        <div>
            BlogDetailsPage : {match.params.id}
        </div>
    )
}

export default BlogDetailsPage
