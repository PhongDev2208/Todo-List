import html from "../core.js";
import { connect } from "../store.js";

function Footer({ filters, filter, todos }) {
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter(filters.active).length}</strong> item left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map(
          (type) =>
            `<li> <a class="${
              type === filter && "selected"
            }" href="#/${type}" onclick="dispatch('SWITCH_FILTER','${type}')">${
              type[0].toUpperCase() + type.slice(1)
            }</a></li>`
        )}
      </ul>
      ${todos.some(filters.completed) && 
      `<button onclick="dispatch('CLEAR_COMPLETED')" class="clear-completed">Clear completed</button>`}
    </footer>
  `;
}

export default connect()(Footer);
