import "./App.css";

function App() {
  return (
    <div className="Newsletter md:w-2/3 w-[90%] m-auto border-2 border-black rounded-lg overflow-hidden">
      <div className="bg-linear-65 from-purple-500 to-pink-500 p-8 text-white ">
        <h1 className="font-bold text-xl">News you can Trust.</h1>
      </div>
      <div className="p-8 text-center">
        <h2 className="font-semibold text-lg">
          Stay up to pdate with the latest!
        </h2>
        <h3 className=" mt-1 mb-4 text-gray-400">
          Subscribe to our Newsletter for the latest news straight into your
          inbox
        </h3>
        <form className="flex flex-col items-center gap-4">
          <input
            className="w-[80%] mx-auto bg-gray-100 p-2 rounded-lg text-center text-sm"
            type="email"
            placeholder="your@email.com"
          />
          <button
            className="w-[80%] mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg transition ease-in-out delay-100 transform hover:-translate-y-1 cursor-pointer"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4">We value your privacy.</p>
      </div>
    </div>
  );
}

export default App;
