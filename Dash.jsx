import { Pie, Line, Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import "./Dash.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const Dash = ({ userData, onAddData  }) => {
    const navigate = useNavigate();
  // Default values to avoid errors if data missing
  const {
    savings = 0,
    rent = 0,
    utilities = 0,
    food = 0,
    transport = 0,
    shopping = 0,
    goingOut = 0,
    miscellaneous = 0,
    netMoney = 0,
    investments = 0,
  } = userData || {};

  // Convert string inputs to numbers
  const toNum = (v) => Number(v) || 0;

  const rentN = toNum(rent);
  const utilitiesN = toNum(utilities);
  const foodN = toNum(food);
  const shoppingN = toNum(shopping);
  const miscN = toNum(miscellaneous);
  const transportN = toNum(transport);
  const goingOutN = toNum(goingOut);
  const savingsN = toNum(savings);
  const investmentsN = toNum(investments);
  const netMoneyN = toNum(netMoney);

  const totalSpent =
    rentN + utilitiesN + foodN + transportN + shoppingN + goingOutN + miscN;
  const remainingMoney = netMoneyN - totalSpent;

  // === Pie Chart: Spending breakdown ===
  const pieData = {
    labels: ["Food", "Shopping", "Miscellaneous", "Utilities", "Rent"],
    datasets: [
      {
        label: "Monthly Spending",
        data: [foodN, shoppingN, miscN, utilitiesN, rentN],
        backgroundColor: [
          "#FFBD88",
          "#FCE883",
          "#ACE5EE",
          "#EBC7DF",
          "#38ffd4ff",
        ],
        hoverOffset: 10,
        borderColor: "#737373",
      },
    ],
  };

  // === Line Chart: Dummy Yearly Spending Trend ===
  // For now, just repeat current month’s total for demo
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Spend per Year",
        data: [totalSpent * 0.8, totalSpent * 0.9, totalSpent, totalSpent * 1.1, totalSpent * 0.95],
        borderColor: "#737373",
        backgroundColor: "#737373",
        tension: 0.4,
      },
    ],
  };

  // === Doughnut Charts: Savings / Spending / Investments ===
  const doughnutOptions = {
    cutout: "70%",
    plugins: { tooltip: { enabled: false }, legend: { display: false } },
  };

  const calcPercent = (value, base) => (base > 0 ? (value / base) * 100 : 0);

  const savingsPercent = calcPercent(savingsN, netMoneyN);
  const spendingPercent = calcPercent(totalSpent, netMoneyN);
  const investPercent = calcPercent(investmentsN, netMoneyN);

  const makeDoughnutData = (percent) => ({
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: ["#C1CB79", "#E5E5E5"],
        borderWidth: 0,
      },
    ],
  });

  // === Progress bars (Earned vs Spent) ===
  const earnedPercent = calcPercent(netMoneyN, netMoneyN); // always 100%
  const spentPercent = calcPercent(totalSpent, netMoneyN);

  return (
    <div className="adahack-container">
      <div className="top-section">
        <div className="card">
          <p className="section-title">MONTHLY SPENDING</p>
          <div className="chart-container">
            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="yellow-button">VIEW</div>
        </div>

        <div className="card">
          <p className="section-title">OVERVIEW OF YOUR YEAR OF SPENDING</p>
          <Line data={lineData} />
        </div>
      </div>

      <div className="bottom-section">
        {/* Wrapped grid to allow proper scaling */}
        <div className="scaled-grid-wrapper">
          <div className="grid-2x2">
            <div className="small-card">
              <p>SAVINGS</p>
              <Doughnut
                data={makeDoughnutData(savingsPercent)}
                options={doughnutOptions}
              />
              <p>{savingsPercent.toFixed(1)}%</p>
            </div>
            <div className="small-card">
              <p>SPENDING MONEYS</p>
              <Doughnut
                data={makeDoughnutData(spendingPercent)}
                options={doughnutOptions}
              />
              <p>{spendingPercent.toFixed(1)}%</p>
            </div>
            <div className="small-card">
              <p>INVESTMENTS</p>
              <Doughnut
                data={makeDoughnutData(investPercent)}
                options={doughnutOptions}
              />
              <p>{investPercent.toFixed(1)}%</p>
            </div>
            <div className="small-card">
              <p>+</p>
              <p>SEE HOW YOU ARE DOING MONEY WISE</p>
            </div>
          </div>
        </div>

        <div className="cashflow-card">
          <p className="text-center">CASHFLOW FOR THE MONTH</p>
          <div className="cashflow-section">
            <p>EARNED</p>
            <div className="progress-bar">
              <div
                className="progress-fill green"
                style={{ width: `${earnedPercent}%` }}
              ></div>
            </div>
            <p>SPENT</p>
            <div className="progress-bar">
              <div
                className="progress-fill orange"
                style={{ width: `${spentPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <p>"MONEY MADE EASY"</p>
          <img src={require("../Mascot.png")} alt="mascot" height={100} />
          <div
            className="yellow-button large"
            onClick={onAddData}
            style={{ cursor: "pointer" }}
          >
            ADD DATA +
          </div>
          <div
          className="yellow-button large"
          onClick={() => navigate("/learn")}
          style={{ cursor: "pointer" }}
        >LEARN MORE +</div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
