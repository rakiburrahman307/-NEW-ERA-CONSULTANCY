import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:neweraconsultancy29@gmail.com?subject=Contact%20Us%20Form&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              frameBorder='0'
              title='map'
              marginHeight='0'
              marginWidth='0'
              allowfullscreen=''
              loading='lazy'
              scrolling='no'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.704351530529!2d90.41907396952686!3d23.78951562582138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e910ef609d%3A0x888ecf902098a825!2sShahabuddin%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1723660892658!5m2!1sen!2sbd'
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  ADDRESS
                </h2>
                <p className='mt-1'>
                  Bashati Queensland, 1<sup>st</sup> Floor (B-1) <br />
                  Plot - 10, road - 113/A, Gulshan- 2 Dhaka - 1212, Bangladesh
                </p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  EMAIL
                </h2>
                <a
                  href='mailto:neweraconsultancy29@gmail.com '
                  className='text-red-500 leading-relaxed'
                >
                  neweraconsultancy29@gmail.com
                </a>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>123-456-7890</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
            <h2 className='text-gray-900 text-xl mb-1 font-medium title-font'>
              Get in Touch with Us!
            </h2>
            <p className='leading-relaxed mb-5 lg text-gray-600'>
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you!
            </p>
            <div className='relative mb-4'>
              <label htmlFor='name' className='leading-7 text-sm text-gray-600'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='leading-7 text-sm text-gray-600'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-600'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContactUs;
