const generateRgbColor = () => {
    const r = (Math.floor(Math.random() * 255));
    const g = (Math.floor(Math.random() * 255));
    const b = (Math.floor(Math.random() * 255));
    return  `rgb(${r}, ${g}, ${b})`;
} ;



document.getElementById('container').style.backgroundColor = generateRgbColor();

document.getElementById('color-line').innerText = generateRgbColor();



document.getElementById('copy-btn').addEventListener('click', () => {
    
    const copyBtn = () => {

    const input = document.createElement('input');
    document.body.appendChild(input)
    input.value = document.getElementById('color-line').innerText;

    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    }

    copyBtn ();
    

})



