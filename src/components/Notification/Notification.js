import s from './notification.module.css';

export default function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}

