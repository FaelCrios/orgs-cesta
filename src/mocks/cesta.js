import logo from "../../assets/logo.png";
import bannerImage from "../../assets/topo.png";

import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cesta = {
  top: {
    title: "Detalhes da cesta",
    bannerImage: bannerImage,
  },
  description: {
    VendorLogo: logo,
    productTitle: "Cesta de Verduras",
    vendorName: "Jenny Jack Farm!",
    productDescription:
      "Uma cesta com produtos selecionados, diretamente da fazenda para a sua cozinha :D",
    price: "R$ 41.00",
    button: "Comprar",
  },
  itens: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      },
    ],
  },
};

export default cesta;
