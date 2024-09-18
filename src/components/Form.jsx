import { Button, Input, Select } from 'antd'
import React, { useState } from 'react'
import "./Form.css"
import TextArea from 'antd/es/input/TextArea'

const Form = () => {
  const [error,setError] = useState(false)
  const [email,setEmail] = useState("")
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleFormSubmit = () => {
    console.log("here");
    console.log(error,email);
    if(email === ""){
      setError(true)
      alert("Email is required !!")
      return
    }else if(!validateEmail(email)){
      alert("Email is not valid")
    }
  }
  return (
    <div className='bg'>

      {/* heading */}
      <div className='title'>
        <div className='title-small desktop'>Contact Us</div>
        <div className='title-big desktop'>Make an Appointment</div>
        <div className='title-big mobile'>Book Appointment</div>
      </div>

      {/* main form */}
      <div className='main'>
        <div className='main-item'>
          <label className='mobile label'>Name *</label>
          <Input className='input' variant='filled' placeholder='Full Name*' />
          <label className='mobile label'>Email Address *</label>
          <Input value={email} onChange={e => setEmail(e.target.value)} className={error === true ? 'input':'input error' }type='email' variant='filled' placeholder='Email*' />
        </div>
        <div className='main-item'>
          <label className='mobile label'>Department *</label>
          <Select
            placeholder="Please Select"
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
            ]}
            variant='filled'
            className='Select'
          />
          <label className='mobile label'>Time *</label>
          <Select
            placeholder="4:00 Available"
            variant='filled'
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
            ]}
            className='Select'
          />
        </div>
        <div className='desktop'>
          <TextArea className="msg" rows={4} variant='filled' placeholder="Message" maxLength={6} />
        </div>
      </div>

      <div>
        <Button type='primary' className='btn' onClick={handleFormSubmit}>Book Appointment</Button>
      </div>

    </div>
  )
}

export default Form