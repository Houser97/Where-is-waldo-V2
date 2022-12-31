import { useContext } from 'react';
import { gameContext } from '../App';
import '../styles/Form.css';


const Form = ({isGameOver, time}) => {

    const setPlayersArray = useContext(gameContext).setPlayersArray;
    const setToggleLadderboard = useContext(gameContext).setToggleLadderboard;

    const saveUser = (e) => {
        e.preventDefault();
        const popUpForm = e.target.parentNode;
        let name = [...e.target];
        let username = name[0].value;
        fetch('http://localhost:5000/api/register_score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({username, time})
        }).then(response => response.json())
        .then(players => {
            setPlayersArray(players);
            setToggleLadderboard(true);
            popUpForm.style.display = "none";
        })
      }

    const openLadderboard = () => {
        const ladder =document.querySelector(".ladderboard-section");
        ladder.style.display = "flex";
    }

    return(
        <div className={`popup-form ${isGameOver ? 'stopGame':''}`}>
            <div className='win'>You win!</div>
            <form className='form' onSubmit={saveUser}>
                <div className='form-title'>Enter a name to save your time</div>
                <div className='input-section'>
                    <label htmlFor='name'>Username</label>
                    <input id='name' name='name' maxLength={10} required></input>
                </div>
                <div className='button-section'>
                    <button className='submit' onClick={openLadderboard}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;