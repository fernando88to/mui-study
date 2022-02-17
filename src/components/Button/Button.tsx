import { Props } from '~/components/Button/Button.type';

export const Button = (props: Props) => {
  return (
    <div>
      <h1>{props.nome}</h1>
    </div>
  );
};
