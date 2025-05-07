/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';

/**
 * `portfolio-ver-research`
 *
 * @demo index.html
 * @element portfolio-very-research
 */
export class PortfolioVeryResearch extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-research";
  }

  constructor() {
    super();
    this.title = "Research";
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
        background-color: var(--ddd-theme-default-skyMaxLight);
        color: var(--ddd-theme-default-coalyGray);
      }
      img {
        width: 400px;
        height: auto;
        border-radius: var(--ddd-radius-md);
        margin-top: var(--ddd-spacing-4);
        margin-left: var(--ddd-spacing-30);
      }
      .two {
        background-color: var(--ddd-theme-default-skyMaxLight);
        color: var(--ddd-theme-default-coalyGray);
      }
      .two h2 {
        font-size: var(--ddd-font-size-3xs);
        margin-top: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-30);
        margin-right:  var(--ddd-spacing-30);
        text-align: right;
      }
      .two p {
        font-size:  var(--ddd-font-size-4xs);
        margin-top: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-3);
        margin-left: var(--ddd-spacing-15);
        text-align: left;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <h2>${this.title}</h2>
    <p>Exploration of cybersecurity threats and defenses.</p>
    <img src="https://www.engageandprosper.com/wp-content/uploads/2015/01/Productivity-graph-750x637.jpg" alt="Research Image" />
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

globalThis.customElements.define(PortfolioVeryResearch.tag, PortfolioVeryResearch);
