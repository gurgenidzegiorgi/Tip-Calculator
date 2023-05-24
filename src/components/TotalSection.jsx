/* eslint-disable react/prop-types */
import "./TotalSection.css";
export default function TotalSection(props) {
  const TotalDiv = (props) => (
    <>
      <div className="totalDisplaydiv">
        <p className="articleP">
          {props.article} <br /> <span> / person</span>
        </p>
        <p className="total">${props.tally}</p>
      </div>
    </>
  );

  return (
    <div className="totalSection">
      <div className="totalDisplayBox">
        <TotalDiv article="Tip Amount" tally={props.tipPerPerson} />
        <TotalDiv article="Total" tally={props.totalAmount} />
      </div>
      <button
        className="resetBtn"
        onClick={props.onClick}
        style={props.reset ? { background: "#0D686D", opacity: "0.35" } : {}}
      >
        RESET
      </button>
    </div>
  );
}
