export function renderMultiline(text: string) {
  return text.split("\n").map((line, i) => (<span key={i}>
    {line}
  </span>));
}

export function renderMultilineDouble(text: string) {
  return text.split("\n\n").map((line, i) => (<p key={i}>
    {line}
  </p>));
}
