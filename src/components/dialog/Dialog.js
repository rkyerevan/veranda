import React from "react";

import "./Dialog.scss"

const menu = [
  {
    name: "cold apetizers",
    choices: [
      "Cheese Plate",
      "Charcuterie Plate",
      "Seafood Salad",
      "Vinegret Salad",
      "Strawberry Salad",
      "Jalapeño Lebni",
      "Yerevan Salad",
      "Stuffed Eggplants",
      "Avocado Salad",
      "Armenian Salad",
      "Beef Tongue",
      "Basturma and Sujukh",
      "Bacon Wrapped Jalapeño",
      "Smoked Fish Assortment",
      "Olive Assortments",
      "Red Caviar",
      "Pickles"
    ],
  },
  {
    name: "hot apetizers",
    choices: [
      "Blinchik with Mushroom Sauce",
      "Sauteed wild Mushrooms",
      "Garlic Shrimp Saute"
    ]
  },
  {
    name: "entrees",
    choices: [
      "Beef Kabob",
      "Chicken Kabob",
      "Baby Back Ribs",
      "Sturgeon"
    ]
  },
  {
    name: "extras",
    choices: [
      "Filet Mignon Medallion",
      "Seafood Combination",
      "Cornish Hen",
      "Gavar Kufta",
      "Lobster and Crab Legs",
      "Osso Buco (Lamb Shank)",
      "Beef Stroganoff",
      "Scrambled Eggs with Tomatoes",
      "Black Caviar",
      "Tuna Tartar",
      "Ishli Kufta",
      "Frog Legs",
      "Bottled Beverages"
    ]
  }
]

const Dialog = (props) => {

  return (
    <div className="overlay">
      <div className="dialog position-absolute align-top w-100">
        <div className="p3 m-2 border dialogInnerWrap">
          <div className="dialogHeader d-flex justify-content-between align-items-start">
            <span>{props.title}</span>
            <img onClick={props.onClose} src={require("./../../assets/icons/Close.svg")} alt=""/>
          </div>
          <div className="dialog-body">
            <ul className="list">
              {menu.map((item, id) => {
                return (
                  <li key={id} className="sectionMenu">
                    <span className="title">{item.name}</span>
                    <ol className="sectionList">
                      {item.choices.map((choice, id) => {
                        return <li key={id}>{choice}</li>
                      })}
                    </ol>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog
