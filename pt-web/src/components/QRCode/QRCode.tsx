import {memo} from "react";
import {QRCodeSVG} from "qrcode.react";
import styles from "src/components/QRCode/QRCode.module.scss";

// ====== CONSTANTS ======
const DEFAULT_QR_SIZE = 120;

interface QRCodeProps {
  value: string;
  size?: number;
  title?: string;
  bgColor?: string;
  fgColor?: string;
}

export const QRCode = memo(function QRCode({
  value,
  size = DEFAULT_QR_SIZE,
  title = "QR Code",
  bgColor = "#ffffff",
  fgColor = "#000000",
}: QRCodeProps) {
  return (
    <div
      className={styles.qrCode}
      role="img"
      aria-label={title}
    >
      <QRCodeSVG
        value={value}
        size={size}
        bgColor={bgColor}
        fgColor={fgColor}
        level="M"
        className={styles.qrImage}
      />
      <p className={styles.qrText}>
        Scan to call now
      </p>
    </div>
  );
});
