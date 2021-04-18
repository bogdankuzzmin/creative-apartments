import classes from './Button.module.scss';

const button = props => {
  const classButton = [classes.Button];

  switch (props.color) {
    case 'green':
      classButton.push(classes.Green);
  }

  if (props.type === 'link') {
    return (
      <a
        tabIndex="1"
        className={classButton.join(' ')}
        onClick={props.clicked}
        href={props.href}>
        {props.children}
      </a>
    );
  }
  
  return (
    <button
      className={classButton.join(' ')}
      onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;