import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue, setText}) {
  const {
    state: { contract, accounts },
  } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [greetText, setGreetText] = useState("");
  const [greetTextFromContract, setGreetTextFromContract] = useState("");

  const handleInputChange = (e) => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const read = async () => {
    const value = await contract.methods.read().call({ from: accounts[0] });
    setValue(value);
  };

  const write = async (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a integer value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  const handleInputTextChange = (e) => {
    setGreetText(e.target.value);
  };

  const greet = async () => {
    const text = await contract.methods.greet().call({ from: accounts[0] });
    setGreetTextFromContract(text);
  };

  const sendGreetText = async (e) => {
    // if (e.target.tagName === "INPUT") {
    //   return;
    // // }
    // if (inputText === "") {
    //   alert("Please enter a string value to write.");
    //   return;
    // }
    const newText = greetText;
    await contract.methods.setGreet(newText).send({ from: accounts[0] });
  };

  return (
    <div>
      <div className="btns">
        <button onClick={read}>read()</button>

        <div onClick={write} className="input-btn">
          write(
          <input
            type="text"
            placeholder="uint"
            value={inputValue}
            onChange={handleInputChange}
          />
          )
          <button onClick={sendGreetText}>send</button>
        </div>

        <button onClick={greet}>greet()</button>

        <div onClick={sendGreetText} className="input-btn">
          setGreet(
          <input
            type="text"
            placeholder="string"
            value={greetText}
            onChange={handleInputTextChange}
          />
          )
        </div>
      </div>

      <div>
        <label>
          setGreet
          <input
            type="text"
            placeholder="string"
            value={greetText}
            onChange={handleInputTextChange}
          />
        </label>
        <button onClick={sendGreetText}>send</button>
      </div>
      <div>
        <button onClick={greet}>greet()</button>
      </div>
      <div>{greetTextFromContract}</div>
    </div>
  );
}

export default ContractBtns;
