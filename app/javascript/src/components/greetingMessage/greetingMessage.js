import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchRandomMessage} from "../../redux/message/messageSlice";


const GreetingMessage = () => {
  const dispatch = useDispatch();
  const {message, isLoading} = useSelector((state) => state.message)
  const greeting = message.greeting_message

  useEffect(() => {
    handleClick()
  }, []);

  const handleClick = () => {
    dispatch(fetchRandomMessage());
  }


  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <button type="button" onClick={handleClick}>ReGreet</button>
    </div>
  );
}

export default GreetingMessage;