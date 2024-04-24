// Menu.js
import React from "react";
import { Card } from "../../components/card";
import { Footer } from "../../components/footer";

//Import Image
import filetMignon from "../../components/assets/images/PlatFiletMignon.png";
import saumon from "../../components/assets/images/PlatSaumons.png";
import vegan from "../../components/assets/images/PlatVegan.png";
import avocat from "../../components/assets/images/EntreeAvocat.png";
import jambon from "../../components/assets/images/entreeJambon.png";
import jacques from "../../components/assets/images/EntreeSaintJacque.png";
import flan from "../../components/assets/images/dessertFlan.png";
import fondant from "../../components/assets/images/DessertFondantChocolat.png";
import creme from "../../components/assets/images/DessertCremeBrule.png";

import "./index.css";

const Menu = () => {
  return (
    <div className="App">
      <div className="Section">
        <h2 className="SectionTitle">Entrées</h2>
        <Card
          cardImage={avocat}
          title="Fraîcheur Avocat"
          content="Laissez-vous tenter par notre 'Fraîcheur Avocat', un début de repas léger et coloré. Des tranches d'avocat mûr et des crevettes assaisonnées se mêlent à une vinaigrette d'agrumes, sur un lit de tomates cerises, concombres, et oignon rouge. Couronné de coriandre fraîche et accompagné d'un quartier de lime, ce plat est une véritable célébration des saveurs marines."
          prix="Prix : 85 €"
          variant="horizontal"
        ></Card>
        <Card
          cardImage={jambon}
          title="Voile de Bœuf Truffé"
          content="Savourez notre 'Voile de Bœuf Truffé', une entrée raffinée composée de fines tranches de bœuf, arrosées d'huile de truffe et agrémentées de copeaux de parmesan, de câpres, et d'une touche de sel de mer et de poivre noir. Accompagné de roquette et de quartiers de citron, ce carpaccio est une invitation à la délicatesse."
          prix="Prix : 110 €"
          variant="horizontal"
        ></Card>
        <Card
          cardImage={jacques}
          title="Éclat des Océans"
          content="Découvrez 'Éclat des Océans', une entrée sophistiquée de Saint-Jacques saisies à perfection, reposant sur une onctueuse purée de chou-fleur. Garni de micro-pousses et d'un filet de sauce au beurre citronné, ce plat combine la douceur des coquillages avec la fraîcheur du citron, servi sur une assiette sombre élégante."
          prix="Prix : 95 €"
          variant="horizontal"
        ></Card>
        {/* Autres cartes "Entrée" ici */}
      </div>
      <div className="Section">
        <h2 className="SectionTitle">Plats</h2>
        <Card
          cardImage={filetMignon}
          title="Délice de Bœuf Raffiné"
          content="Savourez l'excellence culinaire avec notre 'Délice de Bœuf Raffiné'. Ce plat se compose d'un filet mignon parfaitement saisi, accompagné de pommes de terre dorées et d'asperges vertes fraîches. Nappé d'une sauce réduction au vin rouge, chaque bouchée promet une explosion de saveurs."
          prix="Prix : 145 €"
          variant="horizontal"
        ></Card>
        <Card
          cardImage={saumon}
          title="Évasion Marine au Risotto"
          content="Plongez dans un océan de saveurs avec notre 'Évasion Marine au Risotto'. Dégustez un saumon grillé à la peau croustillante, reposant sur un lit de risotto onctueux aux herbes et au parmesan. Rehaussé de citron et d'aneth, ce plat combine fraîcheur et raffinement."
          prix="Prix : 130 €"
          variant="horizontal"
        ></Card>
        <Card
          cardImage={vegan}
          title="Arc-en-Ciel Végétal Grillé"
          content="Découvrez la gourmandise végétale avec notre 'Arc-en-Ciel Végétal Grillé'. Cette assiette colorée offre une variété de légumes grillés, tels que poivrons, courgettes, aubergines et tomates cerises, sublimés par un filet de glaçage balsamique et des feuilles de basilic frais. Un véritable festin pour les yeux et les papilles!"
          prix="Prix : 120 €"
          variant="horizontal"
        ></Card>
      </div>
      <div className="Section">
        <h2 className="SectionTitle">Desserts</h2>
        <Card
          cardImage={fondant}
          title="Volcan Chocolaté"
          content="Notre 'Volcan Chocolaté' offre un cœur coulant de chocolat riche, entouré d'un gâteau au chocolat moelleux. Servi avec une boule de glace à la vanille et des framboises fraîches, ce dessert est la définition même de l'indulgence."
          prix="Prix : 75 €"
          variant="horizontal"
        ></Card>
        <Card
          cardImage={flan}
          title="Délice de Flan au Caramel"
          content="Savourez la douceur intemporelle avec notre 'Délice de Flan au Caramel'. Ce flan classique offre une base de custard soyeuse surmontée d'une couche de caramel tendre. Le contraste entre le caramel ambré légèrement amer et la douceur de la crème rend ce dessert irrésistiblement gourmand. Garni de fleurs comestibles, il allie simplicité et raffinement pour une expérience gustative mémorable."
          prix="Prix : 60 €"
          variant="horizontal"
        ></Card>
        <Card
          cardImage={creme}
          title="Éclat de Brûlée"
          content="'Éclat de Brûlée' est une crème brûlée classique à la texture onctueuse, surmontée d'une couche de sucre caramélisé croquante. Accompagnée de quelques baies fraîches, c'est une fin de repas élégante et intemporelle."
          prix="Prix : 70 €"
          variant="horizontal"
        ></Card>
      </div>
      <Footer label="test"></Footer>
    </div>
  );
};

export default Menu;
