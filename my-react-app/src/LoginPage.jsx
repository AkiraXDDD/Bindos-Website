
function LoginPage({ password, setPassword, username, setUsername, onLogin, onHelp }) {
  return (
    <div className="bg-[rgba(0,78,152,255)] min-h-screen flex items-center justify-center font-[tahoma]">    
      <div className="bg-blue-800 border-2 border-blue-900 shadow-xl shadow-blue-950 rounded-md w-[600px]">
        <div className="bg-gradient-to-b from-blue-600 via-blue-800 to-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-t-md">
          Log On to Bindos
        </div>
        <img src="/Bindos.png" alt="Banner" className="w-full h-auto"/>
        <div className="bg-[rgba(236,233,216,255)] px-4 py-4 space-y-3">
          <div className="flex items-center">
            <label className="w-24 text-sm text-black">
              Username:
            </label>
            <input 
              className="flex-1 bg-white border border-gray-400 text-sm px-2 py-1 rounded-sm focus:outline-none"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label className="w-24 text-sm text-black ">
              Password:
            </label>
            <input
              className="flex-1 bg-white border border-gray-400 text-sm px-2 py-1 rounded-sm focus:outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-[rgba(236,233,216,255)] px-4 py-2 flex justify-between items-center text-sm rounded-b-md border-b-blue-900">
          <div></div>
          <div className="space-x-2">
            <button 
              className="bg-gray-50 px-8 py-1 border rounded cursor-pointer hover:outline-2 hover:border-dotted outline-blue-400" 
              onClick={onLogin}>
              Log In
            </button>
            <button
              className="bg-gray-50 px-10 py-1 border rounded cursor-pointer hover:outline-2 hover:border-dotted outline-blue-400"
              onClick={onHelp}            
            >
              Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;