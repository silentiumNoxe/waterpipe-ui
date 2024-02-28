class PipeCard {
    constructor (id,name,namespace,settings) {
        // this.id = id; // options
        this.name = name;
        this.namespace = namespace;
        // this.settings = settings; // options
    }
    render () {
    const pipeDiv = document.createElement("div");
    pipeDiv.classList.add("card");
    pipeDiv.classList.add("frame");

    const pipeTitle = document.createElement("div");
    pipeTitle.classList.add("card-title");
    pipeTitle.classList.add("flex-center-height");
    pipeTitle.classList.add("gap-5");

    const pipeTitleName = document.createElement("h2");
    pipeTitleName.textContent = this.name;

    const pipeVersion = document.createElement("div");
    pipeVersion.classList.add("card-pipe-version");
    pipeVersion.classList.add("flex-center-all");
    pipeVersion.textContent = 'V101'; // options

    const pipeNamespace = document.createElement("div");
    pipeNamespace.classList.add("card-namespace");
    pipeNamespace.textContent = this.namespace;

    const pipeEmail = document.createElement("div");
    pipeEmail.classList.add("card-email");
    pipeEmail.textContent = 'silentium.noxe@gmail.com'; // options

    const pipeControl = document.createElement("div");
    pipeControl.classList.add("card-control");
    pipeControl.classList.add("flex-center-height");
    pipeControl.classList.add("gap-5");
   
    const controlLink = document.createElement("a");
    controlLink.classList.add("link");

    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("height", "25");
    svgElement.setAttribute("width", "25");

    const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
    
    const bookmarkIcon = svgElement.cloneNode();
    const bookmarkIconPath = useElement.cloneNode();
    bookmarkIconPath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "./images/icons.svg#bookmark-icon");
    bookmarkIcon.appendChild(bookmarkIconPath);

    const bookmarkBtn = controlLink.cloneNode();
    bookmarkBtn.setAttribute("href", "#");
    bookmarkBtn.appendChild(bookmarkIcon);

    const downloadIcon = svgElement.cloneNode();
    const downloadIconPath = useElement.cloneNode();
    downloadIconPath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "./images/icons.svg#download-icon");
    downloadIcon.appendChild(downloadIconPath);

    const downloadBtn = controlLink.cloneNode();
    downloadBtn.setAttribute("href", "#");
    downloadBtn.appendChild(downloadIcon);

    const lookIcon = svgElement.cloneNode();
    const lookIconPath = useElement.cloneNode();
    lookIconPath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "./images/icons.svg#eye-icon");
    lookIcon.appendChild(lookIconPath);

    const lookBtn = controlLink.cloneNode();
    lookBtn.setAttribute("href", "#");
    lookBtn.appendChild(lookIcon);

    const branchIcon = svgElement.cloneNode();
    const branchIconPath = useElement.cloneNode();
    branchIconPath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "./images/icons.svg#branch-icon");
    branchIcon.appendChild(branchIconPath);

    const branchBtn = controlLink.cloneNode();
    branchBtn.setAttribute("href", "#");
    branchBtn.appendChild(branchIcon);

    pipeControl.appendChild(bookmarkBtn);
    pipeControl.appendChild(downloadBtn);
    pipeControl.appendChild(lookIcon);
    pipeControl.appendChild(branchBtn);
    
    pipeTitle.appendChild(pipeTitleName);
    pipeTitle.appendChild(pipeVersion);

    pipeDiv.appendChild(pipeTitle);
    pipeDiv.appendChild(pipeNamespace);
    pipeDiv.appendChild(pipeEmail);
    pipeDiv.appendChild(pipeControl);
    
    return pipeDiv;
    }
}