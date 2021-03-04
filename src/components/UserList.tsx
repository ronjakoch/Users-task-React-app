
type userPropTypes = {
  firstname: string;
  lastname: string;
  street: string;
  plz: number;
  place: string
};

const CardProduct = (props: userPropTypes) => {

  return (
    <div className="row">
        <h1>{props.firstname} {props.lastname}</h1>
        <li>{props.street}</li>
        <li>{props.plz}</li>
        <li>{props.place}</li>
    </div>
  );
};

export default CardProduct; 