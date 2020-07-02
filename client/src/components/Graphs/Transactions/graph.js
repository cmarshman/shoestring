let graphs;
graphs = () => {
// --- Variables + Objects
// ---
    let graphs = { // initialize object with settings
        settings: {
            animation: true,
            autoGenerate: true,
            containerItemSelector: '.graphs-container .data-container div',
            containerSelector: '.graphs-container',
            errorMessages: true,
            heightMultiplicator: 3, // scales in pixel
            widthMultiplicator: 1, // scales in % (percentage)
        },
    };
    graphs.container = { // dependent on settings before they can be set
        list: document.querySelectorAll(graphs.settings.containerSelector),
        items: {
            list: document.querySelectorAll(graphs.settings.containerItemSelector),
        }
    };
// ---
// --- END Variables
    let main = () => {

        let generateHTMLContainers = () => {
            return new Promise((resolve) => { // setting up a PROMISE
                let i = 0;
                for (let container of graphs.container.list) {
                    container.id = 'graph-container-' + i;
                    container.classList.add('content', 'columns', 'is-multiline');

                    if (container.dataset.title.length >= 1) {
                        container.insertAdjacentHTML('afterbegin', `<h2 class="column is-full">${container.dataset.title}</h2>`);
                    }

                    i++;
                    if (i === graphs.container.list.length) {
                        resolve();
                    }
                }
            });
        };
        let generateHTMLItems = () => {
            return new Promise((resolve) => { // setting up a PROMISE

                let i = 0;
                for (let item of graphs.container.items.list) {
                    if (item.dataset.title.length >= 1) {
                        item.insertAdjacentHTML('afterbegin', `<p>${item.dataset.title}</p>`);
                    }

                    if (item.parentElement.classList.contains('columns')) {
                        item.classList.add('column');
                    }

                    if (item.parentElement.classList.contains('is-vertical-graph')) { // Vertical Graphic
                        item.style.width = graphs.settings.widthMultiplicator * item.dataset.value + '%';
                    } else { // Horizontal Graphic
                        item.style.height = graphs.settings.heightMultiplicator * item.dataset.value + 'px';
                    }

                    i++;
                    if (i === graphs.container.items.list.length) {
                        resolve();
                    }
                }
            });
        };
        // let setup = () => {
        //     return new Promise((resolve) => { // setting up a PROMISE
        //         console.log('STUFF HAPPENING');
        //         resolve();
        //     });
        // };
        let generateHues = () => {
            return new Promise((resolve) => { // setting up a PROMISE
                for (let container of graphs.container.list) {
                    let children = container.querySelectorAll('.data-container div');

                    let countItems = children.length;
                    let rotateBase = 0;
                    let rotateFraction = 360 / countItems;

                    for (let item of children) {
                        item.style.filter = `hue-rotate(${rotateBase}deg)`;
                        rotateBase = rotateBase + rotateFraction;
                    }

                }
                resolve();
            });

        };
        let generateWarnings = () => {
            // vertical graph has unlimited items
            // horizontal graph has a max of 12 items to keep it pretty

            return new Promise((resolve) => { // setting up a PROMISE
                if (graphs.settings.errorMessages === true) {

                    for (let container of graphs.container.list) {
                        let isVertical = false;

                        for (let item of container.children) { // check if there is a child with is-vertical-graph class and set variable
                            if (item.classList.contains('is-vertical-graph')) {
                                isVertical = true;
                            }
                        }

                        if (isVertical === false) { // add the notification if there is no vertical class on the container.
                            let children = container.querySelectorAll('.data-container div');
                            let countChildren = children.length;

                            if (countChildren > 12) {
                                container.insertAdjacentHTML('afterend', '<div class="notification has-background-warning"><p>You have more then <strong>12</strong> horizontal graph-items. This will cause viewing-glitches on mobile. <br><span class="is-size-7">(disable warnings in the <strong>graphs.js</strong>-file by setting <strong>errorMessages</strong> to <strong>false</strong>.)</span></p> </h1></div>')
                            }
                        }
                    }
                }
            resolve();
            });
        };

        generateHTMLContainers()
            .then(generateHTMLItems)
            // .then(setup)
            .then(generateHues)
            .then(generateWarnings);

    };
    main();
};
export default graphs();

