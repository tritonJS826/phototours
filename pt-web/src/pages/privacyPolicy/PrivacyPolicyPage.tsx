import styles from "src/pages/privacyPolicy/PrivacyPolicyPage.module.scss";

export function PrivacyPolicy() {
  return (
    <main
      className={styles.page}
      role="main"
      aria-labelledby="privacy-title"
    >
      <h1 id="privacy-title">
        Privacy Policy for Tuscany Photo Tours
      </h1>
      <p className={styles.effectiveDate}>
        Effective Date: April 2, 2026
      </p>
      <p>
        The administration of the https://tuscany-photo-tours.com/ website,
        operated by Kythira Corporation OÜ (registry code 16684153, Tallinn,
        Estonia), is committed to protecting your privacy online. We place great
        importance on the security of the data you provide to us. Our privacy
        policy is based on the requirements of the General Data Protection
        Regulation (GDPR) of the European Union and applicable consumer privacy
        laws in the United States.
      </p>

      <section>
        <h2>
          1. Purposes of Data Collection
        </h2>
        <p>
          We collect and process personal data for the following purposes:
        </p>
        <ul>
          <li>
            Improving our service and website functionality;
          </li>
          <li>
            Communicating with visitors and providing customer support;
          </li>
          <li>
            Processing bookings and payments for photo tours;
          </li>
          <li>
            Sending email newsletters and marketing materials (with your consent);
          </li>
          <li>
            Performing services related to the core activities of this website.
          </li>
        </ul>
      </section>

      <section>
        <h2>
          2. Personal Data We Collect
        </h2>
        <p>
          We collect and use your personal data only with your voluntary consent.
          By using our services, you authorize us to collect:
        </p>
        <ul>
          <li>
            First and last name;
          </li>
          <li>
            Email address and phone number;
          </li>
          <li>
            Social media account data;
          </li>
          <li>
            Billing information and transaction history;
          </li>
          <li>
            Technical data (IP address, browser settings, operating system).
          </li>
        </ul>
      </section>

      <section>
        <h2>
          3. Use of Third-Party Services
        </h2>
        <p>
          To provide high-quality services, we use specialized third-party
          platforms that may collect information independently:
        </p>
        <ul>
          <li>
            <strong>
              Zoho Corporation &amp; Zoho Analytics:
            </strong>
            {" "}
            We use Zoho
            CRM for data management and Zoho Analytics to process business data
            and improve our marketing efficiency.
          </li>
          <li>
            <strong>
              Google Services:
            </strong>
            {" "}
            We use Google Analytics and Google
            Search Console to monitor traffic and website performance.
          </li>
          <li>
            <strong>
              Meta (Facebook):
            </strong>
            {" "}
            We use Meta Pixel and Conversions
            API (CAPI) for advertising optimization and tracking user
            interactions.
          </li>
          <li>
            <strong>
              Stripe:
            </strong>
            {" "}
            We use Stripe for secure payment
            processing. We do not store your credit card details on our servers;
            all payment data is handled directly by Stripe in compliance with
            PCI-DSS standards.
          </li>
        </ul>
      </section>

      <section>
        <h2>
          4. International Data Transfers
        </h2>
        <p>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province, or
          country (including the United States and India where Zoho, Stripe, and
          Meta servers may be located). We ensure that such transfers comply with
          GDPR through Standard Contractual Clauses (SCCs) and other recognized
          legal frameworks to ensure your data receives an equivalent level of
          protection as it does within the European Union.
        </p>
      </section>

      <section>
        <h2>
          5. Data Storage, Modification, and Deletion
        </h2>
        <p>
          Your personal data will be stored for the period necessary to fulfill
          the purposes outlined in this policy. As a user, you have the right
          to:
        </p>
        <ul>
          <li>
            Access, correct, or request the deletion of your data;
          </li>
          <li>
            Withdraw your consent for data processing at any time;
          </li>
          <li>
            Request a copy of your data in a portable format.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at:
        </p>
        <ul className={styles.contactInfo}>
          <li>
            <strong>
              Entity:
            </strong>
            {" "}
            Kythira Corporation OÜ
          </li>
          <li>
            <strong>
              Address:
            </strong>
            {" "}
            Tallinn, Estonia
          </li>
          <li>
            <strong>
              Email:
            </strong>
            {" "}
            info@tuscany-photo-tours.com
          </li>
          <li>
            <strong>
              Phone:
            </strong>
            {" "}
            +372 679 5420
          </li>
        </ul>
      </section>

      <section>
        <h2>
          6. Use of Cookies
        </h2>
        <p>
          We use cookies to enhance your experience. These are small files stored
          on your device that help us remember your preferences (e.g., language)
          and analyze site traffic. You can manage or block cookies through your
          browser settings, though this may limit some website features.
        </p>
      </section>

      <section>
        <h2>
          7. Children&apos;s Privacy
        </h2>
        <p>
          We do not knowingly collect personal data from minors under the age of
          18 without parental consent. If you are a parent or guardian and
          believe your child has provided us with data, please contact us
          immediately at info@tuscany-photo-tours.com.
        </p>
      </section>

      <section>
        <h2>
          8. Links to Other Sites
        </h2>
        <p>
          Our website may contain links to external sites not operated by us. We
          are not responsible for the content or privacy practices of these
          third-party websites.
        </p>
      </section>

      <section>
        <h2>
          9. Changes to the Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new policy on this page. We recommend
          reviewing this page periodically to stay informed about how we protect
          your data.
        </p>
      </section>

      <section>
        <h2>
          10. Feedback and Final Provisions
        </h2>
        <p>
          If you have any questions regarding this policy, please contact us at
          info@tuscany-photo-tours.com. If you do not agree with this privacy
          policy, you should refrain from using the services of Tuscany Photo
          Tours and visiting our website.
        </p>
      </section>
    </main>
  );
}
