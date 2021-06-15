import {toEncode , toDecode , tree} from "./huffman.js"

const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        if(command == 'insertImage'){
            let url = prompt('Enter image link here' , 'http://')
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);
        }

    })
})

const encodeBtn = document.getElementById('encode')
const decodeBtn = document.getElementById('decode')
const text = document.getElementById('text')

encodeBtn.addEventListener('click', () => {
    text.innerHTML = toEncode(text.innerHTML);

} )

decodeBtn.addEventListener('click', () => {
    text.innerHTML = toDecode(tree, text.innerHTML);
    } 
)

// // console.log(container)

    