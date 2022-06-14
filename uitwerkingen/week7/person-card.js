const template = document.createElement('template')
template.innerHTML = `
<style>
    :host { display:block; background-color:white; width:100%; border-radius:5px;}
    div.card { display:flex; padding:4% 6%; }
    img { border-radius:50%; }
    div.content { margin-left:5%; }
    h4 { font-size:1.2rem; }
</style>

<div class="card">
    <div class="image">
        <img>
    </div>
    <div class="content">
        <h4></h4>
        <p></p>
    </div>
</div>
`

class PersonCard extends HTMLElement {
    static get observedAttributes () {
        return ['image','name','address']
    }

    constructor() {
        super()
        this._shadowRoot = this.attachShadow({'mode':'open'})
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.image = this.shadowRoot.querySelector('img')
        this.name = this.shadowRoot.querySelector('h4')
        this.address = this.shadowRoot.querySelector('p')
    }

    attributeChangedCallback (name, oldValue, newValue) {
        switch (name) {
            case 'image':
                this.image.src = newValue
                break
            case 'name':
                this.name.innerHTML = newValue
                break
            case 'address':
                this.address.innerHTML = newValue
                break
        }
    }

}

window.customElements.define('person-card', PersonCard)