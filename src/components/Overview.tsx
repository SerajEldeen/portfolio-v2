import Link from "next/link";

function Overview() {
  return (
    <section className="md:px-40 px-10 py-5">
      <div className="text-cyan-500 mb-2 md:text-lg  text-md">
        <h1>Hi, my name is </h1>
      </div>
      <div className="text-white md:text-6xl text-3xl mb-2">
        <h2>Seraj Eldeen.</h2>
      </div>
      <div className="text-slate-400 md:text-6xl text-3xl mb-2">
        <h3>I build things for the Web.</h3>
      </div>
      <div className="text-slate-500 max-w-lg md:text-2xl text-xl">
        <p>
          I&apos;m a passionate Software Engineer, building modern web
          applications. Currently, I&apos;m an intern at{" "}
          <Link
            href="https://depi.gov.eg/"
            target="_blank"
            rel="noreferrer"
            className="relative text-cyan-500 cursor-pointer group"
          >
            DEPI
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export default Overview;
