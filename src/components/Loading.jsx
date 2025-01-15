import { BeatLoader } from "react-spinners";

function Loading() {
  return (
    <div className="mt-14 flex h-32 w-full items-end justify-center text-center">
      <BeatLoader color="#fdfdfd" size={25} />
    </div>
  );
}

export default Loading;
