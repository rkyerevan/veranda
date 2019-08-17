import './_dialog.scss'
import React from 'react';

const menu = {
  coldApetizers: [
    'Cheese Plate',
    'Charcuterie Plate',
    'Seafood Salad',
    'Vinegret Salad',
    'Strawberry Salad',
    'Jalapeño Lebni',
    'Yerevan Salad',
    'Stuffed Eggplants',
    'Avocado Salad',
    'Armenian Salad',
    'Beef Tongue',
    'Basturma and Sujukh',
    'Bacon Wrapped Jalapeño',
    'Smoked Fish Assortment',
    'Olive Assortments',
    'Red Caviar',
    'Pickles'
  ]
}

const Dialog = (props) => {
  console.log(props)
  return (
    <div className='dialog position-absolute align-top w-100'>
      <div className='p3 m-2 border dialog-inner-wrap'>
        <div className='dialog-header d-flex justify-content-between align-items-start'>
          <span>{props.title}</span>

          <img onClick={props.onClose} src={require('./../../assets/icons/Close.svg')} alt="" />
        </div>
        <div className="dialog-body">
          {/* TODO don't put anything between <ul> and <li> ara */}
          <ul className='list row'>
            <div className='col-5'>
              <li>
                <span className="title">Cold Apetizers</span>
                <ul>
                  {menu.coldApetizers.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="title">Hot Appetizers</span>
                <ul>
                  <li>Blinchik with Mushroom Sauce</li>
                  <li>Sauteed wild Mushrooms</li>
                  <li>Garlic Shrimp Saute</li>
                </ul>
              </li>
            </div>
            <div className="col-5">
            <li>
              <span className="title">Entrees</span>
              <ul>
                <li>Beef Kabob</li>
                <li>Chicken Kabob</li>
                <li>Baby Back Ribs</li>
                <li>Sturgeon</li>
              </ul>
            </li>

            <li>
              <span className="title">Extras</span>
              <ul>
                <li>Filet Mignon Medallion</li>
                <li>Seafood Combination</li>
                <li>Cornish Hen</li>
                <li>Gavar Kufta</li>
                <li>Lobster and Crab Legs</li>
                <li>Osso Buco (Lamb Shank)</li>
                <li>Beef Stroganoff</li>
                <li>Scrambled Eggs with Tomatoes</li>
                <li>Black Caviar</li>
                <li>Tuna Tartar</li>
                <li>Ishli Kufta</li>
                <li>Frog Legs</li>
                <li>Bottled Beverages</li>
              </ul>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dialog
