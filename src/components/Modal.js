export default function Modal({ showModal }) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center w-full min-h-screen"
      onClick={showModal}
    >
      <div className="fixed inset-0 bg-black opacity-35"></div>
      <div className="p-0 md:p-6 z-10">
        <div className="w-screen flex justify-center pb-56 md:w-88 md:pb-56 relative z-50">
          <div className="absolute w-fit h-full flex items-center justify-center ">
            <iframe
              title="Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl w-[500px] h-[350px] border-2 border-white"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
