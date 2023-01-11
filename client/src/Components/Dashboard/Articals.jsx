import { Fragment, useEffect, useState } from 'react'
import Artical from './Artical'
import axios from '../../helpers/axios';

const Articals = (props) => {
    // /* To Fetch All Articals */
    // const [articals, setArticals] = useState([{
    //     "id": 0,
    //     "title": "My Title",
    //     "content": "My content",
    //     "slug": "technology"
    // },
    // {
    //     "id": 1,
    //     "title": "My Title",
    //     "content": "My content",
    //     "slug": "technology"
    // },
    // {
    //     "id": 2,
    //     "title": "My Title",
    //     "content": "My content",
    //     "slug": "technology"
    // },
    // {
    //     "id": 3,
    //     "title": "My Title",
    //     "content": "My content",
    //     "slug": "technology"
    // }
    // ])
    return (
        <Fragment>
            <div className='row component-dashboard-articals-main'>
                {
                    props.articals.map((artical) => {
                        return (
                            <Artical key={`components_dashboard_artical_${artical.id}`} details={artical} />
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default Articals;