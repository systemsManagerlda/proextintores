export const About = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6 mb-5">
                  Bem-vindo a Pro Extintores & Serviços
                </h1>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 me-3"
                        src="img/icon/icon-07-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Técnicos Especialistas</h5>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 me-3"
                        src="img/icon/icon-09-primary.png"
                        alt=""
                      />
                      <h5 className="mb-0">Serviços de melhor qualidade</h5>
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  Acreditamos que segurança não é apenas uma escolha, mas uma
                  prioridade. Com anos de experiência no sector de prevenção e
                  combate a incêndios, temos o compromisso de proteger vidas,
                  patrimônios e garantir a tranquilidade de nossos clientes.
                </p>
                {/* <div className="border-top mt-4 pt-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                          <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <h5 className="mb-0 text-sm">
                          +258 85 524 0453 | 86 822 9776
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                          <i className="fa fa-envelope text-white"></i>
                        </div>
                        <h5 className="mb-0 text-sm">
                          proextintor.mz@gmail.com
                        </h5>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="img/Produto1.png"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="img/Produto3.png"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="img/Produto4.png"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="img/Produto5.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
