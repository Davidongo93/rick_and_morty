import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';

export default function Cards({characters}) {
  const onClose = () => window.alert('Emulamos que se cierra la card');
  return (
    <CardsContainer>
      {characters.map(({id, name,species,gender,image}) => {
        return(
          <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </CardsContainer>
  );
}
