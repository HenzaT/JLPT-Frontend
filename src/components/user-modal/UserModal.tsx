import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function UserModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button onClick={() => dialogRef?.current?.showModal()} className="user-modal">
        <img src="/public/icons/user.svg" alt="user icon" />
      </button>
      <dialog
        ref={dialogRef}
        closedby='any'
      >
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <button onClick={() => dialogRef?.current?.close()} autoFocus>close</button>
      </dialog>
    </>
  )
}
