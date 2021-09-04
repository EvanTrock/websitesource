import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import resume from '../assets/resume.pdf';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">{config.bio}</p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="media"
      >
        <div className="w-100">
          <h2 className="mb-5">Media</h2>
          {config.media.map(embed => {
            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{embed.name}</h3>
                  <iframe
                    width="320"
                    height="240"
                    src={embed.location}
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="resume"
      >
        <div className="w-100">
          <h2 className="mb-5">Resume</h2>
          <a href={resume}>
            <div className="subheading mb-3">Download here</div>
          </a>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
