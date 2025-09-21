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
          I&apos;m a software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&apos;m focused on building accessible, human-centered products at{" "}
          <span className="relative text-cyan-500 cursor-pointer group">
            Upstatement
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
          </span>
          .
        </p>
      </div>
    </section>
  );
}

export default Overview;
