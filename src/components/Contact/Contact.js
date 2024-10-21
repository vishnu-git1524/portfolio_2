import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email && !contact.phone) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      
      {contact.email && (
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      )}

      {contact.phone && (
        <a href={`tel:${contact.phone}`}>
          <span type='button' className='btn btn--outline'>
            Call me
          </span>
        </a>
      )}
    </section>
  )
}

export default Contact
