import { Fragment, useState } from 'react'
import {
    Link
} from "react-router-dom";
import "./Home.css"
import axios from "../../helpers/axios"

const CreateBox = (props) => {
    const [slug, setSlug] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    /*  */
    const onSubmitHandler = () => 
    {
        if(slug.trim() === '' || title.trim() === "" || content.trim() === ""){
            alert("All Fields Are Required")
            return;
        }
        axios({
            method: 'post',
            url: "/api/createArticals",
            data: {
                title: title,
                content: content,
                slug: slug
            }

        })
        .then((response) => {
            if(response.status === "success"){
                let _id = response.data.id;
                props.setArticals(
                    ... props.articals,
                    {
                        id: _id,
                        title: title,
                        content: content,
                        slug: slug
                    }
                )
                [title, content, slug] = ["", "", ""]
            }
        })
        .catch(error => {
            alert("Failed To Create Articals, Please Try Again Later.")
        })
    }

    return (
        <Fragment>
            <div className='components-dashboard-createBox-main'>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="dashboard-createBox-slug">Slug</label>
                                <input type="text" className="form-control" value={slug} onChange={(e) => setSlug(e.target.value)} id="dashboard-createBox-slug" aria-describedby='dashboard-createBox-slug-describe' placeholder="Enter Slug" />
                                <small id="dashboard-createBox-slug-describe" className="form-text text-muted">Describe The Type Of Content</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dashboard-createBox-title">Title</label>
                                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="dashboard-createBox-title" placeholder="Enter Title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dashboard-createBox-body">Content</label>
                                <textarea className="form-control" rows={4} value={content} onChange={(e) => setContent(e.target.value)} id="dashboard-createBox-body" placeholder="Content" />
                            </div><br/>
                            <button type="button" onClick={onSubmitHandler}  className="btn btn-success">Create Artical</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateBox;