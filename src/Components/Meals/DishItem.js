const DishItem = (props) => {
  const { id, title, detail, price } = props;
  const clickHandler = () => {
    props.onAddClick({ id, title, detail, price });
  };
  return (
    <div className="">
      <div className="">
        <h3>{title}</h3>
        <div>{detail}</div>
        <span>$ {price}</span>
      </div>
      <div className="">
        <label>Amount</label>
        <div>Quantity here</div>
        <button onClick={clickHandler}>Add (+)</button>
      </div>
    </div>
  );
};

export default DishItem;
