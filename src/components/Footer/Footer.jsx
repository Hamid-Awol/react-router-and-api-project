import React, { useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const footerSections = [
    {
      title: "Shop and Learn",
      links: [
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "TV",
        "Music",
        "AirPods",
        "HomePod",
        "iPod touch",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Services",
      links: [
        "Apple Music",
        "Apple News+",
        "Apple TV+",
        "Apple Arcade",
        "Apple Card",
        "iCloud",
      ],
    },
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Field Trip",
        "Apple Store App",
        "Refurbished and Clearance",
        "Financing",
        "Apple Trade In",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      links: ["Apple and Education", "Shop for College"],
    },
    {
      title: "For Healthcare",
      links: ["Apple in Healthcare", "Health on Apple Watch"],
    },
    {
      title: "For Government",
      links: ["Shop for Government", "Shop for Veterans and Military"],
    },
    {
      title: "Apple Values",
      links: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supplier Responsibility",
      ],
    },
    {
      title: "About Apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ];

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.upperTextContainer}>
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple's trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the{" "}
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are{" "}
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              here
            </a>
            .
          </p>
          <p>
            2. Subscription required.
            <br />
            <br />
            Magic Keyboard sold separately.
            <br />
            <br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <a href="https://www.apple.com/promo/">terms</a> apply.
          </p>
        </div>

        <div className={styles.footerLinksWrapper}>
          {footerSections.map((section, idx) => (
            <div key={idx} className={styles.footerLinksColumn}>
              <h3 onClick={() => toggleSection(idx)}>
                {section.title}
                <span className={styles.mobileIcon}>
                  {openSections[idx] ? "−" : "+"}
                </span>
              </h3>
              <ul className={openSections[idx] ? styles.show : ""}>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.myAppleWrapper}>
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        <div className={styles.copyrightWrapper}>
          <div className={styles.copyright}>
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className={styles.footerLinksTerms}>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCountry}>
            <div className={styles.flagWrapper}>
              <img src="/src/assets/images/icons/16.png" alt="USA Flag" />
            </div>
            <div className={styles.footerCountryName}>United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
