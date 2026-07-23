import Image from "./components/Image";
import numOne from "./assets/num1.png";

export default function App() {
  return (
    <main>
      Hello World!
      <div>
        <Image src={numOne} alt={"number 1"} />
      </div>
    </main>
  );
}
