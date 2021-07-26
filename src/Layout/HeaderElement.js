function HeaderElement(props) {
  const clickHandler = () => {
    props.toggleHandler();
  };
  return (
    <header>
      <h2 className="">Delight$</h2>
      <button type="button" className="" onClick={clickHandler}>
        Your Cart &nbsp;<span>{props.count}</span>
      </button>
    </header>
  );
}

export default HeaderElement;
