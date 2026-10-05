import style from "./styles.module.css";

export default function RegisterContainer() {
  return (
    <div className="style rcMain text-[0.938rem] ">
      <div className="rcPage bg-white">
        <div className="lcInner mx-5 md:mx-auto md:w-10/12 pt-[1.8125rem] pb-10 md:pr-14">
          <div className="singlePage md:w-[45.9375rem]">
            <div className="pageHeading border-b-[2px] border-[#d1d1d1]">
              <h2 className="text-[#ff2c00] font-light text-4xl leading-tight mb-6">
                Set up your account
              </h2>
            </div>
            <div id="api">
              <form action="#">
                <div className={style.attributeList}>
                  <ul>
                    <li className="verificationControl">
                      <p className="small">
                        To set up an account you will need to confirm your email
                        address:
                      </p>
                      <ul
                        className={`${style.listStyleRedDot} small list-inline`}
                      >
                        <li>
                          Enter your email address and click the Send Code
                          button
                        </li>
                        <li>Check your email to retrieve the Code</li>
                        <li>Enter the code in the Confirmation Code field</li>
                        <li>Click the Confirm Code button</li>
                      </ul>
                      <br />
                      <div className={style.attrEntry}>
                        <ul>
                          <li>
                            <div className={style.attrEntry}>
                              <input
                                id="email"
                                className={`${style.rcInput} ${style.lcControl}`}
                                type="text"
                                placeholder=" "
                                aria-label="Email Address"
                                title="Email address that can be used to contact you."
                                aria-required="true"
                               
                              />
                              <label id="email_label" htmlFor="email">
                                Email Address
                                <span className="input-required-indicator">
                                  *
                                </span>
                              </label>
                            </div>
                          </li>
                          <li className="TextBox my-5">
                            <div className={style.attrEntry}>
                              <input
                                id="newSignInName"
                                className={`${style.rcInput} ${style.lcControl}`}
                                type="text"
                                placeholder=" "
                                aria-label="Username"
                                aria-required="true"
                               
                              />
                              <label
                                id="newSignInName_label"
                                htmlFor="newSignInName"
                              >
                                Username
                                <span className="input-required-indicator">
                                  *
                                </span>
                              </label>
                              <div
                                className="error itemLevel"
                                role="alert"
                              ></div>
                              <span className="hint-message">
                                Minimum 4 characters.
                              </span>
                            </div>
                          </li>

                          <li className="Password my-5">
                            <hr />
                            <h4 className="font-bold text-[#000] text-[1.25rem]">Password</h4>
                            <p className="small">
                              Your password must be between 8 and 64 characters
                              long. It must contain at least three (3) of the
                              below:
                            </p>
                            <ul className={` ${style.listStyleRedDot} small table-list  md:flex md:flex-wrap md:flex-row `}>
                              <li className="order-1 md:basis-2/5">uppercase (A-Z)</li>
                              <li className="order-2 md:basis-2/5">lowercase (a-z)</li>
                              <li className="order-1 md:basis-2/5">numbers (0-9)</li>
                              <li className="order-2 md:basis-2/5">
                                symbols (e.g. #, $, !, @, ^, &amp;, *, etc)
                              </li>
                            </ul>
                            <br />
                            <div className={style.attrEntry}>
                              <input
                                id="newPassword"
                                className={`${style.rcInput} ${style.lcControl}`}
                                type="password"
                                placeholder=" "
                                aria-label="Password"
                                title="Enter new password"
                                aria-required="true"
                                
                              />
                              <label id="newPassword_label" htmlFor="newPassword">
                                Password
                                <span className="input-required-indicator">
                                  *
                                </span>
                              </label>
                              <div
                                className="error itemLevel"
                                role="alert"
                              ></div>
                            </div>
                          </li>

                          <li className="Password my-5">
                            <div className={style.attrEntry}>
                              <input
                                id="reenterPassword"
                                className={`${style.rcInput} ${style.lcControl}`}
                                type="password"
                                placeholder=" "
                                aria-label="Password (again)"
                                pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^<>&amp;*\-_+=[\]{}|\\:',?\/`~&quot;();!]|\.(?!@)){8,64}$"
                                title="Confirm new password"
                                aria-required="true"
                              />
                              <label
                                id="reenterPassword_label"
                                htmlFor="reenterPassword"
                              >
                                Password (again)
                                <span className="input-required-indicator">*</span>
                              </label>
                              <div className="error itemLevel" role="alert"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="buttons block">
                  <button
                    id="continue"
                    type="submit"
                    form="attributeVerification"
                    disabled=""
                    aria-label="Continue"
                    className={`mr-5 bg-[#008022] text-white ${style.rcBtn} primary btn-green btn-icon`}
                  >
                    <section className="flex">
                      <img
                        src="https://config.realme.govt.nz/b2c-ui/images/icons/Tick_Icon_RealMe.png"
                        alt="Confirm code"
                        className={style.lcImgIcon}
                      />
                      <span>Continue</span>
                    </section>
                  </button>
                  <button
                    id="cancel"
                    aria-label="Cancel"
                    formNoValidate=""
                    className="btn btn-red secondary btn-icon"
                    style={{ display: "none" }}
                  >
                    <section>
                      <img
                        src="https://config.realme.govt.nz/b2c-ui/images/icons/Cross_Icon_RealMe.png"
                        alt="Cancel"
                        className="img-icon"
                      />
                      <span>Cancel</span>
                    </section>
                  </button>
                  <button
                    id="cancelReload"
                    aria-label="Cancel"
                    formNoValidate=""
                    className={`bg-[#fbece6] text-[#c43d08] ${style.rcBtn} btn-red secondary btn-icon`}
                
                  >
                    <section className="flex">
                      <img
                        src="https://config.realme.govt.nz/b2c-ui/images/icons/Cross_Icon_RealMe.png"
                        alt="Cancel"
                        className={style.lcImgIcon}
                      />
                      <span>Cancel</span>
                    </section>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
