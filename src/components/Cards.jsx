import Card from "./Card";
import style from "./cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.container}>
      {characters.map((char, index) => (
        <Card
          key={index}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        ></Card>
      ))}
    </div>
  );
}
