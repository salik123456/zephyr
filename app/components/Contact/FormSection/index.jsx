import React from 'react';

const FormSection = () => {
  return (
    <div className='site-wrapper form-col lg:pt-auto pt-0'>
        <div className='flex flex-col lg:flex-row justify-between'>
      <div className='w-full lg:w-[47%] form-left'>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input type="text" id="name" name="name" className=" w-full border mt-2 border-gray-300 rounded-md p-2 bg-transparent" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" name="email" className="border w-full mt-2 border-gray-300 rounded-md p-2 bg-transparent" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Phone Number:</label>
            <input type="tel" id="phone" name="phone" className="border w-full mt-2 border-gray-300 rounded-md p-2 bg-transparent" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea id="message" name="message" rows="4" className="border w-full mt-2 border-gray-300 rounded-md p-2 bg-transparent"></textarea>
          </div>
          <button type="submit" className="bg-black float-right text-white p-3  rounded-md">Send Message</button>
        </form>
      </div>
      <div className='lg:w-[47%] w-full mt-12 lg:mt-0 form-right rounded-[20px]'>
        {/* Dummy Map */}
        <iframe
          title="dummy-map"
          width="100%"
          height="100%"
          frameBorder="0"
          className='rounded-[20px] map'
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29046.333863403936!2d54.40849225!3d24.492672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67becd78ccdd%3A0xad4befbe23b2d345!2sAl%20Reem%20Island!5e0!3m2!1sen!2sae!4v1706474023813!5m2!1sen!2sae"
          allowFullScreen=""
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default FormSection;
