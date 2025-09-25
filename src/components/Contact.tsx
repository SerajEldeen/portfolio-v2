import Link from "next/link";

function Contact() {
  return (
    <section className="md:px-50 px-15 py-15" id="contact">
      <div className="text-center">
        <h2 className="mb-3 text-cyan-500">What&apos;s Next?</h2>
        <h2 className="text-slate-400 text-3xl mb-3">Get In Touch</h2>
        <p className="text-slate-500 text-xl max-w-[400px] mx-auto">
          my inbox is always open. Whether you have a question or just want to
          say hi, I’ll do my best to get back to you!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link
          href="mailto:serageldeen13@gmail.com"
          className=" mt-6 px-8 py-3 text-sm font-mono text-cyan-400 border border-cyan-400 rounded hover:shadow-3d-cyan transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        >
          Say Hello
        </Link>
      </div>
    </section>
  );
}

export default Contact;
