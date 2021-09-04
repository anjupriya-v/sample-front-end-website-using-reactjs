import React, { Component } from 'react';
import '../CssModule/CourseBenefits.css'
import '../App.css';
import CourseBenefitsData from '../JsonFolder/CourseBenefitsData';
class CourseBenefits extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section>
            <h1 id="courseBenefits">
              Course Benefits
            </h1>
            <details open>
              {
                CourseBenefitsData.map((CourseBenefit) => {
                  return <> <summary className="courseSummary">
                    {CourseBenefit.summaryTitle}</summary>
                    <p className="summary">
                      {CourseBenefit.paragraph}
                    </p>
                  </>
                })
              }
            </details>
          </section>
        </div>
      </div>
    );
  }
}
export default CourseBenefits;