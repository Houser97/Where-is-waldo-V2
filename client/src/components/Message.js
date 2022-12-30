import '../styles/Message.css';

const Message = ({toggleMessage, characterHit}) => {
    return(
        <div className= {`message ${toggleMessage ? `${characterHit ? 'show':'show-incorrect'}` :'hidden'}`}>
            {characterHit ? `You have found ${characterHit}` : 'Keep trying'}
        </div>
    )
}

export default Message;