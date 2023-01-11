import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import NavBar from './Navbar'
import Articals from './Articals'
import CreateBox from './CreateBox'
import './Home.css'

const Home = (props) => {
    const [articals, setArticals] = useState([{
        "id": 0,
        "title": "My Title",
        "content": "My content",
        "slug": "technology"
    },
    {
        "id": 1,
        "title": "My Title",
        "content": "My content",
        "slug": "technology"
    },
    {
        "id": 2,
        "title": "My Title",
        "content": "My content",
        "slug": "technology"
    },
    {
        "id": 3,
        "title": "My Title",
        "content": "My content",
        "slug": "technology"
    }
    ])
    return (
        <Fragment>
            <div id='component-dashboard-home-main'>
                <NavBar />
                <CreateBox articals={articals} setArticals={setArticals} />
                <Articals articals={articals} setArticals={setArticals} />
            </div>
        </Fragment>
    )
}

export default Home;