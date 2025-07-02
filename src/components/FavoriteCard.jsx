import Card from "./Card";
export default function FavoriteCard(){
  return(
    <>
  <Card image="./images/AssassinsCreedValhalla.webp" title="AssassinsCreedValhalla" rating={8.3} genre="RPG/ACTION" developers="Ubisoft" year={2020} platform="Playstatión/Xbox/PC"/>
  
  <Card image="./images/SpiderManMilesMorales.webp" title="SpiderManMilesMorales" rating={8.5} genre="ACTION/ADVENTURE" developers="Sony" year={2020} platform="Playstatión"/>
  </>
  )
}