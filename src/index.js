import './style.css';

const code = document.createElement('div');
document.body.appendChild(code);

export const print = (value) =>  {
  const output = JSON.stringify(value);
  console.log(output);
  code.innerHTML = output;
};
