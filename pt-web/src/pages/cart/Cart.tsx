import {useState} from "react";
import tourCardImage from "/images/7.avif";
import {Container} from "src/components/Container/Container";
import amex from "src/pages/cart/icons/amex.svg";
import mastercard from "src/pages/cart/icons/mastercard.svg";
import visa from "src/pages/cart/icons/visa.svg";
import styles from "src/pages/cart/Cart.module.scss";

export function Cart() {

  const [paymentMethod, setPaymentMethod] = useState<"card" | "alipay">("card");

  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.titlePage}>
          Complete your reservation
        </h2>
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <span className={styles.icon}>
              ✅
            </span>
            <span>
              All taxes included
            </span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.icon}>
              🔒
            </span>
            <span>
              Secure payments
            </span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.icon}>
              💳
            </span>
            <span>
              No credit card fees
            </span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.icon}>
              🚫
            </span>
            <span>
              No booking fees
            </span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.icon}>
              🛡
            </span>
            <span>
              Best price guarantee
            </span>
          </div>
        </div>
        <div className={styles.containerSection}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>
              Add payment details
            </h2>

            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="Add your full name"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Add contact email"
                className={styles.input}
              />
              <input
                type="tel"
                placeholder="+49"
                className={styles.input}
              />
              <select className={styles.input}>
                <option value="de">
                  🇩🇪 Germany
                </option>
                <option value="is">
                  🇮🇸 Iceland
                </option>
                <option value="us">
                  🇺🇸 USA
                </option>
              </select>
            </div>

            <label className={styles.checkbox}>
              <input type="checkbox" />
              Travelling for work
            </label>

            <div className={styles.paymentMethods}>
              <button
                className={`${styles.payBtn} ${paymentMethod === "card" ? styles.active : ""}`}
                onClick={() => setPaymentMethod("card")}
              >
                Credit card
              </button>
              <button
                className={`${styles.payBtn} ${paymentMethod === "alipay" ? styles.active : ""}`}
                onClick={() => setPaymentMethod("alipay")}
              >
                Alipay
              </button>
            </div>
            {/* Логотипы карт */}
            <div className={styles.cardLogos}>
              <img
                className={styles.cartLogoImg}
                src={visa}
                alt="Visa"
              />
              <img
                className={styles.cartLogoImg}
                src={mastercard}
                alt="MasterCard"
              />
              <img
                className={styles.cartLogoImg}
                src={amex}
                alt="American Express"
              />
            </div>

            {paymentMethod === "card" && (
              <div className={styles.inputs}>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className={styles.input}
                />
              </div>
            )}

            <label className={styles.checkbox}>
              <input type="checkbox" />
              I agree to the
              <a href="#">
                terms of service
              </a>
            </label>
          </div>

          <div className={styles.cartSection}>
            <div className={styles.cartHeader}>
              Your shopping cart
            </div>

            <div className={styles.tourCard}>
              <img
                src={tourCardImage}
                alt="Tour"
                className={styles.image}
              />

              <div className={styles.info}>
                <h3 className={styles.title}>
                  Northern Lights Private Tour
                </h3>
                <p className={styles.location}>
                  📍 Reykjavik, Iceland
                </p>
                <p className={styles.date}>
                  Starts: Oct 3, 21:00
                  <br />
                  Ends: Oct 4, 01:00
                </p>
                <span className={styles.badge}>
                  Likely to sell out soon
                </span>
              </div>
            </div>

            <div className={styles.footer}>
              <span className={styles.total}>
                Total 1,626 USD
              </span>
              <button className={styles.button}>
                Make it Yours
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
