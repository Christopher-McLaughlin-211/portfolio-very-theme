/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';


/**
 * `portfolio-very-development`
 *
 * @demo index.html
 * @element portfolio-very-development
 */
export class PortfolioVeryDevelopment extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-development";
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
        background-color: var(--ddd-theme-default-limestoneLight);
        color: var(--ddd-theme-default-coalyGray);
      }
      img {
        width: 200px;
        height: 200px;
        border-radius: var(--ddd-radius-md);
        margin-top: var(--ddd-spacing-0);
        margin-left: var(--ddd-spacing-30);
      }
      .four {
        background-color: var(--ddd-theme-default-limestoneLight);
        color: var(--ddd-theme-default-coalyGray);
      }
      .four h2 {
        font-size: var(--ddd-font-size-3xs);
        margin-top: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-30);
        margin-right: var(--ddd-spacing-30);
        text-align: right;
      }
      .four p {
        font-size: var(--ddd-font-size-4xs);
        margin-top: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-8);
        margin-left: var(--ddd-spacing-15);
        text-align: left;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <h2>${this.title}</h2>
    <p>Creating tools and projects.</p>
    <img src="https://static.vecteezy.com/system/resources/previews/013/593/769/original/development-line-icon-on-white-background-vector.jpg" class="img-development" />
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

globalThis.customElements.define(PortfolioVeryDevelopment.tag, PortfolioVeryDevelopment);
