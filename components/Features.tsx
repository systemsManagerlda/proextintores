export const Features = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5">
                Algumas Razões Pelas Quais As Pessoas Nos Escolhem!
              </h1>
              <p className="mb-5">
                Quando o assunto é segurança contra incêndios, a escolha certa
                faz toda a diferença. Na Pro Extintores & Serviços, nos
                destacamos por oferecer soluções completas, confiáveis e
                personalizadas para proteger o que realmente importa: vidas e
                patrimônios. Aqui estão algumas razões para nos escolher:
              </p>
              <div className="d-flex mb-5">
                <div
                  className="flex-shrink-0 btn-square bg-primary rounded-circle"
                  style={{ width: "90px", height: "90px" }}
                >
                  <img
                    className="img-fluid"
                    src="img/icon/icon-08-light.png"
                    alt=""
                  />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">Experiência Comprovada</h5>
                  <span>
                    Com anos de actuação no mercado, acumulamos conhecimento e
                    expertise que nos permitem oferecer os melhores produtos e
                    serviços em prevenção e combate a incêndios.
                  </span>
                </div>
              </div>
              <div className="d-flex mb-5">
                <div
                  className="flex-shrink-0 btn-square bg-primary rounded-circle"
                  style={{ width: "90px", height: "90px" }}
                >
                  <img
                    className="img-fluid"
                    src="img/icon/icon-10-light.png"
                    alt=""
                  />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">Equipamentos de Alta Qualidade</h5>
                  <span>
                    Trabalhamos apenas com equipamentos modernos e certificados,
                    seguindo rigorosos padrões nacionais e internacionais de
                    segurança.
                  </span>
                </div>
              </div>
              <div className="d-flex mb-0">
                <div
                  className="flex-shrink-0 btn-square bg-primary rounded-circle"
                  style={{ width: "90px", height: "90px" }}
                >
                  <img
                    className="img-fluid"
                    src="img/icon/icon-06-light.png"
                    alt=""
                  />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">Equipa Altamente Qualificada</h5>
                  <span>
                    Nossa equipa é composta por profissionais certificados e
                    treinados, comprometidos em atender com excelência e
                    garantir sua total segurança.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                className="position-relative rounded overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/feature.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
