import { useState } from "react";
import "./UserForm.css";

function UserForm({ onSubmitData }) {
  const handleDataChange = (data) => {
    onSubmitData(data);
  };

  return (
    <div>
      <InputWindow onDataChange={handleDataChange} />
    </div>
  );
}

function InputWindow({ onDataChange }) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [currentMonth] = useState(9); // October
  const [formData, setFormData] = useState({
    savings: "",
    rent: "",
    utilities: "",
    food: "",
    transport: "",
    shopping: "",
    goingOut: "",
    miscellaneous: "",
    netMoney: "",
    investments: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      return updated;
    });
  };

  // ✅ New function that sends data to App when button clicked
  const handleSubmit = () => {
    onDataChange(formData); // send full data up
  };

  return (
    <div>
      <div className="monthTitleDiv">
        <h3 style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translate(-50%)"
        }}>
          {months[currentMonth]}
        </h3>
      </div>

      <div className="savingsWindowDiv">
        <h3 style={{ position: "absolute", left: "33%", top: "-10%" }}>Savings:</h3>
        <input
          type="text"
          value={formData.savings}
          onChange={(e) => handleChange("savings", e.target.value)}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "55%"
          }}
        />
      </div>

      {/* EXPENDITURES */}
      <div className="expenditureWindowDiv">
        <h3 style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          Expenditure:
        </h3>

        <Field label="Rent" topLabel="6%" topInput="17%" value={formData.rent} onChange={(v) => handleChange("rent", v)} />
        <Field label="Utilities" topLabel="20%" topInput="31%" value={formData.utilities} onChange={(v) => handleChange("utilities", v)} />
        <Field label="Food" topLabel="33%" topInput="44%" value={formData.food} onChange={(v) => handleChange("food", v)} />
        <Field label="Transport" topLabel="46%" topInput="57%" value={formData.transport} onChange={(v) => handleChange("transport", v)} />
        <Field label="Shopping" topLabel="59%" topInput="70%" value={formData.shopping} onChange={(v) => handleChange("shopping", v)} />
        <Field label="Going Out" topLabel="72%" topInput="83%" value={formData.goingOut} onChange={(v) => handleChange("goingOut", v)} />
        <Field label="Miscellaneous" topLabel="85%" topInput="96%" value={formData.miscellaneous} onChange={(v) => handleChange("miscellaneous", v)} />
      </div>

      <div className="netMoneyDiv">
        <h4 style={{
          position: "absolute",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)"
        }}>Money Earned:</h4>
        <input
          type="text"
          value={formData.netMoney}
          onChange={(e) => handleChange("netMoney", e.target.value)}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "55%"
          }}
        />
      </div>

      <div className="investmentsDiv">
        <h3 style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>Investments</h3>
        <input
          type="text"
          value={formData.investments}
          onChange={(e) => handleChange("investments", e.target.value)}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "55%"
          }}
        />
      </div>

      <Mascot />
      <SendDataButton onClick={handleSubmit} /> {/* ✅ Hooked up */}
    </div>
  );
}

function Field({ label, topLabel, topInput, value, onChange }) {
  return (
    <div>
      <h4 style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        top: topLabel
      }}>{label}:</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: topInput
        }}
      />
    </div>
  );
}

function Mascot() {
  return (
    <div className="mascotDiv">
      <img src={require("../Mascot.png")} alt="mascot" height={100} />
    </div>
  );
}

function SendDataButton({ onClick }) {
  return (
    <div style={{ textAlign: "center", position: "absolute", left: "39%", top: "86%"}}>
      <button onClick={onClick} style={{cursor: "pointer" }}>
        Send Data
      </button>
    </div>
  );
}

export default UserForm;
