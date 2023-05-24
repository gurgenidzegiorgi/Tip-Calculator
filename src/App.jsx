import { useState, useEffect } from "react";
import TipCalculatorSection from "./components/TipCalculatorSection";
import TotalSection from "./components/TotalSection";
import logo from "./assets/images/logo.svg";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [costumTip, setCostumTip] = useState("");
  const [peopleAmount, setPeopleAmount] = useState("");

  const [totalAmount, setTotalAmount] = useState("0.00");
  const [tipPerPerson, setTipPerPerson] = useState("0.00");

  const [isActive, setIsActive] = useState(false);
  const [billTouched, setBillTouched] = useState(false);
  const [peopleTouched, setPeopleTouched] = useState(false);
  const [costumTipTouched, setCostumTipTouched] = useState(false);

  const [reset, setReset] = useState(false);

  function resetCalc() {
    setBillAmount("");
    setBillTouched(false);
    setTipPercent("");
    setIsActive(false);
    setCostumTip("");
    setCostumTipTouched(false);
    setPeopleAmount("");
    setPeopleTouched(false);
    setTotalAmount("0.00");
    setTipPerPerson("0.00");
  }

  useEffect(() => {
    let total = Number((billAmount * tipPercent) / 100 + billAmount);
    let tipPerP = Number((billAmount * tipPercent) / 100 / peopleAmount);
    if (billAmount && tipPercent && peopleAmount) {
      setTotalAmount(total.toFixed(2));
      setTipPerPerson(tipPerP.toFixed(2));
    }
  }, [billAmount, tipPercent, peopleAmount]);

  useEffect(() => {
    if (reset) resetCalc();
  }, [reset]);
  return (
    <>
      <main>
        <img src={logo} alt="logo icon" />
        <div className="container">
          <TipCalculatorSection
            isActive={isActive}
            setIsActive={setIsActive}
            billTouched={billTouched}
            setBillTouched={setBillTouched}
            peopleTouched={peopleTouched}
            setPeopleTouched={setPeopleTouched}
            costumTipTouched={costumTipTouched}
            setCostumTipTouched={setCostumTipTouched}
            billAmount={billAmount}
            setBillAmount={setBillAmount}
            tipPercent={tipPercent}
            setTipPercent={setTipPercent}
            costumTip={costumTip}
            setCostumTip={setCostumTip}
            peopleAmount={peopleAmount}
            setPeopleAmount={setPeopleAmount}
            setReset={setReset}
            reset={reset}
          />
          <TotalSection
            totalAmount={totalAmount}
            tipPerPerson={tipPerPerson}
            setReset={setReset}
            reset={reset}
            onClick={() => {
              if (
                isActive ||
                billTouched ||
                peopleTouched ||
                costumTipTouched
              ) {
                setReset(true);
              }
            }}
          />
        </div>
      </main>
    </>
  );
}

export default App;
