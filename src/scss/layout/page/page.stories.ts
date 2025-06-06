import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import { Footer } from "../../components/footer/footer.stories";
import { Header } from "../../components/header/header.stories";
import { Notice as MessageNotice } from "../../components/message/message.stories";

const meta: Meta = {
  title: "Layout/Page",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "grey",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Page: Story = {
  render: (args) => html`
    ${Header.render?.call({ ...args })}
    <main class="iati-main">
      ${Breadcrumb.render?.call({ ...args })}
      ${MessageNotice.render?.call({ ...args })}
      <h1>Page heading</h1>
      <p>Page contents</p>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};
