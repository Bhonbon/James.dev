import './Terms.css'
import terms1 from './Assets/terms/terms1.png'
import terms3 from './Assets/terms/terms3.png'
import terms4 from './Assets/terms/terms4.png'
import android1 from './Assets/terms/android1.jpg'
import android2 from './Assets/terms/android2.jpg'

const Terms = () => {
  return (
    <section className='terms' id='terms'>
        <div className='web-terms'>
            <li>TERMS-Traffic Enforcement Reporting Management System Login Form</li>
            <img src={terms1} alt="" />
            <li>Main Form - dashboard for reports of accident reports send by the mobile user. If the admin click the button Click as Done, the reports will auto compile into accident form dashboard</li>
            <img src={terms3} alt="" />
            <li>The system have 3 main reports dashboard consists of spot, accident, and development report of PNP Traffic and heres the example of dashboard</li>
            <img src={terms4} alt="" />
            <div className='mobile-terms'>
              <div className='mobile'>
              <li>Login Form of Terms-android system</li>
              <img src={android1} alt="" />
              </div>
              <div className='mobile'>
              <li>Report form</li>
              <img src={android2} alt="" />
              </div>
        </div>
        </div>
    </section>
  )
}

export default Terms