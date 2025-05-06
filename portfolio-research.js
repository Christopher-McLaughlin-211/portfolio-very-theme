/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';
import '/.Portfolioresearch.js';

/**
 * `portfolio-research`
 *
 * @demo index.html
 * @element portfolio-research
 */
export class PortfolioResearch extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-research";
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
        max-width: 300px;
        border-radius: var(--ddd-radius-md);
        margin-top: var(--ddd-spacing-4);
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

globalThis.customElements.define(PortfolioResearch.tag, PortfolioResearch);
