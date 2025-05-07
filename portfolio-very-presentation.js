/**
 * Copyright 2025 Christopher-McLaughlin-211
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';

/**
 * `portfolio-very-presentation`
 *
 * @demo index.html
 * @element portfolio-very-presentation
 */
export class PortfolioVeryPresentation extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-presentation";
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
        width: 300px;
        height: auto;
        margin-left: var(--ddd-spacing-30);
        margin-top: var(--ddd-spacing-0);
      }
      .three {
        background-color: var(--ddd-theme-default-limestoneGray);
        color: var(--ddd-theme-default-coalyGray);
      }
      .three h2 {
        font-size: var(--ddd-font-size-3xs);
        margin-top: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-30);
        margin-right: var(--ddd-spacing-30);
        text-align: right;
      }
      .three p {
        font-size: var(--ddd-font-size-4xs);
        margin-top: var(--ddd-spacing-20);
        margin-bottom: var(--ddd-spacing-30);
        margin-left: var(--ddd-spacing-30);
        text-align: left;
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

globalThis.customElements.define(PortfolioVeryPresentation.tag, PortfolioVeryPresentation);
