import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e4661b0-90c7-489e-b9f9-89157cbc5d7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult("");
    }
  };
  return (
    <div className='px-32 py-10'>
         <div className='flex flex-col mb-10 items-center'>
            <p className='text-3xl font-bold'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span></p>
            <p className='text-gray-500 w-[290px] text-center mt-3'>Ready to make a move? Lets build your future together</p>
        </div>
        <form onSubmit={onsubmit}>
        <div className='flex gap-8 justify-center'>
            <div className='flex flex-col'>
                <label className='text-md text-gray-800' htmlFor='name'>Your Name</label>
                <input className='border-gray-300 border-2 py-2 px-2 w-sm' type='name' placeholder='Your Name' required/>
            </div>
            <div className='flex flex-col'>
                <label className='text-md text-gray-800' htmlFor='email'>Your Email</label>
                <input className='border-gray-300 border-2 py-2 px-2 w-sm' type='email' placeholder='Your Email' required/>
            </div>
        </div>
        <div className='flex justify-center mt-6'>
        <div className='flex flex-col'>
            <label className='text-md text-gray-800' htmlFor='text'>Message</label>
            <textarea className='w-[800px] h-[200px] border-2 border-gray-300' required></textarea>
        </div>
        </div>
        <div className='flex justify-center mt-5'>
            <button className='bg-blue-500 text-white px-20 py-1.5 rounded-full'>
                {result ? result : 'send message'}
            </button>
        </div>
        </form>
    </div>
  )
}

export default Contact