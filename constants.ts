import { Review, MenuItem } from './types';

export const RESERVATION_URL = "https://www.covermanager.com/reservation/module_restaurant/restaurante-brasanegra-bodeguita/spanish?source=INSTAGRAM";
export const TRIPADVISOR_URL = "https://www.tripadvisor.es/Restaurant_Review-g608981-d10314208-Reviews-Brasanegra_Bodeguita-Sierra_Nevada_National_Park_Province_of_Granada_Andalucia.html";
export const INSTAGRAM_URL = "https://www.instagram.com/brasanegrasierranevada";

export const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    user: "Carlos M.",
    rating: 5,
    text: "La carne es espectacular, el sabor a brasa es auténtico. El mejor sitio en Sierra Nevada para cenar después de esquiar.",
    date: "Hace 2 días",
    avatar: "https://picsum.photos/50/50?random=1"
  },
  {
    id: 2,
    user: "Elena G.",
    rating: 5,
    text: "Ambiente acogedor y un servicio de 10. La bodega es impresionante. Recomiendo el chuletón de vaca madurada.",
    date: "Hace 1 semana",
    avatar: "https://picsum.photos/50/50?random=2"
  },
  {
    id: 3,
    user: "FoodieTraveler",
    rating: 4,
    text: "Muy buena calidad precio para estar en la estación. Las vistas y la decoración acompañan perfectamente la comida.",
    date: "Hace 2 semanas",
    avatar: "https://picsum.photos/50/50?random=3"
  },
  {
    id: 4,
    user: "Juan Pablo",
    rating: 5,
    text: "Increíble experiencia. La entraña se deshace en la boca. Volveremos seguro el año que viene.",
    date: "Hace 3 semanas",
    avatar: "https://picsum.photos/50/50?random=4"
  },
  {
    id: 5,
    user: "Maria S.",
    rating: 5,
    text: "Un rincón mágico en la nieve. El fuego de la brasa te calienta el alma. Excelente carta de vinos.",
    date: "Hace 1 mes",
    avatar: "https://picsum.photos/50/50?random=5"
  },
    {
    id: 6,
    user: "Roberto D.",
    rating: 5,
    text: "Servicio impecable y comida de primera. El mejor lugar para terminar un día de esquí.",
    date: "Hace 1 mes",
    avatar: "https://picsum.photos/50/50?random=6"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    category: "Entrantes",
    items: [
      { name: "Jamón Ibérico de Bellota", description: "Cortado a cuchillo, con pan de cristal y tomate", price: "24€" },
      { name: "Provolone a la Brasa", description: "Con tomate seco y orégano fresco", price: "14€" },
      { name: "Carpaccio de Buey", description: "Con lascas de parmesano y aceite de trufa", price: "18€" },
      { name: "Verduras a la Parrilla", description: "Selección de temporada con romesco", price: "16€" }
    ]
  },
  {
    category: "Carnes a la Brasa",
    items: [
      { name: "Chuletón de Vaca Madurada (1kg)", description: "45 días de maduración dry-aged", price: "65€" },
      { name: "Entrecot de Ternera", description: "300g de ternera de Ávila", price: "26€" },
      { name: "Solomillo de Buey", description: "Con guarnición de patatas panaderas", price: "28€" },
      { name: "Presa Ibérica", description: "Macerada en hierbas de la sierra", price: "22€" }
    ]
  },
  {
    category: "Postres",
    items: [
      { name: "Tarta de Queso al Horno", description: "Cremosa y casera", price: "8€" },
      { name: "Coulant de Chocolate", description: "Con helado de vainilla bourbon", price: "9€" }
    ]
  }
];
