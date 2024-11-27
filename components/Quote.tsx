export const Quote = () => {
  return (
    <>
      <div className="container-fluid overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 quote-text"
              data-parallax="scroll"
              data-image-src="img/carousel-1.jpg"
            >
              <div
                className="h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <h1 className="text-white mb-4">
                  Para Singulares e Organizações
                </h1>
                <p className="text-light mb-5">
                  Oferecemos uma ampla gama de serviços projetados para garantir
                  a máxima segurança contra incêndios. Cada solução é
                  desenvolvida sob medida para atender às necessidades de nossos
                  clientes, sempre com qualidade e eficiência.
                </p>
                {/* <a
                  href=""
                  className="align-self-start btn btn-primary py-3 px-5"
                >
                  More Details
                </a> */}
              </div>
            </div>
            <div
              className="col-lg-6 quote-form"
              data-parallax="scroll"
              data-image-src="img/carousel-2.jpg"
            >
              <div
                className="h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="bg-white p-4 p-sm-5">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="gname"
                          placeholder="Gurdian Name"
                        />
                        <label>Nome</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="gmail"
                          placeholder="Gurdian Email"
                        />
                        <label>Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="cname"
                          placeholder="Child Name"
                        />
                        <label>Telemóvel</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="cage"
                          placeholder="Child Age"
                        />
                        <label>Tipo de Serviços/Produtos</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "80px" }}
                        ></textarea>
                        <label>Mensagem</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary py-3 px-5"
                        type="submit"
                      >
                        Obtenha um Orçamento
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
