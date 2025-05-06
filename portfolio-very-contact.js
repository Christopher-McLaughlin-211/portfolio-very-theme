/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';


/**
 * `portfolio-very-contact`
 *
 * @demo index.html
 * @element portfolio-very-contact
 */
export class PortfolioVeryContact extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-contact";
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
        background-color: var(--ddd-theme-limestoneMaxLight);
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
    <p>Please contact me @ clm6781</p>
    <img src="https://thumbs.dreamstime.com/b/person-businessman-running-mail-email-envelope-letter-message-hand-vector-cartoon-stick-figure-character-illustration-230733318.jpg?w=768" class="img-contact" />
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

globalThis.customElements.define(PortfolioVeryContact.tag, PortfolioVeryContact);
