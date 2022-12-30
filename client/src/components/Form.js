import '../styles/Form.css';

const Form = ({gameOver, time}) => {

    const saveUser = (e) => {
        e.preventDefault();
        const popUpForm = e.target.parentNode;
        popUpForm.style.display = "none";
        let name = [...e.target];
        let username = name[0].value;
        fetch('http://localhost:5000/api/register_score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({username, time})
        })
        /*console.log(name[0].value);*/
        e.target.reset();
      }

    const openLadderboard = () => {
        const ladder =document.querySelector(".ladderboard-section");
        ladder.style.display = "flex";
    }

    return(
        <div className={`popup-form ${gameOver}`}>
            <div className='win'>You win!</div>
            <form className='form' onSubmit={saveUser}>
                <div className='form-title'>Enter a name to save your time</div>
                <div className='input-section'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' required></input>
                </div>
                <div className='button-section'>
                    <button className='submit' onClick={openLadderboard}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;