import s from './Title.module.scss';

export const Title = ({ text }) => {
  return <h1 className={s.title}>{text}</h1>;
};
