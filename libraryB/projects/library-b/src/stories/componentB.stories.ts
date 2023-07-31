import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { LibraryAModule } from 'library-a';
import { ComponentBComponent } from '../lib/component-b/component-b.component';

const meta: Meta<ComponentBComponent> = {
  title: 'Example/ComponentBComponent',
  component: ComponentBComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [ComponentBComponent],
      imports: [CommonModule, LibraryAModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ComponentBComponent>;

export const Primary: Story = {
  args: {},
};
