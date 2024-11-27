import Image from "next/image";
export const Footer = () => {
  return (
    <>
      {" "}
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h1 className="text-white mb-4">
                <Image
                  className="img-fluid me-3"
                  src="/img/proExtintoresLogo.png"
                  alt=""
                  height={60}
                  width={60}
                />
              </h1>
              <span>
                Quando o assunto é segurança contra incêndios, a escolha certa
                faz toda a diferença. Na Pro Extintores & Serviços, nos
                destacamos por oferecer soluções completas, confiáveis e
                personalizadas para proteger o que realmente importa: vidas e
                patrimônios.
              </span>
            </div>
            <div className="col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>
                Fique actualizado sobre todas as novidades que temos para si
              </p>
              <div className="position-relative">
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Seu email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Contactos</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Avenida de
                Moçambique, Maputo, Mozambique
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+258 85 524 0453 | 86
                822 9776
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>proextintor.mz@gmail.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Nossos Serviços</h5>
              <a className="btn btn-link" href="">
                Sistemas de Detecção e Alarme
              </a>
              <a className="btn btn-link" href="">
                Venda e Manutenção de Extintores
              </a>
              <a className="btn btn-link" href="">
                Sistemas de Hidrantes e Sprinklers
              </a>
              <a className="btn btn-link" href="">
                Manutenção e Reparo Sistemas de Detecção de Incêndios
              </a>
              <a className="btn btn-link" href="">
                Consultoria e Projectos de Segurança
              </a>
              <a className="btn btn-link" href="">
                Inspeções e Auditorias de Segurança
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Links</h5>
              <a className="btn btn-link" href="">
                Sobre-Nós
              </a>
              <a className="btn btn-link" href="">
                Contactos
              </a>
              <a className="btn btn-link" href="">
                Serviços
              </a>
              <a className="btn btn-link" href="">
                Termos & Condições
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Siga-nos</h5>
              <div className="d-flex">
                <a className="btn btn-square rounded-circle me-1" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square rounded-circle me-1" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square rounded-circle me-1" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square rounded-circle me-1" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a href="#">Pro Extintores & Serviços</a>, Todos os
                direitos reservados.
              </div>
              {/* <div className="col-md-6 text-center text-md-end">
 Designed By <a href="https://htmlcodex.com">HTML Codex</a>  Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
