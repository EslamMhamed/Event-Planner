import { Plus } from "lucide-react"
import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function EventCreatePage() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time : "",
    location: "",
    attendeeEmail: ""
  })

  const location = useLocation()
  const navigate = useNavigate()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name] : value}))
  }

  function handleAddAttendee(){
    
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    const eventData = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      location: formData.location,
    }

    addEvent(eventData)
    
    navigate("/")
  }

  return (
    <section>
      <h2>
       { location.pathname === "/event" ? "Edit Event" : "Create New Event"}
      </h2>

      <form onSubmit={e =>handleSubmit(e)} >
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleInputChange} value={formData.title} required />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" onChange={handleInputChange} value={formData.description} required />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" onChange={handleInputChange} value={formData.date} required />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <input type="time" name="time" id="time" onChange={handleInputChange} value={formData.time} required />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" onChange={handleInputChange} value={formData.location} required />
        </div>

        <div>
          <label htmlFor="attendee-email">Attendees</label>
          <input type="email" name="attendee-email" id="attendee-email" onChange={handleInputChange} value={formData.attendeeEmail} required />
          <button onClick={handleAddAttendee} type="button"> 
            <Plus /> Add Attendee
          </button>
        </div>

        <div>
          <button type="button">Cancel</button>
          <button type="submit">Create Event</button>
        </div>
      </form>
    </section>
  )
}

export default EventCreatePage