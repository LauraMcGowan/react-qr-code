import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [url, setUrl] = useState("");

  const downloadQRCode = (e: any) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e: any) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas id="qrCode" value={url} size={200} bgColor={"#ffffff"} />
  );
  return (
    <div className="qrcode__container">
      <div>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label> Enter URL </label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="Laura's QR Code"
          />
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
