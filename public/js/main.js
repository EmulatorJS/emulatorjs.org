$(document).ready(function() {
    let $button = $.backToTop({
        color: '#00afe4',
        effect: 'fade',
        position: 'bottom right',
        scrollAnimation: 500,
        theme: 'default',
        width: 35,
    });
    $button.resize(50, 50);
});

function translate() {
    try {
        document.getElementById('copyBtn1').addEventListener('click', () => copy('box1'));
        document.getElementById('nextBtn').addEventListener('click', startTranslate);
        document.getElementById('copyBtn3').addEventListener('click', () => copy('box3'));
        fetch('https://cdn.emulatorjs.org/latest/data/localization/en.json')
            .then(response => response.json())
            .then(json => {
                let data1 = '';
                for (let i = 0; i < Object.keys(json).length; i++) {
                    data1 = data1 + "" + Object.keys(json)[i] + '\n';
                }
                data1 = data1.slice(0, -1);
                document.getElementById('box1').value = data1;
            })
            .catch(error => console.error('Error loading en-US.json:', error));
    } catch (e) {
        setTimeout(translate, 100);
    }
}

function startTranslate() {
    const [box1, box2, box3] = ['box1', 'box2', 'box3'].map(id => document.getElementById(id));

    if (![box1.value, box2.value].every(value => value.trim())) {
        return alert('Please fill in both input boxes before proceeding.');
    }

    const data4 = box1.value.split('\n').map(line => line.replace("", '').trim());
    const data5 = box2.value.split('\n').map(line => line.replace("", '').trim());

    if (data4.length !== data5.length) {
        return alert('The number of lines in both boxes must match.');
    }

    const jsonOutput = JSON.stringify(Object.fromEntries(data4.map((key, i) => [key, data5[i]])), null, 4);

    box3.value = jsonOutput;

    navigator.clipboard.writeText(jsonOutput);
    console.log(jsonOutput);
}

function copy(textareaId) {
    let textarea = document.getElementById(textareaId);
    textarea.select();
    document.execCommand('copy');
}
