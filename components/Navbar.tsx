import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            <Image
              className="img-fluid me-3"
              src="/img/proExtintoresLogo.png"
              alt=""
              height={60}
              width={60}
            />
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
            <a href="#" className="nav-item nav-link active">
              Início
            </a>
            <a href="#" className="nav-item nav-link">
              Sobre-Nós
            </a>
            <a href="#" className="nav-item nav-link">
              Serviços
            </a>
            <a href="#" className="nav-item nav-link">
              Contactos
            </a>
          </div>
          <div className="h-100 d-lg-inline-flex align-items-center d-none">
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href=""
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href=""
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href=""
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-0"
              href=""
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
