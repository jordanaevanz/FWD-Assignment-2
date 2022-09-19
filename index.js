const button = document.querySelector('#set-btn');
button.addEventListener('click', () => {
    const colorInput = document.querySelector('#color-element');
    const form = document.querySelector('form');
    const body = document.querySelector('body');
    body.style.backgroundColor = colorInput.value;
    console.log(colorInput.value);

    const replaceHead = document.querySelector('#first-text-input');
    const head1 = document.querySelector('#head1');
    console.log(replaceHead.value);
    head1.innerHTML = replaceHead.value;


    const UserFlav = document.getElementById('flavorChoice');

    const UserFlav1 = document.getElementById('vanilla');
    const UserFlav2 = document.getElementById('chocolate');
    const UserFlav3 = document.getElementById('swirl');

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

    const iceC = document.querySelector('#iceCream');
    const noAnswer = document.querySelector('#none');

    let answer;
    const select = document.querySelectorAll('input[name = "radio-group"]');
    const choice = document.getElementById('FlavorOpt');
    const yesOrNo = document.getElementById('yesOrNo');
    select.forEach((item) => 
    {
        if (item.checked === true)
        {
            answer = item.id;
            console.log(answer);
        }
    });
    if (answer === document.getElementById("yes").id){
        noAnswer.innerHTML = "";
        iceC.innerHTML = "Favorite Ice Cream Flavor";
        choice.style.visibility = "visible";
        // yesOrNo.style.visibility = "hidden";

    }
    else if (answer === document.getElementById("no").id){
        noAnswer.innerHTML = "Bummer";
        choice.style.visibility = "hidden";
        UserFlav.style.visibility = "hidden"
        // yesOrNo.style.visibility = "visible";
    }

// https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript

    if (UserFlav2.checked == true && UserFlav1.checked == false){
        UserFlav.src = "images/chocolate.jpeg";
        UserFlav.style.visibility = "visible";

    }
    else if (UserFlav1.checked == true && UserFlav2.checked == false){

        UserFlav.src = "images/vanilla.jpeg";
        UserFlav.style.visibility = "visible";

    }
    else if (UserFlav1.checked == true && UserFlav2.checked == true){

        UserFlav.src = "images/swirl.jpeg";
        UserFlav.style.visibility = "visible";

    }
});