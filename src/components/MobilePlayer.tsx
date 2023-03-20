import { useEffect } from "react";
import { useAudio } from "react-use";

import { useAppDispatch, useAppSelector } from "../hooks/useAppStore";
import { setControls, setPlaying } from "../redux/playerSlice";
import { Icon } from "../utils/Icons";

export default function MobilePlayer() {
  const { current } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  const [audio, state, controls] = useAudio({
    src: current?.src!,
  });

  useEffect(() => {
    dispatch(setControls(controls));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.playing]);

  useEffect(() => {
    controls.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <>
      {current && (
        <div className="flex justify-between items-center bg-[#77776b] p-2 h-14 rounded-md m-2 absolute bottom-full left-0 right-0 z-50">
          {/* Track Info */}
          <div className="flex gap-4">
            <img className="h-10" src={current?.image} alt={current?.title} />
            <div>
              <h6 className="text-xs font-normal line-clamp-1">
                {current?.title}
              </h6>
              <small className="text-gray-400 text-xs">{current?.artist}</small>
            </div>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-6">
            {/* Button: Heart */}
            <button className="h-8 w-8 flex justify-center items-center bg-white rounded-full text-black hover:scale-[1.06] transition ease-in-out delay-75">
              <Icon name="heart" size={16} />
            </button>
            {/* Button: Play/Pause */}
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="h-8 w-8 flex justify-center items-center bg-white rounded-full text-black hover:scale-[1.06] transition ease-in-out delay-75"
            >
              <Icon name={state?.playing ? "pause" : "play"} size={16} />
              {audio}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
