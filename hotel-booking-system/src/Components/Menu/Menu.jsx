import React from "react";
import styles from "./Menu.module.css"; // Import the CSS module

const Menu = () => {
  const items = [
    { name: "Fried Rice", prices: { S: "$6", M: "$10", L: "$15" } },
    { name: "Sambal Fried Rice", prices: { S: "$6", M: "$10", L: "$15" } },
    { name: "Vegetarian Fried Rice", prices: { S: "$6", M: "$10", L: "$15" } },
    { name: "Chicken Fried Rice", prices: { S: "$6", M: "$10", L: "$15" } },
    { name: "Sambal Chicken Fried Rice", prices: { S: "$7", M: "$12", L: "$15" } },
    { name: "Salted Fish Fried Rice", prices: { S: "$7", M: "$12", L: "$15" } },
    { name: "Sambal Salted Fish Fried Rice", prices: { S: "$7", M: "$12", L: "$15" } },
    { name: "Seafood Fried Rice", prices: { S: "$6", M: "$10", L: "$15" } },
    { name: "Sambal Seafood Fried Rice", prices: { S: "$7", M: "$12", L: "$15" } },
    { name: "Shanghai Fried Rice", prices: { S: "$6", M: "$10", L: "$15" } },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.menuContainer}>
        <h1 className={styles.menuTitle}>FRIED RICE MENU</h1>
        <p className={styles.menuSubtitle}>Open daily for your cravings</p>
        <table className={styles.menuTable}>
          <thead>
            <tr>
              <th>Items</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className={styles.itemName}>
                  <a
                    href={`#${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className={styles.menuLink}
                  >
                    {item.name}
                  </a>
                </td>
                <td>{item.prices.S}</td>
                <td>{item.prices.M}</td>
                <td>{item.prices.L}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.menuFooter}>
          All dishes come with complimentary fortune cookies and a choice of soy sauce or chili sauce on the side.
        </p>
      </div>
    </div>
  );
};

export default Menu;
