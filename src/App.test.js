import { render, screen } from '@testing-library/react';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutComp from './Components/AboutComp';
import Entrepreneurship from './Components/Entrepreneurship';
import DigitalMarketing from './Components/DigitalMarketing';
import ProductManagement from './Components/ProductManagement';
import WebDevelopment from './Components/WebDevelopment';
import Hiring from './Components/Hiring';
import Certification from './Components/Certification'
import AluminiTeam from './Components/AluminiTeam';
import Complaints from './Components/Complaints';
import Mentorship from './Components/Mentorship';
import Testimonials from './Components/Testimonials';
import Courses from './Components/Courses';
import ScrollIntoView from './Components/ScrollIntoView';
import ContactForm from './Components/ContactForm'
import TENDiscordChannel from './Components/TENDiscordChannel';
const Routing = () => {
  return (
    <Router>
      <ScrollIntoView>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={AboutComp} />
          <Route path='/Entrepreneurship' component={Entrepreneurship} />
          <Route path='/DigitalMarketing' component={DigitalMarketing} />
          <Route path='/ProductManagement' component={ProductManagement} />
          <Route path='/hiring' component={Hiring} />
          <Route path='/certification' component={Certification} />
          <Route path='/aluminiTeam' component={AluminiTeam} />
          <Route path='/complaints' component={Complaints} />
          <Route path='/mentorship' component={Mentorship} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/Courses' component={Courses} />
          <Route path='/webDevelopment' component={WebDevelopment} />
          <Route path='/contact' component={ContactForm} />
        </Switch>
      </ScrollIntoView>
    </Router>
  )
}
test('renders the Routing Components', () => {
  render(<Routing />);
});
reportWebVitals();
export default Routing;

