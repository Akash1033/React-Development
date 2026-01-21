function customRender(reactElement, container){
    // const DOM = document.createElement(reactElement.type)
    // DOM.innerHTML = reactElement.children
    // DOM.setAttribute( 'href' , reactElement.props.href)
    // DOM.setAttribute( 'target' , reactElement.props.target)

    // container.appendChild(DOM)


   const DOM =  document.createElement(reactElement.type)
   DOM.innerHTML = reactElement.props.children
   for (const prop in reactElement.props) {
        if(prop === 'children') continue ;

        DOM.setAttribute(prop , reactElement.props[prop])
    
   }
    container.appendChild(DOM)
}


const reactElement = {
    type : 'a',
    props :{
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click me to visit google"
}


const mainContainer = document.getElementById('root')

customRender(reactElement , mainContainer)