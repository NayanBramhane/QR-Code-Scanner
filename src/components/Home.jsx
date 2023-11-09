import { Link } from "react-router-dom";
import QRCodeList from "./QRCodeList";

const Home = () => {
  return (
    <div className="home">
      <Link to="/qr-scanner">
        <button>Scan QR</button>
      </Link>
      <QRCodeList />
    </div>
  );
};

export default Home;
