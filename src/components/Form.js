import React, { useState } from 'react';

function Form(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container mb-3 mt-3'>
        <h3>{props.header}</h3>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='8'
          onChange={handleOnChange}
          value={text}
        ></textarea>
      </div>
      <div className='container col-auto'>
        <button
          onClick={handleUpClick}
          type='submit'
          className='btn btn-primary mb-3'
        >
          Convert To UpperCase
        </button>
        <button
          onClick={handleLowClick}
          type='submit'
          className='btn btn-primary mb-3 mx-3'
        >
          Convert To LowerCase
        </button>
        <button
          onClick={handleClearClick}
          type='submit'
          className='btn btn-primary mb-3 mx-3'
        >
          Clear
        </button>
      </div>

      <div className='container'>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>
          You Need To Read This Article Minimum {0.008 * text.split(' ').length}{' '}
          Minutes{' '}
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Form;
