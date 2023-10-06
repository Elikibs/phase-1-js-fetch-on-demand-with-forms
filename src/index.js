const init = () => {
    const inputForm = document.querySelector('form');

    // Add event listener to the form when you click submit
    inputForm.addEventListener('submit', (event) => {
        // Prevent the form from refreshing or pointing to unintended url. Preventing its default behaviour.
        event.preventDefault();
        // we get the vlaue of the form input 
        const input = event.target.children[1].value

        // Initiating our fetch request
        fetch(`http://localhost:3000/movies/${input}`)
        .then(response => response.json())
        .then(data => {
            updateDOM(data);
            // const title = document.querySelector('section#movieDetails h4');
            // const summary = document.querySelector('section#movieDetails p');

            // title.innerText = data.title;
            // summary.innerText = data.summary;
        })
        inputForm.reset()
    });

    function updateDOM (data){
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
    
        title.innerText = data.title;
        summary.innerText = data.summary;
    }
}

document.addEventListener('DOMContentLoaded', init);