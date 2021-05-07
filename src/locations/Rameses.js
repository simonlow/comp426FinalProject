import Picture from './Picture';

const Rameses = (props) => {
    return (
        <div>
            <Picture width = '500'url = {(props.id == window.$id) ? "https://i.pinimg.com/originals/7d/92/be/7d92be9bc67b0bc00aa786a0a08ac625.jpg " : "https://pbs.twimg.com/profile_images/1241545643245608960/QKMFPrlh_400x400.jpg"} alt = ""></Picture>
            <h2>{ (props.id == window.$id) ? 'You found Rameses!' : "Sorry, Rameses isn't here, only Rameses Jr."}</h2>
        </div>
    )
}

export default Rameses;