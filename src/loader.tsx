import './loader.css'
  function Loader() {
    return (
      <>
      <div className="loader">
        <div className="bg-background fixed inset-0 bg-cover bg-center fade-in">
          <div className="flex justify-center items-center flex-col pt-11">
            <img
              className="firstLoop bounce2 pt-5 pb-8"
              src="/src/assets/Revendo.png"
            />
            <div className="content pt-11 tablet:text-[32px] laptop:text-[37px]">
              <h2>Revendo</h2>
              <h2>Revendo</h2>
            </div>
          </div>
        </div>  
        </div>
      </>
    );
  }
  
  export default Loader;
  