const Skeletons = () => {
  return (
    <section>
      {Array.from({ length: 5 }, (_v, i) => i).map((v) => (
        <div key={v} className="p-6 shadow-sm rounded-md">
          <div className="h-20 rounded-xl bg-gray-300 animate-pulse"></div>
          <div className="h-4 w-11 rounded-xl mt-2 bg-gray-300 animate-pulse"></div>
          <div className="h-4 w-28 rounded-xl mt-2 bg-gray-300 animate-pulse"></div>
          <div className="h-10 rounded-xl mt-2 bg-gray-300 animate-pulse"></div>
        </div>
      ))}
    </section>
  );
};

export default Skeletons;
