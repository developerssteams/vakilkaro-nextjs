import "./Partner.css";
const Partner = () => {
  return (
    <section className="partner-section">

      {/* ===== TOP TEXT ===== */}
      <div className="partner-hero">
        <h3>Meet Premier</h3>
        <h1>Experts in Law & Finance</h1>
        <p>
          Finding the right advisor shouldn't be a challenge. We have hand-selected 10 of the most
          distinguished CA, CS, and Legal professionals to lead our most critical assignments.
        </p>

        <button className="hero-btnn">
          <span className="btn-text">Direct & Fast</span>
          <span className="btn-icon">↗</span>
        </button>

      </div>

      {/* ===== IMAGE AREA ===== */}
      <div className="partner-wrapper">

        <div className="col c1">
         <img src="/partner/Rectangle740.png" className="card big" />
         <img src="/partner/Rectangle741.png" className="card big" />
        </div>

        <div className="col c2">
          <img src="/partner/Rectangle742.png" className="card big" />
          <img src="/partner/Rectangle743.png" className="card big" />
          
        </div>

        <div className="col">
          <img src="/partner/Rectangle744.png" className="card big" />
        </div>
        <div className="col c1">
          <img src="/partner/Rectangle745.png" className="card big" />
        </div>
        <div className="col">
          <img src="/partner/Rectangle746.png" className="card big" />
        </div>

        <div className="col c4">
          <img src="/partner/Rectangle747.png" className="card big" />
          <img src="/partner/Rectangle748.png" className="card big" />
        </div>

        <div className="col c5">
         <img src="/partner/Rectangle749.png" className="card big" />
         <img src="/partner/Rectangle750.png" className="card big" />
         
        </div>

      </div>
    </section>
  );
};

export default Partner;
