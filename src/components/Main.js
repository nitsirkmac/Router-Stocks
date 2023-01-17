import { Link } from 'react-router-dom'


const Main = () => {

    return (
        <div className="Main">
            <h1>Main</h1>
            <Link to='/'>
                <div>Home</div>
            </Link>
        </div>
    )
}