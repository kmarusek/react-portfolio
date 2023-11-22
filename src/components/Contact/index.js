import Loader from 'react-loaders'
import './contact.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_f2s19bo',
        'template_ap5l7tc',
        form.current,
        'Hftm7NvtSJiSGoGxY'
      )
      .then(
        (result) => {
          alert('Message successfully sent!')
          window.location.reload(false)
          console.log(result.text)
        },
        (error) => {
          alert('Failed to send the message, please try again.')
          console.log(error.text)
        }
      )
  }

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <span className="before-text">&lt;h1&gt;</span>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <span className="after-text">&lt;/h1&gt;</span>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li className="button">
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kevin Marusek,
          <br />
          United States,
          <br />
          Kalamazoo, MI, 49009
          <br />
          <span>kevin.marusek@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.286362, -85.596643]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.286362, -85.596643]}>
              <Popup>Here I am, come over for coffee sometime.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Contact
