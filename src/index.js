// This is the webpack entrypoint.
import '../style/image_viewer.css';
const button = document.createElement('button');
button.innerText = 'Click me!';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);