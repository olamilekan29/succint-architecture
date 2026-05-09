// import React, { useState } from 'react';

// const Contact = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

  
//   const formEndpoint = "https://formspree.io/f/xojrkbqg";

//   return (
//     <section className="bg-[#0a0a0a] text-[#F4F1EA] py-32 px-6 text-center font-serif">
//       <div className="max-w-4xl mx-auto">
//         <p className="text-[#C15E2E] text-xs tracking-[0.4em] uppercase mb-8">
//           Start a Project
//         </p>
        
//         <h2 className="text-5xl md:text-7xl mb-10 leading-tight italic">
//           Let's build something <br className="hidden md:block" /> 
//           <span className="not-italic">extraordinary together</span>
//         </h2>

//         <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
//           Whether you're planning a private home, a commercial space, 
//           or a large-scale development — ILÉ Studio is ready.
//         </p>

//         <button 
//           onClick={() => setIsModalOpen(true)}
//           className="bg-[#C15E2E] hover:bg-[#A65027] text-white text-xs tracking-[0.2em] px-10 py-5 transition-all duration-300 uppercase font-sans font-bold"
//         >
//           Begin Your Project
//         </button>
//       </div>

//       {/* Responsive Modal Form */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
//           <div className="bg-[#141414] w-full max-w-lg p-8 border border-white/10 relative">
//             <button 
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-4 right-4 text-white/50 hover:text-white"
//             >✕</button>
            
//             <h3 className="text-2xl mb-6 text-left">Project Inquiry</h3>
            
//             <form action={formEndpoint} method="POST" className="flex flex-col gap-4">
//               <input 
//                 type="text" name="name" placeholder="Full Name" required
//                 className="bg-transparent border border-white/20 p-3 text-sm focus:border-[#C15E2E] outline-none"
//               />
//               <input 
//                 type="email" name="email" placeholder="Email Address" required
//                 className="bg-transparent border border-white/20 p-3 text-sm focus:border-[#C15E2E] outline-none"
//               />
//               <textarea 
//                 name="message" rows="4" placeholder="Briefly describe your project..." required
//                 className="bg-transparent border border-white/20 p-3 text-sm focus:border-[#C15E2E] outline-none"
//               />
//               <button 
//                 type="submit"
//                 className="bg-[#C15E2E] py-4 text-xs tracking-widest uppercase font-bold"
//               >
//                 Send Inquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from 'react';

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xojrkbqg", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        // The critical part: Close the modal immediately on success
        setIsOpen(false); 
        alert("Thank you! Your project inquiry has been sent.");
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (err) {
      alert("Submission failed. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0a0a0a] text-[#F4F1EA] py-32 px-6 text-center font-serif">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#C15E2E] text-xs tracking-[0.4em] uppercase mb-8">Start a Project</p>
        <h2 className="text-5xl md:text-7xl mb-10 leading-tight italic">
          Let's build something <br className="hidden md:block" /> 
          <span className="not-italic">extraordinary together</span>
        </h2>
        <p className="text-white/50 text-sm max-w-xl mx-auto mb-12 italic">
          Whether you're planning a private home, a commercial space, 
          or a large-scale development — Succint Architecture is ready.
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#C15E2E] hover:bg-[#A65027] text-white text-xs tracking-[0.2em] px-10 py-5 transition-all uppercase font-bold"
        >
          Begin Your Project
        </button>
      </div>

      {/* Form Popup (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <div className="bg-[#141414] w-full max-w-lg p-10 border border-white/10 relative shadow-2xl">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/30 hover:text-white"
            >✕</button>
            
            <h3 className="text-2xl mb-8 text-left italic">Project Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              <input 
                type="text" name="name" placeholder="Full Name" required
                className="bg-transparent border border-white/10 p-4 text-sm outline-none focus:border-[#C15E2E] transition-colors"
              />
              
              <select 
                name="gender" required
                className="bg-[#141414] border border-white/10 p-4 text-sm outline-none focus:border-[#C15E2E] text-white/50 appearance-none"
              >
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <input 
                type="tel" name="phone" placeholder="Phone Number" required
                className="bg-transparent border border-white/10 p-4 text-sm outline-none focus:border-[#C15E2E]"
              />
              
              <input 
                type="email" name="email" placeholder="Email Address" required
                className="bg-transparent border border-white/10 p-4 text-sm outline-none focus:border-[#C15E2E]"
              />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#C15E2E] py-5 text-xs tracking-widest uppercase font-bold disabled:opacity-50 mt-4 transition-all"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;