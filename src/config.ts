import './style.css';

const code: HTMLElement = document.createElement('pre');
document.body.appendChild(code);

export const print = (value: any) =>  {
  const output = JSON.stringify(value, undefined, 2);
  console.log(output);
  code.innerHTML = output;
};
