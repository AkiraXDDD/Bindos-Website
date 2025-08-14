

function ProfilePage() {
  return (
    <div className="min-h-screen bg-[url('./background-pixel.png')] bg-center bg-cover flex items-center justify-center font-[tahoma]">
      <div className="fixed bottom-0 left-0 right-0 h-12 flex items-center bg-gradient-to-t from-blue-700 to-blue-400">
        <button
          className="
            relative
            rounded-r-2xl
            h-full
            bg-gradient-to-t
            from-lime-800
            to-lime-500

            bg-[linear-gradient(to_top,rgba(255,255,255,0.6)_5%,_transparent_15%),_radial-gradient(circle_at_left_center,rgba(0,0,0,0.3),_transparent_40%),_radial-gradient(circle_at_right_center,rgba(0,0,0,0.3),_transparent_40%),_linear-gradient(to_top,_#365314,_#84cc16)]
          "
        >
          <div className="flex items-center space-x-2 relative z-10">
            <div className="pl-2">
              <img src="./icon.png" alt="start" className="w-8 h-8" />
            </div>
            <span className="text-white font-bold text-xl italic pr-3">start</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;