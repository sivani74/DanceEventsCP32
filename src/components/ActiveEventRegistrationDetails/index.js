// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props
  console.log(activeEventRegistrationStatus)

  const renderNOActiveEventView = () => (
    <div className="no-active-event-view">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="event-status-container">
      <div className="status-image-conatiner">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="status-image"
        />
        <p>A live performance brings so much to your relationship with dance</p>
        <button type="button">Register Here</button>
      </div>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="event-status-container">
      <div className="status-image-conatiner">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="status-image"
        />
        <h1>You have already registered for the event</h1>
      </div>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="event-status-container">
      <div className="status-image-conatiner">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="status-image"
        />
        <h1>Registrations Are Closed Now!</h1>
        <p>Stay tuned. We will reopen the registrations soon!</p>
      </div>
    </div>
  )

  const renderActiveEventRegistetionView = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        console.log(registrationStatus.yetToRegister)
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        console.log(registrationStatus.yetToRegister)
        return renderNOActiveEventView()
    }
  }

  return (
    <div className="status-view-container">
      {renderActiveEventRegistetionView()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
