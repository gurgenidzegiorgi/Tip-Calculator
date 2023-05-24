/* eslint-disable react/prop-types */
import "./TipCalculatorSection.css";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personrIcon from "../assets/images/icon-person.svg";
import InputDiv from "./InputDiv";

export default function TipCalculatorSection(props) {
  function handleBillInput(e) {
    const value = parseInt(e.target.value);
    props.setBillAmount(Number.isNaN(value) ? "" : value);
    props.setBillTouched(true);
    props.setReset(false);
  }

  function handlePeopleInput(e) {
    const value = parseInt(e.target.value);
    props.setPeopleAmount(Number.isNaN(value) ? "" : value);
    props.setPeopleTouched(true);
    props.setReset(false);
  }

  function HandleCostumTip(e) {
    let value = e.target.value;
    const splitValue = String(value)
      .split("")
      .map((n) => Number(n));
    // if (splitValue.includes(NaN)) {
    //   props.setCostumTip(String(value));
    // } else {
    //   props.setTipPercent(Number(value));
    // }
    if (!isNaN(value) && !splitValue.includes(NaN)) {
      props.setTipPercent(Number(value));
      props.setCostumTip(Number(value));
    } else {
      props.setCostumTip(value);
      props.setTipPercent("");
    }
    props.setCostumTipTouched(true);
    props.setIsActive(false);
    props.setReset(false);
  }

  const tipPercents = [5, 10, 15, 25, 50];

  // console.log(
  //   "props.costumTip: ",
  //   typeof props.costumTip,
  //   props.costumTip,
  //   "props.billAmount: ",
  //   typeof props.billAmount,
  //   props.billAmount,
  //   "props.tipPercent: ",
  //   typeof props.tipPercent,
  //   props.tipPercent,
  //   typeof props.peopleAmount,
  //   "props.peopleAmount: ",
  //   props.peopleAmount,
  //   "totalAmount: ",
  //   typeof totalAmount,
  //   totalAmount,
  //   "totalPerPerson: ",
  //   typeof totalPerPerson,
  //   totalPerPerson
  // );

  return (
    <div className="TipCalculatorSection">
      <div className="inputContainer" style={{ position: "relative" }}>
        <InputDiv
          onInput={handleBillInput}
          value={props.billAmount}
          id="bill"
          label="Bill"
          img={dollarIcon}
          style={{
            outline:
              props.billTouched &&
              (Number.isNaN(parseInt(props.billAmount)) ||
                props.billAmount === 0)
                ? "2px solid #E17052"
                : "",
          }}
        />
        <p
          style={{
            display:
              props.billTouched && props.billAmount === 0 ? "block" : "none",
          }}
        >
          {props.billTouched && props.billAmount === 0 ? "Can't be zero" : ""}
        </p>
        <p
          style={{
            display:
              props.billTouched && Number.isNaN(parseInt(props.billAmount))
                ? "block"
                : "none",
          }}
        >
          Must be a number
        </p>
      </div>
      <div className="tipDiv">
        <p>Select Tip %</p>
        <div className="tipAmountDiv">
          {tipPercents.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                props.setIsActive(true);
                props.setTipPercent(item);
                props.setCostumTipTouched(false);
                props.setCostumTip("");
                props.setReset(false);
              }}
              style={
                props.isActive && item === props.tipPercent
                  ? {
                      background: "#26C2AE",
                      color: "#00474B",
                    }
                  : {}
              }
            >
              {item}%
            </button>
          ))}
          <input
            style={{
              outline:
                props.costumTipTouched && props.costumTip !== props.tipPercent
                  ? "2px solid #E17052"
                  : "",
            }}
            value={props.costumTip}
            onInput={HandleCostumTip}
            type="text"
            placeholder="Custom"
          />
        </div>
      </div>
      <div className="inputContainer" style={{ position: "relative" }}>
        <InputDiv
          onInput={handlePeopleInput}
          value={props.peopleAmount}
          id="NumberOfPeople"
          label="Number of People"
          img={personrIcon}
          style={{
            outline:
              props.peopleTouched &&
              (Number.isNaN(parseInt(props.peopleAmount)) ||
                props.billAmount === 0)
                ? "2px solid #E17052"
                : "",
          }}
        />
        <p
          style={{
            display:
              props.peopleTouched &&
              (Number.isNaN(parseInt(props.peopleAmount)) ||
                props.peopleAmount === 0)
                ? "block"
                : "none",
          }}
        >
          {props.peopleTouched && props.peopleAmount === 0
            ? "Can’t be zero"
            : ""}
        </p>
        <p
          style={{
            display:
              props.peopleTouched && Number.isNaN(parseInt(props.peopleAmount))
                ? "block"
                : "none",
          }}
        >
          Must Be Number
        </p>
      </div>
    </div>
  );
}
