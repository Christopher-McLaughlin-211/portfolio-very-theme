/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';
import './portfolio-very-research.js';
import './portfolio-very-presentation.js';
import './portfolio-very-development.js';
import './portfolio-very-contact.js';

/**
 * `portfolio-very-theme`
 *
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
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
        background-color: var(--ddd-theme-default-skyLight);
        color: var(--ddd-theme-default-coalyGray);
      }
      img {
        width: 160px;
        height: 160px;
        margin-left: var(--ddd-spacing-30);
        border-radius: var(--ddd-radius-md);
        margin-top: var(--ddd-spacing-0);
      }
      .one {
        background-color: var(--ddd-theme-default-skyLight);
        color: var(--ddd-theme-default-coalyGray);
      }
      .one h1 {
        font-size: var(--ddd-font-size-3xs);
        margin-top: var(--ddd-spacing-0);
        margin-bottom: var(--ddd-spacing-25);
        padding-top: var(--ddd-spacing-0);
      }
      .one h2 {
        font-size: var(--ddd-font-size-3xs);
        margin-top: var(--ddd-spacing-0);
        margin-bottom: var(--ddd-spacing-16);
        margin-right: var(--ddd-font-size-30);
        text-align: right;
      }
      .one p {
        font-size: var(--ddd-font-size-4xs);
        margin-top: var(--ddd-spacing-0);
        margin-bottom: var(--ddd-spacing-3);
        margin-left: var(--ddd-font-size-30);
        text-align: left;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <h2>${this.title}</h2>
    <p>Hello, I'm Christopher McLaughlin! I am a Cyber Security Operations</p>
    <p>and Analytics student at the Pennsylvania State University, Class of 2027.</p>
    <img src="https://img.freepik.com/premium-photo/stick-figure-working-computer_1082141-43504.jpg"/>
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

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);
