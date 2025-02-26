// eslint-disable-next-line react/prop-types
function Start({ setPage }) {
  return (
      <>
          <div
              className="bg-gray-800 text-white p-4 h-full w-full border-2 rounded-2xl border-white p-10 space-y-5 justify-center items-center text-center">
              <h1 className="text-2xl ">Hello!</h1>

              <p>Welcome to Jack TFB&#39;s official site! Before you enter take note.</p>
              <p>This site is mainly designed for desktop.
                  I try to make it somewhat mobile friendly, but I can&#39;t promise it all works...</p>
              <p>Because it&#39;s meant to be a personal site, it&#39;s a bit disorganized.
                  If you&#39;re a recruiter, I&#39;ll set up a more professional side of the site eventually.</p>
              <p>
                  On top of that, there may be foul language and other things that may be inappropriate for some
                  viewers.
                  Despite the calm aesthetic of this site, it is intended for mature audiences.
              </p>

              <p>
                  If you&#39;re prepared, enter and enjoy. If not, well...no pressure XD
              </p>

              <img src="/images/JackTFBPFP.png" alt="JackTFBPFP"
                   className="h-30 rounded-full border-white border-2 m-auto"/>
              <div className="contentEnter">
                  <button onClick={() => setPage('home')}>Enter</button>
              </div>
          </div>

          <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center border-t-2 border-t-white">
              <p>Website by Jack TFB | 2025</p>
          </div>
      </>
  );
}

export default Start;