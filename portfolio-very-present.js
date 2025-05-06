/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';

/**
 * `portfolio-very-present`
 *
 * @demo index.html
 * @element portfolio-very-present
 */
export class PortfolioVeryPresent extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-present";
  }

  constructor() {
    super();
    this.title = "About";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-limestoneGray);
        color: var(--ddd-theme-default-coalyGray);
      }
      img {
        max-width: 150px;
        height: 200px;
        border-radius: var(--ddd-radius-md);
        margin-top: var(--ddd-spacing-4);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <h2>${this.title}</h2>
    <p>simplifying complex cyber topics.</p>
    <img src="https://cdn-icons-png.flaticon.com/512/9094/9094573.png" class="img-presentation" />
    `;
  }


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryPresent.tag, PortfolioVeryPresent);
