import React from 'react';

function Interview() {
  return (
    <div className="interview">
      <form>
        <label htmlFor='nameInput'>Name: </label>
        <input
          type='text'
          name='name'
          id='nameInput'
          placeholder='Name'
          maxLength='25'
        /><br/>

        <div className='question'>
          <h2>Which character was your favorite, and why?</h2>

          <label htmlFor='favCharacterSelect'>Favorite Character: </label>
          <select id='favCharacterSelect' name='favCharacter'>
            <option value='1'>The Stoner</option>
            <option value='1'>The Prude</option>
            <option value='1'>The Gypsie</option>
            <option value='1'>The Detective</option>
            <option value='1'>The Dumb Cop</option>
          </select><br />

          <label htmlFor='favJustificationInput'>Why?: </label>
          <input
            type='text'
            name='favJustification'
            id='favJustificationInput'
            placeholder='Why was this character your favorite?'
            maxLength='400'
          /><br/>
        </div>

        <div className='question'>
          <h2>Which character was your least favorite? Why?</h2>

          <label htmlFor='leastFavCharacterSelect'>Least Favorite Character: </label>
          <select id='leastFavCharacterSelect' name='leastFavCharacter'>
            <option value='1'>The Stoner</option>
            <option value='1'>The Prude</option>
            <option value='1'>The Gypsie</option>
            <option value='1'>The Detective</option>
            <option value='1'>The Dumb Cop</option>
          </select><br />

          <label htmlFor='leastFavJustificationInput'>Why?: </label>
          <input
            type='text'
            name='leastFavJustification'
            id='leastFavJustificationInput'
            placeholder='Why was this character your least favorite?'
            maxLength='400'
          /><br/>
        </div>

        <div className='question'>
          <h2>What was your favorite scene or sequence of events?<br/>What did you like about it?</h2>

          <label htmlFor='favSceneInput'>Favorite Scene: </label>
          <input
            type='text'
            name='favScene'
            id='favSceneInput'
            placeholder='What was your favorite scene or sequence of events?'
            maxLength='400'
          /><br/>
        </div>

        <div className='question'>
          <h2>What was your least favorite scene or sequence of events?<br/>What didn't you like about it?</h2>

          <label htmlFor='leastFavSceneInput'>Least Favorite Scene: </label>
          <input
            type='text'
            name='leastFavScene'
            id='leastFavSceneInput'
            placeholder='What was your least favorite scene or sequence of events?'
            maxLength='400'
          /><br/>
        </div>

        <div className='question'>
          <h2>What questions were raised in your mind as a reader?</h2>

          <label htmlFor='questionsRaisedInput'>Questions Raised: </label>
          <input
            type='text'
            name='questionsRaised'
            id='questionsRaisedInput'
            placeholder='What questions come to mind as a reader?'
            maxLength='400'
          /><br/>
        </div>

        <div className='question'>
          <h2>What theories do you have about where the story is headed?</h2>

          <label htmlFor='theoriesInput'>Theories: </label>
          <input
            type='text'
            name='theories'
            id='theoriesInput'
            placeholder='What theories do you have about where the story is headed?'
            maxLength='400'
          /><br/>
        </div>
      </form>
    </div>
  );
}

export default Interview;