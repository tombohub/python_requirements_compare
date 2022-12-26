import { useAtom } from "jotai";
import { text1Atom, text2Atom } from "../store";
import { compare, listPackages } from "../utils";

export default function Body() {
  const [text1, setText1] = useAtom(text1Atom);
  const [text2, setText2] = useAtom(text2Atom);
  return (
    <>
      <button>Compare!</button>
      {console.log(compare(text1, text2))}
      <textarea
        value={text1}
        onChange={e => setText1(e.target.value)}
        cols={30}
        rows={30}
      />
      <textarea
        value={text2}
        onChange={e => setText2(e.target.value)}
        cols={30}
        rows={30}
      />
    </>
  );
}
