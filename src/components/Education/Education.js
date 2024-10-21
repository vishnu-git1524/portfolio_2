import './Education.css'

const Education = ({ education }) => (
  <div className='education center'>
    <h2 className='education__title'>Education</h2>

    {education.map((edu) => (
      <div key={edu.institution} className='education__card'>
        <h3 className='education__institution'>{edu.institution}</h3>
        <p className='education__degree'>
          {edu.degree} ({edu.startYear} - {edu.endYear})
        </p>
        <p className='education__desc'>{edu.description}</p>
      </div>
    ))}
  </div>
)

export default Education
