import './style.css';

const code = document.createElement('pre');
document.body.appendChild(code);

export const print = (value) =>  {
  const output = JSON.stringify(value, undefined, 2);
  console.log(output);
  code.innerHTML = output;
};
