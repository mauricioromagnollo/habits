import { Header } from '../components/header';
import { Hello } from '../styles/pages/home';

export default function Home(): JSX.Element {
  return (
    <>
      <Header title="FullStack Boilerplate" />
      <Hello>Hello World!</Hello>
    </>
  );
}
