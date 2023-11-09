import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { useState } from "react";

const QRScanner = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const success = (result) => {
      setData(result);
      scanner.clear();
    };

    const failure = (error) => {
      console.warn(error);
    };
    
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    scanner.render(success, failure);

  }, []);

  return (
    <div className="scanner-container">
      <div className="scanner">
        {data ? (
          <h2>
            <a href={data}>{data}</a>
          </h2>
        ) : (
          <div id="reader"></div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
