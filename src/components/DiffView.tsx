import { text1Atom, text2Atom } from "../store";
import { useAtom } from "jotai";

export default function DiffView() {
  const [text1, setText1] = useAtom(text1Atom);
  const [text2, setText2] = useAtom(text2Atom);
  return <>diff</>;
}
