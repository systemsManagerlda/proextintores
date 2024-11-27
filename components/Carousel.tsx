export const Carousel = () => {
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        Segurança em Primeiro Lugar
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Oferecemos soluções completas em prevenção e combate a
                        incêndios com equipamentos de alta qualidade e serviços
                        especializados.
                      </p>
                      {/* <a
                        href=""
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Explore More
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        Extintores Certificados
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Nossos extintores seguem os mais rigorosos padrões de
                        segurança, garantindo a proteção necessária em momentos
                        de emergência.
                      </p>
                      {/* <a
                        href=""
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Explore More
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        Consultoria Especializada
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Nosso time de especialistas auxilia na criação de planos
                        personalizados de combate a incêndios para empresas e
                        residências.
                      </p>
                      {/* <a
                        href=""
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Explore More
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </>
  );
};
