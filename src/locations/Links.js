import OldWell from './OldWell.js';
import {Link} from'react-router-dom'

const Links = (props) => {
    return (
        <div>
            <h2>Where will you go Next?</h2>
            <ul>
                <Link to={props.location1}>
                    <li>{props.title1}</li>
                </Link>
                <Link to={props.location2}>
                    <li>{props.title2}</li>
                </Link>
            </ul>
        </div>
    );
}

export default Links; 