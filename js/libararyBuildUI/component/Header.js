import html from "../core.js";

export default function Header() {
    return html`
    <header class="header"> 
        <h1>Todos</h1>
        <input onkeyup="event.keyCode===13 && dispatch('ADD',this.value.trim())" class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
    `
}
