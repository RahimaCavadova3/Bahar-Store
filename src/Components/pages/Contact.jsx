import React from "react";
import { Outlet } from "react-router";
import ContactSidebar from "../ContactSidebar";

function Contact() {
  return (
    <>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">
        Əlaqə
      </h4>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 mt-5 px-3 ">
        <ContactSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Contact;
