import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <div>
        <div class="contact row">
    <div class="bdy">
        <div class="img-text">
          <h1 style={{fontSize:"80px"}} >Contact Us</h1>
        </div>
    </div>
    <div class="about">
        <h2>Let's Get in Touch</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel explicabo voluptas doloremque soluta deserunt magni voluptatem in, tempore sit enim labore magnam odio impedit cumque vitae, maxime laborum sequi minus deleniti! Incidunt ullam alias quae similique pariatur, eaque obcaecati esse quod eius deserunt repudiandae, ratione, expedita rerum hic eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil minus nemo dolor iure quia aspernatur. Natus.<br/><br/> dolorem eos inventore velit, hic consectetur saepe asperiores eveniet maxime fugit autem architecto, veritatis labore minus. Aliquid facilis similique, veritatis modi corporis et neque! Suscipit possimus necessitatibus consectetur enim consequuntur ipsum esse quo incidunt facere soluta sapiente quaerat accusamus, maiores debitis voluptatum nemo veniam sit assumenda id neque voluptates deleniti? Delectus, blanditiis! Nihil et architecto, quaerat rem sit blanditiis labore impedit reprehenderit eius doloremque. Facere at cumque, id, odit unde minus accusantium illum accusamus, amet pariatur fuga ea officiis cum placeat ipsam corrupti.</p>
    </div>
    <div class="d-grid gap-2 col-2 mx-auto">
    <p id="btn">Contact Us</p>
    </div>
    <div class="abt-sctn">
        <div class="contact-section">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt icon"></i>
              <h5>Regd. Office</h5>
              <p>A-9 Multiplex, Block-II.<br/>Ground Floor, Kalyani, Nadia, West Bengal.</p>
            </div>
        
            <div class="contact-item">
              <i class="fas fa-hammer icon"></i>
              <h5>Workshop</h5>
              <p>T-7/Pt-5, kalyani Industrial Estate.<br/> Phase-II, Kalyani, Nadia, west Bengal.</p>
            </div>
        
            <div class="contact-item">
              <i class="fas fa-phone icon"></i>
              <h5>Contact No.</h5>
              <p>(033) 2582 5005<br/>+91 9830060590</p>
            </div>/
        
            <div class="contact-item">
              <i class="fas fa-envelope icon"></i>
              <h5>Email</h5>
              <p>amitkundu@rediffmail.com<br/>inkysales@gmail.com<br/>info@inkyideas.in</p>
            </div>
            <div class="social-icons">
                <i class="fab fa-facebook social-icon"></i>
                <i class="fab fa-twitter social-icon"></i>
                <i class="fab fa-google social-icon"></i>
                <i class="fab fa-linkedin social-icon"></i>
              </div>
          </div>
        <div class="inr-cntnr">
            <h1>Let's connect</h1>
            <div class="form-floating">
                <input
                type="text"
                name="name"
                  class="form-control"
                  id="floatingName"
                  placeholder="Name"
                  required
                />
                <label for="floatingName">Name</label>
              </div>
      
              <div class="form-floating">
                <input
                  type="email"
                  name="eemail"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingEmail">Email</label>
              </div>
      
              <div class="form-floating">
                <input
                  type="number"
                  name="phone_number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="+91"
                  required
                />
                <label for="floatingInput">Phone Number</label>
              </div>
              
              <div class="form-label mb-3">
                <textarea for="floatingsubject" class="form-control" name="text" placeholder="Enter text...."></textarea>
              </div>
              <div class="d-grid gap-2 col-5 mx-auto">
              <button class="w-100 btn btn-lg btn-warning" name="submit" type="submit">
                Submit
              </button>
              </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Contact