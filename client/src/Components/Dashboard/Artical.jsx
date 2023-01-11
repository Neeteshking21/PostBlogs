import { Fragment } from 'react'
import "./Home.css"

const Artical = (props) => {
    return (
        <Fragment>
            <div className="card col-sm-3">
                <div className="card-body">
                    <h5 className="card-title">{props.details.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.details.slug}</h6>
                    <div className="card-content">
                        <p className="card-text">{props.details.content}</p>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <button type="button" className="btn btn-warning">Update</button>
                        </div>
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4'>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Artical;