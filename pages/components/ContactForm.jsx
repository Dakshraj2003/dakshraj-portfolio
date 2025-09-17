// // (UI + handler that calls /api/contact)

// import React, { useState } from "react";

// export default function ContactForm(){
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(null);

//   const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

//   const submit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setStatus("success");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         setStatus(data?.error || "error");
//       }
//     } catch (err) {
//       setStatus("error");
//     }
//   };

//   return (
//     <section className="section" id="contact">
//       <div className="card-title">Contact</div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <form onSubmit={submit} className="space-y-3">
//           <div>
//             <label className="block small mb-1">Name</label>
//             <input required name="name" value={form.name} onChange={onChange} className="w-full p-2 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]" />
//           </div>
//           <div>
//             <label className="block small mb-1">Email</label>
//             <input required name="email" type="email" value={form.email} onChange={onChange} className="w-full p-2 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]" />
//           </div>
//           <div>
//             <label className="block small mb-1">Message</label>
//             <textarea required name="message" value={form.message} onChange={onChange} rows={5} className="w-full p-2 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]" />
//           </div>
//           <div>
//             <button type="submit" className="px-4 py-2 bg-cyan-400 text-slate-900 rounded-md font-semibold">
//               {status === "loading" ? "Sending..." : "Send Message"}
//             </button>
//           </div>

//           {status === "success" && <p className="text-green-400 small">Message sent — I will get back to you soon.</p>}
//           {status === "error" && <p className="text-red-400 small">Failed to send — try again or use email link below.</p>}
//         </form>

//         <div>
//           <div className="card-title">Other ways to contact</div>
//           <p className="small">Email: <a className="link" href="mailto:dakshrajamnerkar1@gmail.com">dakshrajamnerkar1@gmail.com</a></p>
//           <p className="small mt-2">Phone: +91-7249731976</p>
//           <p className="small mt-2">LinkedIn: <a className="link" href="http://www.linkedin.com/in/dakshraj-amnerkar-623250230" target="_blank" rel="noreferrer">linkedin.com/in/dakshraj-amnerkar-623250230</a></p>
//           <p className="small mt-3">If the contact API isn't configured in environment variables, the form will attempt and fallback to returning an error — use the email link above as a reliable fallback.</p>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data?.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mt-6 px-4">
      <div className="bg-[#161b22] border border-[#1f2937] rounded-lg shadow-lg p-8 md:p-10 max-w-8xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center md:text-left">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full p-3 rounded-md bg-[#1e293b] border border-green-500/20 
                           focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full p-3 rounded-md bg-[#1e293b] border border-green-500/20 
                           focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                className="w-full p-3 rounded-md bg-[#1e293b] border border-green-500/20 
                           focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-slate-900 
                         rounded-md font-semibold shadow-md transition"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm mt-2">
                ✅ Message sent — I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">
                ❌ Failed to send — please try again.
              </p>
            )}
          </form>

          {/* Other ways to contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">
              Other ways to connect
            </h3>
            <p className="text-sm text-gray-300">
              📧 Email:{" "}
              <a
                className="text-green-400 hover:underline"
                href="mailto:dakshrajamnerkar1@gmail.com"
              >
                dakshrajamnerkar1@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-300">📱 Phone: +91-7249731976</p>
            <p className="text-sm text-gray-300">
              🔗 LinkedIn:{" "}
              <a
                className="text-green-400 hover:underline"
                href="http://www.linkedin.com/in/dakshraj-amnerkar-623250230"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/dakshraj-amnerkar-623250230
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-3">
              If the contact form doesn’t work, you can always reach me via{" "}
              <span className="text-green-400">email</span> or{" "}
              <span className="text-green-400">LinkedIn</span> or{" "}
              <span className="text-green-400">Phone Number</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
