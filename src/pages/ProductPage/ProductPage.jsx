import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { gameTitle } = useParams();

  return <h1>{gameTitle}</h1>;
}
