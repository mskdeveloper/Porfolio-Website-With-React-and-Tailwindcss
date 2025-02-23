import React from "react"
import { ABOUT_ME } from "../utils/data"
import { IoMdMail } from "react-icons/io"
import { IoPhonePortrait } from "react-icons/io5"
import { MdOutlineWeb } from "react-icons/md"
import ContactInfoCard from "../components/ContactInfoCard"

const ContactMe = () => {
      return (
            <section id="contact">
                  <div className="container mx-auto p-10">
                        <div className="w-full lg:w-[60vw] mx-auto">
                              <h4 className="section-title">Contact Me</h4>
                              <p className="text-sm text-center mt-4 mb-8 left-6">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorum ut, mollitia
                                    tempore animi quod sint dicta esse
                                    cupiditate doloribus atque quo aliquam in
                                    eum est deleniti aspernatur repellat veniam
                                    ipsum!
                              </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                              <div>
                                    <ContactInfoCard
                                          icon={<IoMdMail />}
                                          text={ABOUT_ME.email}
                                    />
                                    <ContactInfoCard
                                          icon={<IoPhonePortrait />}
                                          text={ABOUT_ME.phone}
                                    />
                                    <ContactInfoCard
                                          icon={<MdOutlineWeb />}
                                          text={ABOUT_ME.website}
                                    />
                              </div>
                              <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
                                    Contact Form
                              </h5>
                              <form className="flex flex-col">
                                    <input
                                          type="text"
                                          name="fullname"
                                          placeholder="Full Name"
                                          id=""
                                          className="input-box"
                                          autoComplete="off"
                                    />
                                    <input
                                          type="text"
                                          name="email"
                                          placeholder="Email"
                                          id=""
                                          className="input-box"
                                          autoComplete="off"
                                    />
                                    <textarea
                                          type="text"
                                          name="message"
                                          placeholder="Message"
                                          rows={3}
                                          id=""
                                          className="input-box"
                                          autoComplete="off"
                                    />
                                    <button className="action-btn btn-scale-anim">
                                          SUNMIT
                                    </button>
                              </form>
                        </div>
                  </div>
            </section>
      )
}

export default ContactMe
