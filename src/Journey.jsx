import TimeList from "./TimeList";

function Journey() {
  return (
    <>
      <section className="Journey">
        <div className="Journey-container">
          <div className="Journer-left">
            <div className="Journer-left__top">
              <div className="Journer-left__top--photo">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9a01/ea96/596ad74c7b536bc3bcb743e63589f0cf?Expires=1681084800&Signature=i8e43~nnbURp7hyHE84Sm3a0SULfgaVaRWjYVq6wTfgks8yrhdap4VUZSrx3YZsz9BXIPF9UiEXVd-40NOoL~g11K57GtdmrHfucso0RMy21ni8C4tcYFhSwC8a13RPavwJw1BTcH-nVrWxu5e9metX-IzCA-dV4g8VCaF5tun45ZKUHTwT7ELLyaQClAYXtORUV7HUDNP8GR3fc1e1Z0UF1NuL3i41si1mPBh7YlZGIWUQ8x4hUpoxNV93pgmgiFG2w~Q7XY8VlQPEOf0GzUbDf6HBfwpynWMNtaIPx~aVfZVQsufxQNbxHNrVZaHSRhPZlI850Rm-oDaIYD249dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="Journer-left__top--text">
                <h3>The resolution, What am I gonna do?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
              </div>
            </div>
            <div className="Journer-left__buttom">
              <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <h5>
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC
              </h5>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>
              <h5>1914 translation by H. Rackham</h5>
              <p>
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone{" "}
              </p>
            </div>
          </div>
          <div className="Journey-right">
            <TimeList></TimeList>
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey;
