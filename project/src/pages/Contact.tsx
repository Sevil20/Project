import React from 'react';
import '../assets/css/Contact.css'; // Make sure to import your SCSS file

const Contact: React.FC = () => {
  return (
    <div className="contact_us">
      <div className="responsive-container-block container">
        <form className="form-box">
          <p className="text-blk contact-head">
            Get in touch
          </p>
          <p className="text-blk contact-subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaInsert your text here.
          </p>
          <div className="container-block form-wrapper">
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-4">
                <p className="text-blk input-title">
                  First Name
                </p>
                <input className="input" id="ijowk-4" name="FirstName" />
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">
                  Last Name
                </p>
                <input className="input" id="indfi-3" name="LastName" />
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">
                  Email
                </p>
                <input className="input" id="ipmgh-4" name="Email" />
              </div>
              <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p className="text-blk input-title">
                  Phone No.
                </p>
                <input className="input" id="imgis-4" name="PhoneNumber" />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-4">
                <p className="text-blk input-title">
                  Message
                </p>
                <textarea className="textinput" id="i5vyy-4" placeholder="Write your message..."></textarea>
              </div>
            </div>
            <button className="submit-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
