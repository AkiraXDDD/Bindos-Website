import { useDraggable } from "./hooks/MouseHook";

function HelpComponent({ onClose }) {

    const initialX= window.innerWidth / 2 - 250;
    const initialY = window.innerHeight / 2 - 100;

    const { position, handleMouseDown } = useDraggable({ x: initialX, y: initialY }, { width: 500, height: 200 });

    return(
        <div className="fixed inset-0 bg-black/30 z-50 font-[tahoma]">
            <div className="absolute bg-blue-800 border border-blue-900 rounded-t-md w-[500px] h-[200px] flex flex-col" style={{ left: position.x, top: position.y }}>
                <div className="bg-gradient-to-b from-blue-600 via-blue-800 to-blue-600 px-4 py-2 rounded-t-md" onMouseDown={handleMouseDown}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="./icon.png" alt="icon" className="w-7 h-7" />
                            <span className="ml-3 text-white text-m font-semibold">Hint</span>
                        </div>
                        <div>
                            <button onClick={onClose}
                            className="rounded-sm bg-red-500 px-2 py-[.6em] border border-white text-[.6em] mr-1 bg-gradient-to-b from-red-800 via-red-500 to-red-800 font-bold text-white cursor-pointer">
                                ╳
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[rgba(236,233,216,255)] flex-1 flex items-center justify-center">
                    <div className="border border-black/20 rounded px-10 py-5 flex items-center justify-between">
                        <img src="./question.png" alt="warning" className="w-7 h-7"/>
                        <span className="ml-2">You can type whatever for username & passsword.</span>
                    </div>
                </div>
                <div className="bg-[rgba(236,233,216,255)] flex items-center justify-center py-3">
                    <button onClick={onClose}
                    className="bg-gray-50 px-8 border rounded cursor-pointer hover:outline-2 hover:border-dotted outline-blue-400">
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
} 

export default HelpComponent;