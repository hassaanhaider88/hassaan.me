import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactUs = () => {
  const [UName, setUName] = useState("");
  const [UEmail, setUEmail] = useState("");
  const [UMsg, setUMsg] = useState("");
  const [IsShownContact, setIsShownContact] = useState(true);
  const [Loading, setLoading] = useState(false);

  const handleContactForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    var res = await fetch(
      `https://getsrc-be.onrender.com/api/save-email?email=${UEmail}`
    );
    res = await res.json();
    if (!res) {
      alert("Somthing Went Wrong..");
      setUEmail("");
      setUMsg("");
      setUName("");
      return;
    } else {
      alert("Thanks For Your Contacting...");
    }
    setLoading(false);
  };
  return (
    <div
      id="contact"
      className={`relative overflow-x-hidden flex flex-col items-center w-full text-black dark:text-white`}
    >
      <h1
        id="ContectSectionHeading"
        className="py-2 w-fit h-fit font-semibold text-3xl text-center text-nowrap xsm:text-6xl overflow-hidden"
      >
        Contact me
      </h1>
      <div className="py-4 w-[250px] xsm:w-[400px] FormContainer">
        <form onSubmit={handleContactForm}>
          <div className="Input">
            <label className="block font-semibold" htmlFor="Name">
              Name
            </label>
            <input
              value={UName}
              onChange={(e) => setUName(e.target.value)}
              type="text"
              required
              placeholder="Enter Your Name..."
              className="bg-[#230b21] my-2 rounded-lg shadow-lg p-2 w-full font-semibold italic outline-none"
              name=""
              id=""
            />
          </div>
          <div className="mt-3 Input">
            <label className="mb-1 font-semibold" htmlFor="Name">
              Email
            </label>
            <input
              value={UEmail}
              onChange={(e) => setUEmail(e.target.value)}
              type="text"
              placeholder="Enter Your Email..."
              required
              className="bg-[#230b21] my-2 p-2 rounded-lg w-full font-semibold italic outline-none"
              name=""
              id=""
            />
          </div>
          <div className="mt-3 Input">
            <label className="mb-1 font-semibold" htmlFor="Name">
              Message
            </label>
            <textarea
              value={UMsg}
              onChange={(e) => setUMsg(e.target.value)}
              placeholder="Enter Your Message..."
              required
              className="bg-[#230b21] p-2 my-2 rounded-lg w-full h-20 font-semibold text-white italic outline-none resize-none"
            />
            {Loading ? (
              <button className="relative cursor-not-allowed left-1/2 text-black dark:text-white -translate-x-1/2 MyButton">
                Sending...
              </button>
            ) : (
              <button className="relative left-1/2 text-black dark:text-white -translate-x-1/2 MyButton">
                Send Me
              </button>
            )}
          </div>
        </form>
      </div>
      <span className="right-3 md:right-[10%] bottom-0 xsm:bottom-[30%] absolute p-2 w-fit text-[#cd18b3] text-6xl rotate-180">
        <div className="ArrowIcon">
          <FaArrowRightLong />
        </div>
      </span>
    </div>
  );
};

export default ContactUs;