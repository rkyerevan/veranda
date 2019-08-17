import './_dialog.scss'
import React from 'react';

const Dialog = (props) => {
  console.log(props)
  return (
    <div className='dialog position-absolute align-top w-100'>
      <div className='p3 m-2 border dialog-inner-wrap'>
        <div className='dialog-header d-flex justify-content-between align-items-start'>
          <span>{props.title}</span>

          <img onClick={props.onClose} src={require('./../../assets/icons/Close.svg')}/>
        </div>
        <div className="dialog-body">

          <ul className='list row'>
            <div className='col-5'>
            <li><span>Cold Apetizers</span>
              <ul>
                <li>Cheese Plate</li>
                <li>Charcuterie Plate</li>
                <li>Seafood Salad</li>
                <li>Vinegret Salad</li>
                <li>Strawberry Salad</li>
                <li>Jalapeño Lebni</li>
                <li>Yerevan Salad</li>
                <li>Stuffed Eggplants</li>
                <li>Avocado Salad</li>
                <li>Armenian Salad</li>
                <li>Beef Tongue</li>
                <li>Basturma and Sujukh</li>
                <li>Bacon Wrapped Jalapeño</li>
                <li>Smoked Fish Assortment</li>
                <li>Olive Assortments</li>
                <li>Red Caviar</li>
                <li>Pickles</li>
              </ul>
            </li>
            <li><span>Hot Appetizers</span>
              <ul>
                <li>Blinchik with Mushroom Sauce</li>
                <li>Sauteed wild Mushrooms</li>
                <li>Garlic Shrimp Saute</li>
              </ul>
            </li>
            </div>
            <div className="col-5">
            <li><span>Entrees</span>
              <ul>
                <li>Beef Kabob</li>
                <li>Chicken Kabob</li>
                <li>Baby Back Ribs</li>
                <li>Sturgeon</li>
              </ul>
            </li>

            <li><span>Extras</span>
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