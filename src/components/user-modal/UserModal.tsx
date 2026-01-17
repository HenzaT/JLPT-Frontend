import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function UserModal() {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function toggleModal() {
    setIsClicked(prev => !prev);
    setShowModal(prev => !prev);
  }

  function closeModal() {
    dialogRef?.current?.close()
    setShowModal(false)
  }

  showModal ? dialogRef?.current?.showModal() : dialogRef?.current?.close();

  const link = (route: string, text: string) => (
    <Link to={route} onClick={closeModal}>{text}</Link>
  )

  return (
    <>
      <button onClick={toggleModal} className="user-modal">
        <img src="/public/icons/user.svg" alt="user icon" className={isClicked ? "shaken" : ""}/>
      </button>
      <dialog
        ref={dialogRef}
        closedby='any'
      >
        <div className="dialog-elements">
          {link("/login", "login")}
          {link("/signup", "sign up")}
          <button onClick={closeModal} autoFocus className="site-button">close</button>
        </div>
      </dialog>
    </>
  )
}
