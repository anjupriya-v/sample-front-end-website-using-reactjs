import TestimonialsData from "../JsonFolder/TestimonialsData";
function TestimonialsComp() {
  return (
    <div id="testimonials" >
      <h1 className="testimonialsHeading">Testimonials</h1>
      <div className="container testimonialsContainer">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner ">
            {
              TestimonialsData.map((data) => {
                return <div className={`carousel-item ${data.active}`}>
                  <img className="d-block w-100 testimonialsImage" src={data.image} alt="TestimonialsBgImage" width="100%"></img>
                  <div className="carousel-content">
                    <h4 className="content">
                      {data.feedBack}
                    </h4>
                    <p className="para" >{data.author}</p>
                  </div>
                </div>
              })
            }
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default TestimonialsComp;