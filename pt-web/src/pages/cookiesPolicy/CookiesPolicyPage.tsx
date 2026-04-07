import styles from "src/pages/cookiesPolicy/CookiesPolicyPage.module.scss";

export function CookiesPolicy() {
  return (
    <main
      className={styles.page}
      role="main"
      aria-labelledby="cookies-title"
    >
      <h1 id="cookies-title">
        Cookies Policy for Tuscany Photo Tours
      </h1>
      <p className={styles.lastUpdated}>
        Last Updated: April 2, 2026
      </p>
      <p>
        Tuscany Photo Tours (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses
        cookies on the https://tuscany-photo-tours.com/ website. By using our
        service, you consent to the use of cookies.
      </p>

      <section>
        <h2>
          1. What are cookies?
        </h2>
        <p>
          Cookies are small pieces of text sent to your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          service or a third-party to recognize you and make your next visit
          easier and the service more useful to you.
        </p>
      </section>

      <section>
        <h2>
          2. How we use cookies
        </h2>
        <p>
          When you use and access our website, we may place a number of cookies
          files in your web browser. We use cookies for the following purposes:
        </p>
        <ul>
          <li>
            <strong>
              Strictly Necessary Cookies:
            </strong>
            {" "}
            These are essential for
            the operation of our website. They include, for example, cookies
            that enable you to log into secure areas or make payments via Stripe.
            Stripe uses these cookies to prevent fraud and ensure transaction
            security.
          </li>
          <li>
            <strong>
              Analytical/Performance Cookies:
            </strong>
            {" "}
            We use Google
            Analytics and Zoho Analytics to recognize and count the number of
            visitors and to see how visitors move around our website when they are
            using it. This helps us to improve the way our website works.
          </li>
          <li>
            <strong>
              Functionality Cookies:
            </strong>
            {" "}
            These are used to recognize
            you when you return to our website (e.g., through Zoho CRM
            integration), allowing us to personalize our content for you.
          </li>
          <li>
            <strong>
              Targeting/Marketing Cookies:
            </strong>
            {" "}
            These cookies record
            your visit to our website, the pages you have visited, and the links
            you have followed. We use this information, including data from Meta
            Pixel and CAPI, to make our advertising more relevant to your
            interests.
          </li>
        </ul>
      </section>

      <section>
        <h2>
          3. Third-party cookies
        </h2>
        <p>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the service, deliver
          advertisements on and through the service, and so on. These include:
        </p>
        <ul>
          <li>
            Google (Analytics &amp; Search Console)
          </li>
          <li>
            Meta (Advertising &amp; Tracking)
          </li>
          <li>
            Stripe (Payment Security)
          </li>
          <li>
            Zoho (CRM &amp; Analytics)
          </li>
        </ul>
      </section>

      <section>
        <h2>
          4. What are your choices regarding cookies?
        </h2>
        <p>
          If you&apos;d like to delete cookies or instruct your web browser to
          delete or refuse cookies, please visit the help pages of your web
          browser. Please note, however, that if you delete cookies or refuse to
          accept them, you might not be able to use all of the features we offer,
          and some of our pages might not display properly.
        </p>
      </section>
    </main>
  );
}
