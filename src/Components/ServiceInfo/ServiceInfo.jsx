import React from "react";
import service from "./ServiceInfoData.js";
import "./ServiceInfo.scss";

function ServiceInfo() {
  return (
    <section>
      <div className="service">
        {service.map((services, idx) => {
          return (
            <div key={idx} className="service-info">
              <i className="service-icon">{services.icon}</i>
              <div className="service-box">
                <h1>{services.title}</h1>
                <h2>{services.subtitle}</h2>
                <p>{services.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceInfo;
