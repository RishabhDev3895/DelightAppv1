const DishItem = (props) => {
  const [title, details, price] = props;
  return (
    <div className="">
      <div className="">
        <h3>{title}</h3>
        <div>{details}</div>
        <span>$ {price}</span>
      </div>
      <div className="">
        <label>Amount</label>
        <div>Quantity here</div>
        <button>Add (+))</button>
      </div>
    </div>
  );
};

export default DishItem;
