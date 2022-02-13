import './style.css';

const code: HTMLElement = document.createElement('div');
document.body.appendChild(code);

export const print = (value: any) =>  {
  const output = JSON.stringify(value);
  console.log(output);
  code.innerHTML = output;
};
