// seleksi button
const button = document.querySelector('.uWarna');
// button.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'skyblue';
// });
// button.addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = 'white';
// });
button.addEventListener('click', function() {
        document.body.classList.toggle('biru-muda');
    });
    const button2 = document.createElement('button');
    const teksButton2 = document.createTextNode('acak warna');
    button2.appendChild(teksButton2);
    document.body.insertBefore(button2, button);
    // document.body.appendChild(button2);

    button2.addEventListener('click', function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = 'rgb('+ r + ', '+ g +','+ b +')';
    });
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    red.addEventListener('change', function(){
        const r = red.value;
        const g = green.value;
        const b = blue.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+b+')';

    });
    green.addEventListener('input', function() {
        const r = red.value;
        const g = green.value;
        const b = blue.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+b+')';

    });
    blue.addEventListener('change', function() {
        const r = red.value;
        const g = green.value;
        const b = blue.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+b+')';

    });

    // document.body.addEventListener('mousemove', function(e) {
    //     // posisi mouse
    //     // console.log(e.clientX);
    //     // ukuran browser
    //     // console.log(window.innerWidth);
    //     const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    //     // console.log(xPos);
    //     const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    //     // console.log(yPos);
    //     const r = xPos;
    //     const g = yPos;
    //     document.body.style.backgroundColor = ' rgb('+r+','+g+',100)';
    // })
