import ReactDOM from 'react-dom';
export const PopUpWInModel = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <div className='POPmodal'>
        {children}
      </div>
    </>,
    document.body
  );
};