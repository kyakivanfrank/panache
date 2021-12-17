import emailjs from 'emailjs-com';
import { useState } from "react"
const initialState = {
  name: '',
  contact: '',
  venue: '',
  date: '',
  guestNumber:'',
  ceremony: '',
  description: '',
}

let toggle ="";

export const Features = (props) => {
const [{name, contact, date, venue, guestNumber, ceremony, description},setState] = useState(initialState);

const handleChange = (e) => {
  const { name, value } = e.target
  setState((prevState) => ({ ...prevState, [name]: value }))
}
const clearState = () => setState({ initialState })

console.log(name, contact,venue, date, guestNumber,ceremony, description, clearState)

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs
    .sendForm(
      // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      'service_2z4dnmr', 'template_2v7lram', e.target, 'user_kCREZLuMlcYDdidzhOrCD'
    )
    .then(
      (result) => {
        console.log(result.text)
        clearState()
      },
      (error) => {
        console.log(error.text)
      }
    )
}


  return (
    <div id='features' style={{display: toggle}} className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>BOOK US</h2>
        </div>
        <div className="col-lg-8">


{/* form starts here */}
        <form name='sentMessage' validate onSubmit={handleSubmit}>
  <div className="form-row">
  <div className="form-group col-md-6">
      <label className='dark_label'>NAME</label>
      <input type="text" onChange={handleChange} name='name' className="form-control" required placeholder="your name"/></div>

      <div className="form-group col-md-6">
      <label className='dark_label'>contact</label>
      <input type="textt" onChange={handleChange} name="contact" className="form-control" required placeholder="Your contact number or email"/></div>


      <div className="form-group col-md-3">
      <label className='dark_label'>Type of ceremony</label>
      <select defaultValue="birthday" name="ceremony" onChange={handleChange} className="form-control">
        <option >choose...</option>
        <option>Birthday</option>
        <option>Baby shower</option>
        <option>Exhibition</option>
        <option>Religious ceremony</option>
        <option>community function</option>
        <option>if other (put in the description)</option>
      </select>
    </div>

     <div className="form-group col-md-2">
      <label className='dark_label'>Guests</label>
      <select defaultValue="below 20" name="guestNumber" onChange={handleChange} className="form-control">
        <option >how many</option>
        <option>below 20</option>
        <option>below 50</option>
        <option>below 100</option>
        <option>above 100</option>
        <option>specify in the description</option>
        <option>if other (put in the description)</option>
      </select>
    </div>


    <div className="form-group col-md-3">
      <label className='dark_label'>When</label>
      <input type="text" onChange={handleChange} name="date" className="form-control" required placeholder="dd/mm/yy"/></div>

    <div className="form-group col-md-4">
      <label className='dark_label'>where will the event be?</label>
      <input type="text" onChange={handleChange} className="form-control" name="venue" placeholder="we can also help find a place for you"/></div>

      <textarea onChange={handleChange}
                    className='form-control form-group col-md-4'
                    name='description'
                    rows='4'
                    placeholder='Tell us more that your planning'
                    required
                  ></textarea>

  </div>
  <button type="submit" id="book" className='btn btn-custom btn-lg'>BOOK NOW</button>

        </form>
        </div>

      </div>
    </div>
  )
}
