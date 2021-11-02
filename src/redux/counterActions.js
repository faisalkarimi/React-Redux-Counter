export const handleIncrement = () => dispatch => {
  dispatch({
    type: 'INCREMENT'
  });
};

export const handleDecrement = () => dispatch => {
  dispatch({
    type: 'DECREMENT'
  });
};