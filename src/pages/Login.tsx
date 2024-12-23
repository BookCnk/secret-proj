const Login = () => {
  return (
    <div className="animation min-h-screen bg-gradient-to-b  flex items-center justify-center font-roboto">
      <div className=" rounded-3xl p-8 w-80 shadow-lg loginform">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            กรอกข้อมูลเร็วน้อง ๆ ของพี่บุ๊ค 📚
          </h1>
        </div>
        <form className="space-y-4">
          <div className="flex items-center ">
            {/* <span className="text-gray-500 mr-2">✉️</span> */}
            <input
              className="outline-none  p-2 loginform"
              placeholder="กรอกดิไอ้สัส"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
