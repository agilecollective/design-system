import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Core/Typography",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Headings: Story = {
  render: () => html`
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  `,
};

export const Body: Story = {
  render: () => html`
    <p>
      This paragraph shows an example of <strong>strong text</strong> and
      <em>emphasised text</em>. The rest of this story will show how multiple
      paragraphs look together.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor
      tortor vitae magna aliquam, nec interdum libero bibendum. Donec lacinia et
      est at tempus. Nullam libero neque, lobortis vitae enim mattis, porttitor
      dapibus purus. Vestibulum sed dolor nec libero convallis sollicitudin in
      sed ligula. Nulla aliquet quam at vehicula dictum.
    </p>
    <p>
      Integer lorem leo, rutrum quis erat in, commodo tincidunt magna. Aenean ut
      libero at dolor tempus porta eget hendrerit mi. Curabitur molestie est id
      libero molestie, vel convallis urna mollis. Etiam ut felis gravida,
      ultrices ante at, bibendum risus.
    </p>
    <p>
      Nulla tempor porta dignissim. Quisque pellentesque nisi a massa aliquet,
      id facilisis sem dapibus. Quisque at diam aliquet, convallis tellus a,
      bibendum justo. Proin in est feugiat, rhoncus sapien eu, suscipit ante.
    </p>
    <p class="iati-dark-background">
      This paragraph shows an example of <strong>strong text</strong> and
      <em>emphasised text</em> against a dark background.
    </p>
  `,
};

export const Links: Story = {
  render: () => html`
    <a href="#">This is a link.</a>
    <p>This is a <a href="#">link</a> within a paragraph.</p>
    <div class="iati-dark-background">
      <a class="light" href="#">This is a link on a dark background.</a>
      <p>
        This is a <a class="light" href="#">link on a dark background</a> within
        a paragraph.
      </p>
    </div>
  `,
};

export const Lists: Story = {
  render: () => html`
    <p>
      This section shows the different types of lists. Below is an unordered
      list:
    </p>
    <ul>
      <li>This is an unordered list.</li>
      <li>It has bulleted items.</li>
      <li>
        <p>Paragraphs within list items shouldn't create extra margins.</p>
      </li>
    </ul>
    <p>Below is an ordered list:</p>
    <ol>
      <li>This is an ordered list.</li>
      <li>It has numbered items.</li>
    </ol>
  `,
};

export const DescriptionLists: Story = {
  render: () => html`
    <dl>
      <dt>Term</dt>
      <dd>Definition</dd>
    </dl>
  `,
};

export const Quotes: Story = {
  render: () => html`
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor
      tortor vitae magna aliquam, nec interdum libero bibendum. Donec lacinia et
      est at tempus. Nullam libero neque, lobortis vitae enim mattis, porttitor
      dapibus purus. Vestibulum sed dolor nec libero convallis sollicitudin in
      sed ligula. Nulla aliquet quam at vehicula dictum.
    </p>
    <blockquote class="iati-quote">
      <p>
        Integer lorem leo, rutrum quis erat in, commodo tincidunt magna. Aenean
        ut libero at dolor tempus porta eget hendrerit mi. Curabitur molestie
        est id libero molestie, vel convallis urna mollis. Etiam ut felis
        gravida, ultrices ante at, bibendum risus.
      </p>
    </blockquote>
    <p>
      Nulla tempor porta dignissim. Quisque pellentesque nisi a massa aliquet,
      id facilisis sem dapibus. Quisque at diam aliquet, convallis tellus a,
      bibendum justo. Proin in est feugiat, rhoncus sapien eu, suscipit ante.
    </p>
  `,
};

export const Code: Story = {
  render: () => html`
    <h3>This heading contains <code>inline code</code>.</h3>
    <p>This paragraph contains <code>inline code</code>.</p>
    <pre>
      <code>
        print("This is a block of code")
      </code>
    </pre>
    <p>
      This paragraph contains a <span class="iati-reference">reference</span> to
      an element in the standard.
    </p>
    <p>
      This paragraph contains a key-binding:
      <kbd class="iati-kbd">Ctrl</kbd> + <kbd class="iati-kbd">C</kbd>
    </p>
    <p>
      Key-bindings can be nested:
      <kbd class="iati-kbd">
        <kbd class="iati-kbd">Ctrl</kbd> + <kbd class="iati-kbd">C</kbd>
      </kbd>
    </p>
  `,
};

export const Table: Story = {
  render: () => html`
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem Ipsum</td>
          <td>Dolor sit amet</td>
          <td>Consectetur adipiscing</td>
        </tr>
        <tr>
          <td>Vivamus luctus</td>
          <td>Tempor incididunt</td>
          <td>Magna aliqua</td>
        </tr>
        <tr>
          <td>Ut enim ad</td>
          <td>Minim veniam</td>
          <td>Quis nostrud exercitation</td>
        </tr>
      </tbody>
    </table>
  `,
};
