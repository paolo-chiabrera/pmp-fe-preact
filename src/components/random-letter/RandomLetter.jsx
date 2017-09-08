import { h } from 'preact';
import { random } from 'lodash';

const LETTERS = ['P', 'I', 'C', 'M', 'E', 'L', 'A', 'S'];

export default function RandomLetter() {
  const letter = LETTERS[random(LETTERS.length - 1)];

  return <div class="random-letter">{letter}</div>;
}
