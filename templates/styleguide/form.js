export default function FormButton() {
  return (
    <>
      <div className="container">
        <h2 className="pattern-title">Buttons</h2>
        <p><a className="btn" href="#">Default</a></p>
        <p><a className="btn btn--bg-white" href="#">Btn Bg White</a></p>
        <h3>Btn Width</h3>
        <p><a className="btn" href="#">Cta</a></p>
        <p><a className="btn btn--width-medium" href="#">Btn width medium</a></p>
        <p><a className="btn btn--width-large" href="#">Btn width large</a></p>
        <h3>Btn has icon</h3>
        <p><a className="btn btn--with-icon" href="#"><i className="icon-websitedesign"></i><span>Button call to action</span></a></p>
        <p><a className="btn btn--bg-white btn--with-icon" href="#"><i className="icon-websitedesign"></i><span>Button call to action</span></a></p>
      </div>
      <div className="container">
        <h2 className="pattern-title">Form</h2>
        <form>
          <div className="form-item form-type-select form-item-select">
            <label htmlFor="edit-select">Select</label>
            <select className="form-select">
              <option defaultValue="selected">- None -</option>
              <option defaultValue="Sunday">Sunday</option>
              <option defaultValue="Monday">Monday</option>
              <option defaultValue="Tuesday">Tuesday</option>
              <option defaultValue="Wednesday">Wednesday</option>
              <option defaultValue="Thursday">Thursday</option>
              <option defaultValue="Friday">Friday</option>
              <option defaultValue="Saturday">Saturday</option>
            </select>
          </div>

          <div className="form-item form-type-textfield form-item-name">
            <label htmlFor="edit-name" className="form-required">Text Input Normal</label>
            <input type="text" id="edit-name" name="name" defaultValue="" size="60" maxLength="255" className="form-text required" placeholder="Input text" />
          </div>
          <div className="form-item form-type-textfield form-item-name">
            <label htmlFor="edit-name2" className="form-required">Text Input Focused</label>
            <input type="text" id="edit-name" name="name" defaultValue="" size="60" maxLength="255" className="form-text required focused" placeholder="Input text" />
          </div>

          <div className="form-item form-type-textfield form-item-email form-item--error">
            <label htmlFor="edit-email" className="form-required">Text Input Error</label>
            <input type="text" id="edit-email" name="email" defaultValue="" size="60" maxLength="254" className="form-email required error" placeholder="Input text" />
          </div>

          <div className="form-item form-type-textfield form-item-subject">
            <label htmlFor="edit-subject" className="form-required">Text Input Disabled</label>
            <input type="text" id="edit-subject" name="subject" defaultValue="" size="60" maxLength="255" className="form-text required" disabled="" placeholder="Input text" />
          </div>

          <div className="form-item form-type-textarea form-item-message">
            <label htmlFor="edit-message" className="form-required">Text area</label>
            <div className="form-textarea-wrapper">
              <textarea id="edit-message" name="message" rows="5" cols="60" className="form-textarea required resize-vertical"></textarea>
            </div>
          </div>
          <div className="form-item form-type-textarea form-item-message">
            <label htmlFor="edit-message" className="form-required">Text area Focused</label>
            <div className="form-textarea-wrapper">
              <textarea id="edit-message" name="message" rows="5" cols="60" className="form-textarea required resize-vertical focused"></textarea>
            </div>
          </div>

          <fieldset id="edit-months--wrapper" className="fieldgroup form-composite form-item form-wrapper">
            <legend>
              <span className="fieldset-legend">Checkbox</span>
            </legend>
            <div className="fieldset-wrapper">
              <div id="edit-months" className="webform-options-display-one-column form-checkboxes">
                <div className="form-item form-type-checkbox form-item-months-focused">
                  <input type="checkbox" id="edit-months-focused" name="months[Focused]" defaultValue="Focused" className="form-checkbox focused" />
                  <label htmlFor="edit-months-focused" className="option">Checkbox Focused</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-january">
                  <input type="checkbox" id="edit-months-january" name="months[January]" defaultValue="January" className="form-checkbox" />
                  <label htmlFor="edit-months-january" className="option">January</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-february">
                  <input data-drupal-selector="edit-months-february" type="checkbox" id="edit-months-february" name="months[February]" defaultValue="February" className="form-checkbox" />
                  <label htmlFor="edit-months-february" className="option">February</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-march">
                  <input type="checkbox" id="edit-months-march" name="months[March]" defaultValue="March" className="form-checkbox" />
                  <label htmlFor="edit-months-march" className="option">March</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-april">
                  <input type="checkbox" id="edit-months-april" name="months[April]" defaultValue="April" className="form-checkbox" />
                  <label htmlFor="edit-months-april" className="option">April</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-may">
                  <input type="checkbox" id="edit-months-may" name="months[May]" defaultValue="May" className="form-checkbox" />
                  <label htmlFor="edit-months-may" className="option">May</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-june">
                  <input type="checkbox" id="edit-months-june" name="months[June]" defaultValue="June" className="form-checkbox" />
                  <label htmlFor="edit-months-june" className="option">June</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-july">
                  <input type="checkbox" id="edit-months-july" name="months[July]" defaultValue="July" className="form-checkbox" />
                  <label htmlFor="edit-months-july" className="option">July</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-august">
                  <input type="checkbox" id="edit-months-august" name="months[August]" defaultValue="August" className="form-checkbox" />
                  <label htmlFor="edit-months-august" className="option">August</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-september">
                  <input type="checkbox" id="edit-months-september" name="months[September]" defaultValue="September" className="form-checkbox" />
                  <label htmlFor="edit-months-september" className="option">September</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-october">
                  <input type="checkbox" id="edit-months-october" name="months[October]" defaultValue="October" className="form-checkbox" />
                  <label htmlFor="edit-months-october" className="option">October</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-november">
                  <input type="checkbox" id="edit-months-november" name="months[November]" defaultValue="November" className="form-checkbox" />
                  <label htmlFor="edit-months-november" className="option">November</label>
                </div>
                <div className="form-item form-type-checkbox form-item-months-december">
                  <input type="checkbox" id="edit-months-december" name="months[December]" defaultValue="December" className="form-checkbox" />
                  <label htmlFor="edit-months-december" className="option">December</label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset id="edit-radios--wrapper" className="fieldgroup form-composite form-item form-wrapper ">
            <legend>
              <span className="fieldset-legend">Radio</span>
            </legend>
            <div className="fieldset-wrapper">
              <div id="edit-radios" className="webform-options-display-one-column form-radios">
                <div className="form-item form-type-radio form-item-radios">
                  <input type="radio" id="edit-radios-focused" name="radios" defaultValue="Focused" className="form-radio focused" />
                  <label htmlFor="edit-radios-focused" className="option">Radio Focused</label>
                </div>
                <div className="form-item form-type-radio form-item-radios">
                  <input type="radio" id="edit-radios-english" name="radios" defaultValue="English" className="form-radio" />
                  <label htmlFor="edit-radios-english" className="option">English</label>
                </div>
                <div className="form-item form-type-radio form-item-radios">
                  <input type="radio" id="edit-radios-vietnamese" name="radios" defaultValue="vietnamese" className="form-radio" />
                  <label htmlFor="edit-radios-vietnamese" className="option">Vietnamese</label>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="form-actions webform-actions form-wrapper" id="edit-actions">
            <input className="webform-button--submit button button--primary form-submit" type="submit" id="edit-actions-submit" name="op" defaultValue="Submit" />
          </div>
        </form>
      </div>
    </>
  )
}
