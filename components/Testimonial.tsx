export const Testimonial = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px;" }}
          >
            <h1 className="display-6 mb-5">
              O que dizem sobre nossos serviços
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-left h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/team-1.png"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/team-1.png"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/team-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid mx-auto mb-4"
                    src="img/team-1.png"
                    alt=""
                  />
                  <p className="fs-5">
                    A equipa da Pro Extintores foi extremamente profissional e
                    eficiente. Desde o planejamento até a instalação dos
                    sistemas de segurança, tudo foi feito com excelência. Agora
                    me sinto muito mais seguro.
                  </p>
                  <h5>Carlos Mendes</h5>
                  <span>Empresário</span>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid mx-auto mb-4"
                    src="img/team-1.png"
                    alt=""
                  />
                  <p className="fs-5">
                    Contratamos a Pro Extintores para realizar a manutenção de
                    nossos extintores e a sinalização de emergência. Picasso
                    impressionados com a agilidade e a atenção aos detalhes.
                    Recomendo de olhos fechados!
                  </p>
                  <h5>Mariana Silva</h5>
                  <span>Gerente de um edifício comercial</span>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid mx-auto mb-4"
                    src="img/team-1.png"
                    alt=""
                  />
                  <p className="fs-5">
                    Desde o primeiro contacto, fui atendido com muita atenção e
                    clareza. A Pro Extintores realmente entende a importância da
                    segurança e cumpre o que promete.
                  </p>
                  <h5>Renata Oliveira</h5>
                  <span>Cliente Residencial</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-right h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/team-1.png"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/team-1.png"
                  alt=""
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/team-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
