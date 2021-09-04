import React, { Component } from 'react';
class GainFromCourse extends Component {
    render() {
        return (
            <>
                <details >
                    <summary className="courseSummary">How It Works
                    </summary>
                    <p className="summary">A TEN Specialization is a series of courses that helps you master a skill. To begin, enroll in the Specialization directly, or review its courses and choose the one you'd like to start with. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. It’s okay to complete just one course — you can pause your learning or end your subscription at any time. Visit your learner dashboard to track your course enrollments and your progress.</p>
                    <b className="summaryHeading">Hands-on Project:</b>
                    <p className="summary">Every Specialization includes a hands-on project. You'll need to successfully finish the project(s) to complete the Specialization and earn your certificate. If the Specialization includes a separate course for the hands-on project, you'll need to finish each of the other courses before you can start it.</p>
                    <b className="summaryHeading">Earn a Certificate</b>
                    <p className="summary">When you finish every course and complete the hands-on project, you'll earn a Certificate that you can share with prospective employers and your professional network.</p>
                </details>
            </>
        );
    }
}
export default GainFromCourse;