import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Header */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-6 fw-bold">Let's test the grid!</h1>
        </div>
      </div>

      {/* Nav Pills */}
      <ul className="nav nav-pills mb-4 ms-3">
        <li className="nav-item"><a className="nav-link active" href="#">Active</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
        <li className="nav-item"><a className="nav-link disabled" href="#">Disabled</a></li>
      </ul>

      {/* Grid */}
      <div className="container mb-5">
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-8 bg-secondary bg-opacity-25 border p-3">First col</div>
          <div className="col-4 bg-secondary bg-opacity-25 border p-3">Second col</div>
        </div>
        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-4 bg-secondary bg-opacity-25 border p-3">col</div>
          <div className="col-4 bg-secondary bg-opacity-25 border p-3">col</div>
          <div className="col-4 bg-secondary bg-opacity-25 border p-3">col</div>
        </div>
        {/* Row 3 */}
        <div className="row">
          <div className="col-3 bg-secondary bg-opacity-25 border p-3">col</div>
          <div className="col-3 bg-secondary bg-opacity-25 border p-3">col</div>
          <div className="col-3 bg-secondary bg-opacity-25 border p-3">col</div>
          <div className="col-3 bg-secondary bg-opacity-25 border p-3">col</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary bg-opacity-25 text-center py-3">
        <h3 className="fw-bold mb-0">Created by ABC!</h3>
      </footer>
    </div>
  );
}

export default App;
