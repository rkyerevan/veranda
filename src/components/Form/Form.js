import React from "react"

import Button from "../Button/Button";

import "./Form.scss"

const Form = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputFirstName">First Name</label>
            <input type="email" className="form-control" id="inputFirstName"/>
          </div>
        </div>
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputLastName">Last Name</label>
            <input type="email" className="form-control" id="inputLastName"/>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" id="inputEmail"/>
          </div>
        </div>
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputPhoneNumber">Phone Number</label>
            <input type="email" className="form-control" id="inputPhoneNumber"/>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputEventType">Event type</label>
            <input type="email" className="form-control" id="inputEventType"/>
          </div>
        </div>
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputGuestsNumber">Number of Guests</label>
            <input type="email" className="form-control" id="inputGuestsNumber"/>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputEventDate">Date of Event</label>
            <input type="email" className="form-control" id="inputEventDate"/>
          </div>
        </div>
        <div className="form-group col">
          <div className="fieldContainer">
            <label htmlFor="inputBudget">Budget</label>
            <input type="email" className="form-control" id="inputBudget"/>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <div className="textContainer">
            <label htmlFor="exampleFormControlTextarea1">Addidional Info</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <Button name="Request a quote"/>
      </div>
    </form>
  )
}

export default Form